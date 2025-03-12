from flask import Flask, request
import requests
from dotenv import load_dotenv
import os

load_dotenv(dotenv_path="./.env.local")
app = Flask(__name__)

UNSPLASH_URL = "https://api.unsplash.com/photos/random"
UNSPLASH_KEY = os.environ.get("UNSPLASH_KEY","")
DEBUG = bool(os.environ.get("DEBUG",True))

app.config["DEBUG"] = DEBUG

if not UNSPLASH_KEY:
    raise EnvironmentError("Please create an .env.local file and insert the UNSPLASH KEY there")

@app.route("/")
def hello():
    return "Hello"

@app.route("/new-image")
def new_image():
    word = request.args.get("query")

    headers = {
        "Accept-Version": "v1",
        "Authorization": "Client-ID " + UNSPLASH_KEY
    }
    params = {
        "query":word
    }

    response = requests.get(url=UNSPLASH_URL, headers=headers, params=params)
    return response.json()

if __name__ == "__main__":
    app.run(host="0.0.0.0",port=4000)