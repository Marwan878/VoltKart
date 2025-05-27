import { FILTERS } from "@constants";
import { Form } from "react-bootstrap";
import { SetURLSearchParams } from "react-router-dom";

export default function SortingFilter({
  sortBy,
  setSearchParams,
  searchParams,
}: {
  sortBy: string;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}) {
  return (
    <Form.Group className="mb-0" style={{ minWidth: "200px" }}>
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
