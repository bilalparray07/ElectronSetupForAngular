"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["src_app_components_main_end-user_favorites_favorites_module_ts"],{

/***/ 5885:
/*!********************************************************************************!*\
  !*** ./src/app/components/main/end-user/favorites/favorites-routing.module.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesRoutingModule: () => (/* binding */ FavoritesRoutingModule)
/* harmony export */ });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ 7947);
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites.component */ 4893);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




const routes = [{
  path: '',
  component: _favorites_component__WEBPACK_IMPORTED_MODULE_0__.FavoritesComponent
}];
class FavoritesRoutingModule {}
_class = FavoritesRoutingModule;
_class.ɵfac = function FavoritesRoutingModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjector"]({
  imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule.forChild(routes), _angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵsetNgModuleScope"](FavoritesRoutingModule, {
    imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule],
    exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__.RouterModule]
  });
})();

/***/ }),

/***/ 4893:
/*!***************************************************************************!*\
  !*** ./src/app/components/main/end-user/favorites/favorites.component.ts ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesComponent: () => (/* binding */ FavoritesComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/internal/common-models */ 3882);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var src_app_models_view_favorites_viewmodel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/models/view/favorites.viewmodel */ 5663);
/* harmony import */ var src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/models/view/top-nav.viewmodel */ 6059);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/converter.service */ 4063);
/* harmony import */ var src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/top-nav.service */ 4324);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../child-components/frequency/frequency.component */ 7229);
/* harmony import */ var _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../child-components/weight/weight.component */ 8273);
/* harmony import */ var _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../child-components/time/time.component */ 1987);
/* harmony import */ var _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../child-components/area/area.component */ 7845);
/* harmony import */ var _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../child-components/speed/speed.component */ 8797);
/* harmony import */ var _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../child-components/length/length.component */ 1472);
/* harmony import */ var _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../child-components/volume/volume.component */ 2703);
/* harmony import */ var _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../child-components/temperature/temperature.component */ 9119);
/* harmony import */ var _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../child-components/force/force.component */ 7478);
/* harmony import */ var _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../child-components/pressure/pressure.component */ 5305);
/* harmony import */ var _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ../child-components/work/work.component */ 1301);
/* harmony import */ var _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../child-components/planeangle/planeangle.component */ 2512);
/* harmony import */ var _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../child-components/power/power.component */ 7108);
/* harmony import */ var _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../child-components/current/current.component */ 3519);
/* harmony import */ var _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ../child-components/cooking/cooking.component */ 4344);
/* harmony import */ var _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../child-components/fuel/fuel.component */ 5673);
/* harmony import */ var _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../child-components/storage/storage.component */ 4082);
var _class;




























