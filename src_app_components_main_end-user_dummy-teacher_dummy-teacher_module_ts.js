"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_dummy-teacher_dummy-teacher_module_ts"],{

/***/ 1385:
/*!*************************************************!*\
  !*** ./src/app/clients/dummy-teacher.client.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyTeacherClient: () => (/* binding */ DummyTeacherClient)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_client_base_api_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base-client/base-api.client */ 5165);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _services_storage_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/storage.service */ 9140);
/* harmony import */ var _helpers_storage_cache_helper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./helpers/storage-cache.helper */ 1927);
/* harmony import */ var _helpers_common_response_code_handler_helper__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./helpers/common-response-code-handler.helper */ 7968);

var _class;






class DummyTeacherClient extends _base_client_base_api_client__WEBPACK_IMPORTED_MODULE_2__.BaseApiClient {
  constructor(storageService, storageCache, commonResponseCodeHandler) {
    var _this;
    /**Get teachers based on odata query */
    super(storageService, storageCache, commonResponseCodeHandler);
    _this = this;
    this.GetTeachersByOdata = /*#__PURE__*/function () {
      var _ref = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (queryFilter) {
        let finalUrl = _this.ApplyQueryFilterToUrl(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.DUMMY_TEACHER_URL}`, queryFilter);
        let resp = yield _this.GetResponseAsync(finalUrl, 'GET');
        return resp;
      });
      return function (_x) {
        return _ref.apply(this, arguments);
      };
    }();
    /**Get all teachers */
    this.GetAllTeachers = /*#__PURE__*/(0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      let resp = yield _this.GetResponseAsync(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.DUMMY_TEACHER_URL}`, 'GET');
      return resp;
    });
    /**Get teacher by id */
    this.GetTeacherById = /*#__PURE__*/function () {
      var _ref3 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (Id) {
        let resp = yield _this.GetResponseAsync(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.DUMMY_TEACHER_URL}/${Id}`, 'GET');
        return resp;
      });
      return function (_x2) {
        return _ref3.apply(this, arguments);
      };
    }();
    /**Add a new teacher */
    this.AddTeacher = /*#__PURE__*/function () {
      var _ref4 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (addTeacherRequest) {
        let resp = yield _this.GetResponseAsync(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.DUMMY_TEACHER_URL, 'POST', addTeacherRequest);
        return resp;
      });
      return function (_x3) {
        return _ref4.apply(this, arguments);
      };
    }();
    /**Update Teacher*/
    this.UpdateTeacher = /*#__PURE__*/function () {
      var _ref5 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (updateTeacherRequest) {
        let resp = yield _this.GetResponseAsync(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.DUMMY_TEACHER_URL}/${updateTeacherRequest.reqData.id}`, 'PUT', updateTeacherRequest);
        return resp;
      });
      return function (_x4) {
        return _ref5.apply(this, arguments);
      };
    }();
    /**delete teacher by id */
    this.DeleteTeacherById = /*#__PURE__*/function () {
      var _ref6 = (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* (Id) {
        let resp = yield _this.GetResponseAsync(`${src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ApiUrls.DUMMY_TEACHER_URL}/${Id}`, 'DELETE');
        return resp;
      });
      return function (_x5) {
        return _ref6.apply(this, arguments);
      };
    }();
  }
}
_class = DummyTeacherClient;
_class.ɵfac = function DummyTeacherClient_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_services_storage_service__WEBPACK_IMPORTED_MODULE_3__.StorageService), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_helpers_storage_cache_helper__WEBPACK_IMPORTED_MODULE_4__.StorageCache), _angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵinject"](_helpers_common_response_code_handler_helper__WEBPACK_IMPORTED_MODULE_5__.CommonResponseCodeHandler));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_6__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ }),

/***/ 9173:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/end-user/dummy-teacher/dummy-teacher-routing.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyTeacherRoutingModule: () => (/* binding */ DummyTeacherRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _dummy_teacher_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy-teacher.component */ 5923);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _dummy_teacher_component__WEBPACK_IMPORTED_MODULE_0__.DummyTeacherComponent
}];
class DummyTeacherRoutingModule {}
_class = DummyTeacherRoutingModule;
_class.ɵfac = function DummyTeacherRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](DummyTeacherRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 5923:
/*!***********************************************************************************!*\
  !*** ./src/app/components/main/end-user/dummy-teacher/dummy-teacher.component.ts ***!
  \***********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyTeacherComponent: () => (/* binding */ DummyTeacherComponent)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_models_view_dummy_teacher_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/dummy-teacher.viewmodel */ 5622);
