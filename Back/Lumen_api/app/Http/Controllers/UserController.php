<?php
namespace App\Http\Controllers;
use App\project;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
class UserController extends Controller
{
    /**
     * Create a new controller for User.
     *
     * getall(name) $data=name::all();
     * 
     * 
     * @return void
     */
    public function __construct()
    {
        //
    }
    public function getAll()
    {
        $data = project::all();
        return $this->responseSuccess($data);
    }
    public function getID($id)
    {
        $data = project::where('id', $id)->first();
        return $this->responseSuccess($data);
    }
    public function addProject(Request $request)
    {
        $data = new project();
        $data->ProjectName = $request->ProjectName;
        $data->Description = $request->Description;
        if ($data->save()){
            return $this->responseSuccess($data);
        }
    }
    public function updateData(Request $request, $id)
    {
        $data = project::where('id', $id)->first();
        $data->ProjectName = $request->ProjectName;
        $data->Description = $request->Description;
        if ($data->save()){
            return $this->responseSuccess($data);
        }
    }
    public function deleteData($id)
    {
        $data = project::where('id', $id)->delete();
        return $this->responseSuccess($data);
    }
    protected function responseSuccess($res)
    {
        return response()->json(["status" => "success", "data" => $res], 200)
            ->header("Access-Control-Allow-Origin", "*")
            ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    }
}