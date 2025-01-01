import { useContext, useRef } from "react";
import classes from "./contact.module.css";
import NotificationContext from "../../store/notification/notification-context";
import Notification from "../ui/notification";

export default function ContactForm() {
  const emailRef = useRef();
  const nameRef = useRef();
  const messageRef = useRef();
  const { notification, showNotification, hideNotification } =
    useContext(NotificationContext);

  function submitHandler(event) {
    event.preventDefault();
    showNotification(
      "Contact Message",
      "Sending your message in progress...",
      "pending"
    );
    fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: emailRef.current.value,
        name: nameRef.current.value,
        message: messageRef.current.value,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        emailRef.current.value = "";
        nameRef.current.value = "";
        messageRef.current.value = "";
        showNotification(
          "Contact Message",
          "Message sent successfully!",
          "success"
        );
        setTimeout(() => {
          hideNotification();
        }, 1500);
      })
      .catch((error) => {
        showNotification(
          "Contact Message",
          "Failed to send message. Please try again later.",
          "error"
        );
        setTimeout(() => {
          hideNotification();
        }, 1500);
      });
  }
  return (
    <section className={classes.contact}>
      <h1>How can I help you?</h1>
      <form className={classes.form} onSubmit={submitHandler}>
        <div className={classes.controls}>
          <div className={classes.control}>
            <label htmlFor="email">Your Email</label>
            <input type="email" id="email" required ref={emailRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="name">Your Name</label>
            <input type="text" id="name" required ref={nameRef} />
          </div>
        </div>
        <div className={classes.control}>
          <label htmlFor="message">Your Message</label>
          <textarea id="message" rows="5" required ref={messageRef}></textarea>
        </div>
        <div className={classes.actions}>
          <button type="submit">Send Message</button>
        </div>
      </form>
      {notification && (
        <Notification
          title={notification.title}
          status={notification.status}
          message={notification.message}
        />
      )}
    </section>
  );
}
