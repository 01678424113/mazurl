<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ShortUrl extends Model
{
    public $table = 'short_urls';
    public static $ACTIVE = 1;
    public static $UNACTIVE = 0;
}
