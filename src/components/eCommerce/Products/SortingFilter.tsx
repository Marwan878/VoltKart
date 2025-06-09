import { FILTERS } from "@constants";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function SortingFilter() {
  const [searchParams, setSearchParams] = useSearchParams();
  const sortBy = searchParams.get("sortBy") ?? "default";
  return (
    <Form.Group className="mb-0">
      <Form.Select
        value={sortBy}
        onChange={(e) =>
          setSearchParams({
            ...Object.fromEntries(searchParams.entries()),
            sortBy: e.target.value,
          })
        }
        aria-label="Sort products"
        className="border-0 bg-light"
        style={{ minWidth: "10rem" }}
      >
        {FILTERS.map((filter) => (
          <option key={filter.value} value={filter.value}>
            {filter.displayName}
          </option>
        ))}
      </Form.Select>
    </Form.Group>
  );
}
