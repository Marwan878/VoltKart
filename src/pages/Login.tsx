import { Heading } from "@components/common";
import { Input } from "@components/form";
import useLogin from "@hooks/useLogin";
import {
  Alert,
  Button,
  Col,
  Container,
  Form,
  Row,
  Spinner,
} from "react-bootstrap";

const Login = () => {
  const {
    error,
    loading,
    formErrors,
    searchParams,
    isValid,
    register,
    handleSubmit,
    submitForm,
  } = useLogin();

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
              Your account has been successfully created, please check your
              email inbox and login
            </Alert>
          )}
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="Email Address"
              {...register("email")}
              error={formErrors.email?.message}
            />
            <Input
              type="password"
              label="Password"
              {...register("password")}
              error={formErrors.password?.message}
            />
            <Button
              type="submit"
              style={{ color: "white", backgroundColor: "var(--light-blue)" }}
              disabled={loading === "pending" || !isValid}
            >
              {loading === "pending" ? (
                <>
                  <Spinner animation="border" size="sm" /> Loading...
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
