<?php

namespace App\Providers;

use App\Repositories\Interfaces\PostRepository;
use App\Repositories\PostRepositoryEloquent;
use Illuminate\Support\ServiceProvider;

class RepositoryServiceProvider extends ServiceProvider
{
    /**
     * Register services.
     *
     * @return void
     */
    public function register()
    {

    }

    /**
     * Bootstrap services.
     *
     * @return void
     */
    public function boot()
    {
        $this->app->singleton(PostRepository::class, PostRepositoryEloquent::class);
        //:end-bindings:
    }
}
