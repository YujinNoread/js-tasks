/*-----------First task----------------------------------*/
console.log("First task");
const chars = [
    {name: "tony", age: 20},
    {name: "feel", age: 30},
];

function pluck(array, prop) {
    let result = [];
    array.forEach((element) => {
        result.push(element[prop]);
    });
    return result;
}

console.log(pluck(chars, "name")); // ['tony', 'feel']
/*----------Second task---------------------------------*/
console.log("Second task");
const arr1 = [
    [1, 2],
    [3, 4],
];
const arr2 = aCopy(arr1);

function aCopy(array) {
    return array.slice();
}

arr1.push([5, 6]);

console.log(arr1); // [[1,2], [3,4], [5,6]]
console.log(arr2); // [[1,2], [3,4]]

/*-------------------------------------------------------*/

const ar1 = [
    ["a", "b", "c", "d"],
    ["e", "f"],
    ["g", "h", "i"],
];
const ar2 = aCopy(ar1);

ar1.unshift(["z"]);

console.log(ar1); // [['z'], ['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]
console.log(ar2); // [['a','b', 'c','d'], ['e', 'f'], ['g', 'h', 'i']]

/*-----------Third task----------------------------------*/
console.log("Third task");
const arr = splitArray(["a", "b", "c", "d", "e", "f"], 2);

function splitArray(array, chunk) {
    let result = [];
    for (let i = 0, j = array.length; i < j; i += chunk) {
        result.push(array.slice(i, i + chunk));
    }
    return result;
}

console.log(arr); // [['a', 'b'], ['c', 'd'], ['e', 'f']]

/*-----------Four task-----------------------------------*/
console.log("Four task");
const value4 = clearArray([1, 0, 2, false, "", 3]);

function clearArray(array) {
    for (let i = array.length - 1; i >= 0; i--) {
        if (array[i] == false) {
            array.splice(i, 1);
        }
    }
    return array;
}

console.log(value4); // [1, 2, 3]
/*-----------Five task----------------------------------*/
console.log("Five task");
const value5 = [1];
const concatValue5 = concatArray(value5, 2, [3], [[4]]);

function concatArray(array, param1, param2, param3) {
    return array.slice().concat(param1, param2, param3);
}

console.log(concatValue5); // [1, 2, 3, [4]]
console.log(value5); // [1]

/*-----------Six task-----------------------------------*/
console.log("Six task");

function rm(array, count = 1) {
    if (array.length < count) {
        return [];
    } else {
        return array.splice(count);
    }
}

console.log(rm([1, 2, 3])); // [2, 3]

console.log(rm([1, 2, 3], 2)); // [3]

console.log(rm([1, 2, 3], 5)); // []

console.log(rm([1, 2, 3], 0)); // [1, 2, 3]

/*-----------Seven task----------------------------------*/
console.log("Seven task");

function rl(array, count = 1) {
    if (array.length < count) {
        return [];
    } else {
        array.splice(array.length - count, count);
        return array;
    }
}

console.log(rl([1, 2, 3])); // [1, 2]

console.log(rl([1, 2, 3], 2)); // [1]

console.log(rl([1, 2, 3], 5)); // []

console.log(rl([1, 2, 3], 0)); // [1, 2, 3]

/*-----------Eight task----------------------------------*/
console.log("Eight task");

const value8 = [1, 2, 3];

function replaceIn(array, change, start = 0, end = array.length) {
    for (let i = start; i < end; i++) {
        array[i] = change;
    }
    return array;
}

replaceIn(value8, "a");
console.log(value8); // ['a', 'a', 'a']

replaceIn(value8, 2);
console.log(value8); // [2, 2, 2]

const altValue8 = [4, 6, 8, 10];
replaceIn(altValue8, "*", 1, 3);
console.log(altValue8); // [4, '*', '*', 10]

/*----------Nine task----------------------------------*/
console.log("Nine task");

function init(array) {
    array.pop();
    return array;
}

const value9 = [1, 2, 3, 4];
const rValue9 = init(value9);

console.log(rValue9); // [1,2,3]

/*----------Ten task----------------------------------*/
console.log("Ten task");

function uni(array) {
    let result = [];
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] == array[j]) result.push(array[i])
        }
    }
    return result
}

