import { useState } from "react";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent successfully!");
    console.log(form);

    setForm({
      name: "",
      email: "",
      message: ""
    });
  };

  return (
    <div className="container my-5">

      {/* TITLE */}
      <div className="text-center mb-4">
        <h2>Contact Us</h2>
        <p className="text-muted">
          We usually reply within 24 hours
        </p>
      </div>

      {/* FORM */}
      <div className="row justify-content-center">
        <div className="col-md-6">

          <form className="card p-4 shadow-sm" onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="form-control mb-3"
              value={form.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control mb-3"
              value={form.email}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Message"
              rows="5"
              className="form-control mb-3"
              value={form.message}
              onChange={handleChange}
              required
            />

            <button type="submit" className="btn btn-dark w-100">
              Send Message
            </button>

          </form>

        </div>
      </div>

    </div>
  );
}

export default Contact;