import { MainContent, SidebarFilters } from "@components/eCommerce";
import SortingFilter from "@components/eCommerce/Products/SortingFilter";
import { Loading } from "@components/feedback";
import { CATEGORIES } from "@constants";
import { faker } from "@faker-js/faker";
import useIsMobile from "@hooks/useIsMobile";
import useProducts from "@hooks/useProducts";
import { supabase } from "@lib/supabase";
import { TProduct } from "@types";
import pickRandomElement from "@utils/pickRandomElement";
import { Filter } from "lucide-react";
import { useState } from "react";
import { Container, Offcanvas, Row, Stack } from "react-bootstrap";

export default function Products() {
  const isMobile = useIsMobile();
  const [show, setShow] = useState(false);
  const { loading, error, productsFullInfo: products } = useProducts();

  return (
    <Container fluid className="py-4">
      <Loading error={error} status={loading} type="product">
        <Row>
          {isMobile ? (
            <>
              <Stack
                direction="horizontal"
                className="align-items-center justify-content-between gap-3"
              >
                <button
                  className="flex-shrink-0 border border-1 border-black rounded-pill px-2 py-1"
                  style={{ fontSize: "0.9rem" }}
                  onClick={() => setShow(true)}
                >
                  <Filter size={18} /> Show Filters
                </button>
                <SortingFilter />
              </Stack>

              <Offcanvas show={show} onHide={() => setShow(false)}>
                <Offcanvas.Header closeButton></Offcanvas.Header>
                <Offcanvas.Body>
                  <SidebarFilters products={products} />
                </Offcanvas.Body>
              </Offcanvas>
            </>
          ) : (
            <SidebarFilters products={products} />
          )}

          <MainContent products={products} />
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

              //  Randomly choose a color name and get its hex
              const colorName = faker.helpers.arrayElement(
                Object.keys(colorToHex)
              );

              const storageOptions = [
                "128 GB",
                "256 GB",
                "512 GB",
                "1 TB",
                "2 TB",
              ];
              const memoryOptions = [
                "8 GB",
                "16 GB",
                "32 GB",
                "64 GB",
                "128 GB",
              ];

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
                categories: [pickRandomElement(CATEGORIES).id],
                optionCombinations: [
                  {
                    color: {
                      name: colorName,
                      hex: colorToHex[colorName],
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
