from flask import Flask, Response, render_template, request, redirect, url_for, flash

import qrcode
import datetime
import os

from io import BytesIO


app = Flask(__name__)

voter=None
aadhaar=None
class Aadhaar:
    def __init__(self, aadhaar_no, name, age,gender,address, phone):
        self.aadhaar_no = aadhaar_no
        self.name = name
        self.address = address
        self.phone = phone
        self.age=age
        self.gender=gender


class Voter:
    def __init__(self, name, age,gender,voter_id):
        self.voter_id = voter_id
        self.name = name
        self.age = age
        self.gender=gender

@app.route('/')
def index():
    return render_template('index.html')


voter = None

# Define the voter route
@app.route('/voter', methods=['GET', 'POST'])
def voter():
    global voter
    if request.method == 'POST':
        name = request.form['name']
        age = request.form['age']
        gender = request.form['gender']
        voter_id = request.form['voter_id']
        voter = Voter(name=name, age=age, gender=gender, voter_id=voter_id)
        return render_template("generate.html")
    else:
        return render_template('voter.html')

# Define the generate QR code route
@app.route('/generateqr', methods=['GET', 'POST'])
def generateqr():
    global voter
    if request.method == 'POST':
        name = voter.name
        status=True
        voterid=voter.voter_id
        timestamp = datetime.datetime.now().strftime('%Y%m%d%H%M%S')
        unique_code = os.urandom(4).hex() # Generate a 4-byte (8 character) hexadecimal string
        data = f"Name: {name}\nUnique Code: {unique_code}\nVoted: {status}\nVoter ID : {voterid}\nVoted for the Election\nThe QR code is generated at {timestamp}"
        img = qrcode.make(data)

        # Save QR code image to a BytesIO buffer
        buffer = BytesIO()
        img.save(buffer, format='PNG')
        buffer.seek(0)

        # Return the image as a response with content-type set to image/png
        return Response(buffer.getvalue(), content_type='image/png')
    else:
        return render_template('generate.html')


if __name__ == '__main__':
    # db.create_all()
    app.run(debug=True)
