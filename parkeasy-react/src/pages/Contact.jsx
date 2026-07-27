import { Link } from "react-router-dom";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const form = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
  
    emailjs
      .sendForm(
        "service_0tl6bv8",
        "template_p13cgfc",
        form.current,
        "NzBb9GjsN9nUZKvj3"
      )
      .then(() => {
        alert("Message Sent Successfully!");
  
        setName("");
        setEmail("");
        setMessage("");
      })
      .catch((error) => {
        console.error(error);
        alert("Failed to send message.");
      });
  };
  return (

    <div className="bg-[#06142E] text-white min-h-screen">

      {/* Navbar */}

      <nav className="bg-slate-900/90 backdrop-blur-md shadow-lg sticky top-0 z-50 border-b border-slate-700">

        <div className="container mx-auto px-6">

          <div className="flex justify-between items-center h-24">

            <div className="flex items-center space-x-4">

              <div className="w-14 h-14 bg-black rounded-lg flex items-center justify-center">

                <span className="text-cyan-400 text-3xl font-bold">
                  P
                </span>

              </div>

              <h1 className="text-5xl font-bold text-cyan-400">
                ParkEasy
              </h1>

            </div>

            <div className="hidden md:flex items-center space-x-10 text-xl">

              <Link to="/" className="hover:text-cyan-400">
                Home
              </Link>

              <Link to="/find-parking" className="hover:text-cyan-400">
                Find Parking
              </Link>

              <Link to="/reservation" className="hover:text-cyan-400">
                Reservation
              </Link>

              <Link to="/pricing" className="hover:text-cyan-400">
                Pricing
              </Link>

              <Link to="/contact" className="text-cyan-400 font-semibold">
                Contact
              </Link>

            </div>

            <div className="hidden md:flex space-x-4">

              <Link
                to="/login"
                className="border-2 border-cyan-400 px-6 py-3 rounded-xl hover:bg-cyan-400 hover:text-black transition font-semibold"
              >
                Login
              </Link>

              <Link
                to="/register"
                className="bg-cyan-400 text-black px-6 py-3 rounded-xl hover:bg-cyan-300 transition font-semibold"
              >
                Register
              </Link>

            </div>

          </div>

        </div>

      </nav>

      {/* Hero */}

      <section className="py-20">

        <div className="container mx-auto px-6 text-center">

          <p className="text-cyan-400 uppercase tracking-[5px] text-lg mb-6">
            GET IN TOUCH
          </p>

          <h1 className="text-6xl font-bold mb-6">

            Contact

            <span className="text-cyan-400">
              {" "}ParkEasy
            </span>

          </h1>

          <p className="text-gray-300 text-xl max-w-3xl mx-auto">

            Have questions about reservations, pricing, or parking availability?
            Our team is always ready to assist you.

          </p>

        </div>

      </section>

      {/* Contact Section */}

      <section className="pb-24">

        <div className="container mx-auto px-6">

          <div className="grid lg:grid-cols-2 gap-12">

            <div className="bg-slate-800 rounded-3xl p-10 shadow-2xl">

              <h2 className="text-4xl font-bold mb-8">
                Send a Message
              </h2>

              <form
  ref={form}
  onSubmit={handleSubmit}
  className="space-y-6"
>

<input
  type="text"
  name="name"
  placeholder="Your Name"
  value={name}
  onChange={(e) => setName(e.target.value)}
  className="w-full p-5 rounded-xl bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:outline-none"
  required
/>

<input
  type="email"
  name="email"
  placeholder="Your Email"
  value={email}
  onChange={(e) => setEmail(e.target.value)}
  className="w-full p-5 rounded-xl bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:outline-none"
  required
/>

<textarea
  name="message"
  rows="6"
  placeholder="Your Message"
  value={message}
  onChange={(e) => setMessage(e.target.value)}
  className="w-full p-5 rounded-xl bg-slate-700 border border-slate-600 focus:border-cyan-400 focus:outline-none"
  required
/>

                <button
                  type="submit"
                  className="w-full bg-cyan-400 text-black py-5 rounded-xl font-bold text-lg hover:bg-cyan-300 transition"
                >
                  Send Message
                </button>

              </form>

            </div>
                        {/* Contact Information */}

                        <div className="space-y-8">

<div className="bg-slate-800 p-8 rounded-3xl shadow-2xl">

  <h3 className="text-3xl font-bold text-cyan-400 mb-4">
    📍 Address
  </h3>

  <p className="text-gray-300 text-lg">
    ParkEasy Headquarters
    <br />
    Bangalore, Karnataka
    <br />
    India
  </p>

</div>

<div className="bg-slate-800 p-8 rounded-3xl shadow-2xl">

  <h3 className="text-3xl font-bold text-cyan-400 mb-4">
    📞 Phone
  </h3>

  <p className="text-gray-300 text-lg">
    +91 98765 43210
  </p>

</div>

<div className="bg-slate-800 p-8 rounded-3xl shadow-2xl">

  <h3 className="text-3xl font-bold text-cyan-400 mb-4">
    📧 Email
  </h3>

  <p className="text-gray-300 text-lg">
    support@parkeasy.com
  </p>

</div>

<div className="bg-slate-800 p-8 rounded-3xl shadow-2xl">

  <h3 className="text-3xl font-bold text-cyan-400 mb-4">
    🕒 Working Hours
  </h3>

  <p className="text-gray-300 text-lg">
    Monday – Saturday
    <br />
    9:00 AM – 6:00 PM
  </p>

</div>

</div>

</div>

</div>

</section>

{/* Footer */}

<footer className="bg-slate-900 border-t border-slate-700 py-8">

<div className="container mx-auto px-6 text-center">

<p className="text-gray-400">
© 2026 ParkEasy. All Rights Reserved.
</p>

</div>

</footer>

</div>

);
}

export default Contact;