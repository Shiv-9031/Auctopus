# Generated by Django 4.2.2 on 2023-08-29 22:38

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('students', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='information',
            name='password',
            field=models.CharField(max_length=50),
        ),
    ]
