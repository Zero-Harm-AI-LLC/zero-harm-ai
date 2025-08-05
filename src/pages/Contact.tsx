export default function Contact() {
  return (
    <main>
      <section className="contact fade-in-section">
        <h2>Contact Us</h2>
        <p>Want to learn more or schedule a demo? Reach out at <a href="mailto:contact@zeroharmai.com">contact@zeroharmai.com</a>.</p>
        <form>
          <label htmlFor="name">Name</label><br />
          <input type="text" id="name" name="name" required /><br /><br />
          <label htmlFor="email">Email</label><br />
          <input type="email" id="email" name="email" required /><br /><br />
          <label htmlFor="message">Message</label><br />
          <textarea id="message" name="message" rows={5} required></textarea><br /><br />
          <button type="submit">Send</button>
        </form>
      </section>
    </main>
  );
}
