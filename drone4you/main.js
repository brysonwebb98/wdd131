document.addEventListener("DOMContentLoaded", function() {
    const images = [
        { path: "images/gallery/building1.png", id: "building", alt: "Building 1" },
        { path: "images/gallery/building2.png", id: "building", alt: "Building 2" },
        { path: "images/gallery/building3.png", id: "building", alt: "Building 3" },
        { path: "images/gallery/building4.png", id: "building", alt: "Building 4" },
        
        { path: "images/gallery/home1.png", id: "home", alt: "Home 1" },
        { path: "images/gallery/home2.png", id: "home", alt: "Home 2" },
        { path: "images/gallery/home3.png", id: "home", alt: "Home 3" },
        { path: "images/gallery/home4.png", id: "home", alt: "Home 4" },
        
        { path: "images/gallery/nature2.png", id: "nature", alt: "Nature 2" },
        { path: "images/gallery/nature3.png", id: "nature", alt: "Nature 3" },
        { path: "images/gallery/nature4.png", id: "nature", alt: "Nature 4" },
        { path: "images/gallery/nature5.png", id: "nature", alt: "Nature 5" },
        
        { path: "images/gallery/other1.png", id: "other", alt: "Other 1" },
        { path: "images/gallery/other2.png", id: "other", alt: "Other 2" }
    ];

    const categorySelect = document.getElementById('category');
    const galleryContainer = document.getElementById("gallery");

    categorySelect.addEventListener("change", function() {
        const selectedCategory = categorySelect.value; 
        galleryContainer.innerHTML = ''; 

        const filteredImages = images.filter(image => {
            return selectedCategory === '' || image.id === selectedCategory;
        });

        filteredImages.forEach(image => {
            const img = document.createElement("img");
            img.src = image.path;
            img.id = image.id;
            img.alt = image.alt;
            galleryContainer.appendChild(img);
        });
    });
});


