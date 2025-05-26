import cn from "classnames";
import { Search } from "lucide-react";
import { Form, InputGroup } from "react-bootstrap";

export default function Searchbar({
  className,
  containerClassName,
}: {
  className?: string;
  containerClassName?: string;
}) {
  return (
    <div className={cn("position-relative w-100 me-4", containerClassName)}>
      <InputGroup>
        <Form.Control
          className={className}
          placeholder="Search..."
          aria-label="Search"
        />
      </InputGroup>
      <button
        aria-label="Search"
        className="position-absolute top-50 end-0 me-3"
        style={{ transform: "translateY(-50%)", zIndex: 100 }}
      >
        <Search aria-hidden />
      </button>
    </div>
  );
}
