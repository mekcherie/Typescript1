"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.Student = exports.Course = void 0;
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    Person.prototype.describe = function () {
        return this.name + " is " + this.age;
    };
    return Person;
}());
var joe = new Person('Joe', 33);
// Define a Course. A Course a title: string and a units: number
var Course = /** @class */ (function () {
    function Course() {
    }
    return Course;
}());
exports.Course = Course;
var Cohort;
(function (Cohort) {
    Cohort[Cohort["junior"] = 0] = "junior";
    Cohort[Cohort["senior"] = 1] = "senior";
})(Cohort || (Cohort = {}));
// Define a Student class. Student extends Person. A Student 
// has an array of Courses and a cohort which is: junior or senior
// Add enroll method that takes a Course as parameter and adds 
// this to the course array
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age) {
        var _this = _super.call(this, name, age) || this;
        _this.courses = [];
        _this.cohort = Cohort.junior;
        return _this;
    }
    Student.prototype.enroll = function (course) {
        this.courses.push();
    };
    return Student;
}(Person));
exports.Student = Student;
exports["default"] = Person;
