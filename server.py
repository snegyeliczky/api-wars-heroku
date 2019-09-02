from flask import Flask, redirect, render_template, request, session, url_for
import data_handler

app = Flask(__name__)
app.secret_key='$2b$12$yxO3U5wrC1QSvVfL3xrLbu'

@app.route('/')
def open_tables():
    username =None
    if 'username' in session:
        username = session['username']

    return render_template('main_table.html', username=username)


@app.route('/registration', methods=['GET','POST'] )
def registration():
    if request.method == 'GET':
        return render_template('registration.html')
    elif request.method == 'POST':
        username = request.form['username']
        password = request.form['password']
        password2 = request.form['passwordrepeat']
        if password == password2:
            data_handler.writeUser(username,password)
            return redirect("/")
        else:
            error_message = "Try again "
            return render_template('/registration', error_message=error_message)


@app.route('/login', methods=['POST'])
def Login():
        username = request.form["username"]
        text_password = request.form["password"]
        if data_handler.get_user(username):
            hashed_password = data_handler.get_hashed_password(username)
            if data_handler.verify_password(text_password,hashed_password):
                session["username"] = username
                return redirect("/")
            else:
                error_message = "Incorrect Password"
                return render_template("registration.html", error_message=error_message)
        else:
            error_message = "Please Register"
            return render_template("registration.html", error_message=error_message)

@app.route('/logout')
def logout():
    session.pop('username', None)
    return redirect('/')


if __name__ == '__main__':
    app.run(
        host='0.0.0.0',
        port=8002,
        debug=True
    )
