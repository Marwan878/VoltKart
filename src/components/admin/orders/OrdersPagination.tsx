import { useAppSelector } from "@store/hooks";
import { Pagination } from "react-bootstrap";

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
    <div className="mt-auto d-flex flex-column flex-md-row align-items-center justify-content-between">
      <small className="text-muted">
        Showing {startItem} to {endItem} of {totalOrders} results
      </small>
      <Pagination className="justify-content-end mb-0 mt-3" size="sm">
        <Pagination.Prev
          onClick={() => setCurrentPage(Math.max(0, currentPageIndex - 1))}
          disabled={currentPageIndex === 0}
        />

        <Pagination.Item
          active={0 === currentPageIndex}
          onClick={() => setCurrentPage(0)}
        >
          1
        </Pagination.Item>

        {/* Render ellipsis if you are far enough from the start */}
        {currentPageIndex >= 3 && <Pagination.Ellipsis />}

        {Array.from({ length: 3 }).map((_, index) => {
          // This condition prevents us from rendering a previous pagination element if the selected one is the first
          // Also prevents us from rendering the first pagination element if the selected is the second as it is already hard coded
          if (index + currentPageIndex - 1 <= 0) {
            return null;
          }

          if (index + currentPageIndex - 1 >= totalPages - 1) {
            return null;
          }

          return (
            <Pagination.Item
              key={index * index}
              active={index === 1}
              onClick={() => setCurrentPage(index + currentPageIndex - 1)}
            >
              {index + currentPageIndex}
            </Pagination.Item>
          );
        })}

        {/* Render ellipsis if you are far enough from the end */}
        {currentPageIndex < totalPages - 3 && <Pagination.Ellipsis />}

        <Pagination.Item
          active={totalPages === currentPageIndex}
          onClick={() => setCurrentPage(totalPages - 1)}
        >
          {totalPages}
        </Pagination.Item>

        <Pagination.Next
          onClick={() =>
            setCurrentPage(Math.min(totalPages - 1, currentPageIndex + 1))
          }
          disabled={currentPageIndex >= totalPages - 1}
        />
      </Pagination>
    </div>
  );
};

export default OrdersPagination;
