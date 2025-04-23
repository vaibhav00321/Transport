import { motion } from 'framer-motion';
import { FiLock, FiMail, FiArrowRight } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const Login = () => {
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans flex items-center justify-center p-4">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-purple-900/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Back to Home */}
      <Link 
        to="/" 
        className="absolute top-6 left-6 flex items-center text-blue-400 hover:text-blue-300 transition-colors z-10"
      >
        <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
        </svg>
        Back to Home
      </Link>

      <motion.div 
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 w-full max-w-md bg-gray-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-gray-700 shadow-xl"
      >
        <div className="p-8">
          <motion.div variants={item} className="text-center mb-8">
            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center">
                <FiLock className="text-blue-400 text-2xl" />
              </div>
            </div>
            <h1 className="text-3xl font-bold mb-2">Welcome Back</h1>
            <p className="text-gray-400">Sign in to your SwiftPost account</p>
          </motion.div>

          <motion.form variants={container} className="space-y-6">
            <motion.div variants={item}>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                Email Address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiMail className="text-gray-500" />
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  placeholder="you@example.com"
                />
              </div>
            </motion.div>

            <motion.div variants={item}>
              <div className="flex justify-between items-center mb-1">
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                  Password
                </label>
                <Link to="/forgot-password" className="text-sm text-blue-400 hover:text-blue-300">
                  Forgot password?
                </Link>
              </div>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="text-gray-500" />
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  className="block w-full pl-10 pr-3 py-3 bg-gray-700 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent placeholder-gray-400"
                  placeholder="••••••••"
                />
              </div>
            </motion.div>

            <motion.div variants={item} className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-blue-500 focus:ring-blue-500 border-gray-600 rounded bg-gray-700"
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                Remember me
              </label>
            </motion.div>

            <motion.div variants={item}>
              <button
                type="submit"
                className="w-full flex justify-center items-center py-3 px-4 border border-transparent rounded-lg shadow-sm text-white bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all duration-200"
              >
                Sign In <FiArrowRight className="ml-2" />
              </button>
            </motion.div>
          </motion.form>

          <motion.div 
            variants={item}
            className="mt-6 text-center text-gray-400"
          >
            <p>
              Don't have an account?{' '}
              <Link to="/signup" className="text-blue-400 hover:text-blue-300 font-medium">
                Sign up
              </Link>
            </p>
          </motion.div>
        </div>

        <div className="px-8 py-4 bg-gray-800/50 text-center border-t border-gray-700">
          <p className="text-xs text-gray-500">
            By continuing, you agree to our <a href="#" className="text-blue-400 hover:text-blue-300">Terms of Service</a> and <a href="#" className="text-blue-400 hover:text-blue-300">Privacy Policy</a>.
          </p>
        </div>
      </motion.div>
    </div>
  );
};

export default Login;