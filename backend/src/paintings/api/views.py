from rest_framework.generics import ListAPIView, RetrieveAPIView

from paintings.models import Painting
from .serializers import PaintingSerializer

class PaintingListView(ListAPIView):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer


class PaintingDetailView(RetrieveAPIView):
    queryset = Painting.objects.all()
    serializer_class = PaintingSerializer