import { CATEGORIES } from "@constants";
import { faker } from "@faker-js/faker";
import { supabase } from "@lib/supabase";
import { TProduct } from "@types";
import { generateRandomNumber, pickRandomElement } from "@utils/index";

export default function Seed() {
  return (
    <button
      onClick={async () => {
        const colorToHex: Record<string, string> = {
          red: "#FF0000",
          green: "#008000",
          blue: "#0000FF",
          yellow: "#FFFF00",
          orange: "#FFA500",
          purple: "#800080",
          pink: "#FFC0CB",
          brown: "#A52A2A",
          black: "#000000",
          white: "#FFFFFF",
          gray: "#808080",
          cyan: "#00FFFF",
          magenta: "#FF00FF",
        } as const;

        const storageOptions = ["128 GB", "256 GB", "512 GB", "1 TB", "2 TB"];
        const memoryOptions = ["8 GB", "16 GB", "32 GB", "64 GB", "128 GB"];

        const product: TProduct = {
          brand: faker.company.name(),
          imageUrls: {
            main: faker.image.url(),
            hover: faker.image.url(),
          },
          description: faker.commerce.productDescription(),
          id: crypto.randomUUID(),
          releaseDate: faker.date.past().getTime(),
          max: generateRandomNumber(1, 5),
          name: faker.commerce.productName(),
          categories: [pickRandomElement(CATEGORIES).id],
          optionCombinations: Array.from({
            length: generateRandomNumber(1, 5),
          }).map(() => {
            const colorName = faker.helpers.arrayElement(
              Object.keys(colorToHex)
            );

            const price = parseFloat(
              faker.commerce.price({
                min: 100,
                max: 1000,
                dec: 0,
              })
            );

            const discountPercent = generateRandomNumber(0, 50);

            return {
              color: {
                name: colorName,
                hex: colorToHex[colorName],
              },
              storage: pickRandomElement(storageOptions),
              memory: pickRandomElement(memoryOptions),
              price: {
                original: price,
                discounted: price - (price * discountPercent) / 100,
                currency: "$",
                discountPercent,
              },
              stock: generateRandomNumber(1, 100),
            };
          }),
          rating: 4.5,
        };

        const { error } = await supabase.from("products").insert([product]);

        if (error) {
          console.error("Failed to insert product:", error.message);
        } else {
          console.log(`✅ Inserted: ${name}`);
        }

        console.log("🌱 Seeding done.");
      }}
    >
      seed
    </button>
  );
}
