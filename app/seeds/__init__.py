from flask.cli import AppGroup
from .users import seed_users, undo_users
from .music_videos import seed_music_videos, undo_music_videos
from .reviews import seed_reviews, undo_reviews

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')

# Creates the `flask seed all` command


@seed_commands.command('all')
def seed():
    seed_users()
    seed_music_videos()
    seed_reviews()
    # Add other seed functions here

# Creates the `flask seed undo` command


@seed_commands.command('undo')
def undo():
    undo_reviews()
    undo_users()
    undo_music_videos()
    # Add other undo functions here
