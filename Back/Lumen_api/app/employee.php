<?php

namespace App ;

use Illuminate\Database\Eloquent\Model;

class employee extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'employee';
    protected $fillable = [
        'id','EmployName', 'EmployEmail'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}