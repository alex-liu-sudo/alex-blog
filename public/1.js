(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[1],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _api_home__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../api/home */ "./resources/js/api/home.js");
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.1.2@vant/es/index.js");
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "Home",
  data: function data() {
    return {
      show: true,
      tabName: ['推荐', '男装', '女装', '鞋类', '母婴儿童', '内衣配件'],
      active: 0,
      count: 0,
      loading: false,
      //控制上拉加载的加载动画
      finished: false,
      //控制在页面往下移动到底部时是否调用接口获取数据
      isLoading: false,
      //控制下拉刷新的加载动画
      activity: {},
      goodsList: {}
    };
  },
  mounted: function mounted() {},
  methods: {
    onRefresh: function onRefresh() {
      var _this = this;

      setTimeout(function () {
        _this.$toast('刷新成功');

        _this.isLoading = false;
        _this.count++;
      }, 500);
    },
    getImg: function getImg(imageUrl) {
      Object(vant__WEBPACK_IMPORTED_MODULE_1__["ImagePreview"])([imageUrl]);
    },
    onLoad: function onLoad() {
      var _this2 = this;

      this.activity = JSON.parse(sessionStorage.activity);
      var param = {
        'activityID': this.activity.activityUuid
      };
      Object(_api_home__WEBPACK_IMPORTED_MODULE_0__["getGoodsList"])(param).then(function (resp) {
        _this2.goodsList = resp.data.data[0];
        setTimeout(function () {
          _this2.loading = false;
          _this2.finished = true;
        }, 500);
      });
    },
    back: function back() {
      this.$router.push('/');
    }
  }
});

