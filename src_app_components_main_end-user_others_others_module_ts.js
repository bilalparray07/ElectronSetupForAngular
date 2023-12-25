"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_others_others_module_ts"],{

/***/ 5234:
/*!**************************************************************************!*\
  !*** ./src/app/components/main/end-user/others/others-routing.module.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OthersRoutingModule: () => (/* binding */ OthersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _others_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./others.component */ 953);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _others_component__WEBPACK_IMPORTED_MODULE_0__.OthersComponent
}];
class OthersRoutingModule {}
_class = OthersRoutingModule;
_class.ɵfac = function OthersRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](OthersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 953:
/*!*********************************************************************!*\
  !*** ./src/app/components/main/end-user/others/others.component.ts ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OthersComponent: () => (/* binding */ OthersComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/internal/common-models */ 3882);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/converter.service */ 4063);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../child-components/frequency/frequency.component */ 7229);
/* harmony import */ var _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../child-components/weight/weight.component */ 8273);
/* harmony import */ var _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../child-components/time/time.component */ 1987);
/* harmony import */ var _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../child-components/area/area.component */ 7845);
/* harmony import */ var _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../child-components/speed/speed.component */ 8797);
/* harmony import */ var _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../child-components/length/length.component */ 1472);
/* harmony import */ var _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../child-components/volume/volume.component */ 2703);
/* harmony import */ var _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../child-components/temperature/temperature.component */ 9119);
/* harmony import */ var _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../child-components/force/force.component */ 7478);
/* harmony import */ var _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../child-components/pressure/pressure.component */ 5305);
/* harmony import */ var _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../child-components/work/work.component */ 1301);
/* harmony import */ var _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../child-components/planeangle/planeangle.component */ 2512);
/* harmony import */ var _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../child-components/power/power.component */ 7108);
/* harmony import */ var _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../child-components/current/current.component */ 3519);
/* harmony import */ var _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../child-components/cooking/cooking.component */ 4344);
/* harmony import */ var _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ../child-components/fuel/fuel.component */ 5673);
/* harmony import */ var _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../child-components/storage/storage.component */ 4082);
var _class;





























