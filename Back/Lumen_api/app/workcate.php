<?php

namespace App ;

use Illuminate\Database\Eloquent\Model;

class workcate extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'workcate';
    protected $fillable = [
        'id','workcatename'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}