import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { useSearchParams } from "react-router-dom";

export default function Search() {
  const [searchParams, setSearchParams] = useSearchParams();
  const searchTerm = searchParams.get("searchTerm") ?? "";

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const params = new URLSearchParams(searchParams);
    params.set("searchTerm", e.target.value);

    if (e.target.value === "") {
      params.delete("searchTerm");
    }

    setSearchParams(params);
  };

  return (
    <div className="mb-4">
      <Form.Group>
        <Form.Control
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={handleSearch}
          className="border-0 bg-body-secondary rounded-pill"
        />
      </Form.Group>
    </div>
  );
}
