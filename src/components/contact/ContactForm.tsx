"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import InputField from "@/components/common/InputField";
import CustomTextArea from "@/components/CustomTextArea";
import { Button } from "@/components/ui/button";
import {
  contactFormSchema,
  ContactFormData,
} from "@/constants/validation-schemas";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactFormSchema),
    mode: "onChange",
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      // Simulate API call
      console.log("Form submitted:", data);

      // Here you would typically send the data to your API
      // await submitContactForm(data);

      // Reset form after successful submission
      reset();
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
      <div className="grid grid-cols-1 gap-6">
        <InputField
          label="Name"
          id="name"
          placeholder="Enter your full name"
          {...register("name")}
          error={errors.name?.message}
        />

        <InputField
          label="Email"
          id="email"
          type="email"
          placeholder="Enter your email address"
          {...register("email")}
          error={errors.email?.message}
        />
      </div>

      <InputField
        label="Phone Number"
        id="phone"
        type="tel"
        placeholder="Enter your phone number"
        {...register("phone")}
        error={errors.phone?.message}
      />

      <CustomTextArea
        label="Message"
        id="message"
        placeholder="Enter your message here..."
        rows={6}
        textareaClassName="h-[200px]"
        {...register("message")}
        error={errors.message?.message}
      />

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full md:w-auto"
      >
        {isSubmitting ? "Sending..." : "Send Message"}
      </Button>
    </form>
  );
};

export default ContactForm;
