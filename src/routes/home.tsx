import { MarqueeImage } from "@/components/marqueeImage";
import hero from "../assets/img/hero.jpg";
import Marquuee from "react-fast-marquee";

export const Home = () => {
  return (
    <div className="flex flex-col items-center text-center px-4 md:px-12 py-10 w-full">
      {/* Heading */}
      <h1 className="text-2xl md:text-4xl font-bold leading-snug">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-800 to-gray-400">
          AI Superpower
        </span>{" "}
        — Unlock your interview game
      </h1>

      {/* Subtext */}
      <p className="mt-3 text-sm md:text-base text-gray-500 max-w-md md:max-w-lg">
        Practice smarter, not harder. Get AI-generated feedback, real-time mock
        sessions, and personalized improvement tips – all in one place.
      </p>

      {/* Stats */}
      <div className="flex justify-center gap-8 mt-6 text-gray-700 text-sm md:text-base">
        <div>
          <span className="font-bold text-lg md:text-xl">250k+</span>
          <div>Offers Cracked</div>
        </div>
        <div>
          <span className="font-bold text-lg md:text-xl">1.2M+</span>
          <div>Sessions Completed</div>
        </div>
      </div>

      {/* Image Section */}
      <div className="mt-6 w-full max-w-6xl rounded-xl overflow-hidden shadow-md px-2">
        <div className="relative w-full h-60 md:h-80 bg-gray-100 flex items-center justify-center rounded-xl">
          <img
            src={hero}
            alt="AI Interview Coach"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>

      <div>
        <Marquuee pauseOnHover>
          <MarqueeImage />
        </Marquuee>
      </div>
      
      <div className="flex flex-col md:flex-row items-center justify-between mt-12 gap-12 w-full max-w-6xl px-4">
        {/* Left Image Section */}
        <div className="w-full md:w-1/2 rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?fit=crop&w=800&q=80" // Replace with your image
            alt="Interview Spark"
            className="w-full h-60 md:h-80 object-cover rounded-xl"
          />
        </div>

        {/* Right Text Section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-4">
          <h2 className="text-2xl md:text-3xl font-bold text-slate-800">
            ✨ Let AI Spark Your Success
          </h2>
          <p className="text-gray-600 text-sm md:text-base">
            Generate instant mock interview questions tailored to your role. Let
            AI guide you step by step to crack your next opportunity.
          </p>
          <a
            href="/generat"
            className="inline-block bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg text-sm md:text-base font-medium shadow hover:shadow-lg transition"
          >
            Let's Interview
          </a>
        </div>
      </div>
    </div>
  );
};
