"use client";
import TextInputField from "@/components/forms/TextInputField";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { object, string } from "yup";
import toast from "react-hot-toast";
import { useAuth } from "@/context-providers/AuthProvider";

const yupSchema = object({
  email: string().email("Email must be valid").required("Email is required!"),
  password: string()
    .min(6, "Password must be minimum 6 characters")
    .required("Password is required!"),
});

export default function LoginPage() {
  const { setUser } = useAuth();
  const router = useRouter();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yupSchema,

    onSubmit: async (values, { setSubmitting }) => {
      setSubmitting(true);

      try {
        const userData = await loginUser(values);
        setUser(userData);
        toast.success("Login successful");
        router.push("/books");
      } catch (error) {
        console.error("Login failed", error);
        toast.error("Could not login!");
      } finally {
        setSubmitting(false);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="space-y-8 bg-white rounded-lg p-10 shadow-md">
        <h2 className="text-lg font-semibold text-center text-blue-950">
          Login to your account
        </h2>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <TextInputField
            name="email"
            id="email"
            placeholder="name@example.com"
            label="Email"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.email}
          />
          <TextInputField
            name="password"
            id="password"
            type="password"
            placeholder="Enter your password"
            label="Password"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.password}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white p-4"
            disabled={formik.isSubmitting}
          >
            {formik.isSubmitting ? "Logging in..." : "Login"}
          </button>
        </form>
      </div>
    </div>
  );
}
