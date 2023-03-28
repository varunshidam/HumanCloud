import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "reactstrap";
import CommonSection from "../components/UI/common-section/CommonSection";
import Helmet from "../components/Helmet/Helmet";
//

import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";
import "../styles/checkout.css";

const Checkout = () => {
  const [enterName, setEnterName] = useState("");
  const [enterEmail, setEnterEmail] = useState("");
  const [enterNumber, setEnterNumber] = useState("");
  const [enterCountry, setEnterCountry] = useState("");
  const [enterCity, setEnterCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const shippingInfo = [];
  const cartTotalAmount = useSelector((state) => state.cart.totalAmount);
  const shippingCost = 30;

  const totalAmount = cartTotalAmount + Number(shippingCost);

  const submitHandler = (e) => {
    e.preventDefault();
    const userShippingAddress = {
      name: enterName,
      email: enterEmail,
      phone: enterNumber,
      country: enterCountry,
      city: enterCity,
      postalCode: postalCode,
    };

    shippingInfo.push(userShippingAddress);
    console.log(shippingInfo);
  };

  const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

  const formSchema = Yup.object().shape({
    fname: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Length must be greater than 3"),

    lname: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Length must be greater than 3"),
    email: Yup.string().required("Email is required").email("Email is invalid"),

    phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
    country: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Length must be greater than 3"),

    state: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Length must be greater than 3"),
    city: Yup.string()
      .required("Please enter the required field")
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .min(3, "Length must be greater than 3"),

    pin: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("A Pin Code number can't start with a minus")
      .integer("A phone number can't include a decimal point")
      .min(4, "mininum 4 req"),
  });
  const formOptions = { resolver: yupResolver(formSchema) };
  const { register, handleSubmit, reset, formState } = useForm(formOptions);
  const { errors } = formState;
  function onSubmit(data) {
    console.log(JSON.stringify(data, null, 4));
    return false;
  }

  return (
    <Helmet title="Checkout">
      <CommonSection title="Checkout" />
      <section>
        <Container>
          <Row>
            <Col lg="8" md="6">
              <h6 className="mb-4">Shipping Address</h6>
              {/* <form className="checkout__form" onSubmit={submitHandler}>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Enter your name"
                    required
                    onChange={(e) => setEnterName(e.target.value)}
                  />
                </div>

                <div className="form__group">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    required
                    onChange={(e) => setEnterEmail(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Phone number"
                    required
                    onChange={(e) => setEnterNumber(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="Country"
                    required
                    onChange={(e) => setEnterCountry(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="text"
                    placeholder="City"
                    required
                    onChange={(e) => setEnterCity(e.target.value)}
                  />
                </div>
                <div className="form__group">
                  <input
                    type="number"
                    placeholder="Postal code"
                    required
                    onChange={(e) => setPostalCode(e.target.value)}
                  />
                </div>
                <button type="submit" className="addTOCart__btn">
                  Payment
                </button>
              </form> */}

              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                  {/* First NAme  */}
                  <label>First Name</label>
                  <input
                    name="fname"
                    type="text"
                    {...register("fname")}
                    className={`form-control ${
                      errors.fname ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.fname?.message}
                  </div>

                  {/* last NAme  */}
                  <label>Last Name</label>
                  <input
                    name="lname"
                    type="text"
                    {...register("lname")}
                    className={`form-control ${
                      errors.fname ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.lname?.message}
                  </div>

                  {/* Email */}
                  <label>Email</label>
                  <input
                    name="email"
                    type="text"
                    {...register("email")}
                    className={`form-control ${
                      errors.email ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.email?.message}
                  </div>
                  {/* Phone Number */}

                  <label>Phone Number</label>
                  <input
                    name="phone"
                    type="text"
                    {...register("phone")}
                    className={`form-control ${
                      errors.phone ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.phone?.message}
                  </div>

                  {/* Country  */}
                  <label>Country</label>
                  <input
                    name="country"
                    type="text"
                    {...register("country")}
                    className={`form-control ${
                      errors.country ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.country?.message}
                  </div>

                  {/* State */}
                  <label>State</label>
                  <input
                    name="state"
                    type="text"
                    {...register("state")}
                    className={`form-control ${
                      errors.state ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">
                    {errors.state?.message}
                  </div>

                  {/* City */}

                  <label>City</label>
                  <input
                    name="city"
                    type="text"
                    {...register("city")}
                    className={`form-control ${
                      errors.city ? "is-invalid" : ""
                    }`}
                  />
                  <div className="invalid-feedback">{errors.city?.message}</div>
                  {/* Pincode */}
                  <label>Pin Code</label>
                  <input
                    name="pin"
                    type="text"
                    {...register("pin")}
                    className={`form-control ${errors.pin ? "is-invalid" : ""}`}
                  />
                  <div className="invalid-feedback">{errors.pin?.message}</div>
                </div>

                <div className="mt-3">
                  <button type="submit" className="btn btn-danger">
                    Submit
                  </button>
                </div>
              </form>
            </Col>

            <Col lg="4" md="6" >
              <div className="checkout__bill">
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Subtotal: <span>${cartTotalAmount}</span>
                </h6>
                <h6 className="d-flex align-items-center justify-content-between mb-3">
                  Shipping: <span>${shippingCost}</span>
                </h6>
                <div className="checkout__total">
                  <h5 className="d-flex align-items-center justify-content-between">
                    Total: <span>${totalAmount}</span>
                  </h5>
                </div>
              </div>
            </Col>
          </Row>

          
        </Container>
      </section>
    </Helmet>
  );
};

export default Checkout;
