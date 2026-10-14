
const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 5000;

// =====================================
// Middleware
// =====================================

app.use(cors());
app.use(express.json());

// =====================================
// 1. OLD API: Categories
// =====================================

const categories = [
  { id: "c1", name: "Women", slug: "women" },
  { id: "c2", name: "Men", slug: "men" },
  { id: "c3", name: "Accessories", slug: "accessories" },
  { id: "c4", name: "Baby", slug: "baby" },
];

// =====================================
// 2. API: Product Collection
// =====================================

const productCollection = [
  {
    id: "pc1",
    name: "Super Boost Moisturizing Lip Gloss",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    description:
      "A moisturizing lip gloss for a smooth and glossy finish.",
    save: 72,
    currency: "USD",
  },
  {
    id: "pc2",
    name: "Mini Glycolic Acid 7% Exfoliating Toner",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    description:
      "A gentle skincare toner for your daily beauty routine.",
    save: 72,
    currency: "USD",
  },
  {
    id: "pc3",
    name: "Mini Radiant Creamy Concealer With Medium",
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=600&q=80",
    description:
      "A creamy concealer for a natural-looking makeup finish.",
    save: 72,
    currency: "USD",
  },
];

// =====================================
// 3. API: Discover Our Products
// =====================================

const products = [
  {
    id: "p1",
    name: "Face Wash By Olay Regenerist",
    brand: "Retinol 24",
    category: "Skincare",
    image:
      "https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?auto=format&fit=crop&w=600&q=80",
    price: 19,
    oldPrice: null,
    discount: 0,
    currency: "USD",
    rating: 4.8,
    reviews: 124,
  },
  {
    id: "p2",
    name: "Kabuki Makeup Brush",
    brand: "Retinol 24",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=600&q=80",
    price: 19,
    oldPrice: 27,
    discount: 26,
    currency: "USD",
    rating: 4.7,
    reviews: 86,
  },
  {
    id: "p3",
    name: "Organic Face Sunscreen",
    brand: "Coola",
    category: "Skincare",
    image:
      "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=600&q=80",
    price: 44,
    oldPrice: null,
    discount: 0,
    currency: "USD",
    rating: 4.9,
    reviews: 98,
  },
  {
    id: "p4",
    name: "Pure Cosmetics Lip Gloss",
    brand: "Fanning",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1586495777744-4413f21062fa?auto=format&fit=crop&w=600&q=80",
    price: 23,
    oldPrice: 35,
    discount: 35,
    currency: "USD",
    rating: 4.6,
    reviews: 72,
  },
  {
    id: "p5",
    name: "Cosmetic Jar Cream",
    brand: "Cosmetic",
    category: "Skincare",
    image:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=600&q=80",
    price: 25,
    oldPrice: 29,
    discount: 14,
    currency: "USD",
    rating: 4.8,
    reviews: 65,
  },
  {
    id: "p6",
    name: "Daily Skin Care Set",
    brand: "Mockup",
    category: "Skincare",
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=600&q=80",
    price: 32,
    oldPrice: null,
    discount: 0,
    currency: "USD",
    rating: 4.5,
    reviews: 54,
  },
  {
    id: "p7",
    name: "Radiant Blush And Powder",
    brand: "Beauty",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=600&q=80",
    price: 18,
    oldPrice: 30,
    discount: 40,
    currency: "USD",
    rating: 4.7,
    reviews: 91,
  },
  {
    id: "p8",
    name: "Volume Mascara",
    brand: "Beauty",
    category: "Makeup",
    image:
      "https://images.unsplash.com/photo-1631214524020-7e18db9a8f92?auto=format&fit=crop&w=600&q=80",
    price: 15,
    oldPrice: null,
    discount: 0,
    currency: "USD",
    rating: 4.6,
    reviews: 58,
  },
];

// =====================================
// 4. API: Promotional Banners
// =====================================

const promoBanners = [
  {
    id: "banner1",
    type: "product-promo",
    eyebrow: "Cosmetics Collection",
    title: "Foundation And Powder Brush",
    buttonText: "Discover Now",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    link: "/shop",
    position: "left",
    active: true,
  },
  {
    id: "banner2",
    type: "image-promo",
    eyebrow: "",
    title: "Best Cosmetics For Hair And Skin",
    subtitle: "SHOP COLLECTION",
    image:
      "https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=900&q=80",
    link: "/shop",
    position: "right",
    active: true,
  },
];

// =====================================
// 5. API: Discount Banner
// =====================================

const discountBanner = {
  id: "discount1",
  title: "Discover Our Beauty Selection",
  subtitle: "75% Extra Discount For Your..",
  discountPercentage: 75,
  image:
    "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1600&q=80",
  buttonText: "Shop Now",
  link: "/shop",
  endDate: "2026-12-31T23:59:59+06:00",
  active: true,
};

// =====================================
// 6. API: Home
// =====================================

app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "Ecomas API is running",
  });
});

// =====================================
// 7. API: Categories
// =====================================

