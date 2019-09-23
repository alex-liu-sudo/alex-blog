<?php
/**
 * Created by PhpStorm.
 * User: AlexLiu
 * Date: 2019-08-13
 * Time: 18:20
 */

namespace App\Providers;

use App\Http\Services\Eloquent\BabyWarehouse;
use App\Http\Services\Interfaces\BabyWarehouseInterface;
use Illuminate\Support\ServiceProvider;

/**
 * Class CustomServiceProvider
 *
 * @package App\Provider
 */
class CustomServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {
        $this->app->singleton(BabyWarehouseInterface::class, BabyWarehouse::class);
    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {

    }
}
