webpackJsonp([6],{

/***/ 117:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
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
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
//@IonicPage()
var RegisterPage = (function () {
    function RegisterPage(afAuth, navCtrl, navParams) {
        this.afAuth = afAuth;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.user = {};
    }
    RegisterPage.prototype.register = function (user) {
        return __awaiter(this, void 0, void 0, function () {
            var result, e_1;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        _a.trys.push([0, 2, , 3]);
                        return [4 /*yield*/, this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password)];
                    case 1:
                        result = _a.sent();
                        console.log(result);
                        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
                        return [3 /*break*/, 3];
                    case 2:
                        e_1 = _a.sent();
                        console.error(e_1);
                        return [3 /*break*/, 3];
                    case 3: return [2 /*return*/];
                }
            });
        });
    };
    RegisterPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-register',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/register/register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>Register</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n    \n    <ion-item>\n        <ion-label floating>Email Address</ion-label>\n        <ion-input type="text" [(ngModel)]="user.email"></ion-input>\n      </ion-item>\n    \n      <ion-item>\n        <ion-label floating>Password</ion-label>\n        <ion-input type="password" [(ngModel)]="user.password"></ion-input>\n        \n      </ion-item>\n      \n    \n    <button ion-button (click)="register(user)">Register</button>\n       \n\n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/register/register.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], RegisterPage);
    return RegisterPage;
}());

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 140:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CardsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the CardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var CardsPage = (function () {
    function CardsPage(navCtrl, alertCtrl, actionSheetCtrl, afDatabase, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.alertCtrl = alertCtrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.cardsRef = afDatabase.list('Cards');
        this.cards = this.cardsRef.valueChanges();
        this.comentsRef = afDatabase.list('Coments');
        this.coments = this.comentsRef.valueChanges();
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL, nombre: user.displayName };
        });
    }
    //Metodo Agregar tarjeta
    CardsPage.prototype.addCard = function () {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Titulo de la Tarjeta',
            message: "Rellene los Datos",
            subTitle: 'Contenido',
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Title',
                },
                {
                    name: 'subTitle',
                    placeholder: 'Contenido',
                }
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var newCardRef = _this.cardsRef.push({});
                        newCardRef.set({
                            id: newCardRef.key,
                            title: data.title,
                            subTitle: data.subTitle,
                            nombre: _this.currentUser.nombre,
                            photo: _this.currentUser.photoURL,
                            uid: _this.currentUser.uid
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    //Fin metodo Agregar Tarjeta
    //Inicia Metodo ShowOptions
    CardsPage.prototype.showOptions = function (cardId, cardTitle, cardSubTitle, cardUID) {
        var _this = this;
        console.log(cardId);
        console.log(cardTitle);
        console.log(cardSubTitle);
        console.log(cardUID);
        var actionSheet = this.actionSheetCtrl.create({
            title: '¿Que quieres hacer?',
            buttons: [
                {
                    text: 'Borrar Tarjeta',
                    role: 'destructive',
                    handler: function () {
                        _this.removeCard(cardId, cardUID);
                    }
                }, {
                    text: 'Agregar Comentario',
                    handler: function () {
                        _this.addComent(cardId, cardUID);
                    }
                },
                {
                    text: 'Actualizar Nombre',
                    handler: function () {
                        _this.updateCard(cardId, cardTitle, cardSubTitle, cardUID);
                    }
                }, {
                    text: 'Cancel',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    //Termina Metodo ShowOptions
    //Inicia Metodo removeCard
    CardsPage.prototype.removeCard = function (cardId, cardIdUser) {
        if (this.currentUser.uid == cardIdUser) {
            this.cardsRef.remove(cardId);
        }
        else {
            var alert = this.alertCtrl.create({
                title: '¡¡¡UUUPPPSSS!!!',
                subTitle: 'No estas autorizado para eliminar la tarjeta',
                buttons: ['ok']
            });
            alert.present();
        }
    };
    //Finaliza Metodo removeCard
    //Inicia Metodo updateCard
    CardsPage.prototype.updateCard = function (cardId, CardTitle, cardSubTitle, cardUID) {
        var _this = this;
        if (this.currentUser.uid == cardUID) {
            var prompt = this.alertCtrl.create({
                title: 'Nombre de la Tarjeta',
                message: "Actualizar datos de la tarjeta",
                inputs: [
                    {
                        name: 'title',
                        placeholder: 'Title',
                        value: CardTitle
                    }, {
                        name: 'subTitle',
                        placeholder: 'Contenido'
                    }
                ],
                buttons: [
                    {
                        text: 'Cancelar',
                        handler: function (data) {
                            console.log('Click para Cancelar');
                        }
                    },
                    {
                        text: 'Guardar',
                        handler: function (data) {
                            _this.cardsRef.update(cardId, {
                                title: data.title, nombre: data.subTitle, lastUpdatedBy: _this.currentUser.uid
                            });
                        }
                    }
                ]
            });
            prompt.present();
        }
        else {
            var alert = this.alertCtrl.create({
                title: '¡¡¡UUUPPPSSS!!!',
                subTitle: 'No estas autorizado para actualizar la tarjeta',
                buttons: ['OK']
            });
            alert.present();
        }
    };
    //Finaliza Metodo updateCard
    //Medtodo actualizar Comentario
    CardsPage.prototype.actualizarComentario = function (cardId, CardTitle, cardSubTitle, cardUID) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Comentario',
            message: "Comenta",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Comentario',
                }
            ],
            buttons: [
                {
                    text: 'Cancelar',
                    handler: function (data) {
                        console.log('Click para Cancelar');
                    }
                },
                {
                    text: 'Guardar',
                    handler: function (data) {
                        _this.cardsRef.update(cardId, {
                            comentario: data.title, lastUpdatedBy: _this.currentUser.uid
                        });
                    }
                }
            ]
        });
        prompt.present();
    };
    //Metodo Actualizar Comentario
    CardsPage.prototype.addComent = function (cardId, cardUID) {
        var _this = this;
        var prompt = this.alertCtrl.create({
            title: 'Comentaio',
            message: "Comenta",
            inputs: [
                {
                    name: 'title',
                    placeholder: 'Comentario'
                },
            ],
            buttons: [
                {
                    text: 'Cancel',
                    handler: function (data) {
                        console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Save',
                    handler: function (data) {
                        var newComentRef = _this.comentsRef.push({});
                        var newCardRef = _this.comentsRef.push({});
                        newComentRef.set({
                            idC: newComentRef.key,
                            comentario: data.title,
                            nombreC: _this.currentUser.nombre,
                            photoC: _this.currentUser.photoURL,
                            uidC: _this.currentUser.uid,
                            id: cardId,
                        });
                        {
                        }
                    }
                }
            ]
        });
        prompt.present();
    };
    CardsPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-cards',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/cards/cards.html"*/'<!--\n  Generated template for the CardsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n\n\n<ion-header>\n  <ion-navbar>\n    <ion-title>Card\'s</ion-title>\n  </ion-navbar>\n</ion-header>\n\n<ion-content class="cards-bg">\n  <ion-list>\n      <div *ngIf="afAuth.authState | async as user; ">\n          <ion-card>\n            <ion-list>\n              <ion-item>\n                <h1>Publicaciones</h1>\n                  <ion-card-content *ngFor="let card of cards | async" (click)="showOptions(card.id, card.title, card.subTittle, card.uid)">\n                      <ion-avatar item-start>\n                          <img src={{card.photo}} >\n                      </ion-avatar>\n      \n                      <h3>{{card.nombre}}</h3><h4>Autor de la Tarjeta</h4>\n                      <h2>Titulo: {{card.title}}</h2>>> <p>==>{{card.subTitle}}</p>\n\n                      <ion-card>\n                          <ion-list>\n                            <ion-item>\n                              <h1>Comentarios</h1>\n                              <ion-card-content *ngFor="let coment of coments | async">\n                                  <ion-avatar item-start>\n                                      <img src={{coment.photoC}} >\n                                  </ion-avatar>\n                                  <h2>{{coment.nombreC}}</h2><h4>Autor del Comentario</h4>\n                                <h3>{{coment.comentario}}</h3>\n        \n                              </ion-card-content>\n                            </ion-item>\n                          </ion-list>\n        </ion-card>\n      \n                     \n                      \n                    </ion-card-content>\n              </ion-item>\n            </ion-list>\n            \n            \n            </ion-card>\n      \n           \n          \n      \n            \n              \n      </div>\n\n  </ion-list>\n  <ion-fab right bottom>\n      <button ion-fab  (click)="addCard()">\n      <ion-icon name="add" ></ion-icon>\n      </button>\n      </ion-fab>\n\n\n    \n     \n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/cards/cards.html"*/,
        }),
        __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]) === "function" && _b || Object, typeof (_c = typeof __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */]) === "function" && _c || Object, typeof (_d = typeof __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */]) === "function" && _d || Object, typeof (_e = typeof __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */]) === "function" && _e || Object])
    ], CardsPage);
    return CardsPage;
    var _a, _b, _c, _d, _e;
}());

