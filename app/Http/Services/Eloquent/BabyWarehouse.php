<?php
/**
 * Created by PhpStorm.
 * User: AlexLiu
 * Date: 2019-08-13
 * Time: 17:59
 */

namespace App\Http\Services\Eloquent;

use App\Http\Services\Interfaces\BabyWarehouseInterface;
use GuzzleHttp\Client;

/**
 * Class BabyRepo
 *
 * @package App\Http\Services\Eloquent
 */
class BabyWarehouse implements BabyWarehouseInterface
{
//    use Guzzle;

    /**
     * @var string
     */
    protected $secret = 'C9YB5GGIZ8NFCO919BSNCGWT6FL2LZ738CM8XYZCDVKIUHN50A';

    /**
     * @var string
     */
    protected $appId = 'OP_ZHAO17XHSTG4MNN4H496R7H2';

    /**
     * @return mixed
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getActivityList()
    {
        $client = $this->getClient();

        $param = $this->setBaseParam();

        $param['status'] = 'WARM_UP';

        $this->setSign($param);

        $response = $client->request('POST', '/v2/api/activity/list', [
            'json' => ['data' => $param]
        ]);

        $body = $response->getBody()->getContents();

        $result = json_decode($body, true);

        $activities = [];

        if ($result['code'] == 'SUCCESS') {
            $activities = $result['activity'];
        }
//        throw new \InvalidArgumentException('抛出测试异常', 10);

        return $activities;
    }

    /**
     * 获取商品列表.
     *
     * @param $activityID
     * @return array
     * @throws \GuzzleHttp\Exception\GuzzleException
     */
    public function getGoodsList($activityID)
    {
        $client = $this->getClient();

        $param = $this->setBaseParam();

        $param['activityIds'] = $activityID;

        $this->setSign($param);

        $response = $client->request('POST', '/v2/api/activity/item/list', [
            'json' => ['data' => $param]
        ]);

        $body = $response->getBody()->getContents();

        $result = json_decode($body, true);

        if ($result['code'] == 'SUCCESS') {
            $goods = $result['data'];
        }

        return $goods;
    }

    /**
     * @return array
     */
    public function setBaseParam()
    {
        return [
                'app-id' => $this->appId,
                'secret-key' => $this->secret,
                'timestamp' => explode('.', microtime(true) * 1000)[0]
        ];
    }

    /**
     * @param $param
     */
    public function setSign(&$param)
    {
        ksort($param);

        $temp = '';

        foreach ($param as $key => $value) {
            $temp .= $key . '=' . $value;
            $temp .= '&';
        }

        unset($param['secret-key']);

        $temp = rtrim($temp, '&');

        $param['sign'] = md5($temp);
    }

    /**
     * @return Client
     */
    public function getClient()
    {
        return new Client([
            'connect_timeout' => 30,
            'timeout' => 30,
            'base_uri' => 'https://gw.baobeicang.com/'
        ]);
    }

    public static function __callStatic($method, $args)
    {
        dd($method);
    }
}