/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css&":
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader??ref--6-1!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-78b841b0] {\n    padding: 3px 15px;\n}\n.detail-container[data-v-78b841b0] {\n    background: url('https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=1517945160,456794165&fm=26&gp=0.jpg') no-repeat top;\n    background-color: #f3f3f3;\n\n    min-height: 1000px;\n    background-size:100% 200px;\n}\n.nav-bar[data-v-78b841b0] {\n    height: 50px;\n    margin-bottom: 30px;\n}\n.back-btn[data-v-78b841b0] {\n    height: 50px;\n    padding: 15px\n}\n.shop-card[data-v-78b841b0] {\n    background: #fff;\n    border-radius: 10px;\n    padding: 15px;\n    box-shadow: #0a0302;\n}\n.shop-card-icon img[data-v-78b841b0] {\n    width: 80px;\n    height: 80px;\n    margin-top:-40px;\n    border:1px solid #eee;\n    border-radius: 5px;\n}\n.shop-card-desc[data-v-78b841b0] {\n    font-size:12px;\n    height: 35px;\n    overflow: hidden;\n    text-overflow:ellipsis;\n    white-space:normal;\n    color: #444\n}\n.shop-card-tool-btn[data-v-78b841b0] {\n    padding: 8px 0;\n}\n.shop-card-detail[data-v-78b841b0] {\n    padding-top: 10px;\n    border-top: 1px dashed #eee;\n    font-size: 12px\n}\n.shop-card-detail-content[data-v-78b841b0] {\n    color: #666\n}\n.shop-card-detail-item[data-v-78b841b0] {\n    margin-bottom: 8px;\n}\n.goods-card[data-v-78b841b0] {\n    background: #fff;\n    border-radius: 10px;\n    padding: 15px;\n    box-shadow: #0a0302;\n    margin-top:10px\n}\n.goods-card-header[data-v-78b841b0] {\n    line-height: 30px;\n    font-size: 13px;\n    color: #333;\n    font-weight: bold;\n    /*background: green;*/\n    border-bottom: 1px solid #eee;\n}\n.goods-card-price[data-v-78b841b0] {\n    line-height: 30px;\n    color: red;\n    font-size: 13px;\n}\n.goods-card-detail-content[data-v-78b841b0] {\n    padding-top: 5px;\n    font-size: 12px;\n    color: #666\n}\n.goods-card-model[data-v-78b841b0] {\n    background: #efefef;\n    padding: 10px;\n    margin-top: 8px;\n}\n.van-grid-item__content[data-v-78b841b0] {\n    padding: 3px\n}\n.van-image__img[data-v-78b841b0] {\n    border: 1px solid #eee;\n    height: 120px;\n    border-radius: 3px\n}\n.sku[data-v-78b841b0] {\n    margin-right:10px\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader!./node_modules/_css-loader@1.0.1@css-loader??ref--6-1!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-1!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css& */ "./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js */ "./node_modules/_style-loader@0.23.1@style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "detail-container" },
    [
      _c(
        "van-row",
        [
          _c(
            "van-col",
            { staticClass: "nav-bar", attrs: { span: "24" } },
            [
              _c(
                "van-col",
                { staticClass: "back-btn", attrs: { span: "4" } },
                [
                  _c("van-icon", {
                    attrs: { name: "arrow-left" },
                    on: { click: _vm.back }
                  })
                ],
                1
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "van-col",
            { attrs: { span: "24" } },
            [
              _c(
                "van-list",
                {
                  staticClass: "content",
                  attrs: {
                    finished: _vm.finished,
                    "finished-text": "-- 我也是有底线的 --"
                  },
                  on: { load: _vm.onLoad },
                  model: {
                    value: _vm.loading,
                    callback: function($$v) {
                      _vm.loading = $$v
                    },
                    expression: "loading"
                  }
                },
                [
                  _c(
                    "van-row",
                    { staticClass: "shop-card" },
                    [
                      _c(
                        "van-col",
                        { staticClass: "shop-card-icon", attrs: { span: "7" } },
                        [
                          _c("img", {
                            attrs: {
                              src: _vm.activity.brandLogoUrl,
                              height: "100%",
                              width: "100%",
                              alt: ""
                            }
                          })
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        { attrs: { span: "17" } },
                        [
                          _c("van-col", { attrs: { span: "14" } }, [
                            _vm._v(_vm._s(_vm.activity.brandName))
                          ]),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticStyle: { "text-align": "right" },
                              attrs: { span: "10" }
                            },
                            [
                              _c(
                                "van-button",
                                {
                                  attrs: {
                                    type: "warning",
                                    size: "small",
                                    icon: "like-o"
                                  }
                                },
                                [
                                  _vm._v(
                                    "\n                               关注品牌\n                           "
                                  )
                                ]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "shop-card-desc",
                          attrs: { span: "24" }
                        },
                        [
                          _c("span", [
                            _vm._v("品牌活动 | " + _vm._s(_vm.activity.content))
                          ]),
                          _vm._v(" "),
                          _c("a", { attrs: { href: "" } }, [_vm._v("详情 >")])
                        ]
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "shop-card-tool-btn",
                          staticStyle: { "text-align": "right" },
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-button",
                            { attrs: { plain: "", size: "small" } },
                            [_vm._v("提醒我")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-button",
                            { attrs: { plain: "", size: "small" } },
                            [_vm._v("转发活动")]
                          ),
                          _vm._v(" "),
                          _c(
                            "van-button",
                            { attrs: { plain: "", size: "small" } },
                            [_vm._v("批量转发")]
                          )
                        ],
                        1
                      ),
                      _vm._v(" "),
                      _c(
                        "van-col",
                        {
                          staticClass: "shop-card-detail",
                          attrs: { span: "24" }
                        },
                        [
                          _c(
                            "van-col",
                            {
                              staticClass: "shop-card-detail-item",
                              attrs: { span: "24" }
                            },
                            [
                              _c("van-col", { attrs: { span: "3" } }, [
                                _vm._v("发货")
                              ]),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticClass: "shop-card-detail-content",
                                  attrs: { span: "21" }
                                },
                                [_vm._v(_vm._s(_vm.activity.deliveryDesc))]
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticClass: "shop-card-detail-item",
                              staticStyle: { "margin-bottom": "0px" },
                              attrs: { span: "24" }
                            },
                            [
                              _c("van-col", { attrs: { span: "3" } }, [
                                _vm._v("邮费")
                              ]),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticClass: "shop-card-detail-content",
                                  attrs: { span: "21" }
                                },
                                [_vm._v("全场包邮")]
                              )
                            ],
                            1
                          )
                        ],
                        1
                      )
                    ],
                    1
                  ),
                  _vm._v(" "),
                  _vm._l(_vm.goodsList.items, function(goods) {
                    return _c(
                      "van-row",
                      { staticClass: "goods-card" },
                      [
                        _c(
                          "van-col",
                          {
                            staticClass: "goods-card-header",
                            attrs: { span: "24" }
                          },
                          [
                            _vm._v(
                              "\n                        " +
                                _vm._s(goods.activityItemNo) +
                                "." +
                                _vm._s(goods.shortName) +
                                "\n                    "
                            )
                          ]
                        ),
                        _vm._v(" "),
                        _c(
                          "van-col",
                          {
                            staticClass: "goods-card-price",
                            attrs: { span: "24" }
                          },
                          [
                            _c("van-col", { attrs: { span: "6" } }, [
                              _vm._v(
                                "¥" + _vm._s(goods.itemSkus[0].settlementPrice)
                              )
                            ]),
                            _vm._v(" "),
                            _c(
                              "van-col",
                              {
                                staticStyle: { "text-align": "right" },
                                attrs: { span: "18" }
                              },
                              [
                                _vm._v(
                                  "建议售价：¥" +
                                    _vm._s(goods.itemSkus[0].settlementPrice)
                                )
                              ]
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "van-col",
                          {
                            staticClass: "goods-card-image",
                            attrs: { span: "24" }
                          },
                          [
                            _c(
                              "van-grid",
                              {
                                attrs: {
                                  border: false,
                                  "column-num": goods.itemImgs.count < 5 ? 2 : 3
                                }
                              },
                              _vm._l(goods.itemImgs, function(image) {
                                return _c(
                                  "van-grid-item",
                                  [
                                    _c("van-image", {
                                      attrs: { src: image.url },
                                      on: {
                                        click: function($event) {
                                          return _vm.getImg(image.url)
                                        }
                                      }
                                    })
                                  ],
                                  1
                                )
                              }),
                              1
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "van-col",
                          {
                            staticClass: "goods-card-detail",
                            attrs: { span: "24" }
                          },
                          [
                            _c(
                              "van-col",
                              {
                                staticClass: "goods-card-detail-content",
                                attrs: { span: "24" }
                              },
                              [
                                _vm._v(
                                  "宝贝编号：" + _vm._s(goods.activityItemNo)
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "van-col",
                              {
                                staticClass: "goods-card-detail-content",
                                attrs: { span: "24" }
                              },
                              [
                                _vm._v(
                                  _vm._s(goods.fullName) +
                                    "(" +
                                    _vm._s(goods.makeup) +
                                    " 市场价：" +
                                    _vm._s(goods.listPrice) +
                                    ")"
                                )
                              ]
                            ),
                            _vm._v(" "),
                            _c(
                              "van-col",
                              {
                                staticClass: "goods-card-detail-content",
                                attrs: { span: "24" }
                              },
                              [_vm._v(_vm._s(goods.description))]
                            ),
                            _vm._v(" "),
                            _c(
                              "van-col",
                              {
                                staticClass: "goods-card-detail-content",
                                attrs: { span: "24" }
                              },
                              [_vm._v("宝贝款号：" + _vm._s(goods.globalCode))]
                            ),
                            _vm._v(" "),
                            _c(
                              "van-col",
                              {
                                staticClass: "goods-card-detail-content",
                                attrs: { span: "24" }
                              },
                              [
                                _vm._v(
                                  "宝贝规格：\n                            "
                                ),
                                _vm._l(goods.itemSkus, function(sku) {
                                  return _c("span", [
                                    _vm._v(_vm._s(sku.specifications) + " ")
                                  ])
                                })
                              ],
                              2
                            )
                          ],
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "van-col",
                          {
                            staticClass: "goods-card-model",
                            attrs: { span: "24" }
                          },
                          _vm._l(goods.itemSkus, function(sku) {
                            return _c(
                              "van-tag",
                              {
                                staticClass: "sku",
                                attrs: { plain: "", type: "danger" }
                              },
                              [_vm._v(_vm._s(sku.specifications))]
                            )
                          }),
                          1
                        ),
                        _vm._v(" "),
                        _c(
                          "van-col",
                          {
                            staticStyle: {
                              "text-align": "right",
                              "margin-top": "10px"
                            },
                            attrs: { span: "24" }
                          },
                          [
                            _c(
                              "van-button",
                              {
                                attrs: {
                                  type: "warning",
                                  plain: "",
                                  size: "small"
                                }
                              },
                              [_vm._v("客服")]
                            ),
                            _vm._v(" "),
                            _c(
                              "van-button",
                              {
                                attrs: {
                                  type: "warning",
                                  plain: "",
                                  size: "small"
                                }
                              },
                              [_vm._v("转发")]
                            )
                          ],
                          1
                        )
                      ],
                      1
                    )
                  })
                ],
                2
              )
            ],
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/api/home.js":
/*!**********************************!*\
  !*** ./resources/js/api/home.js ***!
  \**********************************/
/*! exports provided: getActivityList, getGoodsList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getActivityList", function() { return getActivityList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getGoodsList", function() { return getGoodsList; });
/* harmony import */ var _utils_request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/request */ "./resources/js/utils/request.js");

function getActivityList(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/activity',
    params: params
  });
}
function getGoodsList(params) {
  return Object(_utils_request__WEBPACK_IMPORTED_MODULE_0__["default"])({
    url: '/api/goods',
    params: params
  });
}

/***/ }),

/***/ "./resources/js/utils/request.js":
/*!***************************************!*\
  !*** ./resources/js/utils/request.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(process) {/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/_axios@0.19.0@axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vant__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vant */ "./node_modules/_vant@2.1.2@vant/es/index.js");


/**
 * 创建axios对象
 *
 * @type {AxiosInstance}
 */

var service = axios__WEBPACK_IMPORTED_MODULE_0___default.a.create({
  baseURL: process.env.API_DOMAIN,
  timeout: 30000,
  'Content-Type': 'application/json'
}); // 请求拦截器 请求之前

service.interceptors.request.use(function (config) {
  console.log(config);
  return config;
}); // 响应拦截器 响应处理之前

service.interceptors.response.use(function (response) {
  if (response.data.code !== 200) {
    vant__WEBPACK_IMPORTED_MODULE_1__["Dialog"].alert({
      title: '警告',
      message: response.data.message
    });
  }

  return response;
});
/* harmony default export */ __webpack_exports__["default"] = (service);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/_process@0.11.10@process/browser.js */ "./node_modules/_process@0.11.10@process/browser.js")))

/***/ }),

