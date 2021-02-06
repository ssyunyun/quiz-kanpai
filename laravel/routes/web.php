<?php

use Illuminate\Support\Facades\Route;

// Route::get('/', function () {
//     return view('welcome');
// });

// Route::get('/home', function () {
//     return view('home');
// });

// Route::get('/sample', function () {
//     return view('sample');
// });
// Auth::routes();


// APIのURL以外のリクエストに対してはindexテンプレートを返す
// 画面遷移はフロントエンドのVueRouterが制御する
Route::get('/{any?}', function () {
    return view('index');
})->where('any', '.+');


// Route::get('/home', [App\Http\Controllers\HomeController::class, 'index'])->name('home');
