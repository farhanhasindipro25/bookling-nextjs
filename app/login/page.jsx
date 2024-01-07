"use client";
import TextInputField from "@/components/forms/TextInputField";
import { useFormik } from "formik";
import { useRouter } from "next/navigation";
import { object, string } from "yup";
import toast from "react-hot-toast";
import { useAuthContext } from "@/context-providers/AuthProvider";
import loginUser from "@/services/loginUser";
import { InformationCircleIcon } from "@heroicons/react/24/outline";

const yupSchema = object({
  email: string().email("Email must be valid").required("Email is required!"),
  password: string()
    .min(6, "Password must be minimum 6 characters")
    .required("Password is required!"),
});

export default function LoginPage() {
  const router = useRouter();
  const { login } = useAuthContext();

  const formik = useFormik({
    initialValues: {
      email: "hello@ongshak.com",
      password: "assignment@ongshak",
    },
    validationSchema: yupSchema,
    onSubmit: async (values) => {
      try {
        const userData = await loginUser(values.email, values.password);
        login(userData);
        localStorage.setItem("token", userData.token);
        router.push("/books");
        toast.success("Login successful!");
      } catch (error) {
        toast.error("Could not login!");
        console.error("Could not login", error);
      }
    },
  });

  return (
    <div className="max-w-xl mx-auto px-6">
      <div className="space-y-8 bg-white rounded-lg p-10 shadow-md mt-16 lg:mt-0">
        <h2 className="text-lg font-semibold text-center text-blue-950">
          Login to your account
        </h2>
        <form className="space-y-4" onSubmit={formik.handleSubmit}>
          <div className="space-y-2">
            <TextInputField
              name="email"
              id="email"
              placeholder="name@example.com"
              label="Email"
              onChange={(e) => formik.setFieldValue("email", e.target.value)}
              onBlur={formik.handleBlur}
              value={formik.values.email}
            />
            {formik.touched.email && formik.errors.email && (
              <div className="text-red-600 p-2 rounded-lg font-medium flex gap-2 items-center text-sm bg-red-100">
                <InformationCircleIcon className="w-5 h-5 text-red-500" />
                {formik.errors.email}
              </div>
            )}
          </div>
          <div className="space-y-2">
            <TextInputField
              name="password"
              id="password"
              type="password"
              placeholder="Enter your password"
              label="Password"
              onChange={(e) => formik.setFieldValue("password", e.target.value)}
              onBlur={formik.handleBlur}
              value={formik.values.password}
            />
            {formik.touched.password && formik.errors.password && (
              <div className="text-red-600 p-2 rounded-lg font-medium flex gap-2 items-center text-sm bg-red-100">
                <InformationCircleIcon className="w-5 h-5 text-red-500" />
                {formik.errors.password}
              </div>
            )}
          </div>
          <div className="flex w-full">
            <button
              type="submit"
              className="bg-blue-600 text-white p-4 w-full rounded-md"
            >
              {formik.isSubmitting ? "Logging in..." : "Login"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
