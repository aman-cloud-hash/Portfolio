import { useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import "./Contact.css";

export default function Contact() {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState("idle"); // idle | sending | success

  const handleChange = (e) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("sending");
    
    try {
      const response = await fetch("https://formsubmit.co/ajax/amanrajbhar199918@gmail.com", {
        method: "POST",
        headers: { 
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          message: form.message,
          "Time Sent (IST)": new Date().toLocaleString("en-US", { timeZone: "Asia/Kolkata" })
        })
      });
      
      if (response.ok) {
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
      } else {
        setStatus("error");
      }
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
    
    setTimeout(() => setStatus("idle"), 4000);
  };

  return (
    <section id="contact" className="czar-contact section" ref={ref}>
      <div className="container czar-contact__layout">
        
        {/* Left header column */}
        <motion.div
          className="czar-contact__header"
          initial={{ opacity: 0, x: -30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="czar-contact__label">GET IN TOUCH</span>
          <h2 className="czar-contact__title">Let&apos;s build something together</h2>
          <p className="czar-contact__desc">
            Have a data modeling project, pipeline build, or model tuning problem you want solved? Let&apos;s talk.
          </p>
        </motion.div>

        {/* Right form column */}
        <motion.div
          className="czar-contact__wrapper"
          initial={{ opacity: 0, x: 30 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <form className="czar-contact__form" onSubmit={handleSubmit}>
            <div className="czar-contact__field">
              <label htmlFor="contact-name">Name</label>
              <input
                id="contact-name"
                type="text"
                name="name"
                placeholder="Aman Rajbhar"
                value={form.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="czar-contact__field">
              <label htmlFor="contact-email">Email</label>
              <input
                id="contact-email"
                type="email"
                name="email"
                placeholder="aman@example.com"
                value={form.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="czar-contact__field">
              <label htmlFor="contact-message">Message</label>
              <textarea
                id="contact-message"
                name="message"
                placeholder="Describe your project goals..."
                rows={4}
                value={form.message}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="pill-button czar-contact__submit"
              disabled={status === "sending"}
            >
              {status === "idle" && "Send message"}
              {status === "sending" && "Sending..."}
              {status === "success" && "✓ Message Sent!"}
              {status === "error" && "✕ Try Again"}
            </button>
          </form>
        </motion.div>

      </div>
    </section>
  );
}
