from .db import db


List = db.Table('lists',
                db.Column('profile_id', db.Integer,
                          db.ForeignKey('users.id')),
                db.Column('music_video_id', db.Integer,
                          db.ForeignKey('music_videos.id')),
                )
