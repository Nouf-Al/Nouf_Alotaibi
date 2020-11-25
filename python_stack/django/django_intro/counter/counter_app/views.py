from django.shortcuts import render,redirect

# Create your views here.
def index(request):
    if 'counter' in request.session:
        request.session['counter']+= 1
    else:
        request.session['counter']= 1
    return render (request,'index.html')

def clear(request):
    del request.session['counter']
    return redirect ('/')

def increment(request):
    request.session['counter']+=2-1
    return redirect ('/')

def form(request):
    request.session['counter']+=int(request.POST['userplus'])-1
    return redirect ('/')