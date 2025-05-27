import { Form } from "react-bootstrap";
import { SetURLSearchParams } from "react-router-dom";

export default function Colors({
  selectedColor,
  setSearchParams,
  searchParams,
  colors,
}: {
  selectedColor: string;
  setSearchParams: SetURLSearchParams;
  searchParams: URLSearchParams;
  colors: string[];
}) {
  return (
    <div className="mb-4">
      <h6 className="fw-bold mb-3">Color</h6>
      <Form.Group>
        <Form.Select
          value={selectedColor}
          onChange={(e) =>
            setSearchParams({
              ...Object.fromEntries(searchParams.entries()),
              selectedColor: e.target.value,
            })
          }
          className="border-0 bg-light"
        >
          <option value="">All Colors</option>
          {colors.map((color) => (
            <option key={color} value={color}>
              {color}
            </option>
          ))}
        </Form.Select>
      </Form.Group>
    </div>
  );
}
