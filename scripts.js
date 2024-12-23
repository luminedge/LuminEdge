// Sample product data with gallery images
const products = [
    {
        name: "Frosted acrylic box",
        category: "storage",
        price: "$25",
        image: "images/storage-box-01-01.jpg",
        info: `
            <strong>Cherished Moments in a Box: The Enchantment of UV Gradient Acrylic Gift Boxes</strong><br>
            Discover a new horizon in the art of gifting with our unique UV gradient acrylic gift box, a vessel not just for presents, but for emotions as well. Each box features a warm orange hue that softly transitions into a serene pink, reminiscent of a dawn sky's splendid gradient, captivating the eye and enchanting the heart. This masterpiece box is designed for an array of occasions, from the intimate moments of birthdays and anniversaries to the grand celebrations of weddings and corporate milest...<br>
            Product Name: Frosted acrylic box <br>    
            Material: acrylic sheet <br>
            Size: customizable<br>
            Thickness: customizable<br>
            Sample: Include Sample<br>
            Logo: customizable<br>
            OEM&ODM: Available<br>
            Processing: (Handmade)Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Delivery Terms: DHL, UPS,FEDEX,DDP by air or by sea; FOB,CIF,EXW etc<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Dase on your quantity<br>
        `,
        gallery: ["images/storage-box-01-01.jpg", "images/storage-box-01-02.jpg", "images/storage-box-01-03.jpg"],
        whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Frosted%20Acrylic%20Box"
    },
    {
        name: "Acrylic Sneakers Display Box Shoe Box Whole",
        category: "display",
        price: "$15",
        image: "images/display-01-01.jpg",
        info: `
            <strong>Acrylic Sneakers Display Box Shoe Box Whole</strong><br>
            Laser-Cut Pet Earrings stunning poster display or photographic frame, These modern, clear perspex frames are very popular! Please feel free to get customized products made in China at a good price from us.<br>
            Product Name: Acrylic Sneakers Display Box Shoe Box Whole<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: 3mm<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade)Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Delivery Terms: DHL, UPS,FEDEX,DDP by air or by sea; FOB,CIF,EXW etc<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Dase on your quantity<br>

        `,
        gallery: ["images/display-01-01.jpg", "images/display-01-02.jpg", "images/display-01-03.jpg"],
        whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Acrylic%20Sneakers%20Display"
    },
    {
        name: "Food Grade Acrylic Food Tray",
        category: "decor",
        price: "$40",
        image: "images/decor-01-01.jpg",
        info: `
            <strong>Food Grade Acrylic Food Tray</strong><br>
            Acrylic trays wholesale, Clear acrylic tray with handles, Acrylic tray black, Acrylic tray square. Each tray is handmade, and completely customizable, Made with crystal-clear, laser-cut acrylic, these chic, stylish serving and decorative trays breathe life into any room. <br>
            Product Name: Food Grade Acrylic Food Tray<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: 3mm<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade)Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Delivery Terms: DHL, UPS,FEDEX,DDP by air or by sea; FOB,CIF,EXW etc<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Dase on your quantity<br>
        `,
        gallery: ["images/decor-01-01.jpg", "images/decor-01-02.jpg"],
        whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Acrylic%20Food%20Tray"
    },
    {
        name: "Limited Edition Poker Set",
        category: "limited",
        price: "$100",
        image: "images/poker-set.jpg",
        info: `
            <strong>Wall mounted Acrylic Photo Frames Acrylic Hanging Picture Frame</strong><br>
            Wall-mounted clear acrylic poster kits create a stunning poster display or photographic frame, These modern, clear perspex frames are very popular! Please feel free to get customized products made in China at a good price from us.<br>
            Product Name: Wall mounted Acrylic Photo Frames Acrylic Hanging Picture Frame<br>
            Material: Acrylic / PMMA / Lucite<br>
            Size: Custom<br>
            Thickness: 3mm<br>
            Sample: Available<br>
            Logo: Accept print your private logo<br>
            OEM&ODM: Available<br>
            Processing: (Handmade)Cutting - Laser engraving - Polishing - Gluing - Cleaning - Packing<br>
            Delivery Terms: DHL, UPS,FEDEX,DDP by air or by sea; FOB,CIF,EXW etc<br>
            Shipping Port: Yantian Shenzhen<br>
            Leadtime: Dase on your quantity<br>
        `,
        gallery: ["images/poker-set.jpg"],
        whatsappLink: "https://wa.me/+989233479443?text=I%20want%20to%20order%20Limited%20Edition%20Poker%20Set"
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

const categoryFilter = document.getElementById("category-filter");
if (categoryFilter) {
    categoryFilter.addEventListener("change", (event) => {
        renderProducts(event.target.value);
    });
}

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