//# sourceMappingURL=cards.js.map

/***/ }),

/***/ 152:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 152;

/***/ }),

/***/ 195:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/cards/cards.module": [
		457,
		5
	],
	"../pages/login/login.module": [
		458,
		4
	],
	"../pages/main/main.module": [
		459,
		3
	],
	"../pages/profile/profile.module": [
		460,
		2
	],
	"../pages/slides/slides.module": [
		461,
		0
	],
	"../pages/welcome/welcome.module": [
		462,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 195;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 289:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return WelcomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__profile_profile__ = __webpack_require__(82);
//importando Plugins
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



//Importando Paginas


/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var WelcomePage = (function () {
    function WelcomePage(navCtrl, navParams, afAuth) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.slides = [
            {
                title: "¡Bienvenido a Nuestra Web!",
                description: "The <b>Ionic Component Documentation</b> showcases a number of useful components that are included out of the box with Ionic.",
                image: "../../imagenmuestra4.png",
            },
            {
                title: "¿Qué es este Sitio?",
                description: "<b>WebChat</b> Es un sitio en el que podras subir tus imagenes favorita y pedir valoraciones.",
                image: "../../img/imagenmuestra5.png",
            },
            {
                title: "Nuetra Comunidad es la Mejor",
                description: "Comienza actualizando tu perfil.",
                image: "../../assets/img/imagenmuestra6.png",
            }
        ];
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    WelcomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad WelcomePage');
    };
    //Inicia Función Logout
    WelcomePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
        //this.provider.loggedin = false;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    //Termina Función Logout
    //Inicia Función goToProfile
    WelcomePage.prototype.goToProfile = function () {
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_4__profile_profile__["a" /* ProfilePage */]);
    };
    WelcomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-welcome',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/welcome/welcome.html"*/'<!--\n  Generated template for the WelcomePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>welcome</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding >\n    <h1>¡¡Bienvenido a nuestra aplicación!!</h1>\n    <ion-item class="item item-trns text-center">\n        Brayan\'s Aplication\n      <ion-avatar item-end *ngIf="afAuth.authState | async as user">\n        <img src={{currentUser.photoURL}} >\n        <ion-item item-center>\n            {{ user.displayName }}\n\n        </ion-item>\n        \n        \n      </ion-avatar>\n    </ion-item>\n    <div class="exit"><button ion-button round color="orange" (click)="logout()"  small>Logout</button></div>\n\n    <ion-slides pager *ngIf="afAuth.authState | async as user">\n        <ion-slide *ngFor="let slide of slides">\n          <ion-toolbar>\n            <ion-buttons end>\n              <button ion-button color="primary" (click)="goToProfile()">Skip</button>\n            </ion-buttons>\n          </ion-toolbar>\n          <img [src]="slide.image" class="slide-image"/>\n          <h2 class="slide-title" [innerHTML]="slide.title"></h2>\n          <p [innerHTML]="slide.description"></p>\n        </ion-slide>\n        <ion-slide>\n          <ion-toolbar>\n          </ion-toolbar>\n          <img src="{{currentUser.photoURL}}" class="slide-image"/>\n          <h2 class="slide-title">Llena tu Perfil</h2>\n          <button ion-button large clear icon-end color="primary" (click)="goToProfile()">\n            Modifica tu Perfil\n            <ion-icon name="arrow-forward"></ion-icon>\n          </button>\n        </ion-slide>\n    </ion-slides>\n\n\n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/welcome/welcome.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */]])
    ], WelcomePage);
    return WelcomePage;
}());

