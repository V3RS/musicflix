from flask import Blueprint, jsonify, request
from flask_login import login_required
from app.models import Review, db, MusicVideo
from sqlalchemy import select
from app.forms import ReviewForm

review_routes = Blueprint('reviews', __name__)


@review_routes.route('/post', methods=['POST'])
def post_review():
    form = ReviewForm()

    new_review = Review(
        comment=form.data['comment'],
        rating=form.data['rating'],
        music_video_id=form.data['music_video_id'],
        user_id=form.data['user_id']
    )
    db.session.add(new_review)
    db.session.commit()

    mv = MusicVideo.query.get(form.data['music_video_id'])
    # seperate function to grab with reviews
    mv = mv.to_dict_with_revs()

    return {"reviews": mv["reviews"]}


@review_routes.route('/delete', methods=['DELETE'])
def delete_review():
    data = request.json
    review = Review.query.get(data["id"])
    db.session.delete(review)
    db.session.commit()
    mv = MusicVideo.query.get(data["mv_id"])
    mv = mv.to_dict_with_revs()
    return {"reviews": mv["reviews"]}


@review_routes.route('/edit', methods=['PUT'])
def edit_review():
    data = request.json
    review = Review.query.get(data["id"])
    review.rating = data["rating"]
    review.comment = data["comment"]
    db.session.commit()
    mv = MusicVideo.query.get(data["mv_id"])
    mv = mv.to_dict_with_revs()
    return {"reviews": mv["reviews"]}
