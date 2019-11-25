(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-find/add-find.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/add-find/add-find.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n           \n            <a (click)=\"goConsultion()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\">supervised_user_circle</mat-icon> <span>Consultation</span>\n            </a>\n            <a (click)=\"gofinedetails()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"description icon\">description icon</mat-icon> <span>Invoice</span>\n            </a>\n            \n            \n        </div> <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n    </div>\n    <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"75%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n                <div class=\"form_container mat-elevation-z5\">\n                    <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                        <h2 class=\"qc_heading\"> Add Patient</h2>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"2\" rowHeight=\"80px\" gutterSize=\"15px\">\n                            <mat-grid-tile>\n                                    <mat-form-field appearance=\"outline\">\n                                        <mat-label>Patient Name</mat-label>\n                                        <input matInput placeholder=\"Patient Name\">\n                                        \n                                    </mat-form-field>\n                                </mat-grid-tile>\n                                <mat-grid-tile> \n                                <mat-form-field appearance=\"outline\">\n                                        <mat-label>Village</mat-label>\n                                        <input matInput placeholder=\"Village\">\n                                        \n                                    </mat-form-field>\n                                    </mat-grid-tile>\n                        \n                    </mat-grid-list>\n                    <mat-grid-list cols=\"2\" rowHeight=\"80px\" gutterSize=\"15px\">\n                            <mat-grid-tile>\n                                    <mat-form-field appearance=\"outline\">\n                                        <mat-label>Patient Phone</mat-label>\n                                        <input matInput placeholder=\"Patient Phone\">\n                                        \n                                    </mat-form-field>\n                                </mat-grid-tile>\n                        <mat-grid-tile>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Patient Email</mat-label>\n                                <input matInput placeholder=\"Patient Email\">\n                                \n                            </mat-form-field>\n                        </mat-grid-tile>\n                       \n                    </mat-grid-list>\n                    <mat-grid-list cols=\"3\" rowHeight=\"80px\" gutterSize=\"15px\">\n                            <mat-grid-tile >\n                                    <mat-form-field appearance=\"outline\">\n  <input matInput [matDatepicker]=\"dp\" placeholder=\"Year of Birth\" [formControl]=\"date\">\n  <mat-datepicker-toggle matSuffix [for]=\"dp\"></mat-datepicker-toggle>\n  <mat-datepicker #dp\n                  startView=\"multi-year\"\n                  (yearSelected)=\"chosenYearHandler($event)\"\n                  (monthSelected)=\"chosenMonthHandler($event, dp)\"\n                  panelClass=\"example-month-picker\">\n  </mat-datepicker>\n</mat-form-field>\n                            </mat-grid-tile>\n                        <mat-grid-tile>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-select placeholder=\"Gender\">\n                                    <mat-option>-- None --</mat-option>\n                                    <mat-option value=\"option\">Male</mat-option>\n                                    <mat-option value=\"option\">Female</mat-option>\n                                </mat-select>\n                            </mat-form-field>\n                        </mat-grid-tile>\n                        <mat-grid-tile>\n                                <mat-form-field appearance=\"outline\">\n                                    <mat-select placeholder=\"Weight\">\n                                        <mat-option>-- None --</mat-option>\n                                        <mat-option value=\"option\">10 - 20</mat-option>\n                                        <mat-option value=\"option\">20 - 30</mat-option>\n                                        <mat-option value=\"option\">30 - 40</mat-option>\n                                        <mat-option value=\"option\">40 - 50</mat-option>\n                                        <mat-option value=\"option\">50 - 60</mat-option>\n                                        <mat-option value=\"option\">60 - 70</mat-option>\n                                        <mat-option value=\"option\">70 - 80</mat-option>\n                                        <mat-option value=\"option\">80 - 90</mat-option>\n                                        <mat-option value=\"option\">90 - 100</mat-option>\n                                    </mat-select>\n                                </mat-form-field>\n                            </mat-grid-tile>\n                       \n                    </mat-grid-list>\n\n                    <mat-grid-list cols=\"2\" rowHeight=\"80px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                                <mat-form-field appearance=\"outline\">\n                                        <mat-select placeholder=\"Health Issue\" [formControl]=\"toppings\" multiple>\n                                          <mat-option *ngFor=\"let topping of toppingList\" [value]=\"topping\">{{topping}}</mat-option>\n                                        </mat-select>\n                                      </mat-form-field>\n                        </mat-grid-tile>\n                        <mat-grid-tile class=\"qc_left\">\n                                \n                            <!-- <button mat-flat-button color=\"primary\">Add</button>   -->\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"1\" rowHeight=\"100px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                            <mat-form-field appearance=\"outline\">\n                                <textarea matInput placeholder=\"Patient health issues\n                                                    \"></textarea>\n                            </mat-form-field>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                   \n                    <mat-grid-list cols=\"1\" rowHeight=\"60px\" gutterSize=\"15px\">\n                        <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mt-5\">\n                            <button mat-flat-button color=\"primary\" (click)=\"goreviewdet()\">Save</button>\n                        </div>\n                    </mat-grid-list>\n                   \n                   \n                </div>\n            </div>\n        </div>\n    </div>\n    \n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<router-outlet></router-outlet>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/billinvoice/billinvoice.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/billinvoice/billinvoice.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <a (click)=\"goConsultion()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\">supervised_user_circle</mat-icon> <span>Consultation</span>\n            </a>\n            <a (click)=\"gofinedetails()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"description icon icon\">description icon</mat-icon> <span>Invoice</span>\n            </a>\n        </div> <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n    </div>\n    <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"65%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n                <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                    <mat-grid-tile>\n                        <h2 class=\"qc_heading\">Bill Invoice</h2>\n                    </mat-grid-tile>\n                </mat-grid-list>\n                <mat-card class=\"qc_invoice-bill mat-elevation-z8\">\n                    <mat-card-header>\n                        <img src=\"../../assets/van_logo.png\" class=\"my-5\">\n                        <p class=\"qc_date my-5 pr-15\"><b>Date: </b>8/Nov/2019</p>\n                    </mat-card-header>\n                    <mat-divider></mat-divider>\n                    <mat-grid-list cols=\"1\" rowHeight=\"60px\" gutterSize=\"15px\">\n                            <mat-grid-tile>\n                                    <h4 class=\"qc_heading_sm txt-center\">Invoice / Cash Bill</h4>\n                            </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-divider></mat-divider>\n                    <mat-grid-list cols=\"2\" rowHeight=\"100px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                            <mat-list>\n                                <mat-list-item>\n                                    <p><span>Patient Id  : </span> # VAN/OP/001</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Name  : </span> P. Papa Rao</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Village  : </span> Amalapuram</p>\n                                </mat-list-item>\n                            </mat-list>\n                        </mat-grid-tile>\n                        <mat-grid-tile>\n                            <mat-list>\n                                <mat-list-item>\n                                    <p><span>Course Duration  : </span> 4 Months</p>\n                                </mat-list-item>\n                                \n                                <mat-list-item>\n                                    <p><span>Health Issue  : </span> Diabetes / Thyroid</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                        <p> </p>\n                                    </mat-list-item>\n                            </mat-list>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-divider></mat-divider>\n                    <mat-card-content>\n                            \n                        <table class=\"qc_invioestable\" cellspacing=\"10\">\n                            <tr>\n                                <td>VK4 Diacon 30 Tablets</td>\n                                <td align=\"center\">1</td>\n                                <td align=\"right\">1727</td>\n                                <td align=\"right\">1727</td>\n                            </tr>\n                            <tr>\n                                <td>KANCHANAR GUGGUL 60 Tablets</td>\n                                <td align=\"center\">1</td>\n                                <td align=\"right\">95</td>\n                                <td align=\"right\">195</td>\n                            </tr>\n                            <tr>\n                                <td>VK4 Diacon 30 Tablets</td>\n                                <td align=\"center\">1</td>\n                                <td align=\"right\">270</td>\n                                <td align=\"right\">270</td>\n                            </tr>\n                            \n                        </table>\n                        <mat-divider></mat-divider>\n                        <table class=\"qc_billtotal\" cellspacing=\"10\">\n                                <tr align=\"right\">\n                                <td> Invoice Total</td>\n                                <td>4</td>\n                                <td colspan=\"2\">Rs. 2187</td>\n                            </tr>\n                        </table>\n                        <mat-divider></mat-divider>\n                    </mat-card-content>\n                </mat-card>\n                <mat-grid-list cols=\"1\" rowHeight=\"60px\" gutterSize=\"15px\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mt-5\">\n                        <button class=\"qc_print\" mat-flat-button color=\"primary\">\n                            <mat-icon>local_printshop</mat-icon>Print</button>\n                    </div>\n                </mat-grid-list>\n            </div>\n        </div>\n    </div>\n    <!-- Footer -->\n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/consultion/consultion.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/consultion/consultion.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <a (click)=\"goConsultion()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\">supervised_user_circle</mat-icon> <span>Consultation</span>\n            </a>\n            <a (click)=\"goreviewdet()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"description icon icon\">description icon</mat-icon> <span>Invoice</span>\n            </a>\n        </div> <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n    </div>\n    <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"75%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n                <div class=\"form_container mat-elevation-z5\">\n                    <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                            <h2 class=\"qc_heading\">Medicine Prescription</h2>\n                        </mat-grid-tile>\n                       \n                       \n                    </mat-grid-list>\n                    <div class=\"qc_invoice-bill\">\n                    <mat-divider></mat-divider>\n                    <mat-grid-list cols=\"2\" rowHeight=\"120px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                            <mat-list>\n                                <mat-list-item>\n                                    <p><span>Patient Id  : </span> # VAN/OP/001</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Name  : </span> P. Papa Rao</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Village  : </span> Amalapuram</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                        <p><span>Email  : </span> test@van.com</p>\n                                    </mat-list-item>\n                            </mat-list>\n                        </mat-grid-tile>\n                        <mat-grid-tile>\n                            <mat-list>\n                                    <mat-list-item>\n                                            <p><span>Gender  : </span> M</p>\n                                        </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Age  : </span> 45 Years</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Weight  : </span> 48 kg</p>\n                                </mat-list-item>\n                                <mat-list-item>\n                                    <p><span>Health Issue  : </span> Diabetes / Thyroid</p>\n                                </mat-list-item>\n                                \n                            </mat-list>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"1\" rowHeight=\"50px\" gutterSize=\"15px\">\n                            <mat-grid-tile>\n                                    <mat-list>\n                                        <mat-list-item>\n                                                <p><span>Description : </span> Feeling weak and too much pain in feet while waking up in the morning\n                                                </p>\n                                        </mat-list-item>\n                                        </mat-list>\n                                        </mat-grid-tile>\n                                       \n                    </mat-grid-list>\n                    <mat-divider></mat-divider>\n                   </div>\n                    <mat-grid-list cols=\"2\" rowHeight=\"80px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                            <mat-form-field appearance=\"outline\">\n                                <mat-label>Medicine Name</mat-label>\n                                <input matInput placeholder=\"Medicine Name\">\n                                <mat-icon matSuffix>local_pharmacy</mat-icon>\n                            </mat-form-field>\n                        </mat-grid-tile>\n                        <mat-grid-tile class=\"qc_left\">\n                            <button mat-flat-button color=\"primary\">Add</button>\n                        </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list cols=\"3\" rowHeight=\"225px\" gutterSize=\"15px\">\n                        <mat-grid-tile>\n                            <mat-card flex-gt-sm class=\"qc_med-card\">\n                                <div class=\"qc_card-x\"><mat-icon>close</mat-icon></div>\n                                <mat-card-title>VK4 Diacon 30 Tab</mat-card-title>\n                                <mat-divider></mat-divider>\n                                \n                                    <mat-list>\n                                        <mat-list-item>\n                                            <h4><mat-icon>access_time</mat-icon> Morning 9 AM One Tablet</h4>\n                                        </mat-list-item>\n                                        <mat-list-item>\n                                            <h4><mat-icon>access_time</mat-icon> Evening 6PM One Tablet</h4>\n                                        </mat-list-item>\n                                    </mat-list>\n                                \n                                <mat-divider></mat-divider>\n                                <mat-card-actions>\n                                     <mat-card-subtitle>\n                                         <p class=\"qc_inline\">Qty.</p>\n                                            <mat-form-field appearance=\"outline\">\n                                                   \n                                                  <mat-select placeholder=\"1\">\n                                                   \n                                                    <mat-option value=\"option\">1</mat-option>\n                                                    <mat-option value=\"option\">2</mat-option>\n                                                    <mat-option value=\"option\">3</mat-option>\n                                                    <mat-option value=\"option\">4</mat-option>\n\n                                                </mat-select>\n                                            </mat-form-field>\n                                     </mat-card-subtitle>\n                                     <a mat-raised-button routerLink=\".\">Edit</a>\n                                </mat-card-actions>\n                            </mat-card>\n                        </mat-grid-tile>\n                        \n                        <mat-grid-tile>\n                                <mat-card flex-gt-sm class=\"qc_med-card\">\n                                        <div class=\"qc_card-x\"><mat-icon>close</mat-icon></div>\n                                    <mat-card-title>L-Mitra 90 Tab</mat-card-title>\n                                    <mat-divider></mat-divider>\n                                    \n                                        <mat-list>\n                                            <mat-list-item>\n                                                <h4><mat-icon>access_time</mat-icon> Morning 9 AM One Tablet</h4>\n                                            </mat-list-item>\n                                            <mat-list-item>\n                                                <h4><mat-icon>access_time</mat-icon> Evening 6PM One Tablet</h4>\n                                            </mat-list-item>\n                                        </mat-list>\n                                    \n                                    <mat-divider></mat-divider>\n                                    <mat-card-actions>\n                                            <mat-card-subtitle>\n                                                <p class=\"qc_inline\">Qty.</p>\n                                                   <mat-form-field appearance=\"outline\">\n                                                          \n                                                         <mat-select placeholder=\"1\">\n                                                          \n                                                           <mat-option value=\"option\">1</mat-option>\n                                                           <mat-option value=\"option\">2</mat-option>\n                                                           <mat-option value=\"option\">3</mat-option>\n                                                           <mat-option value=\"option\">4</mat-option>\n       \n                                                       </mat-select>\n                                                   </mat-form-field>\n                                            </mat-card-subtitle>\n                                            <a mat-raised-button routerLink=\".\">Edit</a>\n                                       </mat-card-actions>\n                                </mat-card>\n                            </mat-grid-tile>\n\n                            <mat-grid-tile>\n                                    <mat-card flex-gt-sm class=\"qc_med-card\">\n                                            <div class=\"qc_card-x\"><mat-icon>close</mat-icon></div>\n                                        <mat-card-title>KANCHANAR GUGGUL 60 Tab</mat-card-title>\n                                        <mat-divider></mat-divider>\n                                        \n                                            <mat-list>\n                                                <mat-list-item>\n                                                    <h4><mat-icon>access_time</mat-icon> Morning 9 AM One Tablet</h4>\n                                                </mat-list-item>\n                                                <mat-list-item>\n                                                    <h4><mat-icon>access_time</mat-icon> Evening 6PM One Tablet</h4>\n                                                </mat-list-item>\n                                            </mat-list>\n                                        \n                                        <mat-divider></mat-divider>\n                                        <mat-card-actions>\n                                                <mat-card-subtitle>\n                                                    <p class=\"qc_inline\">Qty.</p>\n                                                       <mat-form-field appearance=\"outline\">\n                                                              \n                                                             <mat-select placeholder=\"1\">\n                                                              \n                                                               <mat-option value=\"option\">1</mat-option>\n                                                               <mat-option value=\"option\">2</mat-option>\n                                                               <mat-option value=\"option\">3</mat-option>\n                                                               <mat-option value=\"option\">4</mat-option>\n           \n                                                           </mat-select>\n                                                       </mat-form-field>\n                                                </mat-card-subtitle>\n                                                <a mat-raised-button routerLink=\".\">Edit</a>\n                                           </mat-card-actions>\n                                    </mat-card>\n                                </mat-grid-tile>\n                    </mat-grid-list>\n                    <mat-grid-list class=\"mt-5\" cols=\"1\" rowHeight=\"90px\" gutterSize=\"15px\">\n                            <mat-grid-tile>\n                                <mat-form-field appearance=\"outline\">\n                                    <textarea matInput placeholder=\"Course Duration :\"></textarea>\n                                </mat-form-field>\n                            </mat-grid-tile>\n                        </mat-grid-list>\n\n                        <mat-grid-list cols=\"1\" rowHeight=\"60px\" gutterSize=\"15px\">\n                                <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mt-5\">\n                                    <button  mat-flat-button color=\"primary\" (click)=\"goprintinv()\">Save</button>\n                                </div>\n                            </mat-grid-list>\n                </div>\n            </div>\n        </div>\n    </div>\n    <!-- Footer -->\n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html":
/*!******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html ***!
  \******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n  \n  <!-- Toolbar -->\n  <div class=\"toolbar\" role=\"banner\">\n    <img\n      width=\"40\"\n      alt=\"Angular Logo\"\n      src=\"../../assets/van_logo.png\"\n    />\n    \n      <div class=\"spacer\"></div>\n    \n      <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >  \n    <a (click)=\"goaddfind()\"><mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\"> supervised_user_circle</mat-icon> <span>Consultation</span></a>\n    <a (click)=\"goreviewdet()\"><mat-icon aria-hidden=\"false\" aria-label=\"description icon icon\"> description icon</mat-icon> <span>Invoice</span></a>\n      </div>\n    \n    <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n  </div>\n  \n  <div class=\"content\" role=\"main\">\n\n    <div class=\"card-container\">\n        <div fxLayout=\"row wrap \" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"40%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper py-60\">\n                <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                    <h2 class=\"qc_heading txt-center\"> Receptionist</h2>\n                </mat-grid-list>\n                <mat-grid-list cols=\"2\" rowHeight=\"120px\" gutterSize=\"15px\">\n                    <mat-grid-tile>\n                        <a class=\"card\" target=\"_blank\" rel=\"noopener\" (click)=\"goaddfind()\">\n                          \n                    \n                          <span>New Patient</span>\n                    \n                          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n                    </mat-grid-tile>\n                    <mat-grid-tile>\n                        <a class=\"card\" target=\"_blank\" rel=\"noopener\" (click)=\"gofinedetails()\">\n                          \n                    \n                          <span>Exiting Patient</span>\n                    \n                          <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n                        </a>\n                    </mat-grid-tile>\n                    \n                  </mat-grid-list>\n                  <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                      <h2 class=\"qc_heading txt-center\"> Dr. / Van Store</h2>\n                  </mat-grid-list>\n                  <mat-grid-list cols=\"2\" rowHeight=\"120px\" gutterSize=\"15px\">\n                      <mat-grid-tile>\n                          <a class=\"card\" target=\"_blank\" rel=\"noopener\" (click)=\"gopatientinfo()\">\n                            \n                      \n                            <span>Dr. Portal</span>\n                      \n                            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>    </a>\n                      </mat-grid-tile>\n                      <mat-grid-tile>\n                          <a class=\"card\" target=\"_blank\" rel=\"noopener\" (click)=\"gomedicine()\">\n                            \n                      \n                            <span>Van Store Protalt</span>\n                      \n                            <svg class=\"material-icons\" xmlns=\"http://www.w3.org/2000/svg\" width=\"24\" height=\"24\" viewBox=\"0 0 24 24\"><path d=\"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z\"/></svg>\n                          </a>\n                      </mat-grid-tile>\n                    </mat-grid-list>\n            </div>\n        </div>\n      \n     \n  \n    </div>\n    \n      \n  \n    \n  \n    \n  \n    \n  </div>\n    <!-- Footer -->\n    <footer  fxLayout=\"row\" fxLayoutAlign=\"center end\">\n        © Copyright 2019.\n       \n    </footer>\n  \n  \n \n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/find-patient/find-patient.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/find-patient/find-patient.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar mat-elevation-z3\" role=\"banner\">\n    <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n    <div class=\"spacer\"></div>\n    <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n      <a (click)=\"gohome()\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"home icon\">home icon</mat-icon>\n      </a>\n      <a (click)=\"goConsultion()\">\n        <mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\">supervised_user_circle</mat-icon> <span>Consultation</span>\n      </a>\n      <a (click)=\"goreviewdet()\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"description icon\">description icon</mat-icon> <span>Invoice</span>\n      </a>\n      <a (click)=\"goreviewdet()\">\n        <mat-icon aria-hidden=\"false\" aria-label=\"search icon\">search icon</mat-icon>\n      </a>\n    </div> \n    <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n  </div>\n  <div class=\"content\" role=\"main\">\n    <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n      <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n        <div class=\"form_container mat-elevation-z5\">\n          <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n            <mat-grid-tile>\n              <h2 class=\"qc_heading\">Find Patient Details</h2>\n            </mat-grid-tile>\n          </mat-grid-list>\n          <mat-grid-list cols=\"1\" rowHeight=\"100px\" gutterSize=\"15px\">\n            <mat-form-field appearance=\"outline\">\n              <mat-label>Patient ID / Name / Number / Email</mat-label>\n              <input matInput placeholder=\"Find Patient\">\n              <mat-icon matSuffix>search</mat-icon>\n            </mat-form-field>\n          </mat-grid-list>\n          <table class=\"qc_rivewtable\" mat-table [dataSource]=\"dataSource\">\n            <!-- Position Column -->\n            <ng-container matColumnDef=\"Patientid\">\n              <th mat-header-cell *matHeaderCellDef>Patient ID</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.Patientid}}</td>\n            </ng-container>\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"name\">\n              <th mat-header-cell *matHeaderCellDef>Patient Name</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n            </ng-container>\n            <!-- Name Column -->\n            <ng-container matColumnDef=\"phone\">\n                <th mat-header-cell *matHeaderCellDef>Phone No.</th>\n                <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td>\n              </ng-container>\n            <!-- Weight Column -->\n            <ng-container matColumnDef=\"village\">\n              <th mat-header-cell *matHeaderCellDef>Village</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.village}}</td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"age\">\n              <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Age</th>\n              <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.age}}</td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"weight\">\n              <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Weight</th>\n              <td mat-cell *matCellDef=\"let element\"  align=\"center\">{{element.weight}}</td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"health\">\n              <th mat-header-cell *matHeaderCellDef>Health Issue</th>\n              <td mat-cell *matCellDef=\"let element\">{{element.health}}</td>\n            </ng-container>\n            <!-- Symbol Column -->\n            <ng-container matColumnDef=\"btn\">\n              <th mat-header-cell *matHeaderCellDef width=\"115px\"></th>\n              <td mat-cell *matCellDef=\"let element\" align=\"right\">\n                <button mat-button color=\"primary\" (click)=\"goaddfind()\">Consultation</button>\n            </ng-container>\n            <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n            <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n          </table>\n        </div>\n      </div>\n    </div>\n    <!-- Footer -->\n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>\n  </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html":
/*!**********************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html ***!
  \**********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div fxLayout=\"row\" fxLayoutAlign=\"center center\"  class=\"login-wrapper\">\n    <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n        <div class=\"qc_loginhead\">\n            <img src=\"../../assets/van_logo.png\">\n          </div>\n        \n              <mat-card class=\"qc_login-card\">\n                <mat-card-content>\n                  <form>\n                    <h2> login </h2>\n                    <mat-form-field  appearance=\"outline\" >\n                      <input matInput placeholder=\"User\" formControlName=\"userName\" >\n                     \n                    </mat-form-field>\n                    <mat-form-field appearance=\"outline\" >\n                      <input matInput type=\"password\" placeholder=\"Password\" formControlName=\"password\" >\n                     \n                    </mat-form-field>\n                    <a (click)=\"gohome()\"><button mat-raised-button color=\"primary\" type=\"submit\">Login</button></a>\n                  </form>\n                </mat-card-content>\n              </mat-card>\n           </div>\n    </div>\n  \n                ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/medicine-detials/medicine-detials.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/medicine-detials/medicine-detials.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar mat-elevation-z3\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n          <a (click)=\"gohome()\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"home icon\">home icon</mat-icon>\n          </a>\n          <a (click)=\"goConsultion()\">\n            <mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\">supervised_user_circle</mat-icon> <span>Consultation</span>\n          </a>\n          <a (click)=\"goreviewdet()\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"description icon\">description icon</mat-icon> <span>Invoice</span>\n          </a>\n          <a (click)=\"goreviewdet()\">\n            <mat-icon aria-hidden=\"false\" aria-label=\"search icon\">search icon</mat-icon>\n          </a>\n        </div> \n        <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n      </div>\n      <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n          <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n            <div class=\"form_container mat-elevation-z5\">\n              <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                <mat-grid-tile>\n                  <h2 class=\"qc_heading\">Find Patient Details</h2>\n                </mat-grid-tile>\n              </mat-grid-list>\n              <mat-grid-list cols=\"1\" rowHeight=\"100px\" gutterSize=\"15px\">\n                <mat-form-field appearance=\"outline\">\n                  <mat-label>Patient ID / Name / Number / Email</mat-label>\n                  <input matInput placeholder=\"Find Patient\">\n                  <mat-icon matSuffix>search</mat-icon>\n                </mat-form-field>\n              </mat-grid-list>\n              <table class=\"qc_rivewtable\" mat-table [dataSource]=\"dataSource\">\n                <!-- Position Column -->\n                <ng-container matColumnDef=\"Patientid\">\n                  <th mat-header-cell *matHeaderCellDef>Patient ID</th>\n                  <td mat-cell *matCellDef=\"let element\">{{element.Patientid}}</td>\n                </ng-container>\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"name\">\n                  <th mat-header-cell *matHeaderCellDef>Patient Name</th>\n                  <td mat-cell *matCellDef=\"let element\">{{element.name}}</td>\n                </ng-container>\n                <!-- Name Column -->\n                <ng-container matColumnDef=\"phone\">\n                    <th mat-header-cell *matHeaderCellDef>Phone No.</th>\n                    <td mat-cell *matCellDef=\"let element\">{{element.phone}}</td>\n                  </ng-container>\n                <!-- Weight Column -->\n                <ng-container matColumnDef=\"village\">\n                  <th mat-header-cell *matHeaderCellDef>Village</th>\n                  <td mat-cell *matCellDef=\"let element\">{{element.village}}</td>\n                </ng-container>\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"age\">\n                  <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Age</th>\n                  <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.age}}</td>\n                </ng-container>\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"weight\">\n                  <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Weight</th>\n                  <td mat-cell *matCellDef=\"let element\"  align=\"center\">{{element.weight}}</td>\n                </ng-container>\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"health\">\n                  <th mat-header-cell *matHeaderCellDef>Health Issue</th>\n                  <td mat-cell *matCellDef=\"let element\">{{element.health}}</td>\n                </ng-container>\n                <!-- Symbol Column -->\n                <ng-container matColumnDef=\"btn\">\n                  <th mat-header-cell *matHeaderCellDef width=\"115px\"></th>\n                  <td mat-cell *matCellDef=\"let element\" align=\"right\">\n                    <button mat-button color=\"primary\" (click)=\"goprintinv()\">Medicine</button>\n                </ng-container>\n                <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n              </table>\n            </div>\n          </div>\n        </div>\n        <!-- Footer -->\n        <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>\n      </div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/patientinfo/patientinfo.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/patientinfo/patientinfo.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar mat-elevation-z3\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >  \n                <a (click)=\"goConsultion()\"><mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\"> supervised_user_circle</mat-icon> <span>Consultation</span></a>\n                <a (click)=\"goreviewdet()\"><mat-icon aria-hidden=\"false\" aria-label=\"description icon icon\"> description icon</mat-icon> <span>Invoice</span></a>\n                  </div>\n                \n                <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n              </div>\n    <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n                <div class=\"form_container mat-elevation-z5\">\n                  <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                    <mat-grid-tile>\n                      <h2 class=\"qc_heading\"> Patient Information</h2>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                 \n                  <table class=\"qc_rivewtable\" mat-table [dataSource]=\"dataSource\">\n                    <!-- Position Column -->\n                    <ng-container matColumnDef=\"Patientid\">\n                      <th mat-header-cell *matHeaderCellDef>Patient ID</th>\n                      <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.Patientid}}</td>\n                    </ng-container>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell *matHeaderCellDef>Patient Name</th>\n                      <td mat-cell *matCellDef=\"let element\" >{{element.name}}</td>\n                    </ng-container>\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"village\">\n                      <th mat-header-cell *matHeaderCellDef>Village</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.village}}</td>\n                    </ng-container>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"gender\">\n                            <th mat-header-cell *matHeaderCellDef width=\"50px\">Gender</th>\n                            <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.gender}}</td>\n                          </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"age\">\n                      <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Age</th>\n                      <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.age}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"weight\">\n                      <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Weight</th>\n                      <td mat-cell *matCellDef=\"let element\"  align=\"center\">{{element.weight}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"health\">\n                      <th mat-header-cell *matHeaderCellDef>Health Issue</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.health}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"btn\">\n                      <th mat-header-cell *matHeaderCellDef width=\"115px\"></th>\n                      <td mat-cell *matCellDef=\"let element\" align=\"right\">\n                        <button mat-button color=\"primary\" (click)=\"goConsultion()\">Medication</button>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                </div>\n              </div>\n              </div>\n    \n    <!-- Footer -->\n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/printinv/printinv.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/printinv/printinv.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\">\n            <a (click)=\"goConsultion()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\">supervised_user_circle</mat-icon> <span>Consultation</span>\n            </a>\n            <a (click)=\"goreviewdet()\">\n                <mat-icon aria-hidden=\"false\" aria-label=\"description icon icon\">description icon</mat-icon> <span>Invoice</span>\n            </a>\n        </div> <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n    </div>\n    <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"800px\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper qc_invise\">\n                <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                    <mat-grid-tile>\n                        <h2 class=\"qc_heading\">Invoice</h2>\n                    </mat-grid-tile>\n                </mat-grid-list>\n                <div class=\"qc_invoice-bg\">\n                    <div class=\" qc_absolute\">\n                        <div class=\"qc_in-date\">\n                            <p>8/Nov/2019</p>\n                        </div>\n                        <div class=\"qc_in-name\">\n                            <div class=\"qc_txt-left\">\n                                <p>P. Papa Rao, Amalapuram</p>\n                            </div>\n                            <div class=\"qc_txt-right\">\n                                <p>45 Y,</p>\n                                <p>48 Kg</p>\n                            </div>\n                        </div>\n                        <div class=\"qc_in-list-d\">\n                            <ul>\n                                <li>\n                                    <p><span>Patient Id  : </span> # VAN/OP/001</p>\n                                </li>\n                                <li>\n                                    <p><span>Phone No  : </span> 9955668899</p>\n                                </li>\n                                <li>\n                                    <p><span>Health Issue   : </span> Diabetes / Thyroid</p>\n                                </li>\n                            </ul>\n                        </div>\n                        <div class=\"qc_medlist\">\n                            <ul class=\"qc_medlist-in\">\n                                <li><span class=\"qc_medlist-num\">1.</span> VK4 Diacon <span class=\"qc_medlist-qty\">120 Tab &nbsp; X &nbsp;  4 Time</span>\n                                </li>\n                                <li>VK4 Diacon 30 Tablets <span class=\"qc_medlist-qty\">120 Tab &nbsp; X &nbsp;  4 Time</span>\n                                </li>\n                                <li>KANCHANAR GUGGUL  <span class=\"qc_medlist-qty\">90 Tab &nbsp; X &nbsp;  3 Time</span>\n                                </li>\n                                <li>VK4 Diacon 30 Tablets <span class=\"qc_medlist-qty\">120 Tab &nbsp; X &nbsp;  4 Time</span>\n                                </li>\n                            </ul>\n                            <ul class=\"qc_medlist-down\">\n                                <li>Morning 9 AM One Tablet</li>\n                                <li>Evening 6PM One Tablet</li>\n                            </ul>\n                        </div>\n                        <div class=\"qc_medlist\">\n                            <ul class=\"qc_medlist-in\">\n                                <li><span class=\"qc_medlist-num\">2.</span> VK4 Diacon 30 Tablets <span class=\"qc_medlist-qty\">Qty. 1</span>\n                                </li>\n                                <li>VK4 Diacon 30 Tablets <span class=\"qc_medlist-qty\">Qty. 1</span>\n                                </li>\n                                <li>KANCHANAR GUGGUL 60 Tablets <span class=\"qc_medlist-qty\">Qty. 1</span>\n                                </li>\n                            </ul>\n                            <ul class=\"qc_medlist-down\">\n                                <li>Morning 9 AM One Tablet</li>\n                                <li>Evening 6PM One Tablet</li>\n                            </ul>\n                        </div>\n                        <div class=\"qc_medlist\">\n                            <ul class=\"qc_medlist-in\">\n                                <li><span class=\"qc_medlist-num\">3.</span> VK4 Diacon 30 Tablets <span class=\"qc_medlist-qty\">Qty. 1</span>\n                                </li>\n                                <li>KANCHANAR GUGGUL 60 Tablets <span class=\"qc_medlist-qty\">Qty. 1</span>\n                                </li>\n                            </ul>\n                            <ul class=\"qc_medlist-down\">\n                                <li>Morning 9 AM One Tablet</li>\n                                <li>Evening 6PM One Tablet</li>\n                            </ul>\n                        </div>\n                        <div class=\"qc_duration\">\n                        <h5>Course Duration : 4 months</h5>\n\n                        </div>\n                        <div class=\"qc_signature\">\n                            <img src=\"../../assets/karuna-signature.jpg\" width=\"200xp\">\n                        </div>\n\n                        <!-- <table class=\"qc_invioestable\" cellspacing=\"5\">\n                                    <tr>\n                                        <td>VK4 Diacon 30 Tablets</td>\n                                        <td>1</td>\n                                        <td></td>\n                                        <td></td>\n                                    </tr>\n                                    <tr>\n                                        <td>KANCHANAR GUGGUL 60 Tablets</td>\n                                        <td>1</td>\n                                        <td>Morning 9 AM One Tablet</td>\n                                        <td>Evening 6PM One Tablet</td>\n                                    </tr>\n                                    <tr>\n                                        <td>VK4 Diacon 30 Tablets</td>\n                                        <td>1</td>\n                                        <td>Morning 9 AM One Tablet</td>\n                                        <td>Evening 6PM One Tablet</td>\n                                    </tr>\n                                    <tr>\n                                        <td colspan=\"4\">Course Duration: 4 Months</td>\n                                    </tr>\n                                </table> -->\n                    </div>\n                </div>\n                <mat-grid-list cols=\"1\" rowHeight=\"60px\" gutterSize=\"15px\">\n                    <div fxLayout=\"row\" fxLayoutAlign=\"center end\" class=\"mt-5\">\n                        <button class=\"qc_print\" mat-flat-button color=\"primary\">\n                            <mat-icon>local_printshop</mat-icon>Print</button>\n                        <button class=\"qc_print ml-15\" mat-flat-button color=\"primary\" (click)=\"gobillinvioes()\">\n                            <mat-icon>local_printshop</mat-icon>Bill</button>\n                    </div>\n                </mat-grid-list>\n            </div>\n        </div>\n    </div>\n    <!-- Footer -->\n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/review-det/review-det.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/review-det/review-det.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- Toolbar -->\n<div class=\"toolbar mat-elevation-z3\" role=\"banner\">\n        <img width=\"40\" alt=\"Angular Logo\" src=\"../../assets/van_logo.png\" />\n        <div class=\"spacer\"></div>\n        <div fxLayout=\"row\" fxLayoutAlign=\"end center\" >  \n                <a (click)=\"goConsultion()\"><mat-icon aria-hidden=\"false\" aria-label=\" supervised_user_circle icon\"> supervised_user_circle</mat-icon> <span>Consultation</span></a>\n                <a (click)=\"goreviewdet()\"><mat-icon aria-hidden=\"false\" aria-label=\"description icon icon\"> description icon</mat-icon> <span>Invoice</span></a>\n                  </div>\n                \n                <a (click)=\"gologin()\" class=\"qc_headlogin\">Login <mat-icon aria-hidden=\"false\" aria-label=\"keyboard_arrow_down icon\"> keyboard_arrow_down</mat-icon></a>\n              </div>\n    <div class=\"content\" role=\"main\">\n        <div fxLayout=\"row wrap\" fxLayoutAlign=\"center center\" class=\"layout-wrapper\">\n            <div fxFlex=\"80%\" fxFlex.lt-md=\"100%\" class=\"flex-wrapper\">\n                <div class=\"form_container mat-elevation-z5\">\n                  <mat-grid-list cols=\"1\" rowHeight=\"70px\" gutterSize=\"15px\">\n                    <mat-grid-tile>\n                      <h2 class=\"qc_heading\"> Patient Details</h2>\n                    </mat-grid-tile>\n                  </mat-grid-list>\n                 \n                  <table class=\"qc_rivewtable\" mat-table [dataSource]=\"dataSource\">\n                    <!-- Position Column -->\n                    <ng-container matColumnDef=\"Patientid\">\n                      <th mat-header-cell *matHeaderCellDef>Patient ID</th>\n                      <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.Patientid}}</td>\n                    </ng-container>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"name\">\n                      <th mat-header-cell *matHeaderCellDef>Patient Name</th>\n                      <td mat-cell *matCellDef=\"let element\" >{{element.name}}</td>\n                    </ng-container>\n                    <!-- Name Column -->\n                    <ng-container matColumnDef=\"phone\">\n                        <th mat-header-cell *matHeaderCellDef>Phone No.</th>\n                        <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.phone}}</td>\n                      </ng-container>\n                    <!-- Weight Column -->\n                    <ng-container matColumnDef=\"village\">\n                      <th mat-header-cell *matHeaderCellDef>Village</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.village}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"age\">\n                      <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Age</th>\n                      <td mat-cell *matCellDef=\"let element\" align=\"center\">{{element.age}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"weight\">\n                      <th mat-header-cell *matHeaderCellDef width=\"50px\" align=\"center\">Weight</th>\n                      <td mat-cell *matCellDef=\"let element\"  align=\"center\">{{element.weight}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"health\">\n                      <th mat-header-cell *matHeaderCellDef>Health Issue</th>\n                      <td mat-cell *matCellDef=\"let element\">{{element.health}}</td>\n                    </ng-container>\n                    <!-- Symbol Column -->\n                    <ng-container matColumnDef=\"btn\">\n                      <th mat-header-cell *matHeaderCellDef width=\"115px\"></th>\n                      <td mat-cell *matCellDef=\"let element\" align=\"right\">\n                        <button mat-button color=\"primary\" (click)=\"goaddfind()\">Edit</button>\n                    </ng-container>\n                    <tr mat-header-row *matHeaderRowDef=\"displayedColumns\"></tr>\n                    <tr mat-row *matRowDef=\"let row; columns: displayedColumns;\"></tr>\n                  </table>\n                </div>\n              </div>\n              </div>\n    \n    <!-- Footer -->\n    <footer fxLayout=\"row\" fxLayoutAlign=\"center end\">© Copyright 2019. VAN Ltd.</footer>\n</div>");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __exportStar(m, exports) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
    if (m) return m.call(o);
    return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}


/***/ }),

