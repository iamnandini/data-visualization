from django.urls import path,include
from . import views
from .routing import ws_urlpatterns


urlpatterns = [
    path('', views.index, name='index'),
    path('ws/', include(ws_urlpatterns)),
]