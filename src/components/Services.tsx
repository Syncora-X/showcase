import { Brain, Cloud, Smartphone, TrendingUp, Bot } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Services() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const services = [
    {
      icon: Brain,
      title: 'AI & Automation Systems',
      description: 'Intelligent automation and machine learning solutions that optimize operations and unlock new possibilities.',
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: Cloud,
      title: 'SaaS Platforms & Cloud Solutions',
      description: 'Scalable, secure cloud infrastructure and Software-as-a-Service platforms built for the modern enterprise.',
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: Smartphone,
      title: 'Web & Mobile App Development',
      description: 'Cross-platform applications with stunning interfaces and seamless user experiences across all devices.',
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: TrendingUp,
      title: 'SEO & Digital Marketing',
      description: 'Data-driven marketing strategies and search optimization that amplify your brand and drive growth.',
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Bot,
      title: 'Smart Assistant & Productivity Tools',
      description: 'AI-powered assistants and workflow automation tools that enhance productivity and streamline operations.',
      gradient: 'from-emerald-500 to-teal-500',
    },
  ];

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              Core Services
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Comprehensive technology solutions tailored to your business needs
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-gray-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              <div className={`relative w-16 h-16 rounded-xl bg-gradient-to-br ${service.gradient} p-4 mb-6 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                <service.icon className="w-full h-full text-white" />
              </div>

              <h3 className="relative text-xl font-semibold mb-4 text-white">
                {service.title}
              </h3>

              <p className="relative text-gray-400 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Learn more link */}
              <a href="#contact" className="relative inline-flex items-center gap-1 text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors group/link">
                <span>Learn More</span>
                <span className="group-hover/link:translate-x-1 transition-transform">→</span>
              </a>

              {/* Animated corner accent */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-20 blur-2xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