/***/ "./src/app/add-find/add-find.component.css":
/*!*************************************************!*\
  !*** ./src/app/add-find/add-find.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FkZC1maW5kL2FkZC1maW5kLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/add-find/add-find.component.ts":
/*!************************************************!*\
  !*** ./src/app/add-find/add-find.component.ts ***!
  \************************************************/
/*! exports provided: AddFindComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AddFindComponent", function() { return AddFindComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




const ELEMENT_DATA = [
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
];
let AddFindComponent = class AddFindComponent {
    constructor(_router) {
        this._router = _router;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.toppingList = ['Diabetes', 'Blood Sugar', 'Thyroid', 'Liver Disorders', 'Blood Pressure',];
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
AddFindComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AddFindComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-add-find',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./add-find.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/add-find/add-find.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./add-find.component.css */ "./src/app/add-find/add-find.component.css")).default]
    })
], AddFindComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _add_find_add_find_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./add-find/add-find.component */ "./src/app/add-find/add-find.component.ts");
/* harmony import */ var _consultion_consultion_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./consultion/consultion.component */ "./src/app/consultion/consultion.component.ts");
/* harmony import */ var _review_det_review_det_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./review-det/review-det.component */ "./src/app/review-det/review-det.component.ts");
/* harmony import */ var _find_patient_find_patient_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./find-patient/find-patient.component */ "./src/app/find-patient/find-patient.component.ts");
/* harmony import */ var _medicine_detials_medicine_detials_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./medicine-detials/medicine-detials.component */ "./src/app/medicine-detials/medicine-detials.component.ts");
/* harmony import */ var _printinv_printinv_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./printinv/printinv.component */ "./src/app/printinv/printinv.component.ts");
/* harmony import */ var _billinvoice_billinvoice_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./billinvoice/billinvoice.component */ "./src/app/billinvoice/billinvoice.component.ts");
/* harmony import */ var _patientinfo_patientinfo_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./patientinfo/patientinfo.component */ "./src/app/patientinfo/patientinfo.component.ts");













