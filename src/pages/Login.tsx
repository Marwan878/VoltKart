import { Navigate } from "react-router-dom";
import useLogin from "@hooks/useLogin";
import { Heading } from "@components/common";
import { Input } from "@components/Form";
import {
  Form,
  Button,
  Row,
  Col,
  Alert,
  Spinner,
  Container,
} from "react-bootstrap";

const Login = () => {
  const {
    error,
    loading,
    accessToken,
    formErrors,
    searchParams,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="min-vh-100">
      <Heading title="User Login" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          {searchParams.get("message") === "login_required" && (
            <Alert variant="success">
              You need to login to view this content
            </Alert>
          )}

          {searchParams.get("message") === "account_created" && (
            <Alert variant="success">
              Your account successfully created, please check your email inbox
              and login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              name="email"
              label="Email Address"
              register={register}
              error={formErrors.email?.message}
            />
            <Input
              type="password"
              name="password"
              label="Password"
              register={register}
              error={formErrors.password?.message}
            />
            <Button
              type="submit"
              style={{ color: "white", backgroundColor: "var(--light-blue)" }}
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm"></Spinner> Loading...
                </>
              ) : (
                "Submit"
              )}
            </Button>

            {error && (
              <p style={{ color: "#DC3545", marginTop: "10px" }}>{error}</p>
            )}
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
