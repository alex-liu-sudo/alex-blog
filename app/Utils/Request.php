<?php
/**
 * Created by PhpStorm.
 * User: AlexLiu
 * Date: 2019-08-14
 * Time: 13:36
 */

namespace App\Utils;

use GuzzleHttp\Client;

/**
 * Trait Request
 *
 * @package App\Utils
 */
trait Request
{
    /**
     * @return Client
     */
    public function client()
    {
        return new Client([
            'timeout'  => 2.0,
        ]);
    }
}
