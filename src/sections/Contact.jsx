import React from "react";
import { useState } from "react";
import styled from "styled-components";
import { device } from "../components/device";
import emailjs from "emailjs-com";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { BsLinkedin } from "react-icons/bs";
import { MdMarkEmailUnread } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

function Contact() {
  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });

  const [showModal, setShowModal] = useState(false);
  const [formMessage, setFormMessage] = useState("");

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    // const success = document.getElementById("success");
    // const button = document.getElementById("send_message");
    // const failed = document.getElementById("failed");
    event.preventDefault();

    emailjs
      .sendForm(
        "service_wo9lv6o",
        "template_gpd0odv",
        event.target,
        "WuwUwial6BNhAsnae"
      )
      .then(
        (result) => {
          console.log(result.text);
          setFormMessage(
            "Thank you for your interest. I will do my absolute best to get back to you within the next 24 hours. Have a wonderful day!"
          );
          setShowModal(true);
        },
        (error) => {
          console.log(error.text);
          setFormMessage("I'm sorry, your message failed to send...");
          setShowModal(true);
        }
      );
    setFormData({ user_name: "", user_email: "", user_phone: "", message: "" });
  };

  return (
    <Container id="contact">
      <Wrap>
        <h2>
          <span>Get in Touch With Me</span>
          <div
            data-aos="zoom-in"
            data-aos-delay="100"
            data-aos-duration="500"
            data-aos-easing="ease-in-out"
          ></div>
        </h2>
        <ContactInfo
          style={{
            zIndex: 10,
            position: "relative",
            display: "flex",
            width: "100%",
            justifyContent: "center",
            margin: "4rem 0 1rem",
            // alignItems: "center",
          }}
        >
          <a href="mailto:gsrcoding@gmail.com">
            <h3>gsrcoding@gmail.com </h3>
          </a>{" "}
          <MdMarkEmailUnread
            style={{ marginLeft: "1rem", fontSize: "2.2em" }}
          />
          <a
            href="https://www.linkedin.com/in/gary-rosen-coding/"
            target="_blank"
            rel="noreferrer"
          >
            <LinkedIn>
              <BsLinkedin />
            </LinkedIn>
          </a>
          <MdLocationOn style={{ fontSize: "2.2rem", marginRight: "1rem" }} />{" "}
          <h3>GTA, Ontario</h3>
        </ContactInfo>
        <ContactFormDiv>
          <form
            className="contact-form"
            id="contact_form"
            name="contact"
            onSubmit={handleSubmit}
          >
            <FormGroup className="form-group">
              <input
                type="text"
                name="user_name"
                className="form-control"
                id="user_name"
                onChange={handleChange}
                value={formData.user_name}
                placeholder="Name"
                required
                data-aos="flip-down"
                data-aos-delay="100"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              />
              <input
                type="email"
                name="user_email"
                className="form-control"
                id="user_email"
                onChange={handleChange}
                value={formData.user_email}
                placeholder="E-mail Address"
                required
                data-aos="flip-down"
                data-aos-delay="300"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              />
              <input
                type="text"
                name="user_phone"
                className="form-control"
                id="user_phone"
                onChange={handleChange}
                value={formData.user_phone}
                placeholder="Phone Number (optional)"
                data-aos="flip-down"
                data-aos-delay="500"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
              />
            </FormGroup>
            <FormGroup className="form-group">
              <textarea
                type="textarea"
                name="message"
                placeholder="Please type your message"
                id="message"
                onChange={handleChange}
                value={formData.message}
                className="form-text-area"
                data-aos="zoom-in"
                data-aos-delay="75000"
                data-aos-duration="800"
                data-aos-easing="ease-in-out"
                required
              />
            </FormGroup>
            <FormGroup id="submit" className="form-group">
              <SubmitButton
                type="submit"
                id="send_message"
                className="btn btn-block"
              >
                Submit
              </SubmitButton>
            </FormGroup>
          </form>
        </ContactFormDiv>
      </Wrap>
      <Modal
        style={{ marginTop: "10%" }}
        show={showModal}
        onHide={() => setShowModal(false)}
      >
        <Modal.Header
          style={{ backgroundColor: "rgb(80, 190, 194, .9)" }}
          closeButton
        >
          <Modal.Title>Message Sent!</Modal.Title>
        </Modal.Header>
        <Modal.Body
          style={{
            backgroundColor: "#333",
            color: " rgba(241, 186, 45, 0.8)",
            fontWeight: "600",
          }}
        >
          {formMessage}
        </Modal.Body>
        <Modal.Footer
          style={{ backgroundColor: "rgb(80, 190, 194, 0.9)" }}
        ></Modal.Footer>
      </Modal>
    </Container>
  );
}

