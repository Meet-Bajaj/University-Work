// Write a script that alternates the background color of table row , Use document.getElementByTagName() to get all <tr> elements within a table , then manuplate the css properties to achive the alternating colors.

// document.write(`<hr>`)

var row = document.getElementsByTagName("tr")
var i
for (i = 0; i < row.length; i++) {
    if (i % 2 == 0) {
        row[i].className = "even"
    }
    else {
        row[i].className = "odd"
    }

}

//Build a filter option that hide element based on even class name. The function should take the class name as input and hide all the element with that class using document.getElementByClassName().

// function changeStyle(className, property, value) {
//     var elements = document.getElementsByClassName(className);
//     for (let i = 0; i < elements.length; i++) {
//         elements[i].style[property] = value;
//     }
// }

function hideElements(Element){
    // var prop = `display`
    var Elements = document.getElementById(Element)
    // for (let i=0 ; i < Elements.length ; i++){
    Elements.style.display ="none";
    }
