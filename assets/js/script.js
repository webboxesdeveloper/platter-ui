
const productGrid = document.getElementById('product-grid');
const showMoreButton = document.getElementById('show-more');
const mmObj = window.matchMedia("(max-width: 700px)");

const imageArr = [
  {
      image1: './assets/images/alex--1Hpa8jUdn4-unsplash.jpg',
      image2: './assets/images/alex-KEEpi-SOM_s-unsplash.jpg',
      title: 'Lightweight Football Boots',
      price: (89.95).toLocaleString(),
      review_number: (1234).toLocaleString(),
      rating: 4
    },
    {
      image1: './assets/images/alphacolor-XdDyRTVo-iw-unsplash.jpg',
      image2: './assets/images/lee-campbell-GI6L2pkiZgQ-unsplash.jpg',
      title: 'Wireless Over-Ear Headphones',
      price: (149.99).toLocaleString(),
      review_number: (3452).toLocaleString(),
      rating: 5
    },
    {
      image1: './assets/images/annie-williams-FlP6C5pkMKs-unsplash.jpg',
      image2: './assets/images/charlesdeluvio-1-nx1QR5dTE-unsplash.jpg',
      title: 'Polarized Sunglasses',
      price: (34.95).toLocaleString(),
      review_number: (2109).toLocaleString(),
      rating: 5
    },
    {
      image1: './assets/images/c-d-x-dBwadhWa-lI-unsplash.jpg',
      image2: './assets/images/9a81236cedf58d1edefc6c5d5d6995e1.jpg',
      title: 'Premium Stereo Headphones',
      price: (79.95).toLocaleString(),
      review_number: (253).toLocaleString(),
      rating: 3
    },
    {
      image1: './assets/images/dimitar-stevcev-a_uKaD4c5VI-unsplash.jpg',
      image2: './assets/images/mason-hassoun-6vfhe6AuBA4-unsplash.jpg',
      title: 'Windproof Refillable Lighter',
      price: (19.95).toLocaleString(),
      review_number: (5611222).toLocaleString(),
      rating: 4

    },
    {
      image1: './assets/images/fiqih-alfarish-UX6jAZ7r9U0-unsplash.jpg',
      image2: './assets/images/tsuyoshi-kozu-hSiejE6GM_Y-unsplash.jpg',
      title: 'Gourmet Ice Cream',
      price: (5.99).toLocaleString(),
      review_number: (2011).toLocaleString(),
      rating: 5
    },
    {
      image1: './assets/images/guillaume-de-germain-6Xw9wMJyHus-unsplash.jpg',
      image2: './assets/images/juliana-kozoski-IoQioGLrz3Y-unsplash.jpg',
      title: 'Earth Sphere Model',
      price: (39.95).toLocaleString(),
      review_number: (7516).toLocaleString(),
      rating: 5
    },
    {
      image1: './assets/images/kari-shea-1SAnrIxw5OY-unsplash.jpg',
      image2: './assets/images/kari-shea-pSmD3L7z8hs-unsplash.jpg',
      title: 'Ultra-Slim Laptop',
      price: (999.99).toLocaleString(),
      review_number: (559).toLocaleString(),
      rating: 4
    },
    {
      image1: './assets/images/pat-taylor-12V36G17IbQ-unsplash.jpg',
      image2: './assets/images/tnkn29-4eTzJaPVWjw-unsplash.jpg',
      title: 'Stainless Steel Watch',
      price: (129.95).toLocaleString(),
      review_number: (513).toLocaleString(),
      rating: 5
    },
    {
      image1: './assets/images/seeetz-eNEa7Gsfzzs-unsplash.jpg',
      image2: './assets/images/seeetz-qTv4ePux4ck-unsplash.jpg',
      title: 'Fashionable Belt',
      price: (24.95).toLocaleString(),
      review_number: (532).toLocaleString(),
      rating: 4
    },
];

let productsToShow = 4;

const productDivTemplate = (product) => `
  <div class="md:max-w-[355px] place-self-center max-w-[158px] md:mb-12 md:pb-4 flex-shrink-0 bg-white rounded-lg relative cursor-pointer">
   <div class="group">
    <img
      src="${product.image1}"
      alt="Product Image"
      class="rounded-md md:w-[355px] md:h-[355px] w-[185px] h-[185px] object-cover transition-opacity duration-300"
    />
    <img
      src="${product.image2}"
      alt="Secondary Image"
      class="md:w-[355px] md:h-[355px] w-[185px] h-[185px] object-cover rounded-md absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
    />
   </div>
    <span class="absolute top-2 left-2 bg-white border border-black text-black md:text-[10px] md:leading-[12px] text-[8px] leading-[10px] px-2 py-1 rounded-full bebas-neue">
      Best Seller
    </span>
    <span class="absolute top-2 right-2 bg-[#5C7962] border border-black text-white md:text-[10px] md:leading-[12px] text-[8px] leading-[10px] px-2 py-1 rounded-full bebas-neue">
      Save 15%
    </span>
    <div class="grid gap-y-1 my-4 px-2 text-sm">
      <h2 class="md:text-lg text-base bebas-neue">${product.title}</h2>
      <div class="inline-flex items-center">
      ${[...Array(5)].map((_, i) => `
        <svg xmlns="http://www.w3.org/2000/svg" fill="${i < product.rating ? 'black' : 'none'}" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3 text-black">
          <path stroke-linecap="round" stroke-linejoin="round"
            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z">
          </path>
        </svg>
      `).join('')}
      <span class="text-gray-600 md:text-xs text-[11px] poppins-400"> ${product.review_number} Reviews</span>
    </div>
      <p class="text-gray-900 text-base poppins-500">$${product.price}</p>
    </div>
  </div>
`;

const changeNumberOfDisplayCard = (widthTarget) => {
  if (widthTarget.matches) {
    productsToShow = 4;
    showMoreButton.style.display = 'block';
    renderProducts(productsToShow);
  } else {
    showMoreButton.style.display = 'none';
    productsToShow = imageArr.length;
  }
  renderProducts(productsToShow);
}


const renderProducts = (count) => {
  
  if (window.innerWidth <= 700) {
    productGrid.innerHTML = '';
    const productsToDisplay = imageArr.slice(0, count);
    
    productsToDisplay.forEach((product) => {
      productGrid.innerHTML += productDivTemplate(product);
    });
  } else {
    productGrid.innerHTML = '';
    imageArr.forEach((product) => {
      productGrid.innerHTML += productDivTemplate(product);
    });
  }
  
};

showMoreButton.addEventListener('click', () => {
  productsToShow = imageArr.length;
  renderProducts(productsToShow);

  window.scrollBy({
    top: 700,
    left: 0,
    behavior: 'smooth'
  });
  showMoreButton.style.display = 'none';
});

mmObj.addEventListener('change', function() {
  changeNumberOfDisplayCard(mmObj);
})

renderProducts(productsToShow);

changeNumberOfDisplayCard(mmObj);