export default Contact;

const Container = styled.section`
  height: 100%;
  width: 100%;
  background-image: url("../img/contact-bg.jpg");
  background-position: center left 30%;
  background-size: cover;
  background-repeat: no-repeat;
  font-family: var(--font-title);
  padding-bottom: 60px;
  position: relative;
  overflow: hidden;
  @media ${device.mobileL} {
    padding-bottom: 20px;
  }
  position: relative;
  &:before {
    content: "";
    width: 100%;
    bottom: 0;
    left: 0;
    height: 100%;
    /* background: linear-gradient(to top, #000, #0003 70%, #0000); */
    position: absolute;
    z-index: 5;
  }
  &:after {
    content: "";
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
    /* height: 200px; */
    background: linear-gradient(to bottom, #000, #0003 100%, #0000);
    position: absolute;
    z-index: 5;
  }
`;

const Wrap = styled.div`
  max-width: 100%;
  width: var(--section-wrap-width);
  padding-top: 50px;
  margin: 0 auto;
  height: 100%;
  color: #e2e2e2;
  h2 {
    margin-top: 20px;
    text-transform: uppercase;
    font-weight: 500;
    font-size: 2.5rem;
    letter-spacing: 0.8px;
    position: relative;
    z-index: 10;
    text-align: center;
    color: var(--color-yellow);
    @media ${device.tablet} {
      font-size: 2.3rem;
    }
    @media ${device.mobileL} {
      margin-top: 0;
    }
    > div {
      height: 1px;
      width: 40%;
      background-color: grey;
      margin: 40px auto 45px;
      position: relative;
      overflow: hidden;
      @media ${device.tablet} {
        margin: 20px auto 30px;
      }
      @media ${device.mobileL} {
        margin: 20px auto;
      }
      &:before {
        content: "";
        position: absolute;
        height: 50px;
        top: 50%;
        width: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        border: 10px solid black;
        z-index: 1;
        background-color: var(--color-primary);
      }
    }
  }
`;

const ContactInfo = styled.div`
  h3 {
    font-weight: 400;
    color: rgba(241, 186, 45, 0.8);

    &:hover {
      color: rgba(241, 186, 45, 0.5);
    }
  }
`;

const LinkedIn = styled(BsLinkedin)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  color: #50bec2;
  font-size: 2rem;
  margin: 0 5rem;

  &:hover {
    color: rgba(80, 190, 194, 0.7);
  }
  /* padding-right: 20px; */
  /* width: 80%; */
  /* height: 100%; */
  /* margin: auto; */
  /* margin: auto 0; */

  @media ${device.mobileL} {
    padding-bottom: 5px;
  }
`;

const ContactFormDiv = styled.div`
  width: 100%;

  #success,
  #failed {
    color: $color;
    margin-top: 30px;
    &.hide {
      display: none;
    }
    &.show {
      display: block;
    }
  }

  form {
    display: flex;
    flex-direction: column;
    margin: 0 auto;
    width: 70%;
    padding: 20px 0 40px;
    position: relative;
    z-index: 7;
    @media ${device.tablet} {
      width: 90%;
    }
    @media ${device.mobileL} {
      width: 90%;
    }
  }
  input,
  textarea {
    width: 100%;
    background-color: rgba(0, 0, 0, 0.4);
    border: 1px solid grey;
    border-radius: 3px;
    padding: 10px;
    color: #e2e2e2;
    font-family: var(--font-title);
    letter-spacing: 0.5px;
    margin: 10px;
    &::placeholder {
      @media ${device.mobileL} {
        font-size: 1.2rem;
      }
    }
  }
  textarea {
    resize: none;
    height: 300px;
  }
`;

const FormGroup = styled.div`
  display: flex;
  width: 100%;
  @media ${device.mobileL} {
    flex-direction: column;
    align-items: center;
  }
`;

const SubmitButton = styled.button`
  width: 50%;
  height: auto;
  background-color: var(--color-primary) !important;
  font-family: var(--font-title);
  text-transform: uppercase;
  letter-spacing: 1px;
  font-size: 1.5rem;
  border-radius: 10px;
  font-weight: 500 !important;
  padding: 12px;
  display: inline-block;
  z-index: 5;
  cursor: pointer;
  transition: all 0.3s;
  border: none;
  margin: 0 auto;
  margin-top: 15px;
  color: rgba(0, 0, 0, 0.7);
  &:hover {
    background-color: #e2e2e2 !important;
    transition: 0.3s !important;
    color: var(--color-primary) !important;
  }
  &:hover a {
    color: var(--color-primary) !important;
    transition: 0.3s !important;
  }
`;
