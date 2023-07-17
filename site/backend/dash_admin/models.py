from django.db import models
from django.contrib.auth.models import User

INCOME_CATEGORIES = (
    (0, "Binance Isolated Margin"),
    (1, "Binance Spot"),
    (2, "Bitso"),
    (3, "Day Trade Clear"),
    (4, "Day Trade XP")
)

class DayliBalance(models.Model):
    currency = models.CharField(max_length=5, blank=False, default='BRL')
    value = models.DecimalField(max_digits=6, decimal_places=2)
    author = models.ForeignKey(User, on_delete= models.CASCADE, related_name='dash_admin_income')
    credit_date = models.DateTimeField()
    category = models.IntegerField(choices=INCOME_CATEGORIES, default=0)
    description = models.CharField(max_length=255, blank=True)

    class Meta:
        ordering = ['-credit_date']

    def __str__(self):
        return str(self.value) + ' ' + self.currency
