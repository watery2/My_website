from flask import Flask, redirect, url_for, render_template, request, session

app = Flask(__name__)
app.secret_key = "fz47"

@app.route("/", methods=['GET', 'POST'])
def home():
    if request.method == "POST":
        email = request.form["email"]
        msg = request.form["Message"]
        return redirect(url_for("sent"))
    return render_template("home.html")

@app.route("/sent")
def sent():
    return render_template("sent.html")
if __name__ == "__main__":
    app.run(debug=True)