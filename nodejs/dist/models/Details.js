"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Details = void 0;
var typeorm_1 = require("typeorm");
var Master_1 = require("./Master");
var Details = /** @class */ (function () {
    function Details() {
    }
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Details.prototype, "postal_code", void 0);
    __decorate([
        (0, typeorm_1.Column)(),
        __metadata("design:type", String)
    ], Details.prototype, "city", void 0);
    __decorate([
        (0, typeorm_1.OneToOne)(function () { return Master_1.Master; }, { primary: true, cascade: true, onDelete: "CASCADE" }),
        (0, typeorm_1.JoinColumn)(),
        __metadata("design:type", Master_1.Master)
    ], Details.prototype, "id", void 0);
    Details = __decorate([
        (0, typeorm_1.Entity)()
    ], Details);
    return Details;
}());
exports.Details = Details;
