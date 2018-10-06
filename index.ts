//*******************************************************************************
//string
let str: string = 'string!';

//number
let num: number = 10;

//boolean
let isTrue: boolean = true;
let isFalse: boolean = false;

// other
let unknown: any = '1';
//**********************************************************************************
//Array
let numArray1: number[] = [1,2,3];
let numArray2: Array<number> = [1,2,3];

let strArray1: string[] = ['1','2','3'];
let strArray2: Array<string> = ['1','2','3'];

//tuples
let array: [number,number,string] = [1,2,'3'];

let array2: [boolean, string, number] = [true, 'str', 2];
//**********************************************************************************
function getMyAge(age: number, prefix: string, somText: string = '-SumText'): string {
    return prefix + age + somText;
}

function consoleLog(str: string): void { // Коли функція Нічого не повертає
    console.log(str)
}

let mySum: (a: number, b: number) => number;
function sum(num1: number, num2: number): number {
    return num1 + num2
}
mySum = sum;
//**********************************************************************************
//Object
type UserTest = {name: string, age: number, logName: () => void, jobs: string[], getJobs?: () => string[]};

let user1: UserTest = {
    name: 'JERB',
    age: 45,
    jobs: ['a','b'],
    logName(): void {
        console.log(this.name);
    },
    getJobs(): string[] {
        return this.jobs;
    }
};

let user2: UserTest = {
    name: 'Just',
    age: 35,
    jobs: ['c'],
    logName(): void {
        console.log(this.name);
    }
};
//**********************************************************************************
type User = {name: string, age: number};

const user: User = {
    name: 'JBS',
    age: 33
};

function logUser(user: User): void {
    console.log(user.name + ': ' + user.age)
}

//**********************************************************************************
//Типи в TypeScript (1)
enum Job {
    Frontend,
    Backend = 50,
    Designer
}

const job: Job = Job.Backend;
// console.log(job);

const job2: Job = Job.Designer;
// console.log(job2);

//Типи в TypeScript (2) never
function throwNewError(err: string): never {
    throw new Error(err);
}

//Типи в TypeScript (3) never
let newVar;
newVar = null;

let myNumber: number | null = 20;
myNumber = null;

//**********************************************************************************
//TypeScript CLASS
class UserClass {
    private isTeacher: boolean = true; // private
    protected age: number = 30;

    constructor(public name: string, public job: string) {

    }

    private getAge(): number {
        return this.age;
    }

    public setTitle(title: boolean) {
        console.log(this.isTeacher);
        this.isTeacher = title;
        console.log(this.isTeacher);
        console.log(this.getAge());
    }
}

const userClass = new UserClass('Jrb', 'Frontend');
// userClass.setTitle(false);

//**********************************************************************************
//Наслідування класів в Typescript
class UserNext {
    protected age: number = 30;

    constructor(public name: string, public job: string) {
    }

    public getAge(): string {
        return this.age + '';
    }

}

class Jrb extends UserNext {

    constructor(job: string) {
        super('Jrb', job);
        this.age = 100;
    }

    getAge(): string {
        return 'Hello ' + this.age;
    }
}

const userNext = new UserNext('Jrb', 'Frontend');
const jrb = new Jrb('Frontend');
// console.log(jrb.getAge());

//**********************************************************************************
//ABSTRACT CLASS
abstract class Car {
    model: string = 'test';
    year: number = 2010;

    abstract logInfo(info: string): void;

    getCarYear(): number {
        return this.year;
    }
}

class Mercedes extends Car {
    logInfo(info: string): void {
        console.log(info);
    }
}

const car = new Mercedes();
// console.log(car);

//**********************************************************************************
function getLength(variable: ILength): void {
    console.log('getLength', variable.length);
}
// getLength([1,2,3,4,5,6]);

const box = {
    name: 'JRB',
    length: 20
};

interface ILength {
    length: number;
}

// getLength(box);
// getLength([1,2,3]);

//INTERFACE
interface IUser {
    name: string;
    age?: number;

    logInfo(info: string): void
}

interface IGetYear {
    getYear(): number;
}

class UserInter implements IUser, IGetYear {
    name: string = 'user';
    age: number = 27;

    logInfo(info: string): void {
        console.log(info)
    }

    getYear(): number {
        return this.age;
    }
}

const userInter = new UserInter();
// console.log(userInter);
//**********************************************************************************
// function getter(data: any) {
//     return data;
// }
// console.log(getter(100).length);
// console.log(getter('JRB').length);

function genericGetter<T> (data: T): T {
    return data;
}
// console.log(genericGetter<number>(100).toFixed(2));
// console.log(genericGetter<string>('JRB').length);

let getGenericFunction: <T>(data: T) => T = genericGetter;
// console.log(getGenericFunction<number>(100).toFixed(2));
// console.log(getGenericFunction<string>('JRB').length);

class Multiply<T extends number | string> {
    constructor(private a: T, private b: T) {}

    public getResult(): number{
        return +this.a * +this.b;
    }
}

const mNum = new Multiply<number>(10,5);
// console.log('Number', mNum.getResult());

const mStr = new Multiply<string>('50','40');
// console.log('String', mStr.getResult());

//**********************************************************************************

