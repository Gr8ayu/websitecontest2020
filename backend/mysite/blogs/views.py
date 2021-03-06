from django.shortcuts import render
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate,logout
from django.http import HttpResponse
from django.core import serializers
from .models import Posts,  Message
from django.utils import timezone
from django.contrib.sessions.models import Session
from django.contrib.auth.models import User
from django.core.mail import send_mail
import json
# Create your views here.


@csrf_exempt
def login_api(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']



        # body_unicode = request.body.decode('utf-8')
        # body = json.loads(body_unicode)
        # username = body["username"]
        # password = body['password']



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
            # return HttpResponse("NO USER")
            return redirect('/login/')

    else:
        #user_form = loginForm(instance=request.user)
        return redirect('/login/')

def loginView(request):
    return HttpResponse("LOGIN PAGE")

@csrf_exempt
def addPost_api(request):
    if request.method == 'POST':
        print("_________REQUEST________________")
        # body_unicode = request.body.decode('utf-8')
        # body = json.loads(body_unicode)
        # print(body)
        print("_______________________________")
        
        # input()
        # post_type = body["type"]
        # post_title = body['title']
        # post_content = body['content']

        post =  Posts()
        
        # sess = request.COOKIES.get('sessionid','') 
        # session = Session.objects.get(session_key=sess)
        # uid = session.get_decoded().get('_auth_user_id')
        user = User.objects.get(pk=1)

        print(">>>",request.user,"<<<")
        # post.type = post_type
        # post.title = post_title
        # post.content = post_content

        post.type = request.POST['type']
        post.title = request.POST['title']
        post.content = request.POST['content']

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

@csrf_exempt
def message_api(request):
    if request.method == "POST":
        msg = Message()
        msg.message = request.POST['message']
        msg.name = request.POST['name']
        msg.email = request.POST['email']
        msg.subject = request.POST['subject']

        msg.save()

        mailcontent = "You recieved a message from {} ({}). \n\n Subject : {} \n\n {}"

        mailcontent = mailcontent.format(msg.name, msg.email, msg.subject, msg.message )

        r = send_mail(
            'recieved message from website',
            mailcontent,
            msg.email,
            ['anonymouskmr@gmail.com'],
            fail_silently=False,
        )

        data = {}
        data['status'] = "success"
        return HttpResponse(json.dumps(data), content_type="application/json")
    data = {}
    data['status'] = "failed"
    return HttpResponse(json.dumps(data), content_type="application/json")

