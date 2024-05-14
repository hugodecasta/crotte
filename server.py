from flask import send_from_directory
from flask import Flask, Response, jsonify
import subprocess

# ------------------------------------------- INIT

app = Flask('crotte')

# ------------------------------------------- API SETUP


@app.route('/mon_api/get_message')
def apimessage():
    return jsonify({
        "message": "Hello le WoRlD !!"
    })


@app.route('/mon_api/OS_infos')
def osinfos():
    infos = subprocess.check_output(['cat', '/etc/os-release']).decode('utf8')
    return jsonify({
        "infos_txt": infos
    })

# ------------------------------------------- FRONT SERVING


FRONT_DIR = 'front'


@app.route('/')
def serve_index():
    return send_from_directory(FRONT_DIR, 'index.html')


@app.route('/<path:path>')
def serve_static(path):
    return send_from_directory(FRONT_DIR, path)

# ------------------------------------------- MAIN


if __name__ == '__main__':
    app.run(port=2323)
