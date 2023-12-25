"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["default-src_app_clients_base-client_base-api_client_ts-src_app_clients_helpers_common-respons-11e25e"],{

/***/ 5165:
/*!********************************************************!*\
  !*** ./src/app/clients/base-client/base-api.client.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BaseApiClient: () => (/* binding */ BaseApiClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../models/internal/additional-request-details */ 916);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../app-constants */ 3465);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var _base_ajax_client__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./base-ajax.client */ 3701);
/* harmony import */ var src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/internal/dictionary-collection */ 7754);
/* harmony import */ var src_app_models_service_api_contracts_base_api_response__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/models/service/api-contracts/base/api-response */ 4589);
/* harmony import */ var src_app_models_service_api_contracts_error_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/models/service/api-contracts/error-data */ 6188);
/* harmony import */ var src_app_models_service_enums_api_error_type_s_m_enum__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/models/service/enums/api-error-type-s-m.enum */ 8443);
/* harmony import */ var _helpers_common_utils_helper__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../helpers/common-utils.helper */ 3405);










class BaseApiClient extends _base_ajax_client__WEBPACK_IMPORTED_MODULE_4__.BaseAjaxClient {
  constructor(storageservice, storageCacheHelper, commonResponseCodeHandler) {
    var _this;
    super();
    _this = this;
    this.storageservice = storageservice;
    this.storageCacheHelper = storageCacheHelper;
    this.commonResponseCodeHandler = commonResponseCodeHandler;
    this.GetResponseAsync = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (relativeUrl, reqMethod = 'GET', reqBody = null, additionalRequestDetails = new _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_1__.AdditionalRequestDetails(false)) {
        let responseEntity = null;
        let axiosResp = null;
        ;
        if (additionalRequestDetails == null) throw new Error('AdditionalRequestDetails cannot be null, do not pass if not required.');
        try {
          const fullUrlToHit = _helpers_common_utils_helper__WEBPACK_IMPORTED_MODULE_9__.CommonUtils.CombineUrl(src_environments_environment__WEBPACK_IMPORTED_MODULE_3__.environment.apiBaseUrl, relativeUrl);
          responseEntity = yield _this.storageCacheHelper.GetResponseFromDbIfPresent(fullUrlToHit, reqMethod, additionalRequestDetails);
          if (responseEntity != null) return responseEntity;else {
            // add headers and all. and call base Ajax
            additionalRequestDetails.headers = yield _this.AddCommonHeaders(additionalRequestDetails.headers);
            if (additionalRequestDetails.enableAuth === _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_1__.Authentication.true) {
              let token = yield _this.storageservice.getDataFromAnyStorage(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.DbKeys.ACCESS_TOKEN);
              if (token == null || token === '') throw new Error(`Token not found for URL - '${relativeUrl}'.`);else additionalRequestDetails.headers.Add('Authorization', 'Bearer ' + token);
            }
            if (reqMethod === 'GET') {
              // validations
              // eg no body, proper url etc
            } else if (reqMethod === 'POST') {
              // validations
            } else if (reqMethod === 'DELETE') {
              // validations
            }
            axiosResp = yield _this.GetHttpDataAsync(fullUrlToHit, reqMethod, reqBody, additionalRequestDetails.headers, additionalRequestDetails.contentType);
            if (_this.commonResponseCodeHandler.handlerDict.Keys().includes(axiosResp.status.toString())) {
              let errMessage = _this.commonResponseCodeHandler.handlerDict.Item(axiosResp.status.toString())(axiosResp);
              return _this.CreateGenericApiResponseObject(errMessage);
            }
            responseEntity = yield _this.CreateResponseEntityFromAxiosResp(axiosResp, additionalRequestDetails.custRespResolver);
            if (responseEntity == null) {
              throw new Error('Null Response Formed.');
            }
            // add response to cache if applicable
            yield _this.storageCacheHelper.AddOrUpdateResponseInCacheIfApplicable(fullUrlToHit, reqMethod, additionalRequestDetails, responseEntity);
            return responseEntity;
          }
        } catch (x) {
          let msg = '';
          if (x instanceof Error) msg = x.message;else msg = JSON.stringify(x);
          const resp = _this.CreateGenericApiResponseObject(msg);
          resp.axiosResponse = axiosResp;
          return resp;
        }
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    this.CreateResponseEntityFromAxiosResp = /*#__PURE__*/function () {
      var _ref2 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (axiosResp, respResolver) {
        let retObject = null;
        if (_this.IsSuccessCode(axiosResp.status)) {
          if (respResolver != null) {
            const data = respResolver(axiosResp);
            data.axiosResponse = axiosResp;
            retObject = data;
          } else {
            const data = axiosResp.data; // need to check this how to remove additional props
            data.axiosResponse = axiosResp;
            retObject = data;
          }
        } else {
          // either response has boday as formatted response or not.
          if (axiosResp.data != null && axiosResp.data.isError !== undefined) {
            retObject = axiosResp.data;
            retObject.axiosResponse = axiosResp;
          }
        }
        if (retObject == null) {
          retObject = _this.CreateGenericApiResponseObject(`Unknown error occured - status code '${axiosResp.status}'`);
          retObject.axiosResponse = axiosResp;
        }
        return retObject;
      });
      return function (_x2, _x3) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.CreateGenericApiResponseObject = addMsg => {
      const resp = new src_app_models_service_api_contracts_base_api_response__WEBPACK_IMPORTED_MODULE_6__.ApiResponse();
      resp.isError = true;
      resp.errorData = new src_app_models_service_api_contracts_error_data__WEBPACK_IMPORTED_MODULE_7__.ErrorData();
      resp.errorData.displayMessage = addMsg;
      resp.errorData.apiErrorType = src_app_models_service_enums_api_error_type_s_m_enum__WEBPACK_IMPORTED_MODULE_8__.ApiErrorTypeSM.FrameworkException_Log;
      return resp;
    };
  }
  ApplyQueryFilterToUrl(currentUrlToHit, queryFilter) {
    if (queryFilter === undefined || queryFilter === null) {
      return currentUrlToHit;
    }
    let urlQuery = '';
    //code for search, orderby etc to be added needs to be as per the odata query format        
    if (queryFilter.skip >= 0 && queryFilter.top > 0) urlQuery += `$skip=${queryFilter.skip}&$top=${queryFilter.top}`;
    if (queryFilter.searchText != null && queryFilter.searchText != undefined && queryFilter.searchText.length > 0) {
      if (urlQuery != '' && urlQuery.length > 0) urlQuery += '&';
      urlQuery += `search=${queryFilter.searchText}`;
    }
    // add other query like orderby etc as per odata
    if (currentUrlToHit.indexOf('?') > 0) currentUrlToHit = `${currentUrlToHit}&${urlQuery}`;else currentUrlToHit = `${currentUrlToHit}?${urlQuery}`;
    return currentUrlToHit;
  }
  AddCommonHeaders(commonHeaders) {
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (commonHeaders == null) commonHeaders = new src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_5__.DictionaryCollection();
      commonHeaders.Add(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersName.ApiType, _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersValue.ApiType);
      commonHeaders.Add(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersName.DevApk, _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersValue.DevApk);
      commonHeaders.Add(_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersName.AppVersion, _app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.HeadersValue.AppVersion);
      // //cors headers
      // if (environment.enableCORSHeaders) {
      //     commonHeaders.Add(AppConstants.HeadersName.CORS_ALLOW_CREDENTIALS, AppConstants.HeadersValue.CORS_ALLOW_CREDENTIALS);
      //     commonHeaders.Add(AppConstants.HeadersName.CORS_ALLOW_METHODS, AppConstants.HeadersValue.CORS_ALLOW_METHODS);
      //     commonHeaders.Add(AppConstants.HeadersName.CORS_ALLOW_ORIGIN, AppConstants.HeadersValue.CORS_ALLOW_ORIGIN);
      // }
      return commonHeaders;
    })();
  }
}

