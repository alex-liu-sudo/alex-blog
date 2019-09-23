(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[2],{

/***/ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--4-0!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************************/
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
      activities: []
    };
  },
  mounted: function mounted() {// this.assign();
  },
  methods: {
    assign: function assign() {
      var _this = this;

      var activity = Object(_api_home__WEBPACK_IMPORTED_MODULE_0__["getActivityList"])();
      activity.then(function (resp) {
        _this.activities = resp.data.data;
        console.log(_this.activities);
      });
    },
    onRefresh: function onRefresh() {
      var _this2 = this;

      setTimeout(function () {
        _this2.$toast('刷新成功');

        _this2.isLoading = false;
        _this2.count++;
      }, 500);
    },
    getImg: function getImg(imageSrc) {
      Object(vant__WEBPACK_IMPORTED_MODULE_1__["ImagePreview"])([imageSrc]);
    },
    onLoad: function onLoad() {
      var _this3 = this;

      var activity = Object(_api_home__WEBPACK_IMPORTED_MODULE_0__["getActivityList"])();
      activity.then(function (resp) {
        _this3.activities = resp.data.data;
        setTimeout(function () {
          _this3.loading = false;
          _this3.finished = true;
        }, 500);
      })["catch"](function (reason) {
        _this3.$toast('获取数据失败: ' + reason);
      });
    },
    skipDetail: function skipDetail(activity) {
      sessionStorage.activity = JSON.stringify(activity);
      this.$router.push('/detail');
    },
    showDetail: function showDetail(content) {
      vant__WEBPACK_IMPORTED_MODULE_1__["Dialog"].alert({
        title: '消息详情',
        message: content
      }).then(function () {// on close
      });
    }
  }
});

/***/ }),

