# Generated by Django 4.2.5 on 2024-04-28 02:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('management', '0004_alter_product_title'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='deleted',
        ),
        migrations.RemoveField(
            model_name='product',
            name='rank_id',
        ),
        migrations.RemoveField(
            model_name='product',
            name='updated_at',
        ),
        migrations.AlterField(
            model_name='product',
            name='created_at',
            field=models.CharField(max_length=200),
        ),
    ]