const value10 = [1, 2, 3, 4, 2, 5, 6, 1, 3];
const rValue10 = uni(value10);

console.log(rValue10); // [1,2,3]

/*----------Eleven task------------------------------*/
console.log("Eleven task");

const value11 = ['a', 'b', 'c', 'd'];

function nfa(array, index) {
    if (index > 0) {
        return array[index - 1]
    } else {
        let res = array.reverse()
        return res[(index * -1) - 1]
    }

}

console.log(nfa(value11, 1)); // 'a'
console.log(nfa(value11, -2)); // 'c';

/*-------------------------------------------------------*/
console.log("Twelve task");

console.log([1, 4, 3, 0, 4, 5, 4].reduce((sum, current) => (current % 2 == 0) ? sum + Math.sqrt(current) : sum, 0))  // 6

/*------------------Thirteen task-------------------*/
console.log("Thirteen task");

function group(array1, array2, array3) {
    let maxLenght = Math.max(array1.length, array2.length, array3.length)
    let result = [];
    for (let i = 0; i < maxLenght; i++) {
        result.push([array1[i], array2[i], array3[i]])
    }
    return result
}

console.log(group(['a', 'b'], [1, 2], [true, false]));// [['a', 1, true], ['b', 2, false]]
/*----------------Fourteen task--------------------------*/
console.log("Fourteen task");

const value14 = ['a', 'b', 'c'];

function implode(array, separator) {
    return array.join(separator)
}

console.log(implode(value14, '-')); // 'a-b-c'

/*--------------Fifteen task----------------------------*/
console.log("Fifteen task");

const value15 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function implod(array, separator, even) {
    let first = array.filter(el => el % 2 == 0);
    let second = array.filter(el => el % 2 !== 0);
    if (even) {
        return first.join(separator)
    } else {
        return second.join(separator)
    }
}

console.log(implod(value15, ':', true)); // '2:4:6:8'
console.log(implod(value15, '*', false)); // '1*3*5*7*9'

/*--------------Sixteen task----------------------------*/
console.log("Sixteen task");

function findYear(start, end) {
    let array = [];
    let result = []
    for (let i = 0; i <= (end - start); i++) {
        array[i] = start + i;
    }
    array.forEach(function (item) {
        if (item % 4 != 0) {

        } else if (item % 100 == 0 && item % 400 != 0) {

        } else result.push(item)
    })
    return result
}

console.log(findYear(2000, 2018)); // [2000,2004,2008,2012,2016]

/*--------------Seventeen task---------------------------*/
console.log("Seventeen task");

function rnd(array) {
    return array.sort(() => Math.random() - 0.5);
}

console.log(rnd([1, 2, 3, 4, 5, 6])); // [6,1,5,4,3,2]

/*--------------Eighteen task---------------------------*/
console.log("Eighteen task");

const value18 = [1, 2, 'a'];
const rValue18 = [1, 2, 3, 4, 'b'];

Array.prototype.diff = function (a) {
    return this.filter(function (i) {
        return a.indexOf(i) < 0;
    });
};

function diff(array1, array2) {
    let result = []
    result = result.concat(array1.diff(array2), array2.diff(array1))
    return result
}

console.log(diff(value18, rValue18)) // [a,3,4,b]

/*------------Nineteen task----------------------------*/
console.log("Nineteen task");

const value19 = [3, 8, 7, 6, 5, -4, 3, 2, 1];

function sort(array) {
    array.sort(function (a, b) {
        if (a > b) {
            return -1;
        }
        if (a < b) {
            return 1;
        }
    })
    return array
}


console.log(sort(value19)); //[8,7,5,6,3,3,2,1,-4]

/*-----------Twenty task------------------------------*/
console.log("Twenty task");

const value20 = [7, 'z', 'z', 'z', 3, 7, 'z', 7, 'z', 3, 5, 9, 7];

function fn(array) {
    let stack = array.reduce((a, b) => ({
        ...a,
        [b]: (a[b] || 0) + 1
    }), {})
    const maxValue = Math.max.apply(null, Object.values(stack))
    return Object.keys(stack).filter(k => stack[k] === maxValue)
}

console.log(fn(value20)); // 'z'


