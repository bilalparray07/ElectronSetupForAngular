"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_login_login_module_ts"],{

/***/ 1015:
/*!********************************************!*\
  !*** ./src/app/clients/accounts.client.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AccountsClient: () => (/* binding */ AccountsClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/internal/additional-request-details */ 916);
/* harmony import */ var _base_client_base_api_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./base-client/base-api.client */ 5165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/storage.service */ 9140);
/* harmony import */ var _helpers_storage_cache_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/storage-cache.helper */ 1927);
/* harmony import */ var _helpers_common_response_code_handler_helper__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./helpers/common-response-code-handler.helper */ 7968);

var _class;







class AccountsClient extends _base_client_base_api_client__WEBPACK_IMPORTED_MODULE_3__.BaseApiClient {
  constructor(storageService, storageCache, commonResponseCodeHandler) {
    var _this;
    super(storageService, storageCache, commonResponseCodeHandler);
    _this = this;
    this.GenerateToken = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (tokenRequestSM) {
        let resp = yield _this.GetResponseAsync(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.ACCOUNT_URL}/ValidateLoginAndGenerateToken`, 'POST', tokenRequestSM, new _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_2__.AdditionalRequestDetails(false, _models_internal_additional_request_details__WEBPACK_IMPORTED_MODULE_2__.Authentication.false));
        return resp;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
  }
}
_class = AccountsClient;
_class.ɵfac = function AccountsClient_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_4__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_helpers_storage_cache_helper__WEBPACK_IMPORTED_MODULE_5__.StorageCache), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵinject"](_helpers_common_response_code_handler_helper__WEBPACK_IMPORTED_MODULE_6__.CommonResponseCodeHandler));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 7822:
/*!************************************************************************!*\
  !*** ./src/app/components/main/end-user/login/login-routing.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginRoutingModule: () => (/* binding */ LoginRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login.component */ 5844);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






const routes = [{
  path: '',
  component: _login_component__WEBPACK_IMPORTED_MODULE_0__.LoginComponent
}];
class LoginRoutingModule {}
_class = LoginRoutingModule;
_class.ɵfac = function LoginRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule, _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](LoginRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule, _angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5844:
/*!*******************************************************************!*\
  !*** ./src/app/components/main/end-user/login/login.component.ts ***!
  \*******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginComponent: () => (/* binding */ LoginComponent)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base.component */ 121);
/* harmony import */ var src_app_models_view_sample_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/sample.viewmodel */ 5895);
/* harmony import */ var src_app_models_service_token_token_request_s_m__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/service/token/token-request-s-m */ 1682);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_sample_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/sample.service */ 8705);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);

var _class;









class LoginComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  /**
   *
   */
  constructor(commonService, logService, sampleService) {
    super(commonService, logService);
    this.sampleService = sampleService;
  }
  ngOnInit() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      // console.log("sldjkjsndfjk");
      _this.viewModel = new src_app_models_view_sample_viewmodel__WEBPACK_IMPORTED_MODULE_3__.SampleViewModel();
      _this.viewModel.tokenRequest = new src_app_models_service_token_token_request_s_m__WEBPACK_IMPORTED_MODULE_4__.TokenRequestSM();
    })();
  }
  GenerateToken() {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2._commonService.presentLoading();
        //have to do paging
        let resp = yield _this2.sampleService.generateToken(_this2.viewModel.tokenRequest);
        if (resp.isError) {
          _this2._exceptionHandler.logObject(resp.errorData);
          _this2._commonService.showSweetAlertToast({
            title: "Error!",
            text: resp.errorData.displayMessage,
            timer: 5000,
            position: "top-right",
            icon: "error"
          });
        } else {
          if (resp.successData.accessToken != null) _this2.viewModel.tokenResponse = resp.successData;
        }
      } catch (error) {
        _this2._commonService.showSweetAlertToast({
          title: "Error!",
          text: src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ErrorPrompts.Unknown_Error,
          timer: 5000,
          position: "top-right",
          icon: "error"
        });
        throw error;
      } finally {
        yield _this2._commonService.dismissLoader();
      }
    })();
  }
  presentAlert() {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this3._commonService.presentConfirmAlert({
        title: "Test",
        subTitle: "Test Sub",
        message: "Test Message",
        showModal: true
      }).then(result => {
        //means true or false
        console.log(result);
      }, reason => {
        // means backdrop pressed
        console.log(reason);
      });
    })();
  }
}
_class = LoginComponent;
_class.ɵfac = function LoginComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_6__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdirectiveInject"](src_app_services_sample_service__WEBPACK_IMPORTED_MODULE_7__.SampleService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-login"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵInheritDefinitionFeature"]],
  decls: 15,
  vars: 2,
  consts: [[1, "row"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "Username", "required", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "password", "placeholder", "Password", "required", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "btn", "btn-primary", 3, "click"]],
  template: function LoginComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](3, "User Name");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](4, "input", 3);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_4_listener($event) {
        return ctx.viewModel.tokenRequest.loginId = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](5, "div", 1)(6, "label", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](7, "Password");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](8, "input", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("ngModelChange", function LoginComponent_Template_input_ngModelChange_8_listener($event) {
        return ctx.viewModel.tokenRequest.password = $event;
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](9, "div", 1)(10, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_10_listener() {
        return ctx.GenerateToken();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](11, " Generate Token");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementStart"](12, "div", 1)(13, "button", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵlistener"]("click", function LoginComponent_Template_button_click_13_listener() {
        return ctx.presentAlert();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵtext"](14, " Sample Confirm Alert");
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵelementEnd"]()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.viewModel.tokenRequest.loginId);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_8__["ɵɵproperty"]("ngModel", ctx.viewModel.tokenRequest.password);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8427:
/*!****************************************************************!*\
  !*** ./src/app/components/main/end-user/login/login.module.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LoginModule: () => (/* binding */ LoginModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _login_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login-routing.module */ 7822);
/* harmony import */ var _login_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./login.component */ 5844);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class LoginModule {}
_class = LoginModule;
_class.ɵfac = function LoginModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](LoginModule, {
    declarations: [_login_component__WEBPACK_IMPORTED_MODULE_1__.LoginComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _login_routing_module__WEBPACK_IMPORTED_MODULE_0__.LoginRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ }),

/***/ 6484:
/*!************************************************************!*\
  !*** ./src/app/models/service/token/token-request-root.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenRequestRoot: () => (/* binding */ TokenRequestRoot)
/* harmony export */ });
class TokenRequestRoot {}

/***/ }),

/***/ 1682:
/*!***********************************************************!*\
  !*** ./src/app/models/service/token/token-request-s-m.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TokenRequestSM: () => (/* binding */ TokenRequestSM)
/* harmony export */ });
/* harmony import */ var _token_request_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./token-request-root */ 6484);

class TokenRequestSM extends _token_request_root__WEBPACK_IMPORTED_MODULE_0__.TokenRequestRoot {}

/***/ }),

/***/ 5895:
/*!*************************************************!*\
  !*** ./src/app/models/view/sample.viewmodel.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SampleViewModel: () => (/* binding */ SampleViewModel)
/* harmony export */ });
class SampleViewModel {
  constructor() {
    this.PageTitle = 'Sample';
  }
}

/***/ }),

/***/ 8705:
/*!********************************************!*\
  !*** ./src/app/services/sample.service.ts ***!
  \********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SampleService: () => (/* binding */ SampleService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../models/service/api-contracts/base/api-request */ 2517);
/* harmony import */ var _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../models/service/enums/role-type-s-m.enum */ 1610);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clients_accounts_client__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../clients/accounts.client */ 1015);

var _class;






class SampleService extends _base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService {
  constructor(accountClient) {
    super();
    this.accountClient = accountClient;
  }
  generateToken(tokenReq) {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (tokenReq == null || tokenReq.loginId == null)
        // null checks
        {
          throw new Error(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ErrorPrompts.Invalid_Input_Data);
        } else {
        let apiRequest = new _models_service_api_contracts_base_api_request__WEBPACK_IMPORTED_MODULE_3__.ApiRequest();
        tokenReq.companyCode = '123';
        tokenReq.roleType = _models_service_enums_role_type_s_m_enum__WEBPACK_IMPORTED_MODULE_4__.RoleTypeSM.ClientAdmin;
        apiRequest.reqData = tokenReq;
        return yield _this.accountClient.GenerateToken(apiRequest);
      }
    })();
  }
}
_class = SampleService;
_class.ɵfac = function SampleService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_clients_accounts_client__WEBPACK_IMPORTED_MODULE_5__.AccountsClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_login_login_module_ts.js.map