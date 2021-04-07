from flask import Blueprint, jsonify, request
from app.models import MusicVideo
import random

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
    trending = list()
    for i in range(21):
        trending.append(all[random.randrange(64)])
        print(i)
    data["all"] = all
    data["pop"] = pop
    data["rap"] = rap
    data["rock"] = rock
    data["trending"] = trending
    return data


@mv_routes.route('/<int:id>')
def get_mv(id):
    mv = MusicVideo.query.get(id)
    return mv.to_dict()


@mv_routes.route('/search', methods=['POST'])
def get_mvs_search():
    search_str = request.data.decode("UTF-8")
    mvs = list()

    mvs_search_title = MusicVideo.query.filter(
        MusicVideo.title.ilike(f"%{search_str}%"))
    mvs_search_artist = MusicVideo.query.filter(
        MusicVideo.artist.ilike(f"%{search_str}%"))
    mvs_search_genre = MusicVideo.query.filter(
        MusicVideo.genre.ilike(f"%{search_str}%"))

    mvs_search_title = [mv.to_dict() for mv in mvs_search_title]
    mvs_search_artist = [mv.to_dict() for mv in mvs_search_artist]
    mvs_search_genre = [mv.to_dict() for mv in mvs_search_genre]

    mvs.extend(mvs_search_title)
    mvs.extend(mvs_search_artist)
    mvs.extend(mvs_search_genre)

    # The for loop below is to remove any duplicate mvs for search functionality
    return_mvs = list()
    for mv in mvs:
        if mv not in return_mvs:
            return_mvs.append(mv)
    return {"search_mvs": return_mvs}
