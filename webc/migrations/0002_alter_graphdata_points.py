# Generated by Django 4.2.7 on 2023-11-16 12:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('webc', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='graphdata',
            name='points',
            field=models.IntegerField(),
        ),
    ]
