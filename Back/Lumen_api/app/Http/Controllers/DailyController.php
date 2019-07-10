<?php
namespace App\Http\Controllers;
use App\daily;
use App\project;
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
    }
    public function savedaily(Request $request)
    {
        $data = new daily();
        $data->date = $request->date;
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
        $results = app('db')->select("SELECT COUNT(ProjectName) as datacount ,employee  FROM daily  GROUP BY employee ;");
        return $this->responseSuccess($results);
    }
    public function getprojectyear(Request $request)
    {
        $start = $request->start;
        $end = $request->end;
        $results = app('db')->select("SELECT * FROM daily WHERE date BETWEEN $start and $end ");
        return $this->responseSuccess($results);
    }
    public function showissuechart(Request $request)
    {
        $year = $request->year;
        $month = $request->month;
        $results = app('db')->select("SELECT issuework FROM daily WHERE date like '%$year-$month-__%' ");
        return $this->responseSuccess($results);
    }
    protected function responseSuccess($res)
    {
        return response()->json(["status" => "success", "data" => $res], 200)
            ->header("Access-Control-Allow-Origin", "*")
            ->header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    }
}
