from django.shortcuts import render,redirect
import random 
# Create your views here.
def index(request):
    if 'computer_guess' not in request.session:
        request.session['computer_guess']= random.randint(1,100)
    return render(request,'index.html')



def guess(request):
    request.session['results']=""
    if 'attempt' in request.session:
        request.session['attempt']=request.session['attempt']
    else:
        request.session['attempt']=0
    request.session['user_guess']= request.POST['number']
    user_guess=int(request.session['user_guess'])


    if user_guess == request.session['computer_guess']:
        request.session['results']='was the number!'
        request.session['color']= 'green'
        request.session['attempt']=request.session['attempt']
    if user_guess < request.session['computer_guess']:
        request.session['results']='Too low!'
        request.session['color']= 'red'
        request.session['attempt']+=1
    if user_guess > request.session['computer_guess']:
        request.session['results']='Too high!'
        request.session['color']= 'red'
        request.session['attempt']+=1
    return redirect ('/')

def play_again(request):
    del request.session['results']
    del request.session['user_guess']
    del request.session['computer_guess']
    del request.session['attempt']
    return redirect ('/')