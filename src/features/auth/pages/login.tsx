import { useState, type FormEvent, useEffect } from "react";
import { z } from "zod";
import { useFormValidation } from "../../../shared/hooks";
import { FormInput } from "../components/form-input";
import { SubmitButton } from "../components/submit-button";
import { GoogleSignInButton } from "../components/google-sign-in-button";
import { useNavigate, Link } from "react-router-dom";
import logoImage from "../../../assets/logo.png";
import signBgImage from "../../../assets/sign-bg.png";
// Zod validation schema
const loginSchema = z.object({
  email: z
    .string()
    .min(1, "E-posta gereklidir")
    .email("Geçerli bir e-posta adresi girin"),
  password: z
    .string()
    .min(1, "Şifre gereklidir")
    .min(6, "Şifre en az 6 karakter olmalıdır"),
});

type LoginFormData = z.infer<typeof loginSchema>;

export function Login() {
  const [formData, setFormData] = useState<LoginFormData>({
    email: "",
    password: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [mounted, setMounted] = useState(false);
  const navigate = useNavigate();

  const { errors, validateForm, clearError } = useFormValidation(loginSchema);

  useEffect(() => {
    setMounted(true);
  }, []);

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

    setIsLoading(true);

    setTimeout(() => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: formData.email,
          isGoogleSignIn: false,
          lastLogin: new Date().toISOString(),
        })
      );

      setIsLoading(false);
      navigate("/dashboard");
    }, 1500);
  };

  const handleGoogleSignIn = () => {
    setIsLoading(true);
    setTimeout(() => {
      localStorage.setItem(
        "user",
        JSON.stringify({
          email: "google.user@example.com",
          isGoogleSignIn: true,
          lastLogin: new Date().toISOString(),
        })
      );

      setIsLoading(false);
      navigate("/dashboard");
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
              Welcome back
            </h2>
            <p className="text-gray-600 text-sm">
              Please enter your credentials to sign in
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <FormInput
              label="Email"
              name="email"
              type="email"
              placeholder="your@email.com"
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
              autoComplete="current-password"
            />

            <SubmitButton isLoading={isLoading} className="mt-2">
              Sign In
            </SubmitButton>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 my-6">
            <div className="flex-1 h-px bg-gray-200" />
            <div className="flex-1 h-px bg-gray-200" />
          </div>

          {/* Google Sign In */}
          <GoogleSignInButton onClick={handleGoogleSignIn} />

          {/* Sign Up Link */}
          <p className="text-center text-sm text-gray-600 mt-6">
            Don't have an account?{" "}
            <Link
              to="/login"
              className="text-gray-900 font-semibold hover:underline"
            >
              Sign up
            </Link>
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
        <div className="w-4/5 max-w-2xl">
          <img
            src={signBgImage}
            alt="Authentication"
            className="rounded-2xl shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
}
