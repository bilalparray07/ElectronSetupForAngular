"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_engineering-converters_engineering-converters_module_ts"],{

/***/ 1078:
/*!**********************************************************************************************************!*\
  !*** ./src/app/components/main/end-user/engineering-converters/engineering-converters-routing.module.ts ***!
  \**********************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineeringConvertersRoutingModule: () => (/* binding */ EngineeringConvertersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _engineering_converters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineering-converters.component */ 9909);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _engineering_converters_component__WEBPACK_IMPORTED_MODULE_0__.EngineeringConvertersComponent
}];
class EngineeringConvertersRoutingModule {}
_class = EngineeringConvertersRoutingModule;
_class.ɵfac = function EngineeringConvertersRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](EngineeringConvertersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 9909:
/*!*****************************************************************************************************!*\
  !*** ./src/app/components/main/end-user/engineering-converters/engineering-converters.component.ts ***!
  \*****************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineeringConvertersComponent: () => (/* binding */ EngineeringConvertersComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/internal/common-models */ 3882);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/converter.service */ 4063);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/common */ 6575);
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
/* harmony import */ var _child_components_dob_dob_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ../child-components/dob/dob.component */ 3415);
/* harmony import */ var _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ../child-components/storage/storage.component */ 4082);
/* harmony import */ var _child_components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ../child-components/timezone/timezone.component */ 33);
var _class;