function FavoritesComponent_p_2_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "p", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " No Favorites Set! ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
const _c0 = function (a0) {
  return {
    "selected-item": a0
  };
};
function FavoritesComponent_li_6_Template(rf, ctx) {
  if (rf & 1) {
    const _r22 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "li", 11)(1, "div", 12);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function FavoritesComponent_li_6_Template_div_click_1_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r22);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r21 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r21.showCalculators(item_r20.title));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](2, "i", 13);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵlistener"]("click", function FavoritesComponent_li_6_Template_i_click_2_listener() {
      const restoredCtx = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵrestoreView"](_r22);
      const item_r20 = restoredCtx.$implicit;
      const ctx_r23 = _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵnextContext"]();
      return _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵresetView"](ctx_r23.toggleFavorites(item_r20));
    });
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "a", 14);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](4, "img", 15);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
  }
  if (rf & 2) {
    const item_r20 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpureFunction1"](4, _c0, item_r20.isSelect));
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngClass", item_r20.isFavorite ? "bi-heart-fill" : "bi-heart");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵpropertyInterpolate"]("src", item_r20.imgSrc, _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵsanitizeUrl"]);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtextInterpolate1"](" ", item_r20.title, " ");
  }
}
function FavoritesComponent_app_weight_8_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-weight");
  }
}
function FavoritesComponent_app_speed_9_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-speed");
  }
}
function FavoritesComponent_app_area_10_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-area");
  }
}
function FavoritesComponent_app_length_11_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-length");
  }
}
function FavoritesComponent_app_temperature_12_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-temperature");
  }
}
function FavoritesComponent_app_volume_13_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-volume");
  }
}
function FavoritesComponent_app_force_14_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-force");
  }
}
function FavoritesComponent_app_pressure_15_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-pressure");
  }
}
function FavoritesComponent_app_work_16_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-work");
  }
}
function FavoritesComponent_app_current_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-current");
  }
}
function FavoritesComponent_app_planeangle_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-planeangle");
  }
}
function FavoritesComponent_app_power_19_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-power");
  }
}
function FavoritesComponent_app_time_20_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-time");
  }
}
function FavoritesComponent_app_frequency_21_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-frequency");
  }
}
function FavoritesComponent_app_cooking_22_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-cooking");
  }
}
function FavoritesComponent_app_fuel_23_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-fuel");
  }
}
function FavoritesComponent_app_storage_24_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelement"](0, "app-storage");
  }
}
function FavoritesComponent_p_25_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "p", 16);
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtext"](1, " Select any One From Left ");
    _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]();
  }
}
class FavoritesComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService, convertersService, topNavService) {
    super(commonService, logService);
    this.convertersService = convertersService;
    this.topNavService = topNavService;
    this.viewModel = new src_app_models_view_favorites_viewmodel__WEBPACK_IMPORTED_MODULE_2__.favoritesViewModel();
    this.localStorageItems = [];
    this.topNavViewModel = new src_app_models_view_top_nav_viewmodel__WEBPACK_IMPORTED_MODULE_3__.TopNavViewModel();
    this.allConverters = new src_app_models_internal_common_models__WEBPACK_IMPORTED_MODULE_1__.AllConverters();
    this.viewModel.filteredCommonConverters = this.getAllItemsFromLocalStorage();
  }
  ngOnInit() {
    this.localStorageItems = this.getAllItemsFromLocalStorage();
    this.topNavService.sharedDataSubject.subscribe(data => {
      this.topNavViewModel.receivedSearchValue = data;
      if (this.topNavViewModel.receivedSearchValue.trim() != "") {
        this.viewModel.filteredCommonConverters = this.localStorageItems.filter(item => {
          this.viewModel.isArea = false;
          this.viewModel.isSpeed = false;
          this.viewModel.isTemperature = false;
          this.viewModel.isWeight = false;
          this.viewModel.isLength = false;
          this.viewModel.isVolume = false;
          this.viewModel.isForce = false;
          this.viewModel.isWork = false;
          this.viewModel.isPower = false;
          this.viewModel.isPlaneAngle = false;
          this.viewModel.isPressure = false;
          this.viewModel.isCurrent = false;
          this.viewModel.isTime = false;
          this.viewModel.isFrequency = false;
          return item.searchArrayFromConverters.some(term => term.toLowerCase().includes(this.topNavViewModel.receivedSearchValue.toLowerCase()));
        });
      } else {
        this.viewModel.isWeight = false;
        this.viewModel.isArea = false;
        this.viewModel.isSpeed = false;
        this.viewModel.isTemperature = false;
        this.viewModel.isLength = false;
        this.viewModel.isVolume = false;
        this.viewModel.isForce = false;
        this.viewModel.isWork = false;
        this.viewModel.isPower = true;
        this.viewModel.isPlaneAngle = false;
        this.viewModel.isPressure = false;
        this.viewModel.isCurrent = false;
        this.viewModel.isTime = false;
        this.viewModel.isFrequency = false;
        this.viewModel.filteredCommonConverters = this.localStorageItems;
      }
    });
    // search ends
  }

  showCalculators(calculator) {
    // Reset all calculator flags to false
    this.viewModel.isWeight = false;
    this.viewModel.isSpeed = false;
    this.viewModel.isArea = false;
    this.viewModel.isTemperature = false;
    this.viewModel.isLength = false;
    this.viewModel.isVolume = false;
    this.viewModel.isTime = false;
    this.viewModel.isFrequency = false;
    // Reset engineeringViewModel flags to false
    this.viewModel.isPressure = false;
    this.viewModel.isWork = false;
    this.viewModel.isForce = false;
    this.viewModel.isCurrent = false;
    this.viewModel.isPower = false;
    this.viewModel.isPlaneAngle = false;
    // Reset othersViewModel flags to false
    this.viewModel.isCooking = false;
    this.viewModel.isFuel = false;
    this.viewModel.isStorage = false;
    // Set the selected calculator to true
    if (calculator === "Weight") {
      this.viewModel.isWeight = true;
    } else if (calculator === "Speed") {
      this.viewModel.isSpeed = true;
    } else if (calculator === "Time") {
      this.viewModel.isTime = true;
    } else if (calculator === "Area") {
      this.viewModel.isArea = true;
    } else if (calculator === "Length") {
      this.viewModel.isLength = true;
    } else if (calculator === "Temprature") {
      this.viewModel.isTemperature = true;
    } else if (calculator === "Volume") {
      this.viewModel.isVolume = true;
    } else if (calculator === "Force") {
      this.viewModel.isForce = true;
    } else if (calculator === "Pressure") {
      this.viewModel.isPressure = true;
    } else if (calculator === "Work/Energy") {
      this.viewModel.isWork = true;
    } else if (calculator === "Power") {
      this.viewModel.isPower = true;
    } else if (calculator === "Current") {
      this.viewModel.isCurrent = true;
    } else if (calculator === "Plane Angle") {
      this.viewModel.isPlaneAngle = true;
    } else if (calculator === "Frequency") {
      this.viewModel.isFrequency = true;
    } else if (calculator === "Cooking") {
      this.viewModel.isCooking = true;
    } else if (calculator === "Computer Data") {
      this.viewModel.isStorage = true;
    } else if (calculator === "Fuel Efficiency") {
      this.viewModel.isFuel = true;
    }
    // Update selected item
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = false;
    }
    this.viewModel.selectedItem = this.viewModel.filteredCommonConverters.find(x => x.title === calculator);
    if (this.viewModel.selectedItem) {
      this.viewModel.selectedItem.isSelected = true;
    }
  }
  toggleFavorites(item) {
    localStorage.removeItem(`${item.title}`);
    this.viewModel.filteredCommonConverters = this.getAllItemsFromLocalStorage();
    if (this.viewModel.filteredCommonConverters.length <= 0) {
      this.viewModel.isForce = false;
      this.viewModel.isPressure = false;
      this.viewModel.isWork = false;
      this.viewModel.isCurrent = false;
      this.viewModel.isPower = false;
      this.viewModel.isPlaneAngle = false;
      this.viewModel.isVolume = false;
      this.viewModel.isTemperature = false;
      this.viewModel.isLength = false;
      this.viewModel.isArea = false;
      this.viewModel.isSpeed = false;
      this.viewModel.isWeight = false;
      this.viewModel.isTime = false;
      this.viewModel.isFrequency = false;
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
_class = FavoritesComponent;
_class.ɵfac = function FavoritesComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_4__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_5__.LogHandlerService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_converter_service__WEBPACK_IMPORTED_MODULE_6__.ConverterService), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdirectiveInject"](src_app_services_top_nav_service__WEBPACK_IMPORTED_MODULE_7__.TopNavService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-common-converters"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵProvidersFeature"]([_angular_forms__WEBPACK_IMPORTED_MODULE_26__.FormsModule]), _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵInheritDefinitionFeature"]],
  decls: 26,
  vars: 20,
  consts: [[1, "container-fluid", "pt-0", "ps-0", "ms-0"], [1, "row"], ["class", "text-center no-fav", 4, "ngIf"], [1, "col-4", "col-md-4", "col-sm-4", "converter-list-side", "pt-4"], [1, "d-flex", "flex-column", "flex-shrink-0", "pt-0", 2, "height", "100vh"], [1, "nav", "nav-pills", "flex-column", "mb-auto"], ["class", "nav-item", 3, "ngClass", 4, "ngFor", "ngForOf"], [1, "col-8", "col-md-8", "col-sm-8", "text-center", "pt-3", "mt-0", "converter-container-card"], [4, "ngIf"], ["class", "pt-5 mt-5 select-one", 4, "ngIf"], [1, "text-center", "no-fav"], [1, "nav-item", 3, "ngClass"], [1, "left-side", 3, "click"], [1, "bi", 3, "ngClass", "click"], [1, "nav-link"], ["alt", "", 1, "img-fluid", 3, "src"], [1, "pt-5", "mt-5", "select-one"]],
  template: function FavoritesComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](0, "div", 0)(1, "div", 1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](2, FavoritesComponent_p_2_Template, 2, 0, "p", 2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](3, "div", 3)(4, "div", 4)(5, "ul", 5);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](6, FavoritesComponent_li_6_Template, 6, 6, "li", 6);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementStart"](7, "div", 7);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](8, FavoritesComponent_app_weight_8_Template, 1, 0, "app-weight", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](9, FavoritesComponent_app_speed_9_Template, 1, 0, "app-speed", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](10, FavoritesComponent_app_area_10_Template, 1, 0, "app-area", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](11, FavoritesComponent_app_length_11_Template, 1, 0, "app-length", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](12, FavoritesComponent_app_temperature_12_Template, 1, 0, "app-temperature", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](13, FavoritesComponent_app_volume_13_Template, 1, 0, "app-volume", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](14, FavoritesComponent_app_force_14_Template, 1, 0, "app-force", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](15, FavoritesComponent_app_pressure_15_Template, 1, 0, "app-pressure", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](16, FavoritesComponent_app_work_16_Template, 1, 0, "app-work", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](17, FavoritesComponent_app_current_17_Template, 1, 0, "app-current", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](18, FavoritesComponent_app_planeangle_18_Template, 1, 0, "app-planeangle", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](19, FavoritesComponent_app_power_19_Template, 1, 0, "app-power", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](20, FavoritesComponent_app_time_20_Template, 1, 0, "app-time", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](21, FavoritesComponent_app_frequency_21_Template, 1, 0, "app-frequency", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](22, FavoritesComponent_app_cooking_22_Template, 1, 0, "app-cooking", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](23, FavoritesComponent_app_fuel_23_Template, 1, 0, "app-fuel", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](24, FavoritesComponent_app_storage_24_Template, 1, 0, "app-storage", 8);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵtemplate"](25, FavoritesComponent_p_25_Template, 2, 0, "p", 9);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵelementEnd"]()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.filteredCommonConverters.length <= 0);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngForOf", ctx.viewModel.filteredCommonConverters);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](2);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isWeight);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isSpeed);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isArea);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isLength);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isTemperature);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isVolume);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isForce);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isPressure);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isWork);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isCurrent);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isPlaneAngle);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isPower);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isTime);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isFrequency);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isCooking);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isFuel);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", ctx.viewModel.isStorage);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_25__["ɵɵproperty"]("ngIf", !ctx.viewModel.isArea && !ctx.viewModel.isWeight && !ctx.viewModel.isSpeed && !ctx.viewModel.isLength && !ctx.viewModel.isTemperature && !ctx.viewModel.isVolume && !ctx.viewModel.isForce && !ctx.viewModel.isPower && !ctx.viewModel.isWork && !ctx.viewModel.isCurrent && !ctx.viewModel.isPlaneAngle && !ctx.viewModel.isPower && !ctx.viewModel.isTime && !ctx.viewModel.isPressure && !ctx.viewModel.isFrequency && !ctx.viewModel.isStorage && !ctx.viewModel.isFuel && !ctx.viewModel.isCooking && ctx.viewModel.filteredCommonConverters.length >= 1);
    }
  },
  dependencies: [_angular_common__WEBPACK_IMPORTED_MODULE_27__.NgClass, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgForOf, _angular_common__WEBPACK_IMPORTED_MODULE_27__.NgIf, _child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_8__.FrequencyComponent, _child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_9__.WeightComponent, _child_components_time_time_component__WEBPACK_IMPORTED_MODULE_10__.TimeComponent, _child_components_area_area_component__WEBPACK_IMPORTED_MODULE_11__.AreaComponent, _child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_12__.SpeedComponent, _child_components_length_length_component__WEBPACK_IMPORTED_MODULE_13__.LengthComponent, _child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_14__.VolumeComponent, _child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_15__.TemperatureComponent, _child_components_force_force_component__WEBPACK_IMPORTED_MODULE_16__.ForceComponent, _child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_17__.PressureComponent, _child_components_work_work_component__WEBPACK_IMPORTED_MODULE_18__.WorkComponent, _child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_19__.PlaneAngleComponent, _child_components_power_power_component__WEBPACK_IMPORTED_MODULE_20__.PowerComponent, _child_components_current_current_component__WEBPACK_IMPORTED_MODULE_21__.CurrentComponent, _child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_22__.CookingComponent, _child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_23__.FuelComponent, _child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_24__.StorageComponent],
  styles: [".nav-link[_ngcontent-%COMP%] {\n  font-size: 20px;\n}\n\n.img-fluid[_ngcontent-%COMP%] {\n  width: 20px !important;\n}\n\n.left-side[_ngcontent-%COMP%] {\n  cursor: pointer;\n  display: flex;\n  align-items: center;\n  padding-bottom: 10px;\n  padding-left: 10px;\n}\n\n.no-fav[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 50%;\n  right: 0%;\n  color: var(--text-color);\n}\n\n.select-one[_ngcontent-%COMP%] {\n  color: var(--text-color);\n}\n\n@media only screen and (max-width: 768px) {\n  .nav-link[_ngcontent-%COMP%] {\n    font-size: 15px;\n  }\n}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8uL3NyYy9hcHAvY29tcG9uZW50cy9tYWluL2VuZC11c2VyL2Zhdm9yaXRlcy9mYXZvcml0ZXMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUdBO0VBQ0UsZUFBQTtBQWhHRjs7QUFtR0E7RUFDRSxzQkFBQTtBQWhHRjs7QUFtR0E7RUFDRSxlQUFBO0VBQ0EsYUFBQTtFQUNBLG1CQUFBO0VBQ0Esb0JBQUE7RUFDQSxrQkFBQTtBQWhHRjs7QUFrR0E7RUFDRSxrQkFBQTtFQUNBLFFBQUE7RUFDQSxTQUFBO0VBQ0Esd0JBQUE7QUEvRkY7O0FBaUdBO0VBQ0Usd0JBQUE7QUE5RkY7O0FBaUdBO0VBQ0U7SUFDRSxlQUFBO0VBOUZGO0FBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuaWNvbi10ZXh0LWNvbnRhaW5lciB7XHJcbi8vICAgY3Vyc29yOiBwb2ludGVyO1xyXG4vLyAgIC5pbWctZmx1aWQge1xyXG4vLyAgICAgd2lkdGg6IDcwJTtcclxuLy8gICB9XHJcbi8vICAgLmNvbnZlcnRlci10ZXh0IHtcclxuLy8gICAgIGZvbnQtc2l6ZTogMTJweDtcclxuLy8gICB9XHJcbi8vIH1cclxuLy8gLmNvbnZlcnRlci1jb250YWluZXItY2FyZCB7XHJcbi8vICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgIG1hcmdpbi1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vIH1cclxuLy8gLmNhcmQtbGVmdCB7XHJcbi8vICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gfVxyXG5cclxuLy8gLmNvbC1sZy00IHtcclxuLy8gICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbi8vICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbi8vICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAuY2FyZCB7XHJcbi8vICAgICB3aWR0aDogMzAwcHg7XHJcbi8vICAgICBjb2xvcjogcmdiKDI1NSwgMjU1LCAyNTUpO1xyXG4vLyAgICAgbWFyZ2luOiAyMHB4IDJweDtcclxuLy8gICAgIGJhY2tncm91bmQtY29sb3I6IHJnYig3OSwgMTI3LCAxNDkpO1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gLmJpLWhlYXJ0IHtcclxuLy8gICBjdXJzb3I6IGNlbGw7XHJcbi8vICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4vLyAgIHRvcDogMDtcclxuLy8gICByaWdodDogMTBweDtcclxuLy8gICBmb250LXNpemU6IDEuNXJlbTtcclxuLy8gICBjb2xvcjogcmdiKDI3LCA4OCwgMTEyKSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyAuYmktaGVhcnQtZmlsbCB7XHJcbi8vICAgY3Vyc29yOiBjZWxsO1xyXG4vLyAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuLy8gICB0b3A6IDA7XHJcbi8vICAgcmlnaHQ6IDEwcHg7XHJcbi8vICAgZm9udC1zaXplOiAxLjVyZW07XHJcbi8vICAgY29sb3I6IHJnYigyNDEsIDI0MSwgMjQxKSAhaW1wb3J0YW50O1xyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExMzBweCkge1xyXG4vLyAgIC5jb252ZXJ0ZXItdGV4dCB7XHJcbi8vICAgICBmb250LXNpemU6IDEycHg7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4vLyBAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDg5MHB4KSB7XHJcbi8vICAgLmNvbnZlcnRlci1jb250YWluZXItY2FyZCB7XHJcbi8vICAgICBwYWRkaW5nLXJpZ2h0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gICAgIHBhZGRpbmctbGVmdDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gICB9XHJcbi8vICAgLmNhcmQtYm9keSB7XHJcbi8vICAgICBwYWRkaW5nOiAyMHB4IDBweCAwcHggMHB4O1xyXG4vLyAgICAgLmJpLWhlYXJ0LWZpbGwsXHJcbi8vICAgICAuYmktaGVhcnQge1xyXG4vLyAgICAgICBmb250LXNpemU6IDFyZW07XHJcbi8vICAgICB9XHJcbi8vICAgfVxyXG4vLyAgIC5jb2wtbGctNCB7XHJcbi8vICAgICBkaXNwbGF5OiBmbGV4O1xyXG4vLyAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuLy8gICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4vLyAgICAgYmFja2dyb3VuZDogbm9uZTtcclxuLy8gICAgIC5jYXJkIHtcclxuLy8gICAgICAgd2lkdGg6IDMwMHB4O1xyXG4vLyAgICAgICBtYXJnaW46IDEwcHggMnB4O1xyXG4vLyAgICAgfVxyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4vLyAgIC5pbWctZmx1aWQge1xyXG4vLyAgICAgd2lkdGg6IDUwJSAhaW1wb3J0YW50O1xyXG4vLyAgIH1cclxuLy8gICAuY29udmVydGVyLXRleHQge1xyXG4vLyAgICAgZm9udC1zaXplOiAxMnB4ICFpbXBvcnRhbnQ7XHJcbi8vICAgfVxyXG4vLyAgIC5jb252ZXJ0ZXItY29udGFpbmVyLWNhcmQge1xyXG4vLyAgICAgcGFkZGluZy1yaWdodDogMHB4ICFpbXBvcnRhbnQgO1xyXG4vLyAgICAgbWFyZ2luLXJpZ2h0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vICAgICBwYWRkaW5nLWxlZnQ6IDBweCAhaW1wb3J0YW50IDtcclxuLy8gICAgIG1hcmdpbi1sZWZ0OiAwcHggIWltcG9ydGFudCA7XHJcbi8vICAgfVxyXG4vLyB9XHJcblxyXG4ubmF2LWxpbmsge1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxufVxyXG5cclxuLmltZy1mbHVpZCB7XHJcbiAgd2lkdGg6IDIwcHggIWltcG9ydGFudDtcclxufVxyXG5cclxuLmxlZnQtc2lkZSB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICBwYWRkaW5nLWJvdHRvbTogMTBweDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbn1cclxuLm5vLWZhdiB7XHJcbiAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gIHRvcDogNTAlO1xyXG4gIHJpZ2h0OiAwJTtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1jb2xvcik7XHJcbn1cclxuLnNlbGVjdC1vbmUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWNvbG9yKTtcclxufVxyXG5cclxuQG1lZGlhIG9ubHkgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xyXG4gIC5uYXYtbGluayB7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgfVxyXG59XHJcbiJdLCJzb3VyY2VSb290IjoiIn0= */"]
});