/***/ }),

/***/ 7968:
/*!************************************************************************!*\
  !*** ./src/app/clients/helpers/common-response-code-handler.helper.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonResponseCodeHandler: () => (/* binding */ CommonResponseCodeHandler)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var _app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../app-constants */ 3465);
/* harmony import */ var src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/internal/dictionary-collection */ 7754);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../services/storage.service */ 9140);

var _class;





class CommonResponseCodeHandler {
  constructor(router, storageService) {
    this.router = router;
    this.storageService = storageService;
    // add common functions here
    this.handlerDict = new src_app_models_internal_dictionary_collection__WEBPACK_IMPORTED_MODULE_2__.DictionaryCollection();
    this.AddCommonHandlers();
  }
  AddCommonHandlers() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this.handlerDict.Add('401', resp => {
        // this.commonService.presentToast(AppConstants.ErrorPrompts.Unauthorized_User);
        _this.router.navigate(['home-page']);
        _this.storageService.removeFromStorage(_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.DbKeys.ACCESS_TOKEN);
        return _app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ErrorPrompts.Unauthorized_User;
      });
    })();
  }
}
_class = CommonResponseCodeHandler;
_class.ɵfac = function CommonResponseCodeHandler_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__.Router), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 3405:
/*!********************************************************!*\
  !*** ./src/app/clients/helpers/common-utils.helper.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonUtils: () => (/* binding */ CommonUtils)
