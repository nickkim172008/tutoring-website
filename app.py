from flask import Flask, render_template, request, redirect, url_for, flash
from datetime import datetime
import os, smtplib
from email.message import EmailMessage

app = Flask(__name__)
app.secret_key = "replace-with-a-secret-key"  # change this in production

@app.context_processor
def inject_now():
    return {"now": datetime.now()}

def send_contact_email(name: str, message: str, reply_to: str | None = None):
    user = os.getenv("MAIL_USERNAME")
    pw = os.getenv("MAIL_APP_PASSWORD")
    if not user or not pw:
        return False, "MAIL_USERNAME or MAIL_APP_PASSWORD not set"

    msg = EmailMessage()
    msg["Subject"] = f"📬 New Tutoring Inquiry from {name}"
    msg["From"] = user
    msg["To"] = "nicholaskim.tutoring@gmail.com"
    if reply_to:
        msg["Reply-To"] = reply_to

    plain_body = (
        f"New tutoring inquiry:\n\n"
        f"Name: {name}\n"
        f"Email: {reply_to or '(none)'}\n\n"
        f"Message:\n{message}\n\n"
        f"Sent at: {datetime.now().isoformat(timespec='seconds')}"
    )
    msg.set_content(plain_body)

    html_body = f"""
    <html>
    <body style="font-family: Arial, sans-serif; color: #111827;">
      <h2 style="color:#4f46e5;">New Tutoring Inquiry 📚</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Email:</strong> {reply_to or '(none provided)'}</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left:4px solid #4f46e5; padding-left:10px; color:#374151;">
        {message.replace('\n', '<br>')}
      </blockquote>
      <p style="font-size: 0.9em; color:#6b7280;">Sent at {datetime.now().strftime('%Y-%m-%d %H:%M:%S')}</p>
    </body>
    </html>
    """
    msg.add_alternative(html_body, subtype="html")

    try:
        with smtplib.SMTP_SSL("smtp.gmail.com", 465, timeout=20) as s:
            s.login(user, pw)
            s.send_message(msg)
        return True, None
    except Exception:
        try:
            with smtplib.SMTP("smtp.gmail.com", 587, timeout=20) as s:
                s.ehlo(); s.starttls(); s.ehlo()
                s.login(user, pw)
                s.send_message(msg)
            return True, None
        except Exception as e_tls:
            return False, f"{type(e_tls).__name__}: {e_tls}"

@app.route("/")
def home():
    return render_template("home.html")

@app.route("/about")
def about():
    return render_template("about.html")

@app.route("/services")
def services():
    return render_template("services.html")

@app.route("/contact", methods=["GET", "POST"])
def contact():
    if request.method == "POST":
        name = (request.form.get("name") or "").strip()
        email = (request.form.get("email") or "").strip()
        message = (request.form.get("message") or "").strip()

        if not name or not message:
            flash("Please enter your name and a message.")
            return redirect(url_for("contact"))

        ok, err = send_contact_email(name=name, message=message, reply_to=email or None)
        if ok:
            return redirect(url_for("thanks"))
        else:
            flash(f"❌ Email failed: {err}")
            return redirect(url_for("contact"))

    return render_template("contact.html")

@app.route("/thanks")
def thanks():
    return render_template("thanks.html")

if __name__ == "__main__":
    app.run(debug=True)
