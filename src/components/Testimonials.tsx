import { Quote, Star } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Testimonials() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const testimonials = [
    {
      quote: "Syncora X transformed our operations with their AI solutions. The level of innovation and support exceeded all expectations. Our efficiency increased by 300% in just six months.",
      author: "Sarah Mitchell",
      role: "CEO, TechVision Global",
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      quote: "Working with Syncora X was a game-changer. Their SaaS platform scaled seamlessly with our growth, and their team's expertise in cloud architecture is unmatched.",
      author: "Ahmed Al-Rashid",
      role: "CTO, Dubai Innovations",
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      quote: "The digital marketing strategies and SEO optimization from Syncora X delivered phenomenal results. Our online presence grew exponentially, driving real business impact.",
      author: "Emily Chen",
      role: "Marketing Director, GrowthMax",
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
              Client Testimonials
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Hear what our partners say about working with Syncora X
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className={`group relative p-8 rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-gray-700 hover:-translate-y-2 hover:shadow-[0_20px_50px_rgba(0,0,0,0.5)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Quote icon */}
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${testimonial.gradient} p-3 mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <Quote className="w-full h-full text-white" />
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-500 text-yellow-500" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-300 leading-relaxed mb-8 italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${testimonial.gradient} flex items-center justify-center text-white font-semibold`}>
                  {testimonial.author.split(' ').map(n => n[0]).join('')}
                </div>
                <div>
                  <div className="font-semibold text-white">{testimonial.author}</div>
                  <div className="text-sm text-gray-400">{testimonial.role}</div>
                </div>
              </div>

              {/* Glow effect */}
              <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${testimonial.gradient} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
