<?php

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

Route::view('/{path?}', 'app');

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');

/*
// Admin Dashboard
Route::group(['as' => 'admin.', 'prefix' => 'admin', 'middleware' => 'auth', 'namespace' => 'Admin'], function() {
    Route::get('/', function() {
        return redirect()->route('admin.dashboard');
    });
    Route::get('/dashboard', ['as' => 'dashboard', 'uses' => 'DashboardController@index']);

    Route::get('/account', ['as' => 'account.info', 'uses' => 'AccountController@index']);

    Route::get('/password/change', ['as' => 'password.change', 'uses' => 'PasswordController@index']);
    Route::post('/password/change', ['as' => 'password.change', 'uses' => 'PasswordController@update']);
});
*/
