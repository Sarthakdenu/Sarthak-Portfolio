import { motion } from 'framer-motion'

const Loader = () => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-dark-bg"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        <motion.div
          className="relative w-32 h-32 mx-auto mb-8"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-cyan-500 border-r-purple-500"></div>
          <div className="absolute inset-2 rounded-full border-4 border-transparent border-b-cyan-500 border-l-purple-500"></div>
        </motion.div>
        
        <motion.h2
          className="text-2xl font-display gradient-text mb-2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Sarthak Vyas
        </motion.h2>
        
        <motion.p
          className="text-gray-400 font-mono text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          Loading portfolio...
        </motion.p>
      </div>
    </motion.div>
  )
}

export default Loader
