from django.conf.urls import url
from . import views

# Create your views here.

app_name = "blogs"

urlpatterns = [

    url(r'^api/login/$', views.login_api, name='apilogin'),
    url(r'^api/addpost/$', views.addPost_api, name='apiaddpost'),
    url(r'^login/$', views.loginView, name='login'),
    url(r'^api/posts/$', views.getPosts_api, name='apiposts'),

    # url(r'^new/$', views.PostCreate.as_view(), name="BlogCreate"),
    # url(r'^$', views.PostList.as_view(), name="BlogList"),
    # url(r'^new/(?P<pk>[0-9]+)/$', views.PostDetail.as_view(), name="BlogDetail"),


]
