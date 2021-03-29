var piconelist = [
    "Item1_List1.jpg",
    "Item2_List1.jpg",
    "Item3_List1.jpg",
    "Item4_List1.jpg",
    "Item5_List1.jpg"
];
var pictwolist = [
    "Item1_List2.jpg",
    "Item2_List2.jpg",
    "Item3_List2.jpg",
    "Item4_List2.jpg",
    "Item5_List2.jpg"
];
var picthreelist = [
    "Item1_List3.jpg",
    "Item2_List3.jpg",
    "Item3_List3.jpg",
    "Item4_List3.jpg",
    "Item5_List3.jpg"
];
var picfourlist = [
    "Item1_List4.jpg",
    "Item2_List4.jpg",
    "Item3_List4.jpg",
    "Item4_List4.jpg",
    "Item5_List4.jpg"
];

var counterone = 0;
var countertwo = 0;
var counterthree = 0;
var counterfour = 0;


function one() {
    document.getElementById("picone").src = piconelist[counterone];
    counterone++;
}

function two() {
    document.getElementById("pictwo").src = pictwolist[countertwo];
    countertwo++;
}

function three() {
    document.getElementById("picthree").src = picthreelist[counterthree];
    counterthree++;
}

function four() {
    document.getElementById("picfour").src = picfourlist[counterfour];
    counterfour++;
}
