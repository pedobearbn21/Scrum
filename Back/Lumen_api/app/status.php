<?php

namespace App ;

use Illuminate\Database\Eloquent\Model;

class status extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'status';
    protected $fillable = [
        'id','Status'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}