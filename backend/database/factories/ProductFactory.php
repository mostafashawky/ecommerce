<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Product>
 */
class ProductFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition()
    {
        return [
            'category_id' => 1,
            'product_name' => Str::random(7),
            'price' => 2500,
            'price_discount' => 2000,
            'image' => 'https://www.freepnglogos.com/uploads/laptop-png/laptop-transparent-png-pictures-icons-and-png-40.png',
            'brand' => Str::random(7),
            'short_description' => Str::random(20),
            'long_description' => Str::random(30),
        ];
    }
}