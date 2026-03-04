import React from "react";
import { Geist } from "next/font/google";
import { useRouter } from "next/router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faStar, faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { faApple, } from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

const geist = Geist({ subsets: ["latin"] });

export default function Home() {
  const router = useRouter();
  const [showPassword, setShowPassword] = React.useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    router.push("/dashboard");
  };

  return (
    <div className={`${geist.className} min-h-screen flex bg-[#0D0F14] text-white selection:bg-[#0CC8A8]/30 relative overflow-hidden`}>

      <div
        className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: 'url("/Images/bg-cyber.svg")' }}
      />

      <div className="hidden md:flex w-1/2 relative px-16 py-12 flex-col justify-between z-10">

        <div className="relative z-10">

          <div className="flex items-center gap-2 mb-20">
            <div className="w-5 h-5 bg-[#0CC8A8] rounded-full flex items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full"></div>
            </div>
            <span className="text-xl font-bold tracking-tight">
              aps
            </span>
          </div>

          <div className="space-y-1">
            <h1 className="text-[44px] font-bold leading-[1.1] max-w-lg tracking-tight">
              Expert level Cybersecurity
            </h1>
            <h1 className="text-[44px] font-bold leading-[1.1] max-w-lg tracking-tight">
              in <span className="text-[#0CC8A8]">hours</span> not weeks.
            </h1>
          </div>

          <div className="mt-12 group">
            <p className="text-sm font-semibold text-white/50 mb-7 tracking-wider uppercase">
              What’s included
            </p>

            <ul className="space-y-6 text-white/90 text-[15px]">
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-4 h-4 text-[#0CC8A8]">
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                </div>
                <span className="leading-relaxed">Effortlessly spider and map targets to uncover hidden security flaws</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-4 h-4 text-[#0CC8A8]">
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                </div>
                <span className="leading-relaxed">Deliver high-quality, validated findings in hours, not weeks.</span>
              </li>
              <li className="flex items-start gap-4">
                <div className="mt-1 flex-shrink-0 w-4 h-4 text-[#0CC8A8]">
                  <FontAwesomeIcon icon={faCheck} size="sm" />
                </div>
                <span className="leading-relaxed">Generate professional, enterprise-grade security reports automatically.</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex items-center gap-2 mb-1.5">
            <div className="flex items-center gap-1 text-[#0CC8A8]">
              <FontAwesomeIcon icon={faStar} size="xs" />
            </div>
            <span className="text-sm font-semibold tracking-wide">Trustpilot</span>
          </div>
          <div className="text-[13px] text-white/50">
            Rated <span className="text-white font-semibold">4.5/5.0</span> <span className="ml-1">(100k+ reviews)</span>
          </div>
        </div>
      </div>

      <div className="w-full md:w-1/2 flex items-center justify-center relative bg-transparent px-4 sm:px-6 py-6 sm:py-12 z-10">

        <div className="w-full max-w-md bg-white rounded-[24px] sm:rounded-[32px] overflow-hidden shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] p-6 sm:p-10 md:transform md:translate-x-2">

          <h2 className="text-[28px] sm:text-[36px] font-bold text-center text-[#1A1A1A] tracking-tight">
            Sign up
          </h2>

          <p className="text-[14px] text-center text-gray-500 mt-1.5 font-medium">
            Already have an account?{" "}
            <span className="text-[#0CC8A8] hover:underline underline-offset-4 cursor-pointer font-bold">
              Log in
            </span>
          </p>

          <form onSubmit={handleSubmit} className="mt-9 space-y-4 text-[#1A1A1A]">

            <input
              type="text"
              placeholder="First name*"
              className="w-full border border-gray-100 bg-white rounded-xl px-5 py-3.5 text-[15px] focus:outline-none focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8]/20 transition-all placeholder:text-gray-400"
              required
            />

            <input
              type="text"
              placeholder="Last name*"
              className="w-full border border-gray-100 bg-white rounded-xl px-5 py-3.5 text-[15px] focus:outline-none focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8]/20 transition-all placeholder:text-gray-400"
              required
            />

            <input
              type="email"
              placeholder="Email address*"
              className="w-full border border-gray-100 bg-white rounded-xl px-5 py-3.5 text-[15px] focus:outline-none focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8]/20 transition-all placeholder:text-gray-400"
              required
            />

            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password (8+ characters)*"
                className="w-full border border-gray-100 bg-white rounded-xl px-5 py-3.5 text-[15px] focus:outline-none focus:border-[#0CC8A8] focus:ring-1 focus:ring-[#0CC8A8]/20 transition-all placeholder:text-gray-400"
                required
              />
              <div
                className="absolute right-5 top-1/2 -translate-y-1/2 text-gray-900 cursor-pointer p-1"
                onClick={() => setShowPassword(!showPassword)}
              >
                <FontAwesomeIcon
                  icon={showPassword ? faEye : faEyeSlash}
                  size="xs"
                  className="opacity-80"
                />
              </div>
            </div>

            <div className="flex items-start gap-2.5 pt-1">
              <input type="checkbox" required className="mt-1 w-4 h-4 rounded border-gray-300 text-[#0CC8A8] focus:ring-[#0CC8A8]" />
              <p className="text-[12px] leading-tight text-gray-500 font-medium">
                I agree to Aps's{" "}
                <span className="text-blue-500 font-bold cursor-pointer underline underline-offset-2">Terms & Conditions</span>{" "}
                and acknowledge the{" "}
                <span className="text-blue-500 font-bold cursor-pointer underline underline-offset-2">Privacy Policy</span>
              </p>
            </div>

            <button
              type="submit"
              className="w-full bg-[#0CC8A8]  hover:bg-[#0bb39a] text-white py-4 rounded-full font-bold text-[15px] transition-all shadow-[0_8px_20px_-4px_rgba(12,200,168,0.4)] mt-2"
            >
              Create account
            </button>
          </form>

          <div className="mt-7 flex justify-between gap-3.5">
            <button className="flex-1 bg-black text-white h-14 rounded-[24px] flex items-center justify-center hover:opacity-90 transition-opacity">
              <FontAwesomeIcon icon={faApple} size="lg" />
            </button>
            <button className="flex-1 bg-[#F5F1EE] h-14 rounded-[24px] flex items-center justify-center hover:bg-[#ece7e4] transition-colors">
              <Image src="/Images/google-icon.svg" width={100} height={100} className="w-6 h-6" alt="Google" />
            </button>
            <button className="flex-1 bg-[#4E77E7] text-white h-14 rounded-[24px] flex items-center justify-center hover:opacity-90 transition-opacity">
              <Image src="/Images/meta-icon.svg" width={100} height={100} className="w-8 h-8" alt="Meta" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}