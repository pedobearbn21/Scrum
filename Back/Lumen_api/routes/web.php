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
    $router->get('getchart', 'DailyController@getchart');
    $router->get('getprojectyear', 'DailyController@getprojectyear');


    $router->get('getAll', 'UserController@getAll');
    $router->get('getID/{id}', 'UserController@getID');
    $router->post('addProject', 'UserController@addProject');
    $router->put('updateData/{id}', 'UserController@updateData');
    $router->delete('deleteData/{id}', 'UserController@deleteData');

    $router->get('getEmployeeAll', 'UserController@getEmployeetDetail');
    $router->post('addEmployee', 'UserController@addEmployee');
    $router->put('updateEmployeeData/{id}', 'UserController@updateEmployeeData');
    $router->delete('deleteEmployeeData/{id}', 'UserController@deleteEmployeeData');

    $router->get('getworkcatedetail', 'UserController@getworkcatedetail');
    $router->post('addworkcate', 'UserController@addworkcate');
    $router->put('updateworkcateData/{id}', 'UserController@updateworkcateData');
    $router->delete('deleteworkcateData/{id}', 'UserController@deleteworkcateData');

    $router->get('getStatusDetail', 'UserController@getStatusDetail');
    $router->post('addStatus', 'UserController@addStatus');
    $router->put('updateStatusData/{id}', 'UserController@updateStatusData');
    $router->delete('deleteStatusData/{id}', 'UserController@deleteStatusData');

    $router->get('getissueDetail', 'UserController@getissueDetail');
    $router->post('addissue', 'UserController@addissue');
    $router->put('updateissueData/{id}', 'UserController@updateissueData');
    $router->delete('deleteissueData/{id}', 'UserController@deleteissueData');

    $router->get('getdaily', 'DailyController@getdaily');
    $router->post('savedaily', 'DailyController@savedaily');
});
