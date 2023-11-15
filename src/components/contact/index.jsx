import emailjs from "emailjs-com";
import { useRef } from "react";


function Contact() {
    const form = useRef();

const sendEmail = (e) => {
  e.preventDefault();

  emailjs
    .sendForm(
      "service_4cl3zw5",
      "template_zpksxwc",
      form.current,
      "57kDhdR1BkRrhDzdY"
    )
    .then(
      (result) => {
        console.log(result.text);
        alert("SUCCESS!");
      },
      (error) => {
        console.log(error.text);
        alert("FAILED...", error);
      }
    );
};

  return (
    <div class="container">
      <div class="row">
        <div class="col align-self-center">
          <h1 class="text-center">Contact Me</h1>
          {/* <!-- contact form --> */}
          <form ref={form} onSubmit={sendEmail}>
            {/* <!-- name --> */}
            <div class="form-group">
              <label for="name">Name</label>
              <input
                type="name"
                name="name"
                class="form-control"
                id="name"
                placeholder="enter your name"
              />
            </div>

            {/* <!-- email --> */}
            <div class="form-group">
              <label for="email">Email address</label>
              <input
                type="email"
                name="email"
                class="form-control"
                id="email"
                placeholder="enter your email"
              />
            </div>

            {/* <!-- subject --> */}
            <div class="form-group">
              <label for="subject">Subject</label>
              <input
                type="text"
                name="subject"
                class="form-control"
                id="subject"
                placeholder="enter email subject"
              />
            </div>

            <div class="form-group">
              <label for="email_body">Message</label>
              <textarea
                class="form-control"
                id="email_body"
                rows="5"
              ></textarea>
            </div>

            <button type="submit" class="btn btn-primary">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;
