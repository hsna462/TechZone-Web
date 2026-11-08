import { useState } from "react";

const emptyForm = { name: "", email: "", message: "" };

const Contact = () => {
  const [form, setForm] = useState(emptyForm);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previousForm) => ({ ...previousForm, [name]: value }));
    setSubmitted(false);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Demo only: connect this handler to a backend or email service to deliver messages.
    console.log("Contact form submission:", form);
    setSubmitted(true);
    setForm(emptyForm);
  };

  return (
    <main className="container section-space">
      <div className="section-heading text-center mb-5">
        <span className="eyebrow">WE'RE HERE TO HELP</span>
        <h1>Contact us</h1>
        <p>Have a question? Send our team a message.</p>
      </div>
      <div className="row justify-content-center">
        <div className="col-lg-7 col-xl-6">
          <form className="form-panel" onSubmit={handleSubmit}>
            {submitted && <div className="alert alert-success" role="status">Your message has been recorded in this demo. Thank you!</div>}
            <div className="mb-3">
              <label htmlFor="contactName" className="form-label">Your name</label>
              <input id="contactName" className="form-control" type="text" name="name"
                value={form.name} onChange={handleChange} placeholder="Enter your name" required />
            </div>
            <div className="mb-3">
              <label htmlFor="contactEmail" className="form-label">Email address</label>
              <input id="contactEmail" className="form-control" type="email" name="email"
                value={form.email} onChange={handleChange} placeholder="name@example.com" required />
            </div>
            <div className="mb-4">
              <label htmlFor="contactMessage" className="form-label">Message</label>
              <textarea id="contactMessage" className="form-control" name="message" rows="5"
                value={form.message} onChange={handleChange} placeholder="How can we help?" required />
            </div>
            <button type="submit" className="btn btn-dark w-100">Send message</button>
          
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;
