import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Footer from "./Footer";
const schema = z.object({
  name: z.string().nonempty("Name is required"),
  phone: z.string().nonempty("Phone number is required").min(10, "Phone number must be at least 10 digits"),
  email: z.string().nonempty("Email is required").email("Invalid email address"),
  message: z.string().nonempty("Message is required"),
});

function ContactForm() {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(schema),
  });

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <>
    <div
      className="h-screen w-screen flex justify-center items-center"
      style={{
        backgroundImage: 'linear-gradient(0deg, #026e9f 0%, #0c1a28 100%)',
      }}
    >
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 w-full max-w-md mt-8"
      >
        <h2 className="text-white text-2xl font-bold text-center">
          Contact Us
        </h2>

        <div className="flex flex-col">
          <label htmlFor="name" className="text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            {...register("name", { required: "Name is required" })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.name && (
            <p className="text-red-500 text-sm">{errors.name.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="phone" className="text-white">
            Phone Number
          </label>
          <input
            type="text"
            id="phone"
            {...register("phone", {
              required: "Phone number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid phone number",
              },
            })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.phone && (
            <p className="text-red-500 text-sm">{errors.phone.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="email" className="text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="message" className="text-white">
            Message
          </label>
          <textarea
            id="message"
            {...register("message", { required: "Message is required" })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.message && (
            <p className="text-red-500 text-sm">{errors.message.message}</p>
          )}
        </div>

        <button
          type="submit"
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 transition-colors w-full"
        >
          Submit
        </button>
      </form>
    </div>
          <Footer />

    </>
  );
}

export default ContactForm;