import { useState, type FormEvent, useEffect } from "react";
import { z } from "zod";
import { useFormValidation } from "../../../shared/hooks";
import { FormInput } from "../components/form-input";
import { SubmitButton } from "../components/submit-button";
import { GoogleSignInButton } from "../components/google-sign-in-button";
import signBgImage from "../../../assets/sign-bg.png";
import logoImage from "../../../assets/logo.png";
import { Link, useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/useAuthStore";

const signupSchema = z.object({
  fullName: z
    .string()
    .min(1, "Ad Soyad gereklidir")
    .min(3, "Ad Soyad en az 3 karakter olmalıdır")
    .max(50, "Ad Soyad en fazla 50 karakter olabilir"),
  email: z
    .string()
    .min(1, "E-posta gereklidir")
    .email("Geçerli bir e-posta adresi girin"),
  password: z
    .string()
    .min(1, "Şifre gereklidir")
    .min(6, "Şifre en az 6 karakter olmalıdır")
    .max(100, "Şifre en fazla 100 karakter olabilir"),
});

type SignupFormData = z.infer<typeof signupSchema>;

export function SignUp() {
  const navigate = useNavigate();
  const { signIn, loginWithGoogle, isLoading, isAuthenticated } =
    useAuthStore();

  const [formData, setFormData] = useState<SignupFormData>({
    fullName: "",
    email: "",
    password: "",
  });

  const { errors, validateForm, clearError } = useFormValidation(signupSchema);

  // Redirect if already authenticated
  useEffect(() => {
    if (isAuthenticated) {
      navigate("/", { replace: true });
    }
  }, [isAuthenticated, navigate]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    if (errors[name]) {
      clearError(name);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm(formData)) {
      return;
    }

    try {
      await signIn(formData.fullName, formData.email, formData.password);
      navigate("/");
    } catch (error) {
      console.error("Sign up failed:", error);
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      await loginWithGoogle();
      navigate("/dashboard");
    } catch (error) {
      console.error("Google sign up failed:", error);
    }
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Form */}
      <div className="flex flex-1 items-center justify-center p-8 lg:p-12">
        <div className="w-full max-w-[400px]">
          {/* Logo */}
          <div className="mb-12 flex items-center gap-2">
            <div className="w-8 h-8 bg-gray-900 rounded-md flex items-center justify-center overflow-hidden">
              <img
                src={logoImage}
                alt="Maglo Logo"
                className="w-full h-full object-contain"
              />
            </div>
            <h1 className="text-xl font-bold text-gray-900">Maglo.</h1>
          </div>

          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              Create New Account
            </h2>
            <p className="text-gray-600 text-sm">
              Enter your details to get started
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Full Name"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              autoComplete="name"
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="example@email.com"
              value={formData.email}
              onChange={handleInputChange}
              error={errors.email}
              autoComplete="email"
            />

            <FormInput
              label="Password"
              name="password"
              type="password"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleInputChange}
              error={errors.password}
              autoComplete="new-password"
            />

            <SubmitButton
              type="submit"
              isLoading={isLoading}
              className="w-full mt-6"
            >
              Create Account
            </SubmitButton>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300" />
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">or</span>
            </div>
          </div>

          {/* Google Sign In */}
          <GoogleSignInButton
            onClick={handleGoogleSignIn}
            disabled={isLoading}
            isLoading={isLoading}
            className="w-full"
          >
            Sign up with Google
          </GoogleSignInButton>

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <Link
              to="/login"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              Sign in
            </Link>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-center lg:bg-gray-50 ">
        <img
          src={signBgImage}
          alt="Authentication"
          className="h-full max-h-screen w-full max-w-2xl "
        />
      </div>
    </div>
  );
}
