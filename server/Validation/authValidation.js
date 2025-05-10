import z from "zod";

//Creating registration schema

const registerSchema = z.object({
  name: z
    .string({ required_error: "Name is required" })
    .trim()
    .min(3, { message: "Min characters is atleast 3" })
    .max(255, { message: "Max characters is 255" }),
  email: z
    .string({ required_error: "Email is required" })
    .trim()
    .email({ message: "Invalid email address" })
    .min(3, { message: "Email must be atleast of 3 characters" })
    .max(255, { message: "Email must not be more than 255 characters" }),
  phone: z
    .number({ required_error: "Phone is required" })
    .trim()
    .min(10, { message: "Phone must be atleast 10 characters" })
    .max(20, { message: "Phone must not be more than 20 characters" }),
  password: z
    .string({ required_error: "Password is required" })
    .min(7, { message: "Password must have atleast 7 characters" })
    .max(1024, { message: "Password can't be greater tha  1024 characters" }),
});

export default registerSchema;
