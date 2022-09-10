filters("all")
function filters(c) {
  let i = 0;
  let x = $(".flt");
  if (c == "all") {
    c = "";
  }

  while (i < x.length) {
    filterhapus(x[i], "show");
    if (x[i].className.indexOf(c) > -1) {
      filternongol(x[i], "show");
    }
    i += 1;
  }
}


function filternongol(content, name) {

  let var1 = content.className.split(" ");
  let var2 = name.split(" ");
  let i = 0;
  while (i < var2.length) {
    if (var1.indexOf(var2[i]) == -1) {
      content.className += " " + var2[i];
    }
    i += 1;
  }
}

function filterhapus(content, name) {

  let var1 = content.className.split(" ");
  let var2 = name.split(" ");
  let i = 0;
  while (i < var2.length) {
    while (var1.indexOf(var2[i]) > -1) {
      var1.splice(var1.indexOf(var2[i]), 1);
    }
    i+=1;
  }
  content.className = var1.join(" ");
}

let button = $(".btn");
let i = 0;
while (i < button.length) {
  button[i].addEventListener("click", function () {
    let current = $(".acv");
    current[0].className = current[0].className.replace(" acv", "");
    this.className += " acv";
  });
  i+=1;
}
