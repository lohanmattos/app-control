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
exports.checkProduct = void 0;
const typeorm_1 = require("typeorm");
const section_entities_1 = require("../company/section.entities");
const user_entities_1 = require("../user/user.entities");
const product_entities_1 = require("./product.entities");
let checkProduct = class checkProduct {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], checkProduct.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => product_entities_1.Product, (product) => product.checkProduct),
    __metadata("design:type", product_entities_1.Product)
], checkProduct.prototype, "productCode", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => section_entities_1.Section, (section) => section.checkProduct),
    __metadata("design:type", section_entities_1.Section)
], checkProduct.prototype, "section", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => user_entities_1.User, (user) => user.checkProduct),
    __metadata("design:type", user_entities_1.User)
], checkProduct.prototype, "user", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], checkProduct.prototype, "checkProduct_createdAt", void 0);
checkProduct = __decorate([
    (0, typeorm_1.Entity)()
], checkProduct);
exports.checkProduct = checkProduct;
