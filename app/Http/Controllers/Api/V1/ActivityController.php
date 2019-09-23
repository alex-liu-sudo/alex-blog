<?php
/**
 * Created by PhpStorm.
 * User: AlexLiu
 * Date: 2019-08-14
 * Time: 12:32
 */

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Services\Interfaces\BabyWarehouseInterface;
use Illuminate\Http\Request;

/**
 * Class ActivityController
 *
 * @package App\Http\Controllers\Api\V1
 */
class ActivityController extends Controller
{
    /**
     * @var BabyWarehouseInterface
     */
    private $babyWarehouse;

    /**
     * ActivityController constructor.
     *
     * @param BabyWarehouseInterface $babyWarehouse
     */
    public function __construct(BabyWarehouseInterface $babyWarehouse)
    {
        $this->babyWarehouse = $babyWarehouse;
    }

    /**
     * @return \Illuminate\Http\JsonResponse
     */
    public function index()
    {
        return response()->json(
            resp_format($this->babyWarehouse->getActivityList())
        );
    }

    /**
     * @param Request $request
     * @return \Illuminate\Http\JsonResponse
     */
    public function goods(Request $request)
    {
        $activityID = $request->input('activityID');

        return response()
            ->json(
                resp_format($this->babyWarehouse->getGoodsList($activityID))
            );
    }
}
