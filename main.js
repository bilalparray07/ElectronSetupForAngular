(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["main"],{

/***/ 3465:
/*!******************************!*\
  !*** ./src/app-constants.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppConstants: () => (/* binding */ AppConstants)
/* harmony export */ });
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/environments/environment */ 553);

// TODO: MOVE ALL CONSTANTS HERE
const AppConstants = {
  ApiUrls: {
    TEST_URL: 'test/test',
    LOG_URL: 'log',
    ACCOUNT_URL: 'api/token',
    DUMMY_TEACHER_URL: 'api/DummyTeacher',
    DUMMY_STUDENT_URL: 'api/token'
  },
  DbKeys: {
    ACCESS_TOKEN: 'ACCESS_TOKEN',
    LOGIN_USER: 'LOGIN_USER',
    API_RESP_CACHE: 'API_RESP_CACHE',
    PLATFORM: 'PLATFORM',
    REMEMBER_PWD: 'REMEMBER_PWD',
    COMPANY_CODE: 'COMPANY_CODE'
  },
  DbDefaultValues: {},
  ErrorPrompts: {
    App_StartError: 'Error occured. Please restart the application.',
    Load_Data_Error: 'Error in loading data. Please try again.',
    Invalid_Input_Data: 'Invalid data.Please try again.',
    Unknown_Error: 'Error occured. Please try again.',
    Network_Error: 'Please check network and try again.',
    Save_Data_Error: 'Error in saving. Please try again.',
    Delete_Data_Error: 'Error in delete. Please try again.',
    Permission_Error: 'Permission denied.',
    Unauthorized_User: 'User not authorized. Please relogin.'
  },
  HeadersName: {
    ApiType: 'targetapitype',
    DevApk: 'isdeveloperapk',
    AppVersion: 'appversion'
    // CORS_ALLOW_ORIGIN: "Access-Control-Allow-Origin",
    // CORS_ALLOW_METHODS: "Access-Control-Allow-Methods",
    // CORS_ALLOW_CREDENTIALS: "Access-Control-Allow-Credentials",
  },

  HeadersValue: {
    ApiType: 'abcd',
    DevApk: (!src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.production).toString(),
    AppVersion: src_environments_environment__WEBPACK_IMPORTED_MODULE_0__.environment.applicationVersion
    // CORS_ALLOW_ORIGIN: "http://localhost:4200",
    // CORS_ALLOW_METHODS: "GET, POST, OPTIONS, DELETE, PUT",
    // CORS_ALLOW_CREDENTIALS: "true",
  },

  WebRoutes: {
    SAMPLE: 'sample',
    TEACHERS: 'teachers',
    UNAUTHORIZED: '',
    LOGIN: 'login',
    HOME: 'home'
  },
  Token_Info_Keys: {
    Role: 'http://schemas.microsoft.com/ws/2008/06/identity/claims/role',
    Expiry: 'exp',
    CompanyCode: 'clCd',
    Audience: 'aud',
    CompanyId: 'clId',
    RecordId: 'dbRId',
    EmailAddress: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/emailaddress',
    UserName: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/name',
    GivenName: 'http://schemas.xmlsoap.org/ws/2005/05/identity/claims/givenname',
    Issuer: 'iss',
    TokenStart: 'nbf'
  }
};

/***/ }),

/***/ 3966:
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppRoutingModule: () => (/* binding */ AppRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;



const routes = [{
  path: "",
  redirectTo: "common",
  pathMatch: "full"
}, {
  path: "login",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_clients_base-client_base-api_client_ts-src_app_clients_helpers_common-respons-11e25e"), __webpack_require__.e("src_app_components_main_end-user_login_login_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/login/login.module */ 8427)).then(m => m.LoginModule)
}, {
  path: "home",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_main_end-user_home_home_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/home/home.module */ 2488)).then(m => m.HomeModule)
}, {
  path: "teachers",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_clients_base-client_base-api_client_ts-src_app_clients_helpers_common-respons-11e25e"), __webpack_require__.e("src_app_components_main_end-user_dummy-teacher_dummy-teacher_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/dummy-teacher/dummy-teacher.module */ 5182)).then(m => m.DummyTeacherModule)
  // canActivate: [AuthGuard],
  // data: {
  //   allowedRole: [RoleTypeSM.ClientAdmin]
  // }
}, {
  path: "common",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_models_internal_common-models_ts-src_app_services_converter_service_ts-src_ap-638cbb"), __webpack_require__.e("src_app_components_main_end-user_common-converters_common-converters_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/common-converters/common-converters.module */ 7892)).then(m => m.CommonConvertersModule)
}, {
  path: "engineering",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_models_internal_common-models_ts-src_app_services_converter_service_ts-src_ap-638cbb"), __webpack_require__.e("src_app_components_main_end-user_engineering-converters_engineering-converters_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/engineering-converters/engineering-converters.module */ 9440)).then(m => m.EngineeringConvertersModule)
}, {
  path: "favorites",
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_models_internal_common-models_ts-src_app_services_converter_service_ts-src_ap-638cbb"), __webpack_require__.e("src_app_components_main_end-user_favorites_favorites_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/favorites/favorites.module */ 5999)).then(m => m.FavoritesModule)
}, {
  path: 'others',
  loadChildren: () => Promise.all(/*! import() */[__webpack_require__.e("default-src_app_models_internal_common-models_ts-src_app_services_converter_service_ts-src_ap-638cbb"), __webpack_require__.e("src_app_components_main_end-user_others_others_module_ts")]).then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/end-user/others/others.module */ 6207)).then(m => m.OthersModule)
}, {
  path: "**",
  pathMatch: "full",
  loadChildren: () => __webpack_require__.e(/*! import() */ "src_app_components_main_not-found_not-found_module_ts").then(__webpack_require__.bind(__webpack_require__, /*! ./components/main/not-found/not-found.module */ 730)).then(m => m.NotFoundModule)
}];
class AppRoutingModule {}
_class = AppRoutingModule;
_class.ɵfac = function AppRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule.forRoot(routes), _angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_1__.RouterModule]
  });
})();

/***/ }),

/***/ 6401:
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppComponent: () => (/* binding */ AppComponent)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./services/common.service */ 5731);
/* harmony import */ var _services_zoom_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./services/zoom.service */ 6447);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/internal/top-nav/top-nav.component */ 5025);
/* harmony import */ var _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/internal/spinner/spinner.component */ 5836);
var _class;






class AppComponent {
  constructor(commonService, zoomService) {
    this.zoomService = zoomService;
    this.showToast = false;
    this.title = "Unit Converter";
    this._commonService = commonService;
  }
  get zoomFactor() {
    return this.zoomService.getZoomFactor();
  }
}
_class = AppComponent;
_class.ɵfac = function AppComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](_services_zoom_service__WEBPACK_IMPORTED_MODULE_1__.ZoomService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-root"]],
  decls: 6,
  vars: 2,
  consts: [["id", "wrapper"], [1, "spinnerComponent"], ["id", "page-content-wrapper"], [2, "transform-origin", "top left"]],
  template: function AppComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](1, "spinner", 1)(2, "top-nav");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](3, "div", 2)(4, "div", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](5, "router-outlet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵstyleProp"]("transform", "scale(" + ctx.zoomFactor + ")");
    }
  },
  dependencies: [_angular_router__WEBPACK_IMPORTED_MODULE_5__.RouterOutlet, _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_2__.TopNavComponent, _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_3__.SpinnerComponent],
  styles: ["#page-content-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  top: 62px;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usa0JBQUE7RUFDQSxTQUFBO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIjcGFnZS1jb250ZW50LXdyYXBwZXIge1xyXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcclxuICB0b3A6IDYycHg7XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8629:
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppModule: () => (/* binding */ AppModule)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-routing.module */ 3966);
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.component */ 6401);
/* harmony import */ var _services_log_handler_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/log-handler.service */ 4943);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_internal_left_side_menu_left_side_menu_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/internal/left-side-menu/left-side-menu.component */ 1573);
/* harmony import */ var _components_internal_right_side_menu_right_side_menu_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/internal/right-side-menu/right-side-menu.component */ 910);
/* harmony import */ var _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/internal/top-nav/top-nav.component */ 5025);
/* harmony import */ var _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/internal/spinner/spinner.component */ 5836);
/* harmony import */ var _components_internal_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/internal/footer/footer.component */ 7252);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);
var _class;













