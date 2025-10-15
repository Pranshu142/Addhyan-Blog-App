// import { useNavigate } from "react-router-dom";
// import { motion } from "framer-motion";
import { Sparkles, ArrowRight, Users, BookOpen, Flame } from "lucide-react";

import NavBar from "../components/NavBar";
import Footer from "../components/Footer";

const HomePage: React.FC = () => {
  // const navigate = useNavigate();

  return (
    <div className="min-h-screen font-[Inter]">
      <NavBar />

      <main>
        <section id="hero-section-1" className="relative overflow-hidden  ">
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50   " />

          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-300  rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob" />
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-blue-300  rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000" />
            <div className="absolute top-40 left-1/2 w-80 h-80 bg-pink-300 rounded-full mix-blend-multiply  filter blur-xl opacity-70 animate-blob animation-delay-4000" />
          </div>

          <div className="relative px-4 py-24 max-w-2xl container mx-auto">
            <div className=" text-center  flex flex-col items-center   gap-y-15">
              <div className="px-3 py-2 gap-4 rounded-xl bg-gray-200 flex justify-center">
                <Sparkles size={20} />
                <span className="font-medium tracking-normal">
                  Now with Daily Streak Tracking
                </span>
              </div>
              <div>
                <h1 className="text-5xl  tracking-tight">
                  Share Your Voice,{" "}
                  <span className="bg-gradient-to-tr from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Build Your Streak
                  </span>
                </h1>
              </div>
              <div>
                <p className="text-xl  leading-relaxed">
                  Join a thriving community of writers and readers. Share your
                  thoughts, build daily habits, and engage with content that
                  matters.
                </p>
              </div>
              <div className="flex flex-col  gap-4 justify-center items-center pt-4">
                <button className="gap-4 items-center font-bold  shadow-2xl bg-zinc-300 flex text-lg  px-3 py-2 rounded-2xl ">
                  Get Started Free
                  <ArrowRight size={28} className="animate-pulse" />
                </button>
                <button className="gap-4 items-center font-bold  shadow-2xl  flex text-lg  px-5 py-2 rounded-2xl bg-black text-white ">
                  Learn More
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-8 pt-8 text-sm text-gray-500  justify-center ">
                <div className="flex items-center gap-2  ">
                  <Users size={24} />
                  <span>10K+ Writers</span>
                </div>
                <div className="flex items-center gap-2  ">
                  <BookOpen size={24} />
                  <span>50K+ Articles</span>
                </div>
                <div className="flex items-center gap-2 ">
                  <Flame size={24} />
                  <span>Track Daily Streaks</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <style>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0px, 0px) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
      `}</style>
    </div>
  );
};

export default HomePage;
