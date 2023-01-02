<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Product extends Model
{
    use HasFactory;
    protected $fillable = [
        'product_name',
        'category_id',
        'price',
        'price_discount',
        'image',
        'brand',
        'short_description',
        'long_description',
        'color',
        'size'
    ];
    public function category()
    {
        return $this->belongsTo(Category::class);
    }
    public function productDetails()
    {
        return $this->hasOne(ProductDetails::class, 'product_id', 'id');
    }
    public function images()
    {
        return $this->morphMany(Image::class, 'imageable');
    }
}