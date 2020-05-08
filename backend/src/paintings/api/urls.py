from django.urls import path

from .views import PaintingListView, PaintingDetailView

urlpatterns = [
    path('', PaintingListView.as_view()),
    path('<int:pk>/', PaintingDetailView.as_view()),
]