/***/ "./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_css-loader@1.0.1@css-loader??ref--6-1!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js */ "./node_modules/_css-loader@1.0.1@css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.content[data-v-63cd6604] {\n    background-color: #f3f3f3;\n    padding: 6px 15px;\n    min-height: 1000px;\n    padding-bottom: 20px;\n}\n.activity-card[data-v-63cd6604] {\n    /*height: 350px;*/\n    border-radius: 10px;\n    margin-top: 5px;\n    margin-bottom: 10px;\n    background: #fff;\n    padding: 10px\n}\n.activity-header[data-v-63cd6604] {\n    height:70px;\n    background: #fff;\n    /*padding: 10px*/\n}\n.activity-header .activity-left[data-v-63cd6604] {\n    width: 50px;\n    height: 50px\n}\n.activity-header .activity-left img[data-v-63cd6604] {\n    height: 100%;\n    width: 100%;\n    border-radius: 3px;\n    border: 1px solid #eee\n}\n.activity-right[data-v-63cd6604] {\n    margin-left: 10px\n}\n.activity-right-title[data-v-63cd6604] {\n    line-height: 30px;\n    font-size: 15px;\n    /*background: yellow;*/\n    color: #1b4b72;\n}\n.activity-right-desc[data-v-63cd6604] {\n    color: #333;\n    font-size: 12px\n}\n.activity-content[data-v-63cd6604] {\n    /*background: blue;*/\n    /*height:200px;*/\n    margin-left: 10px;\n    margin-top: -20px\n}\n.activity-tag[data-v-63cd6604] {\n    /*background: orange;*/\n    height: 20px;\n    margin-bottom: 5px;\n}\n.activity-detail[data-v-63cd6604] {\n    font-size: 12px;\n    height: 35px;\n    overflow: hidden;\n    text-overflow:ellipsis;\n    white-space:normal;\n    /*white-space: warp;*/\n}\n.van-grid-item .van-image[data-v-63cd6604] {\n    height: 65px;\n    /*width: 60px*/\n}\n.van-grid-item .van-image img[data-v-63cd6604] {\n    height: 65px;\n    /*width: 60px*/\n}\n.van-grid-item__content[data-v-63cd6604] {\n    padding: 8px;\n}\n\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_style-loader@0.23.1@style-loader!./node_modules/_css-loader@1.0.1@css-loader??ref--6-1!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-1!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");

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

/***/ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \****************************************************************************************************************************************************************************************************************************************************/
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
    { staticClass: "home-container" },
    [
      _c(
        "van-tabs",
        { attrs: { animated: "", swipeable: "", sticky: "" } },
        _vm._l(_vm.tabName, function(name) {
          return _c(
            "van-tab",
            { attrs: { title: name } },
            [
              _c(
                "van-pull-refresh",
                {
                  on: { refresh: _vm.onRefresh },
                  model: {
                    value: _vm.isLoading,
                    callback: function($$v) {
                      _vm.isLoading = $$v
                    },
                    expression: "isLoading"
                  }
                },
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
                    _vm._l(_vm.activities, function(activity) {
                      return _c(
                        "van-row",
                        { staticClass: "activity-card" },
                        [
                          _c(
                            "van-col",
                            {
                              staticClass: "activity-header",
                              attrs: { span: "24" }
                            },
                            [
                              _c(
                                "van-col",
                                {
                                  staticClass: "activity-left",
                                  attrs: { span: "4" }
                                },
                                [
                                  _c("img", {
                                    attrs: {
                                      src: activity.brandLogoUrl,
                                      alt: ""
                                    }
                                  })
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticClass: "activity-right",
                                  attrs: { span: "19" }
                                },
                                [
                                  _c(
                                    "van-col",
                                    {
                                      staticClass: "activity-right-title",
                                      attrs: { span: "24" }
                                    },
                                    [
                                      _c(
                                        "span",
                                        {
                                          on: {
                                            click: function($event) {
                                              return _vm.skipDetail(activity)
                                            }
                                          }
                                        },
                                        [_vm._v(_vm._s(activity.brandName))]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "van-col",
                                    {
                                      staticClass: "activity-right-desc",
                                      attrs: { span: "24" }
                                    },
                                    [
                                      _c("span", [
                                        _vm._v(
                                          "\n                                            " +
                                            _vm._s(activity.brandName) +
                                            _vm._s(
                                              activity.classificationName ==
                                                "其他"
                                                ? ""
                                                : activity.classificationName
                                            ) +
                                            "精选专卖店\n                                        "
                                        )
                                      ])
                                    ]
                                  )
                                ],
                                1
                              )
                            ],
                            1
                          ),
                          _vm._v(" "),
                          _c("van-col", { attrs: { span: "4" } }),
                          _vm._v(" "),
                          _c(
                            "van-col",
                            {
                              staticClass: "activity-content",
                              attrs: { span: "19" }
                            },
                            [
                              _c(
                                "van-col",
                                {
                                  staticClass: "activity-tag",
                                  attrs: { span: "24" }
                                },
                                [
                                  _c(
                                    "van-tag",
                                    { attrs: { plain: "", color: "#f2826a" } },
                                    [_vm._v("七天无理由退货")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "van-tag",
                                    { attrs: { plain: "", color: "#f2826a" } },
                                    [_vm._v("闪电发货")]
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticClass: "activity-detail",
                                  attrs: { span: "24" }
                                },
                                [
                                  _c(
                                    "span",
                                    {
                                      on: {
                                        click: function($event) {
                                          return _vm.showDetail(
                                            activity.content
                                          )
                                        }
                                      }
                                    },
                                    [
                                      _vm._v(
                                        "\n                                           " +
                                          _vm._s(activity.content) +
                                          "...\n                                    "
                                      )
                                    ]
                                  )
                                ]
                              ),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                { attrs: { span: "24" } },
                                [
                                  _c(
                                    "van-grid",
                                    {
                                      attrs: { border: false, "column-num": 3 }
                                    },
                                    _vm._l(
                                      activity.activityPreviewImages,
                                      function(imageSrc) {
                                        return _c(
                                          "van-grid-item",
                                          [
                                            _c("van-image", {
                                              attrs: { src: imageSrc },
                                              on: {
                                                click: function($event) {
                                                  return _vm.getImg(imageSrc)
                                                }
                                              }
                                            })
                                          ],
                                          1
                                        )
                                      }
                                    ),
                                    1
                                  )
                                ],
                                1
                              ),
                              _vm._v(" "),
                              _c(
                                "van-col",
                                {
                                  staticStyle: { "text-align": "right" },
                                  attrs: { span: "19", offset: "5" }
                                },
                                [
                                  _c(
                                    "van-button",
                                    {
                                      attrs: {
                                        type: "warning",
                                        plain: "",
                                        size: "small"
                                      },
                                      on: {
                                        click: function($event) {
                                          return _vm.skipDetail(activity)
                                        }
                                      }
                                    },
                                    [_vm._v("转发")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "van-button",
                                    {
                                      attrs: { type: "warning", size: "small" },
                                      on: {
                                        click: function($event) {
                                          return _vm.skipDetail(activity)
                                        }
                                      }
                                    },
                                    [_vm._v("提醒")]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "van-button",
                                    {
                                      attrs: { type: "warning", size: "small" },
                                      on: {
                                        click: function($event) {
                                          return _vm.skipDetail(activity)
                                        }
                                      }
                                    },
                                    [_vm._v("预览")]
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
                    }),
                    1
                  )
                ],
                1
              )
            ],
            1
          )
        }),
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

/***/ "./resources/js/views/Home.vue":
/*!*************************************!*\
  !*** ./resources/js/views/Home.vue ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony import */ var _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Home.vue?vue&type=script&lang=js& */ "./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_15_7_1_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "63cd6604",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/views/Home.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=script&lang=js&":
/*!**************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=script&lang=js& ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_babel-loader@8.0.6@babel-loader/lib??ref--4-0!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Home.vue?vue&type=script&lang=js& */ "./node_modules/_babel-loader@8.0.6@babel-loader/lib/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_8_0_6_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&":
/*!**********************************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& ***!
  \**********************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_style-loader@0.23.1@style-loader!../../../node_modules/_css-loader@1.0.1@css-loader??ref--6-1!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/_postcss-loader@3.0.0@postcss-loader/src??ref--6-2!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css& */ "./node_modules/_style-loader@0.23.1@style-loader/index.js!./node_modules/_css-loader@1.0.1@css-loader/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/stylePostLoader.js!./node_modules/_postcss-loader@3.0.0@postcss-loader/src/index.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=style&index=0&id=63cd6604&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_0_23_1_style_loader_index_js_node_modules_css_loader_1_0_1_css_loader_index_js_ref_6_1_node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_3_0_0_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_style_index_0_id_63cd6604_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&":
/*!********************************************************************************!*\
  !*** ./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/_vue-loader@15.7.1@vue-loader/lib??vue-loader-options!./Home.vue?vue&type=template&id=63cd6604&scoped=true& */ "./node_modules/_vue-loader@15.7.1@vue-loader/lib/loaders/templateLoader.js?!./node_modules/_vue-loader@15.7.1@vue-loader/lib/index.js?!./resources/js/views/Home.vue?vue&type=template&id=63cd6604&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_15_7_1_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_15_7_1_vue_loader_lib_index_js_vue_loader_options_Home_vue_vue_type_template_id_63cd6604_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);