/* harmony export */ });
var _class;
class CommonUtils {}
_class = CommonUtils;
_class.CombineUrl = (urlPart1, urlPart2) => {
  let p1 = urlPart1.trim();
  if (p1.endsWith('/')) {
    p1 = p1.substring(0, p1.length - 1);
  }
  let p2 = urlPart2.trim();
  if (p2.startsWith('/')) {
    p2 = p2.substring(1);
  }
  return p1 + '/' + p2;
};

/***/ }),

/***/ 1927:
/*!*********************************************************!*\
  !*** ./src/app/clients/helpers/storage-cache.helper.ts ***!
  \*********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageCache: () => (/* binding */ StorageCache)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/environments/environment */ 553);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var flatted__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flatted */ 2116);
/* harmony import */ var _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common-logger.helper */ 4739);
/* harmony import */ var src_app_models_internal_cache_item__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/internal/cache-item */ 4043);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/storage.service */ 9140);

var _class;







class StorageCache {
  constructor(storageService) {
    var _this = this;
    this.storageService = storageService;
    this.GetResponseFromDbIfPresent = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullUrlToHit, reqMethod, additionalRequestDetails) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.enableResponseCacheProcessing) return null;
        if (additionalRequestDetails.useCacheIfPossible && !additionalRequestDetails.forceGetResponseFromApi && reqMethod === 'GET') {
          let cacheItem = yield _this.GetCacheItemIfPresent(fullUrlToHit);
          if (cacheItem != null) {
            return cacheItem;
          }
        }
        return null;
      });
      return function (_x, _x2, _x3) {
        return _ref.apply(this, arguments);
      };
    }();
    this.AddOrUpdateResponseInCacheIfApplicable = /*#__PURE__*/function () {
      var _ref2 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (fullUrlToHit, reqMethod, additionalRequestDetails, responseEntity) {
        if (!src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.enableResponseCacheProcessing) return false;
        if (additionalRequestDetails.useCacheIfPossible && reqMethod === 'GET' && responseEntity.axiosResponse?.status === 200 && !responseEntity.isError) {
          _this.AddOrUpdateCacheItem(fullUrlToHit, responseEntity);
        }
        return false;
      });
      return function (_x4, _x5, _x6, _x7) {
        return _ref2.apply(this, arguments);
      };
    }();
    this.GetCacheItemIfPresent = /*#__PURE__*/function () {
      var _ref3 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key) {
        if (key == null) return null;
        let cacheMap = yield _this.GetMapFromDb();
        if (cacheMap.has(key)) {
          const cacheItem = cacheMap.get(key);
          if (cacheItem != null) {
            if (cacheItem.ValidUptoDateTimeTicks >= new Date().valueOf()) {
              let item = cacheItem.Data;
              if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Response Returned form cache -- '${key}'`);
              return item;
            } else {
              if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Cache object expired -- '${key}'`);
            }
          }
        }
        return null;
      });
      return function (_x8) {
        return _ref3.apply(this, arguments);
      };
    }();
    this.AddOrUpdateCacheItem = /*#__PURE__*/function () {
      var _ref4 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (key, data, cacheTimeout = 0) {
        if (key != null && data != null) {
          let cacheMap = null;
          cacheMap = yield _this.GetMapFromDb();
          if (cacheMap.has(key)) {
            if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Old Key Deleted -- '${key}'`);
            cacheMap.delete(key);
          }
          _this.RemoveExpiredKeys(cacheMap);
          const cacheItem = new src_app_models_internal_cache_item__WEBPACK_IMPORTED_MODULE_5__.CacheItem();
          let currDate = new Date();
          cacheItem.CreatedDateTimeTicks = currDate.valueOf();
          cacheTimeout = cacheTimeout === 0 ? src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.apiResponseCacheTimeoutInMinutes : cacheTimeout;
          currDate.setMinutes(currDate.getMinutes() + cacheTimeout);
          cacheItem.ValidUptoDateTimeTicks = currDate.valueOf();
          cacheItem.AccessKey = key;
          cacheItem.Data = data;
          cacheMap.set(key, cacheItem);
          if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - New Key Added -- '${key}'`);
          yield _this.SaveOrUpdateMapInDb(cacheMap);
          return true;
        }
        return false;
      });
      return function (_x9, _x10) {
        return _ref4.apply(this, arguments);
      };
    }();
    this.RemoveExpiredKeys = cacheMap => {
      if (cacheMap != null) {
        let keysToDel = [];
        cacheMap.forEach((item, key) => {
          if (item != null && item.ValidUptoDateTimeTicks <= new Date().valueOf()) keysToDel.push(key);
        });
        keysToDel.forEach(key => {
          if (src_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.LoggingInfo.cacheLogs) _common_logger_helper__WEBPACK_IMPORTED_MODULE_4__.CommonLogger.LogTextOrObject(`StorageCache - Item deleted after expiry -- '${key}'`);
          cacheMap.delete(key);
        });
      }
    };
    this.GetMapFromDb = /*#__PURE__*/(0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let cacheMap = null;
      let cacheMapTxt = yield _this.storageService.getFromStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.DbKeys.API_RESP_CACHE);
      if (cacheMapTxt != null && cacheMapTxt !== '') cacheMap = new Map(flatted__WEBPACK_IMPORTED_MODULE_3__.parse(cacheMapTxt));
      if (cacheMap != null && !(cacheMap instanceof Map)) cacheMap = null;
      return cacheMap == null ? new Map() : cacheMap;
    });
    this.SaveOrUpdateMapInDb = /*#__PURE__*/function () {
      var _ref6 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (cacheMap) {
        let cacheMapTxt = flatted__WEBPACK_IMPORTED_MODULE_3__.stringify(Array.from(cacheMap.entries()));
        yield _this.storageService.saveToStorage(src_app_constants__WEBPACK_IMPORTED_MODULE_2__.AppConstants.DbKeys.API_RESP_CACHE, cacheMapTxt);
        return true;
      });
      return function (_x11) {
        return _ref6.apply(this, arguments);
      };
    }();
  }
}
_class = StorageCache;
_class.ɵfac = function StorageCache_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](src_app_services_storage_service__WEBPACK_IMPORTED_MODULE_6__.StorageService));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 916:
/*!***************************************************************!*\
  !*** ./src/app/models/internal/additional-request-details.ts ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AdditionalRequestDetails: () => (/* binding */ AdditionalRequestDetails),
