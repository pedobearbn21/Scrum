<?php
namespace App\Http\Controllers;
use App\daily;
use Illuminate\Http\Response;
use Illuminate\Http\Request;
class DailyController extends Controller
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
    public function savedaily(Request $request)
    {
        $data = new daily();
        $data->employee = $request->employee;
        $data->yesterdaywork = $request->yesterdaywork;
        $data->issuework = $request->issuework;
        $data->todowork = $request->todowork;
        $data->ProjectName = $request->ProjectName;
        if ($data->save()){
            return $this->responseSuccess($data);
        }
    }
    public function getdaily()
    {
        $data = daily::all();
        return $this->responseSuccess($data);
    }
    public function getchart()
    {
        $results = ('SELECT count(employee), employee FROM daily GROUP BY employee') ;
        $data = daily::all()
                        ->count('employee')
                        ->groupBy('employee')
                        ->get();
        return $this->responseSuccess($data);
    }

    protected function responseSuccess($res)
    {
        return response()->json(["status" => "success", "data" => $res], 200)
            ->header("Access-Control-Allow-Origin", "*")
            ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    }
}
