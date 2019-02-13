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

Route::get('/','Frontend\HomeController@index')->name('homeView');
Route::get('/payout-rates','Frontend\HomeController@payoutRate')->name('payoutRate');
Route::get('/payment-proof','Frontend\HomeController@paymentProof')->name('paymentProof');
Route::get('/terms','Frontend\HomeController@terms')->name('terms');
Route::get('/privacy','Frontend\HomeController@privacy')->name('privacy');
Route::get('/tin-tuc','Frontend\HomeController@listArticle')->name('listArticle');
Route::get('/tin-tuc/{slug}.html','Frontend\HomeController@article')->name('article');

Route::post('/short-url','ShortUrlController@shortUrl')->name('shortUrl');

Route::get('/login','Frontend\HomeController@login')->name('loginView');
Route::post('/login','Frontend\HomeController@doLogin')->name('doLoginView');
Route::get('/register','Frontend\HomeController@register')->name('registerView');
Route::post('/register','Frontend\HomeController@doRegister')->name('doRegisterView');
Route::get('/forget','Frontend\HomeController@forgetPassword')->name('forgetPasswordView');
Route::post('/forget','Frontend\HomeController@doForgetPassword')->name('doForgetPasswordView');

Route::get('/api-top-lagu123', 'ApiController@getTopLagu123');
Route::get('/api/{api_youtube}', 'ApiController@showMp3')->name('showMp3');


Route::get('/redirect/{social}', 'SocialAuthController@redirect')->name('redirect');
Route::get('/callback/{social}', 'SocialAuthController@callback');

Route::get('/music-lagu/{api_youtube}', 'Frontend\HomeController@redirectLagu');
Route::get('/aff/{short_url_id}','Frontend\HomeController@redirectStepOne')->name('redirectStepOne');


Route::get('/auto-convert','ShortUrlController@autoConvertShortUrl')->name('autoConvertShortUrl');

Route::group(['prefix' => 'admin'], function () {
    Auth::routes();
    Route::post('/forgot-password', 'Auth\ForgotPasswordController@sendMail')->name('forgot.sendMail');
    Route::match(['get', 'post'], '/forgot-reset-password/{token}', 'Auth\ForgotPasswordController@resetPassword')->name('forgot.resetPassword');

    Route::get('/', 'HomeController@index')->name('home');

    Route::group(['middleware' => ['auth', 'permissions']], function () {
        Route::group(['prefix' => 'user-manager'], function () {
            Route::get('/', 'UserAdminController@index')->name('user-admin.index');
            Route::get('show/{id}', 'UserAdminController@show')->name('user-admin.show');
            Route::get('create', 'UserAdminController@create')->name('user-admin.create');
            Route::post('store', 'UserAdminController@store')->name('user-admin.store');
            Route::get('{id}/edit', 'UserAdminController@edit')->name('user-admin.edit');
            Route::post('update/{id}', 'UserAdminController@update')->name('user-admin.update');
            Route::get('destroy/{id}', 'UserAdminController@destroy')->name('user-admin.destroy');
        });

        Route::group(['prefix' => 'short-url'], function () {
            Route::get('/', 'ShortUrlController@index')->name('short-url.index');
            Route::get('show/{id}', 'ShortUrlController@show')->name('short-url.show');
            Route::get('create', 'ShortUrlController@create')->name('short-url.create');
            Route::post('store', 'ShortUrlController@store')->name('short-url.store');
            Route::get('{id}/edit', 'ShortUrlController@edit')->name('short-url.edit');
            Route::post('update/{id}', 'ShortUrlController@update')->name('short-url.update');
            Route::get('destroy/{id}', 'ShortUrlController@destroy')->name('short-url.destroy');
        });

        Route::group(['prefix' => 'permission'], function () {
            Route::get('/', 'PermissionController@index')->name('permission.index');
            Route::get('/tool', 'PermissionController@tool')->name('permission.tool');
            Route::get('show/{id}', 'PermissionController@show')->name('permission.show');
            Route::get('create', 'PermissionController@create')->name('permission.create');
            Route::post('store', 'PermissionController@store')->name('permission.store');
            Route::get('{id}/edit', 'PermissionController@edit')->name('permission.edit');
            Route::post('update/{id}', 'PermissionController@update')->name('permission.update');
            Route::get('destroy/{id}', 'PermissionController@destroy')->name('permission.destroy');
        });

        Route::group(['prefix' => 'role'], function () {
            Route::get('/', 'RoleController@index')->name('role.index');
            Route::get('show/{id}', 'RoleController@show')->name('role.show');
            Route::post('store', 'RoleController@store')->name('role.store');
            Route::get('create', 'RoleController@create')->name('role.create');
            Route::get('{id}/edit', 'RoleController@edit')->name('role.edit');
            Route::post('update/{id}', 'RoleController@update')->name('role.update');
            Route::get('destroy/{id}', 'RoleController@destroy')->name('role.destroy');
        });
    });
});
Route::get('/sitemap.xml', 'HomeController@siteMap');

