<?php

namespace App\Http\Controllers;

use App\Http\Services\Interfaces\BabyWarehouseInterface;
use Alex\ShortLink\Client;

class HomeController extends Controller
{
    /**
     * @var BabyWarehouseInterface
     */
    private $babyWarehouse;

    /**
     * HomeController constructor.
     *
     * @param BabyWarehouseInterface $babyWarehouse
     */
    public function __construct(BabyWarehouseInterface $babyWarehouse)
    {
        $this->babyWarehouse = $babyWarehouse;
    }

    /**
     * @return \Illuminate\Contracts\View\Factory|\Illuminate\View\View
     * @throws \Exception
     */
    public function index()
    {
        $client = new Client();

        $shortUrl = $client->getShortUrl('http://www.baidu.com');
        dd($shortUrl);
        return view('app');
    }
}