/* harmony import */ var _base_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../base.component */ 121);
/* harmony import */ var src_app_models_service_v1_dummy_teacher_s_m__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/service/v1/dummy-teacher-s-m */ 4922);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/teacher.service */ 6084);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/forms */ 8849);

var _class;









function DummyTeacherComponent_tr_18_Template(rf, ctx) {
  if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "tr", 10)(1, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](5, "td");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](7, "td")(8, "i", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DummyTeacherComponent_tr_18_Template_i_click_8_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const teacher_r3 = restoredCtx.$implicit;
      const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r4.click_OpenAddEditModal(_r1, teacher_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "td")(10, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DummyTeacherComponent_tr_18_Template_i_click_10_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r5);
      const teacher_r3 = restoredCtx.$implicit;
      const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r6.deleteTeacher(teacher_r3.id));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const teacher_r3 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](teacher_r3.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](teacher_r3.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](teacher_r3.emailAddress);
  }
}
function DummyTeacherComponent_ng_template_19_Template(rf, ctx) {
  if (rf & 1) {
    const _r9 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 13)(1, "h4", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](3, "button", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DummyTeacherComponent_ng_template_19_Template_button_click_3_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r7.dismiss("Cross click"));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 16)(5, "div", 17)(6, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](7, "First Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](8, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DummyTeacherComponent_ng_template_19_Template_input_ngModelChange_8_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r10 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r10.viewModel.singleTeacher.firstName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](9, "div", 17)(10, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](11, "Last Name");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](12, "input", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DummyTeacherComponent_ng_template_19_Template_input_ngModelChange_12_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r11.viewModel.singleTeacher.lastName = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "div", 17)(14, "label", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](15, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](16, "input", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("ngModelChange", function DummyTeacherComponent_ng_template_19_Template_input_ngModelChange_16_listener($event) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const ctx_r12 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx_r12.viewModel.singleTeacher.emailAddress = $event);
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "div", 22)(18, "button", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DummyTeacherComponent_ng_template_19_Template_button_click_18_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r9);
      const modal_r7 = restoredCtx.$implicit;
      return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](modal_r7.close());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](19, "Save");
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
  }
  if (rf & 2) {
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtextInterpolate"](ctx_r2.viewModel.AddEditModalTitle);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.viewModel.singleTeacher.firstName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.viewModel.singleTeacher.lastName);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngModel", ctx_r2.viewModel.singleTeacher.emailAddress);
  }
}
class DummyTeacherComponent extends _base_component__WEBPACK_IMPORTED_MODULE_2__.BaseComponent {
  /**
   * comments here and summary of the function
   *
   */
  constructor(teacherService, commonService, logService) {
    super(commonService, logService);
    this.teacherService = teacherService;
    this.viewModel = new src_app_models_view_dummy_teacher_viewmodel__WEBPACK_IMPORTED_MODULE_1__.DummyTeacherViewModel();
  }
  ngOnInit() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      yield _this.loadPageData();
    })();
  }
  loadPageData() {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this2._commonService.presentLoading();
        //have to do paging
        let resp = yield _this2.teacherService.getAllTeachers();
        if (resp.isError) {
          yield _this2._exceptionHandler.logObject(resp.errorData);
          _this2._commonService.showSweetAlertToast({
            title: 'Error!',
            text: resp.errorData.displayMessage,
            timer: 5000,
            position: 'top-right',
            icon: 'error'
          });
        } else {
          _this2.viewModel.teachers = resp.successData;
        }
      } catch (error) {
        throw error;
      } finally {
        yield _this2._commonService.dismissLoader();
      }
    })();
  }
  getTeacherById(teacherId) {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        yield _this3._commonService.presentLoading();
        //have to do paging
        let resp = yield _this3.teacherService.getTeacherById(teacherId);
        if (resp.isError) {
          yield _this3._exceptionHandler.logObject(resp.errorData);
          _this3._commonService.showSweetAlertToast({
            title: 'Error!',
            text: resp.errorData.displayMessage,
            timer: 5000,
            position: 'top-right',
            icon: 'error'
          });
        } else {
          _this3.viewModel.singleTeacher = resp.successData;
        }
      } catch (error) {
        throw error;
      } finally {
        yield _this3._commonService.dismissLoader();
      }
    })();
  }
  click_OpenAddEditModal(content, teacherId) {
    var _this4 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      _this4.viewModel.AddEditModalTitle = teacherId > 0 ? 'Add Teacher' : 'Update Teacher';
      _this4.viewModel.singleTeacher = new src_app_models_service_v1_dummy_teacher_s_m__WEBPACK_IMPORTED_MODULE_3__.DummyTeacherSM();
      if (teacherId > 0) yield _this4.getTeacherById(teacherId);
      // await this.modalService.open(content).result.then(
      //   (result: any) => {
      //   },
      //   (reason: any) => {
      //   },
      // );
    })();
  }

  deleteTeacher(id) {
    var _this5 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      try {
        let resp = yield _this5.teacherService.deleteTeacher(id);
      } catch (error) {
        //show error message user friendly 
        throw error;
      }
    })();
  }
}
_class = DummyTeacherComponent;
_class.ɵfac = function DummyTeacherComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_teacher_service__WEBPACK_IMPORTED_MODULE_4__.TeacherService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_5__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_6__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-dummy-teacher"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵInheritDefinitionFeature"]],
  decls: 21,
  vars: 1,
  consts: [[1, "container-fluid"], [1, "row"], [3, "click"], [1, "col-lg-12", "col-md-12", "col-sm-12"], [1, "table", "table-striped"], ["scope", "col"], ["scope", "col", 1, "collapsable"], ["colspan", "2", "scope", "col"], ["class", "h5 fw-normal  text-center", 4, "ngFor", "ngForOf"], ["addEditModal", ""], [1, "h5", "fw-normal", "text-center"], [1, "bi", "bi-pencil", 3, "click"], [1, "bi", "bi-trash", 3, "click"], [1, "modal-header"], [1, "modal-title"], ["type", "button", "aria-label", "Close", 1, "btn-close", 3, "click"], [1, "modal-body"], [1, "mb-3"], [1, "form-label"], ["type", "text", "placeholder", "First Name", "required", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Last Name", "required", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], ["type", "text", "placeholder", "Email", "required", "title", 1, "form-control", 3, "ngModel", "ngModelChange"], [1, "modal-footer"], ["type", "button", 1, "btn", "btn-outline-dark", 3, "click"]],
  template: function DummyTeacherComponent_Template(rf, ctx) {
    if (rf & 1) {
      const _r14 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵgetCurrentView"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "button", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵlistener"]("click", function DummyTeacherComponent_Template_button_click_2_listener() {
        _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵrestoreView"](_r14);
        const _r1 = _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵreference"](20);
        return _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵresetView"](ctx.click_OpenAddEditModal(_r1, 0));
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](3, "Add Teacher");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](4, "div", 1)(5, "div", 3)(6, "table", 4)(7, "thead")(8, "tr")(9, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](10, "Question");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](11, "th", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](12, "Answer");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](13, "th", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](14, "Question Type");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](15, "th", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtext"](16, "Actions");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementStart"](17, "tbody");
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](18, DummyTeacherComponent_tr_18_Template, 11, 3, "tr", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵelementEnd"]()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplate"](19, DummyTeacherComponent_ng_template_19_Template, 20, 4, "ng-template", null, 9, _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵtemplateRefExtractor"]);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵadvance"](18);
      _angular_core__WEBPACK_IMPORTED_MODULE_7__["ɵɵproperty"]("ngForOf", ctx.viewModel.teachers);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_8__.NgForOf, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.RequiredValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_9__.NgModel],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5182:
