from django.shortcuts import render,redirect
import random
from time import gmtime, strftime

# Create your views here.
def NinjaGold(request):
    if 'gold' not in request.session:
        request.session['gold']=0
        request.session['activity']=[]
    return render(request,'index.html')

def process_money(request):
    if request.POST['which_form'] == 'farm':
        gold=random.randint(10,20)
        # request.session['color'] = 'green'
    if request.POST['which_form'] == 'cave':
        gold=random.randint(5,10)
        # request.session['color'] = 'green'
    if request.POST['which_form'] == 'house':
        gold=random.randint(2,5)
        # request.session['color'] = 'green'
    if request.POST['which_form'] == 'casino':
        gold=random.randint(-50,50)

    request.session['gold']+=gold
    time= strftime("%Y-%m-%d %H:%M %p", gmtime())
    if gold>0:
        request.session['activity'].append(f" Earned {gold} from the {request.POST['which_form']}! ({time})")
        color="text-success"
    else:
        request.session['activity'].append(f" Entered a {request.POST['which_form']} and lost {gold} golds...Ouch... ({time})")
        color="text-danger"


    return redirect('/')