class AppModule {}
_class = AppModule;
_class.ɵfac = function AppModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineNgModule"]({
  type: _class,
  bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent]
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineInjector"]({
  providers: [{
    provide: _angular_core__WEBPACK_IMPORTED_MODULE_8__.ErrorHandler,
    useClass: _services_log_handler_service__WEBPACK_IMPORTED_MODULE_2__.LogHandlerService
  }],
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_internal_left_side_menu_left_side_menu_component__WEBPACK_IMPORTED_MODULE_3__.LeftSideMenuComponent, _components_internal_right_side_menu_right_side_menu_component__WEBPACK_IMPORTED_MODULE_4__.RightSideMenuComponent, _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__.TopNavComponent, _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _components_internal_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵsetNgModuleScope"](AppModule, {
    declarations: [_app_component__WEBPACK_IMPORTED_MODULE_1__.AppComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.FormsModule, _angular_platform_browser__WEBPACK_IMPORTED_MODULE_10__.BrowserModule, _angular_common__WEBPACK_IMPORTED_MODULE_11__.CommonModule, _app_routing_module__WEBPACK_IMPORTED_MODULE_0__.AppRoutingModule, _components_internal_left_side_menu_left_side_menu_component__WEBPACK_IMPORTED_MODULE_3__.LeftSideMenuComponent, _components_internal_right_side_menu_right_side_menu_component__WEBPACK_IMPORTED_MODULE_4__.RightSideMenuComponent, _components_internal_top_nav_top_nav_component__WEBPACK_IMPORTED_MODULE_5__.TopNavComponent, _components_internal_spinner_spinner_component__WEBPACK_IMPORTED_MODULE_6__.SpinnerComponent, _components_internal_footer_footer_component__WEBPACK_IMPORTED_MODULE_7__.FooterComponent]
  });
})();

/***/ }),

/***/ 3701:
/*!*********************************************************!*\
  !*** ./src/app/clients/base-client/base-ajax.client.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseAjaxClient: () => (/* binding */ BaseAjaxClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ 5486);
/* harmony import */ var src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/internal/dictionary-collection */ 7754);



class BaseAjaxClient {
  constructor() {
    var _this = this;
    this.GetHttpDataAsync = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullReqUrl, method, reqBody, headers, contentType) {
        if (contentType !== '' && contentType !== 'application/json') {
          throw new Error('Content Type other then JSON not supported at the moment.');
        }
        if (headers == null) {
          headers = new src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_1__.DictionaryCollection();
        }
        headers.Add('Content-Type', contentType);
        let reqBodyTxt = '';
        reqBodyTxt = JSON.stringify(reqBody);
        let response = yield _this.FetchAsync(fullReqUrl, method, headers, reqBodyTxt);
        if (response == null) {
          throw new Error('Response null after api call. please report the event to administrator.');
        }
        return response;
      });
      return function (_x, _x2, _x3, _x4, _x5) {
        return _ref.apply(this, arguments);
      };
    }();
    /**
     * EG - Headers > { 'content-type': 'application/json' };
     */
    this.FetchAsync = /*#__PURE__*/function () {
      var _ref2 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullReqUrl, reqMethod, headersToAdd, reqBody) {
        let hdrs = {};
        if (headersToAdd != null && headersToAdd.Count() > 0) {
          headersToAdd.Keys().forEach(key => {
            hdrs[key] = headersToAdd.Item(key);
          });
          // hdrs["crossOrigin"] =  true;
          let config = _this.GetAxiosConfig();
          config.url = fullReqUrl;
          config.method = reqMethod;
          config.headers = hdrs;
          config.data = reqBody;
          let response = yield axios__WEBPACK_IMPORTED_MODULE_2__["default"].request(config);
          return response;
        }
        return null;
      });
      return function (_x6, _x7, _x8, _x9) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.GetAxiosConfig = () => {
      let config = {
        url: '',
        method: 'get',
        // `apiBaseUrl` will be prepended to `url` unless `url` is absolute.
        // It can be convenient to set `apiBaseUrl` for an instance of axios to pass relative URLs
        // to methods of that instance.
        apiBaseUrl: '',
        // `transformRequest` allows changes to the request data before it is sent to the server
        // This is only applicable for request methods 'PUT', 'POST', 'PATCH' and 'DELETE'
        // The last function in the array must return a string or an instance of Buffer, ArrayBuffer,
        // FormData or Stream
        // You may modify the headers object.
        // transformRequest: [function (data, headers) {
        //     // Do whatever you want to transform the data
        //     return data;
        // }],
        // `transformResponse` allows changes to the response data to be made before
        // it is passed to then/catch
        // transformResponse: [function (data) {
        //     // Do whatever you want to transform the data
        //     return data;
        // }],
        // `data` is the data to be sent as the request body
        // Only applicable for request methods 'PUT', 'POST', and 'PATCH'
        // When no `transformRequest` is set, must be of one of the following types:
        // - string, plain object, ArrayBuffer, ArrayBufferView, URLSearchParams
        // - Browser only: FormData, File, Blob
        // - Node only: Stream, Buffer
        // `timeout` specifies the number of milliseconds before the request times out.
        // If the request takes longer than `timeout`, the request will be aborted.
        timeout: 0,
        // `withCredentials` indicates whether or not cross-site Access-Control requests
        // should be made using credentials
        withCredentials: false,
        // `adapter` allows custom handling of requests which makes testing easier.
        // Return a promise and supply a valid response (see lib/adapters/README.md).
        // adapter: function (config) {
        //     /* ... */
        // },
        // `responseType` indicates the type of data that the server will respond with
        // options are: 'arraybuffer', 'document', 'json', 'text', 'stream'
        //   browser only: 'blob'
        responseType: 'json',
        // `onUploadProgress` allows handling of progress events for uploads
        onUploadProgress(progressEvent) {
          // Do whatever you want with the native progress event
        },
        // `onDownloadProgress` allows handling of progress events for downloads
        onDownloadProgress(progressEvent) {
          // Do whatever you want with the native progress event
        },
        // `maxContentLength` defines the max size of the http response content in bytes allowed
        maxContentLength: 2000,
        // `validateStatus` defines whether to resolve or reject the promise for a given
        // HTTP response status code. If `validateStatus` returns `true` (or is set to `null`
        // or `undefined`), the promise will be resolved; otherwise, the promise will be
        // rejected.
        validateStatus(status) {
          // return status >= 200 && status < 300; // default
          // we do not throw exception from the promise, if needed handle at sinle place in base client.
          return true;
        },
        // `maxRedirects` defines the maximum number of redirects to follow in node.js.
        // If set to 0, no redirects will be followed.
        maxRedirects: 5 // default
        // // `cancelToken` specifies a cancel token that can be used to cancel the request
        // // (see Cancellation section below for details)
        // cancelToken: new CancelToken(function (cancel) {
        // })
      };

      return config;
    };
    this.IsSuccessCode = respStatusCode => {
      return respStatusCode >= 200 && respStatusCode < 300;
    };
  }
}

/***/ }),

/***/ 4739:
/*!*********************************************************!*\
  !*** ./src/app/clients/helpers/common-logger.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonLogger: () => (/* binding */ CommonLogger)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _logger_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../logger.client */ 1174);
/* harmony import */ var src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/internal/log-location */ 2130);
/* harmony import */ var src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/internal/log-type */ 7493);
/* harmony import */ var src_app_models_internal_logger_config__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/internal/logger-config */ 3037);
/* harmony import */ var src_app_models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/service/api-contracts/base/api-request */ 2517);
/* harmony import */ var src_app_models_service_api_contracts_error_log__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/service/api-contracts/error-log */ 7452);

var _class;








class CommonLogger {
  // self executing setter
  // static file: File
  constructor() {
    throw new Error('Cannot instantiate static class "Logger".');
  }
  static GetDefaultLoggerConfigObject() {
    const logConfig = new src_app_models_internal_logger_config__WEBPACK_IMPORTED_MODULE_6__.LoggerConfig();
    logConfig.exceptionLogLocations = [];
    logConfig.logLocations = [];
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToConsole) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToApi) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Api);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToElasticCluster) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.ElasticCluster);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToApi) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Api);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToConsole) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToElasticCluster) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.ElasticCluster);
    if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.exceptionToFile) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.File);
    if (logConfig.exceptionLogLocations.length == 0) logConfig.exceptionLogLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.None);
    if (logConfig.logLocations.length == 0) logConfig.logLocations.push(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.None);
    return logConfig;
  }
  static LogException(data) {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.None)) return;
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console)) console.log(data);
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.File)) yield _this.AddItemToFile(src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__.LogType.Log, data);
        if (_this.loggerConfig.exceptionLogLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Api)) yield _this.AddItemToCommonApi(src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__.LogType.Log, data);
      } catch (error) {
        console.log(error);
      }
    })();
  }
  static LogTextOrObject(data) {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        if (_this2.loggerConfig.logLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.Console)) console.log(data);
        if (_this2.loggerConfig.logLocations.includes(src_app_models_internal_log_location__WEBPACK_IMPORTED_MODULE_4__.LogLocation.File)) yield _this2.AddItemToFile(src_app_models_internal_log_type__WEBPACK_IMPORTED_MODULE_5__.LogType.Log, data);
      } catch (error) {
        console.log(error);
      }
    })();
  }
  static AddItemToFile(logType, data) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return; //for now
      try {} catch (error) {}
      //code to add item to local file    
    })();
  }

  static AddItemToCommonApi(logType, data) {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // return; //for now
      try {
        let errorLogs = [];
        let errorLog = new src_app_models_service_api_contracts_error_log__WEBPACK_IMPORTED_MODULE_8__.ErrorLog();
        if (_this3.storageService) {
          // errorLog.username = await this.storageService.getFromStorage(AppConstants.DbKeys.USER_ID);
          errorLog.platform = yield _this3.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.PLATFORM);
        }
        errorLog.name = data.name;
        errorLog.message = data.message;
        errorLog.stack = data.stack;
        errorLog.logType = logType;
        if (data.name === undefined) errorLog.name = data.toString();
        if (data.message === undefined) errorLog.message = data.toString();
        errorLog.createdDateUTC = new Date().toUTCString();
        errorLogs.push(errorLog);
        var logData = new src_app_models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_7__.ApiRequest();
        logData.reqData = errorLogs;
        CommonLogger.loggerClient.SendLogsToServerAsync(errorLogs, null);
      } catch (error) {
        if (src_environments_environment__WEBPACK_IMPORTED_MODULE_2__.environment.LoggingInfo.logToConsole) console.log(error);
      }
    })();
  }
}
_class = CommonLogger;
_class.loggerConfig = (() => {
  return _class.GetDefaultLoggerConfigObject();
})();
// self executing setter
_class.loggerClient = (() => {
  return new _logger_client__WEBPACK_IMPORTED_MODULE_3__.LoggerClient();
})();

