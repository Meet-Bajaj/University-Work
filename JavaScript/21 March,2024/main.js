document.write(`<h1>Array</h1>`)
document.write(`<h2>Multi Dimensional Array</h2><br>`);
var arr1 = [
    [`Meet`, 2301301014, `B.Tech`, 19],
    [`Tejasvi`, 2301301023, `B.Tech`, 18],
    [`Gagan`, 2301301029, `B.Tech`, 18],
    [`Kartik`, 2301301019, `B.Tech`, 19],
];
document.write(`<hr>`)
document.write(`<table border="1" width="100%" cellpadding='10'>`)
document.write(`<tr>`)
document.write(`<th>Name</th>`)
document.write(`<th>Roll NO.</th>`)
document.write(`<th>Program</th>`)
document.write(`<th>Age</th>`)
document.write(`</tr>`)

for (let i = 0; i < arr1.length; i++) {
    document.write(`<tr>`);
    for (let j = 0; j < arr1.length; j++) {
        document.write(`<td>` + arr1[i][j] + `</td>`)
    }
    document.write(`</tr>`)
}
document.write(`</table>`)
document.write(`<br>`)
document.write(`<hr>`)
document.write(`<h1>JavaScript Dom</h1>`)
document.write(`<h2>GetElements Function</h2>`)
var element1 = document.getElementById('heading1')
var element2 = document.getElementsByClassName('heading2')
var element3 = document.getElementsByTagName('h1')

// document.write(`heading1 in element1`)

console.log(element2)

//Function to count child elements

function countChildElement(idname) {
    var parentElement = document.getElementById(idname);
    return parentElement.childElementCount;
}
console.log(countChildElement('heading1')) // Testing By Printing in console 

// Function to change style using class name  
function changeStyle(className, property, value) {
    var elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].style[property] = value;
    }
}
changeStyle(`heading2`,`background-color`,`red`) // Changing the bacckground-color to red of element in class= heading2