const routes = [
    { path: '', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'login', component: _login_login_component__WEBPACK_IMPORTED_MODULE_4__["LoginComponent"] },
    { path: 'deshboard', component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_3__["DashboardComponent"], },
    { path: 'add-find', component: _add_find_add_find_component__WEBPACK_IMPORTED_MODULE_5__["AddFindComponent"], },
    { path: 'consultion', component: _consultion_consultion_component__WEBPACK_IMPORTED_MODULE_6__["ConsultionComponent"], },
    { path: 'review-det', component: _review_det_review_det_component__WEBPACK_IMPORTED_MODULE_7__["ReviewDetComponent"], },
    { path: 'find-patient', component: _find_patient_find_patient_component__WEBPACK_IMPORTED_MODULE_8__["FindPatientComponent"], },
    { path: 'medicine-detials', component: _medicine_detials_medicine_detials_component__WEBPACK_IMPORTED_MODULE_9__["MedicineDetialsComponent"], },
    { path: 'printinv', component: _printinv_printinv_component__WEBPACK_IMPORTED_MODULE_10__["PrintinvComponent"], },
    { path: 'billinvoice', component: _billinvoice_billinvoice_component__WEBPACK_IMPORTED_MODULE_11__["BillinvoiceComponent"], },
    { path: 'patientinfo', component: _patientinfo_patientinfo_component__WEBPACK_IMPORTED_MODULE_12__["PatientinfoComponent"], },
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("@import url('https://fonts.googleapis.com/css?family=Lato:300,400,400i,700&display=swap');\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEseUZBQXlGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybCgnaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3M/ZmFtaWx5PUxhdG86MzAwLDQwMCw0MDBpLDcwMCZkaXNwbGF5PXN3YXAnKTsiXX0= */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let AppComponent = class AppComponent {
    constructor() {
        this.title = 'vansoft';
    }
};
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/flex-layout */ "./node_modules/@angular/flex-layout/esm2015/flex-layout.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _add_find_add_find_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./add-find/add-find.component */ "./src/app/add-find/add-find.component.ts");
/* harmony import */ var _consultion_consultion_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./consultion/consultion.component */ "./src/app/consultion/consultion.component.ts");
/* harmony import */ var _review_det_review_det_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./review-det/review-det.component */ "./src/app/review-det/review-det.component.ts");
/* harmony import */ var _find_patient_find_patient_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./find-patient/find-patient.component */ "./src/app/find-patient/find-patient.component.ts");
/* harmony import */ var _medicine_detials_medicine_detials_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./medicine-detials/medicine-detials.component */ "./src/app/medicine-detials/medicine-detials.component.ts");
/* harmony import */ var _printinv_printinv_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./printinv/printinv.component */ "./src/app/printinv/printinv.component.ts");
/* harmony import */ var _billinvoice_billinvoice_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./billinvoice/billinvoice.component */ "./src/app/billinvoice/billinvoice.component.ts");
/* harmony import */ var _patientinfo_patientinfo_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./patientinfo/patientinfo.component */ "./src/app/patientinfo/patientinfo.component.ts");



















