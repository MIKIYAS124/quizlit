from django.db import models
from books.models import Book
from django.contrib.auth.models import User
# Create your models here.
class Quiz(models.Model):
    book = models.ForeignKey(Book, on_delete=models.CASCADE)
    questions = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"Quiz for {self.book.title}"

class QuizResult(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    score = models.IntegerField()
    completed_at = models.DateTimeField(auto_now_add=True)
