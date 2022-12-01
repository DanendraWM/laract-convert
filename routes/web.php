<?php

use App\Http\Controllers\pythonController;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/
route::group(['middleware' => ['auth']], function () {
    Route::get('/', [pythonController::class,'index'])->name('HomePage');
    Route::post('/convert/{nama_script}',[pythonController::class,'convertPost']);
    Route::get('/convert/{nama_script}',[pythonController::class,'convert'])->name('convert');
    Route::get('/test',[pythonController::class,'test'])->name('test');
    Route::get('/dashboard', function () {
        return Inertia::render('Dashboard');
    })->name('dashboard');
    
});
    require __DIR__.'/auth.php';
