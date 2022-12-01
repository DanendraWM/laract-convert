<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

use App\Models\converter;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
        converter::create([
            'title'=>'ANIMAX',
            'description'=>'menggunakan file xls',
        ]);
        converter::create([
            'title'=>'DREAMWORKS',
            'description'=>'menggunakan file xlsx',
        ]);
        converter::create([
            'title'=>'HBO',
            'description'=>'menggunakan file xls',
        ]);
        converter::create([
            'title'=>'HISTORY',
            'description'=>'menggunakan file xlsx',
        ]);
        converter::create([
            'title'=>'HORIZON',
            'description'=>'menggunakan file xlsx',
        ]);
        converter::create([
            'title'=>'NATGEO',
            'description'=>'menggunakan file xls',
        ]);
        converter::create([
            'title'=>'SPOTV',
            'description'=>'menggunakan file xlsx',
        ]);
        converter::create([
            'title'=>'SPOTV',
            'description'=>'menggunakan file xlsx',
        ]);
        converter::create([
            'title'=>'Translate',
            'description'=>'untuk translate b.inggris ke indonesia',
        ]);
        converter::create([
            'title'=>'TVN',
            'description'=>'menggunakan file xlsx',
        ]);
        converter::create([
            'title'=>'WARNER',
            'description'=>'menggunakan file xlsx',
        ]);
    }
}
