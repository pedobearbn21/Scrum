<?php

namespace App ;

use Illuminate\Database\Eloquent\Model;

class issue extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'issue';
    protected $fillable = [
        'id','issuename'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}