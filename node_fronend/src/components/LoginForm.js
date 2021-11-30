import { useState } from "react";
import { Card, Button, Form, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import loginSchema from "../schemas/login.schemas";

function LoginForm() {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  return (
    <Card>
      <Card.Header>
        <Card.Title>Login</Card.Title>
      </Card.Header>
      <Card.Body>
        <Formik
          validationSchema={loginSchema}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            setData(values);
            await axios
              .post("http://127.0.0.1:5000/users/login", values)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            actions.resetForm({
              values: {
                email: "",
                password: "",
              },
            });
            actions.setSubmitting(true);
            console.log(data);
          }}
          initialValues={{
            email: "",
            password: "",
          }}
        >
          {({
            handleSubmit,
            handleChange,
            handleBlur,
            values,
            touched,
            isValid,
            errors,
          }) => (
            <Form noValidate onSubmit={handleSubmit}>
              <Row className="mb-3">
                <Form.Group controlId="validationFormikemail">
                  <Form.Label>Email</Form.Label>
                  <InputGroup hasValidation>
                    <InputGroup.Text id="inputGroupPrepend">@</InputGroup.Text>
                    <Form.Control
                      type="text"
                      placeholder="example@email.com"
                      aria-describedby="inputGroupPrepend"
                      name="email"
                      value={values.email}
                      onChange={handleChange}
                      isValid={touched.email && !errors.email}
                      isInvalid={!!errors.email}
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                    <Form.Control.Feedback type="invalid">
                      {errors.email}
                    </Form.Control.Feedback>
                  </InputGroup>
                </Form.Group>
                <Form.Group controlId="validationFormik02">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="text"
                    name="password"
                    placeholder="password"
                    value={values.password}
                    onChange={handleChange}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.password}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit">Login</Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default LoginForm;
