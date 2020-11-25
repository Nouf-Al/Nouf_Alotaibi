from django.shortcuts import render,redirect,HttpResponse
from .models import User
import bcrypt
from django.contrib import messages

# Create your views here.
def view_login_reg(request):
    return render(request,'login_reg.html')


def check_login_reg(request):
    if request.method == "POST":
        if request.POST['which_form']=="login":
            errors = User.objects.login_validator(request.POST)
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                return redirect('/')
            else:
                user = User.objects.filter(email=request.POST['email'])
                if user: 
                    logged_user = user[0] 
                    # assuming we only have one user with this username, the user would be first in the list we get back
                    # of course, we should have some logic to prevent duplicates of usernames when we create users
                    # use bcrypt's check_password_hash method, passing the hash from our database and the password from the form
                    if bcrypt.checkpw(request.POST['password'].encode(), logged_user.password.encode()):
                        request.session['first_name'] = logged_user.first_name
                        request.session['last_name'] = logged_user.last_name
                        request.session['id'] = logged_user.id
                        return redirect('/wall')
                    else:
                        return HttpResponse('Email or password not correct!')
                else:
                    return HttpResponse("Email doesn't exist!")

        else:
            errors = User.objects.basic_validator(request.POST)
            if len(errors) > 0:
                for key, value in errors.items():
                    messages.error(request, value)
                return redirect('/')
            else:
                first_name = request.POST['first_name']
                last_name = request.POST['last_name']
                bod = request.POST['bod']
                email = request.POST['email']
                password = request.POST['password']
                pw_hash = bcrypt.hashpw(password.encode(), bcrypt.gensalt()).decode()
                user=User.objects.create(first_name=first_name, last_name=last_name,bod=bod, email=email, password=pw_hash)
                messages.success(request, "User successfully registered")
                request.session['first_name'] = user.first_name
                request.session['last_name'] = user.last_name
                request.session['id'] = user.id
                return redirect('/wall')


def result(request):
    if 'id' in request.session:
        return redirect('/wall')
    else:
        return redirect('/')

def logout(request):
    del request.session['first_name']
    del request.session['last_name']
    del request.session['id']
    return redirect('/')






            