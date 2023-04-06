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
exports.Section = void 0;
const typeorm_1 = require("typeorm");
const department_entities_1 = require("../company/department.entities");
const employee_entities_1 = require("../company/employee.entities");
const checkProduct_1 = require("../product/checkProduct");
const product_entities_1 = require("../product/product.entities");
let Section = class Section {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)('increment'),
    __metadata("design:type", Number)
], Section.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Section.prototype, "name", void 0);
__decorate([
    (0, typeorm_1.Column)(),
    __metadata("design:type", String)
], Section.prototype, "acronym", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => department_entities_1.Department, (department) => department.section),
    __metadata("design:type", department_entities_1.Department)
], Section.prototype, "department", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => employee_entities_1.Employee, (employee) => employee.section),
    __metadata("design:type", Array)
], Section.prototype, "employee", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => product_entities_1.Product, (product) => product.section),
    __metadata("design:type", product_entities_1.Product)
], Section.prototype, "product", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => checkProduct_1.checkProduct, (checkProduct) => checkProduct.section),
    __metadata("design:type", checkProduct_1.checkProduct)
], Section.prototype, "checkProduct", void 0);
__decorate([
    (0, typeorm_1.CreateDateColumn)({ type: 'timestamp' }),
    __metadata("design:type", Date)
], Section.prototype, "section_createdAt", void 0);
Section = __decorate([
    (0, typeorm_1.Entity)()
], Section);
exports.Section = Section;
