// Code your solution here
function findMatching(names, str) { 
    /* 
    str = str.split(" "); 
    let result = [];
    for (let i = 0; i < names.length; i++) { 
        for (let j = 0; j < str.length; j++) {
            //result = names.filter(); 
            if (names[i].toUpperCase() === str[j].toUpperCase()) {
                result.push(names[i]); 
            }
        }
    }
    return result; 
}
*/
    return names.filter(cb => cb.toLowerCase() === str.toLowerCase())}

function fuzzyMatch(names, str) {
    function firstTwo(names, str) {
        for (let i = 0; i < names.length; i++) {
            if (names[i].indexOf(str) > 2) {
                return names[i]; 
            }
        }
    }
    return names.filter(firstTwo); 
}


function matchName(driver, str) {
    return driver.filter(func => func.name === str) 
}
