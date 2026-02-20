import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      title: 'MANIT Collaborative Research Management System',
      description: 'Full-stack research collaboration platform with real-time code editor, authentication, and advanced filtering capabilities.',
      tech: ['React', 'Node.js', 'MongoDB', 'WebSockets', 'Express'],
      github: 'https://github.com/Sarthakdenu/Manit-Research-Management',
      live: '#',
      gradient: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Speedy Eats - Food Delivery App',
      description: 'MERN stack food delivery application with authentication, order management, cart functionality, and payment integration.',
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'Stripe'],
      github: 'https://github.com/Sarthakdenu/foodapp',
      live: '#',
      gradient: 'from-orange-500 to-red-600',
    },
    {
      title: 'RailRide - Train Search App',
      description: 'Train booking platform with API integration, advanced filtering, ticket booking, and comprehensive backend logic.',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'REST API'],
      github: 'https://github.com/Sarthakdenu/Railway-Website',
      live: '#',
      gradient: 'from-green-500 to-emerald-600',
    },
    {
      title: 'Disease Prediction System',
      description: 'ML-powered disease prediction system using NLP and symptom-based analysis with Flask backend integration.',
      tech: ['Python', 'Flask', 'NLP', 'Scikit-Learn', 'TensorFlow'],
      github: 'https://github.com/Sarthakdenu/Disease-Prediction-System',
      live: '#',
      gradient: 'from-purple-500 to-pink-600',
    },
    {
      title: 'Resume Job Matching',
      description: 'NLP-based resume analyzer using TF-IDF for role prediction and job matching with ML model integration.',
      tech: ['Python', 'NLP', 'TF-IDF', 'Scikit-Learn', 'Flask'],
      github: 'https://github.com/Sarthakdenu/Resume-based-Job-prediction',
      live: '#',
      gradient: 'from-indigo-500 to-purple-600',
    },
    {
      title: 'EasyShopSpot - E-commerce',
      description: 'Modern e-commerce frontend with product catalog, shopping cart, user authentication, and responsive design.',
      tech: ['React', 'Tailwind CSS', 'Redux', 'React Router'],
      github: 'https://github.com/Sarthakdenu/ecommerce-easeshopspot',
      live: '#',
      gradient: 'from-yellow-500 to-orange-600',
    },
    {
      title: 'SplitVise - Expense Split',
      description: 'React-based expense splitting application for managing group expenses and tracking settlements.',
      tech: ['React', 'JavaScript', 'CSS3', 'Local Storage'],
      github: 'https://github.com/Sarthakdenu/SplitVise-WebApp',
      live: '#',
      gradient: 'from-teal-500 to-cyan-600',
    },
  ]

  return (
    <section id="projects" className="py-20 relative" ref={ref}>
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my recent work and personal projects
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="glass rounded-xl overflow-hidden card-hover group"
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
            >
              {/* Gradient Header */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`}></div>
              
              <div className="p-6">
                {/* Project Title */}
                <h3 className="text-xl font-bold mb-3 group-hover:text-cyan-400 transition-colors">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-mono bg-gray-800/50 rounded-full text-cyan-400 border border-cyan-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaGithub />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  
                  <motion.a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <FaExternalLinkAlt />
                    <span className="text-sm">Live</span>
                  </motion.a>
                </div>
              </div>

              {/* Hover Glow Effect */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                <div className={`absolute inset-0 bg-gradient-to-r ${project.gradient} opacity-10 blur-xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* View More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 1 }}
        >
          <a
            href="https://github.com/Sarthakdenu"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary inline-block"
          >
            View All Projects on GitHub
          </a>
        </motion.div>
      </div>
    </section>
  )
}

export default Projects