//# sourceMappingURL=welcome.js.map

/***/ }),

/***/ 290:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(291);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(311);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 311:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export firebaseConfig */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(42);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_angularfire2__ = __webpack_require__(44);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__app_component__ = __webpack_require__(456);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_register_register__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__ = __webpack_require__(82);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__ = __webpack_require__(289);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_cards_cards__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_main_main__ = __webpack_require__(81);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






// Import the AF2 Module











// AF2 Settings
var firebaseConfig = {
    apiKey: "AIzaSyChhAEKbhc0mKJdTExX3IwYIYNR9DB5GiA",
    authDomain: "examened-c8d5f.firebaseapp.com",
    databaseURL: "https://examened-c8d5f.firebaseio.com",
    projectId: "examened-c8d5f",
    storageBucket: "examened-c8d5f.appspot.com",
    messagingSenderId: "1037283154201"
};
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_main_main__["a" /* MainPage */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/cards/cards.module#CardsPageModule', name: 'CardsPage', segment: 'cards', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/main/main.module#MainPageModule', name: 'MainPage', segment: 'main', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/profile/profile.module#ProfilePageModule', name: 'ProfilePage', segment: 'profile', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/slides/slides.module#SlidesPageModule', name: 'SlidesPage', segment: 'slides', priority: 'low', defaultHistory: [] },
                        { loadChildren: '../pages/welcome/welcome.module#WelcomePageModule', name: 'WelcomePage', segment: 'welcome', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_6_angularfire2__["a" /* AngularFireModule */].initializeApp(firebaseConfig),
                __WEBPACK_IMPORTED_MODULE_7_angularfire2_database__["b" /* AngularFireDatabaseModule */],
                __WEBPACK_IMPORTED_MODULE_8_angularfire2_auth__["b" /* AngularFireAuthModule */],
                __WEBPACK_IMPORTED_MODULE_5__ionic_storage__["a" /* IonicStorageModule */].forRoot()
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_9__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_10__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_11__pages_login_login__["a" /* LoginPage */],
                __WEBPACK_IMPORTED_MODULE_12__pages_register_register__["a" /* RegisterPage */],
                __WEBPACK_IMPORTED_MODULE_13__pages_profile_profile__["a" /* ProfilePage */],
                __WEBPACK_IMPORTED_MODULE_14__pages_welcome_welcome__["a" /* WelcomePage */],
                __WEBPACK_IMPORTED_MODULE_15__pages_cards_cards__["a" /* CardsPage */],
                __WEBPACK_IMPORTED_MODULE_16__pages_main_main__["a" /* MainPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["d" /* IonicErrorHandler */] }
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 456:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(287);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(284);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_home_home__ = __webpack_require__(60);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var MyApp = (function () {
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_home_home__["a" /* HomePage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"/home/brayan93/ExamenED/src/app/app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/app/app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 60:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__login_login__ = __webpack_require__(80);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__register_register__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__main_main__ = __webpack_require__(81);
//importando Plugins
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Importando Otras Páginas



/**
 * Generated class for the HomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HomePage = (function () {
    function HomePage(navCtrl, navParams, afDatabase, afAuth, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.storage = storage;
        this.search = false;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
        if (this.storage.get('statelogin')) {
            this.storage.get('statelogin').then(function (val) {
                if (val == 'true')
                    _this.storage.get('provider').then(function (val) {
                        _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_7__main_main__["a" /* MainPage */], val);
                    });
            });
        }
    }
    HomePage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad ProfilePage');
    };
    HomePage.prototype.login = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__login_login__["a" /* LoginPage */]);
    };
    HomePage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__register_register__["a" /* RegisterPage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], HomePage.prototype, "searchbarRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Searchbar */])
    ], HomePage.prototype, "searchbarElement", void 0);
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'pagehome',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/home/home.html"*/'\n\n<ion-content padding >\n\n\n\n      <div class="wrapper">\n                  <div class="container">\n                        <h1>Bienvenido</h1>\n                        <!-- Botones del Login  y Regitro-->\n      <div   >\n                  <div #showLogin>\n                        <button round block ion-button (click)="login()" >INICIAR SESION</button>\n                        <button round block ion-button (click)="register()">REGISTRARSE</button>\n        \n                  </div>\n                  \n          \n          \n              </div>\n              <!-- Fin de Botones del Login  y Regitro-->\n                        \n                        \n                  </div>\n                  \n                  \n            </div>\n\n         \n\n\n   \n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/home/home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app__ = __webpack_require__(288);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase_app___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase_app__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(117);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__main_main__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_storage__ = __webpack_require__(75);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






 //Página de Registro


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function () {
    function LoginPage(navCtrl, navParams, afDatabase, afAuth, alertCtrl, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.alertCtrl = alertCtrl;
        this.storage = storage;
        this.provider = {
            loggedin: false,
            name: '',
            email: '',
            profilePicture: ''
        };
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    LoginPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad LoginPage');
    };
    LoginPage.prototype.loginWithEmail = function () {
        var _this = this;
        this.afAuth.auth.signInWithEmailAndPassword(this.email.value, this.password.value)
            .then(function (response) {
            __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"]().setPersistence;
            _this.provider.loggedin = true;
            _this.provider.name = response.displayName;
            _this.provider.email = response.email;
            _this.provider.profilePicture = response.photoURL;
            console.log('from Email', response);
            _this.showAlert('Success! you\'re logged in by Email');
            _this.storage.set('statelogin', 'true');
            _this.storage.set('providers', _this.provider);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */], _this.provider);
        })
            .catch(function (error) {
            console.log('got error', error);
            _this.showAlert(error.message);
        });
    };
    //Inicio Función de Registro
    LoginPage.prototype.register = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    //Fin Función de Registro
    LoginPage.prototype.showAlert = function (message) {
        var alert = this.alertCtrl.create({
            title: 'Info',
            subTitle: message,
            buttons: ['OK']
        });
        alert.present();
    };
    //Inicia Login Con Gmail
    LoginPage.prototype.loginWithGmail = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GoogleAuthProvider())
            .then(function (response) {
            _this.provider.loggedin = true;
            _this.provider.name = response.user.displayName;
            _this.provider.email = response.user.email;
            _this.provider.profilePicture = response.user.photoURL;
            console.log('from Google', response);
            _this.showAlert('Success! you\'re logged in by Google');
            _this.storage.set('statelogin', 'true');
            _this.storage.set('providers', _this.provider);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */], _this.provider);
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            })
                .catch(function (error) {
                console.log('got error', error);
                _this.showAlert(error.message);
            });
        });
    };
    //Termina Login con Gmail
    //Inicia Login Con Facebook
    LoginPage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].FacebookAuthProvider())
            .then(function (response) {
            _this.provider.loggedin = true;
            _this.provider.name = response.user.displayName;
            _this.provider.email = response.user.email;
            _this.provider.profilePicture = response.user.photoURL;
            console.log('from Facebook', response);
            _this.showAlert('Success! you\'re logged in by Facebook');
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */], _this.provider);
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            })
                .catch(function (error) {
                console.log('got error', error);
                _this.showAlert(error.message);
            });
        });
    };
    //Termina Login con Facebook
    //Inicia Login con Github
    LoginPage.prototype.loginWithGithub = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].GithubAuthProvider())
            .then(function (response) {
            _this.provider.loggedin = true;
            _this.provider.name = response.user.displayName;
            _this.provider.email = response.user.email;
            _this.provider.profilePicture = response.user.photoURL;
            console.log('from Github', response);
            _this.showAlert('Success! you\'re logged in by Github');
            _this.storage.set('statelogin', 'true');
            _this.storage.set('providers', _this.provider);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */], _this.provider);
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            })
                .catch(function (error) {
                console.log('got error', error);
                _this.showAlert(error.message);
            });
        });
    };
    //Termina Login con Github
    //Inicia Login con Twitter
    LoginPage.prototype.loginWithTwitter = function () {
        var _this = this;
        this.afAuth.auth.signInWithPopup(new __WEBPACK_IMPORTED_MODULE_4_firebase_app__["auth"].TwitterAuthProvider())
            .then(function (response) {
            _this.provider.loggedin = true;
            _this.provider.name = response.user.displayName;
            _this.provider.email = response.user.email;
            _this.provider.profilePicture = response.user.photoURL;
            console.log('from Twitter', response);
            _this.showAlert('Success! you\'re logged in by Twitter');
            _this.storage.set('statelogin', 'true');
            _this.storage.set('providers', _this.provider);
            _this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_6__main_main__["a" /* MainPage */], _this.provider);
            console.log('resultado login google:', response);
            var userRef = _this.afDatabase.list('users');
            userRef.update(response.user.uid, {
                userId: response.user.uid,
                displayName: response.user.displayName,
                photoURL: response.user.photoURL
            })
                .catch(function (error) {
                console.log('got error', error);
                _this.showAlert(error.message);
            });
        });
    };
    Object.defineProperty(LoginPage.prototype, "Session", {
        //Finaliza Login con Twitter
        // Devuelve la session
        get: function () {
            return this.afAuth.authState;
        },
        enumerable: true,
        configurable: true
    });
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('email'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "email", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('password'),
        __metadata("design:type", Object)
    ], LoginPage.prototype, "password", void 0);
    LoginPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-login',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/login/login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header >\n\n  <ion-navbar >\n    <ion-title>Login</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding LoginPage class="fondo" >\n\n  \n  <div >\n\n    <!-- Inicio Login con Plataformas-->\n            \n    \n    <div class="container" >\n        <h1>Logueate de la Forma Clasica</h1>\n      <!--Login Con Correo y Contraseña-->\n      <ion-list>\n          <ion-item>\n            <ion-label floating>Email</ion-label>\n            <ion-input type="text" #email></ion-input>\n          </ion-item>\n      \n          <ion-item class="cajaOp">\n            <ion-label floating>Password</ion-label>\n            <ion-input type="password" #password></ion-input>\n          </ion-item>\n      </ion-list>\n    \n    <button ion-button block  round color="grey" (click)="loginWithEmail()">Sign In</button>\n    \n    <!--Fin del Login Con Correo y contraseña-->\n   \n\n\n\n\n    <div class="container1" >\n        <h1>O Logueate de la Forma Moderna</h1>\n        <!--Gmail-->\n        \n        <button ion-button round block color="danger"  full (click)="loginWithGmail()" icon-right *ngIf="!provider.loggedin">\n            <ion-icon name="logo-googleplus"></ion-icon>\n            Login with Google\n          </button>\n  \n  \n    <!--Facebook -->\n  \n      <button ion-button round block color="default"  full (click)="loginWithFacebook()"  icon-right *ngIf="!provider.loggedin">\n          <ion-icon name="logo-facebook"></ion-icon>\n          Login with Facebook\n        </button>\n  \n  <!--Github-->\n  \n      <button ion-button round block color="dark"  full (click)="loginWithGithub()" icon-right *ngIf="!provider.loggedin">\n          <ion-icon name="logo-github"></ion-icon>\n          Login with Github\n        </button>\n        \n            \n  \n  \n      </div>\n     \n     \n  \n      <p>Si no tienes cuenta Registrate</p>\n        <button ion-button block round (click)="register()" icon-right color="orange">Register</button>\n    \n\n\n\n\n    </div>\n    \n  \n<!--Fin Login con Plataformas--> \n\n\n\n  </div>\n\n \n \n                 \n             \n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/login/login.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_7__ionic_storage__["b" /* Storage */]])
    ], LoginPage);
    return LoginPage;
}());

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MainPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(75);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__cards_cards__ = __webpack_require__(140);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__profile_profile__ = __webpack_require__(82);
//importando Plugins
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





