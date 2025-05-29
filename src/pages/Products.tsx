import { MainContent, SidebarFilters } from "@components/eCommerce";
import { Loading } from "@components/feedback";
import { CATEGORIES } from "@constants";
import { faker } from "@faker-js/faker";
import useProducts from "@hooks/useProducts";
import { supabase } from "@lib/supabase";
import { TProduct } from "@types";
import { Container, Row } from "react-bootstrap";

export default function Products() {
  const { loading, error, productsFullInfo: products } = useProducts();

  return (
    <Container fluid className="py-4">
      <Loading error={error} status={loading} type="product">
        <Row>
          <SidebarFilters products={products} />
          <MainContent products={products} />
          <button
            onClick={async () => {
              const product: TProduct = {
                brand: faker.company.name(),
                description: faker.commerce.productDescription(),
                id: crypto.randomUUID(),
                releaseDate: faker.date.past().getTime(),
                imageUrls: {
                  main: faker.image.url({ width: 640, height: 480 }),
                  hover: faker.image.url({ width: 640, height: 480 }),
                },
                max: 1000,
                name: faker.commerce.productName(),
                categories: [
                  CATEGORIES[Math.floor(Math.random() * CATEGORIES.length)].id,
                ],
                optionCombinations: [
                  {
                    color: {
                      name: faker.color.human(),
                      hex: faker.color.rgb(),
                    },
                    storage: "1TB",
                    memory: "16GB",
                    price: {
                      original: 10,
                      discounted: 10,
                      currency: "$",
                      discountPercent: 0,
                    },
                    stock: 10,
                  },
                ],
                rating: 4.5,
              };

              const { error } = await supabase
                .from("products")
                .insert([product]);

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
        </Row>
      </Loading>
    </Container>
  );
}
