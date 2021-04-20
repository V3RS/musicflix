
from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import User, MusicVideo, db

list_routes = Blueprint('list', __name__)


@list_routes.route('/get/<int:user_id>')
def get_list(user_id):
    user_list = User.query.get(user_id).music_video.all()
    return {"list": [mv.to_dict() for mv in user_list]}


@list_routes.route('/post', methods=['POST'])
def post_list():
    data = request.json
    music_video_id = data["music_video_id"]
    user_id = data["user_id"]
    user = User.query.get(user_id)
    mv = MusicVideo.query.get(music_video_id)
    user.music_video.append(mv)
    mv.user.append(user)
    db.session.commit()

    user_list = User.query.get(user_id).music_video.all()

    return {"list": [mv.to_dict() for mv in user_list]}


@list_routes.route("/delete", methods=["DELETE"])
def delete_list():
    data = request.json
    music_video_id = data["music_video_id"]
    user_id = data["user_id"]
    user = User.query.get(user_id)
    mv = MusicVideo.query.get(music_video_id)
    user.music_video.remove(mv)
    mv.user.remove(user)
    db.session.commit()

    user_list = User.query.get(user_id).music_video.all()

    return {"list": [mv.to_dict() for mv in user_list]}
