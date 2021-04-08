from app.models import db, Review


def seed_reviews():

    for i in range(1, 64):
        if i % 2 == 0:
            rev1 = Review(comment="Taylor Swift could have done it better! Shoulda been Taylor. I love Taylor <3!",
                          rating=3, user_id=2, music_video_id=i)
            rev2 = Review(comment="🔥🔥🔥🔥", rating=5,
                          user_id=5, music_video_id=i)
            rev3 = Review(comment="OMG!", rating=3,
                          user_id=4, music_video_id=i)
            rev4 = Review(comment="WOW! AMAZING!", rating=5,
                          user_id=6, music_video_id=i)
            rev5 = Review(comment="This music video is beautiful!",
                          rating=4, user_id=6, music_video_id=i)
            rev6 = Review(comment="Wish I was there!",
                          rating=4, user_id=7, music_video_id=i)
            db.session.add(rev1)
            db.session.add(rev2)
            db.session.add(rev3)
            db.session.add(rev4)
            db.session.add(rev5)
            db.session.add(rev6)
        else:
            rev1 = Review(comment="No way!", rating=5,
                          user_id=8, music_video_id=i)
            rev2 = Review(comment="🔥🔥🔥🔥", rating=5,
                          user_id=6, music_video_id=i)
            rev3 = Review(comment="This is crazy", rating=5,
                          user_id=4, music_video_id=i)
            rev4 = Review(comment="Beautiful production",
                          rating=5, user_id=7, music_video_id=i)
            rev5 = Review(comment="Can't believe this",
                          rating=4, user_id=5, music_video_id=i)
            rev6 = Review(comment="SHEEEEEEEEEEEEESHHHHHHHHHHH!",
                          rating=5, user_id=1, music_video_id=i)
            db.session.add(rev1)
            db.session.add(rev2)
            db.session.add(rev3)
            db.session.add(rev4)
            db.session.add(rev5)
            db.session.add(rev6)
    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_reviews():
    db.session.execute('TRUNCATE reviews;')
    db.session.commit()
