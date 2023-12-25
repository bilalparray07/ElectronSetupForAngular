"use strict";
(self["webpackChunksampleUI"] = self["webpackChunksampleUI"] || []).push([["default-src_app_models_internal_common-models_ts-src_app_services_converter_service_ts-src_ap-638cbb"],{

/***/ 7845:
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/area/area.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AreaComponent: () => (/* binding */ AreaComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function AreaComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class AreaComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.areaUnitNames = ["Square meters (m²)", "Square kilometers (km²)", "Square feet (ft²)", "Acres (ac)", "Hectares (ha)", "Square Mile", "Square Yard"];
    this.targetUnit = this.areaUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // function to convert weight
  convertArea() {
    if (this.viewModel.area != null && this.viewModel.area > 0) {
      if (this.targetUnit === "Square meters (m²)") {
        this.fromSquareMeter();
      } else if (this.targetUnit === "Square kilometers (km²)") {
        this.fromSquareKilometer();
      } else if (this.targetUnit === "Square feet (ft²)") {
        this.fromSquareFeet();
      } else if (this.targetUnit === "Acres (ac)") {
        this.fromAcre();
      } else if (this.targetUnit === "Hectares (ha)") {
        this.fromHectare();
      } else if (this.targetUnit === "Square Mile") {
        this.fromSquareMile();
      } else if (this.targetUnit === "Square Yard") {
        this.fromSquareYard();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromSquareMeter() {
    if (this.viewModel.area != null) {
      this.viewModel.acre = Number(this.viewModel.area / 4046.86);
      this.viewModel.hectare = Number(this.viewModel.area / 10000);
      this.viewModel.squareYard = Number(this.viewModel.area * 1.196);
      this.viewModel.squareFeet = Number(this.viewModel.area * 10.764);
      this.viewModel.squareMile = Number(this.viewModel.area / 2.59e6);
      this.viewModel.squareKM = Number(this.viewModel.area / 1e6);
      this.viewModel.squareMeter = this.viewModel.area;
    }
  }
  fromSquareKilometer() {
    if (this.viewModel.area != null) {
      this.viewModel.acre = Number(this.viewModel.area * 247.105);
      this.viewModel.hectare = Number(this.viewModel.area * 100);
      this.viewModel.squareYard = Number(this.viewModel.area * 1195990.05);
      this.viewModel.squareFeet = Number(this.viewModel.area * 10763910.4);
      this.viewModel.squareMile = Number(this.viewModel.area / 2.58999);
      this.viewModel.squareMeter = Number(this.viewModel.area * 1000000);
      this.viewModel.squareKM = this.viewModel.area;
    }
  }
  fromSquareFeet() {
    if (this.viewModel.area != null) {
      this.viewModel.acre = Number(this.viewModel.area / 43560);
      this.viewModel.hectare = Number(this.viewModel.area / 107639.1);
      this.viewModel.squareYard = Number(this.viewModel.area / 9);
      this.viewModel.squareMeter = Number(this.viewModel.area / 10.7639);
      this.viewModel.squareMile = Number(this.viewModel.area / 27878400);
      this.viewModel.squareKM = Number(this.viewModel.area / 10763910.4);
      this.viewModel.squareFeet = this.viewModel.area;
    }
  }
  fromAcre() {
    if (this.viewModel.area != null) {
      this.viewModel.squareFeet = Number(this.viewModel.area * 43560);
      this.viewModel.hectare = Number(this.viewModel.area * 0.404686);
      this.viewModel.squareYard = Number(this.viewModel.area * 4840);
      this.viewModel.squareMeter = Number(this.viewModel.area * 4046.86);
      this.viewModel.squareMile = Number(this.viewModel.area / 640);
      this.viewModel.squareKM = Number(this.viewModel.area / 247.105);
      this.viewModel.acre = this.viewModel.area;
    }
  }
  fromHectare() {
    if (this.viewModel.area != null) {
      this.viewModel.squareFeet = Number(this.viewModel.area * 107639.1);
      this.viewModel.acre = Number(this.viewModel.area * 2.47105);
      this.viewModel.squareYard = Number(this.viewModel.area * 11959.9);
      this.viewModel.squareMeter = Number(this.viewModel.area * 10000);
      this.viewModel.squareMile = Number(this.viewModel.area / 259.0);
      this.viewModel.squareKM = Number(this.viewModel.area / 100);
      this.viewModel.hectare = this.viewModel.area;
    }
  }
  fromSquareMile() {
    if (this.viewModel.area != null) {
      this.viewModel.squareFeet = Number(this.viewModel.area * 27878400);
      this.viewModel.acre = Number(this.viewModel.area * 640);
      this.viewModel.hectare = Number(this.viewModel.area * 258.999);
      this.viewModel.squareYard = Number(this.viewModel.area * 3097600);
      this.viewModel.squareMeter = Number(this.viewModel.area * 2589988.11);
      this.viewModel.squareKM = Number(this.viewModel.area * 2.58999);
      this.viewModel.squareMile = this.viewModel.area;
    }
  }
  fromSquareYard() {
    if (this.viewModel.area != null) {
      this.viewModel.squareFeet = Number(this.viewModel.area * 9);
      this.viewModel.acre = Number(this.viewModel.area / 4840);
      this.viewModel.hectare = Number(this.viewModel.area / 11959.9);
      this.viewModel.squareMile = Number(this.viewModel.area / 3097600);
      this.viewModel.squareMeter = Number(this.viewModel.area / 1.19599);
      this.viewModel.squareKM = Number(this.viewModel.area / 1195999);
      this.viewModel.squareYard = this.viewModel.area;
    }
  }
  resetValues() {
    this.viewModel.squareFeet = null;
    this.viewModel.squareKM = null;
    this.viewModel.squareMeter = null;
    this.viewModel.squareYard = null;
    this.viewModel.hectare = null;
    this.viewModel.acre = null;
    this.viewModel.squareMile = null;
    this.viewModel.area = null;
  }
}
_class = AreaComponent;
_class.ɵfac = function AreaComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-area"]],
  viewQuery: function AreaComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 70,
  vars: 10,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["maxlength", "10", "type", "number", "name", "inputName", "placeholder", "Enter Area", "id", "area", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-0"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function AreaComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Area Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AreaComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.area = $event;
      })("input", function AreaComponent_Template_input_input_13_listener() {
        return ctx.convertArea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function AreaComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function AreaComponent_Template_select_change_17_listener() {
        return ctx.convertArea();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, AreaComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Square Meter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Square Kilometer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Square Feet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Square Mile");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Square Yard");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Acre");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 17)(61, "li", 18)(62, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Hectare");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 6)(67, "div", 21)(68, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function AreaComponent_Template_button_click_68_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.area);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.areaUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.squareMeter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.squareKM);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.squareFeet);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.squareMile);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.squareYard);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.acre);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.hectare);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4344:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/cooking/cooking.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CookingComponent: () => (/* binding */ CookingComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function CookingComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class CookingComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logHandler) {
    super(commonService, logHandler);
    this.commonService = commonService;
    this.logHandler = logHandler;
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_1__.othersViewModel();
    this.cookingUnitNames = ["Teaspoon (tsp)", "Tablespoon (tbsp)", "Fluid Ounce (fl oz)", "Cup", "Pint (pt)", "Quart (qt)", "Gallon (gal)", "Pinch"];
    this.targetUnit = this.cookingUnitNames[0];
  }
  ngOnInit() {}
  convertCookingUnit() {
    if (this.othersViewModel.cooking != null && this.othersViewModel.cooking > 0) {
      if (this.targetUnit === "Teaspoon (tsp)") {
        this.fromTeaspoon();
      } else if (this.targetUnit === "Tablespoon (tbsp)") {
        this.fromTablespoon();
      } else if (this.targetUnit === "Fluid Ounce (fl oz)") {
        this.fromFluidOunce();
      } else if (this.targetUnit === "Cup") {
        this.fromCup();
      } else if (this.targetUnit === "Pint (pt)") {
        this.fromPint();
      } else if (this.targetUnit === "Quart (qt)") {
        this.fromQuart();
      } else if (this.targetUnit === "Gallon (gal)") {
        this.fromGallon();
      } else if (this.targetUnit === "Pinch") {
        this.fromPinch();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromTeaspoon() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking / 3);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking / 6);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking / 48);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking / 96);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking / 192);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 768);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 16);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 307);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking / 16);
      this.othersViewModel.teaspoon = this.othersViewModel.cooking;
    }
  }
  fromTablespoon() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 3);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking / 2);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking / 16);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking / 32);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking / 64);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 256);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 48);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 102);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking / 8);
      this.othersViewModel.tablespoon = this.othersViewModel.cooking;
    }
  }
  fromFluidOunce() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 6);
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking * 2);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking / 8);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking / 16);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking / 32);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 128);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 96);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 204);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking / 4);
      this.othersViewModel.fluidOunce = this.othersViewModel.cooking;
    }
  }
  fromCup() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 48);
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking * 16);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking * 8);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking / 2);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking / 4);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 16);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 768);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 614);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking * 2);
      this.othersViewModel.cup = this.othersViewModel.cooking;
    }
  }
  fromPint() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 96);
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking * 32);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking * 16);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking * 2);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking / 2);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 8);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 1536);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 1229);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking * 4);
      this.othersViewModel.pint = this.othersViewModel.cooking;
    }
  }
  fromQuart() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 192);
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking * 64);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking * 32);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking * 4);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking * 2);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 4);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 3072);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 2458);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking * 8);
      this.othersViewModel.quart = this.othersViewModel.cooking;
    }
  }
  fromGallon() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 768);
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking * 256);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking * 128);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking * 16);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking * 8);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking * 4);
      this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 12288);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 39321);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking * 32);
      this.othersViewModel.gallon = this.othersViewModel.cooking;
    }
  }
  fromPinch() {
    if (this.othersViewModel.cooking != null) {
      this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking / 16);
      this.othersViewModel.tablespoon = Number(this.othersViewModel.cooking / 48);
      this.othersViewModel.fluidOunce = Number(this.othersViewModel.cooking / 96);
      this.othersViewModel.cup = Number(this.othersViewModel.cooking / 768);
      this.othersViewModel.pint = Number(this.othersViewModel.cooking / 1536);
      this.othersViewModel.quart = Number(this.othersViewModel.cooking / 384);
      this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 12290);
      this.othersViewModel.drop = Number(this.othersViewModel.cooking * 6.5);
      this.othersViewModel.slice = Number(this.othersViewModel.cooking / 96);
      this.othersViewModel.pinch = this.othersViewModel.cooking;
    }
  }
  // fromDrop() {
  //   if (this.othersViewModel.cooking != null) {
  //     this.othersViewModel.teaspoon = Number(
  //       this.othersViewModel.cooking / 307
  //     );
  //     this.othersViewModel.tablespoon = Number(
  //       this.othersViewModel.cooking / 102
  //     );
  //     this.othersViewModel.fluidOunce = Number(
  //       this.othersViewModel.cooking / 204
  //     );
  //     this.othersViewModel.cup = Number(this.othersViewModel.cooking / 2458);
  //     this.othersViewModel.pint = Number(this.othersViewModel.cooking / 1229);
  //     this.othersViewModel.quart = Number(this.othersViewModel.cooking / 2458);
  //     this.othersViewModel.gallon = Number(
  //       this.othersViewModel.cooking / 39321
  //     );
  //     this.othersViewModel.pinch = Number(this.othersViewModel.cooking / 6.5);
  //     this.othersViewModel.slice = Number(this.othersViewModel.cooking / 153.6);
  //     this.othersViewModel.drop = this.othersViewModel.cooking;
  //   }
  // }
  // fromSlice() {
  //   if (this.othersViewModel.cooking != null) {
  //     this.othersViewModel.teaspoon = Number(this.othersViewModel.cooking * 16);
  //     this.othersViewModel.tablespoon = Number(
  //       this.othersViewModel.cooking * 8
  //     );
  //     this.othersViewModel.fluidOunce = Number(
  //       this.othersViewModel.cooking * 4
  //     );
  //     this.othersViewModel.cup = Number(this.othersViewModel.cooking / 2);
  //     this.othersViewModel.pint = Number(this.othersViewModel.cooking / 4);
  //     this.othersViewModel.quart = Number(this.othersViewModel.cooking / 8);
  //     this.othersViewModel.gallon = Number(this.othersViewModel.cooking / 32);
  //     this.othersViewModel.pinch = Number(this.othersViewModel.cooking * 96);
  //     this.othersViewModel.drop = Number(this.othersViewModel.cooking * 153.6);
  //     this.othersViewModel.slice = this.othersViewModel.cooking;
  //   }
  // }
  resetValues() {
    this.othersViewModel.cooking = null;
    this.othersViewModel.tablespoon = null;
    this.othersViewModel.fluidOunce = null;
    this.othersViewModel.cup = null;
    this.othersViewModel.teaspoon = null;
    this.othersViewModel.pint = null;
    this.othersViewModel.quart = null;
    this.othersViewModel.gallon = null;
    this.othersViewModel.pinch = null;
    this.othersViewModel.drop = null;
    this.othersViewModel.slice = null;
  }
}
_class = CookingComponent;
_class.ɵfac = function CookingComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-cooking"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 76,
  vars: 11,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["maxlength", "10", "type", "number", "name", "inputName", "placeholder", "Enter Cooking Unit", "id", "cooking", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-0"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function CookingComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Cooking Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CookingComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.othersViewModel.cooking = $event;
      })("input", function CookingComponent_Template_input_input_13_listener() {
        return ctx.convertCookingUnit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CookingComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function CookingComponent_Template_select_change_17_listener() {
        return ctx.convertCookingUnit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CookingComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Tablespoon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Teaspoon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Cup");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Pinch");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Pint");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Gallon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 17)(61, "li", 18)(62, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Quart");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 17)(67, "li", 18)(68, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Fluid Ounce");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 6)(73, "div", 21)(74, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CookingComponent_Template_button_click_74_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.othersViewModel.cooking);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.cookingUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.tablespoon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.teaspoon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.cup);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.pinch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.pint);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.gallon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.quart);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.fluidOunce);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3519:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/current/current.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentComponent: () => (/* binding */ CurrentComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function CurrentComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class CurrentComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.currentUnitNames = ["Ampere (A)", "Milliampere (mA)", "Microampere (µA)", "Kiloampere (kA)", "Megaampere (MA)"];
    this.targetUnit = this.currentUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // Function to convert current
  convertCurrent() {
    if (this.viewModel.current != null) {
      if (this.targetUnit === "Ampere (A)") {
        this.fromAmpere();
      } else if (this.targetUnit === "Milliampere (mA)") {
        this.fromMilliampere();
      } else if (this.targetUnit === "Microampere (µA)") {
        this.fromMicroampere();
      } else if (this.targetUnit === "Kiloampere (kA)") {
        this.fromKiloampere();
      } else if (this.targetUnit === "Megaampere (MA)") {
        this.fromMegaampere();
      }
    }
  }
  fromAmpere() {
    if (this.viewModel.current != null) {
      this.viewModel.milliampere = Number(this.viewModel.current * 1000);
      this.viewModel.microampere = Number(this.viewModel.current * 1e6);
      this.viewModel.kiloampere = Number(this.viewModel.current / 1000);
      this.viewModel.megaampere = Number(this.viewModel.current / 1e6);
      this.viewModel.ampere = this.viewModel.current;
    }
  }
  fromMilliampere() {
    if (this.viewModel.current != null) {
      this.viewModel.ampere = Number(this.viewModel.current / 1000);
      this.viewModel.microampere = Number(this.viewModel.current * 1000);
      this.viewModel.kiloampere = Number(this.viewModel.current / 1e6);
      this.viewModel.megaampere = Number(this.viewModel.current / 1e9);
      this.viewModel.milliampere = this.viewModel.current;
    }
  }
  fromMicroampere() {
    if (this.viewModel.current != null) {
      this.viewModel.ampere = Number(this.viewModel.current / 1e6);
      this.viewModel.milliampere = Number(this.viewModel.current / 1000);
      this.viewModel.kiloampere = Number(this.viewModel.current / 1e9);
      this.viewModel.megaampere = Number(this.viewModel.current / 1e12);
      this.viewModel.microampere = this.viewModel.current;
    }
  }
  fromKiloampere() {
    if (this.viewModel.current != null) {
      this.viewModel.ampere = Number(this.viewModel.current * 1000);
      this.viewModel.milliampere = Number(this.viewModel.current * 1e6);
      this.viewModel.microampere = Number(this.viewModel.current * 1e9);
      this.viewModel.megaampere = Number(this.viewModel.current / 1000);
      this.viewModel.kiloampere = this.viewModel.current;
    }
  }
  fromMegaampere() {
    if (this.viewModel.current != null) {
      this.viewModel.ampere = Number(this.viewModel.current * 1e6);
      this.viewModel.milliampere = Number(this.viewModel.current * 1e9);
      this.viewModel.microampere = Number(this.viewModel.current * 1e12);
      this.viewModel.kiloampere = Number(this.viewModel.current * 1000);
      this.viewModel.megaampere = this.viewModel.current;
    }
  }
  resetValues() {
    this.viewModel.ampere = null;
    this.viewModel.milliampere = null;
    this.viewModel.microampere = null;
    this.viewModel.kiloampere = null;
    this.viewModel.megaampere = null;
    this.viewModel.current = null;
  }
}
_class = CurrentComponent;
_class.ɵfac = function CurrentComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-current"]],
  viewQuery: function CurrentComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 58,
  vars: 8,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Current", "id", "current", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "ampere"], ["for", "ampere"], ["id", "milliampere"], ["for", "milliampere"], ["id", "microampere"], ["for", "microampere"], ["id", "kiloampere"], ["for", "kiloampere"], ["id", "megaampere"], ["for", "megaampere"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function CurrentComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Current Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CurrentComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.current = $event;
      })("input", function CurrentComponent_Template_input_input_13_listener() {
        return ctx.convertCurrent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function CurrentComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function CurrentComponent_Template_select_change_17_listener() {
        return ctx.convertCurrent();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, CurrentComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Ampere (A)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Milliampere (mA)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Microampere (\u00B5A)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Kiloampere (kA)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Megaampere (MA)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 6)(55, "div", 29)(56, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function CurrentComponent_Template_button_click_56_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.current);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.currentUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.ampere);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.milliampere);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.microampere);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kiloampere);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.megaampere);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7478:
/*!************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/force/force.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ForceComponent: () => (/* binding */ ForceComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function ForceComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class ForceComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.forceUnitNames = ["Newton (N)", "Kilogram-force (kgf)", "Dyne (dyn)", "Pound-force (lbf)"];
    this.targetUnit = this.forceUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // function to convert weight
  convertForce() {
    if (this.viewModel.force != null && this.viewModel.force > 0) {
      if (this.targetUnit === "Newton (N)") {
        this.fromNewton();
      } else if (this.targetUnit === "Kilogram-force (kgf)") {
        this.fromKilogramForce();
      } else if (this.targetUnit === "Dyne (dyn)") {
        this.fromDyne();
      } else if (this.targetUnit === "Pound-force (lbf)") {
        this.fromPoundForce();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromNewton() {
    if (this.viewModel.force != null) {
      this.viewModel.kilogramForce = Number(this.viewModel.force / 9.80665); // 1 newton = 0.10197 kilogram-force
      this.viewModel.dyne = Number(this.viewModel.force * 100000); // 1 newton = 100000 dynes
      this.viewModel.poundForce = Number(this.viewModel.force / 4.44822); // 1 newton = 0.22481 pound-force
      this.viewModel.newton = Number(this.viewModel.force);
    }
  }
  fromKilogramForce() {
    if (this.viewModel.force != null) {
      this.viewModel.newton = Number(this.viewModel.force * 9.80665); // 1 kilogram-force = 9.80665 newtons
      this.viewModel.dyne = Number(this.viewModel.force * 980665); // 1 kilogram-force = 1000000 dynes
      this.viewModel.poundForce = Number(this.viewModel.force * 2.20462); // 1 kilogram-force ≈ 2.20462 pound-force
      this.viewModel.kilogramForce = Number(this.viewModel.force);
    }
  }
  fromDyne() {
    if (this.viewModel.force != null) {
      this.viewModel.newton = Number(this.viewModel.force / 100000); // 1 newton = 0.00001 dyne
      this.viewModel.kilogramForce = Number(this.viewModel.force / 1000000); // 1 newton = 0.000001 kilogram-force
      this.viewModel.poundForce = Number(this.viewModel.force / 444822.16); // 1 newton = 0.000002 pound-force
      this.viewModel.dyne = Number(this.viewModel.force);
    }
  }
  fromPoundForce() {
    if (this.viewModel.force != null) {
      this.viewModel.newton = Number(this.viewModel.force * 4.44822); // 1 pound-force = 4.44822 newtons
      this.viewModel.kilogramForce = Number(this.viewModel.force / 2.20462); // 1 pound-force ≈ 0.45359 kilogram-force
      this.viewModel.dyne = Number(this.viewModel.force * 444822.16); // 1 pound-force = 444822.16 dynes
      this.viewModel.poundForce = Number(this.viewModel.force);
    }
  }
  resetValues() {
    this.viewModel.newton = null;
    this.viewModel.kilogramForce = null;
    this.viewModel.dyne = null;
    this.viewModel.poundForce = null;
    this.viewModel.force = null;
  }
}
_class = ForceComponent;
_class.ɵfac = function ForceComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-force"]],
  viewQuery: function ForceComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 52,
  vars: 7,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Force", "id", "force", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function ForceComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Force Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ForceComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.force = $event;
      })("input", function ForceComponent_Template_input_input_13_listener() {
        return ctx.convertForce();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function ForceComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function ForceComponent_Template_select_change_17_listener() {
        return ctx.convertForce();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, ForceComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Newton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Kilogram Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Dyne");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Pound Force");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 6)(49, "div", 21)(50, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function ForceComponent_Template_button_click_50_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.force);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.forceUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.newton);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilogramForce);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.dyne);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.poundForce);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7229:
/*!********************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/frequency/frequency.component.ts ***!
  \********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FrequencyComponent: () => (/* binding */ FrequencyComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function FrequencyComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 29);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class FrequencyComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.frequencyUnitNames = ["Hertz", "Kilohertz", "Megahertz", "Gigahertz"];
    this.targetUnit = this.frequencyUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // Function to convert frequency
  convertFrequency() {
    if (this.viewModel.frequency != null && this.viewModel.frequency > 0) {
      if (this.targetUnit === "Hertz") {
        this.fromHertz();
      } else if (this.targetUnit === "Kilohertz") {
        this.fromKilohertz();
      } else if (this.targetUnit === "Megahertz") {
        this.fromMegahertz();
      } else if (this.targetUnit === "Gigahertz") {
        this.fromGigahertz();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromHertz() {
    if (this.viewModel.frequency != null) {
      this.viewModel.kilohertz = Number(this.viewModel.frequency / 1000);
      this.viewModel.hertz = this.viewModel.frequency;
      this.viewModel.megahertz = Number(this.viewModel.frequency / 1e6);
      this.viewModel.gegahertz = Number(this.viewModel.frequency / 1e9);
    }
  }
  fromKilohertz() {
    if (this.viewModel.frequency != null) {
      this.viewModel.hertz = Number(this.viewModel.frequency * 1000);
      this.viewModel.kilohertz = this.viewModel.frequency;
      this.viewModel.megahertz = Number(this.viewModel.frequency / 1e3);
      this.viewModel.gegahertz = Number(this.viewModel.frequency / 1e6);
    }
  }
  fromMegahertz() {
    if (this.viewModel.frequency != null) {
      this.viewModel.hertz = Number(this.viewModel.frequency * 1e6);
      this.viewModel.kilohertz = Number(this.viewModel.frequency * 1e3);
      this.viewModel.megahertz = this.viewModel.frequency;
      this.viewModel.gegahertz = Number(this.viewModel.frequency / 1e3);
    }
  }
  fromGigahertz() {
    if (this.viewModel.frequency != null) {
      this.viewModel.hertz = Number(this.viewModel.frequency * 1e9);
      this.viewModel.kilohertz = Number(this.viewModel.frequency * 1e6);
      this.viewModel.megahertz = Number(this.viewModel.frequency * 1e3);
      this.viewModel.gegahertz = this.viewModel.frequency;
    }
  }
  resetValues() {
    this.viewModel.hertz = null;
    this.viewModel.kilohertz = null;
    this.viewModel.megahertz = null;
    this.viewModel.gegahertz = null;
    this.viewModel.frequency = null;
  }
}
_class = FrequencyComponent;
_class.ɵfac = function FrequencyComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-frequency"]],
  viewQuery: function FrequencyComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 52,
  vars: 7,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Frequency", "id", "frequency", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-0"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "hertz"], ["for", "hertz"], ["id", "kilohertz"], ["for", "kilohertz"], ["id", "megahertz"], ["for", "megahertz"], ["id", "gigahertz"], ["for", "gigahertz"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function FrequencyComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Frequency Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FrequencyComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.frequency = $event;
      })("input", function FrequencyComponent_Template_input_input_13_listener() {
        return ctx.convertFrequency();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FrequencyComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function FrequencyComponent_Template_select_change_17_listener() {
        return ctx.convertFrequency();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FrequencyComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Hertz");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Kilohertz");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Megahertz");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Gigahertz");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 6)(49, "div", 27)(50, "button", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FrequencyComponent_Template_button_click_50_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.frequency);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.frequencyUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.hertz);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilohertz);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.megahertz);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.gegahertz);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5673:
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/fuel/fuel.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FuelComponent: () => (/* binding */ FuelComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function FuelComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 27);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class FuelComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logHandler) {
    super(commonService, logHandler);
    this.commonService = commonService;
    this.logHandler = logHandler;
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_1__.othersViewModel();
    this.fuelEfficiencyUnitNames = ["Miles per Gallon (mpg)", "Kilometers per Liter (km/l)", "Liters per 100 Kilometers (l/100km)"];
    this.targetUnit = this.fuelEfficiencyUnitNames[0];
  }
  ngOnInit() {}
  convertFuelEfficiencyUnit() {
    if (this.othersViewModel.fuel != null && this.othersViewModel.fuel > 0) {
      if (this.targetUnit === "Miles per Gallon (mpg)") {
        this.fromMilesPerGallon();
      } else if (this.targetUnit === "Kilometers per Liter (km/l)") {
        this.fromKilometersPerLiter();
      } else if (this.targetUnit === "Liters per 100 Kilometers (l/100km)") {
        this.fromLitersPer100Kilometers();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromMilesPerGallon() {
    if (this.othersViewModel.fuel != null) {
      if (this.targetUnit === "Miles per Gallon (mpg)") {
        this.othersViewModel.milesPerGallon = this.othersViewModel.fuel;
        this.othersViewModel.kilometersPerLiter = this.othersViewModel.fuel * 0.4251437075;
        this.othersViewModel.litersPer100Kilometers = this.othersViewModel.fuel * 235.214583;
      }
    }
  }
  fromKilometersPerLiter() {
    if (this.othersViewModel.fuel != null) {
      if (this.targetUnit === "Kilometers per Liter (km/l)") {
        this.othersViewModel.kilometersPerLiter = this.othersViewModel.fuel;
        this.othersViewModel.milesPerGallon = this.othersViewModel.fuel * 2.352;
        this.othersViewModel.litersPer100Kilometers = 100 / this.othersViewModel.fuel;
      }
    }
  }
  fromLitersPer100Kilometers() {
    if (this.othersViewModel.fuel != null) {
      if (this.targetUnit === "Liters per 100 Kilometers (l/100km)") {
        this.othersViewModel.litersPer100Kilometers = this.othersViewModel.fuel;
        this.othersViewModel.milesPerGallon = 235.215 / this.othersViewModel.fuel;
        this.othersViewModel.kilometersPerLiter = 100 / this.othersViewModel.fuel;
      }
    }
  }
  resetValues() {
    this.othersViewModel.fuel = null;
    this.othersViewModel.kilometersPerLiter = null;
    this.othersViewModel.litersPer100Kilometers = null;
    this.othersViewModel.milesPerGallon = null;
  }
}
_class = FuelComponent;
_class.ɵfac = function FuelComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-fuel"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 46,
  vars: 6,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["maxlength", "10", "type", "number", "name", "inputName", "placeholder", "Enter Fuel", "id", "cooking", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-0"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "gallon"], ["for", "gallon"], ["id", "litersPer100Kilometers"], ["for", "litersPer100Kilometers"], ["id", "kilometersPerLiter"], ["for", "kilometersPerLiter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function FuelComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Fuel Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FuelComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.othersViewModel.fuel = $event;
      })("input", function FuelComponent_Template_input_input_13_listener() {
        return ctx.convertFuelEfficiencyUnit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function FuelComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function FuelComponent_Template_select_change_17_listener() {
        return ctx.convertFuelEfficiencyUnit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, FuelComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Miles/gallon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Liters/100km");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Kilometer/liter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 6)(43, "div", 25)(44, "button", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function FuelComponent_Template_button_click_44_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.othersViewModel.fuel);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.fuelEfficiencyUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.milesPerGallon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.litersPer100Kilometers);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.kilometersPerLiter);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1472:
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/length/length.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   LengthComponent: () => (/* binding */ LengthComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function LengthComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r1, " ");
  }
}
class LengthComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.lengthUnitNames = ["Meters", "Kilometers", "Centimeters", "Millimeters", "Micrometers", "Nanometers", "Inches", "Feet", "Yards", "Miles"
    // You can add more length unit names as needed
    ];

    this.targetUnit = this.lengthUnitNames[0];
  }
  // function to convert weight
  convertLength() {
    if (this.viewModel.length != null) {
      if (this.targetUnit === "Meters") {
        this.fromMeter();
      } else if (this.targetUnit === "Kilometers") {
        this.fromKilometer();
      } else if (this.targetUnit === "Centimeters") {
        this.fromCentimeter();
      } else if (this.targetUnit === "Millimeters") {
        this.fromMillimeter();
      } else if (this.targetUnit === "Micrometers") {
        this.fromMicrometer();
      } else if (this.targetUnit === "Nanometers") {
        this.fromNanometer();
      } else if (this.targetUnit === "Inches") {
        this.fromInch();
      } else if (this.targetUnit === "Feet") {
        this.fromFeet();
      } else if (this.targetUnit === "Yards") {
        this.fromYard();
      } else if (this.targetUnit === "Miles") {
        this.fromMiles();
      } else {
        this.resetValues();
      }
    }
  }
  fromMeter() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 1e9);
      this.viewModel.micrometer = Number(this.viewModel.length * 1e6);
      this.viewModel.millimeter = Number(this.viewModel.length * 1000);
      this.viewModel.centimeter = Number(this.viewModel.length * 100);
      this.viewModel.inch = Number(this.viewModel.length * 39.3701);
      this.viewModel.feet = Number(this.viewModel.length * 3.28084);
      this.viewModel.yard = Number(this.viewModel.length * 1.09361);
      this.viewModel.miles = Number(this.viewModel.length / 1609.34);
      this.viewModel.meter = Number(this.viewModel.length);
      this.viewModel.kilometer = Number(this.viewModel.length / 1000);
    }
  }
  fromKilometer() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 1e12);
      this.viewModel.micrometer = Number(this.viewModel.length * 1e9);
      this.viewModel.millimeter = Number(this.viewModel.length * 1e6);
      this.viewModel.centimeter = Number(this.viewModel.length * 1e5);
      this.viewModel.inch = Number(this.viewModel.length * 39370.1);
      this.viewModel.feet = Number(this.viewModel.length * 3280.84);
      this.viewModel.yard = Number(this.viewModel.length * 1093.61);
      this.viewModel.miles = Number(this.viewModel.length / 1.60934);
      this.viewModel.meter = Number(this.viewModel.length * 1000);
      this.viewModel.kilometer = Number(this.viewModel.length);
    }
  }
  fromCentimeter() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 1e7);
      this.viewModel.micrometer = Number(this.viewModel.length * 1e4);
      this.viewModel.millimeter = Number(this.viewModel.length * 10);
      this.viewModel.meter = Number(this.viewModel.length / 100);
      this.viewModel.kilometer = Number(this.viewModel.length / 100000);
      this.viewModel.inch = Number(this.viewModel.length / 2.54);
      this.viewModel.feet = Number(this.viewModel.length / 30.48);
      this.viewModel.yard = Number(this.viewModel.length / 91.44);
      this.viewModel.miles = Number(this.viewModel.length / 160934.4);
      this.viewModel.centimeter = Number(this.viewModel.length);
    }
  }
  fromMillimeter() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 1e6);
      this.viewModel.micrometer = Number(this.viewModel.length * 1e3);
      this.viewModel.centimeter = Number(this.viewModel.length / 10);
      this.viewModel.meter = Number(this.viewModel.length / 1000);
      this.viewModel.kilometer = Number(this.viewModel.length / 1000000);
      this.viewModel.inch = Number(this.viewModel.length / 25.4);
      this.viewModel.feet = Number(this.viewModel.length / 304.8);
      this.viewModel.yard = Number(this.viewModel.length / 914.4);
      this.viewModel.miles = Number(this.viewModel.length / 1609344);
      this.viewModel.millimeter = Number(this.viewModel.length);
    }
  }
  fromMicrometer() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 1000);
      this.viewModel.millimeter = Number(this.viewModel.length / 1000);
      this.viewModel.centimeter = Number(this.viewModel.length / 10000);
      this.viewModel.meter = Number(this.viewModel.length / 1000000);
      this.viewModel.kilometer = Number(this.viewModel.length / 1000000000);
      this.viewModel.inch = Number(this.viewModel.length / 25400);
      this.viewModel.feet = Number(this.viewModel.length / 304800);
      this.viewModel.yard = Number(this.viewModel.length / 914400);
      this.viewModel.miles = Number(this.viewModel.length / 1609344000);
      this.viewModel.micrometer = Number(this.viewModel.length);
    }
  }
  fromNanometer() {
    if (this.viewModel.length !== null) {
      this.viewModel.micrometer = Number(this.viewModel.length / 1000);
      this.viewModel.millimeter = Number(this.viewModel.length / 1e6);
      this.viewModel.centimeter = Number(this.viewModel.length / 1e7);
      this.viewModel.meter = Number(this.viewModel.length / 1e9);
      this.viewModel.kilometer = Number(this.viewModel.length / 1e12);
      this.viewModel.inch = Number(this.viewModel.length / 2.54e7);
      this.viewModel.feet = Number(this.viewModel.length / 3.048e8);
      this.viewModel.yard = Number(this.viewModel.length / 9.144e8);
      this.viewModel.miles = Number(this.viewModel.length / 1.609e12);
      this.viewModel.nanometer = Number(this.viewModel.length);
    }
  }
  fromInch() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 25400000);
      this.viewModel.micrometer = Number(this.viewModel.length * 25400);
      this.viewModel.millimeter = Number(this.viewModel.length * 25.4);
      this.viewModel.centimeter = Number(this.viewModel.length * 2.54);
      this.viewModel.meter = Number(this.viewModel.length * 0.0254);
      this.viewModel.kilometer = Number(this.viewModel.length * 0.0000254);
      this.viewModel.inch = Number(this.viewModel.length);
      this.viewModel.feet = Number(this.viewModel.length / 12);
      this.viewModel.yard = Number(this.viewModel.length / 36);
      this.viewModel.miles = Number(this.viewModel.length / 63360);
    }
  }
  fromFeet() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 304800000);
      this.viewModel.micrometer = Number(this.viewModel.length * 304800);
      this.viewModel.millimeter = Number(this.viewModel.length * 304.8);
      this.viewModel.centimeter = Number(this.viewModel.length * 30.48);
      this.viewModel.meter = Number(this.viewModel.length * 0.3048);
      this.viewModel.kilometer = Number(this.viewModel.length * 0.0003048);
      this.viewModel.inch = Number(this.viewModel.length * 12);
      this.viewModel.feet = Number(this.viewModel.length);
      this.viewModel.yard = Number(this.viewModel.length / 3);
      this.viewModel.miles = Number(this.viewModel.length / 5280);
    }
  }
  fromYard() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 914400000);
      this.viewModel.micrometer = Number(this.viewModel.length * 914400);
      this.viewModel.millimeter = Number(this.viewModel.length * 914.4);
      this.viewModel.centimeter = Number(this.viewModel.length * 91.44);
      this.viewModel.meter = Number(this.viewModel.length * 0.9144);
      this.viewModel.kilometer = Number(this.viewModel.length * 0.0009144);
      this.viewModel.inch = Number(this.viewModel.length * 36);
      this.viewModel.feet = Number(this.viewModel.length * 3);
      this.viewModel.yard = Number(this.viewModel.length);
      this.viewModel.miles = Number(this.viewModel.length / 1760);
    }
  }
  fromMiles() {
    if (this.viewModel.length !== null) {
      this.viewModel.nanometer = Number(this.viewModel.length * 1609344000000);
      this.viewModel.micrometer = Number(this.viewModel.length * 1609344000);
      this.viewModel.millimeter = Number(this.viewModel.length * 1609344);
      this.viewModel.centimeter = Number(this.viewModel.length * 160934.4);
      this.viewModel.meter = Number(this.viewModel.length * 1609.344);
      this.viewModel.kilometer = Number(this.viewModel.length * 1.609344);
      this.viewModel.inch = Number(this.viewModel.length * 63360);
      this.viewModel.feet = Number(this.viewModel.length * 5280);
      this.viewModel.yard = Number(this.viewModel.length * 1760);
      this.viewModel.miles = Number(this.viewModel.length);
    }
  }
  resetValues() {
    this.viewModel.inch = null;
    this.viewModel.meter = null;
    this.viewModel.kilometer = null;
    this.viewModel.nanometer = null;
    this.viewModel.miles = null;
    this.viewModel.millimeter = null;
    this.viewModel.yard = null;
    this.viewModel.length = null;
    this.viewModel.feet = null;
    this.viewModel.micrometer = null;
    this.viewModel.centimeter = null;
  }
}
_class = LengthComponent;
_class.ɵfac = function LengthComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-length"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 87,
  vars: 13,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Length", "id", "length", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function LengthComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Length Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LengthComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.length = $event;
      })("input", function LengthComponent_Template_input_input_13_listener() {
        return ctx.convertLength();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function LengthComponent_Template_select_ngModelChange_16_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function LengthComponent_Template_select_change_16_listener() {
        return ctx.convertLength();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, LengthComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "hr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "ul", 15)(22, "div", 6)(23, "div", 16)(24, "li", 17)(25, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Yards");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16)(30, "li", 17)(31, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Meter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 16)(36, "li", 17)(37, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Kilometer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 16)(42, "li", 17)(43, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Centimeter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 16)(48, "li", 17)(49, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Miles");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 16)(54, "li", 17)(55, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Feets");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 16)(60, "li", 17)(61, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Inches");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 16)(66, "li", 17)(67, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Nanometers");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 16)(72, "li", 17)(73, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Millimeter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 16)(78, "li", 17)(79, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Micrometer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 6)(84, "div", 20)(85, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function LengthComponent_Template_button_click_85_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.length);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.lengthUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.yard);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.meter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilometer);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.centimeter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.miles);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.feet);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.inch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.nanometer);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.millimeter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.micrometer);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2512:
/*!**********************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/planeangle/planeangle.component.ts ***!
  \**********************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PlaneAngleComponent: () => (/* binding */ PlaneAngleComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function PlaneAngleComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 31);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class PlaneAngleComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.planeAngleUnitNames = ["Degree (°)", "Radian (rad)", "Gradian (grad)", "Minute of Arc (MOA)", "Second of Arc (SOA)"];
    this.targetUnit = this.planeAngleUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  convertPlaneAngle() {
    if (this.viewModel.planeAngle != null) {
      if (this.targetUnit === "Degree (°)") {
        this.fromDegree();
      } else if (this.targetUnit === "Radian (rad)") {
        this.fromRadian();
      } else if (this.targetUnit === "Gradian (grad)") {
        this.fromGradian();
      } else if (this.targetUnit === "Minute of Arc (MOA)") {
        this.fromMinuteOfArc();
      } else if (this.targetUnit === "Second of Arc (SOA)") {
        this.fromSecondOfArc();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromDegree() {
    if (this.viewModel.planeAngle != null) {
      this.viewModel.radian = +(Math.PI / 180 * this.viewModel.planeAngle);
      this.viewModel.gradian = +(10 / 9 * this.viewModel.planeAngle).toFixed(5);
      this.viewModel.minuteOfArc = +(60 * this.viewModel.planeAngle);
      this.viewModel.secondOfArc = +(3600 * this.viewModel.planeAngle).toFixed(5);
      this.viewModel.degree = this.viewModel.planeAngle;
    }
  }
  fromRadian() {
    if (this.viewModel.planeAngle != null) {
      this.viewModel.degree = +(180 / Math.PI * this.viewModel.planeAngle);
      this.viewModel.gradian = +(200 / Math.PI * this.viewModel.planeAngle);
      this.viewModel.minuteOfArc = +(60 * 180 / (Math.PI * this.viewModel.planeAngle));
      this.viewModel.secondOfArc = +(3600 * 180 / (Math.PI * this.viewModel.planeAngle));
      this.viewModel.radian = this.viewModel.planeAngle;
    }
  }
  fromGradian() {
    if (this.viewModel.planeAngle != null) {
      this.viewModel.radian = Math.PI / 200 * this.viewModel.planeAngle;
      this.viewModel.minuteOfArc = 60 * 180 / (200 * this.viewModel.planeAngle);
      this.viewModel.secondOfArc = 3600 * 180 / (200 * this.viewModel.planeAngle);
      this.viewModel.degree = 9 / 10 * this.viewModel.planeAngle;
      this.viewModel.gradian = this.viewModel.planeAngle;
    }
  }
  fromMinuteOfArc() {
    if (this.viewModel.planeAngle != null) {
      this.viewModel.degree = +(this.viewModel.planeAngle / 60);
      this.viewModel.radian = +(Math.PI / 180 * (this.viewModel.planeAngle / 60));
      this.viewModel.gradian = +(this.viewModel.planeAngle / 54);
      this.viewModel.secondOfArc = +(60 * this.viewModel.planeAngle);
      this.viewModel.minuteOfArc = +this.viewModel.planeAngle;
    }
  }
  fromSecondOfArc() {
    if (this.viewModel.planeAngle != null) {
      this.viewModel.degree = +(this.viewModel.planeAngle / 3600);
      this.viewModel.radian = +(Math.PI / 180 * (this.viewModel.planeAngle / 3600));
      this.viewModel.gradian = +(this.viewModel.planeAngle / 3240);
      this.viewModel.minuteOfArc = +(this.viewModel.planeAngle / 60);
      this.viewModel.secondOfArc = +this.viewModel.planeAngle;
    }
  }
  resetValues() {
    this.viewModel.degree = null;
    this.viewModel.radian = null;
    this.viewModel.gradian = null;
    this.viewModel.minuteOfArc = null;
    this.viewModel.secondOfArc = null;
    this.viewModel.planeAngle = null;
  }
}
_class = PlaneAngleComponent;
_class.ɵfac = function PlaneAngleComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-planeangle"]],
  viewQuery: function PlaneAngleComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 58,
  vars: 8,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Plane Angle", "id", "planeAngle", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "degree"], ["for", "degree"], ["id", "radian"], ["for", "radian"], ["id", "gradian"], ["for", "gradian"], ["id", "arcminute"], ["for", "arcminute"], ["id", "arcsecond"], ["for", "arcsecond"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function PlaneAngleComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Plane Angle Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PlaneAngleComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.planeAngle = $event;
      })("input", function PlaneAngleComponent_Template_input_input_13_listener() {
        return ctx.convertPlaneAngle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PlaneAngleComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function PlaneAngleComponent_Template_select_change_17_listener() {
        return ctx.convertPlaneAngle();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PlaneAngleComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Degree (\u00B0)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Radian (rad)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Gradian (grad)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Arcminute (arcmin)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Arcsecond (arcsec)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 6)(55, "div", 29)(56, "button", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PlaneAngleComponent_Template_button_click_56_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.planeAngle);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.planeAngleUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.degree);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.radian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.gradian);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.minuteOfArc);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.secondOfArc);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 7108:
/*!************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/power/power.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PowerComponent: () => (/* binding */ PowerComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function PowerComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class PowerComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.powerUnitNames = ["Watt (W)", "Kilowatt (kW)", "Horsepower (hp)", "Calorie per second (cal/s)", "BTU per hour (BTU/hr)", "Erg per second (erg/s)"];
    this.targetUnit = this.powerUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // function to convert weight
  convertPower() {
    if (this.viewModel.power != null && this.viewModel.power > 0) {
      if (this.targetUnit === "Watt (W)") {
        this.fromWatt();
      } else if (this.targetUnit === "Kilowatt (kW)") {
        this.fromKilowatt();
      } else if (this.targetUnit === "Horsepower (hp)") {
        this.fromHorsepower();
      } else if (this.targetUnit === "Calorie per second (cal/s)") {
        this.fromCaloriePerSecond();
      } else if (this.targetUnit === "BTU per hour (BTU/hr)") {
        this.fromBTUPerHour();
      } else if (this.targetUnit === "Erg per second (erg/s)") {
        this.fromErgPerSecond();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromWatt() {
    if (this.viewModel.power != null) {
      this.viewModel.kilowatt = +(this.viewModel.power / 1000);
      this.viewModel.horsepower = +(this.viewModel.power / 745.7);
      this.viewModel.caloriePerSecond = +(this.viewModel.power * 0.239006);
      this.viewModel.btuperhour = +(this.viewModel.power * 3.412142);
      this.viewModel.ergPerSecond = +(this.viewModel.power * 10000000);
      this.viewModel.watt = +this.viewModel.power;
    }
  }
  fromKilowatt() {
    if (this.viewModel.power != null) {
      this.viewModel.watt = +(this.viewModel.power * 1000);
      this.viewModel.horsepower = +(this.viewModel.power * 1.34102);
      this.viewModel.caloriePerSecond = +(this.viewModel.power * 239.006);
      this.viewModel.btuperhour = +(this.viewModel.power * 3412.142);
      this.viewModel.ergPerSecond = +(this.viewModel.power * 10000000000);
      this.viewModel.kilowatt = +this.viewModel.power;
    }
  }
  fromHorsepower() {
    if (this.viewModel.power != null) {
      this.viewModel.watt = +(this.viewModel.power * 745.7);
      this.viewModel.kilowatt = +(this.viewModel.power * 0.7457);
      this.viewModel.caloriePerSecond = +(this.viewModel.power * 178.226577);
      this.viewModel.btuperhour = +(this.viewModel.power * 2544.43);
      this.viewModel.ergPerSecond = +(this.viewModel.power * 7456998716);
      this.viewModel.horsepower = +this.viewModel.power;
    }
  }
  fromCaloriePerSecond() {
    if (this.viewModel.power != null) {
      this.viewModel.watt = +(this.viewModel.power / 0.239006);
      this.viewModel.kilowatt = +(this.viewModel.power / 239.006);
      this.viewModel.horsepower = +(this.viewModel.power / 175.725);
      this.viewModel.btuperhour = +(this.viewModel.power * 14.28595817);
      this.viewModel.ergPerSecond = +(this.viewModel.power * 41840000);
      this.viewModel.caloriePerSecond = +this.viewModel.power;
    }
  }
  fromBTUPerHour() {
    if (this.viewModel.power != null) {
      this.viewModel.watt = +(this.viewModel.power / 3.412142);
      this.viewModel.kilowatt = +(this.viewModel.power / 3412.142);
      this.viewModel.horsepower = +(this.viewModel.power / 2544.43);
      this.viewModel.caloriePerSecond = +(this.viewModel.power / 1407.45);
      this.viewModel.ergPerSecond = +(this.viewModel.power * 3.412142);
      this.viewModel.btuperhour = +this.viewModel.power;
    }
  }
  fromErgPerSecond() {
    if (this.viewModel.power != null) {
      this.viewModel.watt = +(this.viewModel.power / 10000000);
      this.viewModel.kilowatt = +(this.viewModel.power / 10000000000);
      this.viewModel.horsepower = +(this.viewModel.power / 7457000000);
      this.viewModel.caloriePerSecond = +(this.viewModel.power / 4.184e10);
      this.viewModel.btuperhour = +(this.viewModel.power / 2.931e6);
      this.viewModel.ergPerSecond = +this.viewModel.power;
    }
  }
  resetValues() {
    this.viewModel.kilowatt = null;
    this.viewModel.horsepower = null;
    this.viewModel.caloriePerSecond = null;
    this.viewModel.btuperhour = null;
    this.viewModel.ergPerSecond = null;
    this.viewModel.watt = null;
    this.viewModel.power = null;
  }
}
_class = PowerComponent;
_class.ɵfac = function PowerComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-power"]],
  viewQuery: function PowerComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 64,
  vars: 9,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Power", "id", "power", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function PowerComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Power Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PowerComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.power = $event;
      })("input", function PowerComponent_Template_input_input_13_listener() {
        return ctx.convertPower();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PowerComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function PowerComponent_Template_select_change_17_listener() {
        return ctx.convertPower();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PowerComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Watt");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Kilowatt");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Horse Power");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Calorie/s");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "BTU/hr");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "ERG/s");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 6)(61, "div", 21)(62, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PowerComponent_Template_button_click_62_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.power);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.powerUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.watt);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilowatt);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.horsepower);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.caloriePerSecond);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.btuperhour);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.ergPerSecond);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 5305:
/*!******************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/pressure/pressure.component.ts ***!
  \******************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   PressureComponent: () => (/* binding */ PressureComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function PressureComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class PressureComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.pressureUnitNames = ["Pascal (Pa)", "Kilopascal (kPa)", "Bar", "Atmosphere (atm)", "Pound per Square Inch (psi)", "Torr"];
    this.targetUnit = this.pressureUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  convertPressure() {
    if (this.viewModel.pressure != null && this.viewModel.pressure > 0) {
      if (this.targetUnit === "Pascal (Pa)") {
        this.fromPascal();
      } else if (this.targetUnit === "Kilopascal (kPa)") {
        this.fromKilopascal();
      } else if (this.targetUnit === "Bar") {
        this.fromBar();
      } else if (this.targetUnit === "Atmosphere (atm)") {
        this.fromAtmosphere();
      } else if (this.targetUnit === "Pound per Square Inch (psi)") {
        this.fromPsi();
      } else if (this.targetUnit === "Torr") {
        this.fromTorr();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromPascal() {
    if (this.viewModel.pressure != null) {
      this.viewModel.kilopascal = +(this.viewModel.pressure / 1000);
      this.viewModel.bar = +(this.viewModel.pressure / 100000);
      this.viewModel.atmosphere = +(this.viewModel.pressure / 101325);
      this.viewModel.psi = +(this.viewModel.pressure / 6895);
      this.viewModel.torr = +(this.viewModel.pressure / 133.322);
      this.viewModel.pascal = this.viewModel.pressure;
    }
  }
  fromKilopascal() {
    if (this.viewModel.pressure != null) {
      this.viewModel.pascal = +(this.viewModel.pressure * 1000);
      this.viewModel.bar = +(this.viewModel.pressure / 100);
      this.viewModel.atmosphere = +(this.viewModel.pressure / 101.325);
      this.viewModel.psi = +(this.viewModel.pressure / 6.895);
      this.viewModel.torr = +(this.viewModel.pressure * 7.501);
      this.viewModel.kilopascal = this.viewModel.pressure;
    }
  }
  fromBar() {
    if (this.viewModel.pressure != null) {
      this.viewModel.pascal = +(this.viewModel.pressure * 100000);
      this.viewModel.kilopascal = +(this.viewModel.pressure * 100);
      this.viewModel.atmosphere = +(this.viewModel.pressure / 1.013);
      this.viewModel.psi = +(this.viewModel.pressure * 14.504);
      this.viewModel.torr = +(this.viewModel.pressure * 750.062);
      this.viewModel.bar = this.viewModel.pressure;
    }
  }
  fromAtmosphere() {
    if (this.viewModel.pressure != null) {
      this.viewModel.pascal = +(this.viewModel.pressure * 101325);
      this.viewModel.kilopascal = +(this.viewModel.pressure * 101.325);
      this.viewModel.bar = +(this.viewModel.pressure * 1.013);
      this.viewModel.psi = +(this.viewModel.pressure * 14.696);
      this.viewModel.torr = +(this.viewModel.pressure * 760);
      this.viewModel.atmosphere = this.viewModel.pressure;
    }
  }
  fromPsi() {
    if (this.viewModel.pressure != null) {
      this.viewModel.pascal = +(this.viewModel.pressure * 6895);
      this.viewModel.kilopascal = +(this.viewModel.pressure * 6.895);
      this.viewModel.bar = +(this.viewModel.pressure / 14.504);
      this.viewModel.atmosphere = +(this.viewModel.pressure / 14.696);
      this.viewModel.torr = +(this.viewModel.pressure * 51.715);
      this.viewModel.psi = this.viewModel.pressure;
    }
  }
  fromTorr() {
    if (this.viewModel.pressure != null) {
      this.viewModel.pascal = +(this.viewModel.pressure * 133.322);
      this.viewModel.kilopascal = +(this.viewModel.pressure / 7.5006);
      this.viewModel.bar = +(this.viewModel.pressure / 750.062);
      this.viewModel.atmosphere = +(this.viewModel.pressure / 760);
      this.viewModel.psi = +(this.viewModel.pressure / 51.715);
      this.viewModel.torr = this.viewModel.pressure;
    }
  }
  resetValues() {
    this.viewModel.pascal = null;
    this.viewModel.kilopascal = null;
    this.viewModel.bar = null;
    this.viewModel.atmosphere = null;
    this.viewModel.psi = null;
    this.viewModel.torr = null;
    this.viewModel.pressure = null;
  }
}
_class = PressureComponent;
_class.ɵfac = function PressureComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-pressure"]],
  viewQuery: function PressureComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 64,
  vars: 9,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Pressure", "id", "pressure", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "pascal"], ["for", "pascal"], ["id", "bar"], ["for", "bar"], ["id", "psi"], ["for", "psi"], ["id", "atmosphere"], ["for", "atmosphere"], ["id", "torr"], ["for", "torr"], ["id", "kilopascal"], ["for", "kilopascal"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function PressureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Pressure Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PressureComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.pressure = $event;
      })("input", function PressureComponent_Template_input_input_13_listener() {
        return ctx.convertPressure();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function PressureComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function PressureComponent_Template_select_change_17_listener() {
        return ctx.convertPressure();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, PressureComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Pascal (Pa)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Bar");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Pound per Square Inch (psi)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Atmosphere (atm)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Torr (mmHg)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Kilopascal (kPa)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 6)(61, "div", 31)(62, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function PressureComponent_Template_button_click_62_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.pressure);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.pressureUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.pascal);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.bar);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.psi);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.atmosphere);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.torr);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilopascal);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8797:
/*!************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/speed/speed.component.ts ***!
  \************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SpeedComponent: () => (/* binding */ SpeedComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function SpeedComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class SpeedComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.speedUnitNames = ["Meters per second (m/s)", "Kilometers per second (km/s)", "Miles per hour (mph)", "Feet per second (ft/s)", "Knots (kn)", "Kilometer per Hour"];
    this.targetUnit = this.speedUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // function to convert weight
  convertSpeed() {
    if (this.viewModel.speed != null && this.viewModel.speed > 0) {
      if (this.targetUnit === "Meters per second (m/s)") {
        this.fromMeterPerSecond();
      } else if (this.targetUnit === "Kilometers per second (km/s)") {
        this.fromKilometerPerSecond();
      } else if (this.targetUnit === "Miles per hour (mph)") {
        this.fromMilesPerHour();
      } else if (this.targetUnit === "Feet per second (ft/s)") {
        this.fromFeetPerSecond();
      } else if (this.targetUnit === "Knots (kn)") {
        this.fromKnots();
      } else if (this.targetUnit === "Kilometer per Hour") {
        this.fromKilometerPerHour();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromMeterPerSecond() {
    if (this.viewModel.speed != null) {
      this.viewModel.meterPerSecond = this.viewModel.speed;
      this.viewModel.kilometerPerSecond = +(this.viewModel.speed / 1000);
      this.viewModel.milesPerHour = +(this.viewModel.speed * 2.237);
      this.viewModel.feetPerSecond = +(this.viewModel.speed * 3.281);
      this.viewModel.knots = +(this.viewModel.speed * 1.944);
      this.viewModel.kilometerperhour = +this.viewModel.speed * 3.6;
    }
  }
  fromKilometerPerSecond() {
    if (this.viewModel.speed != null) {
      this.viewModel.kilometerPerSecond = +this.viewModel.speed;
      this.viewModel.meterPerSecond = +(this.viewModel.speed * 1000);
      this.viewModel.milesPerHour = +(this.viewModel.speed * 2237);
      this.viewModel.feetPerSecond = +(this.viewModel.speed * 3281);
      this.viewModel.knots = +(this.viewModel.speed * 1944);
      this.viewModel.kilometerperhour = +this.viewModel.speed * 3600;
    }
  }
  fromMilesPerHour() {
    if (this.viewModel.speed != null) {
      this.viewModel.milesPerHour = this.viewModel.speed;
      this.viewModel.kilometerPerSecond = +(this.viewModel.speed / 2237);
      this.viewModel.meterPerSecond = +(this.viewModel.speed / 2.237);
      this.viewModel.feetPerSecond = +(this.viewModel.speed * 1.467);
      this.viewModel.knots = +(this.viewModel.speed / 1.151);
      this.viewModel.kilometerperhour = +this.viewModel.speed * 1.609;
    }
  }
  fromFeetPerSecond() {
    if (this.viewModel.speed != null) {
      this.viewModel.feetPerSecond = this.viewModel.speed;
      this.viewModel.milesPerHour = +(this.viewModel.speed / 1.467);
      this.viewModel.kilometerPerSecond = +(this.viewModel.speed / 3281);
      this.viewModel.meterPerSecond = +(this.viewModel.speed / 3.28084);
      this.viewModel.knots = +(this.viewModel.speed / 1.688);
      this.viewModel.kilometerperhour = +this.viewModel.speed * 1.097;
    }
  }
  fromKnots() {
    if (this.viewModel.speed != null) {
      this.viewModel.knots = this.viewModel.speed;
      this.viewModel.milesPerHour = +(this.viewModel.speed * 1.15078);
      this.viewModel.kilometerPerSecond = +(this.viewModel.speed / 1944);
      this.viewModel.meterPerSecond = +(this.viewModel.speed * 0.51444);
      this.viewModel.feetPerSecond = +(this.viewModel.speed * 1.68781);
      this.viewModel.kilometerperhour = +this.viewModel.speed * 1.852;
    }
  }
  fromKilometerPerHour() {
    if (this.viewModel.speed != null) {
      this.viewModel.kilometerperhour = this.viewModel.speed;
      this.viewModel.milesPerHour = +(this.viewModel.speed / 1.609);
      this.viewModel.kilometerPerSecond = +(this.viewModel.speed / 3600);
      this.viewModel.meterPerSecond = +(this.viewModel.speed / 3.6);
      this.viewModel.feetPerSecond = +(this.viewModel.speed / 1.097);
      this.viewModel.knots = +(this.viewModel.speed / 1.852);
    }
  }
  resetValues() {
    this.viewModel.speed = null;
    this.viewModel.kilometerPerSecond = null;
    this.viewModel.meterPerSecond = null;
    this.viewModel.milesPerHour = null;
    this.viewModel.feetPerSecond = null;
    this.viewModel.knots = null;
    this.viewModel.kilometerperhour = null;
  }
}
_class = SpeedComponent;
_class.ɵfac = function SpeedComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-speed"]],
  viewQuery: function SpeedComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 64,
  vars: 9,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Speed", "id", "speed", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function SpeedComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Speed Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SpeedComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.speed = $event;
      })("input", function SpeedComponent_Template_input_input_13_listener() {
        return ctx.convertSpeed();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function SpeedComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function SpeedComponent_Template_select_change_17_listener() {
        return ctx.convertSpeed();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, SpeedComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Meter Per Second");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Kilometer Per Second");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Miles Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Feet Per Second");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Knots");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Kilometer Per Hour");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 6)(61, "div", 21)(62, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function SpeedComponent_Template_button_click_62_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.speed);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.speedUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.meterPerSecond);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilometerPerSecond);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.milesPerHour);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.feetPerSecond);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.knots);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilometerperhour);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 4082:
/*!****************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/storage/storage.component.ts ***!
  \****************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   StorageComponent: () => (/* binding */ StorageComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/others.viewmodel */ 4792);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function StorageComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 49);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class StorageComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logHandler) {
    super(commonService, logHandler);
    this.commonService = commonService;
    this.logHandler = logHandler;
    this.othersViewModel = new src_app_models_view_others_viewmodel__WEBPACK_IMPORTED_MODULE_1__.othersViewModel();
    this.storageUnitNames = ["Bit", "Byte", "Kilobit (Kb)", "Kilobyte (KB)", "Megabit (Mb)", "Megabyte (MB)", "Gigabit (Gb)", "Gigabyte (GB)", "Terabit (Tb)", "Terabyte (TB)", "Petabit (Pb)", "Petabyte (PB)", "Exabit (Eb)", "Exabyte (EB)"];
    this.targetStorageUnit = this.storageUnitNames[0];
  }
  ngOnInit() {}
  convertStorageUnit() {
    if (this.othersViewModel.storage != null && this.othersViewModel.storage > 0) {
      if (this.targetStorageUnit === "Bit") {
        this.fromBit();
      } else if (this.targetStorageUnit === "Byte") {
        this.fromByte();
      } else if (this.targetStorageUnit === "Kilobit (Kb)") {
        this.fromKilobit();
      } else if (this.targetStorageUnit === "Kilobyte (KB)") {
        this.fromKilobyte();
      } else if (this.targetStorageUnit === "Megabit (Mb)") {
        this.fromMegabit();
      } else if (this.targetStorageUnit === "Megabyte (MB)") {
        this.fromMegabyte();
      } else if (this.targetStorageUnit === "Gigabit (Gb)") {
        this.fromGigabit();
      } else if (this.targetStorageUnit === "Gigabyte (GB)") {
        this.fromGigabyte();
      } else if (this.targetStorageUnit === "Terabit (Tb)") {
        this.fromTerabit();
      } else if (this.targetStorageUnit === "Terabyte (TB)") {
        this.fromTerabyte();
      } else if (this.targetStorageUnit === "Petabit (Pb)") {
        this.fromPetabit();
      } else if (this.targetStorageUnit === "Petabyte (PB)") {
        this.fromPetabyte();
      } else if (this.targetStorageUnit === "Exabit (Eb)") {
        this.fromExabit();
      } else if (this.targetStorageUnit === "Exabyte (EB)") {
        this.fromExabyte();
      } else {
        this.resetStorageValues();
      }
    } else {
      this.resetStorageValues();
    }
  }
  fromBit() {
    if (this.othersViewModel.storage != null) {
      if (this.targetStorageUnit === "Bit") {
        this.othersViewModel.bit = this.othersViewModel.storage;
        this.othersViewModel.byte = this.othersViewModel.storage / 8;
        this.othersViewModel.kilobit = this.othersViewModel.storage / 1000;
        this.othersViewModel.kilobyte = this.othersViewModel.storage / 8000;
        this.othersViewModel.megabit = this.othersViewModel.storage / 1000000;
        this.othersViewModel.megabyte = this.othersViewModel.storage / 8e6;
        this.othersViewModel.gigabit = this.othersViewModel.storage / 1e9;
        this.othersViewModel.gigabyte = this.othersViewModel.storage / 8e9;
        this.othersViewModel.terabit = this.othersViewModel.storage / 1e12;
        this.othersViewModel.terabyte = this.othersViewModel.storage / 8e12;
        this.othersViewModel.petabit = this.othersViewModel.storage / 1e15;
        this.othersViewModel.petabyte = this.othersViewModel.storage / 8e15;
        this.othersViewModel.exabit = this.othersViewModel.storage / 1e18;
        this.othersViewModel.exabyte = this.othersViewModel.storage / 8e18;
      } else {
        this.resetStorageValues();
      }
    }
  }
  fromByte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8;
      this.othersViewModel.kilobit = this.othersViewModel.storage / 125;
      this.othersViewModel.kilobyte = this.othersViewModel.storage / 1000;
      this.othersViewModel.megabit = this.othersViewModel.storage / 125000;
      this.othersViewModel.megabyte = this.othersViewModel.storage / 1000000;
      this.othersViewModel.gigabit = this.othersViewModel.storage / 125000000;
      this.othersViewModel.gigabyte = this.othersViewModel.storage / 1000000000;
      this.othersViewModel.terabit = this.othersViewModel.storage / 125000000000;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 1000000000000;
      this.othersViewModel.petabit = this.othersViewModel.storage / 1.25e14;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 1.0e15;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1.25e17;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 1.0e18;
      this.othersViewModel.byte = this.othersViewModel.storage;
    } else {
      this.resetStorageValues();
    }
  }
  fromKilobit() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 1000;
      this.othersViewModel.byte = this.othersViewModel.storage * 125;
      this.othersViewModel.kilobit = this.othersViewModel.storage;
      this.othersViewModel.kilobyte = this.othersViewModel.storage / 8;
      this.othersViewModel.megabit = this.othersViewModel.storage / 1000;
      this.othersViewModel.megabyte = this.othersViewModel.storage / 8000;
      this.othersViewModel.gigabit = this.othersViewModel.storage / 1000000;
      this.othersViewModel.gigabyte = this.othersViewModel.storage / 8e6;
      this.othersViewModel.terabit = this.othersViewModel.storage / 1000000000;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 8e9;
      this.othersViewModel.petabit = this.othersViewModel.storage / 1000000000000;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 8000000000000;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1e15;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 8e15;
    } else {
      this.resetStorageValues();
    }
  }
  fromKilobyte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8000;
      this.othersViewModel.byte = this.othersViewModel.storage * 1000;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 8;
      this.othersViewModel.kilobyte = this.othersViewModel.storage;
      this.othersViewModel.megabit = this.othersViewModel.storage / 125;
      this.othersViewModel.megabyte = this.othersViewModel.storage / 1000;
      this.othersViewModel.gigabit = this.othersViewModel.storage / 125000;
      this.othersViewModel.gigabyte = this.othersViewModel.storage / 1000000;
      this.othersViewModel.terabit = this.othersViewModel.storage / 125000000;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 1000000000;
      this.othersViewModel.petabit = this.othersViewModel.storage / 125000000000;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 1e12;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1.25e14;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 1e15;
    } else {
      this.resetStorageValues();
    }
  }
  //// done upt//////////////
  fromMegabit() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 1e6;
      this.othersViewModel.byte = this.othersViewModel.storage * 125000;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 1e3;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 125;
      this.othersViewModel.megabit = this.othersViewModel.storage;
      this.othersViewModel.megabyte = this.othersViewModel.storage / 8;
      this.othersViewModel.gigabit = this.othersViewModel.storage / 1000;
      this.othersViewModel.gigabyte = this.othersViewModel.storage / 8000;
      this.othersViewModel.terabit = this.othersViewModel.storage / 1000000;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 8000000;
      this.othersViewModel.petabit = this.othersViewModel.storage / 1e9;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 8e9;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1e12;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 8e12;
    } else {
      this.resetStorageValues();
    }
  }
  //// done upto hereree
  fromMegabyte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8e6;
      this.othersViewModel.byte = this.othersViewModel.storage * 1e6;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 8e3;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 1e3;
      this.othersViewModel.megabit = this.othersViewModel.storage * 8;
      this.othersViewModel.megabyte = this.othersViewModel.storage;
      this.othersViewModel.gigabit = this.othersViewModel.storage / 125;
      this.othersViewModel.gigabyte = this.othersViewModel.storage / 1000;
      this.othersViewModel.terabit = this.othersViewModel.storage / 125e3;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 1e6;
      this.othersViewModel.petabit = this.othersViewModel.storage / 125e6;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 1e9;
      this.othersViewModel.exabit = this.othersViewModel.storage / 125e9;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 1e12;
    } else {
      this.resetStorageValues();
    }
  }
  // done upto here
  fromGigabit() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 1e9;
      this.othersViewModel.byte = this.othersViewModel.storage * 125e6;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 1e6;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 125e3;
      this.othersViewModel.megabit = this.othersViewModel.storage * 1e3;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 125;
      this.othersViewModel.gigabit = this.othersViewModel.storage;
      this.othersViewModel.gigabyte = this.othersViewModel.storage / 8;
      this.othersViewModel.terabit = this.othersViewModel.storage / 1000;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 8000;
      this.othersViewModel.petabit = this.othersViewModel.storage / 1000000;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 8e6;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1e9;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 8e9;
    } else {
      this.resetStorageValues();
    }
  }
  fromGigabyte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8e9;
      this.othersViewModel.byte = this.othersViewModel.storage * 1e9;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 8e6;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 1e6;
      this.othersViewModel.megabit = this.othersViewModel.storage * 8e3;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 1e3;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 8;
      this.othersViewModel.gigabyte = this.othersViewModel.storage;
      this.othersViewModel.terabit = this.othersViewModel.storage / 125;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 8000;
      this.othersViewModel.petabit = this.othersViewModel.storage / 125000;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 1e6;
      this.othersViewModel.exabit = this.othersViewModel.storage / 125e6;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 1e9;
    } else {
      this.resetStorageValues();
    }
  }
  ///done upto here
  fromTerabit() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 1e12;
      this.othersViewModel.byte = this.othersViewModel.storage * 125e9;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 1e9;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 125e6;
      this.othersViewModel.megabit = this.othersViewModel.storage * 1e6; ////
      this.othersViewModel.megabyte = this.othersViewModel.storage * 125000;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 1000;
      this.othersViewModel.gigabyte = this.othersViewModel.storage * 125;
      this.othersViewModel.terabit = this.othersViewModel.storage;
      this.othersViewModel.terabyte = this.othersViewModel.storage / 8;
      this.othersViewModel.petabit = this.othersViewModel.storage / 1000;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 8000;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1e6;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 8e6;
    } else {
      this.resetStorageValues();
    }
  }
  // done tup herer
  fromTerabyte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8e12;
      this.othersViewModel.byte = this.othersViewModel.storage * 1e12;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 8e9;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 1e9;
      this.othersViewModel.megabit = this.othersViewModel.storage * 8e6;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 1e6;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 8e3;
      this.othersViewModel.gigabyte = this.othersViewModel.storage * 1e3;
      this.othersViewModel.terabit = this.othersViewModel.storage * 8;
      this.othersViewModel.terabyte = this.othersViewModel.storage;
      this.othersViewModel.petabit = this.othersViewModel.storage / 125;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 1000;
      this.othersViewModel.exabit = this.othersViewModel.storage / 125000;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 1e6;
    } else {
      this.resetStorageValues();
    }
  }
  ///// doen upto here
  fromPetabit() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 1e15;
      this.othersViewModel.byte = this.othersViewModel.storage * 1.5625e14;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 1.25e14;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 125e9;
      this.othersViewModel.megabit = this.othersViewModel.storage * 1e9;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 125e6;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 1e6;
      this.othersViewModel.gigabyte = this.othersViewModel.storage * 125000;
      this.othersViewModel.terabit = this.othersViewModel.storage * 1000;
      this.othersViewModel.terabyte = this.othersViewModel.storage * 125;
      this.othersViewModel.petabit = this.othersViewModel.storage;
      this.othersViewModel.petabyte = this.othersViewModel.storage / 8;
      this.othersViewModel.exabit = this.othersViewModel.storage / 1000;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 8000;
    } else {
      this.resetStorageValues();
    }
  }
  //////done upto here
  fromPetabyte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8e15;
      this.othersViewModel.byte = this.othersViewModel.storage * 1e15;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 8e12;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 1e12;
      this.othersViewModel.megabit = this.othersViewModel.storage * 8e9;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 1e9;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 8e6;
      this.othersViewModel.gigabyte = this.othersViewModel.storage * 1e6;
      this.othersViewModel.terabit = this.othersViewModel.storage * 8e3;
      this.othersViewModel.terabyte = this.othersViewModel.storage * 1e3;
      this.othersViewModel.petabit = this.othersViewModel.storage * 8;
      this.othersViewModel.petabyte = this.othersViewModel.storage;
      this.othersViewModel.exabit = this.othersViewModel.storage / 125;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 1000;
    } else {
      this.resetStorageValues();
    }
  }
  //// done uptp here
  fromExabit() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 1e18;
      this.othersViewModel.byte = this.othersViewModel.storage * 1.25e17;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 1e15;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 1.25e14;
      this.othersViewModel.megabit = this.othersViewModel.storage * 1e12;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 125e9;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 1e9;
      this.othersViewModel.gigabyte = this.othersViewModel.storage * 125e6;
      this.othersViewModel.terabit = this.othersViewModel.storage * 1e6;
      this.othersViewModel.terabyte = this.othersViewModel.storage * 125000;
      this.othersViewModel.petabit = this.othersViewModel.storage * 1000;
      this.othersViewModel.petabyte = this.othersViewModel.storage * 125;
      this.othersViewModel.exabit = this.othersViewModel.storage;
      this.othersViewModel.exabyte = this.othersViewModel.storage / 8;
    } else {
      this.resetStorageValues();
    }
  }
  //// done yptp here
  fromExabyte() {
    if (this.othersViewModel.storage != null) {
      this.othersViewModel.bit = this.othersViewModel.storage * 8e18;
      this.othersViewModel.byte = this.othersViewModel.storage * 1e18;
      this.othersViewModel.kilobit = this.othersViewModel.storage * 8e15;
      this.othersViewModel.kilobyte = this.othersViewModel.storage * 1e15;
      this.othersViewModel.megabit = this.othersViewModel.storage * 8e12;
      this.othersViewModel.megabyte = this.othersViewModel.storage * 1e12;
      this.othersViewModel.gigabit = this.othersViewModel.storage * 8e9;
      this.othersViewModel.gigabyte = this.othersViewModel.storage * 1e9;
      this.othersViewModel.terabit = this.othersViewModel.storage * 8e6;
      this.othersViewModel.terabyte = this.othersViewModel.storage * 1e6;
      this.othersViewModel.petabit = this.othersViewModel.storage * 8e3;
      this.othersViewModel.petabyte = this.othersViewModel.storage * 1e3;
      this.othersViewModel.exabit = this.othersViewModel.storage / 8;
      this.othersViewModel.exabyte = this.othersViewModel.storage;
    } else {
      this.resetStorageValues();
    }
  }
  // Continue with similar implementations for other conversion functions
  // Implement similar functions for other storage units
  resetStorageValues() {
    this.othersViewModel.bit = null;
    this.othersViewModel.byte = null;
    this.othersViewModel.kilobit = null;
    this.othersViewModel.kilobyte = null;
    this.othersViewModel.megabit = null;
    this.othersViewModel.megabyte = null;
    this.othersViewModel.gigabit = null;
    this.othersViewModel.gigabyte = null;
    this.othersViewModel.terabit = null;
    this.othersViewModel.terabyte = null;
    this.othersViewModel.petabit = null;
    this.othersViewModel.petabyte = null;
    this.othersViewModel.exabit = null;
    this.othersViewModel.exabyte = null;
    this.othersViewModel.storage = null;
  }
}
_class = StorageComponent;
_class.ɵfac = function StorageComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-storage"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 112,
  vars: 17,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["maxlength", "10", "type", "number", "name", "inputName", "placeholder", "Enter Storage Value", "id", "storage", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetStorageUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-0"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "bit"], ["for", "bit"], ["id", "byte"], ["for", "byte"], ["id", "kilobit"], ["for", "kilobit"], ["id", "kilobyte"], ["for", "kilobyte"], ["id", "megabit"], ["for", "megabit"], ["id", "megabyte"], ["for", "megabyte"], ["id", "gigabit"], ["for", "gigabit"], ["id", "gigabyte"], ["for", "gigabyte"], ["id", "terabit"], ["for", "terabit"], ["id", "terabyte"], ["for", "terabyte"], ["id", "petabit"], ["for", "petabit"], ["id", "petabyte"], ["for", "petabyte"], ["id", "exabit"], ["for", "exabit"], ["id", "exabyte"], ["for", "exabyte"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function StorageComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Computer Data Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.othersViewModel.storage = $event;
      })("input", function StorageComponent_Template_input_input_13_listener() {
        return ctx.convertStorageUnit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function StorageComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetStorageUnit = $event;
      })("change", function StorageComponent_Template_select_change_17_listener() {
        return ctx.convertStorageUnit();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, StorageComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Bit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Byte");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Kilobit (Kb)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Kilobyte (KB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Megabit (Mb)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Megabyte (MB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 17)(61, "li", 18)(62, "span", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "label", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "Gigabit (Gb)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 17)(67, "li", 18)(68, "span", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "label", 34);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "Gigabyte (GB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 17)(73, "li", 18)(74, "span", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "label", 36);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Terabit (Tb)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 17)(79, "li", 18)(80, "span", 37);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label", 38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Terabyte (TB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 17)(85, "li", 18)(86, "span", 39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](88, "label", 40);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](89, "Petabit (Pb)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](90, "div", 17)(91, "li", 18)(92, "span", 41);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](93);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](94, "label", 42);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](95, "Petabyte (PB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](96, "div", 17)(97, "li", 18)(98, "span", 43);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](99);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](100, "label", 44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](101, "Exabit (Eb)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](102, "div", 17)(103, "li", 18)(104, "span", 45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](105);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](106, "label", 46);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](107, "Exabyte (EB)");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](108, "div", 6)(109, "div", 47)(110, "button", 48);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function StorageComponent_Template_button_click_110_listener() {
        return ctx.resetStorageValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](111, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.othersViewModel.storage);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetStorageUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.storageUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.bit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.byte);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.kilobit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.kilobyte);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.megabit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.megabyte);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.gigabit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.gigabyte);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.terabit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.terabyte);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.petabit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.petabyte);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.exabit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.othersViewModel.exabyte);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.MaxLengthValidator, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 9119:
/*!************************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/temperature/temperature.component.ts ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TemperatureComponent: () => (/* binding */ TemperatureComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function TemperatureComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r1, " ");
  }
}
class TemperatureComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.temperatureUnitNames = ["Celsius (°C)", "Fahrenheit (°F)", "Kelvin (K)"];
    this.targetUnit = this.temperatureUnitNames[0];
  }
  // function to convert weight
  convertTemp() {
    if (this.viewModel.temperature != null) {
      if (this.targetUnit === "Celsius (°C)") {
        this.fromCelsius();
      } else if (this.targetUnit === "Fahrenheit (°F)") {
        this.fromFahrenheit();
      } else if (this.targetUnit === "Kelvin (K)") {
        this.fromKelvin();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromCelsius() {
    if (this.viewModel.temperature != null) {
      this.viewModel.celsius = this.viewModel.temperature;
      this.viewModel.fahrenheit = +(this.viewModel.temperature * 9 / 5 + 32);
      this.viewModel.kelvin = +(this.viewModel.temperature + 273.15);
    }
  }
  fromFahrenheit() {
    if (this.viewModel.temperature != null) {
      this.viewModel.fahrenheit = this.viewModel.temperature;
      this.viewModel.celsius = +((this.viewModel.temperature - 32) * 5 / 9);
      this.viewModel.kelvin = +((this.viewModel.temperature - 32) * 5 / 9 + 273.15);
    }
  }
  fromKelvin() {
    if (this.viewModel.temperature != null) {
      this.viewModel.kelvin = this.viewModel.temperature;
      this.viewModel.celsius = +(this.viewModel.temperature - 273.15);
      this.viewModel.fahrenheit = +((this.viewModel.temperature - 273.15) * 9 / 5 + 32);
    }
  }
  resetValues() {
    this.viewModel.temperature = null;
    this.viewModel.celsius = null;
    this.viewModel.kelvin = null;
    this.viewModel.fahrenheit = null;
  }
}
_class = TemperatureComponent;
_class.ɵfac = function TemperatureComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-temperature"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 45,
  vars: 6,
  consts: [[1, "container"], [1, "row", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Temprature", "id", "length", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function TemperatureComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Temprature Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TemperatureComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.temperature = $event;
      })("input", function TemperatureComponent_Template_input_input_13_listener() {
        return ctx.convertTemp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TemperatureComponent_Template_select_ngModelChange_16_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function TemperatureComponent_Template_select_change_16_listener() {
        return ctx.convertTemp();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, TemperatureComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "hr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "ul", 15)(22, "div", 6)(23, "div", 16)(24, "li", 17)(25, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Celsius");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16)(30, "li", 17)(31, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Fahrenheit");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 16)(36, "li", 17)(37, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Kelvin");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 6)(42, "div", 20)(43, "button", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TemperatureComponent_Template_button_click_43_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.temperature);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.temperatureUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.celsius);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.fahrenheit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kelvin);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1987:
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/time/time.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TimeComponent: () => (/* binding */ TimeComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function TimeComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 36);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r1, " ");
  }
}
class TimeComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.timeUnitNames = ["Nanoseconds (ns)", "Microseconds (μs)", "Milliseconds (ms)", "Seconds (s)", "Minutes (min)", "Hours (hr)", "Days (day)", "Weeks (wk)", "Months (mo)", "Years (yr)", "Decades (dec)"];
    this.targetUnit = this.timeUnitNames[0];
  }
  convertTime() {
    if (this.viewModel.time != null) {
      if (this.targetUnit === "Nanoseconds (ns)") {
        this.fromNanoseconds();
      } else if (this.targetUnit === "Microseconds (μs)") {
        this.fromMicroseconds();
      } else if (this.targetUnit === "Milliseconds (ms)") {
        this.fromMilliseconds();
      } else if (this.targetUnit === "Seconds (s)") {
        this.fromSeconds();
      } else if (this.targetUnit === "Minutes (min)") {
        this.fromMinutes();
      } else if (this.targetUnit === "Hours (hr)") {
        this.fromHours();
      } else if (this.targetUnit === "Days (day)") {
        this.fromDays();
      } else if (this.targetUnit === "Weeks (wk)") {
        this.fromWeeks();
      } else if (this.targetUnit === "Months (mo)") {
        this.fromMonths();
      } else if (this.targetUnit === "Years (yr)") {
        this.fromYears();
      } else if (this.targetUnit === "Decades (dec)") {
        this.fromDecades();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromNanoseconds() {
    if (this.viewModel.time != null) {
      this.viewModel.nanoseconds = this.viewModel.time;
      this.viewModel.microseconds = +(this.viewModel.time / 1000);
      this.viewModel.milliseconds = +(this.viewModel.time / 1e6);
      this.viewModel.seconds = +(this.viewModel.time / 1e9);
      this.viewModel.minutes = +(this.viewModel.time / 6e10);
      this.viewModel.hours = +(this.viewModel.time / 3.6e12);
      this.viewModel.days = +(this.viewModel.time / 8.64e13);
      this.viewModel.weeks = +(this.viewModel.time / 6.048e14);
      this.viewModel.months = +(this.viewModel.time / 2.592e15); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 3.1536e16); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 3.1536e17); // Assuming 10 years per decade
    }
  }

  fromMicroseconds() {
    if (this.viewModel.time != null) {
      this.viewModel.microseconds = this.viewModel.time;
      this.viewModel.nanoseconds = +(this.viewModel.time * 1000);
      this.viewModel.milliseconds = +(this.viewModel.time / 1000);
      this.viewModel.seconds = +(this.viewModel.time / 1e6);
      this.viewModel.minutes = +(this.viewModel.time / 6e7);
      this.viewModel.hours = +(this.viewModel.time / 3.6e9);
      this.viewModel.days = +(this.viewModel.time / 8.64e10);
      this.viewModel.weeks = +(this.viewModel.time / 6.048e11);
      this.viewModel.months = +(this.viewModel.time / 2.592e12); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 3.1536e13); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 3.1536e14); // Assuming 10 years per decade
    }
  }

  fromMilliseconds() {
    if (this.viewModel.time != null) {
      this.viewModel.milliseconds = this.viewModel.time;
      this.viewModel.nanoseconds = +(this.viewModel.time * 1e6);
      this.viewModel.microseconds = +(this.viewModel.time * 1000);
      this.viewModel.seconds = +(this.viewModel.time / 1000);
      this.viewModel.minutes = +(this.viewModel.time / 60000);
      this.viewModel.hours = +(this.viewModel.time / 3600000);
      this.viewModel.days = +(this.viewModel.time / 8.64e7);
      this.viewModel.weeks = +(this.viewModel.time / 6.048e8);
      this.viewModel.months = +(this.viewModel.time / 2.592e9); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 3.1536e10); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 3.1536e11); // Assuming 10 years per decade
    }
  }

  fromSeconds() {
    if (this.viewModel.time != null) {
      this.viewModel.seconds = this.viewModel.time;
      this.viewModel.nanoseconds = +(this.viewModel.time * 1e9);
      this.viewModel.microseconds = +(this.viewModel.time * 1e6);
      this.viewModel.milliseconds = +(this.viewModel.time * 1000);
      this.viewModel.minutes = +(this.viewModel.time / 60);
      this.viewModel.hours = +(this.viewModel.time / 3600);
      this.viewModel.days = +(this.viewModel.time / 86400);
      this.viewModel.weeks = +(this.viewModel.time / 604800);
      this.viewModel.months = +(this.viewModel.time / 2.592e6); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 3.1536e7); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 3.1536e8); // Assuming 10 years per decade
    }
  }

  fromMinutes() {
    if (this.viewModel.time != null) {
      this.viewModel.minutes = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 60);
      this.viewModel.nanoseconds = +(this.viewModel.time * 6e10);
      this.viewModel.microseconds = +(this.viewModel.time * 6e7);
      this.viewModel.milliseconds = +(this.viewModel.time * 60000);
      this.viewModel.hours = +(this.viewModel.time / 60);
      this.viewModel.days = +(this.viewModel.time / 1440);
      this.viewModel.weeks = +(this.viewModel.time / 10080);
      this.viewModel.months = +(this.viewModel.time / 43800); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 525600); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 5256000); // Assuming 10 years per decade
    }
  }

  fromHours() {
    if (this.viewModel.time != null) {
      this.viewModel.hours = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 3600);
      this.viewModel.minutes = +(this.viewModel.time * 60);
      this.viewModel.nanoseconds = +(this.viewModel.time * 3.6e12);
      this.viewModel.microseconds = +(this.viewModel.time * 3.6e9);
      this.viewModel.milliseconds = +(this.viewModel.time * 3600000);
      this.viewModel.days = +(this.viewModel.time / 24);
      this.viewModel.weeks = +(this.viewModel.time / 168);
      this.viewModel.months = +(this.viewModel.time / 730.001); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 8760); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 87600); // Assuming 10 years per decade
    }
  }

  fromDays() {
    if (this.viewModel.time != null) {
      this.viewModel.days = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 86400);
      this.viewModel.minutes = +(this.viewModel.time * 1440);
      this.viewModel.hours = +(this.viewModel.time * 24);
      this.viewModel.nanoseconds = +(this.viewModel.time * 8.64e13);
      this.viewModel.microseconds = +(this.viewModel.time * 8.64e10);
      this.viewModel.milliseconds = +(this.viewModel.time * 8.64e7);
      this.viewModel.weeks = +(this.viewModel.time / 7);
      this.viewModel.months = +(this.viewModel.time / 30.44); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 365.25); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 3652.5); // Assuming 10 years per decade
    }
  }

  fromWeeks() {
    if (this.viewModel.time != null) {
      this.viewModel.weeks = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 604800);
      this.viewModel.minutes = +(this.viewModel.time * 10080);
      this.viewModel.hours = +(this.viewModel.time * 168);
      this.viewModel.days = +(this.viewModel.time * 7);
      this.viewModel.nanoseconds = +(this.viewModel.time * 6.048e14);
      this.viewModel.microseconds = +(this.viewModel.time * 6.048e11);
      this.viewModel.milliseconds = +(this.viewModel.time * 6.048e8);
      this.viewModel.months = +(this.viewModel.time / 4.34); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 52.17857); // Assuming 365.25 days per year
      this.viewModel.decades = +(this.viewModel.time / 521.7857); // Assuming 10 years per decade
    }
  }

  fromMonths() {
    if (this.viewModel.time != null) {
      this.viewModel.months = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 2628000); // Assuming 30.44 days per month
      this.viewModel.minutes = +(this.viewModel.time * 43800); // Assuming 30.44 days per month
      this.viewModel.hours = +(this.viewModel.time * 730); // Assuming 30.44 days per month
      this.viewModel.days = +(this.viewModel.time * 30.44); // Assuming 30.44 days per month
      this.viewModel.nanoseconds = +(this.viewModel.time * 2628000000000000);
      this.viewModel.microseconds = +(this.viewModel.time * 2628000000000);
      this.viewModel.milliseconds = +(this.viewModel.time * 2628000000);
      this.viewModel.weeks = +(this.viewModel.time * 4.34); // Assuming 30.44 days per month
      this.viewModel.years = +(this.viewModel.time / 12); // Assuming 12 months per year
      this.viewModel.decades = +(this.viewModel.time / 120); // Assuming 10 years per decade
    }
  }

  fromYears() {
    if (this.viewModel.time != null) {
      this.viewModel.years = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 31536000); // Assuming 365.25 days per year
      this.viewModel.minutes = +(this.viewModel.time * 525600); // Assuming 365.25 days per year
      this.viewModel.hours = +(this.viewModel.time * 8760); // Assuming 365.25 days per year
      this.viewModel.days = +(this.viewModel.time * 365); // Assuming 365 days per year
      this.viewModel.weeks = +(this.viewModel.time * 52.17857); // Assuming 365.25 days per year
      this.viewModel.months = +(this.viewModel.time * 12); // Assuming 12 months per year
      this.viewModel.decades = +(this.viewModel.time / 10); // Assuming 10 years per decade
      this.viewModel.milliseconds = +(this.viewModel.time * 31536000000); // Assuming 1 year = 31536000 seconds
      this.viewModel.microseconds = +(this.viewModel.time * 31536000000000); // Assuming 1 year = 31536000000 milliseconds
      this.viewModel.nanoseconds = +(this.viewModel.time * 31536000000000000); // Assuming 1 year = 31536000000000 microseconds
    }
  }

  fromDecades() {
    if (this.viewModel.time != null) {
      this.viewModel.decades = this.viewModel.time;
      this.viewModel.seconds = +(this.viewModel.time * 315576000); // Assuming 10 years per decade
      this.viewModel.minutes = +(this.viewModel.time * 5259600); // Assuming 10 years per decade
      this.viewModel.hours = +(this.viewModel.time * 87660); // Assuming 10 years per decade
      this.viewModel.days = +(this.viewModel.time * 36525); // Assuming 10 years per decade
      this.viewModel.weeks = +(this.viewModel.time * 521.78); // Assuming 10 years per decade
      this.viewModel.months = +(this.viewModel.time * 120); // Assuming 12 months per year
      this.viewModel.years = +(this.viewModel.time * 10); // Assuming 10 years per decade
      this.viewModel.milliseconds = +(this.viewModel.time * 315576000000); // Assuming 1 decade = 315360000 seconds
      this.viewModel.microseconds = +(this.viewModel.time * 315575999999999); // Assuming 1 decade = 315360000000 milliseconds
      this.viewModel.nanoseconds = +(this.viewModel.time * 315575999999999000); // Assuming 1 decade = 315360000000000 microseconds
    }
  }

  resetValues() {
    this.viewModel.time = null;
    this.viewModel.milliseconds = null;
    this.viewModel.microseconds = null;
    this.viewModel.nanoseconds = null;
    this.viewModel.seconds = null;
    this.viewModel.minutes = null;
    this.viewModel.hours = null;
    this.viewModel.days = null;
    this.viewModel.weeks = null;
    this.viewModel.years = null;
    this.viewModel.months = null;
    this.viewModel.decades = null;
  }
}
_class = TimeComponent;
_class.ɵfac = function TimeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-time"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 93,
  vars: 14,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Time", "id", "time", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "seconds"], ["for", "seconds"], ["id", "minutes"], ["for", "minutes"], ["id", "hours"], ["for", "hours"], ["id", "days"], ["for", "days"], ["id", "weeks"], ["for", "weeks"], ["id", "months"], ["for", "months"], ["id", "years"], ["for", "years"], ["id", "decades"], ["for", "decades"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function TimeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Time Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.time = $event;
      })("input", function TimeComponent_Template_input_input_13_listener() {
        return ctx.convertTime();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function TimeComponent_Template_select_ngModelChange_16_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function TimeComponent_Template_select_change_16_listener() {
        return ctx.convertTime();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, TimeComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "hr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "ul", 15)(22, "div", 6)(23, "div", 16)(24, "li", 17)(25, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "Microseconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16)(30, "li", 17)(31, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Milliseconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 16)(36, "li", 17)(37, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Nanoseconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 16)(42, "li", 17)(43, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Seconds");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 16)(48, "li", 17)(49, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Minutes");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 16)(54, "li", 17)(55, "span", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 16)(60, "li", 17)(61, "span", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Days");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 16)(66, "li", 17)(67, "span", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "label", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Weeks");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 16)(72, "li", 17)(73, "span", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "label", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Months");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 16)(78, "li", 17)(79, "span", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](81, "label", 31);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](82, "Years");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](83, "div", 16)(84, "li", 17)(85, "span", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](86);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](87, "label", 33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](88, "Decades");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](89, "div", 6)(90, "div", 34)(91, "button", 35);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function TimeComponent_Template_button_click_91_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](92, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.time);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.timeUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.microseconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.milliseconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.nanoseconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.seconds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.minutes);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.hours);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.days);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.weeks);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.months);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.years);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.decades);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 2703:
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/volume/volume.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   VolumeComponent: () => (/* binding */ VolumeComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function VolumeComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class VolumeComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.volumeUnitNames = ["Cubic meters (m³)", "Cubic kilometers (km³)", "Cubic centimeters (cm³)", "Cubic millimeters (mm³)", "Cubic feet (ft³)", "Cubic inches (in³)", "Liters (L)", "Milliliters (mL)", "Gallons (US gal)", "Gallons (UK gal)"];
    this.targetUnit = this.volumeUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // function to convert weight
  convertVolume() {
    if (this.viewModel.volume != null && this.viewModel.volume > 0) {
      const targetUnit = this.targetUnit;
      if (targetUnit === "Cubic meters (m³)") {
        this.fromCubicMeter();
      } else if (targetUnit === "Cubic kilometers (km³)") {
        this.fromCubicKilometer();
      } else if (targetUnit === "Cubic centimeters (cm³)") {
        this.fromCubicCentimeter();
      } else if (targetUnit === "Cubic millimeters (mm³)") {
        this.fromCubicMillimeter();
      } else if (targetUnit === "Cubic feet (ft³)") {
        this.fromCubicFeet();
      } else if (targetUnit === "Cubic inches (in³)") {
        this.fromCubicInch();
      } else if (targetUnit === "Liters (L)") {
        this.fromLiter();
      } else if (targetUnit === "Milliliters (mL)") {
        this.fromMilliliter();
      } else if (targetUnit === "Gallons (US gal)") {
        this.fromUSGallon();
      } else if (targetUnit === "Gallons (UK gal)") {
        this.fromUKGallon();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromCubicMeter() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 1e9);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 1e6);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 1e9);
      this.viewModel.cubicFeet = +(this.viewModel.volume * 35.3147);
      this.viewModel.cubicInch = +(this.viewModel.volume * 61023.7);
      this.viewModel.liter = +(this.viewModel.volume * 1000);
      this.viewModel.milliliter = +(this.viewModel.volume * 1e6);
      this.viewModel.usGallon = +(this.viewModel.volume * 264.172);
      this.viewModel.ukGallon = +(this.viewModel.volume * 219.969);
      this.viewModel.cubicMeter = +this.viewModel.volume;
    }
  }
  fromCubicKilometer() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume * 1e9);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 1e15);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 1e18);
      this.viewModel.cubicFeet = +(this.viewModel.volume * 35314666721);
      this.viewModel.cubicInch = +(this.viewModel.volume * 61023744094732);
      this.viewModel.liter = +(this.viewModel.volume * 1e12);
      this.viewModel.milliliter = +(this.viewModel.volume * 1e15);
      this.viewModel.usGallon = +(this.viewModel.volume * 264172052358);
      this.viewModel.ukGallon = +(this.viewModel.volume * 219969248299);
      this.viewModel.cubicKilometer = +this.viewModel.volume;
    }
  }
  fromCubicCentimeter() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 1e6);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 1e15);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 1000);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 28316.8);
      this.viewModel.cubicInch = +(this.viewModel.volume / 16.3871);
      this.viewModel.liter = +(this.viewModel.volume / 1000);
      this.viewModel.milliliter = +this.viewModel.volume;
      this.viewModel.usGallon = +(this.viewModel.volume / 3785.41);
      this.viewModel.ukGallon = +(this.viewModel.volume / 4546.09);
      this.viewModel.cubicCentimeter = +this.viewModel.volume;
    }
  }
  fromCubicMillimeter() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 1e9);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 1e18);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume / 1000);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 28316846.6);
      this.viewModel.cubicInch = +(this.viewModel.volume / 16387.1);
      this.viewModel.liter = +(this.viewModel.volume / 1e6);
      this.viewModel.milliliter = +(this.viewModel.volume / 1e3);
      this.viewModel.usGallon = +(this.viewModel.volume / 3.78541e6);
      this.viewModel.ukGallon = +(this.viewModel.volume / 4.54609e6);
      this.viewModel.cubicMillimeter = +this.viewModel.volume;
    }
  }
  fromCubicFeet() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 35.3147);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 3.531e10);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 28316.8);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 28316846.6);
      this.viewModel.cubicInch = +(this.viewModel.volume * 1728);
      this.viewModel.liter = +(this.viewModel.volume * 28.3168);
      this.viewModel.milliliter = +(this.viewModel.volume * 28316.8);
      this.viewModel.usGallon = +(this.viewModel.volume * 7.48052);
      this.viewModel.ukGallon = +(this.viewModel.volume * 6.22883);
      this.viewModel.cubicFeet = +this.viewModel.volume;
    }
  }
  fromCubicInch() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 61023.7);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 6.102e13);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 16.3871);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 16387.1);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 1728);
      this.viewModel.liter = +(this.viewModel.volume / 61.0237);
      this.viewModel.milliliter = +(this.viewModel.volume * 16.3871);
      this.viewModel.usGallon = +(this.viewModel.volume / 231);
      this.viewModel.ukGallon = +(this.viewModel.volume / 277.42);
      this.viewModel.cubicInch = +this.viewModel.volume;
    }
  }
  fromLiter() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 1000);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 1e12);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 1000);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 1e6);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 28.3168);
      this.viewModel.cubicInch = +(this.viewModel.volume * 61.0237);
      this.viewModel.milliliter = +(this.viewModel.volume * 1000);
      this.viewModel.usGallon = +(this.viewModel.volume / 3.78541);
      this.viewModel.ukGallon = +(this.viewModel.volume / 4.54609);
      this.viewModel.liter = +this.viewModel.volume;
    }
  }
  fromMilliliter() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 1e6);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 1e15);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 1);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 1e3);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 28316.8);
      this.viewModel.cubicInch = +(this.viewModel.volume / 16.3871);
      this.viewModel.liter = +(this.viewModel.volume / 1000);
      this.viewModel.usGallon = +(this.viewModel.volume / 3785.41);
      this.viewModel.ukGallon = +(this.viewModel.volume / 4546.09);
      this.viewModel.milliliter = +this.viewModel.volume;
    }
  }
  fromUSGallon() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 264.172);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 264172051);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 3785.41);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 3.78541e6);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 7.48052);
      this.viewModel.cubicInch = +(this.viewModel.volume * 231);
      this.viewModel.liter = +(this.viewModel.volume * 3.78541);
      this.viewModel.milliliter = +(this.viewModel.volume * 3785.41);
      this.viewModel.ukGallon = +(this.viewModel.volume / 1.201);
      this.viewModel.usGallon = +this.viewModel.volume;
    }
  }
  fromUKGallon() {
    if (this.viewModel.volume != null) {
      this.viewModel.cubicMeter = +(this.viewModel.volume / 219.969);
      this.viewModel.cubicKilometer = +(this.viewModel.volume / 219969157.3);
      this.viewModel.cubicCentimeter = +(this.viewModel.volume * 4546.09);
      this.viewModel.cubicMillimeter = +(this.viewModel.volume * 4.54609e6);
      this.viewModel.cubicFeet = +(this.viewModel.volume / 6.22883);
      this.viewModel.cubicInch = +(this.viewModel.volume * 277.42);
      this.viewModel.liter = +(this.viewModel.volume * 4.54609);
      this.viewModel.milliliter = +(this.viewModel.volume * 4546.09);
      this.viewModel.usGallon = +(this.viewModel.volume * 1.201);
      this.viewModel.ukGallon = +this.viewModel.volume;
    }
  }
  resetValues() {
    this.viewModel.cubicMeter = null;
    this.viewModel.cubicKilometer = null;
    this.viewModel.cubicCentimeter = null;
    this.viewModel.cubicMillimeter = null;
    this.viewModel.cubicFeet = null;
    this.viewModel.cubicInch = null;
    this.viewModel.liter = null;
    this.viewModel.milliliter = null;
    this.viewModel.usGallon = null;
    this.viewModel.ukGallon = null;
    this.viewModel.volume = null;
  }
}
_class = VolumeComponent;
_class.ɵfac = function VolumeComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-volume"]],
  viewQuery: function VolumeComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 88,
  vars: 13,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Volume", "id", "volume", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function VolumeComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Volume Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VolumeComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.volume = $event;
      })("input", function VolumeComponent_Template_input_input_13_listener() {
        return ctx.convertVolume();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function VolumeComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function VolumeComponent_Template_select_change_17_listener() {
        return ctx.convertVolume();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, VolumeComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Cubic Centimeter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Cubic Feet");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Cubic Inch");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Cubic Meter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Cubic Millimeter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Liter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 17)(61, "li", 18)(62, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](64, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](65, "usGallon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](66, "div", 17)(67, "li", 18)(68, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](69);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](70, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](71, "ukGallon");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](72, "div", 17)(73, "li", 18)(74, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](75);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](76, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](77, "Cubic Kilometer");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](78, "div", 17)(79, "li", 18)(80, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](81);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](82, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](83, "Milliliter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](84, "div", 6)(85, "div", 21)(86, "button", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function VolumeComponent_Template_button_click_86_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](87, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.volume);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.volumeUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.cubicCentimeter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.cubicFeet);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.cubicInch);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.cubicMeter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.cubicMillimeter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.liter);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.usGallon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.ukGallon);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.cubicKilometer);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.milliliter);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 8273:
/*!**************************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/weight/weight.component.ts ***!
  \**************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WeightComponent: () => (/* binding */ WeightComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/common-converter.viewmodel */ 4962);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







function WeightComponent_option_17_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r1, " ");
  }
}
class WeightComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_common_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.commonConverterViewModel();
    this.massUnitNames = ["Pounds", "Kilograms", "Grams", "Milligrams", "Micrograms", "Ounces", "Stones", "Ton", "Quintal"
    // Add more unit names as needed
    ];

    this.targetUnit = this.massUnitNames[0];
  }
  // function to convert weight
  convertWeight() {
    if (this.viewModel.weight != null && this.viewModel.weight > 0) {
      if (this.targetUnit === "Kilograms") {
        this.fromKg();
      } else if (this.targetUnit === "Grams") {
        this.fromGrams();
      } else if (this.targetUnit === "Pounds") {
        this.fromPounds();
      } else if (this.targetUnit === "Stones") {
        this.fromStones();
      } else if (this.targetUnit === "Micrograms") {
        this.fromMicrograms();
      } else if (this.targetUnit === "Milligrams") {
        this.fromMilligrams();
      } else if (this.targetUnit === "Ounces") {
        this.fromOunces();
      } else if (this.targetUnit === "Ton") {
        this.fromTon();
      } else if (this.targetUnit === "Quintal") {
        this.fromQuintal();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromKg() {
    if (this.viewModel.weight != null) {
      this.viewModel.grams = +(this.viewModel.weight / 0.001);
      this.viewModel.pounds = +(this.viewModel.weight / 0.45359237);
      this.viewModel.kilograms = +this.viewModel.weight;
      this.viewModel.ounces = +(this.viewModel.weight / 0.0283495);
      this.viewModel.stones = +(this.viewModel.weight / 6.35029);
      this.viewModel.milligrams = +(this.viewModel.weight / 0.000001);
      this.viewModel.micrograms = +(this.viewModel.weight * 1e9);
      this.viewModel.tons = +this.viewModel.weight / 1000;
      this.viewModel.quintal = +this.viewModel.weight / 100;
    }
  }
  fromGrams() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight / 1000);
      this.viewModel.pounds = +(this.viewModel.weight / 453.59237);
      this.viewModel.ounces = +(this.viewModel.weight / 28.3495);
      this.viewModel.stones = +(this.viewModel.weight / 6350.29);
      this.viewModel.milligrams = +(this.viewModel.weight * 1000);
      this.viewModel.micrograms = +(this.viewModel.weight * 1e6);
      this.viewModel.tons = +this.viewModel.weight / 1e6;
      this.viewModel.grams = +this.viewModel.weight;
      this.viewModel.quintal = +this.viewModel.weight / 100000;
    }
  }
  fromOunces() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight / 35.274);
      this.viewModel.pounds = +(this.viewModel.weight / 16);
      this.viewModel.grams = +(this.viewModel.weight / 0.035274);
      this.viewModel.stones = +(this.viewModel.weight / 224);
      this.viewModel.milligrams = +(this.viewModel.weight * 28349.5);
      this.viewModel.micrograms = +(this.viewModel.weight * 28349523.125);
      this.viewModel.tons = +this.viewModel.weight / 35270;
      this.viewModel.quintal = +this.viewModel.weight / 3527;
      this.viewModel.ounces = +this.viewModel.weight;
    }
  }
  fromMicrograms() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight / 1e9);
      this.viewModel.pounds = +(this.viewModel.weight / 4.536e8);
      this.viewModel.ounces = +(this.viewModel.weight / 2.835e7);
      this.viewModel.stones = +(this.viewModel.weight / 6.35e9);
      this.viewModel.grams = +(this.viewModel.weight / 1e6);
      this.viewModel.milligrams = +(this.viewModel.weight / 1e3);
      this.viewModel.tons = +this.viewModel.weight / 1e12;
      this.viewModel.micrograms = +this.viewModel.weight;
      this.viewModel.quintal = +this.viewModel.weight / 1e11;
    }
  }
  fromStones() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight * 6.35029);
      this.viewModel.pounds = +(this.viewModel.weight * 14);
      this.viewModel.ounces = +(this.viewModel.weight * 224);
      this.viewModel.milligrams = +(this.viewModel.weight * 6350293.18);
      this.viewModel.micrograms = +(this.viewModel.weight * 6350293180);
      this.viewModel.grams = +(this.viewModel.weight * 6350.29);
      this.viewModel.tons = +this.viewModel.weight / 157.5;
      this.viewModel.stones = +this.viewModel.weight;
      this.viewModel.quintal = +this.viewModel.weight / 15.747;
    }
  }
  fromMilligrams() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight / 1e6);
      this.viewModel.pounds = +(this.viewModel.weight / 4.53592e5);
      this.viewModel.ounces = +(this.viewModel.weight / 28350);
      this.viewModel.stones = +(this.viewModel.weight / 6.35e6);
      this.viewModel.grams = +(this.viewModel.weight / 1e3);
      this.viewModel.milligrams = +this.viewModel.weight;
      this.viewModel.micrograms = +(this.viewModel.weight * 1000);
      this.viewModel.tons = +this.viewModel.weight / 1e9;
      this.viewModel.quintal = +this.viewModel.weight / 1e8;
    }
  }
  fromPounds() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight * 0.45359237);
      this.viewModel.grams = +(this.viewModel.weight * 453.59237);
      this.viewModel.ounces = +(this.viewModel.weight * 16);
      this.viewModel.stones = +(this.viewModel.weight / 14);
      this.viewModel.milligrams = +(this.viewModel.weight * 453592.37);
      this.viewModel.micrograms = +(this.viewModel.weight * 453592370);
      this.viewModel.tons = +this.viewModel.weight / 2205;
      this.viewModel.pounds = +this.viewModel.weight;
      this.viewModel.quintal = +this.viewModel.weight / 220.5;
    }
  }
  fromTon() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight * 1000);
      this.viewModel.grams = +(this.viewModel.weight * 1e6);
      this.viewModel.ounces = +(this.viewModel.weight * 35270);
      this.viewModel.stones = +(this.viewModel.weight * 157.5);
      this.viewModel.milligrams = +(this.viewModel.weight * 1e9);
      this.viewModel.micrograms = +(this.viewModel.weight * 1e12);
      this.viewModel.pounds = +(this.viewModel.weight * 2205);
      this.viewModel.tons = +this.viewModel.weight;
      this.viewModel.quintal = +this.viewModel.weight * 10;
    }
  }
  fromQuintal() {
    if (this.viewModel.weight != null) {
      this.viewModel.kilograms = +(this.viewModel.weight * 100);
      this.viewModel.grams = +(this.viewModel.weight * 100000);
      this.viewModel.ounces = +(this.viewModel.weight * 3527.4);
      this.viewModel.stones = +(this.viewModel.weight * 15.747);
      this.viewModel.milligrams = +(this.viewModel.weight * 1e8);
      this.viewModel.micrograms = +(this.viewModel.weight * 1e11);
      this.viewModel.pounds = +(this.viewModel.weight * 220.5);
      this.viewModel.tons = +(this.viewModel.weight / 10);
      this.viewModel.quintal = +this.viewModel.weight;
    }
  }
  resetValues() {
    this.viewModel.kilograms = null;
    this.viewModel.grams = null;
    this.viewModel.pounds = null;
    this.viewModel.ounces = null;
    this.viewModel.stones = null;
    this.viewModel.milligrams = null;
    this.viewModel.micrograms = null;
    this.viewModel.weight = null;
    this.viewModel.tons = null;
    this.viewModel.quintal = null;
  }
}
_class = WeightComponent;
_class.ɵfac = function WeightComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-weight"]],
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 81,
  vars: 12,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body", "p-0", "pt-3"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter Weight", "id", "weight", 1, "form-control", 3, "ngModel", "ngModelChange", "input"], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", 3, "ngModel", "ngModelChange", "change"], [3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "squareMeter"], ["for", "squareMeter"], ["id", "tons"], ["for", "tons"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [3, "value"]],
  template: function WeightComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Weight Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WeightComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.weight = $event;
      })("input", function WeightComponent_Template_input_input_13_listener() {
        return ctx.convertWeight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](14, "div", 8)(15, "div", 9)(16, "select", 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WeightComponent_Template_select_ngModelChange_16_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function WeightComponent_Template_select_change_16_listener() {
        return ctx.convertWeight();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](17, WeightComponent_option_17_Template, 2, 2, "option", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](18, "hr", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](19, "div", 6)(20, "div", 14)(21, "ul", 15)(22, "div", 6)(23, "div", 16)(24, "li", 17)(25, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](27, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](28, "kilograms");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](29, "div", 16)(30, "li", 17)(31, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](33, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](34, "Grams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](35, "div", 16)(36, "li", 17)(37, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](38);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](39, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](40, "Pounds");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](41, "div", 16)(42, "li", 17)(43, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](44);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](45, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](46, "Ounces");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](47, "div", 16)(48, "li", 17)(49, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](50);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](51, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](52, "Stones");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](53, "div", 16)(54, "li", 17)(55, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](56);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](57, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](58, "Micrograms");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](59, "div", 16)(60, "li", 17)(61, "span", 18);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](62);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](63, "label", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](64, "Milligrams");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](65, "div", 16)(66, "li", 17)(67, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](68);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](69, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](70, "Metric Ton");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](71, "div", 16)(72, "li", 17)(73, "span", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](74);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](75, "label", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](76, "Quintal");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](77, "div", 6)(78, "div", 22)(79, "button", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WeightComponent_Template_button_click_79_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](80, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.weight);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](3);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.massUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilograms);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.grams);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.pounds);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.ounces);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.stones);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.micrograms);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.milligrams);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.tons);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.quintal);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 1301:
/*!**********************************************************************************!*\
  !*** ./src/app/components/main/end-user/child-components/work/work.component.ts ***!
  \**********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   WorkComponent: () => (/* binding */ WorkComponent)
/* harmony export */ });
/* harmony import */ var src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! src/app/components/base.component */ 121);
/* harmony import */ var src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/models/view/engineering-converter.viewmodel */ 3929);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/core */ 1699);
/* harmony import */ var src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/services/common.service */ 5731);
/* harmony import */ var src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/services/log-handler.service */ 4943);
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common */ 6575);
var _class;







