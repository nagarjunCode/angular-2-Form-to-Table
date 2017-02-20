System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent, TableData;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.editMode = false;
                    this.tdata = [];
                }
                AppComponent.prototype.appendOrReplace = function (name, email, age, phno) {
                    if (this.editMode) {
                        this.tdata[this.tId].name = this.tname;
                        this.tdata[this.tId].email = this.temail;
                        this.tdata[this.tId].age = this.tage;
                        this.tdata[this.tId].phno = this.tphno;
                        this.editMode = false;
                    }
                    else {
                        this.tdata.push(new TableData(name, email, age, phno));
                        console.log(this.tdata);
                    }
                    this.tname = "";
                    this.tage = "";
                    this.tphno = "";
                    this.temail = "";
                };
                AppComponent.prototype.deleteRow = function (i) {
                    this.tdata.splice(i, 1);
                };
                AppComponent.prototype.editRow = function (i) {
                    this.tname = this.tdata[i].name;
                    this.temail = this.tdata[i].email;
                    this.tage = this.tdata[i].age;
                    this.tphno = this.tdata[i].phno;
                    this.editMode = true;
                    this.tId = i;
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'app/ts/app.components.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
            TableData = (function () {
                function TableData(name, email, age, phno) {
                    this.name = name;
                    this.email = email;
                    this.age = age;
                    this.phno = phno;
                }
                return TableData;
            }());
            exports_1("TableData", TableData);
        }
    }
});
//# sourceMappingURL=app.component.js.map