let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _login_login_component__WEBPACK_IMPORTED_MODULE_9__["LoginComponent"],
            _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_10__["DashboardComponent"],
            _add_find_add_find_component__WEBPACK_IMPORTED_MODULE_11__["AddFindComponent"],
            _consultion_consultion_component__WEBPACK_IMPORTED_MODULE_12__["ConsultionComponent"],
            _review_det_review_det_component__WEBPACK_IMPORTED_MODULE_13__["ReviewDetComponent"],
            _find_patient_find_patient_component__WEBPACK_IMPORTED_MODULE_14__["FindPatientComponent"],
            _medicine_detials_medicine_detials_component__WEBPACK_IMPORTED_MODULE_15__["MedicineDetialsComponent"],
            _printinv_printinv_component__WEBPACK_IMPORTED_MODULE_16__["PrintinvComponent"],
            _billinvoice_billinvoice_component__WEBPACK_IMPORTED_MODULE_17__["BillinvoiceComponent"],
            _patientinfo_patientinfo_component__WEBPACK_IMPORTED_MODULE_18__["PatientinfoComponent"],
        ],
        imports: [
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_5__["BrowserAnimationsModule"],
            _angular_flex_layout__WEBPACK_IMPORTED_MODULE_6__["FlexLayoutModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatCardModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_8__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatOptionModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatGridListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDatepickerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatTableModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatListModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatAutocompleteModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatNativeDateModule"],
        ],
        providers: [],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]],
        schemas: [
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["CUSTOM_ELEMENTS_SCHEMA"],
            _angular_core__WEBPACK_IMPORTED_MODULE_2__["NO_ERRORS_SCHEMA"]
        ]
    })
], AppModule);



