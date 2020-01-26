(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".erro {\r\n    border-color:red;\r\n}\r\n\r\n.sucesso {\r\n    border-color:green;\r\n}\r\n\r\n.btn-success:disabled{\r\n    cursor:not-allowed;\r\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\r\n  <div class=\"row\">\r\n\r\n    <form novalidate #form=\"ngForm\" class=\"mt-5 col-12 col-sm-10 col-md-5 col-lg-4 mx-auto\">\r\n      <h1 class=\"text-center mb-5\">Cadastro</h1>\r\n\r\n      <app-validator>\r\n        <label for=\"nome\">Nome</label>\r\n        <input ngModel id=\"nome\" name=\"nome\" class=\"form-control\" required pattern=\"[a-zA-Z].{1,}\">\r\n      </app-validator>\r\n\r\n      <app-validator>\r\n        <label for=\"cpf\">CPF</label>\r\n        <input ngModel id=\"cpf\" name=\"cpf\" class=\"form-control\" pattern=\"[0-9]{11}\" required minlength=\"11\"\r\n          maxlength=\"11\">\r\n      </app-validator>\r\n\r\n      <app-validator>\r\n        <label for=\"rg\">RG</label>\r\n        <input ngModel id=\"rg\" name=\"rg\" class=\"form-control\" required minlength=\"7\" maxlength=\"12\">\r\n      </app-validator>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"dtnascimento\">Data de nascimento</label>\r\n        <div class=\"input-group\">\r\n\r\n          <input #dtnascimento=\"ngModel\" ngModel hidden (ngModelChange)=\"onDateSelect($event)\" class=\"form-control\"\r\n            id=\"dtnascimento\" placeholder=\"dd-mm-aaaa\" name=\"dp\" [(ngModel)]=\"selectedDate\" getDayAriaLabel\r\n            ngbDatepicker #d=\"ngbDatepicker\" (select)=\"onDateSelect($event)\" [maxDate]=\"maxDate\" [minDate]=\"minDate\"\r\n            required>\r\n\r\n          <span class=\"form-control\">{{dateFormat}}</span>\r\n\r\n          <div class=\"input-group-append\">\r\n            <button class=\"btn btn-outline-secondary calendar\" (click)=\"d.toggle()\" type=\"button\">\r\n              <i class=\"fa fa-calendar\"></i>\r\n            </button>\r\n          </div>\r\n        </div>\r\n        <app-valid-validator *ngIf=\"dtnascimento.valid && (dtnascimento.dirty || dtnascimento.touched)\">\r\n        </app-valid-validator>\r\n      </div>\r\n\r\n      <div class=\"form-group col-12 col-sm-12\">\r\n        <div class=\"row mb-2\">\r\n          Gênero\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-12\">\r\n          <input name=\"genero\" type=\"radio\" class=\"form-check-input\" id=\"generom\" value=\"m\" required />\r\n          <label for=\"generom\">Masculino</label>\r\n        </div>\r\n\r\n        <div class=\"col-12 col-sm-12\">\r\n          <input name=\"genero\" type=\"radio\" class=\"form-check-input\" id=\"generof\" value=\"f\" required />\r\n          <label for=\"generof\">Feminino</label>\r\n        </div>\r\n      </div>\r\n\r\n      <div class=\"form-group\">\r\n        <label for=\"estado\">Estado</label>\r\n\r\n        <select #estado=\"ngModel\" ngModel name=\"estado\" class=\"form-control\" id=\"estado\" required>\r\n          <option value=\"\">Selecione</option>\r\n          <option value=\"São Paulo\">São Paulo</option>\r\n          <option value=\"Outro\">Outro</option>\r\n        </select>\r\n\r\n        <app-invalid-validator *ngIf=\"!estado.valid && (estado.dirty || estado.touched)\"></app-invalid-validator>\r\n        <app-valid-validator *ngIf=\"estado.valid && (estado.dirty || estado.touched)\"></app-valid-validator>\r\n      </div>\r\n\r\n      <button [disabled]=\"!form.valid\" class=\"btn btn-success col-12 col-sm-12 mt-5 mb-5\"\r\n        type=\"submit\">Cadastrar</button>\r\n    </form>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: I18n, CustomDatepickerI18n, AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "I18n", function() { return I18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CustomDatepickerI18n", function() { return CustomDatepickerI18n; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
var __extends = (undefined && undefined.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var I18N_VALUES = {
    'pt': {
        weekdays: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'],
        months: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'],
    }
};
var I18n = /** @class */ (function () {
    function I18n() {
        this.language = 'pt';
    }
    I18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], I18n);
    return I18n;
}());

var CustomDatepickerI18n = /** @class */ (function (_super) {
    __extends(CustomDatepickerI18n, _super);
    function CustomDatepickerI18n(_i18n) {
        var _this = _super.call(this) || this;
        _this._i18n = _i18n;
        return _this;
    }
    CustomDatepickerI18n.prototype.getWeekdayShortName = function (weekday) {
        return I18N_VALUES[this._i18n.language].weekdays[weekday - 1];
    };
    CustomDatepickerI18n.prototype.getMonthShortName = function (month) {
        return I18N_VALUES[this._i18n.language].months[month - 1];
    };
    CustomDatepickerI18n.prototype.getMonthFullName = function (month) {
        return this.getMonthShortName(month);
    };
    CustomDatepickerI18n.prototype.getDayAriaLabel = function (date) {
        return date.day + "-" + date.month + "-" + date.year;
    };
    CustomDatepickerI18n = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [I18n])
    ], CustomDatepickerI18n);
    return CustomDatepickerI18n;
}(_ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"]));

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.minDate = { day: 1, month: 1, year: (new Date().getFullYear() - 130) };
        this.maxDate = { day: 1, month: 1, year: (new Date().getFullYear() - 10) };
    }
    AppComponent.prototype.onDateSelect = function (event) {
        var day = String(event.day);
        var month = String(event.month);
        if (day.length == 1) {
            day = "0" + day;
        }
        if (month.length == 1) {
            month = "0" + month;
        }
        this.dateFormat = day + "/" + month + "/" + event.year;
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            providers: [I18n, { provide: _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_1__["NgbDatepickerI18n"], useClass: CustomDatepickerI18n }],
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _valid_validator_valid_validator_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./valid-validator/valid-validator.component */ "./src/app/valid-validator/valid-validator.component.ts");
/* harmony import */ var _invalid_validator_invalid_validator_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./invalid-validator/invalid-validator.component */ "./src/app/invalid-validator/invalid-validator.component.ts");
/* harmony import */ var _validator_validator_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./validator/validator.component */ "./src/app/validator/validator.component.ts");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! angular2-text-mask */ "./node_modules/angular2-text-mask/dist/angular2TextMask.js");
/* harmony import */ var angular2_text_mask__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};









