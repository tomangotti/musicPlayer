
from django.urls import path
from .views import RoomView, CreateRoomView

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create_room', CreateRoomView.as_view())
]
