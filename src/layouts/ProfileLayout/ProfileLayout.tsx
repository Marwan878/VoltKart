import { ToastList } from "@components/feedback";
import { Col, Container, ListGroup, Row } from "react-bootstrap";
import { NavLink, Outlet } from "react-router-dom";

const ProfileLayout = () => {
  return (
    <>
      <Container className="min-vh-100">
        <Row className="gap-4">
          <Col md={3} className="mb-4">
            <ListGroup>
              <ListGroup.Item as={NavLink} to="orders" end>
                Orders
              </ListGroup.Item>
              <ListGroup.Item as={NavLink} to="details">
                Account details
              </ListGroup.Item>
              <ListGroup.Item as={NavLink} to="/logout">
                Logout
              </ListGroup.Item>
            </ListGroup>
          </Col>
          <Col>
            <Outlet />
          </Col>
        </Row>
      </Container>
      <ToastList />
    </>
  );
};

export default ProfileLayout;
