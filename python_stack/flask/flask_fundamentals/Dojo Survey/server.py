from flask import Flask,render_template,request,redirect,session
app=Flask(__name__)
app.secret_key = 'tyuiotrewddghjk'

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/info')
def info():
    
    return render_template('result.html')

@app.route('/result', methods=["POST"])
def result():
    print(request.form)
    email=request.form["email"]
    name=request.form["name"]
    city=request.form["city"]
    gender=request.form["gender"]
    vehicle1=request.form.getlist("vehicle1")
    comment =request.form["comment"]
    return render_template('result.html',email=email,name=name,city=city,gender=gender,vehicle1=vehicle1,comment=comment)
    
if __name__ == "__main__":  
    app.run(debug=True) 
