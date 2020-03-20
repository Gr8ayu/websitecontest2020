from django.shortcuts import render
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate,logout
from django.http import HttpResponse
from django.core import serializers
from .models import Posts
from django.utils import timezone
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User

# Create your views here.


@csrf_exempt
def login_api(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            # sess =login(request, user)
            data = serializers.serialize("json", [user,])
            # sess = user.get_session_auth_hash()
            # print(user.__dict__)
            # print(sess)
            # result = request.COOKIES.get('sessionid','') 
            # session = Session.objects.get(session_key=sess)
            # uid = session.get_decoded().get('_auth_user_id')
            # user = User.objects.get(pk=uid)
            # print(usersess)

            # sess = serializers.serialize("json", sess)
            # print(sess)
            return HttpResponse(data, content_type="application/json")
            
        else:
            return HttpResponse("NO USER")
    else:
        #user_form = loginForm(instance=request.user)
        return redirect('/login')

def loginView(request):
    return HttpResponse("LOGIN PAGE")

@csrf_exempt
def addPost_api(request):
    if request.method == 'POST':
        print("_________REQUEST________________")
        print(request.__dict__)
        print("_______________________________")
        

        post_type = request.POST['type']
        post_title = request.POST['title']
        post_content = request.POST['content']

        post =  Posts()
        
        # sess = request.COOKIES.get('sessionid','') 
        # session = Session.objects.get(session_key=sess)
        # uid = session.get_decoded().get('_auth_user_id')
        user = User.objects.get(pk=1)

        print(">>>",request.user,"<<<")
        post.type = post_type
        post.title = post_title
        post.content = post_content

        post.author = user
        post.publish = True
        post.creationDate = timezone.now()
        post.save()

        data = serializers.serialize("json", [post,])
        return HttpResponse(data, content_type="application/json")

        return HttpResponse()
    else:
        return HttpResponse("SEND POST")

def getPosts_api(request):
    posts = Posts.objects.all()
    data = serializers.serialize("json", posts)
    return HttpResponse(data, content_type="application/json")
