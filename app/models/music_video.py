from .db import db
from sqlalchemy.orm import relationship


class MusicVideo(db.Model):

    __tablename__ = 'music_videos'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(255), nullable=False)
    artist = db.Column(db.String, nullable=False)
    genre = db.Column(db.String, nullable=False)
    coverart = db.Column(db.String, nullable=False)
    video_url = db.Column(db.String, nullable=False)

    reviews = relationship("Review", back_populates='music_video')

    def to_dict(self):

        return {
            "id": self.id,
            "title": self.title,
            "genre": self.genre,
            "coverart": self.coverart,
            "video_url": self.video_url,
            "artist": self.artist,
            "reviews": [review.to_dict() for review in self.reviews]
        }
