

import data from './data.json' assert { type: 'json' };
console.log(data);


var Table = document.getElementById("Table");

var sortAZ = document.getElementById("sortAZ")
var sortZA = document.getElementById("sortZA")
var sortMarks = document.getElementById("sortMarks")
var sortPassing = document.getElementById("sortPassing")
var sortGender = document.getElementById("sortGender")
var sortClass = document.getElementById("sortClass")

var searchBox = document.getElementById("searchBox")
var searchButton = document.getElementById("searchButton")

function insert(haha) {  haha.map((e) => {
   
    var row = Table.insertRow(-1);
   
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)
  
    ID.innerHTML = e.id

    var image = document.createElement("img")
    image.src = e.img_src
    image.style.border = "1px solid black"
    image.style.borderRadius = "50%"
    image.style.width = "35px"
    Name.append(image)

    var span = document.createElement("span")
    span.style.paddingLeft = "10px"
    span.innerText = e.first_name + " " + e.last_name
    Name.append(span)
  
    Name.className = "nameBlock"

    Gender.innerText = e.gender
    Class.innerText = e.class
    Marks.innerText = e.marks
    Email.innerText = e.email
    if (e.passing == true) {
        Passing.innerText = "Pass"
    }
    else {
        Passing.innerText = "Fail"
    }
})
}

insert(data)


searchButton.onclick = function () {
   
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
   
    let value = searchBox.value.toLowerCase()

    let filter1 = data.filter(e => e.first_name.toLowerCase().includes(value) || e.last_name.toLowerCase().includes(value) || e.email.toLowerCase().includes(value))
    insert(filter1)
}


function fliterPassing() {
 
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
    let filter2 = userdata.filter(e => e.passing == true)
    insert(filter2)
}
sortPassing.addEventListener('click', fliterPassing)


function fliterGender() {
  
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
    let filter3a = data.filter(e => e.gender === "Female")
    let filter3b = data.filter(e => e.gender === "Male")
    insert(filter3a)
  
    var row = Table.insertRow(-1);
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)

    ID.innerHTML = " "
    Name.innerHTML = " "
    Gender.innerHTML = " "
    Class.innerHTML = " "
    Marks.innerHTML = " "
    Passing.innerHTML = " "
    Email.innerHTML = " "

    var row = Table.insertRow(-1);
    var ID = row.insertCell(0)
    var Name = row.insertCell(1)
    var Gender = row.insertCell(2)
    var Class = row.insertCell(3)
    var Marks = row.insertCell(4)
    var Passing = row.insertCell(5)
    var Email = row.insertCell(6)

    ID.innerHTML = "ID"
    Name.innerHTML = "Name"
    Gender.innerHTML = "Gender"
    Class.innerHTML = "Class"
    Marks.innerHTML = "Marks"
    Passing.innerHTML = "Passing"
    Email.innerHTML = "Email"

    insert(filter3b)
}
sortGender.addEventListener('click', fliterGender)

function fliterClass() {
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
    let filter4 = data.sort((p, q) => {
        return p.class - q.class;
    });
    insert(filter4)
}
sortClass.addEventListener('click', fliterClass)

function fliterMarks() {
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
    let filter5 = data.sort((p, q) => {
        return p.marks - q.marks;
    });
    insert(filter5)
}
sortMarks.addEventListener('click', fliterMarks)

function fliterAZ() {
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
    let filter6 = data.sort(function (a, b) {
        if (a.first_name < b.first_name) {
          return -1;
        }
      });
    insert(filter6)
}
sortAZ.addEventListener('click', fliterAZ)

function fliterZA() {
    var totalRows = Table.rows.length;
    for (var i = totalRows - 1; i > 0; i--) {
        Table.deleteRow(i);
    }
    let filter7 = data.sort(function (a, b) {
        if (a.first_name > b.first_name) {
          return -1;
        }
      });
    insert(filter7)
}
sortZA.addEventListener('click', fliterZA)
