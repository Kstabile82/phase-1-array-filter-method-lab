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
    return names.filter(possibleMatch => possibleMatch.toLowerCase() === str.toLowerCase())}

function fuzzyMatch(names, str) {
    /*
    str = str.split(" "); 
    let result = []; 
    for (let i = 0; i < names.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (names[i][0] === str[j][0]) {
                result.push(names[i]); 
            }
        }
    }
    return result; 

*/
    return names.filter(name => name[0] === str)
}

function matchName(driver, str) {
}