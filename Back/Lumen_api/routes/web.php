<?php

/*
|--------------------------------------------------------------------------
| Application Routes
|--------------------------------------------------------------------------
|
| Here is where you can register all of the routes for an application.
| It is a breeze. Simply tell Lumen the URIs it should respond to
| and give it the Closure to call when that URI is requested.
|
*/

$router->get('/', function () use ($router) {
    return $router->app->version();
});
$router->group(['prefix' => 'api/v1'], function () use ($router) {
    $router->get('getAll', 'UserController@getAll');
    $router->get('getID/{id}', 'UserController@getID');
    $router->post('addProject', 'UserController@addProject');
    $router->put('updateData/{id}', 'UserController@updateData');
    $router->delete('deleteData/{id}', 'UserController@deleteData');

    $router->get('getEmployeeAll', 'UserController@getEmployeetDetail');
    $router->post('addEmployee', 'UserController@addEmployee');
    $router->put('updateEmployeeData/{id}', 'UserController@updateEmployeeData');
    $router->delete('deleteEmployeeData/{id}', 'UserController@deleteEmployeeData');


});
