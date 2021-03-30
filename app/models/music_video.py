from .db import db
from sqlalchemy.orm import relationship


class MusicVideo(db.Model):

    __tablename__ = 'music_videos'

    id = db.Column(db.Integer, primary_key=True, nullable=False)
    title = db.Column(db.String(255), nullable=False)
    description = db.Column(db.Text, nullable=False)
    coverart = db.Column(db.String, nullable=False)
    video_url = db.Column(db.String, nullable=False)
    year = db.Column(db.Integer, nullable=False)

    reviews = relationship("Review", back_populates='music_video')

    def to_dict(self):

        return {
            "id": self.id,
            "title": self.title,
            "description": self.description,
            "coverart": self.coverart,
            "video_url": self.video_url,
            "year": self.year,
            "reviews": self.reviews
        }
