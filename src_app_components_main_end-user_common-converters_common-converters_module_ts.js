"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_common-converters_common-converters_module_ts"],{

/***/ 3813:
/*!************************************************************************************************!*\
  !*** ./src/app/components/main/end-user/common-converters/common-converters-routing.module.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonConvertersRoutingModule: () => (/* binding */ CommonConvertersRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _common_converters_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-converters.component */ 3663);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: "",
  component: _common_converters_component__WEBPACK_IMPORTED_MODULE_0__.CommonConvertersComponent
}];
class CommonConvertersRoutingModule {}
_class = CommonConvertersRoutingModule;
_class.ɵfac = function CommonConvertersRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](CommonConvertersRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 3663:
/*!*******************************************************************************************!*\
  !*** ./src/app/components/main/end-user/common-converters/common-converters.component.ts ***!
  \*******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonConvertersComponent: () => (/* binding */ CommonConvertersComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/internal/common-models */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/app/services/converter.service */ 4063);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! @angular/common */ 6575);
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
function CommonConvertersComponent_li_5_Template(rf, ctx) {
  if (rf & 1) {
    const _r24 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "li", 9)(1, "div", 10, 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function CommonConvertersComponent_li_5_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r24);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r23.showCalculators(item_r21.title));
    })("keydown.enter", function CommonConvertersComponent_li_5_Template_div_keydown_enter_1_listener() {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r24);
      const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵreference"](2);
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](_r22.click());
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](3, "i", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵlistener"]("click", function CommonConvertersComponent_li_5_Template_i_click_3_listener($event) {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵrestoreView"](_r24);
      const item_r21 = restoredCtx.$implicit;
      const ctx_r26 = _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵresetView"](ctx_r26.toggleFavorites(item_r21, $event));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](4, "a", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](5, "img", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r21 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpureFunction1"](4, _c0, item_r21.isSelected));
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngClass", item_r21.isFavorite ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵpropertyInterpolate"]("src", item_r21.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtextInterpolate1"](" ", item_r21.title, " ");
  }
}
function CommonConvertersComponent_app_weight_7_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-weight");
  }
}
function CommonConvertersComponent_app_time_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-time");
  }
}
function CommonConvertersComponent_app_speed_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-speed");
  }
}
function CommonConvertersComponent_app_area_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-area");
  }
}
function CommonConvertersComponent_app_length_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-length");
  }
}
function CommonConvertersComponent_app_temperature_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-temperature");
  }
}
function CommonConvertersComponent_app_volume_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-volume");
  }
}
function CommonConvertersComponent_app_force_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-force");
  }
}
function CommonConvertersComponent_app_pressure_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-pressure");
  }
}
function CommonConvertersComponent_app_work_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-work");
  }
}
function CommonConvertersComponent_app_current_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-current");
  }
}
function CommonConvertersComponent_app_planeangle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-planeangle");
  }
}
function CommonConvertersComponent_app_power_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-power");
  }
}
function CommonConvertersComponent_app_frequency_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-frequency");
  }
}
function CommonConvertersComponent_app_cooking_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-cooking");
  }
}
function CommonConvertersComponent_app_fuel_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-fuel");
  }
}
function CommonConvertersComponent_app_storage_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-storage");
  }
}
function CommonConvertersComponent_app_dob_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-dob");
  }
}
function CommonConvertersComponent_app_timezone_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](0, "app-timezone");
  }
}
function CommonConvertersComponent_div_26_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelement"](1, "img", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]();
  }
}
class CommonConvertersComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService, convertersService, topNavService) {
    super(commonService, logService);
    this.convertersService = convertersService;
    this.topNavService = topNavService;
    this.topNavViewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__.TopNavViewModel();
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.engineeringViewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_4__.engineeringConverterViewModel();
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_5__.othersViewModel();
    this.localStorageItems = [];
    this.allConverters = new src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_2__.AllConverters();
    this.viewModel.filteredCommonConverters = this.allConverters.commonConverters;
  }
  ngOnInit() {
    this.viewModel.isTime = true;
    this.topNavService.sharedDataSubject.subscribe(data => {
      this.topNavViewModel.receivedSearchValue = data;
      if (this.topNavViewModel.receivedSearchValue.trim() !== "") {
        const searchValue = this.topNavViewModel.receivedSearchValue.toLowerCase();
        this.viewModel.filteredCommonConverters = [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters].filter(item => {
          this.viewModel.isArea = false;
          this.viewModel.isSpeed = false;
          this.viewModel.isTemperature = false;
          this.viewModel.isWeight = false;
          this.viewModel.isLength = false;
          this.viewModel.isVolume = false;
          this.viewModel.isTime = false;
          this.viewModel.isFrequency = false;
          return item.searchArrayFromConverters.some(term => term.toLowerCase().includes(searchValue));
        });
      } else {
        this.viewModel.isWeight = false;
        this.viewModel.isArea = false;
        this.viewModel.isTime = true;
        this.viewModel.isSpeed = false;
        this.viewModel.isTemperature = false;
        this.viewModel.isLength = false;
        this.viewModel.isVolume = false;
        this.viewModel.isFrequency = false;
        this.engineeringViewModel.isPressure = false;
        this.engineeringViewModel.isPower = false;
        this.engineeringViewModel.isWork = false;
        this.engineeringViewModel.isForce = false;
        this.engineeringViewModel.isPlaneAngle = false;
        this.engineeringViewModel.isCurrent = false;
        this.othersViewModel.isDob = false;
        this.othersViewModel.isStorage = false;
        this.othersViewModel.isCooking = false;
        this.othersViewModel.isFuel = false;
        this.othersViewModel.isTimezone = false;
        this.viewModel.filteredCommonConverters = this.allConverters.commonConverters;
      }
    });
    // search ends
    this.localStorageItems = this.getAllItemsFromLocalStorage();
    //compareing the localstoarage items with commonconverter and if same then setting isFavorties to true for the same;
    for (const item of [...this.allConverters.commonConverters, ...this.allConverters.engineeringConverters, ...this.allConverters.otherConverters]) {
      item.isFavorite = this.localStorageItems.some(favoriteItem => favoriteItem.title === item.title);
    }
    // Find and mark the default selected item
    const defaultSelectedItemTitle = "Time"; // Replace with the actual title
    this.viewModel.defaultSelectedItem = this.viewModel.filteredCommonConverters.find(item => item.title === defaultSelectedItemTitle);
    if (this.viewModel.defaultSelectedItem) {
      this.viewModel.defaultSelectedItem.isSelected = true;
    }
  }
  // checking on where user clicked and rendering same component
  showCalculators(calculator) {
    // Reset all calculator flags to false
    this.viewModel.isWeight = false;
    this.viewModel.isSpeed = false;
    this.viewModel.isArea = false;
    this.viewModel.isTemperature = false;
    this.viewModel.isLength = false;
    this.viewModel.isVolume = false;
    this.viewModel.isTime = false;
    ///engginering
    this.engineeringViewModel.isPressure = false;
    this.engineeringViewModel.isWork = false;
    this.engineeringViewModel.isForce = false;
    this.engineeringViewModel.isCurrent = false;
    this.engineeringViewModel.isPower = false;
    this.engineeringViewModel.isPlaneAngle = false;
    this.viewModel.isFrequency = false;
    //////others
    this.othersViewModel.isCooking = false;
    this.othersViewModel.isFuel = false;
    this.othersViewModel.isStorage = false;
    this.othersViewModel.isDob = false;
    this.othersViewModel.isTimezone = false;
    // Set the selected calculator to true
    if (calculator === "Weight") {
      this.viewModel.isWeight = true;
    } else if (calculator === "Speed") {
      this.viewModel.isSpeed = true;
    } else if (calculator === "Time") {
      this.viewModel.isTime = true;
      this.viewModel.defaultSelectedItem.isSelected = true;
    } else if (calculator === "Area") {
      this.viewModel.isArea = true;
    } else if (calculator === "Length") {
      this.viewModel.isLength = true;
    } else if (calculator === "Temprature") {
      this.viewModel.isTemperature = true;
    } else if (calculator === "Volume") {
      this.viewModel.isVolume = true;
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
      this.viewModel.isFrequency = true;
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
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = false;
    }
    this.viewModel.selectedItem = this.viewModel.filteredCommonConverters.find(x => x.title === calculator);
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = true;
      this.viewModel.defaultSelectedItem.isSelected = false;
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
  // getting items from localstorage
  // getAllItemsFromLocalStorage() {
  //   const items = [];
  //   for (let i = 0; i < localStorage.length; i++) {
  //     const key = localStorage.key(i);
  //     if (key !== null) {
  //       const value = localStorage.getItem(key);
  //       if (value !== null) {
  //         items.push(JSON.parse(value));
  //       }
  //     }
  //   }
  //   return items.filter((x) => x.isFavorite === true);
  // }
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
_class = CommonConvertersComponent;
_class.ɵfac = function CommonConvertersComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_6__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_7__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_8__.ConverterService), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_9__.TopNavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-common-converters"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_30__.FormsModule]), _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵInheritDefinitionFeature"]],
  decls: 27,
  vars: 21,
  consts: [[1, "container-fluid", "pt-0", "ps-0", "ms-0"], [1, "row"], [1, "col-4", "col-md-4", "col-sm-4", "mt-0", "converter-list-side", "pt-4"], [1, "d-flex", "flex-column", "flex-shrink-0", "pt-0", 2, "height", "100vh"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-8", "col-md-8", "col-sm-8", "text-center", "pt-3", "mt-0", "converter-container-card"], [4, "ngIf"], ["class", "container text-center d-none d-lg-block", 4, "ngIf"], [1, "nav-item", 3, "ngClass"], ["tabindex", "0", 1, "left-side", 3, "click", "keydown.enter"], ["myDiv", ""], [1, "bi", 3, "ngClass", "click"], [1, "nav-link"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "container", "text-center", "d-none", "d-lg-block"], ["src", "https://via.placeholder.com/800x150", "alt", "Ad Placeholder"]],
  template: function CommonConvertersComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "ul", 4);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](5, CommonConvertersComponent_li_5_Template, 7, 6, "li", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementStart"](6, "div", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](7, CommonConvertersComponent_app_weight_7_Template, 1, 0, "app-weight", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](8, CommonConvertersComponent_app_time_8_Template, 1, 0, "app-time", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](9, CommonConvertersComponent_app_speed_9_Template, 1, 0, "app-speed", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](10, CommonConvertersComponent_app_area_10_Template, 1, 0, "app-area", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](11, CommonConvertersComponent_app_length_11_Template, 1, 0, "app-length", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](12, CommonConvertersComponent_app_temperature_12_Template, 1, 0, "app-temperature", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](13, CommonConvertersComponent_app_volume_13_Template, 1, 0, "app-volume", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](14, CommonConvertersComponent_app_force_14_Template, 1, 0, "app-force", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](15, CommonConvertersComponent_app_pressure_15_Template, 1, 0, "app-pressure", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](16, CommonConvertersComponent_app_work_16_Template, 1, 0, "app-work", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](17, CommonConvertersComponent_app_current_17_Template, 1, 0, "app-current", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](18, CommonConvertersComponent_app_planeangle_18_Template, 1, 0, "app-planeangle", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](19, CommonConvertersComponent_app_power_19_Template, 1, 0, "app-power", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](20, CommonConvertersComponent_app_frequency_20_Template, 1, 0, "app-frequency", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](21, CommonConvertersComponent_app_cooking_21_Template, 1, 0, "app-cooking", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](22, CommonConvertersComponent_app_fuel_22_Template, 1, 0, "app-fuel", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](23, CommonConvertersComponent_app_storage_23_Template, 1, 0, "app-storage", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](24, CommonConvertersComponent_app_dob_24_Template, 1, 0, "app-dob", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](25, CommonConvertersComponent_app_timezone_25_Template, 1, 0, "app-timezone", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵtemplate"](26, CommonConvertersComponent_div_26_Template, 2, 0, "div", 8);
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](5);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngForOf", ctx.viewModel.filteredCommonConverters);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isWeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isSpeed);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isTemperature);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isVolume);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isForce);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPressure);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isWork);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isCurrent);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPlaneAngle);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.engineeringViewModel.isPower);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.isFrequency);
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
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_29__["ɵɵproperty"]("ngIf", ctx.viewModel.ads);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_31__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_31__.NgIf, _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_10__.FrequencyComponent, _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_11__.WeightComponent, _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__.TimeComponent, _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_13__.AreaComponent, _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_14__.SpeedComponent, _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_15__.LengthComponent, _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_16__.VolumeComponent, _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_17__.TemperatureComponent, _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_18__.ForceComponent, _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_19__.PressureComponent, _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_20__.WorkComponent, _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_21__.PlaneAngleComponent, _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_22__.PowerComponent, _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_23__.CurrentComponent, _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_24__.CookingComponent, _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_25__.FuelComponent, _child_components_dob_dob_component__WEBPACK_IMPORTED_MODULE_26__.DobComponent, _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_27__.StorageComponent, _child_components_timezone_timezone_component__WEBPACK_IMPORTED_MODULE_28__.TimezoneComponent],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding: 10px 0;\n  padding-left: 10px;\n}\n\n@media only screen and (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2VuZC11c2VyL2NvbW1vbi1jb252ZXJ0ZXJzL2NvbW1vbi1jb252ZXJ0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsZUFBQTtBQUNGOztBQUVBO0VBQ0Usc0JBQUE7QUFDRjs7QUFFQTtFQUNFLGVBQUE7RUFDQSxhQUFBO0VBQ0EsbUJBQUE7RUFDQSxlQUFBO0VBQ0Esa0JBQUE7QUFDRjs7QUFPQTtFQUNFO0lBQ0UsZUFBQTtFQUpGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQtc2lkZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nOiAxMHB4IDA7XHJcbiAgcGFkZGluZy1sZWZ0OiAxMHB4O1xyXG59XHJcbi8vIC5zZWxlY3RlZC1pdGVtIHtcclxuLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTk1LCAxOTUsIDE5NSkgIWltcG9ydGFudDtcclxuXHJcbi8vICAgLy8gYm9yZGVyLWxlZnQ6IDVweCBzb2xpZCBibGFjaztcclxuLy8gfVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 7892:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/end-user/common-converters/common-converters.module.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CommonConvertersModule: () => (/* binding */ CommonConvertersModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _common_converters_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common-converters-routing.module */ 3813);
/* harmony import */ var _common_converters_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common-converters.component */ 3663);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/shared.module */ 3609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class CommonConvertersModule {}
_class = CommonConvertersModule;
_class.ɵfac = function CommonConvertersModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _common_converters_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonConvertersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](CommonConvertersModule, {
    declarations: [_common_converters_component__WEBPACK_IMPORTED_MODULE_1__.CommonConvertersComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _common_converters_routing_module__WEBPACK_IMPORTED_MODULE_0__.CommonConvertersRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, src_app_shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule]
  });
})();

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_common-converters_common-converters_module_ts.js.map