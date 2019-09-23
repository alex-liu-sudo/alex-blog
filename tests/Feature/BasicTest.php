<?php

namespace Tests\Feature;

use App\Http\Services\Facade\BabyWarehouse;
use InvalidArgumentException;
use Tests\TestCase;
use Illuminate\Foundation\Testing\WithFaker;
use Illuminate\Foundation\Testing\RefreshDatabase;

class BasicTest extends TestCase
{

    public function testPush()
    {
        $this->assertTrue(true);

        return 1;
    }

    public function testPush2()
    {
        $this->assertTrue(true);

        return 2;
    }

    public function addProvider()
    {
        return [
            [1,2],
            [1,2]
        ];
    }

    /**
     * @dataProvider addProvider
     * @group test
     * @requires PHP 7.1
     */
    public function testGetActivityList($a)
    {
        $this->assertTrue(true);
    }

}