const _c0 = function (a0) {
  return {
    "selected-item": a0
  };
};
function EngineeringConvertersComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "li", 8)(1, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function EngineeringConvertersComponent_li_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r22);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r21.showCalculators(item_r20.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](2, "i", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function EngineeringConvertersComponent_li_5_Template_i_click_2_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r22);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r23.toggleFavorites(item_r20, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "a", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](4, "img", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction1"](4, _c0, item_r20.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", item_r20.isFavorite ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpropertyInterpolate"]("src", item_r20.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", item_r20.title, " ");
  }
}
function EngineeringConvertersComponent_app_weight_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-weight");
  }
}
function EngineeringConvertersComponent_app_speed_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-speed");
  }
}
function EngineeringConvertersComponent_app_area_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-area");
  }
}
function EngineeringConvertersComponent_app_length_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-length");
  }
}
function EngineeringConvertersComponent_app_time_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-time");
  }
}
function EngineeringConvertersComponent_app_temperature_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-temperature");
  }
}
function EngineeringConvertersComponent_app_volume_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-volume");
  }
}
function EngineeringConvertersComponent_app_force_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-force");
  }
}
function EngineeringConvertersComponent_app_pressure_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-pressure");
  }
}
function EngineeringConvertersComponent_app_work_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-work");
  }
}
function EngineeringConvertersComponent_app_current_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-current");
  }
}
function EngineeringConvertersComponent_app_planeangle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-planeangle");
  }
}
function EngineeringConvertersComponent_app_power_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-power");
  }
}
function EngineeringConvertersComponent_app_frequency_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-frequency");
  }
}
function EngineeringConvertersComponent_app_cooking_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-cooking");
  }
}
function EngineeringConvertersComponent_app_fuel_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-fuel");
  }
}
function EngineeringConvertersComponent_app_storage_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-storage");
  }
}
function EngineeringConvertersComponent_app_dob_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-dob");
  }
}
function EngineeringConvertersComponent_app_timezone_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-timezone");
  }
}
class EngineeringConvertersComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService, convertersService, topNavService) {
    super(commonService, logService);
    this.convertersService = convertersService;
    this.topNavService = topNavService;
    this.allConverters = new src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__.AllConverters();
    this.engineeringConverterViewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.commonConverterViewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__.commonConverterViewModel();
    this.topNavViewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__.TopNavViewModel();
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__.othersViewModel();
    this.engineeringConverterViewModel.filteredEngineeringConverters = this.allConverters.engineeringConverters;
  }
  ngOnInit() {
    this.engineeringConverterViewModel.isPower = true;
    this.topNavService.sharedDataSubject.subscribe(data => {
      this.topNavViewModel.receivedSearchValue = data;
      if (this.topNavViewModel.receivedSearchValue.trim() != "") {
        this.engineeringConverterViewModel.filteredEngineeringConverters = [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters].filter(item => {
          this.engineeringConverterViewModel.isForce = false;
          this.engineeringConverterViewModel.isWork = false;
          this.engineeringConverterViewModel.isPower = false;
          this.engineeringConverterViewModel.isPlaneAngle = false;
          this.engineeringConverterViewModel.isPressure = false;
          this.engineeringConverterViewModel.isCurrent = false;
          return item.searchArrayFromConverters.some(term => term.toLowerCase().includes(this.topNavViewModel.receivedSearchValue.toLowerCase()));
        });
      } else {
        this.engineeringConverterViewModel.filteredEngineeringConverters = this.allConverters.engineeringConverters;
        this.engineeringConverterViewModel.isForce = true;
        this.engineeringConverterViewModel.isWork = false;
        this.engineeringConverterViewModel.isPower = false;
        this.engineeringConverterViewModel.isPlaneAngle = false;
        this.engineeringConverterViewModel.isPressure = false;
        this.engineeringConverterViewModel.isCurrent = false;
        this.commonConverterViewModel.isWeight = false;
        this.commonConverterViewModel.isSpeed = false;
        this.commonConverterViewModel.isLength = false;
        this.commonConverterViewModel.isTemperature = false;
        this.commonConverterViewModel.isVolume = false;
        this.commonConverterViewModel.isArea = false;
        this.commonConverterViewModel.isTime = false;
        this.commonConverterViewModel.isFrequency = false;
        this.othersViewModel.isDob = false;
        this.othersViewModel.isStorage = false;
        this.othersViewModel.isCooking = false;
        this.othersViewModel.isFuel = false;
        this.othersViewModel.isTimezone = false;
      }
    });
    // search ends
    this.engineeringConverterViewModel.localStorageItems = this.getAllItemsFromLocalStorage();
    for (const item of [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters]) {
      item.isFavorite = this.engineeringConverterViewModel.localStorageItems.some(favoriteItem => favoriteItem.title === item.title);
    }
    // Find and mark the default selected item
    const defaultSelectedItemTitle = "Power"; // Replace with the actual title
    this.engineeringConverterViewModel.defaultSelectedItem = this.engineeringConverterViewModel.filteredEngineeringConverters.find(item => item.title === defaultSelectedItemTitle);
    if (this.engineeringConverterViewModel.defaultSelectedItem) {
      this.engineeringConverterViewModel.defaultSelectedItem.isSelected = true;
    }
  }
  showCalculators(calculator) {
    // Common converters
    const common = this.commonConverterViewModel;
    const engineering = this.engineeringConverterViewModel;
    const others = this.othersViewModel;
    // Reset all calculator flags to false
    common.isWeight = common.isSpeed = common.isArea = common.isTemperature = false;
    common.isLength = common.isVolume = common.isTime = common.isFrequency = false;
    engineering.isPressure = engineering.isWork = engineering.isForce = false;
    engineering.isCurrent = engineering.isPower = engineering.isPlaneAngle = false;
    others.isCooking = others.isStorage = others.isFuel = others.isDob = others.isTimezone = false;
    // Set the selected calculator to true
    if (calculator === "Weight") {
      common.isWeight = true;
    } else if (calculator === "Speed") {
      common.isSpeed = true;
    } else if (calculator === "Time") {
      common.isTime = true;
    } else if (calculator === "Area") {
      common.isArea = true;
    } else if (calculator === "Length") {
      common.isLength = true;
    } else if (calculator === "Temprature") {
      common.isTemperature = true;
    } else if (calculator === "Volume") {
      common.isVolume = true;
    } else if (calculator === "Force") {
      engineering.isForce = true;
    } else if (calculator === "Pressure") {
      engineering.isPressure = true;
    } else if (calculator === "Work/Energy") {
      engineering.isWork = true;
    } else if (calculator === "Power") {
      engineering.isPower = true;
    } else if (calculator === "Current") {
      engineering.isCurrent = true;
    } else if (calculator === "Plane Angle") {
      engineering.isPlaneAngle = true;
    } else if (calculator === "Frequency") {
      common.isFrequency = true;
    } else if (calculator === "Cooking") {
      this.othersViewModel.isCooking = true;
    } else if (calculator === "Computer Data") {
      this.othersViewModel.isStorage = true;
    } else if (calculator === "Fuel Efficiency") {
      this.othersViewModel.isFuel = true;
    } else if (calculator === "Age Calculator") {
      this.othersViewModel.isDob = true;
    } else if (calculator === "World Clock") {
      this.othersViewModel.isTimezone = true;
    }
    // Update selected item
    if (engineering.selectedItem) {
      engineering.selectedItem.isSelected = false;
    }
    engineering.selectedItem = engineering.filteredEngineeringConverters.find(x => x.title === calculator);
    if (engineering.selectedItem) {
      engineering.selectedItem.isSelected = true;
      engineering.defaultSelectedItem.isSelected = false;
    }
  }
  toggleFavorites(item, event) {
    event.stopPropagation();
    item.isFavorite = !item.isFavorite;
    if (item.isFavorite) {
      localStorage.setItem(`${item.title}`, `${JSON.stringify(item)}`);
    } else {
      localStorage.removeItem(item.title);
    }
  }
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
_class = EngineeringConvertersComponent;
_class.ɵfac = function EngineeringConvertersComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_7__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_8__.ConverterService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_9__.TopNavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-engineering-converters"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵInheritDefinitionFeature"]],
  decls: 26,
  vars: 20,
  consts: [[1, "container-fluid", "pt-0", "ps-0", "ms-0"], [1, "row"], [1, "col-4", "col-md-4", "col-sm-4", "converter-list-side", "pt-4"], [1, "d-flex", "flex-column", "flex-shrink-0", "pt-0", 2, "height", "100vh"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], ["class", "nav-item", "isSelected", "", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-8", "col-md-8", "col-sm-8", "text-center", "pt-3", "mt-0", "converter-container-card"], [4, "ngIf"], ["isSelected", "", 1, "nav-item", 3, "ngClass"], [1, "left-side", 3, "click"], [1, "bi", 3, "ngClass", "click"], [1, "nav-link"], ["alt", "", 1, "img-fluid", 3, "src"]],
  template: function EngineeringConvertersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](5, EngineeringConvertersComponent_li_5_Template, 6, 6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](7, EngineeringConvertersComponent_app_weight_7_Template, 1, 0, "app-weight", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](8, EngineeringConvertersComponent_app_speed_8_Template, 1, 0, "app-speed", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](9, EngineeringConvertersComponent_app_area_9_Template, 1, 0, "app-area", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](10, EngineeringConvertersComponent_app_length_10_Template, 1, 0, "app-length", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](11, EngineeringConvertersComponent_app_time_11_Template, 1, 0, "app-time", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](12, EngineeringConvertersComponent_app_temperature_12_Template, 1, 0, "app-temperature", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](13, EngineeringConvertersComponent_app_volume_13_Template, 1, 0, "app-volume", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](14, EngineeringConvertersComponent_app_force_14_Template, 1, 0, "app-force", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](15, EngineeringConvertersComponent_app_pressure_15_Template, 1, 0, "app-pressure", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](16, EngineeringConvertersComponent_app_work_16_Template, 1, 0, "app-work", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](17, EngineeringConvertersComponent_app_current_17_Template, 1, 0, "app-current", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](18, EngineeringConvertersComponent_app_planeangle_18_Template, 1, 0, "app-planeangle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](19, EngineeringConvertersComponent_app_power_19_Template, 1, 0, "app-power", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](20, EngineeringConvertersComponent_app_frequency_20_Template, 1, 0, "app-frequency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](21, EngineeringConvertersComponent_app_cooking_21_Template, 1, 0, "app-cooking", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](22, EngineeringConvertersComponent_app_fuel_22_Template, 1, 0, "app-fuel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](23, EngineeringConvertersComponent_app_storage_23_Template, 1, 0, "app-storage", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](24, EngineeringConvertersComponent_app_dob_24_Template, 1, 0, "app-dob", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](25, EngineeringConvertersComponent_app_timezone_25_Template, 1, 0, "app-timezone", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx.engineeringConverterViewModel.filteredEngineeringConverters);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isWeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isSpeed);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isTemperature);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isVolume);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringConverterViewModel.isForce);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringConverterViewModel.isPressure);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringConverterViewModel.isWork);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringConverterViewModel.isCurrent);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringConverterViewModel.isPlaneAngle);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringConverterViewModel.isPower);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.commonConverterViewModel.isFrequency);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isCooking);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isFuel);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isStorage);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isDob);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.othersViewModel.isTimezone);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_30__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_30__.NgIf, _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_10__.FrequencyComponent, _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_11__.WeightComponent, _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__.TimeComponent, _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_13__.AreaComponent, _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_14__.SpeedComponent, _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_15__.LengthComponent, _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_16__.VolumeComponent, _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_17__.TemperatureComponent, _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_18__.ForceComponent, _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_19__.PressureComponent, _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_20__.WorkComponent, _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_21__.PlaneAngleComponent, _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_22__.PowerComponent, _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_23__.CurrentComponent, _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_24__.CookingComponent, _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_25__.FuelComponent, _child_components_dob_dob_component__WEBPACK_IMPORTED_MODULE_26__.DobComponent, _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_27__.StorageComponent, _child_components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_28__.TimezoneComponent],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  padding-left: 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2VuZC11c2VyL2VuZ2luZWVyaW5nLWNvbnZlcnRlcnMvZW5naW5lZXJpbmctY29udmVydGVycy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpR0E7RUFDRSxlQUFBO0FBaEdGOztBQW1HQTtFQUNFLHNCQUFBO0FBaEdGOztBQW1HQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFoR0Y7O0FBa0dBO0VBQ0U7SUFDRSxlQUFBO0VBL0ZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaWNvbi10ZXh0LWNvbnRhaW5lciB7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIC5pbWctZmx1aWQge1xyXG4vLyAgICAgd2lkdGg6IDcwJTtcclxuLy8gICB9XHJcbi8vICAgLmNvbnZlcnRlci10ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmNvbnZlcnRlci1jb250YWluZXItY2FyZCB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vIH1cclxuLy8gLmNhcmQtbGVmdCB7XHJcbi8vICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbC1sZy00IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAuY2FyZCB7XHJcbi8vICAgICB3aWR0aDogMzAwcHg7XHJcbi8vICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IDJweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTI3LCAxNDkpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmJpLWhlYXJ0IHtcclxuLy8gICBjdXJzb3I6IGNlbGw7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICByaWdodDogMTBweDtcclxuLy8gICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICBjb2xvcjogcmdiKDI3LCA4OCwgMTEyKSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYmktaGVhcnQtZmlsbCB7XHJcbi8vICAgY3Vyc29yOiBjZWxsO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgcmlnaHQ6IDEwcHg7XHJcbi8vICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vICAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xyXG4vLyAgIC5jb252ZXJ0ZXItdGV4dCB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5MHB4KSB7XHJcbi8vICAgLmNvbnZlcnRlci1jb250YWluZXItY2FyZCB7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gICB9XHJcbi8vICAgLmNhcmQtYm9keSB7XHJcbi8vICAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMHB4O1xyXG4vLyAgICAgLmJpLWhlYXJ0LWZpbGwsXHJcbi8vICAgICAuYmktaGVhcnQge1xyXG4vLyAgICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5jb2wtbGctNCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAgIC5jYXJkIHtcclxuLy8gICAgICAgd2lkdGg6IDMwMHB4O1xyXG4vLyAgICAgICBtYXJnaW46IDEwcHggMnB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgIC5pbWctZmx1aWQge1xyXG4vLyAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICAuY29udmVydGVyLXRleHQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyAgIC5jb252ZXJ0ZXItY29udGFpbmVyLWNhcmQge1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQtc2lkZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbkBtZWRpYSBvbmx5IHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcclxuICAubmF2LWxpbmsge1xyXG4gICAgZm9udC1zaXplOiAxNXB4O1xyXG4gIH1cclxufVxyXG4iXSwic291cmNlUm9vdCI6IiJ9 */"]
});

/***/ }),

/***/ 9440:
/*!**************************************************************************************************!*\
  !*** ./src/app/components/main/end-user/engineering-converters/engineering-converters.module.ts ***!
  \**************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   EngineeringConvertersModule: () => (/* binding */ EngineeringConvertersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _engineering_converters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./engineering-converters-routing.module */ 1078);
/* harmony import */ var _engineering_converters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./engineering-converters.component */ 9909);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ 3609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;





class EngineeringConvertersModule {}
_class = EngineeringConvertersModule;
_class.ɵfac = function EngineeringConvertersModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _engineering_converters_routing_module__WEBPACK_IMPORTED_MODULE_0__.EngineeringConvertersRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](EngineeringConvertersModule, {
    declarations: [_engineering_converters_component__WEBPACK_IMPORTED_MODULE_1__.EngineeringConvertersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _engineering_converters_routing_module__WEBPACK_IMPORTED_MODULE_0__.EngineeringConvertersRoutingModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_engineering-converters_engineering-converters_module_ts.js.map