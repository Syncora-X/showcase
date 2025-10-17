import { Mail, Phone, Calendar, Linkedin, Twitter, Globe } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function ContactCTA() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div
          className={`relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-900/40 via-violet-900/40 to-purple-900/40 border border-gray-800 backdrop-blur-sm p-12 sm:p-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          {/* Background effects */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-violet-500/10" />
          <div className="absolute top-0 right-0 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl" />

          {/* Content */}
          <div className="relative text-center">
            <h2 className="text-4xl sm:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
                Let's Build the Future
              </span>
              <br />
              <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
                Together
              </span>
            </h2>

            <p className="text-lg text-gray-300 mb-12 max-w-2xl mx-auto">
              Collaborate with Syncora X to turn ideas into intelligent solutions.
              Let's create something extraordinary.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <button className="group relative px-8 py-4 bg-gradient-to-r from-blue-600 to-violet-600 rounded-full font-semibold text-white overflow-hidden transition-all duration-300 hover:shadow-[0_0_40px_rgba(59,130,246,0.5)] hover:scale-105">
                <span className="relative z-10 flex items-center gap-2">
                  <Mail className="w-5 h-5" />
                  Contact Us
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-violet-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <button className="group px-8 py-4 rounded-full font-semibold text-white border-2 border-gray-700 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
                <span className="flex items-center gap-2">
                  <Calendar className="w-5 h-5" />
                  Schedule a Call
                </span>
              </button>
            </div>

            {/* Contact Info */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-8">
              <a
                href="mailto:hello@syncorax.com"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Mail className="w-5 h-5" />
                <span>hello@syncorax.com</span>
              </a>
              <a
                href="tel:+923190799711"
                className="flex items-center gap-2 text-gray-300 hover:text-blue-400 transition-colors"
              >
                <Phone className="w-5 h-5" />
                <span>+923190799711</span>
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-4 justify-center">
              {[
                { icon: Linkedin, href: '#', label: 'LinkedIn' },
                { icon: Twitter, href: '#', label: 'Twitter' },
                { icon: Globe, href: '#', label: 'Website' },
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  aria-label={social.label}
                  className="w-12 h-12 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300 hover:scale-110"
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
