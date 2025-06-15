import { Heading } from "@components/common";
import { Input } from "@components/Form";
import useRegister from "@hooks/useRegister";
import { Button, Col, Container, Form, Row, Spinner } from "react-bootstrap";
import { Navigate } from "react-router-dom";

const Register = () => {
  const {
    loading,
    error,
    accessToken,
    formErrors,
    emailAvailabilityStatus,
    submitForm,
    register,
    handleSubmit,
    emailOnBlurHandler,
  } = useRegister();

  if (accessToken) {
    return <Navigate to="/" />;
  }

  return (
    <Container className="min-vh-100 mb-3">
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              name="firstName"
              register={register}
              error={formErrors.firstName?.message}
            />
            <Input
              label="Last Name"
              name="lastName"
              register={register}
              error={formErrors.lastName?.message}
            />
            <Input
              label="Email Address"
              name="email"
              register={register}
              onBlur={emailOnBlurHandler}
              error={
                formErrors.email?.message
                  ? formErrors.email?.message
                  : emailAvailabilityStatus === "notAvailable"
                  ? "This email is already in use."
                  : emailAvailabilityStatus === "failed"
                  ? "Error from the server."
                  : ""
              }
              formText={
                emailAvailabilityStatus === "checking"
                  ? "We're currently checking the availability of this email address. Please wait a moment."
                  : ""
              }
              success={
                emailAvailabilityStatus === "available"
                  ? "This email is available for use."
                  : ""
              }
              disabled={emailAvailabilityStatus === "checking"}
            />
            <Input
              type="password"
              label="Password"
              name="password"
              register={register}
              error={formErrors.password?.message}
            />
            <Input
              type="password"
              label="Confirm Password"
              name="confirmPassword"
              register={register}
              error={formErrors.confirmPassword?.message}
            />
            <Button
              variant="info"
              type="submit"
              style={{ color: "white" }}
              disabled={
                emailAvailabilityStatus === "checking"
                  ? true
                  : false || loading === "pending"
              }
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

export default Register;