/***/ }),

/***/ 1174:
/*!******************************************!*\
  !*** ./src/app/clients/logger.client.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggerClient: () => (/* binding */ LoggerClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_client_base_ajax_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-client/base-ajax.client */ 3701);
/* harmony import */ var _models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/internal/dictionary-collection */ 7754);
/* harmony import */ var _models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/service/api-contracts/base/api-request */ 2517);





class LoggerClient extends _base_client_base_ajax_client__WEBPACK_IMPORTED_MODULE_2__.BaseAjaxClient {
  constructor() {
    var _this;
    super();
    _this = this;
    this.SendLogsToServerAsync = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (logsArr, headers) {
        // think if we nee Base Req Here, if so, move class out of helpers.
        let apiReq = new _models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_4__.ApiRequest();
        apiReq.reqData = logsArr;
        if (headers == null) headers = new _models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_3__.DictionaryCollection();
        headers.Add(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersName.ApiType, src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersValue.ApiType);
        headers.Add(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersName.DevApk, src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersValue.DevApk);
        headers.Add(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersName.AppVersion, src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.HeadersValue.AppVersion);
        return _this.GetHttpDataAsync(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.LOG_URL, 'POST', apiReq, headers, 'application/json');
      });
      return function (_x, _x2) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}

/***/ }),

/***/ 121:
/*!**********************************************!*\
  !*** ./src/app/components/base.component.ts ***!
  \**********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseComponent: () => (/* binding */ BaseComponent)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);

class BaseComponent {
  constructor(commonService, exceptionHandler) {
    this._commonService = commonService;
    this._exceptionHandler = exceptionHandler;
  }
  loadPageData() {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
}

/***/ }),

/***/ 7252:
/*!****************************************************************!*\
  !*** ./src/app/components/internal/footer/footer.component.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FooterComponent: () => (/* binding */ FooterComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;



class FooterComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = FooterComponent;
_class.ɵfac = function FooterComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["footer-nav"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 30,
  vars: 0,
  consts: [[1, "navbar", "fixed-bottom", "navbar-expand-sm", "navbar-dark", "bg-dark"], [1, "container-fluid"], ["href", "#", 1, "navbar-brand"], ["type", "button", "data-bs-toggle", "collapse", "data-bs-target", "#navbarCollapse", "aria-controls", "navbarCollapse", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-toggler"], [1, "navbar-toggler-icon"], ["id", "navbarCollapse", 1, "collapse", "navbar-collapse"], [1, "navbar-nav"], [1, "nav-item"], ["aria-current", "page", "href", "#", 1, "nav-link", "active"], ["href", "#", 1, "nav-link"], ["href", "#", "tabindex", "-1", "aria-disabled", "true", 1, "nav-link", "disabled"], [1, "nav-item", "dropup"], ["href", "#", "id", "dropdown10", "data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "nav-link", "dropdown-toggle"], ["aria-labelledby", "dropdown10", 1, "dropdown-menu"], ["href", "#", 1, "dropdown-item"]],
  template: function FooterComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](3, "Bottom navbar");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](4, "button", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](5, "span", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "div", 5)(7, "ul", 6)(8, "li", 7)(9, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](10, "Home");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](11, "li", 7)(12, "a", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Link");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "li", 7)(15, "a", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](16, "Disabled");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](17, "li", 11)(18, "a", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](19, "Dropup");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](20, "ul", 13)(21, "li")(22, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](23, "Action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](24, "li")(25, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, "Another action");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li")(28, "a", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](29, "Something else here");
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()()()()();
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1573:
/*!********************************************************************************!*\
  !*** ./src/app/components/internal/left-side-menu/left-side-menu.component.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LeftSideMenuComponent: () => (/* binding */ LeftSideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;




function LeftSideMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Start Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shortcuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " MenuOptions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 6)(19, "li", 7)(20, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Test1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7)(24, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Test2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 7)(28, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Test3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0._commonService.layoutViewModel.leftMenuClass);
  }
}
class LeftSideMenuComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = LeftSideMenuComponent;
_class.ɵfac = function LeftSideMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["left-side-menu"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "border-end bg-white", "id", "left-sidebar-wrapper", 3, "class", 4, "ngIf"], ["id", "left-sidebar-wrapper", 1, "border-end", "bg-white"], [1, "sidebar-heading", "border-bottom", "bg-light"], [1, "list-group", "list-group-flush"], ["href", "#!", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3"], ["data-bs-target", "#pageSubmenuLeft", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3", "dropdown-toggle"], ["id", "pageSubmenuLeft", 1, "btn-toggle-nav", "list-unstyled", "fw-normal", "pb-1", "small"], [1, "list-group-item", "p-3"], ["href", "#"], [1, "bi", "bi-1-circle"]],
  template: function LeftSideMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, LeftSideMenuComponent_div_0_Template, 31, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._commonService.layoutViewModel.showLeftMenu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 910:
/*!**********************************************************************************!*\
  !*** ./src/app/components/internal/right-side-menu/right-side-menu.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RightSideMenuComponent: () => (/* binding */ RightSideMenuComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;




function RightSideMenuComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div", 1)(1, "div", 2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](2, "Start Bootstrap");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](3, "div", 3)(4, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](5, "Dashboard");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](6, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](7, "Shortcuts");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](8, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](9, "Overview");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](10, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](11, "Events");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](12, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](13, "Profile");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](14, "a", 4);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](15, "Status");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](16, "a", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](17, " MenuOptions ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](18, "ul", 6)(19, "li", 7)(20, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](21, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](22, " Test1 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](23, "li", 7)(24, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](25, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](26, " Test2 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](27, "li", 7)(28, "a", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](29, "i", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](30, " Test3 ");
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵclassMap"](ctx_r0._commonService.layoutViewModel.rightMenuClass);
  }
}
class RightSideMenuComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = RightSideMenuComponent;
_class.ɵfac = function RightSideMenuComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["right-side-menu"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [["class", "border-end bg-white", "id", "right-sidebar-wrapper", 3, "class", 4, "ngIf"], ["id", "right-sidebar-wrapper", 1, "border-end", "bg-white"], [1, "sidebar-heading", "border-bottom", "bg-light"], [1, "list-group", "list-group-flush"], ["href", "#!", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3"], ["href", "#pageSubmenuRight", "data-bs-toggle", "collapse", "aria-expanded", "false", 1, "list-group-item", "list-group-item-action", "list-group-item-light", "p-3", "dropdown-toggle"], ["id", "pageSubmenuRight"], [1, "list-group-item", "p-3"], ["href", "#"], [1, "bi", "bi-1-circle"]],
  template: function RightSideMenuComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, RightSideMenuComponent_div_0_Template, 31, 2, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._commonService.layoutViewModel.showRightMenu);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5836:
/*!******************************************************************!*\
  !*** ./src/app/components/internal/spinner/spinner.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpinnerComponent: () => (/* binding */ SpinnerComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
var _class;




function SpinnerComponent_div_0_p_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "p", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtextInterpolate1"](" ", ctx_r1._commonService.loaderInfo.message, " ");
  }
}
function SpinnerComponent_div_0_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementStart"](0, "div")(1, "div", 1)(2, "div", 2)(3, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelement"](4, "div", 4)(5, "div", 4)(6, "div", 4)(7, "div", 4)(8, "div", 4)(9, "div", 4)(10, "div", 4)(11, "div", 4)(12, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](13, SpinnerComponent_div_0_p_13_Template, 2, 1, "p", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const ctx_r0 = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵadvance"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx_r0._commonService.loaderInfo.showLoader && ctx_r0._commonService.loaderInfo.message !== "");
  }
}
class SpinnerComponent {
  constructor(commonService) {
    this._commonService = commonService;
  }
}
_class = SpinnerComponent;
_class.ɵfac = function SpinnerComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_0__.CommonService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["spinner"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵStandaloneFeature"]],
  decls: 1,
  vars: 1,
  consts: [[4, "ngIf"], [1, "container"], [1, "row"], ["id", "loader"], [1, "dot"], [1, "loading"], ["class", "spinner-message", 4, "ngIf"], [1, "spinner-message"]],
  template: function SpinnerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵtemplate"](0, SpinnerComponent_div_0_Template, 14, 1, "div", 0);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵproperty"]("ngIf", ctx._commonService.loaderInfo.showLoader);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_2__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_2__.NgIf],
  styles: ["#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 175px;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 175px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  bottom: 0;\n  height: 100%;\n  left: 0;\n  margin: auto;\n  position: absolute;\n  right: 0;\n  top: 0;\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]::before {\n  border-radius: 100%;\n  content: \"\";\n  height: 87.5px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  top: 0;\n  transform: scale(0);\n  width: 87.5px;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1) {\n  transform: rotate(45deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+1)::before {\n  animation: 0.8s linear 0.1s normal none infinite running _ngcontent-%COMP%_load;\n  background: #00ff80 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2) {\n  transform: rotate(90deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+2)::before {\n  animation: 0.8s linear 0.2s normal none infinite running _ngcontent-%COMP%_load;\n  background: #00ffea none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3) {\n  transform: rotate(135deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+3)::before {\n  animation: 0.8s linear 0.3s normal none infinite running _ngcontent-%COMP%_load;\n  background: #00aaff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4) {\n  transform: rotate(180deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+4)::before {\n  animation: 0.8s linear 0.4s normal none infinite running _ngcontent-%COMP%_load;\n  background: #0040ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5) {\n  transform: rotate(225deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+5)::before {\n  animation: 0.8s linear 0.5s normal none infinite running _ngcontent-%COMP%_load;\n  background: #2a00ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6) {\n  transform: rotate(270deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+6)::before {\n  animation: 0.8s linear 0.6s normal none infinite running _ngcontent-%COMP%_load;\n  background: #9500ff none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7) {\n  transform: rotate(315deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+7)::before {\n  animation: 0.8s linear 0.7s normal none infinite running _ngcontent-%COMP%_load;\n  background: magenta none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8) {\n  transform: rotate(360deg);\n}\n\n#loader[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%]:nth-child(7n+8)::before {\n  animation: 0.8s linear 0.8s normal none infinite running _ngcontent-%COMP%_load;\n  background: #ff0095 none repeat scroll 0 0;\n}\n\n#loader[_ngcontent-%COMP%]   .loading[_ngcontent-%COMP%] {\n  background-position: 50% 50%;\n  background-repeat: no-repeat;\n  bottom: -40px;\n  height: 20px;\n  left: 0;\n  position: absolute;\n  right: 0;\n  width: 180px;\n}\n\n@keyframes _ngcontent-%COMP%_load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n@keyframes _ngcontent-%COMP%_load {\n  100% {\n    opacity: 0;\n    transform: scale(1);\n  }\n}\n.spinner-message[_ngcontent-%COMP%] {\n  text-align: center;\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnRlcm5hbC9zcGlubmVyL3NwaW5uZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxTQUFBO0VBQ0EsYUFBQTtFQUNBLE9BQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7RUFDQSxRQUFBO0VBQ0EsTUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFLFNBQUE7RUFDQSxhQUFBO0VBQ0EsT0FBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxNQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVFO0VBQ0UsU0FBQTtFQUNBLFlBQUE7RUFDQSxPQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxhQUFBO0FBQ0o7O0FBRUU7RUFDRSxtQkFBQTtFQUNBLFdBQUE7RUFDQSxjQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLE1BQUE7RUFDQSxtQkFBQTtFQUNBLGFBQUE7QUFDSjs7QUFFRTtFQUNFLHdCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx3QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UseUJBQUE7QUFDSjs7QUFFRTtFQUNFLDZEQUFBO0VBQ0EsMENBQUE7QUFDSjs7QUFFRTtFQUNFLHlCQUFBO0FBQ0o7O0FBRUU7RUFDRSw2REFBQTtFQUNBLDBDQUFBO0FBQ0o7O0FBRUU7RUFDRSx5QkFBQTtBQUNKOztBQUVFO0VBQ0UsNkRBQUE7RUFDQSwwQ0FBQTtBQUNKOztBQUVFO0VBQ0UsNEJBQUE7RUFDQSw0QkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0EsT0FBQTtFQUNBLGtCQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7QUFDSjs7QUFFRTtFQUNFO0lBQ0UsVUFBQTtJQUNBLG1CQUFBO0VBQ0o7QUFDRjtBQUVFO0VBQ0U7SUFDRSxVQUFBO0lBQ0EsbUJBQUE7RUFBSjtBQUNGO0FBR0U7RUFDRSxrQkFBQTtBQURKIiwic291cmNlc0NvbnRlbnQiOlsiI2xvYWRlciB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDE3NXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgd2lkdGg6IDE3NXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIHtcclxuICAgIGJvdHRvbTogMDtcclxuICAgIGhlaWdodDogMTc1cHg7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogMTc1cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdCB7XHJcbiAgICBib3R0b206IDA7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgICBsZWZ0OiAwO1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgcmlnaHQ6IDA7XHJcbiAgICB0b3A6IDA7XHJcbiAgICB3aWR0aDogODcuNXB4O1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6OmJlZm9yZSB7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMDAlO1xyXG4gICAgY29udGVudDogXCJcIjtcclxuICAgIGhlaWdodDogODcuNXB4O1xyXG4gICAgbGVmdDogMDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHJpZ2h0OiAwO1xyXG4gICAgdG9wOiAwO1xyXG4gICAgdHJhbnNmb3JtOiBzY2FsZSgwKTtcclxuICAgIHdpZHRoOiA4Ny41cHg7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMSkge1xyXG4gICAgdHJhbnNmb3JtOiByb3RhdGUoNDVkZWcpO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzEpOjpiZWZvcmUge1xyXG4gICAgYW5pbWF0aW9uOiAwLjhzIGxpbmVhciAwLjFzIG5vcm1hbCBub25lIGluZmluaXRlIHJ1bm5pbmcgbG9hZDtcclxuICAgIGJhY2tncm91bmQ6ICMwMGZmODAgbm9uZSByZXBlYXQgc2Nyb2xsIDAgMDtcclxuICB9XHJcbiAgXHJcbiAgI2xvYWRlciAuZG90Om50aC1jaGlsZCg3bisyKSB7XHJcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMik6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuMnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwZmZlYSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzMpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDEzNWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rMyk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuM3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwYWFmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzQpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDE4MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNCk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzAwNDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzUpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDIyNWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNSk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNXMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzJhMDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzYpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDI3MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNik6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuNnMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogIzk1MDBmZiBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzcpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDMxNWRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rNyk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuN3Mgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogbWFnZW50YSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5kb3Q6bnRoLWNoaWxkKDduKzgpIHtcclxuICAgIHRyYW5zZm9ybTogcm90YXRlKDM2MGRlZyk7XHJcbiAgfVxyXG4gIFxyXG4gICNsb2FkZXIgLmRvdDpudGgtY2hpbGQoN24rOCk6OmJlZm9yZSB7XHJcbiAgICBhbmltYXRpb246IDAuOHMgbGluZWFyIDAuOHMgbm9ybWFsIG5vbmUgaW5maW5pdGUgcnVubmluZyBsb2FkO1xyXG4gICAgYmFja2dyb3VuZDogI2ZmMDA5NSBub25lIHJlcGVhdCBzY3JvbGwgMCAwO1xyXG4gIH1cclxuICBcclxuICAjbG9hZGVyIC5sb2FkaW5nIHtcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IDUwJSA1MCU7XHJcbiAgICBiYWNrZ3JvdW5kLXJlcGVhdDogbm8tcmVwZWF0O1xyXG4gICAgYm90dG9tOiAtNDBweDtcclxuICAgIGhlaWdodDogMjBweDtcclxuICAgIGxlZnQ6IDA7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICByaWdodDogMDtcclxuICAgIHdpZHRoOiAxODBweDtcclxuICB9XHJcbiAgXHJcbiAgQGtleWZyYW1lcyBsb2FkIHtcclxuICAgIDEwMCUge1xyXG4gICAgICBvcGFjaXR5OiAwO1xyXG4gICAgICB0cmFuc2Zvcm06IHNjYWxlKDEpO1xyXG4gICAgfVxyXG4gIH1cclxuICBcclxuICBAa2V5ZnJhbWVzIGxvYWQge1xyXG4gICAgMTAwJSB7XHJcbiAgICAgIG9wYWNpdHk6IDA7XHJcbiAgICAgIHRyYW5zZm9ybTogc2NhbGUoMSk7XHJcbiAgICB9XHJcbiAgfVxyXG4gIFxyXG4gIC5zcGlubmVyLW1lc3NhZ2Uge1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH0iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 5025:
/*!******************************************************************!*\
  !*** ./src/app/components/internal/top-nav/top-nav.component.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNavComponent: () => (/* binding */ TopNavComponent)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../base.component */ 121);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var src_app_services_zoom_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/zoom.service */ 6447);
var _class;