/***/ }),

/***/ "./src/app/billinvoice/billinvoice.component.css":
/*!*******************************************************!*\
  !*** ./src/app/billinvoice/billinvoice.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2JpbGxpbnZvaWNlL2JpbGxpbnZvaWNlLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/billinvoice/billinvoice.component.ts":
/*!******************************************************!*\
  !*** ./src/app/billinvoice/billinvoice.component.ts ***!
  \******************************************************/
/*! exports provided: BillinvoiceComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BillinvoiceComponent", function() { return BillinvoiceComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let BillinvoiceComponent = class BillinvoiceComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
BillinvoiceComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
BillinvoiceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-billinvoice',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./billinvoice.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/billinvoice/billinvoice.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./billinvoice.component.css */ "./src/app/billinvoice/billinvoice.component.css")).default]
    })
], BillinvoiceComponent);



/***/ }),

/***/ "./src/app/consultion/consultion.component.css":
/*!*****************************************************!*\
  !*** ./src/app/consultion/consultion.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbnN1bHRpb24vY29uc3VsdGlvbi5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/consultion/consultion.component.ts":
/*!****************************************************!*\
  !*** ./src/app/consultion/consultion.component.ts ***!
  \****************************************************/
/*! exports provided: ConsultionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ConsultionComponent", function() { return ConsultionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");




let ConsultionComponent = class ConsultionComponent {
    constructor(_router) {
        this._router = _router;
        this.toppings = new _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormControl"]();
        this.toppingList = ['Diabetes', 'Blood Sugar', 'Thyroid', 'Liver Disorders', 'Blood Pressure',];
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
ConsultionComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ConsultionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-consultion',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./consultion.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/consultion/consultion.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./consultion.component.css */ "./src/app/consultion/consultion.component.css")).default]
    })
], ConsultionComponent);



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2Rhc2hib2FyZC9kYXNoYm9hcmQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let DashboardComponent = class DashboardComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
DashboardComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
DashboardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-dashboard',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./dashboard.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/dashboard/dashboard.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")).default]
    })
], DashboardComponent);



