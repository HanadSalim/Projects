<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\PostController;
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

Route::get('/', function () {
    return view('add-blog-post-form');
});


// You can also use 
// CAnt parse data using the following 
// Route::view('another', "another");
// Route::get('"path"', "controller file");

Route::get('add-blog-post-form', [PostController::class, 'index']);
Route::post('store-form', [PostController::class, 'store']);