app.get("/api/categories", (req, res) => {
  res.json({
    success: true,
    data: categories,
  });
});

// =====================================
// 8. API: Product Collection
// =====================================

app.get("/api/product-collection", (req, res) => {
  res.json({
    success: true,
    total: productCollection.length,
    data: productCollection,
  });
});

// =====================================
// 9. API: All Products
// =====================================

app.get("/api/products", (req, res) => {
  res.json({
    success: true,
    total: products.length,
    data: products,
  });
});

// =====================================
// 10. API: Single Product
// =====================================

app.get("/api/products/:id", (req, res) => {
  const product = products.find(
    (item) => item.id === req.params.id
  );

  if (!product) {
    return res.status(404).json({
      success: false,
      message: "Product not found",
    });
  }

  res.json({
    success: true,
    data: product,
  });
});

// =====================================
// 11. API: Promotional Banners
// =====================================

app.get("/api/promo-banners", (req, res) => {
  const activeBanners = promoBanners.filter(
    (item) => item.active
  );

  res.json({
    success: true,
    total: activeBanners.length,
    data: activeBanners,
  });
});

// =====================================
// 12. API: Discount Banner
// =====================================

app.get("/api/discount-banner", (req, res) => {
  if (!discountBanner.active) {
    return res.status(404).json({
      success: false,
      message: "Discount campaign is not active",
    });
  }

  res.json({
    success: true,
    data: discountBanner,
  });
});

// =====================================
// 13. API: Beauty Banner
// =====================================

const beautyBanner = {
  id: "beauty-banner-1",
  eyebrow: "BEAUTY COLLECTION",
  title: "Natural Beauty for a Brighter You",
  description:
    "Discover premium skincare, makeup and beauty essentials for your everyday glow.",
  buttonText: "Shop Now",
  image:
    "https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?auto=format&fit=crop&w=1600&q=80",
  active: true,
};

app.get("/api/beauty/banner", (req, res) => {
  res.json({
    success: true,
    data: beautyBanner,
  });
});

// =====================================
// 14. API: Beauty Categories
// =====================================

const beautyCategories = [
  { id: "bc1", name: "All Beauty", slug: "all-beauty" },
  { id: "bc2", name: "Skincare", slug: "skincare" },
  { id: "bc3", name: "Makeup", slug: "makeup" },
  { id: "bc4", name: "Hair Care", slug: "hair-care" },
  { id: "bc5", name: "Fragrance", slug: "fragrance" },
  { id: "bc6", name: "Body Care", slug: "body-care" },
  {
    id: "bc7",
    name: "Tools & Accessories",
    slug: "tools-accessories",
  },
];

app.get("/api/beauty/categories", (req, res) => {
  res.json({
    success: true,
    total: beautyCategories.length,
    data: beautyCategories,
  });
});

// =====================================
// 15. API: Beauty Products Listing
// =====================================

app.get("/api/beauty/products", (req, res) => {
  const {
    category,
    brand,
    search,
    maxPrice,
    minRating,
    sort,
    page = 1,
    limit = 8,
  } = req.query;

  let result = [...products];

  // Category filter
  if (category && category !== "all-beauty") {
    result = result.filter(
      (product) =>
        product.category.toLowerCase() ===
        category.toLowerCase()
    );
  }

  // Brand filter
  if (brand) {
    result = result.filter(
      (product) =>
        product.brand.toLowerCase() ===
        brand.toLowerCase()
    );
  }

  // Search
  if (search) {
    const keyword = search.toLowerCase();

    result = result.filter(
      (product) =>
        product.name.toLowerCase().includes(keyword) ||
        product.brand.toLowerCase().includes(keyword) ||
        product.category.toLowerCase().includes(keyword)
    );
  }

  // Maximum price
  if (maxPrice !== undefined && maxPrice !== "") {
    const maximum = Number(maxPrice);

    if (Number.isFinite(maximum)) {
      result = result.filter(
        (product) => product.price <= maximum
      );
    }
  }

  // Minimum rating
  if (minRating !== undefined && minRating !== "") {
    const rating = Number(minRating);

    if (Number.isFinite(rating)) {
      result = result.filter(
        (product) => product.rating >= rating
      );
    }
  }

  // Sorting
  if (sort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  } else if (sort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  } else if (sort === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sort === "rating") {
    result.sort((a, b) => b.rating - a.rating);
  }

  // Pagination
  const currentPage = Math.max(1, Number(page) || 1);
  const perPage = Math.max(1, Number(limit) || 8);
  const total = result.length;
  const totalPages = Math.ceil(total / perPage);
  const startIndex = (currentPage - 1) * perPage;

  const paginatedProducts = result.slice(
    startIndex,
    startIndex + perPage
  );

  res.json({
    success: true,
    total,
    page: currentPage,
    limit: perPage,
    totalPages,
    data: paginatedProducts,
  });
});

// =====================================
// 16. Start Server
// =====================================

app.listen(PORT, () => {
  console.log(`Ecomas API server running on port ${PORT}`);
});