/***/ }),

/***/ "./src/app/find-patient/find-patient.component.css":
/*!*********************************************************!*\
  !*** ./src/app/find-patient/find-patient.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2ZpbmQtcGF0aWVudC9maW5kLXBhdGllbnQuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/find-patient/find-patient.component.ts":
/*!********************************************************!*\
  !*** ./src/app/find-patient/find-patient.component.ts ***!
  \********************************************************/
/*! exports provided: FindPatientComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FindPatientComponent", function() { return FindPatientComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const ELEMENT_DATA = [
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
];
let FindPatientComponent = class FindPatientComponent {
    constructor(_router) {
        this._router = _router;
        this.displayedColumns = ['Patientid', 'phone', 'name', 'village', 'age', 'weight', 'health', 'btn'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
FindPatientComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
FindPatientComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-find-patient',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./find-patient.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/find-patient/find-patient.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./find-patient.component.css */ "./src/app/find-patient/find-patient.component.css")).default]
    })
], FindPatientComponent);



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let LoginComponent = class LoginComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/medicine-detials/medicine-detials.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/medicine-detials/medicine-detials.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21lZGljaW5lLWRldGlhbHMvbWVkaWNpbmUtZGV0aWFscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/medicine-detials/medicine-detials.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/medicine-detials/medicine-detials.component.ts ***!
  \****************************************************************/
