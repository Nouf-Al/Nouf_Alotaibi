from django.shortcuts import render,redirect
from .models import User,Message,Comment
from log_reg_app.models import User
from django.contrib import messages

# Create your views here.
def wall(request):
    context={
        'all_messages':Message.objects.order_by('-created_at'),
        'all_users':User.objects.all(),
        'all_comments':Comment.objects.all(),

    }
    return render (request,'the_wall.html',context) 

def post_message(request):
    which_user=User.objects.get(id= request.session['id'])
    message=request.POST['message']
    new_post=Message.objects.create(message=message, user_id=which_user)
    mess_id=new_post.id
    return redirect('/wall' )


def post_comment(request,message_id):
    which_user=User.objects.get(id=request.session['id'])
    which_message=Message.objects.get(id= message_id)
    comment=request.POST['comment']
    new_comment=Comment.objects.create(comment= comment, message_id=which_message, user_id=which_user)
    return redirect('/wall')

def deletet_message(request,message_id):
    errors = Comment.objects.basic_validator(message_id)
    if len(errors) > 0:
        for key, value in errors.items():
            messages.error(request, value)
        return redirect('/wall')
    else:
        which_message=Message.objects.get(id= message_id)
        which_message.delete()
        messages.success(request, "Message successfully deleted")
        return redirect('/wall')
    