/* harmony export */   Authentication: () => (/* binding */ Authentication)
/* harmony export */ });
var Authentication;
(function (Authentication) {
  Authentication[Authentication["true"] = 0] = "true";
  Authentication[Authentication["false"] = 1] = "false";
})(Authentication || (Authentication = {}));
class AdditionalRequestDetails {
  constructor(useCacheIfPossible, enableAuth = Authentication.true) {
    this.enableAuth = Authentication.true;
    this.useCacheIfPossible = false;
    this.forceGetResponseFromApi = false;
    this.headers = null;
    this.contentType = 'application/json';
    this.custRespResolver = null;
    this.useCacheIfPossible = useCacheIfPossible;
    this.enableAuth = enableAuth;
  }
}

/***/ }),

/***/ 4043:
/*!***********************************************!*\
  !*** ./src/app/models/internal/cache-item.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CacheItem: () => (/* binding */ CacheItem)
/* harmony export */ });
class CacheItem {
  constructor() {
    this.CreatedDateTimeTicks = -1;
    this.ValidUptoDateTimeTicks = -1;
    this.AccessKey = '';
  }
}

/***/ }),

/***/ 4589:
/*!*******************************************************************!*\
  !*** ./src/app/models/service/api-contracts/base/api-response.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiResponse: () => (/* binding */ ApiResponse)
/* harmony export */ });
class ApiResponse {}

/***/ }),

/***/ 6188:
/*!************************************************************!*\
  !*** ./src/app/models/service/api-contracts/error-data.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ErrorData: () => (/* binding */ ErrorData)
/* harmony export */ });
class ErrorData {}

/***/ }),

/***/ 8443:
/*!*****************************************************************!*\
  !*** ./src/app/models/service/enums/api-error-type-s-m.enum.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ApiErrorTypeSM: () => (/* binding */ ApiErrorTypeSM)
