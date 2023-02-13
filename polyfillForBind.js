const name = {
    firstName: 'Vishesh',
    lastName: 'Singh'
}

const printName = function(hometown, state, country) {
    console.log(this.firstName + ' ' + this.lastName + " " + hometown + " " + state + " " + country);
}

const printMyName = printName.bind(name, 'hyderabad');
printMyName("TG", 'India')

Function.prototype.myBind = function(...args) {
    let obj = this,
    params = args.slice(1)
    return function(...args2) {
        return obj.apply(args[0], [...params, ...args2])
    }
}

const printMyName2 = printName.myBind(name, 'hyderabad');
printMyName2("TG", 'India')