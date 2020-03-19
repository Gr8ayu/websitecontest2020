from django.shortcuts import render
from django.shortcuts import render, redirect
# Create your views here.
def loginView(request):
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
            return redirect('blogs:homepage')
    else:
        #user_form = loginForm(instance=request.user)
        return redirect('/login')
