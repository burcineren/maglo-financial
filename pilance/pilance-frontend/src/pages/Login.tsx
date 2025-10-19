import { useState } from "react";
import { Calendar, Users, Trophy, ArrowRight, Sparkles } from "lucide-react";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      console.log("Logging in with:", { email, password });
      await new Promise((resolve) => setTimeout(resolve, 1000));
      // navigate('/dashboard')
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Modern Branding */}
      <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 p-12 flex-col justify-between relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnptLTEyIDBjMy4zMTQgMCA2IDIuNjg2IDYgNnMtMi42ODYgNi02IDYtNi0yLjY4Ni02LTYgMi42ODYtNiA2LTZ6bTEyIDEyYzMuMzE0IDAgNiAyLjY4NiA2IDZzLTIuNjg2IDYtNiA2LTYtMi42ODYtNi02IDIuNjg2LTYgNi02em0tMTIgMGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iLjA1Ii8+PC9nPjwvc3ZnPg==')] opacity-20"></div>
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-white/95 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-7 h-7 text-indigo-600" />
            </div>
            <h1 className="text-4xl font-bold text-white tracking-tight">
              Pilance
            </h1>
          </div>
        </div>

        <div className="relative z-10 space-y-10">
          <div className="space-y-4">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2">
              <Sparkles className="w-4 h-4 text-yellow-300" />
              <span className="text-white text-sm font-medium">
                Yeni Nesil Spor Yönetimi
              </span>
            </div>
            <h2 className="text-5xl font-bold text-white leading-tight">
              Takımınızı <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-200 to-pink-200">
                Bir Adım Öteye
              </span>
            </h2>
            <p className="text-white/80 text-lg max-w-md leading-relaxed">
              Modern araçlarla spor gruplarınızı yönetin, rezervasyonlarınızı
              planlayın ve performansınızı artırın.
            </p>
          </div>

          <div className="grid gap-5">
            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Calendar className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Akıllı Rezervasyon
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  Otomatik saha rezervasyonu ve hatırlatmalar
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-purple-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Users className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  Takım Koordinasyonu
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  Oyuncu yönetimi ve anlık bildirimler
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-4 bg-white/10 backdrop-blur-md rounded-2xl p-5 hover:bg-white/15 transition-all duration-300">
              <div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-pink-600 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg">
                <Trophy className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="text-white font-semibold text-lg">
                  İstatistik Takibi
                </h3>
                <p className="text-white/70 text-sm mt-1">
                  Detaylı performans analizi ve raporlama
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side - Modern Login Form */}
      <div className="flex items-center justify-center p-8 bg-gradient-to-br from-gray-50 to-gray-100/50">
        <div className="w-full max-w-md">
          {/* Mobile Logo */}
          <div className="lg:hidden flex items-center justify-center space-x-3 mb-10">
            <div className="w-12 h-12 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg">
              <Calendar className="w-7 h-7 text-white" />
            </div>
            <h1 className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Pilance
            </h1>
          </div>

          <div className="bg-white rounded-3xl shadow-2xl shadow-gray-200/50 border border-gray-100 overflow-hidden">
            <div className="p-8 space-y-6">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold text-gray-900">
                  Tekrar Hoş Geldiniz
                </h2>
                <p className="text-gray-500">
                  Hesabınıza giriş yaparak devam edin
                </p>
              </div>

              <div className="space-y-4">
                <div className="space-y-2">
                  <label
                    htmlFor="email"
                    className="text-sm font-semibold text-gray-700"
                  >
                    E-posta Adresi
                  </label>
                  <input
                    id="email"
                    type="email"
                    placeholder="ornek@email.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-900 placeholder:text-gray-400"
                  />
                </div>

                <div className="space-y-2">
                  <div className="flex items-center justify-between">
                    <label
                      htmlFor="password"
                      className="text-sm font-semibold text-gray-700"
                    >
                      Şifre
                    </label>
                    <button
                      type="button"
                      className="text-sm text-indigo-600 hover:text-indigo-700 font-semibold transition-colors"
                    >
                      Şifremi Unuttum
                    </button>
                  </div>
                  <input
                    id="password"
                    type="password"
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="w-full h-12 px-4 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-900"
                  />
                </div>

                <div className="flex items-center space-x-2 pt-1">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500 focus:ring-2"
                  />
                  <label
                    htmlFor="remember"
                    className="text-sm text-gray-600 cursor-pointer"
                  >
                    Beni hatırla
                  </label>
                </div>
              </div>

              <div className="space-y-4 pt-2">
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isLoading}
                  className="w-full h-12 bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white font-semibold rounded-xl shadow-lg shadow-indigo-500/30 hover:shadow-xl hover:shadow-indigo-500/40 transition-all duration-300 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed group"
                >
                  <span>{isLoading ? "Giriş Yapılıyor..." : "Giriş Yap"}</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>

                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-sm">
                    <span className="px-4 bg-white text-gray-500">veya</span>
                  </div>
                </div>

                <button
                  type="button"
                  className="w-full h-12 bg-white border-2 border-gray-200 hover:border-gray-300 hover:bg-gray-50 text-gray-700 font-semibold rounded-xl transition-all duration-300 flex items-center justify-center space-x-3"
                >
                  <div className="w-5 h-5 bg-gradient-to-br from-red-500 via-yellow-500 to-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs font-bold">G</span>
                  </div>
                  <span>Google ile Devam Et</span>
                </button>
              </div>

              <div className="text-center pt-2">
                <span className="text-gray-600 text-sm">
                  Hesabınız yok mu?{" "}
                </span>
                <button
                  type="button"
                  className="text-indigo-600 hover:text-indigo-700 font-semibold text-sm transition-colors"
                >
                  Kayıt Olun
                </button>
              </div>
            </div>
          </div>

          <p className="text-center text-xs text-gray-500 mt-6 px-4">
            Devam ederek{" "}
            <button className="underline hover:text-gray-700 transition-colors">
              Kullanım Koşullarını
            </button>{" "}
            ve{" "}
            <button className="underline hover:text-gray-700 transition-colors">
              Gizlilik Politikasını
            </button>{" "}
            kabul etmiş olursunuz
          </p>
        </div>
      </div>
    </div>
  );
}

export default Login;
