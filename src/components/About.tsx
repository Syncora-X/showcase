import { Target, Eye, Zap } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function About() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  return (
    <section ref={ref} className="relative py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <div
          className={`text-center mb-16 transition-all duration-1000 transform ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-bold mb-6">
            <span className="bg-gradient-to-r from-blue-400 to-violet-400 bg-clip-text text-transparent">
              About Syncora X
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto leading-relaxed">
            Based in Dubai, Syncora X is a global technology company at the forefront of digital innovation.
            We harness the power of artificial intelligence, cloud computing, and cutting-edge development
            practices to deliver transformative solutions that empower businesses to thrive in the digital age.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Target,
              title: 'Our Mission',
              description: 'To revolutionize industries through intelligent technology, making advanced AI and digital solutions accessible to businesses worldwide.',
              gradient: 'from-blue-500 to-cyan-500',
            },
            {
              icon: Eye,
              title: 'Our Vision',
              description: 'To be the global leader in AI-driven innovation, shaping a future where technology seamlessly enhances human potential.',
              gradient: 'from-violet-500 to-purple-500',
            },
            {
              icon: Zap,
              title: 'Our Impact',
              description: 'Delivering scalable, secure, and intelligent solutions that drive measurable results and sustainable growth for our partners.',
              gradient: 'from-pink-500 to-rose-500',
            },
          ].map((item, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/50 to-gray-800/30 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-gray-700 hover:shadow-[0_0_30px_rgba(59,130,246,0.15)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${item.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <item.icon className="w-full h-full text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-4 text-white">{item.title}</h3>
              <p className="text-gray-400 leading-relaxed">{item.description}</p>
            </div>
          ))}
        </div>

        <div
          className={`text-center mt-12 transition-all duration-1000 ${
            isVisible ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ transitionDelay: '600ms' }}
        >
          <a href="#contact" className="inline-block px-8 py-3 rounded-full font-semibold text-white border-2 border-gray-800 hover:border-blue-500 transition-all duration-300 hover:bg-blue-500/10 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]">
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
