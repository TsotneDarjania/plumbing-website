import { createSignal } from "solid-js";
import styles from "./ContactForm.module.css";

export default function ContactForm() {
  const [email, setEmail] = createSignal("");
  const [message, setMessage] = createSignal("");

  const handleSubmit = (e: Event) => {
    e.preventDefault();
    console.log("Email:", email());
    console.log("Message:", message());
    alert("Thank you! We'll be in touch.");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact_form" class={styles.contactSection}>
      <div class={styles.formContainer}>
        <h2>დაგვიკავშირდი</h2>
        <p>მოგვწერე ნებისმიერ დროს!</p>
        <form onSubmit={handleSubmit} class={styles.form}>
          <input
            type="phone"
            placeholder="მობილურის ნომერი"
            value={email()}
            onInput={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <textarea
            placeholder="წერილი"
            value={message()}
            onInput={(e) => setMessage(e.currentTarget.value)}
            rows={5}
            required
          />
          <button type="submit">გაგზავნა</button>
        </form>
      </div>
    </section>
  );
}
