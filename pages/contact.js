import Head from "next/head";
import ContactForm from "../components/contact/contact-form";

function ContactPage() {
  return (
    <>
      <Head>
        <title>Contact Us - My Blog</title>
        <meta
          name="description"
          content="Contact us for any inquiries or feedback"
        />
      </Head>
      <ContactForm />
    </>
  );
}

export default ContactPage;