/*! exports provided: MedicineDetialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MedicineDetialsComponent", function() { return MedicineDetialsComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const ELEMENT_DATA = [
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
];
let MedicineDetialsComponent = class MedicineDetialsComponent {
    constructor(_router) {
        this._router = _router;
        this.displayedColumns = ['Patientid', 'phone', 'name', 'village', 'age', 'weight', 'health', 'btn'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
MedicineDetialsComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
MedicineDetialsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-medicine-detials',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./medicine-detials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/medicine-detials/medicine-detials.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./medicine-detials.component.css */ "./src/app/medicine-detials/medicine-detials.component.css")).default]
    })
], MedicineDetialsComponent);



/***/ }),

/***/ "./src/app/patientinfo/patientinfo.component.css":
/*!*******************************************************!*\
  !*** ./src/app/patientinfo/patientinfo.component.css ***!
  \*******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3BhdGllbnRpbmZvL3BhdGllbnRpbmZvLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/patientinfo/patientinfo.component.ts":
/*!******************************************************!*\
  !*** ./src/app/patientinfo/patientinfo.component.ts ***!
  \******************************************************/
/*! exports provided: PatientinfoComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PatientinfoComponent", function() { return PatientinfoComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const ELEMENT_DATA = [
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
    { Patientid: "VAN/OP/001", name: 'Mr. Papa Rao', village: 'Rama Puram', gender: 'M', age: 55, weight: 70, health: 'Diabetes / Thyroid' },
];
let PatientinfoComponent = class PatientinfoComponent {
    constructor(_router) {
        this._router = _router;
        this.displayedColumns = ['Patientid', 'name', 'village', 'gender', 'age', 'weight', 'health', 'btn'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
PatientinfoComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PatientinfoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-patientinfo',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./patientinfo.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/patientinfo/patientinfo.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./patientinfo.component.css */ "./src/app/patientinfo/patientinfo.component.css")).default]
    })
], PatientinfoComponent);