var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _valid_validator_valid_validator_component__WEBPACK_IMPORTED_MODULE_5__["ValidValidatorComponent"],
                _invalid_validator_invalid_validator_component__WEBPACK_IMPORTED_MODULE_6__["InvalidValidatorComponent"],
                _validator_validator_component__WEBPACK_IMPORTED_MODULE_7__["ValidatorComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                angular2_text_mask__WEBPACK_IMPORTED_MODULE_8__["TextMaskModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/invalid-validator/invalid-validator.component.css":
/*!*******************************************************************!*\
  !*** ./src/app/invalid-validator/invalid-validator.component.css ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".invalido{\r\n    color:red;\r\n}"

/***/ }),

/***/ "./src/app/invalid-validator/invalid-validator.component.html":
/*!********************************************************************!*\
  !*** ./src/app/invalid-validator/invalid-validator.component.html ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"invalido col-12 col-sm-12 mt-2 mb-3\">\r\n  <div class=\"row\">\r\n    <i class=\"fa fa-times mr-2\"></i>\r\n    <strong class=\"\">Inválido</strong>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/invalid-validator/invalid-validator.component.ts":
/*!******************************************************************!*\
  !*** ./src/app/invalid-validator/invalid-validator.component.ts ***!
  \******************************************************************/