const _c0 = function () {
  return ["/common"];
};
const _c1 = function () {
  return ["/engineering"];
};
const _c2 = function () {
  return ["/others"];
};
const _c3 = function () {
  return ["/favorites"];
};
const _c4 = function (a0) {
  return {
    activeTheme: a0
  };
};
class TopNavComponent extends _base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  // protected _commonService: CommonService;
  constructor(commonService, document, logService, topNavService, zoomService) {
    // this._commonService = commonService;
    //get the width if greater than specific set show true or false show menu will set as per requirements if menu enabled
    // this._commonService.layoutViewModel = {
    //   showLeftMenu: true,
    //   showRightMenu: true,
    //   leftMenuClass: '',
    //   rightMenuClass: '',
    //   showNav: true,
    //   userLoggedIn: false
    // }
    super(commonService, logService);
    this.document = document;
    this.topNavService = topNavService;
    this.zoomService = zoomService;
    this.viewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__.TopNavViewModel();
  }
  ngOnInit() {
    const storedValue = localStorage.getItem("DarkTheme");
    this.getThemeFromLocalStorage = localStorage.getItem("Theme");
    if (this.getThemeFromLocalStorage != null) {
      this.viewModel.storedTheme = this.getThemeFromLocalStorage;
    } else {
      this.getThemeFromLocalStorage = "Light";
    }
    this.getActiveTheme();
    if (storedValue !== null) {
      this.viewModel.isDarkThemeChecked = JSON.parse(storedValue);
    }
    if (this.viewModel.isDarkThemeChecked) {
      this.document.body.classList.remove("light-theme");
      this.document.body.classList.add("dark-theme");
    }
  }
  // //////////////////////// for themeing
  // Set a default theme
  setTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("Theme", theme);
    this.getThemeFromLocalStorage = theme;
  }
  getActiveTheme() {
    document.documentElement.setAttribute("data-theme", this.getThemeFromLocalStorage);
  }
  // /////////////////////
  // click_ToggleRightMenu() {
  //   this._commonService.layoutViewModel.rightMenuClass =
  //     this._commonService.layoutViewModel.rightMenuClass == ""
  //       ? "rightSideMenuToggle"
  //       : "";
  // }
  // click_ToggleLeftMenu() {
  //   this._commonService.layoutViewModel.leftMenuClass =
  //     this._commonService.layoutViewModel.leftMenuClass == ""
  //       ? "leftSideMenuToggle"
  //       : "";
  // }
  // async click_Login() {}
  // click_Register() {}
  // ///////////////  Ts code for Top Nav By Bilal is below /////////////
  // ////////////////////////////////////////////////
  // add or remove dark theme
  toggleDarkTheme(event) {
    localStorage.setItem("DarkTheme", JSON.stringify(event.target.checked));
    if (event.target.checked) {
      this.document.body.classList.remove("light-theme");
      this.document.body.classList.add("dark-theme");
    } else {
      this.document.body.classList.remove("dark-theme");
      this.document.body.classList.add("light-theme");
    }
  }
  /////// search function to share search value globally
  onInputChange() {
    this.topNavService.updateSharedData(this.viewModel.inputValue);
  }
  // /////////////////////////////  zoom functionality
  zoomIn() {
    const newZoomFactor = this.zoomService.getZoomFactor() + 0.1;
    this.zoomService.setZoomFactor(newZoomFactor);
  }
  resetZoom() {
    const newZoomFactor = 1;
    this.zoomService.setZoomFactor(newZoomFactor);
  }
  zoomOut() {
    const newZoomFactor = this.zoomService.getZoomFactor() - 0.1;
    if (newZoomFactor >= 1) {
      this.zoomService.setZoomFactor(newZoomFactor);
    }
  }
  reload() {
    window.location.reload();
  }
}
_class = TopNavComponent;
_class.ɵfac = function TopNavComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](_angular_common__WEBPACK_IMPORTED_MODULE_7__.DOCUMENT), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_4__.TopNavService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdirectiveInject"](src_app_services_zoom_service__WEBPACK_IMPORTED_MODULE_5__.ZoomService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["top-nav"]],
  standalone: true,
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵInheritDefinitionFeature"], _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵStandaloneFeature"]],
  decls: 108,
  vars: 28,
  consts: [[1, "navbar", "navbar-expand-lg"], [1, "container-fluid"], ["data-bs-toggle", "collapse", "data-bs-target", "#navbarSupportedContent", "aria-controls", "navbarSupportedContent", "aria-expanded", "false", "aria-label", "Toggle navigation", 1, "navbar-brand", "d-lg-none", "fw-bold", "dropdown-toggle"], [1, "navbar-brand", "d-none", "d-lg-block", "fw-bold"], ["id", "navbarSupportedContent", 1, "collapse", "navbar-collapse"], [1, "navbar-nav", "me-auto", "mb-0", "mb-lg-0"], [1, "nav-item"], ["routerLinkActive", "active", "data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", 1, "nav-link", 3, "routerLink", "tabIndex"], ["routerLinkActive", "active", "data-bs-toggle", "collapse", "data-bs-target", ".navbar-collapse.show", 1, "nav-link", 3, "routerLink"], [1, "d-flex", "fixed", "top-bar"], ["data-toggle", "tooltip", "title", "Reset Zoom", 1, "bi", "bi-x-circle", "fs-2", "mx-2", 3, "click"], ["data-toggle", "tooltip", "title", "Zoom Out", 1, "bi", "bi-zoom-out", "fs-2", "mx-2", 3, "click"], ["data-toggle", "tooltip", "title", "Zoom In", 1, "bi", "bi-zoom-in", "fs-2", "mx-2", 3, "click"], ["type", "text", "placeholder", "Search", "aria-label", "Search", "placeholder", "Search", "data-toggle", "tooltip", "title", "Search Converters", 1, "form-control", "m-2", 3, "ngModel", "ngModelChange", "keyup"], ["type", "button", "data-bs-toggle", "offcanvas", "href", "#offcanvasExample", "aria-controls", "offcanvasExample", "aria-label", "Toggle navigation", "data-toggle", "tooltip", "title", "Settings!", 1, "bi", "bi-gear", "fs-2"], ["tabindex", "-1", "id", "offcanvasExample", "aria-labelledby", "offcanvasExampleLabel", 1, "offcanvas", "offcanvas-end"], [1, "offcanvas-header"], ["id", "offcanvasExampleLabel", 1, "offcanvas-title"], ["type", "button", "data-bs-dismiss", "offcanvas", "aria-label", "Close", 1, "btn-close"], [1, "m-0", "p-0"], [1, "offcanvas-body"], [1, ""], [1, "nav-item", "border-bottom"], ["data-bs-toggle", "modal", "data-bs-target", "#exampleModal", 1, "form-check-label", "pb-2"], [1, "dropdown"], ["data-bs-toggle", "dropdown", "aria-expanded", "false", 1, "form-check-label", "py-2", "dropdown-toggle"], [1, "dropdown-menu"], [3, "ngClass", "click"], ["data-bs-dismiss", "offcanvas", 1, "dropdown-item"], [1, "nav-item", "border-bottom", "position-absolute", "bottom-0"], [1, "form-check-label", "py-2"], ["id", "exampleModal", "tabindex", "-1", "aria-labelledby", "exampleModalLabel", "aria-hidden", "true", 1, "modal", "fade"], [1, "modal-dialog", "modal-dialog-centered"], [1, "modal-content"], [1, "modal-header"], ["id", "exampleModalLabel", 1, "modal-title", "fs-5"], ["type", "button", "data-bs-dismiss", "modal", "aria-label", "Close", 1, "btn-close"], [1, "modal-body"], ["href", "mailto:RenoSoftwares@gmail.com"], [1, "modal-footer"], ["type", "button", "data-bs-dismiss", "modal", 1, "btn", "btn-secondary"]],
  template: function TopNavComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](0, "nav", 0)(1, "div", 1)(2, "a", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](3, "Unit Converter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](4, "a", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](5, "Unit Converter ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](6, "div", 4)(7, "ul", 5)(8, "li", 6)(9, "a", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](10, "Common");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](11, "li", 6)(12, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](13, "Engineering");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](14, "li", 6)(15, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](16, "Others");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](17, "li", 6)(18, "a", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](19, "Favorites");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](20, "div", 9)(21, "i", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_i_click_21_listener() {
        return ctx.resetZoom();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](22, "i", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_i_click_22_listener() {
        return ctx.zoomOut();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](23, "i", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_i_click_23_listener() {
        return ctx.zoomIn();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](24, "input", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("ngModelChange", function TopNavComponent_Template_input_ngModelChange_24_listener($event) {
        return ctx.viewModel.inputValue = $event;
      })("keyup", function TopNavComponent_Template_input_keyup_24_listener() {
        return ctx.onInputChange();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](25, "i", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](26, "div", 15)(27, "div", 16)(28, "h5", 17);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](29, "Settings");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](30, "button", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](31, "hr", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](32, "div", 20)(33, "div")(34, "ul", 21)(35, "li", 22)(36, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](37, " About ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](38, "li", 22)(39, "div", 24)(40, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](41, " Themes ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](42, "ul", 26)(43, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_43_listener() {
        return ctx.setTheme("Light");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](44, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](45, "Light");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](46, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_46_listener() {
        return ctx.setTheme("Blue");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](47, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](48, "Blue");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](49, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_49_listener() {
        return ctx.setTheme("Brown");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](50, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](51, "Brown");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](52, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_52_listener() {
        return ctx.setTheme("Red");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](53, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](54, "Red");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](55, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_55_listener() {
        return ctx.setTheme("Green");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](56, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](57, "Green");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](58, "li", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵlistener"]("click", function TopNavComponent_Template_li_click_58_listener() {
        return ctx.setTheme("Dark");
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](59, "a", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](60, "Dark");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](61, "li", 29)(62, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](63, " Version 1.0 ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](64, "div", 31)(65, "div", 32)(66, "div", 33)(67, "div", 34)(68, "h1", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](69, "About Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelement"](70, "button", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](71, "div", 37)(72, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](73, " Welcome to our unit converter app! We're a dedicated team of developers committed to simplifying unit conversions for everyday tasks. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](74, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](75, "Key Features");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](76, "ul")(77, "li")(78, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](79, "User-Friendly:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](80, " Our app is designed for ease of use, ensuring quick and hassle-free conversions. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](81, "li")(82, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](83, "Wide Range of Units:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](84, " We support various unit categories like length, temperature, weight, and more. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](85, "li")(86, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](87, "Instant Results:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](88, " Get accurate results in real-time. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](89, "li")(90, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](91, "Customization:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](92, " Tailor the app to your needs by selecting your most-used units as Favorites. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](93, "li")(94, "strong");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](95, "Offline Mode:");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](96, " No internet? No problem! Our app works offline. ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](97, "h2");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](98, "Contact Us");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](99, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](100, " We value your feedback and are here to enhance your experience. Reach out at ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](101, "a", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](102, "Renosoftwares@gmail.com ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](103, "p");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](104, "Thank you for choosing our unit converter app!");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementStart"](105, "div", 39)(106, "button", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵtext"](107, " Close ");
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵelementEnd"]()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](12, _c0))("tabIndex", 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](13, _c1));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](14, _c2));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("routerLink", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction0"](15, _c3));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngModel", ctx.viewModel.inputValue);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](19);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](16, _c4, ctx.getThemeFromLocalStorage === "Light"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](18, _c4, ctx.getThemeFromLocalStorage === "Blue"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](20, _c4, ctx.getThemeFromLocalStorage === "Brown"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](22, _c4, ctx.getThemeFromLocalStorage === "Red"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](24, _c4, ctx.getThemeFromLocalStorage === "Green"));
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵpureFunction1"](26, _c4, ctx.getThemeFromLocalStorage === "Dark"));
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_7__.CommonModule, _angular_common__WEBPACK_IMPORTED_MODULE_7__.NgClass, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.FormsModule, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_8__.NgModel, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterModule, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLink, _angular_router__WEBPACK_IMPORTED_MODULE_9__.RouterLinkActive],
  styles: [".navbar[_ngcontent-%COMP%] {\n  padding: 10px 0;\n  border-bottom: 1px solid var(--border-color);\n  width: 100%;\n  height: auto;\n  position: fixed;\n  top: 0;\n  right: 0;\n  z-index: 999;\n  background-color: var(--primary-bg-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%] {\n  border-color: var(--border-color);\n}\n.navbar[_ngcontent-%COMP%]   .navbar-toggler[_ngcontent-%COMP%]   .bi-list[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%] {\n  padding: 0 10px;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n  font-size: 16px;\n  letter-spacing: 1px;\n  cursor: pointer;\n}\n.navbar[_ngcontent-%COMP%]   .nav-item[_ngcontent-%COMP%]   .nav-link.active[_ngcontent-%COMP%] {\n  color: var(--active-color);\n}\n.navbar[_ngcontent-%COMP%]   .bi-zoom-out[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-zoom-in[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-gear[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-x-lg[_ngcontent-%COMP%], .navbar[_ngcontent-%COMP%]   .bi-x-circle[_ngcontent-%COMP%] {\n  color: var(--text-color);\n  cursor: pointer;\n  font-size: 20px !important;\n  margin: auto;\n}\n\n.top-bar[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  padding-top: 5px;\n  z-index: 9999;\n  right: 10px;\n}\n\n.modal[_ngcontent-%COMP%] {\n  --bs-modal-width: 900px;\n}\n\n.offcanvas[_ngcontent-%COMP%], .modal[_ngcontent-%COMP%] {\n  z-index: 999999999;\n}\n\n.offcanvas[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%] {\n  width: 100%;\n}\n.offcanvas[_ngcontent-%COMP%]   .dropdown-menu[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n.offcanvas[_ngcontent-%COMP%]   .activeTheme[_ngcontent-%COMP%] {\n  background-color: blue !important;\n  cursor: pointer;\n  border-radius: 10px;\n}\n.offcanvas[_ngcontent-%COMP%]   .activeTheme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%] {\n  color: white !important;\n}\n.offcanvas[_ngcontent-%COMP%]   .activeTheme[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover {\n  background-color: black !important;\n  border-radius: 10px;\n}\n\n@media (min-width: 992px) and (max-width: 1040px) {\n  .navbar-expand-lg[_ngcontent-%COMP%]   .navbar-nav[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    padding-right: 0;\n    padding-left: 0;\n  }\n}\n@media screen and (max-width: 992px) {\n  .navbar[_ngcontent-%COMP%] {\n    padding: 10px 0;\n  }\n  .navbar[_ngcontent-%COMP%]   .nav-link[_ngcontent-%COMP%] {\n    border-bottom: 1px solid var(--border-color);\n  }\n  .top-bar[_ngcontent-%COMP%] {\n    right: 10px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9pbnRlcm5hbC90b3AtbmF2L3RvcC1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQ0E7RUFDRSxlQUFBO0VBQ0EsNENBQUE7RUFDQSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGVBQUE7RUFDQSxNQUFBO0VBQ0EsUUFBQTtFQUNBLFlBQUE7RUFDQSx5Q0FBQTtBQUFGO0FBQ0U7RUFDRSx3QkFBQTtFQUNBLGVBQUE7QUFDSjtBQUNFO0VBQ0UsaUNBQUE7QUFDSjtBQUFJO0VBQ0Usd0JBQUE7QUFFTjtBQUNFO0VBQ0UsZUFBQTtBQUNKO0FBQ0k7RUFDRSxlQUFBO0VBQ0EsbUJBQUE7RUFHQSxlQUFBO0FBRE47QUFHSTtFQUNFLDBCQUFBO0FBRE47QUFJRTs7Ozs7RUFLRSx3QkFBQTtFQUNBLGVBQUE7RUFDQSwwQkFBQTtFQUNBLFlBQUE7QUFGSjs7QUFNQTtFQUNFLGtCQUFBO0VBQ0EsTUFBQTtFQUNBLGdCQUFBO0VBQ0EsYUFBQTtFQUNBLFdBQUE7QUFIRjs7QUFNQTtFQUNFLHVCQUFBO0FBSEY7O0FBS0E7O0VBRUUsa0JBQUE7QUFGRjs7QUFLRTtFQUNFLFdBQUE7QUFGSjtBQUdJO0VBQ0UsZUFBQTtBQUROO0FBSUU7RUFDRSxpQ0FBQTtFQUNBLGVBQUE7RUFDQSxtQkFBQTtBQUZKO0FBR0k7RUFDRSx1QkFBQTtBQUROO0FBS0U7RUFDRSxrQ0FBQTtFQUNBLG1CQUFBO0FBSEo7O0FBTUE7RUFDRTtJQUNFLGdCQUFBO0lBQ0EsZUFBQTtFQUhGO0FBQ0Y7QUFLQTtFQUNFO0lBQ0UsZUFBQTtFQUhGO0VBSUU7SUFDRSw0Q0FBQTtFQUZKO0VBS0E7SUFDRSxXQUFBO0VBSEY7QUFDRiIsInNvdXJjZXNDb250ZW50IjpbIi8vIFRvcCBOYXYgU2NzcyBieSBCaWxhbFxyXG4ubmF2YmFyIHtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgaGVpZ2h0OiBhdXRvO1xyXG4gIHBvc2l0aW9uOiBmaXhlZDtcclxuICB0b3A6IDA7XHJcbiAgcmlnaHQ6IDA7XHJcbiAgei1pbmRleDogOTk5O1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLXByaW1hcnktYmctY29sb3IpO1xyXG4gIC5uYXZiYXItYnJhbmQge1xyXG4gICAgY29sb3I6IHZhcigtLXRleHQtY29sb3IpO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxuICAubmF2YmFyLXRvZ2dsZXIge1xyXG4gICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1ib3JkZXItY29sb3IpO1xyXG4gICAgLmJpLWxpc3Qge1xyXG4gICAgICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5uYXYtaXRlbSB7XHJcbiAgICBwYWRkaW5nOiAwIDEwcHg7XHJcbiAgICAvLyBib3JkZXItcmlnaHQ6IDFweCBzb2xpZCBibGFjazsvXHJcbiAgICAubmF2LWxpbmsge1xyXG4gICAgICBmb250LXNpemU6IDE2cHg7XHJcbiAgICAgIGxldHRlci1zcGFjaW5nOiAxcHg7XHJcbiAgICAgIC8vIGZvbnQtd2VpZ2h0OiBib2xkO1xyXG5cclxuICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgfVxyXG4gICAgLm5hdi1saW5rLmFjdGl2ZSB7XHJcbiAgICAgIGNvbG9yOiB2YXIoLS1hY3RpdmUtY29sb3IpO1xyXG4gICAgfVxyXG4gIH1cclxuICAuYmktem9vbS1vdXQsXHJcbiAgLmJpLXpvb20taW4sXHJcbiAgLmJpLWdlYXIsXHJcbiAgLmJpLXgtbGcsXHJcbiAgLmJpLXgtY2lyY2xlIHtcclxuICAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIGZvbnQtc2l6ZTogMjBweCAhaW1wb3J0YW50O1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gIH1cclxufVxyXG5cclxuLnRvcC1iYXIge1xyXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICB0b3A6IDA7XHJcbiAgcGFkZGluZy10b3A6IDVweDtcclxuICB6LWluZGV4OiA5OTk5O1xyXG4gIHJpZ2h0OiAxMHB4O1xyXG4gIC8vIGNvbG9yOiBibGFjaztcclxufVxyXG4ubW9kYWwge1xyXG4gIC0tYnMtbW9kYWwtd2lkdGg6IDkwMHB4O1xyXG59XHJcbi5vZmZjYW52YXMsXHJcbi5tb2RhbCB7XHJcbiAgei1pbmRleDogOTk5OTk5OTk5O1xyXG59XHJcbi5vZmZjYW52YXMge1xyXG4gIC5kcm9wZG93bi1tZW51IHtcclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgbGkge1xyXG4gICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC5hY3RpdmVUaGVtZSB7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBibHVlICFpbXBvcnRhbnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gICAgYSB7XHJcbiAgICAgIGNvbG9yOiB3aGl0ZSAhaW1wb3J0YW50O1xyXG4gICAgfVxyXG4gIH1cclxuXHJcbiAgLmFjdGl2ZVRoZW1lIGE6aG92ZXIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgfVxyXG59XHJcbkBtZWRpYSAobWluLXdpZHRoOiA5OTJweCkgYW5kIChtYXgtd2lkdGg6IDEwNDBweCkge1xyXG4gIC5uYXZiYXItZXhwYW5kLWxnIC5uYXZiYXItbmF2IC5uYXYtbGluayB7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiAwO1xyXG4gICAgcGFkZGluZy1sZWZ0OiAwO1xyXG4gIH1cclxufVxyXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5OTJweCkge1xyXG4gIC5uYXZiYXIge1xyXG4gICAgcGFkZGluZzogMTBweCAwO1xyXG4gICAgLm5hdi1saW5rIHtcclxuICAgICAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHZhcigtLWJvcmRlci1jb2xvcik7XHJcbiAgICB9XHJcbiAgfVxyXG4gIC50b3AtYmFyIHtcclxuICAgIHJpZ2h0OiAxMHB4O1xyXG4gIH1cclxuICAvLyAubW9kYWwge1xyXG4gIC8vICAgcCB7XHJcbiAgLy8gICAgIC8vIC0tYnMtbW9kYWwtd2lkdGg6IDY1MHB4O1xyXG4gIC8vICAgICBmb250LXNpemU6IDE0cHg7XHJcbiAgLy8gICB9XHJcbiAgLy8gICBoMSxcclxuICAvLyAgIGgyLFxyXG4gIC8vICAgaDMsXHJcbiAgLy8gICBsaSB7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAvLyAgIH1cclxuICAvLyB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7754:
/*!**********************************************************!*\
  !*** ./src/app/models/internal/dictionary-collection.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DictionaryCollection: () => (/* binding */ DictionaryCollection)
