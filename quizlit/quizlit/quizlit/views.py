from rest_framework import viewsets, permissions
from rest_framework.response import Response
from rest_framework.decorators import action
from django.shortcuts import get_object_or_404
from .models import Book, Quiz, QuizResult, Payment
from .serializers import BookSerializer, QuizSerializer, QuizResultSerializer, PaymentSerializer

# Book ViewSet
class BookViewSet(viewsets.ModelViewSet):
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    permission_classes = [permissions.IsAuthenticatedOrReadOnly]

# Quiz ViewSet
class QuizViewSet(viewsets.ModelViewSet):
    queryset = Quiz.objects.all()
    serializer_class = QuizSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['post'])
    def take_quiz(self, request, pk=None):
        quiz = get_object_or_404(Quiz, pk=pk)
        user = request.user
        score = request.data.get("score", 0)

        quiz_result = QuizResult.objects.create(user=user, quiz=quiz, score=score)
        return Response({"message": "Quiz completed", "score": quiz_result.score})

# Quiz Result ViewSet
class QuizResultViewSet(viewsets.ReadOnlyModelViewSet):
    queryset = QuizResult.objects.all()
    serializer_class = QuizResultSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        return self.queryset.filter(user=self.request.user)

# Payment ViewSet
class PaymentViewSet(viewsets.ModelViewSet):
    queryset = Payment.objects.all()
    serializer_class = PaymentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def perform_create(self, serializer):
        serializer.save(user=self.request.user)

        