from flask import Flask , render_template
app = Flask(__name__)

@app.route('/')
def index():
    
    return render_template('index.html',x=8,y=8)

@app.route('/<int:y>')
def indexby4(y):
    return render_template('index.html',x=8,y=y)

@app.route('/<int:y>/<int:x>')
def indexbyXY(y,x):
    return render_template('index.html',x=x,y=y)

@app.route('/<int:y>/<int:x>/<color1>/<color2>')
def indexbyColor(y,x, color1,color2):
    return render_template('index.html',x=x,y=y,color1=color1,color2=color2)

if __name__ == "__main__":  
    app.run(debug=True) 