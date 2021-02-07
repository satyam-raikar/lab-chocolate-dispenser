var chocolates = [
    "green", "green", "green", "silver", "blue", "crimson", "purple", "red", "crimson", "purple",
    "purple", "green", "pink", "blue", "red", "silver", "crimson", "purple", "silver", "silver",
    "red", "green", "red", "silver", "pink", "crimson", "purple", "green", "red", "silver",
    "crimson", "pink", "silver", "blue", "pink", "crimson", "crimson", "crimson", "red", "purple",
    "purple", "green", "pink", "blue", "red", "crimson", "silver", "purple", "purple", "purple",
    "red", "purple", "red", "blue", "silver", "green", "crimson", "silver", "blue", "crimson",
    "purple", "green", "pink", "green", "red", "silver", "crimson", "blue", "green", "red",
    "red", "pink", "blue", "silver", "pink", "crimson", "purple", "green", "red", "blue",
    "red", "purple", "silver", "blue", "pink", "silver", "crimson", "silver", "blue", "purple",
    "purple", "green", "blue", "blue", "red", "red", "silver", "purple", "silver", "crimson"
];

//Progression 1: Add ___ chocolates of ____ color


function addChocolates(chocolates, color, count) {

    if (count <= 0) {
        return "Number cannot be zero/negative";
    } else {
        for (var i = 0; i < count; i++) { // starting from 0 until the count is reached it adds the color to the

            chocolates.splice(0, 0, color) //splice takes 1st argument as index value and 2nd as number of items to be removed from the
            // and 0at 1st place gives index 1 and insert item at 1st position,
            // and 2nd 0 doesnot remove anything jut insert wothout deleting

        }
    }


}


//Progression 2: Remove ___ chocolates from the top the dispenser

function removeChocolates(chocolates, number) { //the page says the arguments are reviced as "number,chocolates" but arguments are reviced as "chocolates,number"

    var removedChochlates = [];
    //console.log(number)
    if (number >= chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }

    if (number <= 0) {
        return "Number cannot be zero/negative";
    } else {
        for (var i = 0; i < number; i++) {

            removedChochlates.push(chocolates.shift()); //shift method pops from the start of array & returnsthe poped value
            // pop method pops from the end of array


        }
        // console.log(removedChochlates);
        return removedChochlates;
    }


}


//Progression 3: Dispense ___ chocolates


function dispenseChocolates(chocolates, number) {

    var dispencedChochlates = [];

    if (number >= chocolates.length) {
        return "Insufficient chocolates in the dispenser";
    }

    if (number <= 0) {
        return "Number cannot be zero/negative";
    } else {
        for (var i = 0; i < number; i++) {

            dispencedChochlates.push(chocolates.pop()); //shift method pops from the start of array & returnsthe poped value
            // pop method pops from the end of array


        }
        //console.log(dispencedChochlates);
        return dispencedChochlates;
    }



}


//Progression 4: Dispense ___ chocolates of ____ color



function dispenseChocolatesOfColor(chocolates, number, color) {

    console.log(chocolates)
    console.log(chocolates.length)
    console.log(number)
    console.log( color)
    var dispencedChochlatesofColor = [];

    for (var i = -2; i < chocolates.length ; i++) {
        if (chocolates[i] == color) {
            dispencedChochlatesofColor.push(chocolates.pop());
        }
        console.log (chocolates[i] + i)

    }
    console.log(dispencedChochlatesofColor);
    return dispencedChochlatesofColor;
}






//console.log(number,color);


// if ( number >= chocolates.length ) {
//     return "Insufficient chocolates in the dispenser";
// } 
// if( number <= 0){
//     return "Number cannot be zero/negative";
// }

// else {

//     for (var i = 0; i < number; i++) { 

//         if( chocolates[i] == color){
//         dispencedChochlates.push(chocolates.pop());             
//         }

//     }
//     console.log(dispencedChochlates);
//     return dispencedChochlates;
// }



//}




//Progression 5: Display ___ chocolates of each color. Return array of numbers [green, silver, blue, crimson, purple, red, pink]


//Progression 6: Sort chocolates based on count in each color. Return array of colors


//Progression 7: Change ___ chocolates of ____ color to ____ color


//Progression 8: Change all chocolates of ____ color to ____ color and return [countOfChangedColor, chocolates]


//Challenge 1: Remove one chocolate of ____ color from the top


//Challenge 2: Dispense 1 rainbow colored colored chocolate for every 3 chocolates of the same color dispensed