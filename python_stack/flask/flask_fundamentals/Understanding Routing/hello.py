from flask import Flask 
app = Flask(__name__)

@app.route("/")
def hello():
    return "Hello"

@app.route('/dojo')
def hello_dojo():
    return "Dojo!"

@app.route('/say/<name>')
def hi(name):
    return "Hi "+name.capitalize()

@app.route('/repeat/<int:num>/<word>')
def repeat(num,word):
    return (word+" ") * int(num)

if __name__=="__main__":   
    app.run(debug=True)    