/* harmony export */ });
// the K should always be string , no way  to enforce it though
class DictionaryCollection {
  constructor() {
    this.items = {};
    this.count = 0;
  }
  ContainsKey(key) {
    return this.items.hasOwnProperty(key);
  }
  Count() {
    return this.count;
  }
  Add(key, value) {
    if (!this.items.hasOwnProperty(key)) {
      this.count++;
    }
    this.items[key] = value;
  }
  Remove(key) {
    const val = this.items[key];
    delete this.items[key];
    this.count--;
    return val;
  }
  Item(key) {
    return this.items[key];
  }
  Keys() {
    const keySet = [];
    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        keySet.push(prop);
      }
    }
    return keySet;
  }
  Values() {
    const values = [];
    for (const prop in this.items) {
      if (this.items.hasOwnProperty(prop)) {
        values.push(this.items[prop]);
      }
    }
    return values;
  }
}

/***/ }),

/***/ 2130:
/*!*************************************************!*\
  !*** ./src/app/models/internal/log-location.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogLocation: () => (/* binding */ LogLocation)
/* harmony export */ });
var LogLocation;
(function (LogLocation) {
  LogLocation[LogLocation["None"] = 0] = "None";
  LogLocation[LogLocation["File"] = 1] = "File";
  LogLocation[LogLocation["Console"] = 2] = "Console";
  LogLocation[LogLocation["Api"] = 3] = "Api";
  LogLocation[LogLocation["ElasticCluster"] = 4] = "ElasticCluster";
})(LogLocation || (LogLocation = {}));

