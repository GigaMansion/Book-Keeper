from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, BooleanField, SubmitField
from wtforms import TextAreaField, FloatField, DecimalField, DateField
from wtforms.validators import ValidationError, DataRequired, Email, EqualTo, Length

from book_keeping_backend_package.models import User

class LoginForm(FlaskForm):

    username = StringField('Username', validators=[DataRequired()])

    password = PasswordField('Password', validators=[DataRequired()])

    remember_me = BooleanField('Remember Me')
    
    submit = SubmitField('Sign In')


class RegistrationForm(FlaskForm):

    username = StringField('Username', validators=[DataRequired()])

    email = StringField('Email', validators=[DataRequired(), Email()])

    password = PasswordField('Password', validators=[DataRequired()])

    password2 = PasswordField(
        'Repeat Password', validators=[DataRequired(), EqualTo('password')])
    
    submit = SubmitField('Register')

    def validate_username(self, username):

        user = User.query.filter_by(username=username.data).first()

        if user is not None:

            raise ValidationError('Please use a different username.')

    def validate_email(self, email):

        user = User.query.filter_by(email=email.data).first()

        if user is not None:
            
            raise ValidationError('Please use a different email address.')


class EditProfileForm(FlaskForm):

    username = StringField('Username', validators=[DataRequired()])

    about_me = TextAreaField('About me', validators=[Length(min=0, max=140)])

    submit = SubmitField('Submit')

    def __init__(self, original_username, *args, **kwargs):

        super(EditProfileForm, self).__init__(*args, **kwargs)

        self.original_username = original_username

    def validate_username(self, username):

        if username.data != self.original_username:

            user = User.query.filter_by(username=self.username.data).first()

            if user is not None:
                
                raise ValidationError('Please use a different username.')


class NewReimburseForm(FlaskForm):

    product_name = StringField('Product Name', validators=[DataRequired()])

    classification = StringField('Classification', validators=[DataRequired()])

    american_website_link = StringField('American Website Link', validators=[DataRequired()])

    item_website_link = StringField('Item Website Link', validators=[DataRequired()])

    price = FloatField('Price', validators=[DataRequired()])

    quantity = DecimalField('Quantity', validators=[DataRequired()])

    delivery = FloatField('Delivery', validators=[DataRequired()])

    date_needed = DateField('Date Needed', validators=[DataRequired()])

    reason_to_purchase = StringField('Reason to Purchase', validators=[DataRequired()])

    recipient_photo_url = StringField('Recipient Photo', validators=[DataRequired()])

    