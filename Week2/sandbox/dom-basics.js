const newParagraph = document.createElement("p");
newParagraph.innerText = "Added with Javascript!";
document.body.appendChild(newParagraph);

const image = document.createElement("img");
image.setAttribute("src", "https://picsum.photos/200");
image.setAttribute("alt", "Random Photo")
document.body.appendChild(image);

const newDiv = document.createElement("div");
newDiv.innerHTML = "<ul><li>One</li><li>Two</li><li>Three</li></ul>";
document.body.appendChild(newDiv);

const newSection = document.createElement("section");
const p1 = document.createElement("p");
p1.innerText = "This was added through Javascript"
const h2 = document.createElement("h2");
h2.innerText = "DOM Basics"
newSection.appendChild(h2)
newSection.appendChild(p1)
document.body.appendChild(newSection)