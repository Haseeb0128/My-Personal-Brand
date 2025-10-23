import ContactForm from "@/components/contact/ContactForm";
import Image from "next/image";
import React from "react";

const Contact = () => {
  return (
    <div className="min-h-screen bg-white">
      <Image
        src="/assets/images/contact-img.jpg"
        alt="contact-bg"
        width={1000}
        height={1000}
        className="w-full h-[300px] object-cover"
      />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-[40px] px-[20px] py-[40px] lg:px-[50px] lg:py-[50px]">
        <div className="flex flex-col gap-[20px]">
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
