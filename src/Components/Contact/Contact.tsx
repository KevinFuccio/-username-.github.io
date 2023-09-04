import "./Contact.scss";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import { Footer } from "../Footer/Footer";
import { SyntheticEvent, useRef, useState } from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import emailjs from "@emailjs/browser";
import { EMAIL_REGEX } from "../../utils";
import { Alert, Snackbar } from "@mui/material";

export const Contact = () => {
  const form: any = useRef();
  const [contactForm, setContactForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [alert, setAlert] = useState(false);
  const handleChange = (e: any) => {
    setContactForm({
      ...contactForm,
      [e.target.name]: e.target.value,
    });
  };

  const sendEmail = (e: any) => {
    e.preventDefault();
    const validation = EMAIL_REGEX.test(contactForm.email);
    if (contactForm.name && validation) {
      emailjs
        .send(
          "service_8sfbtkb",
          "template_rb6y1hv",
          {
            from_name: contactForm.name,
            from_email: contactForm.email,
            message: contactForm.message,
          },
          "XtXQQM6jX29rmmAYA"
        )
        .then((res) => {
          if (res.status === 200) {
            setAlert(true);
          }
        });
      setContactForm({
        name: "",
        email: "",
        message: "",
      });
    } else {
      console.log("campi vuoti");
    }
  };

  const handleClose = (
    _event?: SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === "clickaway") {
      return;
    }
    setAlert(false);
  };

  return (
    <div className="contact-container" id="contact">
      <div className="contact-circles">
        <div className="contact-circle"></div>
        <div className="contact-circle"></div>
      </div>
      <div>
        <h2>CONTACT</h2>
      </div>

      <div className="msg-form-container">
        <div className="contact-msg">
          <h3>Drop a message</h3>
          <span></span>
          <div style={{ marginTop: "20px" }}>
            <div className="contact-msg-icons">
              <div>
                <LocalPhoneIcon />
              </div>
              <span>+39 3669724509</span>
            </div>
            <div className="contact-msg-icons">
              <div>
                <MailOutlineIcon />
              </div>
              <span>kevin.fuccio00@gmail.com</span>
            </div>
            <div className="contact-msg-icons">
              <div>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/kevin-fuccio-28bb07267/"
                >
                  <LinkedInIcon />
                </a>
              </div>
              <span>My LinkedIn</span>
            </div>
            <div className="contact-msg-icons">
              <div>
                <a target="_blank" href="https://github.com/KevinFuccio">
                  <GitHubIcon />
                </a>
              </div>
              <span>My GitHub</span>
            </div>
          </div>
        </div>

        <div className="contact-form-container">
          <form
            ref={form}
            onSubmit={(e) => {
              sendEmail(e);
            }}
          >
            <label>Name</label>
            <input
              type="text"
              name="name"
              required
              value={contactForm.name}
              onChange={(e) => handleChange(e)}
            />
            <label>Email</label>
            <input
              type="email"
              name="email"
              required
              value={contactForm.email}
              onChange={(e) => handleChange(e)}
            />
            <label>Message</label>
            <textarea
              name="message"
              value={contactForm.message}
              onChange={(e) => handleChange(e)}
            />
            <button>Send</button>
          </form>
        </div>
      </div>
      <hr />
      <Footer />
      {alert && (
        <Snackbar open={alert} autoHideDuration={3000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Email sent successfully!
          </Alert>
        </Snackbar>
      )}
    </div>
  );
};