/*! exports provided: InvalidValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "InvalidValidatorComponent", function() { return InvalidValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var InvalidValidatorComponent = /** @class */ (function () {
    function InvalidValidatorComponent() {
    }
    InvalidValidatorComponent.prototype.ngOnInit = function () {
    };
    InvalidValidatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-invalid-validator',
            template: __webpack_require__(/*! ./invalid-validator.component.html */ "./src/app/invalid-validator/invalid-validator.component.html"),
            styles: [__webpack_require__(/*! ./invalid-validator.component.css */ "./src/app/invalid-validator/invalid-validator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], InvalidValidatorComponent);
    return InvalidValidatorComponent;
}());



/***/ }),

/***/ "./src/app/valid-validator/valid-validator.component.css":
/*!***************************************************************!*\
  !*** ./src/app/valid-validator/valid-validator.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".valido{\r\n    color:green;\r\n}\r\n"

/***/ }),

/***/ "./src/app/valid-validator/valid-validator.component.html":
/*!****************************************************************!*\
  !*** ./src/app/valid-validator/valid-validator.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"valido col-12 col-sm-12 mt-2 mb-3\">\r\n  <div class=\"row\">\r\n    <i class=\"fa fa-check mr-2\"></i>\r\n    <strong class=\"\">Ok</strong>\r\n  </div>\r\n</div>"

/***/ }),

/***/ "./src/app/valid-validator/valid-validator.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/valid-validator/valid-validator.component.ts ***!
  \**************************************************************/
/*! exports provided: ValidValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidValidatorComponent", function() { return ValidValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ValidValidatorComponent = /** @class */ (function () {
    function ValidValidatorComponent() {
    }
    ValidValidatorComponent.prototype.ngOnInit = function () {
    };
    ValidValidatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-valid-validator',
            template: __webpack_require__(/*! ./valid-validator.component.html */ "./src/app/valid-validator/valid-validator.component.html"),
            styles: [__webpack_require__(/*! ./valid-validator.component.css */ "./src/app/valid-validator/valid-validator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidValidatorComponent);
    return ValidValidatorComponent;
}());



/***/ }),

/***/ "./src/app/validator/validator.component.css":
/*!***************************************************!*\
  !*** ./src/app/validator/validator.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/validator/validator.component.html":
/*!****************************************************!*\
  !*** ./src/app/validator/validator.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"form-group\" [class.erro]=\"!input.valid && (input.dirty || input.touched)\" [class.sucesso]=\"input.valid && (input.dirty || input.touched)\">\r\n  <ng-content></ng-content>\r\n  <app-invalid-validator *ngIf=\"!input.valid && (input.dirty || input.touched)\"></app-invalid-validator>\r\n  <app-valid-validator *ngIf=\"input.valid && (input.dirty || input.touched)\"></app-valid-validator>\r\n</div>"

/***/ }),

/***/ "./src/app/validator/validator.component.ts":
/*!**************************************************!*\
  !*** ./src/app/validator/validator.component.ts ***!
  \**************************************************/
/*! exports provided: ValidatorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ValidatorComponent", function() { return ValidatorComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ValidatorComponent = /** @class */ (function () {
    function ValidatorComponent() {
    }
    ValidatorComponent.prototype.ngOnInit = function () {
    };
    ValidatorComponent.prototype.ngAfterContentInit = function () {
        this.input = this.model;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ValidatorComponent.prototype, "input", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ContentChild"])(_angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"]),
        __metadata("design:type", _angular_forms__WEBPACK_IMPORTED_MODULE_1__["NgModel"])
    ], ValidatorComponent.prototype, "model", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ValidatorComponent.prototype, "label", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ValidatorComponent.prototype, "id", void 0);
    ValidatorComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-validator',
            template: __webpack_require__(/*! ./validator.component.html */ "./src/app/validator/validator.component.html"),
            styles: [__webpack_require__(/*! ./validator.component.css */ "./src/app/validator/validator.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ValidatorComponent);
    return ValidatorComponent;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\angular\18-09-2018-validacao-formulario-ngmodel-angular6-git-io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map