/***/ }),

/***/ "./src/app/printinv/printinv.component.css":
/*!*************************************************!*\
  !*** ./src/app/printinv/printinv.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3ByaW50aW52L3ByaW50aW52LmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/printinv/printinv.component.ts":
/*!************************************************!*\
  !*** ./src/app/printinv/printinv.component.ts ***!
  \************************************************/
/*! exports provided: PrintinvComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PrintinvComponent", function() { return PrintinvComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let PrintinvComponent = class PrintinvComponent {
    constructor(_router) {
        this._router = _router;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
PrintinvComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
PrintinvComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-printinv',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./printinv.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/printinv/printinv.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./printinv.component.css */ "./src/app/printinv/printinv.component.css")).default]
    })
], PrintinvComponent);



/***/ }),

/***/ "./src/app/review-det/review-det.component.css":
/*!*****************************************************!*\
  !*** ./src/app/review-det/review-det.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Jldmlldy1kZXQvcmV2aWV3LWRldC5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/review-det/review-det.component.ts":
/*!****************************************************!*\
  !*** ./src/app/review-det/review-det.component.ts ***!
  \****************************************************/
/*! exports provided: ReviewDetComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ReviewDetComponent", function() { return ReviewDetComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



const ELEMENT_DATA = [
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
    { Patientid: "VAN/OP/001", phone: 9922556644, name: 'Mr. Papa Rao', village: 'Rama Puram', age: 55, weight: 70, health: 'Diabetes / Thyroid  ' },
];
let ReviewDetComponent = class ReviewDetComponent {
    constructor(_router) {
        this._router = _router;
        this.displayedColumns = ['Patientid', 'phone', 'name', 'village', 'age', 'weight', 'health', 'btn'];
        this.dataSource = ELEMENT_DATA;
    }
    ngOnInit() {
    }
    gologin() {
        this._router.navigate(['/login']);
    }
    gohome() {
        this._router.navigate(['/deshboard']);
    }
    goaddfind() {
        this._router.navigate(['/add-find']);
    }
    goConsultion() {
        this._router.navigate(['/consultion']);
    }
    goreviewdet() {
        this._router.navigate(['/review-det']);
    }
    goprintinv() {
        this._router.navigate(['/printinv']);
    }
    gofinedetails() {
        this._router.navigate(['/find-patient']);
    }
    gobillinvioes() {
        this._router.navigate(['/billinvoice']);
    }
    gopatientinfo() {
        this._router.navigate(['/patientinfo']);
    }
    gomedicine() {
        this._router.navigate(['/medicine-detials']);
    }
};
ReviewDetComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
ReviewDetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-review-det',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./review-det.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/review-det/review-det.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./review-det.component.css */ "./src/app/review-det/review-det.component.css")).default]
    })
], ReviewDetComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_5__);






if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\vansoft\vansoft\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map