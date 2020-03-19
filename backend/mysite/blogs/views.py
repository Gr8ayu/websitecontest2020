from django.shortcuts import render
from django.shortcuts import render, redirect
from django.views.decorators.csrf import csrf_exempt
from django.contrib.auth import login, authenticate,logout
from django.http import HttpResponse
from django.core import serializers
# Create your views here.

@csrf_exempt
def login_api(request):
    if request.method == 'POST':
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            data = serializers.serialize("json", [user,])
            print(data)
            return HttpResponse(data, content_type="application/json")
            
        else:
            return HttpResponse("NO USER")
    else:
        #user_form = loginForm(instance=request.user)
        return redirect('/login')

def loginView(request):
    return HttpResponse("LOGIN PAGE")