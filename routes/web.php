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

/*
// Authentication
Route::get('/login', ['as' => 'login', 'uses' => 'Auth\LoginController@showLoginForm']);
Route::post('/login', ['as' => 'login', 'uses' => 'Auth\LoginController@login']);
Route::get('/logout', ['as' => 'logout', 'uses' => 'Auth\LoginController@logout']);

// Registration
Route::get('/register', ['as' => 'register', 'uses' => 'Auth\RegisterController@showRegistrationForm']);
Route::post('/register', ['as' => 'register', 'uses' => 'Auth\RegisterController@register']);

// Password Reset
Route::get('password/email', ['as' => 'password-reset-email', 'uses' => 'Auth\ForgotPasswordController@showLinkRequestForm']);
Route::post('password/email', ['as' => 'password-reset-email', 'uses' => 'Auth\ForgotPasswordController@sendResetLinkEmail']);
Route::get('password/reset/{token}', ['as' => 'password-reset-form-token', 'uses' => 'Auth\PasswordController@getReset']);
Route::post('password/reset', ['as' => 'password-reset-form', 'uses' => 'Auth\PasswordController@postReset']);

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

Auth::routes();

Route::get('/home', 'HomeController@index')->name('home');