const _c0 = ["input"];
function WorkComponent_option_18_Template(rf, ctx) {
  if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "option", 33);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
  }
  if (rf & 2) {
    const unit_r2 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("value", unit_r2);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate1"](" ", unit_r2, " ");
  }
}
class WorkComponent extends src_app_components_base_component__WEBPACK_IMPORTED_MODULE_0__.BaseComponent {
  constructor(commonService, logService) {
    super(commonService, logService);
    this.viewModel = new src_app_models_view_engineering_converter_viewmodel__WEBPACK_IMPORTED_MODULE_1__.engineeringConverterViewModel();
    this.workUnitNames = ["Joule (J)", "Kilojoule (kJ)", "Calorie (cal)", "Kilocalorie (kcal)", "Erg (erg)", "Watt-hour (Wh)"];
    this.targetUnit = this.workUnitNames[0];
  }
  ngAfterViewInit() {
    // this.input.nativeElement.focus();
  }
  // Function to convert work
  convertWork() {
    if (this.viewModel.work != null && this.viewModel.work > 0) {
      if (this.targetUnit === "Joule (J)") {
        this.fromJoule();
      } else if (this.targetUnit === "Kilojoule (kJ)") {
        this.fromKilojoule();
      } else if (this.targetUnit === "Calorie (cal)") {
        this.fromCalorie();
      } else if (this.targetUnit === "Kilocalorie (kcal)") {
        this.fromKilocalorie();
      } else if (this.targetUnit === "Erg (erg)") {
        this.fromErg();
      } else if (this.targetUnit === "Watt-hour (Wh)") {
        this.fromWattHour();
      } else {
        this.resetValues();
      }
    } else {
      this.resetValues();
    }
  }
  fromJoule() {
    if (this.viewModel.work != null) {
      this.viewModel.kilojoule = +(this.viewModel.work / 1000);
      this.viewModel.calorie = +(this.viewModel.work / 4.184);
      this.viewModel.kilocalorie = +(this.viewModel.work / 4184);
      this.viewModel.erg = +(this.viewModel.work * 1e7);
      this.viewModel.wattHour = +(this.viewModel.work / 3600);
      this.viewModel.joule = +this.viewModel.work;
    }
  }
  fromKilojoule() {
    if (this.viewModel.work != null) {
      this.viewModel.joule = +(this.viewModel.work * 1000);
      this.viewModel.calorie = +(this.viewModel.work * 239.005736);
      this.viewModel.kilocalorie = +this.viewModel.work / 4.184;
      this.viewModel.erg = +(this.viewModel.work * 1e10);
      this.viewModel.wattHour = +(this.viewModel.work / 3.6);
      this.viewModel.kilojoule = +this.viewModel.work;
    }
  }
  fromCalorie() {
    if (this.viewModel.work != null) {
      this.viewModel.joule = +(this.viewModel.work * 4.184);
      this.viewModel.kilojoule = +(this.viewModel.work / 239);
      this.viewModel.kilocalorie = +(this.viewModel.work / 1000);
      this.viewModel.erg = +(this.viewModel.work * 4.184e7);
      this.viewModel.wattHour = +(this.viewModel.work / 860.4);
      this.viewModel.calorie = +this.viewModel.work;
    }
  }
  fromKilocalorie() {
    if (this.viewModel.work != null) {
      this.viewModel.joule = +(this.viewModel.work * 4184);
      this.viewModel.kilojoule = +(this.viewModel.work * 4.184);
      this.viewModel.calorie = +(this.viewModel.work * 1000);
      this.viewModel.erg = +(this.viewModel.work * 4.184e10);
      this.viewModel.wattHour = +(this.viewModel.work * 1.162);
      this.viewModel.kilocalorie = +this.viewModel.work;
    }
  }
  fromErg() {
    if (this.viewModel.work != null) {
      this.viewModel.joule = +(this.viewModel.work / 1e7);
      this.viewModel.kilojoule = +(this.viewModel.work / 1e10);
      this.viewModel.calorie = +(this.viewModel.work / 4.184e7);
      this.viewModel.kilocalorie = +(this.viewModel.work / 4.184e10);
      this.viewModel.wattHour = +(this.viewModel.work / 3.6e10);
      this.viewModel.erg = +this.viewModel.work;
    }
  }
  fromWattHour() {
    if (this.viewModel.work != null) {
      this.viewModel.joule = +(this.viewModel.work * 3600);
      this.viewModel.kilojoule = +(this.viewModel.work * 3.6);
      this.viewModel.calorie = +(this.viewModel.work * 860.42065);
      this.viewModel.kilocalorie = +(this.viewModel.work * 0.86042065);
      this.viewModel.erg = +(this.viewModel.work * 3.6e10);
      this.viewModel.wattHour = +this.viewModel.work;
    }
  }
  resetValues() {
    this.viewModel.joule = null;
    this.viewModel.kilojoule = null;
    this.viewModel.calorie = null;
    this.viewModel.kilocalorie = null;
    this.viewModel.erg = null;
    this.viewModel.wattHour = null;
    this.viewModel.work = null;
  }
}
_class = WorkComponent;
_class.ɵfac = function WorkComponent_Factory(t) {
  return new (t || _class)(_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_common_service__WEBPACK_IMPORTED_MODULE_2__.CommonService), _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdirectiveInject"](src_app_services_log_handler_service__WEBPACK_IMPORTED_MODULE_3__.LogHandlerService));
};
_class.ɵcmp = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵdefineComponent"]({
  type: _class,
  selectors: [["app-work"]],
  viewQuery: function WorkComponent_Query(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵviewQuery"](_c0, 5);
    }
    if (rf & 2) {
      let _t;
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵqueryRefresh"](_t = _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵloadQuery"]()) && (ctx.input = _t.first);
    }
  },
  features: [_angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵInheritDefinitionFeature"]],
  decls: 64,
  vars: 9,
  consts: [[1, "container-fluid"], [1, "row", "d-flex", "justify-content-center"], [1, "col-12", "col-md-12", "col-sm-12", "text-center"], [1, "card", "calculator-card"], [1, "card-head", "pt-1"], [1, "card-body"], [1, "row"], [1, "col-12"], [1, "col-6", "pb-2"], [1, "form-group"], ["type", "number", "name", "inputName", "placeholder", "Enter work", "id", "work", 1, "form-control", "top-input", 3, "ngModel", "ngModelChange", "input"], ["input", ""], ["aria-label", "Default select example", "id", "targetUnit", 1, "form-select", "top-input", 3, "ngModel", "ngModelChange", "change"], ["class", "dropdown-item", 3, "value", 4, "ngFor", "ngForOf"], [1, "m-2"], [1, "col-lg-12", "col-md-12", "col-sm-12", "pb-1"], [1, "list-group"], [1, "col-lg-6"], [1, "list-group-item"], ["id", "joule"], ["for", "joule"], ["id", "kilojoule"], ["for", "kilojoule"], ["id", "calorie"], ["for", "calorie"], ["id", "kilocalorie"], ["for", "kilocalorie"], ["id", "erg"], ["for", "erg"], ["id", "wattHour"], ["for", "wattHour"], [1, "col-lg-12", "col-md-12", "col-sm-12", "text-end"], [1, "btn", "btn-success", "m-1", 3, "click"], [1, "dropdown-item", 3, "value"]],
  template: function WorkComponent_Template(rf, ctx) {
    if (rf & 1) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](0, "div", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "h6");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](6, "Work Converter");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](7, "div", 5)(8, "div", 6)(9, "div", 7)(10, "div", 6)(11, "div", 8)(12, "div", 9)(13, "input", 10, 11);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkComponent_Template_input_ngModelChange_13_listener($event) {
        return ctx.viewModel.work = $event;
      })("input", function WorkComponent_Template_input_input_13_listener() {
        return ctx.convertWork();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](15, "div", 8)(16, "div", 9)(17, "select", 12);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("ngModelChange", function WorkComponent_Template_select_ngModelChange_17_listener($event) {
        return ctx.targetUnit = $event;
      })("change", function WorkComponent_Template_select_change_17_listener() {
        return ctx.convertWork();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtemplate"](18, WorkComponent_option_18_Template, 2, 2, "option", 13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelement"](19, "hr", 14);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](20, "div", 6)(21, "div", 15)(22, "ul", 16)(23, "div", 6)(24, "div", 17)(25, "li", 18)(26, "span", 19);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](28, "label", 20);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](29, "Joules");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](30, "div", 17)(31, "li", 18)(32, "span", 21);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](33);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](34, "label", 22);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](35, "Kilojoules");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](36, "div", 17)(37, "li", 18)(38, "span", 23);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](39);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](40, "label", 24);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](41, "Calories");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](42, "div", 17)(43, "li", 18)(44, "span", 25);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](45);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](46, "label", 26);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](47, "Kilocalories");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](48, "div", 17)(49, "li", 18)(50, "span", 27);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](51);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](52, "label", 28);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](53, "Ergs");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](54, "div", 17)(55, "li", 18)(56, "span", 29);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](57);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](58, "label", 30);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](59, "Watt-hours");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()();
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementStart"](60, "div", 6)(61, "div", 31)(62, "button", 32);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵlistener"]("click", function WorkComponent_Template_button_click_62_listener() {
        return ctx.resetValues();
      });
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtext"](63, " Clear ");
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵelementEnd"]()()()()()()()();
    }
    if (rf & 2) {
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](13);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.viewModel.work);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](4);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngModel", ctx.targetUnit);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](1);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵproperty"]("ngForOf", ctx.workUnitNames);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](9);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.joule);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilojoule);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.calorie);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.kilocalorie);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.erg);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵadvance"](6);
      _angular_core__WEBPACK_IMPORTED_MODULE_4__["ɵɵtextInterpolate"](ctx.viewModel.wattHour);
    }
  },
  dependencies: [_angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgSelectOption, _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵNgSelectMultipleOption"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__.DefaultValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NumberValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.SelectControlValueAccessor, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgControlStatus, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.NgModel, _angular_common__WEBPACK_IMPORTED_MODULE_6__.NgForOf],
  styles: ["/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsInNvdXJjZVJvb3QiOiIifQ== */"]
});

