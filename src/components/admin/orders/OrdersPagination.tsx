import { useAppSelector } from "@store/hooks";
import { Col, Pagination, Row } from "react-bootstrap";

type OrdersPaginationProps = {
  setCurrentPage: (page: number) => void;
};

const OrdersPagination = ({
  setCurrentPage,
}: Readonly<OrdersPaginationProps>) => {
  const { currentPageIndex, itemsPerPage, totalOrders } = useAppSelector(
    (state) => state.dashboardOrders
  );

  const totalPages = Math.ceil(totalOrders / itemsPerPage);
  const startItem = currentPageIndex * itemsPerPage + 1;
  const endItem = Math.min(startItem + itemsPerPage - 1, totalOrders);

  if (totalOrders === 0) {
    return null;
  }

  return (
    <Row className="mt-auto align-items-center">
      <Col md={6}>
        <small className="text-muted">
          Showing {startItem} to {endItem} of {totalOrders} results
        </small>
      </Col>
      <Col md={6}>
        <Pagination className="justify-content-end mb-0">
          <Pagination.Prev
            onClick={() => setCurrentPage(Math.max(0, currentPageIndex - 1))}
            disabled={currentPageIndex === 0}
          />
          {Array.from({ length: totalPages }, (_, index) => (
            <Pagination.Item
              key={index}
              active={index === currentPageIndex}
              onClick={() => setCurrentPage(index)}
            >
              {index + 1}
            </Pagination.Item>
          ))}

          <Pagination.Next
            onClick={() =>
              setCurrentPage(Math.min(totalPages - 1, currentPageIndex + 1))
            }
            disabled={currentPageIndex >= totalPages - 1}
          />
        </Pagination>
      </Col>
    </Row>
  );
};

export default OrdersPagination;
