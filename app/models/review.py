from .db import db
from sqlalchemy.orm import relationship


class Review(db.Model):

    __tablename__ = 'reviews'

    id = db.Column(db.Integer, primary_key=True)
    comment = db.Column(db.Text, nullable=False)
    rating = db.Column(db.Integer)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    music_video_id = db.Column(db.Integer, db.ForeignKey(
        'music_videos.id'), nullable=False)
    user = relationship("User", back_populates='reviews')
    music_video = relationship("MusicVideo", back_populates='reviews')

    def to_dict(self):
        return {
            "id": self.id,
            "comment": self.comment,
            "rating": self.rating,
            "user_id": self.user_id,
            "music_video_id": self.music_video_id,
            "user": self.user.to_dict(),
        }