/***/ "./resources/js/views/Detail.vue":
/*!***************************************!*\
  !*** ./resources/js/views/Detail.vue ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Detail_vue_vue_type_template_id_78b841b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Detail.vue?vue&type=template&id=78b841b0&scoped=true& */ "./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&scoped=true&");
/* harmony import */ var _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Detail.vue?vue&type=script&lang=js& */ "./resources/js/views/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css& */ "./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Detail_vue_vue_type_template_id_78b841b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Detail_vue_vue_type_template_id_78b841b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "78b841b0",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Detail.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Detail.vue?vue&type=script&lang=js&":
/*!****************************************************************!*\
  !*** ./resources/js/views/Detail.vue?vue&type=script&lang=js& ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--4-0!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css&":
/*!************************************************************************************************!*\
  !*** ./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css& ***!
  \************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_style-loader@0.23.1@style-loader!../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-1!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css& */ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=style&index=0&id=78b841b0&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_style_index_0_id_78b841b0_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&scoped=true&":
/*!**********************************************************************************!*\
  !*** ./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&scoped=true& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_78b841b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Detail.vue?vue&type=template&id=78b841b0&scoped=true& */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Detail.vue?vue&type=template&id=78b841b0&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_78b841b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Detail_vue_vue_type_template_id_78b841b0_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);