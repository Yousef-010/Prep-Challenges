'use strict';

// -------------------------------------------------------------------------------------------------------
//  Challenge 01:
//  Required:
//
//  Write a function that takes an array and returns the maximum value in the provided array
//  without using build-in functions.
//  
// Input: [12, 32, 22, 45, 78, 12, 50]
// Output: 78
//  

const findMax = (arr)=>{
    let max
    let array =arr
    max =array[0]
     
    for (let i =0; i < array.length;i++){
        if (array[i]>max){
            max = array[i]
        }
    }

    return max;
}
findMax([20, 31, 15, 41, 20, 48])
// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 02:
//  Required:
//
//  Write a function that takes an arrays and returns the Sum of the numeric values
//  inside the array (there could be strings inside), without using built-in functions
//  
// Input: [20, '234', 'car', 41, 20, 'chair']
// Output: 81
//  

const sumNums = (arr)=>{
    let sum=0
     for (let i = 0 ; i < arr.length; i++) {
          
        if ( arr[i]+0==arr[i]){
           sum+=arr[i]
        }
    }
     return sum
}
sumNums([20, "234", "car", 41, 20, "chair"])

// -------------------------------------------------------------------------------------------------------

// -------------------------------------------------------------------------------------------------------
//  Challenge 03:
//  optional:
//
//  Write a function that takes an array and returns the array reversed
//  without using built-in functions
//  
// Input: ['C#', 'JS', 'Ruby','Python'] 
// Output: ['Python','Ruby','JS','C#']

const reverseArray = (arr)=>{
    let reversedArray =[]
    for (let i = arr.length-1 , j=0; i>=0; i--,j++) {
        reversedArray[j]=arr[i]
        

    }
    return reversedArray
}
reverseArray([1, 2, 3, 4, 5])
// -------------------------------------------------------------------------------------------------------

module.exports = {findMax , sumNums, reverseArray};