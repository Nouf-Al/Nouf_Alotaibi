from flask import Flask,render_template,request,redirect,session
app=Flask(__name__)
app.secret_key = 'tyuiotrewddghjk'


@app.route('/')
def index():  
    if 'counter' in session:
        session['counter']=session['counter']+1
    else:
        session['counter']=1
    return render_template('index.html')
    

@app.route('/destroy_session', methods=["POST"])
def destroy_session():
    session.pop('counter')	
    return redirect('/')


@app.route('/increment', methods=["POST"])
def increment():
    session['counter']=session['counter']+1
    return redirect('/')

@app.route('/user', methods=["POST"])
def user():
    session['userplus']=request.form['userplus']
    session['counter']=session['counter']+int(session['userplus'])-1
    return redirect('/')
    
if __name__ == "__main__":  
    app.run(debug=True) 