/***/ }),

/***/ 7493:
/*!*********************************************!*\
  !*** ./src/app/models/internal/log-type.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogType: () => (/* binding */ LogType)
/* harmony export */ });
var LogType;
(function (LogType) {
  LogType[LogType["Log"] = 0] = "Log";
  LogType[LogType["Exception"] = 1] = "Exception";
})(LogType || (LogType = {}));

/***/ }),

/***/ 3037:
/*!**************************************************!*\
  !*** ./src/app/models/internal/logger-config.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoggerConfig: () => (/* binding */ LoggerConfig)
/* harmony export */ });
class LoggerConfig {
  constructor() {
    this.logLocations = new Array();
    this.exceptionLogLocations = new Array();
  }
}

/***/ }),

/***/ 2517:
/*!******************************************************************!*\
  !*** ./src/app/models/service/api-contracts/base/api-request.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiRequest: () => (/* binding */ ApiRequest)
/* harmony export */ });
class ApiRequest {}

/***/ }),

/***/ 7452:
/*!***********************************************************!*\
  !*** ./src/app/models/service/api-contracts/error-log.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorLog: () => (/* binding */ ErrorLog)
/* harmony export */ });
class ErrorLog {
  constructor() {
    this.name = '';
    this.message = '';
    this.createdDateUTC = new Date().toUTCString();
    this.platform = '';
    this.username = '';
  }
}

/***/ }),

/***/ 4212:
/*!**************************************************************!*\
  !*** ./src/app/models/service/api-contracts/query-filter.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   QueryFilter: () => (/* binding */ QueryFilter)
/* harmony export */ });
class QueryFilter {}

/***/ }),

/***/ 1610:
/*!************************************************************!*\
  !*** ./src/app/models/service/enums/role-type-s-m.enum.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   RoleTypeSM: () => (/* binding */ RoleTypeSM)
/* harmony export */ });
var RoleTypeSM;
(function (RoleTypeSM) {
  RoleTypeSM[RoleTypeSM["Unknown"] = 0] = "Unknown";
  RoleTypeSM[RoleTypeSM["SuperAdmin"] = 1] = "SuperAdmin";
  RoleTypeSM[RoleTypeSM["SystemAdmin"] = 2] = "SystemAdmin";
  RoleTypeSM[RoleTypeSM["ClientAdmin"] = 3] = "ClientAdmin";
  RoleTypeSM[RoleTypeSM["ClientEmployee"] = 4] = "ClientEmployee";
})(RoleTypeSM || (RoleTypeSM = {}));

/***/ }),

/***/ 6059:
/*!**************************************************!*\
  !*** ./src/app/models/view/top-nav.viewmodel.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNavViewModel: () => (/* binding */ TopNavViewModel)
/* harmony export */ });
class TopNavViewModel {
  constructor() {
    this.PageTitle = "";
    this.searchText = "";
    this.inputValue = "";
    this.receivedSearchValueFromAppComponent = "";
    this.receivedSearchValue = "";
  }
}

/***/ }),

/***/ 7506:
/*!******************************************!*\
  !*** ./src/app/services/base.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseService: () => (/* binding */ BaseService)
/* harmony export */ });
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! crypto-js */ 6552);
/* harmony import */ var crypto_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(crypto_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _models_service_api_contracts_query_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/service/api-contracts/query-filter */ 4212);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class BaseService {
  constructor() {}
  createQueryFilterObject(pgNo, pgSize) {
    let queryFilter = new _models_service_api_contracts_query_filter__WEBPACK_IMPORTED_MODULE_2__.QueryFilter();
    queryFilter.top = pgSize;
    queryFilter.skip = (pgNo - 1) * pgSize;
    return queryFilter;
  }
  encrypt(txt) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.encrypt(txt, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.encryptionKey).toString();
  }
  decrypt(txtToDecrypt) {
    return crypto_js__WEBPACK_IMPORTED_MODULE_0__.AES.decrypt(txtToDecrypt, src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.encryptionKey).toString(crypto_js__WEBPACK_IMPORTED_MODULE_0__.enc.Utf8);
  }
}
_class = BaseService;
_class.ɵfac = function BaseService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 5731:
/*!********************************************!*\
  !*** ./src/app/services/common.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonService: () => (/* binding */ CommonService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! sweetalert2 */ 7889);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/service/enums/role-type-s-m.enum */ 1610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _storage_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./storage.service */ 9140);

