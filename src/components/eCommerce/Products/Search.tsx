import { ChangeEvent } from "react";
import { Form } from "react-bootstrap";
import { SetURLSearchParams } from "react-router-dom";

export default function Search({
  searchTerm,
  searchParams,
  setSearchParams,
}: {
  searchTerm: string;
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}) {
  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value === "") {
      const params = new URLSearchParams(searchParams);
      params.delete("sortBy");
      setSearchParams(params);
    } else {
      setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        searchTerm: e.target.value,
      });
    }
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
