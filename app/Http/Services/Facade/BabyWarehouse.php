<?php
/**
 * Created by PhpStorm.
 * User: AlexLiu
 * Date: 2019-09-20
 * Time: 15:19
 */

namespace App\Http\Services\Facade;


use App\Http\Services\Interfaces\BabyWarehouseInterface;
use Illuminate\Support\Facades\Facade;

class BabyWarehouse extends Facade
{
    /**
     * 获取组件注册名称
     *
     * @return string
     */
    protected static function getFacadeAccessor()
    {
        return BabyWarehouseInterface::class;
    }
}
