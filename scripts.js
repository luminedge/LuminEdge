// Sample product data with gallery images
const products = [
    {
        name: "Elegant Jewelry Box",
        category: "storage",
        price: "$25",
        image: "images/jewelry-box.jpg",
        info: `
            Product Name: Elegant Jewelry Box<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: Custom<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade) Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Based on your quantity
        `,
        gallery: ["images/jewelry-box.jpg", "images/jewelry-box-2.jpg", "images/jewelry-box-3.jpg"],
        whatsappLink: "https://wa.me/00989233479443?text=I%20want%20to%20order%20Elegant%20Jewelry%20Box"
    },
    {
        name: "Laser-Cut Pet Earrings",
        category: "jewelry",
        price: "$15",
        image: "images/laser-earring-01.jpg",
        info: `
            Product Name: Elegant Jewelry Box<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: Custom<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade) Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Based on your quantity
        `,
        gallery: ["images/laser-earring-01.jpg", "images/laser-earring-02.jpg"],
        whatsappLink: "https://wa.me/00989233479443?text=I%20want%20to%20order%20Laser-Cut%20Pet%20Earrings"
    },
    {
        name: "Acrylic Wall Art",
        category: "wall-art",
        price: "$40",
        image: "images/wall-art-01.jpg",
        info: `
            Product Name: Elegant Jewelry Box<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: Custom<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade) Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Based on your quantity
        `,
        gallery: ["images/wall-art-01.jpg", "images/wall-art-02.jpg"],
        whatsappLink: "https://wa.me/00989233479443?text=I%20want%20to%20order%20Acrylic%20Wall%20Art"
    },
    {
        name: "Limited Edition Poker Set",
        category: "games",
        price: "$100",
        image: "images/poker-set.jpg",
        info: `
            Product Name: Elegant Jewelry Box<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: Custom<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade) Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Based on your quantity
        `,
        gallery: ["images/poker-set.jpg", "images/poker-set-1.jpg", "images/poker-set-2.jpg"],
        whatsappLink: "https://wa.me/00989233479443?text=I%20want%20to%20order%20Limited%20Edition%20Poker%20Set"
    }
];

// Render products dynamically
// const renderProducts = () => {
//     const productsGrid = document.getElementById("products-grid");
//     products.forEach((product, index) => {
//         const productCard = `
//             <div class="col-md-4">
//                 <div class="card mb-4">
//                     <img src="${product.image}" class="card-img-top" alt="${product.name}">
//                     <div class="card-body">
//                         <h5 class="card-title">${product.name}</h5>
//                         <p class="card-text">${product.price}</p>
//                         <a href="${product.whatsappLink}" class="btn btn-primary">Order Now</a>
//                         <button class="btn btn-secondary mt-2" onclick="openGallery(${index})">View Gallery</button>
//                     </div>
//                 </div>
//             </div>
//         `;
//         productsGrid.innerHTML += productCard;
//     });
// };

// Render products dynamically
const renderProducts = (filter = "all") => {
    const productsGrid = document.getElementById("products-grid");
    productsGrid.innerHTML = ""; // Clear the grid before rendering

    const filteredProducts = filter === "all" 
        ? products 
        : products.filter(product => product.category === filter);

    filteredProducts.forEach((product, index) => {
        const productCard = `
            <div class="col-md-4">
                <div class="card mb-4">
                    <img src="${product.image}" class="card-img-top" alt="${product.name}">
                    <div class="card-body">
                        <h5 class="card-title">${product.name}</h5>
                        <p class="card-text">${product.price}</p>
                        <a href="${product.whatsappLink}" class="btn btn-primary">Order Now</a>
                        <button class="btn btn-secondary mt-2" onclick="openGallery(${index})">View Gallery</button>
                        <button class="btn btn-info mt-2" onclick="openProductInfo(${index})">Product Info</button>
                    </div>
                </div>
            </div>
        `;
        productsGrid.innerHTML += productCard;
    });
};

// Open product info modal
const openProductInfo = (index) => {
    const product = products[index];
    const productInfoTitle = document.getElementById("productInfoTitle");
    const productInfoBody = document.getElementById("productInfoBody");

    // Update modal content
    productInfoTitle.innerText = product.name;
    productInfoBody.innerHTML = product.info;

    // Show modal
    const infoModal = new bootstrap.Modal(document.getElementById("productInfoModal"));
    infoModal.show();
};

// Initialize the page
if (document.getElementById("products-grid")) {
    renderProducts();
}

// Open gallery modal with carousel images
const openGallery = (index) => {
    const product = products[index];
    const carouselImages = document.getElementById("carouselImages");
    const productGalleryTitle = document.getElementById("productGalleryTitle");

    // Update modal title
    productGalleryTitle.innerText = product.name;

    // Insert gallery images into carousel
    carouselImages.innerHTML = product.gallery.map((image, i) => `
        <div class="carousel-item ${i === 0 ? 'active' : ''}">
            <img src="${image}" class="d-block w-100" alt="${product.name}">
        </div>
    `).join("");

    // Show modal
    const galleryModal = new bootstrap.Modal(document.getElementById("productGalleryModal"));
    galleryModal.show();
};

// Initialize the page
if (document.getElementById("products-grid")) {
    renderProducts();
}

