const container = document.getElementById("container");
console.log(container);
container.style.border = "1px solid ";
container.style.padding = "1rem";

const title = document.getElementsByClassName("title");
console.log(typeof title);
title[0].style.color = "blue";

//use of getelementbyid
const content = document.getElementById("content");
console.log(content);
content.style.color = "red";

//use of getelementbyclassname
const subContent = document.getElementsByClassName("subtitle")[0];
console.log(subContent);
subContent.innerHTML = "This is Subcontainer coming form js";

//use of query selector
const footer = document.querySelector("#footer");
console.log(footer);
const footerValue = footer.textContent;
console.log("This is " + footerValue);
const attributeContains = footer.getAttribute("style");

// attribut contains
console.log("this containes " + attributeContains);


const parent = document.getElementById('parent')
const newE = document.createElement("h2");
newE.innerText = "This is a thulo headidng";

parent.appendChild(newE);


// parent.removeChild(newE)

console.log(footer.classList)
console.log(container.firstChild)
console.log(container.childNodes)