/***/ }),

/***/ 5999:
/*!************************************************************************!*\
  !*** ./src/app/components/main/end-user/favorites/favorites.module.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FavoritesModule: () => (/* binding */ FavoritesModule)
/* harmony export */ });
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./favorites-routing.module */ 5885);
/* harmony import */ var _favorites_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./favorites.component */ 4893);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _shared_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../shared.module */ 3609);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;






class FavoritesModule {}
_class = FavoritesModule;
_class.ɵfac = function FavoritesModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵdefineInjector"]({
  imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_3__["ɵɵsetNgModuleScope"](FavoritesModule, {
    declarations: [_favorites_component__WEBPACK_IMPORTED_MODULE_1__.FavoritesComponent],
    imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _shared_module__WEBPACK_IMPORTED_MODULE_2__.SharedModule, _favorites_routing_module__WEBPACK_IMPORTED_MODULE_0__.FavoritesRoutingModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule]
  });
})();

/***/ }),

/***/ 5663:
/*!****************************************************!*\
  !*** ./src/app/models/view/favorites.viewmodel.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   favoritesViewModel: () => (/* binding */ favoritesViewModel)
/* harmony export */ });
class favoritesViewModel {
  constructor() {
    this.PageTitle = "";
    this.title = "";
    this.sno = 0;
    this.receivedSearchValue = "";
    this.filteredCommonConverters = [];
    this.targetUnit = "";
  }
}

/***/ })

}]);
//# sourceMappingURL=src_app_components_main_end-user_favorites_favorites_module_ts.js.map