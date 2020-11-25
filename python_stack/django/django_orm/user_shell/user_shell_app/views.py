from django.shortcuts import render,redirect
from .models import Users

# Create your views here.
def index(request):
    context = {
    	"all_users": Users.objects.all()
    }
    return render (request,'index.html',context)

def add_user(request):
    first_name = request.POST['first_name']
    last_name = request.POST['last_name']
    email = request.POST['email']
    age = request.POST['age']

    new_user= Users.objects.create(first_name=first_name,last_name=last_name,
    email=email,age=age)
    new_user.save()
    return redirect ('/')