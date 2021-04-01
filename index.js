// Write your solution in this file!
const employee = {};

function updateEmployeeWithKeyAndValue(employee,key,value){
    const emp = {...employee};
    return Object.assign(emp, { [key]: value });
    
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
employee[key] = value;
return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const emp = {...employee};
    delete emp[key];
    return emp;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}