"use client";
import { useRef, useState } from "react";
import styles from "./LeadForm.module.css";
const LeadForm = () => {
  const [focused, setFocused] = useState({});
  const formRef = useRef(null);
  const [sending, setSending] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });
  const [formData, setFormData] = useState({
    companyName: "",
    budget: "",
    name: "",
    phone: "",
    email: "",
    service: "",
    designation: "",
  });
  const handleNameChange = (e) => {
    const value = e.target.value.replace(/[^a-zA-Z\s]/g, "");
    setFormData((s) => ({ ...s, name: value }));
  };
  const handlePhoneChange = (e) => {
    const value = e.target.value.replace(/\D/g, "").slice(0, 10);
    setFormData((s) => ({ ...s, phone: value }));
  };
  const submitHandler = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/send-mail", {
        method: "POST",
        headers: { "Content-Type": "application/json" }, // FIXED
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to send email");
      alert("Thanks! Your enquiry has been sent.");
      setFormData({
        companyName: "",
        budget: "",
        name: "",
        phone: "",
        email: "",
        service: "",
        designation: "",
      });
    } catch (err) {
      console.error("Error sending mail:", err);
      alert("Something went wrong. Please try again.");
    } finally {
      setSending(false);
    }
  };
  const handleFocus = (name) => {
    setFocused((prev) => ({ ...prev, [name]: true }));
  };
  const handleBlur = (name, value) => {
    if (!value) {
      setFocused((prev) => ({ ...prev, [name]: false }));
    }
  };
  return (
    <section className={styles.leadForm} id="contact">
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.heading}>Ready to scale?</h2>
          <p className={styles.subheading}>
            Book a free strategy call with our experts. We ll analyze your
            current setup and propose a custom growth plan.
          </p>
          <div className={styles.contactInfo}>
            <div className={styles.infoItem}>
              <span>📞</span> +91 931 500 3754
            </div>
            {/* <div className={styles.infoItem}>
              <span>✉️</span> hello@agency.com
            </div> */}
          </div>
        </div>
        <form onSubmit={submitHandler} ref={formRef} className="ul-grid-from">
          <div className="ul-grid">
            <div className="ul-field">
              <label htmlFor="companyName">Company Name</label>
              <input
                id="companyName"
                name="companyName"
                type="text"
                placeholder="Company Name"
                value={formData.companyName}
                onChange={(e) =>
                  setFormData((s) => ({
                    ...s,
                    companyName: e.target.value,
                  }))
                }
                required
              />
            </div>
            <div className="ul-field">
              <label htmlFor="budget">Monthly Marketing Budget</label>
              <select
                id="budget"
                name="budget"
                value={formData.budget}
                onChange={(e) =>
                  setFormData((s) => ({ ...s, budget: e.target.value }))
                }
              >
                <option value="">Monthly Marketing Budget</option>
                <option value="Less Than Rs 2L Budget">
                  Less Than Rs 2L Budget
                </option>
                <option value="Rs 2L to Rs 5L">Rs 2L to Rs 5L</option>
                <option value="Rs 5L to Rs 25L">Rs 5L to Rs 25L</option>
                <option value="More Than 50L">More Than 50L</option>
                <option value="I am Looking For Organic Services">
                  I am Looking For Organic Services
                </option>
              </select>
            </div>
            <div className="ul-field">
              <label htmlFor="name">Name</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData((s) => ({ ...s, name: e.target.value }))
                }
                required
              />
            </div>
            <div className="ul-field">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handlePhoneChange}
              />
            </div>
            <div className="ul-field ul-span-2">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) =>
                  setFormData((s) => ({ ...s, email: e.target.value }))
                }
                required
              />
            </div>
            <div className="ul-field">
              <label htmlFor="service">Choose A Service</label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={(e) =>
                  setFormData((s) => ({ ...s, service: e.target.value }))
                }
              >
                <option value="">Choose A Service</option>
                <option value="SEO">SEO</option>
                <option value="Paid Marketing (Google, Facebook & Amazon ads)">
                  Paid Marketing (Google, Facebook & Amazon ads)
                </option>
                <option value="UI/UX">UI/UX</option>
                <option value="Website Development">Website Development</option>
                <option value="Website Maintenance">Website Maintenance</option>
                <option value="Shopify Migration">Shopify Migration</option>
              </select>
            </div>
            <div className="ul-field">
              <label htmlFor="designation">Designation</label>
              <input
                id="designation"
                name="designation"
                type="text"
                placeholder="Designation"
                value={formData.designation}
                onChange={(e) =>
                  setFormData((s) => ({
                    ...s,
                    designation: e.target.value,
                  }))
                }
              />
            </div>
          </div>
          {status.message && (
            <div
              className={`ul-status ${
                status.type === "error" ? "ul-error" : "ul-success"
              }`}
            >
              {status.message}
            </div>
          )}
          <button className="ul-submit" type="submit" disabled={sending}>
            {sending ? "sending..." : "Send Enquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};
export default LeadForm;
