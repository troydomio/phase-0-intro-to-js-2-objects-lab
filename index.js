// Write your solution in this file!
let employee = {
    name: 'Grace Hummer',
    streetAddress: '418 Margo lane'
}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({},employee,{[key]: value})
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee,{[key]: value})
}

function deleteFromEmployeeByKey(employee, key){
 let newEmployee = {};
 delete employee.key;
 return Object.assign(newEmployee);
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee
}