# Generated by Django 4.2.4 on 2023-09-03 01:13

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('book', '0001_initial'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='book',
            options={'ordering': ['id']},
        ),
    ]
