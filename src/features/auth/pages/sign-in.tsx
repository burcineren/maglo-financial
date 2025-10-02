import { useState, type FormEvent, useEffect } from "react";
import { z } from "zod";
import { useFormValidation } from "../../../shared/hooks";
import { FormInput } from "../components/form-input";
import { SubmitButton } from "../components/submit-button";
import { GoogleSignInButton } from "../components/google-sign-in-button";
import signBgImage from "../../../assets/sign-bg.png";
import logoImage from "../../../assets/logo.png";

interface SignInProps {
  onSignIn: () => void;
}

// Zod validation schema
const signInSchema = z.object({
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

type SignInFormData = z.infer<typeof signInSchema>;

export function SignIn({ onSignIn }: SignInProps) {
  const [formData, setFormData] = useState<SignInFormData>({
    fullName: "",
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);

  const { errors, validateForm, clearError } = useFormValidation(signInSchema);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      clearError(name);
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    // Validate form
    if (!validateForm(formData)) {
      return;
    }

    // Simulate API call with loading state
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      onSignIn();
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    // Simulate Google sign in
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      onSignIn();
    }, 1000);
  };

  return (
    <div className="flex min-h-screen w-full bg-white">
      {/* Left Side - Form */}
      <div
        className={`
          flex flex-1 items-center justify-center p-8 lg:p-12
          transition-opacity duration-700
          ${mounted ? "opacity-100" : "opacity-0"}
        `}
      >
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
              Create new account
            </h2>
            <p className="text-gray-600 text-sm">
              Welcome back! Please enter your details
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FormInput
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Mahfuzul Nabil"
              value={formData.fullName}
              onChange={handleInputChange}
              error={errors.fullName}
              autoComplete="name"
            />

            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="example@gmail.com"
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

            <SubmitButton isLoading={isLoading} className="mt-2">
              Create Account
            </SubmitButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Sign In */}
          <GoogleSignInButton onClick={handleGoogleSignIn} />

          {/* Sign In Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Already have an account?{" "}
            <button
              type="button"
              className="text-gray-900 font-semibold hover:underline"
            >
              Sign in
            </button>
          </p>
        </div>
      </div>

      {/* Right Side - Image */}
      <div
        className={`
          hidden lg:flex flex-1 items-center justify-center 
          bg-gradient-to-br from-gray-50 to-gray-100
          transition-all duration-700 delay-200
          ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}
        `}
      >
        <div className="relative w-full h-full flex items-center justify-center">
          <img
            src={signBgImage}
            alt="Sign in illustration"
            className="max-w-full max-h-full object-contain animate-fade-in"
          />
        </div>
      </div>
    </div>
  );
}
