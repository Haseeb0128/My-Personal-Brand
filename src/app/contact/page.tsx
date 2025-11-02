import ContactForm from "@/components/contact/ContactForm";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 px-5 py-10 lg:px-[50px] lg:py-[50px]">
        <div className="flex flex-col gap-5">
          <h2 className="text-2xl font-bold">Contact Us</h2>
          <p>
            We&apos;re here to help you with any questions or concerns you may
            have. Please fill out the form below and we&apos;ll get back to you
            as soon as possible.
          </p>
          <p>Contact Number: +92-332-8359845</p>
          <p>Email: info@carsilhouettes.com</p>
        </div>
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;
