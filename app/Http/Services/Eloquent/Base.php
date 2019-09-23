<?php
/**
 * Created by PhpStorm.
 * User: AlexLiu
 * Date: 2019-08-13
 * Time: 17:59
 */

namespace App\Http\Services\Eloquent;


/**
 * Class BabyRepo
 *
 * @package App\Http\Services\Eloquent
 */
class Base
{
    public static function __callStatic($method, $args)
    {
        dd($method);
    }
}
