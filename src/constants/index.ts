const MOBILE_BREAKPOINT = 768;

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

const CATEGORIES = [
  {
    displayName: "Mobiles & Accessories",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-2-2.jpg",
    link: "#",
  },
  {
    displayName: "Computers & Multimedia",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-3-thegem-product-justified-square-xl.jpg",
    link: "#",
  },
  {
    displayName: "Tablets & eBooks",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-4-2-thegem-product-justified-square-xl.jpg",
    link: "#",
  },
  {
    displayName: "Gaming & Consoles",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-34-thegem-product-justified-square-double-horizontal-xl.jpg",
    link: "#",
  },
  {
    displayName: "TV-Sets & Monitoring",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-5-2.jpg",
    link: "#",
  },
  {
    displayName: "Audio & Hi-Fi",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-6-thegem-product-justified-square-xl.jpg",
    link: "#",
  },
  {
    displayName: "Photo & Video",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-7-thegem-product-justified-square-xl.jpg",
    link: "#",
  },
  {
    displayName: "Smart Home Solutions",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-8-2-thegem-product-justified-square-double-horizontal-xl.jpg",
    link: "#",
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

const ARTICLES = [
  {
    title: "Lorem Ipsum Dolor Sit Amet Quot Memo Sit Amet Ipsum",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-15.jpg",
    author: {
      name: "Scott Jackson",
      imageUrl:
        "	https://secure.gravatar.com/avatar/adc20d3babf428f1ac85e4e90f8be0fd?s=100&d=mm&r=g",
    },
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    category: "Electronics",
    date: "9 April 2025",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet Quot Memo Sit Amet Ipsum",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-16.jpg",
    author: {
      name: "Scott Jackson",
      imageUrl:
        "	https://secure.gravatar.com/avatar/adc20d3babf428f1ac85e4e90f8be0fd?s=100&d=mm&r=g",
    },
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    category: "Electronics",
    date: "9 April 2025",
  },
  {
    title: "Lorem Ipsum Dolor Sit Amet Quot Memo Sit Amet Ipsum",
    imageUrl:
      "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/home-17.jpg",
    author: {
      name: "Scott Jackson",
      imageUrl:
        "	https://secure.gravatar.com/avatar/adc20d3babf428f1ac85e4e90f8be0fd?s=100&d=mm&r=g",
    },
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad",
    category: "Electronics",
    date: "9 April 2025",
  },
] as const;

const FOOTER_DATA = {
  LINKS: {
    "Our Store": [
      { text: "About Us", href: "#" },
      { text: "Delivery", href: "#" },
      { text: "Support & FAQ", href: "#" },
      { text: "Professional growth", href: "#" },
    ],
    Services: [
      { text: "Disclaimer", href: "#" },
      { text: "Privacy Policy", href: "#" },
      { text: "Risk Disclosure", href: "#" },
      { text: "Terms & Conditions", href: "#" },
    ],
    "Useful Links": [
      { text: "Gift Vouchers", href: "#" },
      { text: "Platform Vision", href: "#" },
      { text: "Team Members", href: "#" },
      { text: "Referral Program", href: "#" },
    ],
  },
  PAYMENT_METHODS_IMAGES_URLS: [
    "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/visa.png",
    "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/mastercard.png",
    "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/paypal.png",
    "https://codex-themes.com/thegem/sites/shop-electronics/wp-content/uploads/2022/12/bank.png",
  ],
} as const;

export {
  ARTICLES,
  BRANDS_IMAGES_URLS,
  CATEGORIES,
  FEATURES1,
  FEATURES2,
  FOOTER_DATA,
  HERO_IMAGES,
  MOBILE_BREAKPOINT,
  SIDEBAR_LINKS,
};
