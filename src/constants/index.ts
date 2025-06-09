const SCREEN_TO_BREAKPOINT = {
  sm: 576,
  md: 768,
  lg: 992,
  xl: 1200,
} as const;

const SIDEBAR_LINKS = {
  Home: [
    {
      text: "Homepage",
      href: "#",
    },
    {
      text: "Shop Page (List)",
      href: "#",
    },
    {
      text: "Shop Page (Grid)",
      href: "#",
    },
    {
      text: "Horizontal Filter",
      href: "#",
    },
  ],
  "Product Pages": [
    {
      text: "Product Demo 01",
      href: "#",
    },
    {
      text: "Product Demo 02",
      href: "#",
    },
    {
      text: "Product Demo 03",
      href: "#",
    },
    {
      text: "Product Demo 04",
      href: "#",
    },
    {
      text: "Product Demo 05",
      href: "#",
    },
  ],
  Categories: [
    {
      text: "Audio & Hi-Fi",
      href: "#",
    },
    {
      text: "Bluetooth Accessories",
      href: "#",
    },
    {
      text: "Computers & Multimedia",
      href: "#",
    },
    {
      text: "Gaming & Consoles",
      href: "#",
    },
    {
      text: "Mobiles & Accessories",
      href: "#",
    },
    {
      text: "Smart Home Solutions",
      href: "#",
    },
  ],
  Blog: [
    {
      text: "Our Blog",
      href: "#",
    },
    {
      text: "Blog Post",
      href: "#",
    },
  ],
  Shop: [
    { text: "Sidebar Filter", href: "#" },
    {
      text: "Horizontal Filter",
      href: "#",
    },
    {
      text: "3x Columns & Load More",
      href: "#",
    },
    {
      text: "Product Grids",
      href: "#",
    },
  ],
} as const;

const HERO_IMAGES = [
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/price.png",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/pic.png",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/blobs-2.png",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/blobs-1.png",
] as const;

const CATEGORIES: { displayName: string; imageUrl: string; id: string }[] = [
  {
    displayName: "Mobiles & Accessories",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-2-2.jpg",
    id: "mobiles-and-accessories",
  },
  {
    displayName: "Computers & Multimedia",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-3-thegem-product-justified-square-xl.jpg",
    id: "computers-and-multimedia",
  },
  {
    displayName: "Tablets & eBooks",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-4-2-thegem-product-justified-square-xl.jpg",
    id: "tablets-and-ebooks",
  },
  {
    displayName: "Gaming & Consoles",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-34-thegem-product-justified-square-double-horizontal-xl.jpg",
    id: "gaming-and-consoles",
  },
  {
    displayName: "TV-Sets & Monitoring",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-5-2.jpg",
    id: "tvsets-and-monitoring",
  },
  {
    displayName: "Audio & Hi-Fi",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-6-thegem-product-justified-square-xl.jpg",
    id: "audio-and-hifi",
  },
  {
    displayName: "Photo & Video",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-7-thegem-product-justified-square-xl.jpg",
    id: "photo-and-video",
  },
  {
    displayName: "Smart Home Solutions",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-8-2-thegem-product-justified-square-double-horizontal-xl.jpg",
    id: "smart-home-solutions",
  },
] as const;

const FEATURES1 = [
  {
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/product-page-19.svg",
    heading: "Free Shipping & Return",
    body: "Free shipping orders over $99",
  },
  {
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/product-page-20.svg",
    heading: "30 Days Money Back",
    body: "Customer protection service",
  },
  {
    imageUrl:
      "	https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/product-page-21.svg",
    heading: "Online Support 24/7",
    body: "Need assistance? Contact us",
  },
] as const;

const FEATURES2 = [
  {
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-10.svg",
    heading: "New in Markets",
    body: "Best products all over the world.",
  },
  {
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/product-page-22.svg",
    heading: "Return Policy",
    body: "Easy consumer program.",
  },
  {
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-11.svg",
    heading: "Secure Payments",
    body: "Safe & fast system transactions.",
  },
  {
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-12.svg",
    heading: "Best Quality",
    body: "20+ years on the market.",
  },
] as const;

const BRANDS_IMAGES_URLS = [
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-26.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-27.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-19.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-20.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-21.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-22.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-23.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-24.svg",
  "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-25.svg",
] as const;

const NAVIGATION_LINKS = [
  {
    text: "Home",
    href: "/",
    visibleFor: "any",
  },
  {
    text: "Categories",
    href: "/#categories",
    visibleFor: "any",
  },
  {
    text: "My Account",
    href: "/account",
    visibleFor: "logged_in",
  },
  {
    text: "Login",
    href: "/login",
    visibleFor: "logged_out",
  },
  {
    text: "Profile",
    href: "/profile",
    visibleFor: "logged_in",
  },
  {
    text: "Orders",
    href: "/profile/orders",
    visibleFor: "logged_in",
  },
  {
    text: "Logout",
    href: "/logout",
    visibleFor: "logged_in",
  },
] as const;

const FILTERS = [
  {
    displayName: "Default sorting",
    value: "default",
  },
  {
    displayName: "Price: Low to High",
    value: "price-low",
  },
  {
    displayName: "Price: High to Low",
    value: "price-high",
  },
  {
    displayName: "Name: A to Z",
    value: "name-low",
  },
  {
    displayName: "Name: Z to A",
    value: "name-high",
  },
];

export {
  BRANDS_IMAGES_URLS,
  CATEGORIES,
  FEATURES1,
  FEATURES2,
  NAVIGATION_LINKS,
  HERO_IMAGES,
  SCREEN_TO_BREAKPOINT,
  SIDEBAR_LINKS,
  FILTERS,
};
