//This is input element
let filterInput = document.getElementById("filterInput")

//This is event listener
filterInput.addEventListener("keyup",filterNames);


function filterNames() {
  //This is you can get value of input
  let filterValue = document.getElementById("filterInput").value.toUpperCase();


  //This is ul element with it's id
  let ul = document.getElementById("names");

  //This is all li list items in ul element
  let li = ul.querySelectorAll("li.collection-item")

  //This is loop for every li item in ul
  for (var i = 0; i < li.length; i++) {
    let a = li[i].getElementsByTagName("a")[0];
    if (a.innerHTML.toUpperCase().indexOf(filterValue) > -1) {
      li[i].style.display = "";
    }
    else {
      li[i].style.display = "none";
    }
  }
}
