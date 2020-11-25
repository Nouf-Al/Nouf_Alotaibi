from flask import Flask , render_template, request, redirect, session
import random
app = Flask(__name__)
app.secret_key = 'dcfvgbhjkml'


@app.route('/')
def index():
    session['choices']=['Rock','Paper','Scissor']
    if ('results' not in session):
        session['results']={'Win':0 , 'Loss': 0 , 'Tie':0}
    return render_template("index.html")

@app.route('/go', methods=['POST'])
def dropdown():
    session['droplist'] = request.form["game"]
    session['computer_choice']=random.choice(session['choices'])
    session['winOrLossOrTie']=''
    if 'results' in session:
        if session['droplist']==session['computer_choice']:
            session['results']['Tie']+=1
            session['winOrLossOrTie']="It's a Tie"
        elif session['droplist']== 'Rock' and session['computer_choice']== 'Paper': 
            session['results']['Loss']+=1
            session['winOrLossOrTie']="You Loss"
        elif session['droplist']== 'Rock' and session['computer_choice']== 'Scissor': 
            session['results']['Win']+=1
            session['winOrLossOrTie']="You Won"
        elif session['droplist']== 'Paper' and session['computer_choice']== 'Rock': 
            session['results']['Win']+=1
            session['winOrLossOrTie']="You Won"
        elif session['droplist']== 'Paper' and session['computer_choice']== 'Scissor': 
            session['results']['Loss']+=1
            session['winOrLossOrTie']="You Loss"
        elif session['droplist']== 'Scissor' and session['computer_choice']== 'Rock': 
            session['results']['Loss']+=1
            session['winOrLossOrTie']="You Loss"
        elif session['droplist']== 'Scissor' and session['computer_choice']== 'Paper': 
            session['results']['Win']+=1
            session['winOrLossOrTie']="You Won"
    return redirect('/' )

@app.route('/reset', methods=['POST'])
def reset():
    if 'droplist' in session:
        session.clear()
    return redirect('/' )

if __name__ == "__main__":  
    app.run(debug=True) 
