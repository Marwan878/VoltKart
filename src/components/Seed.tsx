import { supabase } from "@lib/supabase";
import { TProduct } from "@types";

export default function Seed() {
  return (
    <button
      onClick={async () => {
        const products: TProduct[] = [
          {
            id: crypto.randomUUID(),
            name: "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
            images: {
              gallery: [
                "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
              ],
              main: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
              hover: "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
            },
            description:
              "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user's hardware configuration and operating system",
            brand: "WD",
            categoryId: "computers-and-multimedia",
            releaseDate: new Date().getTime(),
            features: [
              "USB 3.0 and USB 2.0 Compatibility",
              "Fast data transfers",
              "Improve PC Performance",
              "High Capacity",
              "Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7",
              "Reformatting may be required for other operating systems",
              "Compatibility may vary depending on user's hardware configuration and operating system",
            ],
            optionCombinations: [
              {
                color: {
                  name: "black",
                  hex: "#000000",
                },
                storage: "2 TB",
                sku: crypto.randomUUID(),
                stock: 100,
                price: {
                  original: 64,
                  discounted: 51.2,
                  currency: "$",
                  discountPercent: 20,
                },
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "SanDisk SSD PLUS 1TB Internal SSD - SATA III 6 Gb/s",
            images: {
              gallery: [
                "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
              ],
              main: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
              hover: "https://fakestoreapi.com/img/61U7T1koQqL._AC_SX679_.jpg",
            },
            description:
              'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores) Boosts burst write performance, making it ideal for typical PC workloads The perfect balance of performance and reliability Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)',
            brand: "SanDisk",
            categoryId: "computers-and-multimedia",
            releaseDate: new Date().getTime(),
            features: [
              'Easy upgrade for faster boot up, shutdown, application load and response (As compared to 5400 RPM SATA 2.5" hard drive; Based on published specifications and internal benchmarking tests using PCMark vantage scores)',
              "Boosts burst write performance, making it ideal for typical PC workloads",
              "The perfect balance of performance and reliability",
              "Read/write speeds of up to 535MB/s/450MB/s (Based on internal testing; Performance may vary depending upon drive capacity, host device, OS and application.)",
            ],
            optionCombinations: [
              {
                color: {
                  name: "black",
                  hex: "#000000",
                },
                storage: "1 TB",
                sku: crypto.randomUUID(),
                stock: 100,
                price: {
                  original: 109,
                  discounted: 98.1,
                  currency: "$",
                  discountPercent: 10,
                },
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "Silicon Power 256GB SSD 3D NAND A55 SLC Cache Performance Boost SATA III 2.5",
            images: {
              gallery: [
                "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
              ],
              main: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
              hover: "https://fakestoreapi.com/img/71kWymZ+c+L._AC_SX679_.jpg",
            },
            description:
              "3D NAND flash are applied to deliver high transfer speeds Remarkable transfer speeds that enable faster bootup and improved overall system performance. The advanced SLC Cache Technology allows performance boost and longer lifespan 7mm slim design suitable for Ultrabooks and Ultra-slim notebooks. Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability.",
            brand: "Silicon Power",
            categoryId: "computers-and-multimedia",
            releaseDate: new Date().getTime(),
            features: [
              "3D NAND flash are applied to deliver high transfer speeds",
              "Remarkable transfer speeds that enable faster bootup and improved overall system performance",
              "The advanced SLC Cache Technology allows performance boost and longer lifespan",
              "7mm slim design suitable for Ultrabooks and Ultra-slim notebooks",
              "Supports TRIM command, Garbage Collection technology, RAID, and ECC (Error Checking & Correction) to provide the optimized performance and enhanced reliability",
            ],
            optionCombinations: [
              {
                color: {
                  name: "black",
                  hex: "#000000",
                },
                storage: "256 GB",
                sku: crypto.randomUUID(),
                stock: 100,
                price: {
                  original: 109,
                  discounted: 98.1,
                  currency: "$",
                  discountPercent: 10,
                },
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "WD 4TB Gaming Drive Works with Playstation 4 Portable External Hard Drive",
            images: {
              gallery: [
                "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
              ],
              main: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
              hover: "https://fakestoreapi.com/img/61mtL65D4cL._AC_SX679_.jpg",
            },
            description:
              "Expand your PS4 gaming experience, Play anywhere Fast and easy, setup Sleek design with high capacity, 3-year manufacturer's limited warranty",
            brand: "WD",
            categoryId: "computers-and-multimedia",
            releaseDate: new Date().getTime(),
            features: [
              "Expand your PS4 gaming experience",
              "Play anywhere Fast and easy setup",
              "Sleek design with high capacity",
              "3-year manufacturer's limited warranty",
              "Compatible with PlayStation 4",
              "Portable external hard drive",
            ],
            optionCombinations: [
              {
                color: {
                  name: "black",
                  hex: "#000000",
                },
                storage: "4 TB",
                sku: crypto.randomUUID(),
                stock: 100,
                price: {
                  original: 114,
                  discounted: 96.9,
                  currency: "$",
                  discountPercent: 15,
                },
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "Acer SB220Q bi 21.5 inches Full HD (1920 x 1080) IPS Ultra-Thin",
            images: {
              gallery: [
                "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
              ],
              main: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
              hover: "https://fakestoreapi.com/img/81QpkIctqPL._AC_SX679_.jpg",
            },
            description:
              "21. 5 inches Full HD (1920 x 1080) widescreen IPS display And Radeon free Sync technology. No compatibility for VESA Mount Refresh Rate: 75Hz - Using HDMI port Zero-frame design | ultra-thin | 4ms response time | IPS panel Aspect ratio - 16: 9. Color Supported - 16. 7 million colors. Brightness - 250 nit Tilt angle -5 degree to 15 degree. Horizontal viewing angle-178 degree. Vertical viewing angle-178 degree 75 hertz",
            brand: "Acer",
            categoryId: "tv-sets-and-monitoring",
            releaseDate: new Date().getTime(),
            features: [
              "21.5 inches Full HD (1920 x 1080) widescreen IPS display",
              "Radeon FreeSync technology",
              "75Hz refresh rate using HDMI port",
              "Zero-frame design | ultra-thin | 4ms response time",
              "IPS panel with 16:9 aspect ratio",
              "16.7 million colors supported",
              "250 nit brightness",
              "178 degree horizontal and vertical viewing angles",
            ],
            optionCombinations: [
              {
                color: {
                  name: "black",
                  hex: "#000000",
                },
                storage: "N/A",
                sku: crypto.randomUUID(),
                stock: 100,
                price: {
                  original: 599,
                  discounted: 509.15,
                  currency: "$",
                  discountPercent: 15,
                },
              },
            ],
          },
          {
            id: crypto.randomUUID(),
            name: "Samsung 49-Inch CHG90 144Hz Curved Gaming Monitor (LC49HG90DMNXZA) – Super Ultrawide Screen QLED",
            images: {
              gallery: [
                "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
              ],
              main: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
              hover: "https://fakestoreapi.com/img/81Zt42ioCgL._AC_SX679_.jpg",
            },
            description:
              "49 INCH SUPER ULTRAWIDE 32:9 CURVED GAMING MONITOR with dual 27 inch screen side by side QUANTUM DOT (QLED) TECHNOLOGY, HDR support and factory calibration provides stunningly realistic and accurate color and contrast 144HZ HIGH REFRESH RATE and 1ms ultra fast response time work to eliminate motion blur, ghosting, and reduce input lag",
            brand: "Samsung",
            categoryId: "tv-sets-and-monitoring",
            releaseDate: new Date().getTime(),
            features: [
              "49 inch super ultrawide 32:9 curved gaming monitor",
              "Dual 27 inch screen side by side equivalent",
              "Quantum Dot (QLED) technology",
              "HDR support and factory calibration",
              "144Hz high refresh rate",
              "1ms ultra fast response time",
              "Eliminates motion blur and ghosting",
              "Reduces input lag for gaming",
            ],
            optionCombinations: [
              {
                color: {
                  name: "black",
                  hex: "#000000",
                },
                storage: "N/A",
                sku: crypto.randomUUID(),
                stock: 100,
                price: {
                  original: 999.99,
                  discounted: 799.99,
                  currency: "$",
                  discountPercent: 20,
                },
              },
            ],
          },
        ];

        const { error } = await supabase.from("products").insert(products);

        if (error) {
          console.error("Failed to insert product:", error.message);
        } else {
          console.log("✅ Products inserted successfully");
        }

        console.log("🌱 Seeding done.");
      }}
    >
      seed
    </button>
  );
}
