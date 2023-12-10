const filterOutOdds = (...args) => args.filter(num => num % 2 ===0);

// const nums = [...args];
// return nums.filter(num => num % 2 ===0)

const findMin = (...nums) => nums.reduce((num, next) => num <=next? num : next);

// nums.reduce(num, next) => num <=next? num : next;

//mergeObjects
const mergeObjects = (obj1,obj2) => ({...obj1,...obj2});

//doubleAndReturnArgs
const doubleAndReturnArgs = (arr, ...args) => [...arr,...args.map(num => num *2)];

// args.forEach(num => num *2);


// remove a random element in the items array and return a new array without that item.
function removeRandom(items) {
    const idxRandom = Math.floor(Math.random() * items.length);
    return [...items.slice(0,idxRandom), ...items.slice(idxRandom+1)];
}

// idxRandom = Math.round(Math.random() * items.length);

// return [...items.slice(0,idxRandom), ...items.slice(idxRandom)];

// Return a new array with every item in array1 and array2.
const extend = (arr1, arr2) => [...arr1, ...arr2];

// Return a new object with all the keys and values from obj and a new key/value pair

const addKeyVal = (obj, key, val) => ({...obj, [key]: val});
// const addKeyVal = (obj, key, val) => {
//     let objNew = {...obj};
//     return {objNew, key, val};
// }

// Return a new object with a key removed.
const removeKey = (obj, key) => {
    let objNew = {...obj};
    delete objNew[key];
    return objNew;
};

// Combine two objects and return a new object.
// const combine = (obj1, obj2) => {
//     let objNew = {...obj1, ...obj2};
//     return objNew;
// };

const combine = (obj1, obj2) => {
    return {...obj1, ...obj2};
};

// Return a new object with a modified key and value.
const update = (obj, key, val) =>   {
    let objNew = {...obj, [key]: val};
    return objNew;
};