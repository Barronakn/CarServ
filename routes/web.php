<?php

use App\Http\Controllers\AboutController;
use App\Http\Controllers\BookingController;
use App\Http\Controllers\ContactController;
use App\Http\Controllers\HomeController;
use App\Http\Controllers\NotFoundController;
use App\Http\Controllers\PageController;
use App\Http\Controllers\ServicesController;
use App\Http\Controllers\TechniciansController;
use App\Http\Controllers\TestimonialController;
use Illuminate\Support\Facades\Route;
use Mockery\Matcher\Not;

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


Route::get('/', [HomeController::class, 'index']);
Route::get('/about', [AboutController::class, 'index']);
Route::get('/services', [ServicesController::class, 'index']);
Route::get('/contact', [ContactController::class, 'index']);
Route::get('/booking', [BookingController::class, 'index']);
Route::get('/technicians', [TechniciansController::class, 'index']);
Route::get('/testimonial', [TestimonialController::class, 'index']);
Route::get('/404page', [NotFoundController::class, 'index']);

require __DIR__ . '/auth.php';
