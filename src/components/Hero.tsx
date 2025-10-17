import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState } from 'react';

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 via-violet-600/5 to-transparent" />

      {/* Animated grid background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

      <div
        className={`relative max-w-5xl mx-auto text-center transition-all duration-1000 transform ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      >
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full bg-gradient-to-r from-blue-500/10 to-violet-500/10 border border-blue-500/20 backdrop-blur-sm">
          <Sparkles className="w-4 h-4 text-blue-400" />
          <span className="text-sm font-medium bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
            AI-Powered Innovation
          </span>
        </div>

        {/* Main heading */}
        <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          <span className="bg-gradient-to-r from-white via-blue-100 to-violet-100 bg-clip-text text-transparent">
            Empowering the Future
          </span>
          <br />
          <span className="bg-gradient-to-r from-blue-400 via-violet-400 to-blue-400 bg-clip-text text-transparent">
            with Intelligent Technology
          </span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
          AI-driven solutions, scalable SaaS, and digital innovations for tomorrow's world
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-14 justify-center items-center">
          <a href="#contact" className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105">
            <span className="relative z-10 flex items-center gap-2">
              Get Started
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </a>

          <a href="#services" className="px-8 py-4 rounded-full font-semibold text-white border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Explore Solutions
          </a>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 rounded-full border-2 border-gray-700 flex items-start justify-center p-2">
            <div className="w-1.5 h-3 bg-gradient-to-b from-blue-400 to-violet-400 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  );
}
