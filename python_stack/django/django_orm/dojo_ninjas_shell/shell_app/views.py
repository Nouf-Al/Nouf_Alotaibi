from django.shortcuts import render,redirect
from .models import Dojo,Ninja

# Create your views here.
def index(request):
    context = {
    	"all_dojos": Dojo.objects.all(),
        "all_ninjas": Ninja.objects.all()

    }
    return render (request,'index.html',context)

def add_user(request):
    if request.POST['which_form']== 'ninja_form':
        first_name = request.POST['first_name']
        last_name = request.POST['last_name']
        dojos = request.POST['dojos']
        which_dojo= Dojo.objects.get(name=dojos)
        new_ninja= Ninja.objects.create(first_name=first_name,last_name=last_name,
        dojo_id=which_dojo)
        new_ninja.save()
    else:
        name = request.POST['name']
        city = request.POST['city']
        state = request.POST['state']
        new_dojo= Dojo.objects.create(name=name,city=city,
        state=state)
        new_dojo.save()
    return redirect ('/')

def delete_dojo(request,id):
    dojo=Dojo.objects.get(id=id)
    dojo.delete()
    return redirect ('/')