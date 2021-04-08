from werkzeug.security import generate_password_hash
from app.models import db, User

# Adds a demo user, you can add other users here if you want


def seed_users():

    demo = User(username='Demo', email='demo@demo.com',
                password='password')
    hoose = User(username='Dr.Hoosey', email='drhoosey@hoose.com',
                 password='password123')
    walter = User(username='Walter', email='walter@walter.com',
                  password='password123')
    drake = User(username='Drake', email='drake@drake.com',
                 password='password123')
    post = User(username='Posty', email='post@demo.com',
                password='password123')
    jack = User(username='Jack Black', email='jackblack@demo.com',
                password='password123')
    khalid = User(username='Khalid', email='khalid@demo.com',
                  password='password123')
    polo = User(username='PoloG', email='polog@demo.com',
                password='password123')

    db.session.add(demo)
    db.session.add(hoose)
    db.session.add(walter)
    db.session.add(drake)
    db.session.add(post)
    db.session.add(jack)
    db.session.add(khalid)
    db.session.add(polo)

    db.session.commit()

# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and resets
# the auto incrementing primary key


def undo_users():
    db.session.execute('TRUNCATE users;')
    db.session.commit()
