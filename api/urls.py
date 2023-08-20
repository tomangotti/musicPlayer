
from django.urls import path
from .views import RoomView, CreateRoomView, GetRoom, JoinRoom

urlpatterns = [
    path('room', RoomView.as_view()),
    path('create_room', CreateRoomView.as_view()),
    path('get-room', GetRoom.as_view()),
    path('join-room', JoinRoom.as_view())
]
