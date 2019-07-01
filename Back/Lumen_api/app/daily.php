<?php

namespace App ;

use Illuminate\Database\Eloquent\Model;

class daily extends Model
{
    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $table = 'daily';
    protected $fillable = [
        'employee','yesterdaywork', 'issuework','todowork'
    ];
    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    public $timestamps = false;
}
