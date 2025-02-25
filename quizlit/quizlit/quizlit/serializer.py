from rest_framework import serializers
from django.contrib.auth.models import User
from .models import Book, Quiz, QuizResult, Payment

# User Serializer
class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'email']

# Book Serializer
class BookSerializer(serializers.ModelSerializer):
    class Meta:
        model = Book
        fields = ['id', 'title', 'author', 'description', 'price', 'created_at']

# Quiz Serializer
class QuizSerializer(serializers.ModelSerializer):
    class Meta:
        model = Quiz
        fields = ['id', 'book', 'questions', 'created_at']

# Quiz Result Serializer
class QuizResultSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    quiz = QuizSerializer(read_only=True)

    class Meta:
        model = QuizResult
        fields = ['id', 'user', 'quiz', 'score', 'completed_at']

# Payment Serializer
class PaymentSerializer(serializers.ModelSerializer):
    user = UserSerializer(read_only=True)
    book = BookSerializer(read_only=True)

    class Meta:
        model = Payment
        fields = ['id', 'user', 'book', 'amount', 'status', 'payment_date']
