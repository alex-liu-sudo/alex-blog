<?php

    // 自定义函数
/**
 * 响应格式化
 *
 * @param $data
 * @param int $code
 * @param string $message
 * @return array
 */
function resp_format($data, $code = 200, $message = 'success') {
    return [
        'code' => $code,
        'message' => $message,
        'data' => $data
    ];
}