//Importando Otras Páginas



/**
 * Generated class for the MainPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var MainPage = (function () {
    function MainPage(navCtrl, navParams, afDatabase, afAuth, storage) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afDatabase = afDatabase;
        this.afAuth = afAuth;
        this.storage = storage;
        this.search = false;
        this.x = false;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
        this.storage.get('at').then(function (val) {
            _this.authen = val;
            _this.x = true;
        });
    }
    MainPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad MainPage');
        this.storage.get('state.login');
    };
    MainPage.prototype.toggleSearch = function () {
        if (this.search) {
            this.search = false;
        }
        else {
            this.search = true;
            this.searchbarElement.setFocus();
        }
    };
    MainPage.prototype.searchAction = function (texto) {
        var val = texto.target.value;
        //implement search
    };
    MainPage.prototype.logout = function () {
        this.storage.set('statelogin', null);
        this.afAuth.auth.signOut();
        //this.provider.loggedin = false;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_5__home_home__["a" /* HomePage */]);
    };
    MainPage.prototype.goTo = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__cards_cards__["a" /* CardsPage */]);
    };
    MainPage.prototype.goToP = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__profile_profile__["a" /* ProfilePage */]);
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar', { read: __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */] }),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_0__angular_core__["t" /* ElementRef */])
    ], MainPage.prototype, "searchbarRef", void 0);
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_8" /* ViewChild */])('searchbar'),
        __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* Searchbar */])
    ], MainPage.prototype, "searchbarElement", void 0);
    MainPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'main-profile',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/main/main.html"*/'<!--\n  Generated template for the MainPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n    <ion-navbar>\n      \n          <ion-title class="titulo">\n            <ion-item class="item item-trns text-center">\n                Página Principal\n              <ion-avatar item-end *ngIf="afAuth.authState | async as user">\n                <img src={{currentUser.photoURL}} >\n                <ion-item item-center>\n                    {{ user.displayName }}\n      \n                </ion-item>\n                \n                \n              </ion-avatar>\n            </ion-item>\n            \n          </ion-title>\n        </ion-navbar>\n        \n\n</ion-header>\n\n\n<ion-content padding *ngIf="afAuth.authState | async as user">\n<!-- El div que engloba todo -->\n  <div class="container">\n    <!-- busqueda-->\n    <ion-searchbar #searchbar placeholder="o que deseja?" [hidden]="!search" (ionInput)="searchAction($event)" [(ngModel)]="queryText"></ion-searchbar>  \n \n    <ion-fab right bottom (click)="toggleSearch()">\n      <button ion-fab class="pop-in">\n        <ion-icon name="search"></ion-icon>\n      </button>\n  </ion-fab>\n  \n  <!-- Fin Busqueda -->\n\n\n   <!-- Div del boton de cards-->\n   <div>\n      <div><button ion-button round color="orange" full (click)="goTo()"  small>Cards</button></div>\n  </div>\n  <!-- Div del boton de card-->\n   <!-- Div del boton de profile-->\n   <div>\n    <div><button ion-button round color="orange" full (click)="goToP()"  small>Profile</button></div>\n</div>\n<!-- Div del boton de profile-->\n  <!-- Div del boton de logout-->\n  <div>\n    <div><button ion-button round color="orange" full (click)="logout()"  small>Logout</button></div>\n</div>\n<!-- Div del boton de logout-->\n\n  </div>\n  <!-- Fin del div que engloba todo -->\n\n\n \n\n     \n\n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/main/main.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
    ], MainPage);
    return MainPage;
}());

