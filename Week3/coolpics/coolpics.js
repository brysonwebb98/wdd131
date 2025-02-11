
// SMALL SCREEN CLASS TOGGLE FOR HIDING MENU ITEMS.
const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector("ul");

menuButton.addEventListener("click", function() {
    menu.classList.toggle("hide");
});

// HANDLE THE WINDOW RESIZE EVENT
function handleResize() {
    if (window.innerWidth > 1000) {
        menu.classList.remove("hide");
    }
    else {
        menu.classList.add("hide");
    }
}

window.addEventListener("resize", handleResize);
handleResize();

// MAKE IT WORK
function viewerTemplate(imagePath, alt) {
    return `<div class="viewer"> <figure>
        <button class="close-viewer">X</button>
        <img src="${imagePath}" alt="${alt}"> </figure>
    </div>`;
}

function viewHandler(event) {
    // create a variable to hold the element that was clicked on from event.target
    const clickedImage = event.target;

    // get the src attribute from that element and 'split' it on the "-"
    const imagePath = clickedImage.src.split('-')[0];

    // construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    const fullImagePath = imagePath + "-full.jpeg";

    // insert the viewerTemplate into the top of the body element
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(fullImagePath, clickedImage.alt));

    // add a listener to the close button (X) that calls a function called closeViewer when clicked
    const closeButton = document.querySelector(".close-viewer");
    closeButton.addEventListener("click", closeViewer);
}

function closeViewer() {
    const viewer = document.querySelector(".viewer");
    if (viewer) {
        viewer.remove();
    }
}

const gallery = document.querySelector(".gallery");

gallery.addEventListener("click", viewHandler);
