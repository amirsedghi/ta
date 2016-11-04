from django.shortcuts import render, redirect
from .models import User, Message, Comment
# Create your views here.
def index(request):
    return render(request, 'wall/index.html')

def register(request):
    if request.POST['password']==request.POST['password_confirmation']:
        User.objects.create(first_name = request.POST['first_name'], last_name = request.POST['last_name'], email=request.POST['email'], password = request.POST['password'])
        the_user = User.objects.get(email= request.POST['email'])
        request.session['id'] = the_user.id
        return redirect('/wall')
    else:
        return redirect('/')

def login(request):
    the_user = User.objects.get(email=request.POST['email'])
    if the_user:
        if the_user.password == request.POST['password']:
            request.session['id'] = the_user.id
            return redirect('/wall')
        else:
            return redirect('/')
    else:
        return redirect('/')

def wall(request):
    messages = Message.objects.all
    context = {'messages': messages}
    return render(request, 'wall/wall.html', context)


def message(request):
    the_user = User.objects.get(id=request.session['id'])
    Message.objects.create(message = request.POST['message'], user = the_user)
    return redirect('/wall')

def comment(request, id):
    the_user = User.objects.get(id=request.session['id'])
    the_message = Message.objects.get(id = id)
    Comment.objects.create(comment= request.POST['comment'], user = the_user, message = the_message)
    return redirect('/wall')

def logout(request):
    del request.session['id']
    return redirect('/')
