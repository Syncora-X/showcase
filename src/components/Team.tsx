import { Linkedin, Mail } from 'lucide-react';
import { useIntersectionObserver } from '../hooks/useIntersectionObserver';

export function Team() {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.1 });

  const teamMembers = [
    {
      name: 'Ashan Mir',
      role: 'Founder & CEO',
      expertise: 'Software Engineer | AI & SaaS Innovator | Product Strategist',
      description: 'Leading Syncora X\'s vision in AI-driven digital transformation.',
      gradient: 'from-blue-500 to-cyan-500',
      initials: 'AM',
    },
    {
      name: 'Sara Khan',
      role: 'Lead AI Engineer',
      expertise: 'Machine Learning & Automation Specialist',
      description: 'Expert in Python, TensorFlow & PyTorch; builds scalable AI systems.',
      gradient: 'from-violet-500 to-purple-500',
      initials: 'SK',
    },
    {
      name: 'Omar Ali',
      role: 'Head of Design & UX',
      expertise: 'Creative Designer | UI/UX Architect',
      description: 'Transforms ideas into immersive, user-centered experiences with Figma & Framer Motion.',
      gradient: 'from-pink-500 to-rose-500',
      initials: 'OA',
    },
    {
      name: 'Fatima Rehman',
      role: 'Marketing & Brand Director',
      expertise: 'Digital Strategist | SEO & Social Media Expert',
      description: 'Drives brand visibility through growth campaigns and storytelling.',
      gradient: 'from-orange-500 to-red-500',
      initials: 'FR',
    },
    {
      name: 'Zain Ahmed',
      role: 'Operations & Partnership Manager',
      expertise: 'Business Development & Strategic Alliances',
      description: 'Handles business development & strategic alliances, ensuring seamless project execution.',
      gradient: 'from-emerald-500 to-teal-500',
      initials: 'ZA',
    },
    {
      name: 'Ayesha Iqbal',
      role: 'Software Engineer (Full-Stack)',
      expertise: 'React, Node.js & Next.js Specialist',
      description: 'Develops modern SaaS and web applications with cutting-edge technologies.',
      gradient: 'from-cyan-500 to-blue-500',
      initials: 'AI',
    },
    {
      name: 'Bilal Hassan',
      role: 'Cloud & DevOps Engineer',
      expertise: 'AWS, Docker & CI/CD Expert',
      description: 'Manages cloud infrastructure and pipelines for scalable deployments and performance optimization.',
      gradient: 'from-yellow-500 to-orange-500',
      initials: 'BH',
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
              Meet Our Team
            </span>
          </h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Passionate innovators dedicated to transforming the future of technology
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className={`group relative overflow-hidden rounded-2xl bg-gradient-to-br from-gray-900/80 to-gray-800/50 border border-gray-800 backdrop-blur-sm transition-all duration-500 hover:border-gray-700 hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.6)] ${
                isVisible
                  ? 'opacity-100 translate-y-0'
                  : 'opacity-0 translate-y-10'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              {/* Gradient overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`} />

              {/* Avatar section */}
              <div className="relative p-6 pb-4">
                <div className={`w-24 h-24 mx-auto rounded-full bg-gradient-to-br ${member.gradient} flex items-center justify-center text-white text-2xl font-bold mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  {member.initials}
                </div>

                <h3 className="text-xl font-semibold text-center text-white mb-1">
                  {member.name}
                </h3>
                <p className={`text-sm text-center font-medium bg-gradient-to-r ${member.gradient} bg-clip-text text-transparent mb-3`}>
                  {member.role}
                </p>
                <p className="text-xs text-center text-gray-400 mb-3 font-medium">
                  {member.expertise}
                </p>
                <p className="text-sm text-gray-400 text-center leading-relaxed">
                  {member.description}
                </p>
              </div>

              {/* Social links */}
              <div className="relative p-4 pt-0 flex justify-center gap-3">
                <button className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                  <Linkedin className="w-4 h-4" />
                </button>
                <button className="w-9 h-9 rounded-full bg-gray-800/50 border border-gray-700 flex items-center justify-center text-gray-400 hover:text-blue-400 hover:border-blue-500 hover:bg-blue-500/10 transition-all duration-300">
                  <Mail className="w-4 h-4" />
                </button>
              </div>

              {/* Hover glow effect */}
              <div className={`absolute -bottom-20 -right-20 w-40 h-40 bg-gradient-to-br ${member.gradient} opacity-0 group-hover:opacity-30 blur-3xl transition-opacity duration-500`} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