/*!********************************************************************************!*\
  !*** ./src/app/components/main/end-user/dummy-teacher/dummy-teacher.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyTeacherModule: () => (/* binding */ DummyTeacherModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _dummy_teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./dummy-teacher-routing.module */ 9173);
/* harmony import */ var _dummy_teacher_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dummy-teacher.component */ 5923);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class DummyTeacherModule {}
_class = DummyTeacherModule;
_class.ɵfac = function DummyTeacherModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dummy_teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__.DummyTeacherRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_2__["ɵɵsetNgModuleScope"](DummyTeacherModule, {
    declarations: [_dummy_teacher_component__WEBPACK_IMPORTED_MODULE_1__.DummyTeacherComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_3__.CommonModule, _dummy_teacher_routing_module__WEBPACK_IMPORTED_MODULE_0__.DummyTeacherRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_4__.FormsModule]
  });
})();

/***/ }),

/***/ 5621:
/*!******************************************************************!*\
  !*** ./src/app/models/service/base/sample-service-model-base.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SampleServiceModelBase: () => (/* binding */ SampleServiceModelBase)
/* harmony export */ });
/* harmony import */ var _service_model_root__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../service-model-root */ 9333);

class SampleServiceModelBase extends _service_model_root__WEBPACK_IMPORTED_MODULE_0__.ServiceModelRoot {}

