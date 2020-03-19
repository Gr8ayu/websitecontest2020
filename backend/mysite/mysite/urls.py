
from django.contrib import admin
# from django.urls import path
from django.conf.urls import url, include

urlpatterns = [
    # path('admin/', admin.site.urls),
    url(r'^admin/', admin.site.urls),

    # url(r'^about/', admin.site.urls),
    # url(r'^events/', admin.site.urls),
    # url(r'^gallery/', admin.site.urls),
    # url(r'^contacts/', admin.site.urls),
    
    #url(r'^login/', admin.site.urls),

    url(r'^', include('blogs.urls')),

    
    #url(r'^blogs/', include('blogs.urls')),
    #url(r'^', include('intro.urls')),


]