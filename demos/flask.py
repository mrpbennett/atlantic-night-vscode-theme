from flask import Flask, render_template

app = Flask(__name__)


@app.route("/")
def hello_world():
    return render_template("index.html")


@app.route("/route_name", methods=["GET", "POST"])
def method_name():
    pass


@app.route("/route_name", methods=["POST"])
def method_name():
    pass


if __name__ == "__main__":
    app.run(host="127.0.0.1", port=5000, debug=True)