/***/ }),

/***/ 3882:
/*!**************************************************!*\
  !*** ./src/app/models/internal/common-models.ts ***!
  \**************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AllConverters: () => (/* binding */ AllConverters)
/* harmony export */ });
class AllConverters {
  constructor() {
    this.commonConverters = [{
      router: "/time",
      imgSrc: "assets/images/time.png",
      title: "Time",
      isFavorite: false,
      searchArrayFromConverters: ["Time", "Seconds", "Minutes", "Hours", "Days", "Weeks", "Months", "Years", "Decades"]
    }, {
      router: "/weight",
      imgSrc: "assets/images/weighing-machine.png",
      title: "Weight",
      isFavorite: false,
      searchArrayFromConverters: ["Weight", "Pounds", "Kilograms", "Grams", "Milligrams", "Micrograms", "Ounces", "Stones", "Ton", "Quintal"
      // Add more unit names as needed
      ]
    }, {
      router: "/area",
      imgSrc: "assets/images/area-graph.png",
      title: "Area",
      isFavorite: false,
      searchArrayFromConverters: ["Area", "Square meters", "Square kilometers", "Square feet", "Acres", "Hectares", "Square Mile", "Square Yard"]
    }, {
      router: "/speed",
      imgSrc: "assets/images/speedometer.png",
      title: "Speed",
      isFavorite: false,
      searchArrayFromConverters: ["Speed", "Meters per second", "Kilometers per hour", "Miles per hour", "Feet per second", "Knots", "Kilometer per second"]
    }, {
      router: "/length",
      imgSrc: "assets/images/measuring-tape.png",
      title: "Length",
      isFavorite: false,
      searchArrayFromConverters: ["Length", "Meters", "Kilometers", "Centimeters", "Millimeters", "Micrometers", "Nanometers", "Inches", "Feet", "Yards", "Miles"]
    }, {
      router: "/temprature",
      imgSrc: "assets/images/temprature.png",
      title: "Temprature",
      isFavorite: false,
      searchArrayFromConverters: ["Temprature", "Celcius", "Farenheit", "Kelvin"]
    }, {
      router: "/volume",
      imgSrc: "assets/images/volume.png",
      title: "Volume",
      isFavorite: false,
      searchArrayFromConverters: ["Volume", "Cubic meters", "Cubic kilometers", "Cubic centimeters", "Cubic millimeters", "Cubic feet", "Cubic inches", "Liters", "Milliliters", "Gallons", "Gallons"]
    }, {
      router: "/frequency",
      imgSrc: "assets/images/frequency.png",
      title: "Frequency",
      isFavorite: false,
      searchArrayFromConverters: ["Frequency", "Hertz", "Kilohertz", "Megahertz", "Gigahertz"]
    }];
    this.engineeringConverters = [{
      router: "/power",
      imgSrc: "assets/images/power.png",
      title: "Power",
      searchArrayFromConverters: ["Power", "Watt", "Kilowatt", "Horsepower", "Calorie per second", "BTU per hour", "Erg per second"],
      isFavorite: false
    }, {
      router: "/force",
      imgSrc: "assets/images/force.png",
      title: "Force",
      searchArrayFromConverters: ["Force", "Newton", "Kilogram-force", "Dyne", "Pound-force"],
      isFavorite: false
    }, {
      router: "/work",
      imgSrc: "assets/images/work.png",
      title: "Work/Energy",
      searchArrayFromConverters: ["Energy", "Work", "Joule", "Kilojoule", "Calorie", "Kilocalorie", "Erg", "Watt-hour"],
      isFavorite: false
    }, {
      router: "/pressure",
      imgSrc: "assets/images/pressure.png",
      title: "Pressure",
      searchArrayFromConverters: ["Pressure", "Pascal", "Kilopascal", "Bar", "Atmosphere", "Pound per Square Inch", "Torr"],
      isFavorite: false
    }, {
      router: "/current",
      imgSrc: "assets/images/current.png",
      title: "Current",
      searchArrayFromConverters: ["Current", "Ampere", "Milliampere", "Microampere", "Kiloampere", "Megaampere"],
      isFavorite: false
    }, {
      router: "/planeangle",
      imgSrc: "assets/images/planeangle.png",
      title: "Plane Angle",
      searchArrayFromConverters: ["Plane Angle", "Degree", "Radian", "Gradian", "Minute of Arc", "Second of Arc"],
      isFavorite: false
    }];
    /////////////////////////// ohter convertsers start from here
    this.otherConverters = [{
      router: "/cooking",
      imgSrc: "assets/images/cooking.png",
      title: "Cooking",
      searchArrayFromConverters: ["cooking", "Cup", "Teaspoon", "Tablespoon", "Fluid Ounce", "Pint", "Quart"],
      isFavorite: false
    }, {
      router: "/fuelefficiency",
      imgSrc: "assets/images/fuelefficiency.png",
      title: "Fuel Efficiency",
      searchArrayFromConverters: ["fuel", "fuelefficiency", "Miles per Gallon", "Kilometers per Liter", "Liters per 100 Kilometers", "Miles per Liter", "Gallons per 100 Miles"],
      isFavorite: false
    }, {
      router: "/storage",
      imgSrc: "assets/images/storage.png",
      title: "Computer Data",
      searchArrayFromConverters: ["Computer Data", "storage", "Bit", "Byte", "Kilobit (Kb)", "Kilobyte (KB)", "Megabit (Mb)", "Megabyte (MB)", "Gigabit (Gb)", "Gigabyte (GB)", "Terabit (Tb)", "Terabyte (TB)", "Petabit (Pb)", "Petabyte (PB)", "Exabit (Eb)", "Exabyte (EB)"],
      isFavorite: false
    }];
  }
}

/***/ }),

/***/ 4962:
/*!***********************************************************!*\
  !*** ./src/app/models/view/common-converter.viewmodel.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   commonConverterViewModel: () => (/* binding */ commonConverterViewModel)
/* harmony export */ });
class commonConverterViewModel {
  constructor() {
    this.PageTitle = "";
    this.title = "";
    this.sno = 0;
    this.receivedSearchValue = "";
    this.filteredCommonConverters = [];
    this.area = null;
    this.targetUnit = "";
    this.squareMeter = null;
    this.squareKM = null;
    this.squareFeet = null;
    this.acre = null;
    this.hectare = null;
    this.squareMile = null;
    this.squareYard = null;
    this.imgSrc = "";
    this.searchArrayFromCommonConverters = [];
    this.isSelected = false;
  }
}

/***/ }),

/***/ 3929:
/*!****************************************************************!*\
  !*** ./src/app/models/view/engineering-converter.viewmodel.ts ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   engineeringConverterViewModel: () => (/* binding */ engineeringConverterViewModel)
/* harmony export */ });
class engineeringConverterViewModel {
  constructor() {
    this.PageTitle = "";
    this.receivedSearchValue = "";
    this.filteredEngineeringConverters = [];
    this.localStorageItems = [];
    this.filteredCommonConverters = [];
    this.isSelected = false;
  }
}

/***/ }),

/***/ 4792:
/*!*************************************************!*\
  !*** ./src/app/models/view/others.viewmodel.ts ***!
  \*************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   othersViewModel: () => (/* binding */ othersViewModel)
/* harmony export */ });
class othersViewModel {
  constructor() {
    this.filteredOtherConverters = [];
  }
}

/***/ }),

/***/ 4063:
/*!***********************************************!*\
  !*** ./src/app/services/converter.service.ts ***!
  \***********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   ConverterService: () => (/* binding */ ConverterService)
/* harmony export */ });
/* harmony import */ var _base_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./base.service */ 7506);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;


class ConverterService extends _base_service__WEBPACK_IMPORTED_MODULE_0__.BaseService {
  constructor() {
    super();
  }
  ngOnInit() {}
}
_class = ConverterService;
_class.ɵfac = function ConverterService_Factory(t) {
  return new (t || _class)();
};
_class.ɵprov = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({
  token: _class,
  factory: _class.ɵfac,
  providedIn: "root"
});

/***/ }),

/***/ 3609:
/*!**********************************!*\
  !*** ./src/app/shared.module.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   SharedModule: () => (/* binding */ SharedModule)
/* harmony export */ });
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/forms */ 8849);
/* harmony import */ var _components_main_end_user_child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/main/end-user/child-components/weight/weight.component */ 8273);
/* harmony import */ var _components_main_end_user_child_components_area_area_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/main/end-user/child-components/area/area.component */ 7845);
/* harmony import */ var _components_main_end_user_child_components_length_length_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/main/end-user/child-components/length/length.component */ 1472);
/* harmony import */ var _components_main_end_user_child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/main/end-user/child-components/speed/speed.component */ 8797);
/* harmony import */ var _components_main_end_user_child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/main/end-user/child-components/temperature/temperature.component */ 9119);
/* harmony import */ var _components_main_end_user_child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/main/end-user/child-components/volume/volume.component */ 2703);
/* harmony import */ var _components_main_end_user_child_components_force_force_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/main/end-user/child-components/force/force.component */ 7478);
/* harmony import */ var _components_main_end_user_child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/main/end-user/child-components/pressure/pressure.component */ 5305);
/* harmony import */ var _components_main_end_user_child_components_work_work_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/main/end-user/child-components/work/work.component */ 1301);
/* harmony import */ var _components_main_end_user_child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/main/end-user/child-components/planeangle/planeangle.component */ 2512);
/* harmony import */ var _components_main_end_user_child_components_power_power_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/main/end-user/child-components/power/power.component */ 7108);
/* harmony import */ var _components_main_end_user_child_components_current_current_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/main/end-user/child-components/current/current.component */ 3519);
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/common */ 6575);
/* harmony import */ var _components_main_end_user_child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/main/end-user/child-components/time/time.component */ 1987);
/* harmony import */ var _components_main_end_user_child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/main/end-user/child-components/frequency/frequency.component */ 7229);
/* harmony import */ var _components_main_end_user_child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/main/end-user/child-components/cooking/cooking.component */ 4344);
/* harmony import */ var _components_main_end_user_child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/main/end-user/child-components/fuel/fuel.component */ 5673);
/* harmony import */ var _components_main_end_user_child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/main/end-user/child-components/storage/storage.component */ 4082);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/core */ 1699);
var _class;




















class SharedModule {}
_class = SharedModule;
_class.ɵfac = function SharedModule_Factory(t) {
  return new (t || _class)();
};
_class.ɵmod = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineNgModule"]({
  type: _class
});
_class.ɵinj = /*@__PURE__*/_angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵdefineInjector"]({
  imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule]
});
(function () {
  (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_17__["ɵɵsetNgModuleScope"](SharedModule, {
    declarations: [_components_main_end_user_child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_0__.WeightComponent, _components_main_end_user_child_components_area_area_component__WEBPACK_IMPORTED_MODULE_1__.AreaComponent, _components_main_end_user_child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__.SpeedComponent, _components_main_end_user_child_components_length_length_component__WEBPACK_IMPORTED_MODULE_2__.LengthComponent, _components_main_end_user_child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_5__.VolumeComponent, _components_main_end_user_child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_4__.TemperatureComponent, _components_main_end_user_child_components_force_force_component__WEBPACK_IMPORTED_MODULE_6__.ForceComponent, _components_main_end_user_child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_7__.PressureComponent, _components_main_end_user_child_components_work_work_component__WEBPACK_IMPORTED_MODULE_8__.WorkComponent, _components_main_end_user_child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_9__.PlaneAngleComponent, _components_main_end_user_child_components_power_power_component__WEBPACK_IMPORTED_MODULE_10__.PowerComponent, _components_main_end_user_child_components_current_current_component__WEBPACK_IMPORTED_MODULE_11__.CurrentComponent, _components_main_end_user_child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__.TimeComponent, _components_main_end_user_child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_13__.FrequencyComponent, _components_main_end_user_child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_14__.CookingComponent, _components_main_end_user_child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_15__.FuelComponent, _components_main_end_user_child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_16__.StorageComponent],
    imports: [_angular_forms__WEBPACK_IMPORTED_MODULE_18__.FormsModule, _angular_common__WEBPACK_IMPORTED_MODULE_19__.CommonModule],
    exports: [_components_main_end_user_child_components_frequency_frequency_component__WEBPACK_IMPORTED_MODULE_13__.FrequencyComponent, _components_main_end_user_child_components_weight_weight_component__WEBPACK_IMPORTED_MODULE_0__.WeightComponent, _components_main_end_user_child_components_time_time_component__WEBPACK_IMPORTED_MODULE_12__.TimeComponent, _components_main_end_user_child_components_area_area_component__WEBPACK_IMPORTED_MODULE_1__.AreaComponent, _components_main_end_user_child_components_speed_speed_component__WEBPACK_IMPORTED_MODULE_3__.SpeedComponent, _components_main_end_user_child_components_length_length_component__WEBPACK_IMPORTED_MODULE_2__.LengthComponent, _components_main_end_user_child_components_volume_volume_component__WEBPACK_IMPORTED_MODULE_5__.VolumeComponent, _components_main_end_user_child_components_temperature_temperature_component__WEBPACK_IMPORTED_MODULE_4__.TemperatureComponent, _components_main_end_user_child_components_force_force_component__WEBPACK_IMPORTED_MODULE_6__.ForceComponent, _components_main_end_user_child_components_pressure_pressure_component__WEBPACK_IMPORTED_MODULE_7__.PressureComponent, _components_main_end_user_child_components_work_work_component__WEBPACK_IMPORTED_MODULE_8__.WorkComponent, _components_main_end_user_child_components_planeangle_planeangle_component__WEBPACK_IMPORTED_MODULE_9__.PlaneAngleComponent, _components_main_end_user_child_components_power_power_component__WEBPACK_IMPORTED_MODULE_10__.PowerComponent, _components_main_end_user_child_components_current_current_component__WEBPACK_IMPORTED_MODULE_11__.CurrentComponent, _components_main_end_user_child_components_cooking_cooking_component__WEBPACK_IMPORTED_MODULE_14__.CookingComponent, _components_main_end_user_child_components_fuel_fuel_component__WEBPACK_IMPORTED_MODULE_15__.FuelComponent, _components_main_end_user_child_components_storage_storage_component__WEBPACK_IMPORTED_MODULE_16__.StorageComponent]
  });
})();

/***/ })

}]);
//# sourceMappingURL=default-src_app_models_internal_common-models_ts-src_app_services_converter_service_ts-src_ap-638cbb.js.map