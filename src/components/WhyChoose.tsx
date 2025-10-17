import { Zap, Rocket, Shield } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';
import { useCounter } from '../hooks/useCounter';

export function WhyChoose() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });
  const projects = useCounter(10, 2000, isVisible);
  const partners = useCounter(50, 2000, isVisible);
  const satisfaction = useCounter(100, 2000, isVisible);

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
              Why Choose Syncora X
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Trusted by global leaders for cutting-edge innovation and exceptional results
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {[
            {
              icon: Zap,
              title: 'AI-Powered Innovation',
              description: 'Leverage cutting-edge artificial intelligence to automate, optimize, and transform your business operations.',
              gradient: 'from-yellow-500 to-orange-500',
            },
            {
              icon: Rocket,
              title: 'Future-Ready Design',
              description: 'Modern, scalable architectures built with tomorrow\'s challenges in mind, ensuring long-term success.',
              gradient: 'from-blue-500 to-violet-500',
            },
            {
              icon: Shield,
              title: 'Scalable, Secure Solutions',
              description: 'Enterprise-grade security and infrastructure that grows with your business, protecting what matters most.',
              gradient: 'from-emerald-500 to-teal-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-gray-700 hover:shadow-[0_0_40px_rgba(59,130,246,0.2)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${item.gradient} p-4 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div
          className={`grid grid-cols-3 gap-8 max-w-4xl mx-auto transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-blue-900/20 to-violet-900/20 border border-blue-500/20 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent mb-2">
              {projects}+
            </div>
            <div className="text-sm sm:text-base text-gray-400">Projects Delivered</div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-violet-900/20 to-purple-900/20 border border-violet-500/20 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent mb-2">
              {partners}+
            </div>
            <div className="text-sm sm:text-base text-gray-400">Global Partners</div>
          </div>

          <div className="text-center p-6 rounded-2xl bg-gradient-to-br from-emerald-900/20 to-teal-900/20 border border-emerald-500/20 backdrop-blur-sm">
            <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent mb-2">
              {satisfaction}%
            </div>
            <div className="text-sm sm:text-base text-gray-400">Client Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
}