var _class;






class CommonService extends _base_service__WEBPACK_IMPORTED_MODULE_3__.BaseService {
  constructor(storageService) {
    super();
    this.storageService = storageService;
    this.loaderInfo = {
      message: "",
      showLoader: false
    };
  }
  presentLoading(message = "") {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.loaderInfo = {
        message,
        showLoader: true
      };
    })();
  }
  // async presentToast(toastInfo: ToastInfo) {
  //   this.toasts.push(toastInfo);
  // }
  // removeToast(toast: any) {
  //   this.toasts = this.toasts.filter((t) => t !== toast);
  // }
  // clearAllToasts() {
  //   this.toasts.splice(0, this.toasts.length);
  // }
  presentAlert() {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {})();
  }
  presentConfirmAlert(modalInfo) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // const modalRef = this.modalService.open(ConfirmModalComponent, options);
      // modalRef.componentInstance.confirmModalInfo = modalInfo;
      return true;
    })();
  }
  /**Show custom sweet alert*/
  showSweetAlertConfirmation(alertOptions) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return (yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(alertOptions)).isConfirmed;
    })();
  }
  /**Show custom sweet alert*/
  showSweetAlertToast(alertOptions) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      alertOptions.toast = true;
      // alertOptions.position = 'top-right';
      alertOptions.showConfirmButton = false;
      alertOptions.timer = 3000;
      alertOptions.timerProgressBar = true;
      alertOptions.didOpen = toast => {
        toast.addEventListener("mouseenter", (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().stopTimer));
        toast.addEventListener("mouseleave", (sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().resumeTimer));
      };
      return yield sweetalert2__WEBPACK_IMPORTED_MODULE_2___default().fire(alertOptions);
    })();
  }
  dismissLoader() {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this2.loaderInfo.showLoader = false;
      _this2.loaderInfo.message = "";
    })();
  }
  getUserIdPwdFromStorage() {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let request = {
        companyCode: "",
        loginId: "",
        password: "",
        roleType: _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_4__.RoleTypeSM.Unknown
      };
      let user = yield _this3.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.LOGIN_USER);
      if (user) {
        request.loginId = user.loginId;
        request.password = user.passwordHash;
        request.roleType = user.roleType;
        let cCode = yield _this3.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.COMPANY_CODE);
        if (cCode && cCode != "") request.companyCode = cCode;
      }
      return request;
    })();
  }
  addDummyUserToStorage() {
    var _this4 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let user = {
        createdBy: "",
        createdOnUTC: new Date(),
        dateOfBirth: new Date(),
        emailId: "",
        firstName: "",
        id: 1,
        isEmailConfirmed: false,
        isLoginEnabled: true,
        isPhoneNumberConfirmed: false,
        lastModifiedBy: "",
        lastName: "",
        loginId: "testId",
        middleName: "",
        passwordHash: "testPwdHash",
        phoneNumber: "",
        profilePicturePath: "",
        roleType: _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_4__.RoleTypeSM.ClientEmployee,
        lastModifiedOnUTC: new Date()
      };
      user.loginId = "testUser";
      _this4.storageService.saveToStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.REMEMBER_PWD, true.toString());
      _this4.storageService.saveToStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.LOGIN_USER, user);
    })();
  }
}
_class = CommonService;
_class.ɵfac = function CommonService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_storage_service__WEBPACK_IMPORTED_MODULE_5__.StorageService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 4943:
/*!*************************************************!*\
  !*** ./src/app/services/log-handler.service.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LogHandlerService: () => (/* binding */ LogHandlerService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _clients_helpers_common_logger_helper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../clients/helpers/common-logger.helper */ 4739);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;


class LogHandlerService {
  constructor() {}
  logObject(logObject) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _clients_helpers_common_logger_helper__WEBPACK_IMPORTED_MODULE_1__.CommonLogger.LogTextOrObject(logObject);
    })();
  }
  handleError(error) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _clients_helpers_common_logger_helper__WEBPACK_IMPORTED_MODULE_1__.CommonLogger.LogException(error);
      //show error messages from app constants
    })();
  }
}
_class = LogHandlerService;
_class.ɵfac = function LogHandlerService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9140:
/*!*********************************************!*\
  !*** ./src/app/services/storage.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageService: () => (/* binding */ StorageService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);

var _class;



class StorageService extends _base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService {
  constructor() {
    super();
    this._storage = localStorage;
    this._sessionStorage = sessionStorage;
    // this.init();
  }

  init() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // If using, define drivers here: await this.storage.defineDriver(/*...*/);
      const storage = yield _this._storage['create'];
      _this._storage = storage;
    })();
  }
  getFromStorage(key) {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = (yield _this2._storage.getItem(key)) || "";
      let res = yield _this2.decrypt(data);
      return yield _this2.getValueAsObject(res);
    })();
  }
  saveToStorage(key, val) {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let value = '';
      value = typeof val != typeof '' ? JSON.stringify(val) : val;
      yield _this3._storage.setItem(key, yield _this3.encrypt(value));
    })();
  }
  removeFromStorage(key) {
    var _this4 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this4._storage.removeItem(key);
    })();
  }
  clearStorage() {
    var _this5 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return _this5._storage.clear();
    })();
  }
  /** Save To Session Storage*/
  saveToSessionStorage(key, val) {
    var _this6 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let value = '';
      value = typeof val != typeof '' ? JSON.stringify(val) : val;
      yield _this6._sessionStorage.setItem(key, yield _this6.encrypt(value));
    })();
  }
  // Get from Session Storage
  getFromSessionStorage(key) {
    var _this7 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let data = (yield _this7._sessionStorage.getItem(key)) || "";
      let res = yield _this7.decrypt(data);
      return yield _this7.getValueAsObject(res);
    })();
  }
  // Remove from Session Storage
  removeFromSessionStorage(key) {
    var _this8 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this8._sessionStorage.removeItem(key);
    })();
  }
  // Remove from Session Storage
  clearSessionStorage() {
    var _this9 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this9._sessionStorage.clear();
    })();
  }
  /** Get Data From Storage if Present
   * Checks appropriate storage as per the user remember
  */
  getDataFromAnyStorage(key) {
    var _this10 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let remMe = yield _this10.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.REMEMBER_PWD);
      if (remMe && remMe == true) return yield _this10.getFromStorage(key);
      return yield _this10.getFromSessionStorage(key);
    })();
  }
  getValueAsObject(val) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        return yield JSON.parse(val);
      } catch (err) {
        return yield val;
      }
    })();
  }
}
_class = StorageService;
_class.ɵfac = function StorageService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 4324:
/*!*********************************************!*\
  !*** ./src/app/services/top-nav.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TopNavService: () => (/* binding */ TopNavService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ 2513);
/* harmony import */ var _models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




class TopNavService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor() {
    super();
    this.viewModel = new _models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_1__.TopNavViewModel();
    this.sharedDataSubject = new rxjs__WEBPACK_IMPORTED_MODULE_2__.Subject();
  }
  updateSharedData(newData) {
    this.viewModel.receivedSearchValueFromAppComponent = newData;
    this.sharedDataSubject.next(newData);
  }
}
_class = TopNavService;
_class.ɵfac = function TopNavService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 6447:
/*!******************************************!*\
  !*** ./src/app/services/zoom.service.ts ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ZoomService: () => (/* binding */ ZoomService)
/* harmony export */ });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;

class ZoomService {
  constructor() {
    this.zoomFactor = 1.0;
  }
  getZoomFactor() {
    return this.zoomFactor;
  }
  setZoomFactor(factor) {
    this.zoomFactor = factor;
  }
}
_class = ZoomService;
_class.ɵfac = function ZoomService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 553:
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   environment: () => (/* binding */ environment)
/* harmony export */ });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
const environment = {
  production: false,
  apiResponseCacheTimeoutInMinutes: 5,
  enableResponseCacheProcessing: true,
  applicationVersion: '0.0.1',
  apiBaseUrl: 'http://localhost:5050/',
  apiDefaultTimeout: 10,
  LoggingInfo: {
    cacheLogs: true,
    logToConsole: true,
    logToFile: false,
    logToApi: false,
    logToElasticCluster: false,
    exceptionToConsole: true,
    exceptionToFile: false,
    exceptionToApi: false,
    exceptionToElasticCluster: false,
    localLogFilePath: 'Sample.log'
  },
  encryptionKey: '12345678'
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

/***/ }),

/***/ 4913:
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ 6480);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app/app.module */ 8629);
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ 553);




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
  (0,_angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__.platformBrowser().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule).catch(err => console.error(err));

/***/ }),

/***/ 2480:
/*!************************!*\
  !*** crypto (ignored) ***!
  \************************/
/***/ (() => {

/* (ignored) */

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ __webpack_require__.O(0, ["vendor"], () => (__webpack_exec__(4686), __webpack_exec__(4913)));
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=main.js.map