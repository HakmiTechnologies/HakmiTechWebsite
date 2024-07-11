import Footer from "./Footer";
import { useForm } from "react-hook-form";

export const CareerForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <div>
    <div className="h-screen w-screen flex justify-center items-center"
    style={{
    backgroundImage: 'linear-gradient(0deg, #026e9f 0%, #0c1a28 100%)',
  }}>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-gray-800 p-8 rounded-lg shadow-lg space-y-6 w-full max-w-md mt-16"
      >
        <h2 className="text-white text-2xl font-bold text-center">
          Career Form
        </h2>

        <div className="flex flex-col">
          <label htmlFor="username" className="text-white">
            Name
          </label>
          <input
            type="text"
            id="username"
            {...register("username", { required: "Name is required" })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.username && (
            <p className="text-red-500 text-sm">{errors.username.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="contact" className="text-white">
            Contact Number
          </label>
          <input
            type="text"
            id="contact"
            {...register("contact", {
              required: "Contact number is required",
              pattern: {
                value: /^[0-9]{10}$/,
                message: "Invalid contact number",
              },
            })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.contact && (
            <p className="text-red-500 text-sm">{errors.contact.message}</p>
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
          <label htmlFor="post" className="text-white">
            Apply for Which Post
          </label>
          <div className="flex space-x-4">
            <label className="text-white flex items-center">
              <input
                type="radio"
                value="Developer"
                {...register("post", { required: "Post is required" })}
                className="bg-gray-700 text-white p-2 rounded mr-2"
              />
              Developer
            </label>
            <label className="text-white flex items-center">
              <input
                type="radio"
                value="Designer"
                {...register("post", { required: "Post is required" })}
                className="bg-gray-700 text-white p-2 rounded mr-2"
              />
              Designer
            </label>
          </div>
          {errors.post && (
            <p className="text-red-500 text-sm">{errors.post.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="experience" className="text-white">
            Experience
          </label>
          <input
            type="number"
            id="experience"
            {...register("experience", {
              required: "Experience is required",
              min: {
                value: 0,
                message: "Experience cannot be negative",
              },
            })}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
          {errors.experience && (
            <p className="text-red-500 text-sm">{errors.experience.message}</p>
          )}
        </div>

        <div className="flex flex-col">
          <label htmlFor="details" className="text-white">
            Other Details
          </label>
          <input
            type="text"
            id="details"
            {...register("details")}
            className="bg-gray-700 text-white p-2 rounded w-full"
          />
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
</div>
  );
};