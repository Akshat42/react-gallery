from flask import Flask
import requests

app = Flask(__name__)


@app.route('/search/<string:key>')
def search(key):
    r = requests.get(
        f'https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6d801666dce41cfd316192bf2b9fa82c&tags={key}&format=json&nojsoncallback=1')
    print(r.url)
    return r.json()


if __name__ == '__main__':
    app.run()