/* harmony export */ });
var ApiErrorTypeSM;
(function (ApiErrorTypeSM) {
  ApiErrorTypeSM[ApiErrorTypeSM["Fatal_Log"] = 1] = "Fatal_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["Success_NoLog"] = 2] = "Success_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["InvalidToken_Log"] = 3] = "InvalidToken_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["FrameworkException_Log"] = 4] = "FrameworkException_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["InvalidInputData_Log"] = 5] = "InvalidInputData_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["InvalidInputData_NoLog"] = 6] = "InvalidInputData_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["NoRecord_Log"] = 7] = "NoRecord_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["NoRecord_NoLog"] = 8] = "NoRecord_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["ModelError_Log"] = 9] = "ModelError_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["ModelError_NoLog"] = 10] = "ModelError_NoLog";
  ApiErrorTypeSM[ApiErrorTypeSM["Access_Denied_Log"] = 11] = "Access_Denied_Log";
  ApiErrorTypeSM[ApiErrorTypeSM["Access_Denied_NoLog"] = 12] = "Access_Denied_NoLog";
})(ApiErrorTypeSM || (ApiErrorTypeSM = {}));

/***/ }),

/***/ 2116:
/*!*******************************************!*\
  !*** ./node_modules/flatted/esm/index.js ***!
  \*******************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   fromJSON: () => (/* binding */ fromJSON),
/* harmony export */   parse: () => (/* binding */ parse),
/* harmony export */   stringify: () => (/* binding */ stringify),
/* harmony export */   toJSON: () => (/* binding */ toJSON)
/* harmony export */ });
/*! (c) 2020 Andrea Giammarchi */

const {
  parse: $parse,
  stringify: $stringify
} = JSON;
const {
  keys
} = Object;
const Primitive = String; // it could be Number
const primitive = 'string'; // it could be 'number'

const ignore = {};
const object = 'object';
const noop = (_, value) => value;
const primitives = value => value instanceof Primitive ? Primitive(value) : value;
const Primitives = (_, value) => typeof value === primitive ? new Primitive(value) : value;
const revive = (input, parsed, output, $) => {
  const lazy = [];
  for (let ke = keys(output), {
      length
    } = ke, y = 0; y < length; y++) {
    const k = ke[y];
    const value = output[k];
    if (value instanceof Primitive) {
      const tmp = input[value];
      if (typeof tmp === object && !parsed.has(tmp)) {
        parsed.add(tmp);
        output[k] = ignore;
        lazy.push({
          k,
          a: [input, parsed, tmp, $]
        });
      } else output[k] = $.call(output, k, tmp);
    } else if (output[k] !== ignore) output[k] = $.call(output, k, value);
  }
  for (let {
      length
    } = lazy, i = 0; i < length; i++) {
    const {
      k,
      a
    } = lazy[i];
    output[k] = $.call(output, k, revive.apply(null, a));
  }
  return output;
};
const set = (known, input, value) => {
  const index = Primitive(input.push(value) - 1);
  known.set(value, index);
  return index;
};
const parse = (text, reviver) => {
  const input = $parse(text, Primitives).map(primitives);
  const value = input[0];
  const $ = reviver || noop;
  const tmp = typeof value === object && value ? revive(input, new Set(), value, $) : value;
  return $.call({
    '': tmp
  }, '', tmp);
};
const stringify = (value, replacer, space) => {
  const $ = replacer && typeof replacer === object ? (k, v) => k === '' || -1 < replacer.indexOf(k) ? v : void 0 : replacer || noop;
  const known = new Map();
  const input = [];
  const output = [];
  let i = +set(known, input, $.call({
    '': value
  }, '', value));
  let firstRun = !i;
  while (i < input.length) {
    firstRun = true;
    output[i] = $stringify(input[i++], replace, space);
  }
  return '[' + output.join(',') + ']';
  function replace(key, value) {
    if (firstRun) {
      firstRun = !firstRun;
      return value;
    }
    const after = $.call(this, key, value);
    switch (typeof after) {
      case object:
        if (after === null) return after;
      case primitive:
        return known.get(after) || set(known, input, after);
    }
    return after;
  }
};
const toJSON = any => $parse(stringify(any));
const fromJSON = any => parse($stringify(any));

/***/ })

}]);
//# sourceMappingURL=default-src_app_clients_base-client_base-api_client_ts-src_app_clients_helpers_common-respons-11e25e.js.map