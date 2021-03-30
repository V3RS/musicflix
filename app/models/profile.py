from .db import db
from sqlalchemy.orm import relationship


class Profile(db.Model):

    __tablename__ = 'profiles'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String, nullable=False)
    picture = db.Column(db.String, nullable=False)
    user_id = db.Column(db.Integer, db.ForeignKey('users.id'), nullable=False)
    user = relationship("User", back_populates='reviews')
