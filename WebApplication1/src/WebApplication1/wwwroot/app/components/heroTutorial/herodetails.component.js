System.register(['angular2/core'], function(exports_1) {
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
    var HeroDetailsComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            HeroDetailsComponent = (function () {
                function HeroDetailsComponent() {
                }
                HeroDetailsComponent = __decorate([
                    core_1.Component({
                        selector: 'hero-detail',
                        template: "\n\t\t<div *ngIf=\"hero\">\n\t\t\t<h2>{{hero.name}} details!</h2>\n\t\t\t<div><label>id: </label>{{hero.id}}</div>\n\t\t\t<div>\n\t\t\t\t<label>name: </label>\n\t\t\t\t<input [(ngModel)]=\"hero.name\" placeholder=\"name\" />\n\t\t\t</div>\n\n\t\t</div>\n\t",
                        inputs: ['hero'],
                    }), 
                    __metadata('design:paramtypes', [])
                ], HeroDetailsComponent);
                return HeroDetailsComponent;
            })();
            exports_1("HeroDetailsComponent", HeroDetailsComponent);
        }
    }
});
//# sourceMappingURL=herodetails.component.js.map