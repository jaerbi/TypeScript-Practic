var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//*******************************************************************************
//string
var str = 'string!';
//number
var num = 10;
//boolean
var isTrue = true;
var isFalse = false;
// other
var unknown = '1';
//**********************************************************************************
//Array
var numArray1 = [1, 2, 3];
var numArray2 = [1, 2, 3];
var strArray1 = ['1', '2', '3'];
var strArray2 = ['1', '2', '3'];
//tuples
var array = [1, 2, '3'];
var array2 = [true, 'str', 2];
//**********************************************************************************
function getMyAge(age, prefix, somText) {
    if (somText === void 0) { somText = '-SumText'; }
    return prefix + age + somText;
}
function consoleLog(str) {
    console.log(str);
}
var mySum;
function sum(num1, num2) {
    return num1 + num2;
}
mySum = sum;
var user1 = {
    name: 'JERB',
    age: 45,
    jobs: ['a', 'b'],
    logName: function () {
        console.log(this.name);
    },
    getJobs: function () {
        return this.jobs;
    }
};
var user2 = {
    name: 'Just',
    age: 35,
    jobs: ['c'],
    logName: function () {
        console.log(this.name);
    }
};
var user = {
    name: 'JBS',
    age: 33
};
function logUser(user) {
    console.log(user.name + ': ' + user.age);
}
//**********************************************************************************
//Типи в TypeScript (1)
var Job;
(function (Job) {
    Job[Job["Frontend"] = 0] = "Frontend";
    Job[Job["Backend"] = 50] = "Backend";
    Job[Job["Designer"] = 51] = "Designer";
})(Job || (Job = {}));
var job = Job.Backend;
// console.log(job);
var job2 = Job.Designer;
// console.log(job2);
//Типи в TypeScript (2) never
function throwNewError(err) {
    throw new Error(err);
}
//Типи в TypeScript (3) never
var newVar;
newVar = null;
var myNumber = 20;
myNumber = null;
//**********************************************************************************
//TypeScript CLASS
var UserClass = /** @class */ (function () {
    function UserClass(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    UserClass.prototype.getAge = function () {
        return this.age;
    };
    UserClass.prototype.setTitle = function (title) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this.getAge());
    };
    return UserClass;
}());
var userClass = new UserClass('Jrb', 'Frontend');
// userClass.setTitle(false);
//**********************************************************************************
//Наслідування класів в Typescript
var UserNext = /** @class */ (function () {
    function UserNext(name, job) {
        this.name = name;
        this.job = job;
        this.age = 30;
    }
    UserNext.prototype.getAge = function () {
        return this.age + '';
    };
    return UserNext;
}());
var Jrb = /** @class */ (function (_super) {
    __extends(Jrb, _super);
    function Jrb(job) {
        var _this = _super.call(this, 'Jrb', job) || this;
        _this.age = 100;
        return _this;
    }
    Jrb.prototype.getAge = function () {
        return 'Hello ' + this.age;
    };
    return Jrb;
}(UserNext));
var userNext = new UserNext('Jrb', 'Frontend');
var jrb = new Jrb('Frontend');
// console.log(jrb.getAge());
//**********************************************************************************
//ABSTRACT CLASS
var Car = /** @class */ (function () {
    function Car() {
        this.year = 2010;
    }
    Car.prototype.getCarYear = function () {
        return this.year;
    };
    return Car;
}());
var Mercedes = /** @class */ (function (_super) {
    __extends(Mercedes, _super);
    function Mercedes() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Mercedes.prototype.logInfo = function (info) {
        console.log(info);
    };
    return Mercedes;
}(Car));
var car = new Mercedes();
console.log(car);
