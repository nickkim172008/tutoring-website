from flask import Flask, render_template, request

app = Flask(__name__)

import datetime
from datetime import datetime
@app.context_processor
def inject_now():
    return {'now': datetime.now()}

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = request.form.get("name")
        message = request.form.get("message")

        with open("messages.txt", "a") as f:
            f.write(f"{name} said: {message}\n\n")

    return render_template("contact.html")

@app.route("/messages")
def messages():
    try:
        with open("messages.txt", "r") as f:
            content = f.readlines()
    except FileNotFoundError:
        content = []

    return render_template("messages.html", messages=content)

@app.route("/subjects")
def subjects():
    subjects = [
        {"name": "Math", "description": "Algebra, Geometry, Calculus"},
        {"name": "Science", "description": "Biology, Chemistry, Physics"},
        {"name": "English", "description": "Reading, Writing, Grammar"}
    ]
    return render_template("subjects.html", subjects=subjects)

if __name__ == "__main__":
    app.run(debug=True)