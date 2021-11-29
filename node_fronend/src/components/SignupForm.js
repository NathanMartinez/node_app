import { useState } from "react";
import { Card, Button, Form, Row, InputGroup } from "react-bootstrap";
import { Formik } from "formik";
import axios from "axios";
import signupSchema from "../schemas/signup.schemas";

function SignupForm() {
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    phone_number: "",
  });

  return (
    <Card>
      <Card.Header>
        <Card.Title>Sign up</Card.Title>
      </Card.Header>
      <Card.Body>
        <Formik
          validationSchema={signupSchema}
          onSubmit={async (values, actions) => {
            actions.setSubmitting(true);
            setData(values)
            await axios
              .post("http://127.0.0.1:5000/users/signup", values)
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            actions.resetForm({
              values: {
                name: "",
                email: "",
                password: "",
                phone_number: "",
              },
            });
            actions.setSubmitting(true);
            console.log(data)
          }}
          initialValues={{
            name: "",
            email: "",
            password: "",
            phone_number: "",
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
                <Form.Group controlId="validationFormik01">
                  <Form.Label>name</Form.Label>
                  <Form.Control
                    type="text"
                    name="name"
                    placeholder="name"
                    value={values.name}
                    onChange={handleChange}
                    isValid={touched.name && !errors.name}
                    isInvalid={!!errors.name}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.name}
                  </Form.Control.Feedback>
                </Form.Group>
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
              <Row className="mb-3">
                <Form.Group controlId="validationFormik03">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="555-555-5555"
                    name="phone_number"
                    value={values.phone_number}
                    onChange={handleChange}
                    isValid={touched.phone_number && !errors.phone_number}
                    isInvalid={!!errors.phone_number}
                  />
                  <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  <Form.Control.Feedback type="invalid">
                    {errors.phone_number}
                  </Form.Control.Feedback>
                </Form.Group>
              </Row>
              <Button type="submit">Sign up</Button>
            </Form>
          )}
        </Formik>
      </Card.Body>
    </Card>
  );
}

export default SignupForm;
