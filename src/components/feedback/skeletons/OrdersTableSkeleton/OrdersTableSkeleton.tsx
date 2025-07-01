import ContentLoader from "react-content-loader";
import { Table } from "react-bootstrap";

const OrdersTableSkeleton = () => {
  return (
    <Table responsive className="table-bordered">
      <thead className="table-dark">
        <tr>
          <th className="py-2">
            <ContentLoader
              speed={2}
              width={80}
              height={20}
              viewBox="0 0 80 20"
              backgroundColor="#374151"
              foregroundColor="#4b5563"
            >
              <rect x="0" y="6" rx="2" ry="2" width="70" height="8" />
            </ContentLoader>
          </th>
          <th className="text-nowrap">
            <ContentLoader
              speed={2}
              width={120}
              height={20}
              viewBox="0 0 120 20"
              backgroundColor="#374151"
              foregroundColor="#4b5563"
            >
              <rect x="0" y="6" rx="2" ry="2" width="110" height="8" />
            </ContentLoader>
          </th>
          <th>
            <ContentLoader
              speed={2}
              width={60}
              height={20}
              viewBox="0 0 60 20"
              backgroundColor="#374151"
              foregroundColor="#4b5563"
            >
              <rect x="0" y="6" rx="2" ry="2" width="50" height="8" />
            </ContentLoader>
          </th>
          <th>
            <ContentLoader
              speed={2}
              width={70}
              height={20}
              viewBox="0 0 70 20"
              backgroundColor="#374151"
              foregroundColor="#4b5563"
            >
              <rect x="0" y="6" rx="2" ry="2" width="60" height="8" />
            </ContentLoader>
          </th>
        </tr>
      </thead>
      <tbody className="border border-1 border-dark">
        {Array(5)
          .fill(0)
          .map((_, index) => (
            <tr key={index} className="text-center">
              <td>
                <ContentLoader
                  speed={2}
                  width={80}
                  height={40}
                  viewBox="0 0 80 40"
                  backgroundColor="#f0f0f0"
                  foregroundColor="#ffffff"
                >
                  <rect x="10" y="16" rx="2" ry="2" width="60" height="8" />
                </ContentLoader>
              </td>
              <td>
                <ContentLoader
                  speed={2}
                  width={120}
                  height={40}
                  viewBox="0 0 120 40"
                  backgroundColor="#f0f0f0"
                  foregroundColor="#ffffff"
                >
                  <rect x="10" y="16" rx="2" ry="2" width="100" height="8" />
                </ContentLoader>
              </td>
              <td className="text-capitalize">
                <ContentLoader
                  speed={2}
                  width={80}
                  height={40}
                  viewBox="0 0 80 40"
                  backgroundColor="#f0f0f0"
                  foregroundColor="#ffffff"
                >
                  <rect x="10" y="14" rx="12" ry="12" width="60" height="12" />
                </ContentLoader>
              </td>
              <td className="text-nowrap">
                <ContentLoader
                  speed={2}
                  width={100}
                  height={40}
                  viewBox="0 0 100 40"
                  backgroundColor="#f0f0f0"
                  foregroundColor="#ffffff"
                >
                  <rect x="10" y="16" rx="2" ry="2" width="80" height="8" />
                </ContentLoader>
              </td>
            </tr>
          ))}
      </tbody>
    </Table>
  );
};

export default OrdersTableSkeleton;
