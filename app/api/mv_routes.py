from flask import Blueprint, jsonify
from app.models import MusicVideo

mv_routes = Blueprint('music_videos', __name__)


@mv_routes.route('/')
def get_mvs():
    all = MusicVideo.query.all()
    pop = MusicVideo.query.filter_by(genre="Pop").all()
    rap = MusicVideo.query.filter_by(genre="Rap").all()
    rock = MusicVideo.query.filter_by(genre="Rock").all()
    all = [mv.to_dict() for mv in all]
    pop = [mv.to_dict() for mv in pop]
    rap = [mv.to_dict() for mv in rap]
    rock = [mv.to_dict() for mv in rock]
    data = dict()
    data["all"] = all
    data["pop"] = pop
    data["rap"] = rap
    data["rock"] = rock
    return data


@mv_routes.route('/<int:id>')
def get_mv(id):
    mv = MusicVideo.query.get(id)
    return mv.to_dict()
