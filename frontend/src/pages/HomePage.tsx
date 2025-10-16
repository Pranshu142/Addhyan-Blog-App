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

      <main className="bg-gray-500/10">
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
        <section id="features-section-2" className="relative py-20">
          <div className="px-4 py-5 contianer mx-auto">
            <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
              <h2 className="text-4xl md:text-5xl">
                Everything You Need to Write Better
              </h2>
              <p className="text-xl text-zinc-500">
                Powerful features designed to help you stay consistent and
                engaged
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <div className="px-5 py-3 border-2 border-zinc-500 rounded-2xl flex flex-col gap-4 items-start">
                <div
                  className="bg-gradient-to-b shadow-zinc-800 shadow-md from-zinc-600 
                via-zinc-800 to-zinc-900 px-3 py-4 flex gap-2 rounded-xl items-center justify-center"
                >
                  <Flame
                    size={32}
                    color="#cf673a"
                    strokeWidth={3.5}
                    absoluteStrokeWidth
                  />
                  <span className="text-white font-bold text-2xl">7</span>
                </div>
                <div className="mt-5 space-y-4">
                  <h2 className="text-3xl font-medium t">
                    Daily Streak System
                  </h2>
                  <p className="text-lg text-gray-500 font-normal tracking-wide">
                    Build consistency with our gamified streak tracking. Watch
                    your flame grow as you engage daily and reach new
                    milestones.
                  </p>
                </div>
                <div className="flex flex-wrap mt-5 gap-4 items-center justify-start text-sm font-medium mb-5 ">
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>7 days → Yellow</h3>
                  </div>
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>14 days → Orange</h3>
                  </div>
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>30 days → Purpl</h3>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 border-2 border-zinc-500 rounded-2xl flex flex-col gap-4 items-start">
                <div
                  className="bg-gradient-to-b shadow-zinc-800 shadow-md from-zinc-600 
                via-zinc-800 to-zinc-900 px-3 py-4 flex gap-2 rounded-xl items-center justify-center"
                >
                  <Flame
                    size={32}
                    color="#cf673a"
                    strokeWidth={3.5}
                    absoluteStrokeWidth
                  />
                  <span className="text-white font-bold text-2xl">7</span>
                </div>
                <div className="mt-5 space-y-4">
                  <h2 className="text-3xl font-medium t">
                    Daily Streak System
                  </h2>
                  <p className="text-lg text-gray-500 font-normal tracking-wide">
                    Build consistency with our gamified streak tracking. Watch
                    your flame grow as you engage daily and reach new
                    milestones.
                  </p>
                </div>
                <div className="flex flex-wrap mt-5 gap-4 items-center justify-start text-sm font-medium mb-5 ">
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>7 days → Yellow</h3>
                  </div>
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>14 days → Orange</h3>
                  </div>
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>30 days → Purpl</h3>
                  </div>
                </div>
              </div>
              <div className="px-5 py-3 border-2 border-zinc-500 rounded-2xl flex flex-col gap-4 items-start">
                <div
                  className="bg-gradient-to-b shadow-zinc-800 shadow-md from-zinc-600 
                via-zinc-800 to-zinc-900 px-3 py-4 flex gap-2 rounded-xl items-center justify-center"
                >
                  <Flame
                    size={32}
                    color="#cf673a"
                    strokeWidth={3.5}
                    absoluteStrokeWidth
                  />
                  <span className="text-white font-bold text-2xl">7</span>
                </div>
                <div className="mt-5 space-y-4">
                  <h2 className="text-3xl font-medium t">
                    Daily Streak System
                  </h2>
                  <p className="text-lg text-gray-500 font-normal tracking-wide">
                    Build consistency with our gamified streak tracking. Watch
                    your flame grow as you engage daily and reach new
                    milestones.
                  </p>
                </div>
                <div className="flex flex-wrap mt-5 gap-4 items-center justify-start text-sm font-medium mb-5 ">
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>7 days → Yellow</h3>
                  </div>
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>14 days → Orange</h3>
                  </div>
                  <div className="px-2 py-1 bg-zinc-300 rounded-xl ">
                    <h3>30 days → Purpl</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="working-section-3" className="relative py-20">
          <div className="px-4 py-5 contianer mx-auto">
            <div className="mb-5 text-center space-y-5">
              <h2 className="text-5xl font-medium ">How it Works</h2>
              <p className="tracking-wider text-xl  text-gray-500">
                Start writing and building your streak in three simple steps
              </p>
            </div>
            <div className="flex items-center flex-col justify-center gap-8 mt-5 pt-10 text-center">
              <div className="rounded-full  flex justify-center items-center bg-gradient-to-br from-blue-500  to-purple-600 w-16 h-16">
                <h2 className="text-3xl font-bold text-white ">1</h2>
              </div>
              <div className="">
                <h1 className="tracking-wider text-xl font-semibold text-gray-800">
                  Create Your Account
                </h1>
              </div>
              <div>
                <p className="tracking-wider text-xl  text-gray-700">
                  Sign up in seconds and customize your profile
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col justify-center gap-8 mt-5 pt-10 text-center">
              <div className="rounded-full  flex justify-center items-center bg-gradient-to-br from-pink-500  to-orange-600 w-16 h-16">
                <h2 className="text-3xl font-bold text-white ">2</h2>
              </div>
              <div className="">
                <h1 className="tracking-wider text-xl font-semibold  text-gray-800">
                  Write & Share
                </h1>
              </div>
              <div>
                <p className="tracking-wider text-xl  text-gray-700">
                  Publish your thoughts and discover amazing content
                </p>
              </div>
            </div>
            <div className="flex items-center flex-col justify-center gap-8 mt-5 pt-10 text-center">
              <div className="rounded-full  flex justify-center items-center bg-gradient-to-br from-purple-500  to-pink-600 w-16 h-16">
                <h2 className="text-3xl font-bold text-white ">3</h2>
              </div>
              <div className="">
                <h1 className="tracking-wider text-xl font-semibold text-gray-800">
                  Build Your streak
                </h1>
              </div>
              <div>
                <p className="tracking-wider text-xl  text-gray-700">
                  Stay consistent and watch your streak flame grow
                </p>
              </div>
            </div>
          </div>
        </section>
        <section id="start-card-section-3" className="relative py-20">
          <div className="px-4 py-5 contianer mx-auto0">
            <div className=" flex flex-col items-center justify-center bg-gradient-to-br from-blue-500 via-pink-500 to-purple-500 px-3 py-2 rounded-2xl text-center space-y-5 pb-10 pt-16">
              <div className="mb-5 text-center space-y-5">
                <h2 className="text-5xl font-medium text-zinc-200 ">
                  Ready to Start Your Journey?
                </h2>
                <p className="tracking-wider text-xl  text-gray-300">
                  Join thousands of writers building daily habits and sharing
                  their stories
                </p>
              </div>
              <div>
                <button className=" mb-5 gap-4 items-center font-bold  shadow-md bg-zinc-100 text-purple-600 flex text-lg  px-3 py-2 rounded-2xl  shadow-gray-700 ">
                  Get Started Free
                  <ArrowRight size={28} className="animate-pulse" />
                </button>
              </div>
              <div>
                <p className="tracking-wider text-xl  text-gray-300">
                  No credit card required • Start writing in minutes
                </p>
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
