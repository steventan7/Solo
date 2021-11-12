from management import app
from flask import render_template, redirect, url_for, flash
from management.models import User
from management.forms import RegisterForm, LoginForm
from management import db
from flask_login import login_user

@app.route('/')
@app.route('/home')
def home_page():
    return render_template('home.html')


@app.route("/conversation")
def conversation_page():
    return render_template("conversation.html")


@app.route("/november")
def november_page():
    return render_template("november.html")


@app.route("/december")
def december_page():
    return render_template("december.html")


@app.route("/time")
def time_page():
    return render_template("time.html")


@app.route("/transition")
def transition_page():
    return render_template("transition.html")


@app.route('/register', methods=['GET', 'POST'])
def register_page():
    form = RegisterForm()
    if form.validate_on_submit():
        user_to_create = User(username=form.username.data,
                              email_address=form.email_address.data,
                              password=form.password1.data)
        db.session.add(user_to_create)
        db.session.commit()
        return redirect(url_for('time_page'))
    if form.errors != {}:
        for err_msg in form.errors.values():
            flash(f'There was an error with creating a user: {err_msg}', category='danger')

    return render_template('register.html', form=form)


@app.route('/login', methods=['GET', 'POST'])
def login_page():
    form = LoginForm()
    if form.validate_on_submit():
        attempted_user = User.query.filter_by(username=form.username.data).first()
        if attempted_user and attempted_user.check_password_correction(attempted_password=form.password.data):
            login_user(attempted_user)
            flash(f'Success! You are logged in as {attempted_user.username}', category='success')
            return redirect(url_for('time_page'))
        else:
            flash('Username and password do not match! Please try again!', category='danger')
    return render_template("login.html", form=form)