/***/ }),

/***/ 4566:
/*!******************************************************!*\
  !*** ./src/app/models/service/service-model-base.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceModelBase: () => (/* binding */ ServiceModelBase)
/* harmony export */ });
class ServiceModelBase {}

/***/ }),

/***/ 9333:
/*!******************************************************!*\
  !*** ./src/app/models/service/service-model-root.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ServiceModelRoot: () => (/* binding */ ServiceModelRoot)
/* harmony export */ });
/* harmony import */ var _service_model_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./service-model-base */ 4566);

class ServiceModelRoot extends _service_model_base__WEBPACK_IMPORTED_MODULE_0__.ServiceModelBase {}

/***/ }),

/***/ 4922:
/*!********************************************************!*\
  !*** ./src/app/models/service/v1/dummy-teacher-s-m.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyTeacherSM: () => (/* binding */ DummyTeacherSM)
/* harmony export */ });
/* harmony import */ var _base_sample_service_model_base__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../base/sample-service-model-base */ 5621);

class DummyTeacherSM extends _base_sample_service_model_base__WEBPACK_IMPORTED_MODULE_0__.SampleServiceModelBase {}

/***/ }),

/***/ 5622:
/*!********************************************************!*\
  !*** ./src/app/models/view/dummy-teacher.viewmodel.ts ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   DummyTeacherViewModel: () => (/* binding */ DummyTeacherViewModel)
/* harmony export */ });
class DummyTeacherViewModel {
  constructor() {
    this.PageTitle = 'Dummy Teacher';
    this.AddEditModalTitle = '';
    this.teachers = [];
  }
}

/***/ }),

/***/ 6084:
/*!*********************************************!*\
  !*** ./src/app/services/teacher.service.ts ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TeacherService: () => (/* binding */ TeacherService)
/* harmony export */ });
/* harmony import */ var D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js */ 1670);
/* harmony import */ var src_app_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app-constants */ 3465);
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var _clients_dummy_teacher_client__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../clients/dummy-teacher.client */ 1385);

var _class;




class TeacherService extends _base_service__WEBPACK_IMPORTED_MODULE_2__.BaseService {
  constructor(teacherClient) {
    super();
    this.teacherClient = teacherClient;
  }
  getAllTeachers() {
    var _this = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      return yield _this.teacherClient.GetAllTeachers();
    })();
  }
  getTeacherById(id) {
    var _this2 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (id <= 0) {
        throw new Error(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ErrorPrompts.Delete_Data_Error);
      }
      return yield _this2.teacherClient.GetTeacherById(id);
    })();
  }
  deleteTeacher(id) {
    var _this3 = this;
    return (0,D_unit_converter_desktop_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_0__["default"])(function* () {
      if (id <= 0) {
        throw new Error(src_app_constants__WEBPACK_IMPORTED_MODULE_1__.AppConstants.ErrorPrompts.Delete_Data_Error);
      }
      return yield _this3.teacherClient.DeleteTeacherById(id);
    })();
  }
}
_class = TeacherService;
_class.ɵfac = function TeacherService_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵinject"](_clients_dummy_teacher_client__WEBPACK_IMPORTED_MODULE_3__.DummyTeacherClient));
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: 'root'
});

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_dummy-teacher_dummy-teacher_module_ts.js.map