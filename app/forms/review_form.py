from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField
from wtforms.validators import DataRequired


class ReviewForm(FlaskForm):
    comment = StringField('comment', validators=[DataRequired()])
    rating = IntegerField('rating', validators=[DataRequired()])
    music_video_id = IntegerField(
        'music_video_id', validators=[DataRequired()])
    user_id = IntegerField('user_id', validators=[DataRequired()])
