import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa'
import { motion } from 'framer-motion'

const Footer = () => {
  const socialLinks = [
    { icon: FaGithub, href: 'https://github.com/Sarthakdenu', label: 'GitHub' },
    { icon: FaLinkedin, href: 'https://www.linkedin.com/in/sarthak-vyas-99791b25b/', label: 'LinkedIn' },
    { icon: FaEnvelope, href: 'mailto:connectwithsarthak2006@gmail.com', label: 'Email' },
  ]

  return (
    <footer className="relative py-12 glass mt-20">
      <div className="container mx-auto px-6">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-cyan-400 text-2xl transition-colors duration-300"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <social.icon />
              </motion.a>
            ))}
          </div>

          {/* Copyright */}
          <motion.p
            className="text-gray-500 text-sm flex items-center gap-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            Made with <FaHeart className="text-red-500 animate-pulse" /> by Sarthak Vyas
          </motion.p>
          
          <motion.p
            className="text-gray-600 text-xs"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            © {new Date().getFullYear()} All rights reserved.
          </motion.p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
