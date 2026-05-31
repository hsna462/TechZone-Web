function Contact() {
  return (
    <div className="container my-5">
      <h2 className="text-center mb-4">Contact Us</h2>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card p-4 shadow-sm">

            <input
              className="form-control mb-3"
              placeholder="Your Name"
            />

            <input
              className="form-control mb-3"
              placeholder="Email"
            />

            <textarea
              className="form-control mb-3"
              rows="4"
              placeholder="Message"
            ></textarea>

            <button className="btn btn-dark w-100">
              Send Message
            </button>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;