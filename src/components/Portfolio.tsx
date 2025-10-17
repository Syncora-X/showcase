import { ExternalLink, MessageSquare, ShoppingCart, LineChart, Sparkles, Users, Package } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Portfolio() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const projects = [
    {
      icon: MessageSquare,
      title: 'AI Chat System',
      description: 'Intelligent conversational AI platform with natural language understanding and multi-language support.',
      tags: ['AI', 'NLP', 'SaaS'],
      gradient: 'from-blue-500 to-cyan-500',
    },
    {
      icon: ShoppingCart,
      title: 'E-commerce SaaS Dashboard',
      description: 'Comprehensive analytics and management platform for multi-vendor e-commerce operations.',
      tags: ['Dashboard', 'Analytics', 'Cloud'],
      gradient: 'from-violet-500 to-purple-500',
    },
    {
      icon: LineChart,
      title: 'Smart Analytics Engine',
      description: 'Real-time business intelligence platform with predictive analytics and automated insights.',
      tags: ['AI', 'Analytics', 'BI'],
      gradient: 'from-emerald-500 to-teal-500',
    },
    {
      icon: Sparkles,
      title: 'AI Content Generator',
      description: 'Advanced AI-powered content creation tool for marketing teams and content creators.',
      tags: ['AI', 'Content', 'Marketing'],
      gradient: 'from-pink-500 to-rose-500',
    },
    {
      icon: Users,
      title: 'HR Management Portal',
      description: 'Complete workforce management solution with automated onboarding and performance tracking.',
      tags: ['SaaS', 'HR', 'Cloud'],
      gradient: 'from-orange-500 to-red-500',
    },
    {
      icon: Package,
      title: 'Supply Chain Optimizer',
      description: 'AI-driven logistics and inventory management system for enterprise supply chain operations.',
      tags: ['AI', 'Logistics', 'Enterprise'],
      gradient: 'from-cyan-500 to-blue-500',
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
              Portfolio & Case Studies
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Explore our innovative solutions that have transformed businesses worldwide
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-gray-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Icon section */}
              <div className={`relative p-8 bg-gradient-to-br ${project.gradient} bg-opacity-10`}>
                <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${project.gradient} p-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                  <project.icon className="w-full h-full text-white" />
                </div>
              </div>

              {/* Content */}
              <div className="relative p-8">
                <h3 className="text-xl font-semibold mb-3 text-white group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 leading-relaxed mb-6">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="px-3 py-1 text-sm rounded-full bg-gray-800 text-gray-300 border border-gray-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <button className="flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors group/link">
                  <span className="font-medium">View Details</span>
                  <ExternalLink className="w-4 h-4 group-hover/link:translate-x-1 group-hover/link:-translate-y-1 transition-transform" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
