import { Heading } from "@components/common";
import { Input } from "@components/form";
import SubmitButton from "@components/register/SubmitButton";
import useRegister from "@hooks/useRegister";
import { Col, Container, Form, Row } from "react-bootstrap";

const Register = () => {
  const {
    loading,
    error,
    formErrors,
    isValid,
    submitForm,
    register,
    handleSubmit,
  } = useRegister();

  return (
    <Container className="min-vh-100 mb-3">
      <Heading title="User Registration" />
      <Row>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={handleSubmit(submitForm)}>
            <Input
              label="First Name"
              {...register("firstName")}
              error={formErrors.firstName?.message}
            />
            <Input
              label="Last Name"
              {...register("lastName")}
              error={formErrors.lastName?.message}
            />
            <Input
              type="text"
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
            <Input
              type="password"
              label="Confirm Password"
              {...register("confirmPassword")}
              error={formErrors.confirmPassword?.message}
            />
            <SubmitButton loading={loading} isValid={isValid} />
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