//# sourceMappingURL=main.js.map

/***/ }),

/***/ 82:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ProfilePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(21);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(60);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__ = __webpack_require__(40);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ProfilePage = (function () {
    function ProfilePage(navCtrl, navParams, afAuth, afDatabase, alertCtrl) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.afAuth = afAuth;
        this.afDatabase = afDatabase;
        this.alertCtrl = alertCtrl;
        this.person = { name: undefined, company: undefined, birthdate: undefined };
        this.dob = undefined;
        afAuth.authState.subscribe(function (user) {
            if (!user) {
                _this.currentUser = null;
                return;
            }
            _this.currentUser = { uid: user.uid, photoURL: user.photoURL };
        });
    }
    ProfilePage.prototype.ionViewDidLoad = function () {
        var person = JSON.parse(localStorage.getItem('PERSON'));
        if (person) {
            this.person = person;
            this.age = this.getAge(this.person.birthdate);
            this.dob = new Date(this.person.birthdate).toISOString();
        }
    };
    ProfilePage.prototype.reset = function () {
        this.person = { name: null, company: null, birthdate: null };
        this.dob = null;
        this.showProfile = false;
    };
    ProfilePage.prototype.save = function () {
        this.person.birthdate = new Date(this.dob).getTime();
        this.person.company = this.person.company;
        this.age = this.getAge(this.person.birthdate);
        this.showProfile = true;
        localStorage.setItem('PERSON', JSON.stringify(this.person, this.age));
    };
    ProfilePage.prototype.getAge = function (birthdate) {
        var currentTime = new Date().getTime();
        return ((currentTime - birthdate) / 31556952000).toFixed(0);
    };
    ProfilePage.prototype.logout = function () {
        this.afAuth.auth.signOut();
        //this.provider.loggedin = false;
        this.navCtrl.setRoot(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */]);
    };
    ProfilePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-profile',template:/*ion-inline-start:"/home/brayan93/ExamenED/src/pages/profile/profile.html"*/'<!--\n  Generated template for the ProfilePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>profile</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding *ngIf="afAuth.authState | async as user">\n\n  <!-- Formulario de edicion de Perfil-->\n  <div>\n      <form #formCtrl="ngForm">\n          <div align="center" *ngIf="formCtrl.form.valid">\n              \n            <h1> Profile</h1>\n            <img  src={{currentUser.photoURL}} >\n              <h4>{{person.name}}, {{person.company}}</h4>\n              <h5>{{age}} años</h5>\n          </div>\n      <ion-list>\n          <ion-item>\n            <ion-label floating>Nombre</ion-label>\n            <ion-input type="text" [(ngModel)]="person.name" name="name" required></ion-input>\n          </ion-item>\n          <ion-item>\n            <ion-label>Genero</ion-label>\n            <ion-select [(ngModel)]="person.company" name="company" required>\n              <ion-option value="Hombre">Hombre</ion-option>\n              <ion-option value="Mujer">Mujer</ion-option>\n            </ion-select>\n          </ion-item>\n          <ion-item>\n              <ion-label >Cumpleaños</ion-label>\n              <ion-datetime required name="birthdate" displayFormat="DD MMM YYYY" pickerFormat="DD MMM YYYY" [(ngModel)]="dob" [ngModelOptions]="{standalone:true}"></ion-datetime>\n          </ion-item>\n          \n          \n      </ion-list>\n      <button color="secondary" [disabled]="!formCtrl.form.valid" ion-button block (click)="save()">Save</button>\n      <button color="danger" ion-button block (click)="reset()">Reset</button>\n      </form>\n\n\n  </div>\n  <!-- Fin de Formulario de edicion de Perfil-->\n\n    \n<div class="exit"><button ion-button round color="orange" (click)="logout()"  small>Logout</button></div>\n\n</ion-content>\n'/*ion-inline-end:"/home/brayan93/ExamenED/src/pages/profile/profile.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_angularfire2_auth__["a" /* AngularFireAuth */],
            __WEBPACK_IMPORTED_MODULE_4_angularfire2_database__["a" /* AngularFireDatabase */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */]])
    ], ProfilePage);
    return ProfilePage;
}());

//# sourceMappingURL=profile.js.map

/***/ })

},[290]);
//# sourceMappingURL=main.js.map