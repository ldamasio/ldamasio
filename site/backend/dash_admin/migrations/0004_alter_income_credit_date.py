# Generated by Django 3.2.13 on 2022-12-23 08:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('dash_admin', '0003_alter_income_description'),
    ]

    operations = [
        migrations.AlterField(
            model_name='income',
            name='credit_date',
            field=models.DateTimeField(),
        ),
    ]
