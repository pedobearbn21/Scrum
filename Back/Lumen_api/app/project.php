<?php

namespace App ;

use Illuminate\Database\Eloquent\Model;

class project extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'project';
    protected $fillable = [
        'id','ProjectName', 'Description'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}