const _c0 = function (a0) {
  return {
    "selected-item": a0
  };
};
function OthersComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "li", 9)(1, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function OthersComponent_li_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r21.showCalculators(item_r19.title));
    })("keydown.enter", function OthersComponent_li_5_Template_div_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const _r20 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](_r20.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵlistener"]("click", function OthersComponent_li_5_Template_i_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵrestoreView"](_r22);
      const item_r19 = restoredCtx.$implicit;
      const ctx_r24 = _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵresetView"](ctx_r24.toggleFavorites(item_r19, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r19 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpureFunction1"](4, _c0, item_r19.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngClass", item_r19.isFavorite ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵpropertyInterpolate"]("src", item_r19.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtextInterpolate1"](" ", item_r19.title, " ");
  }
}
function OthersComponent_app_weight_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-weight");
  }
}
function OthersComponent_app_time_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-time");
  }
}
function OthersComponent_app_speed_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-speed");
  }
}
function OthersComponent_app_area_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-area");
  }
}
function OthersComponent_app_length_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-length");
  }
}
function OthersComponent_app_temperature_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-temperature");
  }
}
function OthersComponent_app_volume_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-volume");
  }
}
function OthersComponent_app_force_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-force");
  }
}
function OthersComponent_app_pressure_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-pressure");
  }
}
function OthersComponent_app_work_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-work");
  }
}
function OthersComponent_app_current_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-current");
  }
}
function OthersComponent_app_planeangle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-planeangle");
  }
}
function OthersComponent_app_power_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-power");
  }
}
function OthersComponent_app_frequency_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-frequency");
  }
}
function OthersComponent_app_cooking_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-cooking");
  }
}
function OthersComponent_app_fuel_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-fuel");
  }
}
function OthersComponent_app_storage_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](0, "app-storage");
  }
}
function OthersComponent_div_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]();
  }
}
class OthersComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService, convertersService, topNavService) {
    super(commonService, logService);
    this.convertersService = convertersService;
    this.topNavService = topNavService;
    this.otherConvertersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_4__.othersViewModel();
    this.topNavViewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_5__.TopNavViewModel();
    this.commonConverterViewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_2__.commonConverterViewModel();
    this.engineeringViewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_3__.engineeringConverterViewModel();
    this.localStorageItems = [];
    this.allConverters = new src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_1__.AllConverters();
    this.otherConvertersViewModel.filteredOtherConverters = this.allConverters.otherConverters;
  }
  ngOnInit() {
    this.otherConvertersViewModel.isCooking = true;
    this.topNavService.sharedDataSubject.subscribe(data => {
      this.topNavViewModel.receivedSearchValue = data;
      if (this.topNavViewModel.receivedSearchValue.trim() !== "") {
        const searchValue = this.topNavViewModel.receivedSearchValue.toLowerCase();
        this.otherConvertersViewModel.filteredOtherConverters = [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters].filter(item => {
          this.otherConvertersViewModel.isCooking = false;
          this.otherConvertersViewModel.isFuel = false;
          this.otherConvertersViewModel.isElectronic = false;
          return item.searchArrayFromConverters.some(term => term.toLowerCase().includes(searchValue));
        });
      } else {
        this.commonConverterViewModel.isWeight = false;
        this.commonConverterViewModel.isArea = false;
        this.commonConverterViewModel.isTime = false;
        this.commonConverterViewModel.isSpeed = false;
        this.commonConverterViewModel.isTemperature = false;
        this.commonConverterViewModel.isLength = false;
        this.commonConverterViewModel.isVolume = false;
        this.commonConverterViewModel.isFrequency = false;
        this.engineeringViewModel.isPressure = false;
        this.engineeringViewModel.isPower = false;
        this.engineeringViewModel.isWork = false;
        this.engineeringViewModel.isForce = false;
        this.engineeringViewModel.isPlaneAngle = false;
        this.engineeringViewModel.isCurrent = false;
        this.otherConvertersViewModel.isCooking = false;
        this.otherConvertersViewModel.isStorage = false;
        this.otherConvertersViewModel.isFuel = false;
        this.otherConvertersViewModel.filteredOtherConverters = this.allConverters.otherConverters;
      }
    });
    // search ends
    this.localStorageItems = this.getAllItemsFromLocalStorage();
    //compareing the localstoarage items with commonconverter and if same then setting isFavorties to true for the same;
    for (const item of [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters]) {
      item.isFavorite = this.localStorageItems.some(favoriteItem => favoriteItem.title === item.title);
    }
    // Find and mark the default selected item
    const defaultSelectedItemTitle = "Cooking"; // Replace with the actual title
    this.otherConvertersViewModel.defaultSelectedItem = this.otherConvertersViewModel.filteredOtherConverters.find(item => item.title === defaultSelectedItemTitle);
    if (this.otherConvertersViewModel.defaultSelectedItem) {
      this.otherConvertersViewModel.defaultSelectedItem.isSelected = true;
    }
  }
  // checking on where user clicked and rendering same component
  showCalculators(calculator) {
    // Reset all calculator flags to false
    this.commonConverterViewModel.isWeight = false;
    this.commonConverterViewModel.isSpeed = false;
    this.commonConverterViewModel.isArea = false;
    this.commonConverterViewModel.isTemperature = false;
    this.commonConverterViewModel.isLength = false;
    this.commonConverterViewModel.isVolume = false;
    this.commonConverterViewModel.isTime = false;
    this.engineeringViewModel.isPressure = false;
    this.engineeringViewModel.isWork = false;
    this.engineeringViewModel.isForce = false;
    this.engineeringViewModel.isCurrent = false;
    this.engineeringViewModel.isPower = false;
    this.engineeringViewModel.isPlaneAngle = false;
    this.commonConverterViewModel.isFrequency = false;
    this.otherConvertersViewModel.isCooking = false;
    this.otherConvertersViewModel.isFuel = false;
    this.otherConvertersViewModel.isElectronic = false;
    this.otherConvertersViewModel.isStorage = false;
    if (calculator === "Weight") {
      this.commonConverterViewModel.isWeight = true;
    } else if (calculator === "Speed") {
      this.commonConverterViewModel.isSpeed = true;
    } else if (calculator === "Time") {
      this.commonConverterViewModel.isTime = true;
    } else if (calculator === "Area") {
      this.commonConverterViewModel.isArea = true;
    } else if (calculator === "Length") {
      this.commonConverterViewModel.isLength = true;
    } else if (calculator === "Temperature") {
      this.commonConverterViewModel.isTemperature = true;
    } else if (calculator === "Volume") {
      this.commonConverterViewModel.isVolume = true;
    } else if (calculator === "Force") {
      this.engineeringViewModel.isForce = true;
    } else if (calculator === "Pressure") {
      this.engineeringViewModel.isPressure = true;
    } else if (calculator === "Work/Energy") {
      this.engineeringViewModel.isWork = true;
    } else if (calculator === "Power") {
      this.engineeringViewModel.isPower = true;
    } else if (calculator === "Current") {
      this.engineeringViewModel.isCurrent = true;
    } else if (calculator === "Plane Angle") {
      this.engineeringViewModel.isPlaneAngle = true;
    } else if (calculator === "Frequency") {
      this.commonConverterViewModel.isFrequency = true;
    } else if (calculator === "Cooking") {
      this.otherConvertersViewModel.isCooking = true;
    } else if (calculator === "Fuel Efficiency") {
      this.otherConvertersViewModel.isFuel = true;
    } else if (calculator === "Electronics") {
      this.otherConvertersViewModel.isElectronic = true;
    } else if (calculator === "Computer Data") {
      this.otherConvertersViewModel.isStorage = true;
    }
    // Update selected item
    if (this.otherConvertersViewModel.selectedItem) {
      this.otherConvertersViewModel.selectedItem.isSelected = false;
    }
    this.otherConvertersViewModel.selectedItem = this.otherConvertersViewModel.filteredOtherConverters.find(x => x.title === calculator);
    if (this.otherConvertersViewModel.selectedItem) {
      this.otherConvertersViewModel.selectedItem.isSelected = true;
      this.otherConvertersViewModel.defaultSelectedItem.isSelected = false;
    }
  }
  // toggling favorites
  toggleFavorites(item, event) {
    event.stopPropagation();
    item.isFavorite = !item.isFavorite;
    if (item.isFavorite) {
      localStorage.setItem(`${item.title}`, `${JSON.stringify(item)}`);
    } else {
      localStorage.removeItem(item.title);
    }
  }
  ////////////////////////////////////////////////
  getAllItemsFromLocalStorage() {
    const items = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      if (key !== null) {
        const value = localStorage.getItem(key);
        if (value !== null) {
          if (value.length > 6) {
            try {
              const parsedValue = JSON.parse(value);
              if (parsedValue.isFavorite === true) {
                items.push(parsedValue);
              }
            } catch (e) {
              // Handle the case where parsing failed
              console.error("Error parsing JSON for key:", key, "Error:", e);
            }
          }
        }
      }
    }
    return items;
  }
}
_class = OthersComponent;
_class.ɵfac = function OthersComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_7__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_8__.ConverterService), _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_9__.TopNavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-others"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵInheritDefinitionFeature"]],
  decls: 25,
  vars: 19,
  consts: [[1, "container-fluid", "pt-0", "ps-0", "ms-0"], [1, "row"], [1, "col-4", "col-md-4", "col-sm-4", "mt-0", "converter-list-side", "pt-4"], [1, "d-flex", "flex-column", "flex-shrink-0", "pt-0", 2, "height", "100vh"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-8", "col-md-8", "col-sm-8", "text-center", "pt-3", "mt-0", "converter-container-card"], [4, "ngIf"], ["class", "container text-center d-none d-lg-block", 4, "ngIf"], [1, "nav-item", 3, "ngClass"], ["tabindex", "0", 1, "left-side", 3, "click", "keydown.enter"], ["myDiv", ""], [1, "bi", 3, "ngClass", "click"], [1, "nav-link"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "container", "text-center", "d-none", "d-lg-block"], ["src", "https://via.placeholder.com/800x150", "alt", "Ad Placeholder"]],
  template: function OthersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](5, OthersComponent_li_5_Template, 7, 6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](7, OthersComponent_app_weight_7_Template, 1, 0, "app-weight", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](8, OthersComponent_app_time_8_Template, 1, 0, "app-time", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](9, OthersComponent_app_speed_9_Template, 1, 0, "app-speed", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](10, OthersComponent_app_area_10_Template, 1, 0, "app-area", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](11, OthersComponent_app_length_11_Template, 1, 0, "app-length", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](12, OthersComponent_app_temperature_12_Template, 1, 0, "app-temperature", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](13, OthersComponent_app_volume_13_Template, 1, 0, "app-volume", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](14, OthersComponent_app_force_14_Template, 1, 0, "app-force", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](15, OthersComponent_app_pressure_15_Template, 1, 0, "app-pressure", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](16, OthersComponent_app_work_16_Template, 1, 0, "app-work", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](17, OthersComponent_app_current_17_Template, 1, 0, "app-current", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](18, OthersComponent_app_planeangle_18_Template, 1, 0, "app-planeangle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](19, OthersComponent_app_power_19_Template, 1, 0, "app-power", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](20, OthersComponent_app_frequency_20_Template, 1, 0, "app-frequency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](21, OthersComponent_app_cooking_21_Template, 1, 0, "app-cooking", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](22, OthersComponent_app_fuel_22_Template, 1, 0, "app-fuel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](23, OthersComponent_app_storage_23_Template, 1, 0, "app-storage", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵtemplate"](24, OthersComponent_div_24_Template, 2, 0, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngForOf", ctx.otherConvertersViewModel.filteredOtherConverters);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isWeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isSpeed);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isTemperature);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isVolume);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isForce);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPressure);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isWork);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isCurrent);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPlaneAngle);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPower);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isFrequency);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.otherConvertersViewModel.isCooking);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.otherConvertersViewModel.isFuel);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.otherConvertersViewModel.isStorage);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_27__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.ads);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_28__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_28__.NgIf, _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_10__.FrequencyComponent, _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_11__.WeightComponent, _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__.TimeComponent, _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_13__.AreaComponent, _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_14__.SpeedComponent, _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_15__.LengthComponent, _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_16__.VolumeComponent, _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_17__.TemperatureComponent, _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_18__.ForceComponent, _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_19__.PressureComponent, _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_20__.WorkComponent, _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_21__.PlaneAngleComponent, _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_22__.PowerComponent, _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_23__.CurrentComponent, _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_24__.CookingComponent, _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_25__.FuelComponent, _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_26__.StorageComponent],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  padding-left: 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2VuZC11c2VyL290aGVycy9vdGhlcnMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBeUhBO0VBQ0UsZUFBQTtBQXhIRjs7QUEySEE7RUFDRSxzQkFBQTtBQXhIRjs7QUEySEE7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0EsZUFBQTtFQUNBLGtCQUFBO0FBeEhGOztBQTJIQTtFQUNFO0lBQ0UsZUFBQTtFQXhIRjtBQUNGIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLy8gLmljb24tdGV4dC1jb250YWluZXIge1xyXG4vLyAvLyAgIGN1cnNvcjogcG9pbnRlcjtcclxuLy8gLy8gICAuaW1nLWZsdWlkIHtcclxuLy8gLy8gICAgIHdpZHRoOiA3MCU7XHJcbi8vIC8vICAgfVxyXG4vLyAvLyAgIC5jb252ZXJ0ZXItdGV4dCB7XHJcbi8vIC8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vIC8vICAgfVxyXG4vLyAvLyB9XHJcbi8vIC8vIC5jb252ZXJ0ZXItY29udGFpbmVyLWNhcmQge1xyXG4vLyAvLyAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gLy8gICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gLy8gICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gLy8gICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAvLyB9XHJcbi8vIC8vIC5jYXJkLWxlZnQge1xyXG4vLyAvLyAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vIC8vIH1cclxuXHJcbi8vIC8vIC5jb2wtbGctNCB7XHJcbi8vIC8vICAgZGlzcGxheTogZmxleDtcclxuLy8gLy8gICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4vLyAvLyAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAvLyAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vIC8vICAgLmNhcmQge1xyXG4vLyAvLyAgICAgd2lkdGg6IDMwMHB4O1xyXG4vLyAvLyAgICAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcclxuLy8gLy8gICAgIG1hcmdpbjogMjBweCAycHg7XHJcbi8vIC8vICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoNzksIDEyNywgMTQ5KTtcclxuLy8gLy8gICB9XHJcbi8vIC8vIH1cclxuXHJcbi8vIC8vIC5iaS1oZWFydCB7XHJcbi8vIC8vICAgY3Vyc29yOiBjZWxsO1xyXG4vLyAvLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gLy8gICB0b3A6IDA7XHJcbi8vIC8vICAgcmlnaHQ6IDEwcHg7XHJcbi8vIC8vICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vIC8vICAgY29sb3I6IHJnYigyNywgODgsIDExMikgIWltcG9ydGFudDtcclxuLy8gLy8gfVxyXG5cclxuLy8gLy8gLmJpLWhlYXJ0LWZpbGwge1xyXG4vLyAvLyAgIGN1cnNvcjogY2VsbDtcclxuLy8gLy8gICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbi8vIC8vICAgdG9wOiAwO1xyXG4vLyAvLyAgIHJpZ2h0OiAxMHB4O1xyXG4vLyAvLyAgIGZvbnQtc2l6ZTogMS41cmVtO1xyXG4vLyAvLyAgIGNvbG9yOiByZ2IoMjQxLCAyNDEsIDI0MSkgIWltcG9ydGFudDtcclxuLy8gLy8gfVxyXG5cclxuLy8gLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTMwcHgpIHtcclxuLy8gLy8gICAuY29udmVydGVyLXRleHQge1xyXG4vLyAvLyAgICAgZm9udC1zaXplOiAxMnB4O1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gfVxyXG5cclxuLy8gLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA4OTBweCkge1xyXG4vLyAvLyAgIC5jb252ZXJ0ZXItY29udGFpbmVyLWNhcmQge1xyXG4vLyAvLyAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAvLyAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vIC8vICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gLy8gICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vIC8vICAgfVxyXG4vLyAvLyAgIC5jYXJkLWJvZHkge1xyXG4vLyAvLyAgICAgcGFkZGluZzogMjBweCAwcHggMHB4IDBweDtcclxuLy8gLy8gICAgIC5iaS1oZWFydC1maWxsLFxyXG4vLyAvLyAgICAgLmJpLWhlYXJ0IHtcclxuLy8gLy8gICAgICAgZm9udC1zaXplOiAxcmVtO1xyXG4vLyAvLyAgICAgfVxyXG4vLyAvLyAgIH1cclxuLy8gLy8gICAuY29sLWxnLTQge1xyXG4vLyAvLyAgICAgZGlzcGxheTogZmxleDtcclxuLy8gLy8gICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vIC8vICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuLy8gLy8gICAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbi8vIC8vICAgICAuY2FyZCB7XHJcbi8vIC8vICAgICAgIHdpZHRoOiAzMDBweDtcclxuLy8gLy8gICAgICAgbWFyZ2luOiAxMHB4IDJweDtcclxuLy8gLy8gICAgIH1cclxuLy8gLy8gICB9XHJcbi8vIC8vIH1cclxuXHJcbi8vIC8vIEBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuLy8gLy8gICAuaW1nLWZsdWlkIHtcclxuLy8gLy8gICAgIHdpZHRoOiA1MCUgIWltcG9ydGFudDtcclxuLy8gLy8gICB9XHJcbi8vIC8vICAgLmNvbnZlcnRlci10ZXh0IHtcclxuLy8gLy8gICAgIGZvbnQtc2l6ZTogMTJweCAhaW1wb3J0YW50O1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gICAuY29udmVydGVyLWNvbnRhaW5lci1jYXJkIHtcclxuLy8gLy8gICAgIHBhZGRpbmctcmlnaHQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gLy8gICAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAvLyAgICAgcGFkZGluZy1sZWZ0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vIC8vICAgICBtYXJnaW4tbGVmdDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAvLyAgIH1cclxuLy8gLy8gfVxyXG5cclxuLy8gLm5hdi1saW5rIHtcclxuLy8gICBmb250LXNpemU6IDIwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmltZy1mbHVpZCB7XHJcbi8vICAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxuLy8gfVxyXG5cclxuLy8gLmxlZnQtc2lkZSB7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIGRpc3BsYXk6IGZsZXg7XHJcbi8vICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuLy8gICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbi8vIH1cclxuLy8gLm5vLWZhdiB7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogNTAlO1xyXG4vLyAgIHJpZ2h0OiAwJTtcclxuLy8gICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbi8vIH1cclxuLy8gLnNlbGVjdC1vbmUge1xyXG4vLyAgIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxuLy8gfVxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQtc2lkZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcblxyXG5AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XHJcbiAgLm5hdi1saW5rIHtcclxuICAgIGZvbnQtc2l6ZTogMTVweDtcclxuICB9XHJcbn1cclxuIl0sInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 6207:
/*!******************************************************************!*\
  !*** ./src/app/components/main/end-user/others/others.module.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OthersModule: () => (/* binding */ OthersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _others_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./others-routing.module */ 5234);
/* harmony import */ var _others_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./others.component */ 953);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ 3609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class OthersModule {}
_class = OthersModule;
_class.ɵfac = function OthersModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _others_routing_module__WEBPACK_IMPORTED_MODULE_0__.OthersRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](OthersModule, {
    declarations: [_others_component__WEBPACK_IMPORTED_MODULE_1__.OthersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _others_routing_module__WEBPACK_IMPORTED_MODULE_0__.OthersRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_others_others_module_ts.js.map