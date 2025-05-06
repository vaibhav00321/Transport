import { useEffect, useRef, useState } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { FiTruck, FiClock, FiShield, FiDollarSign, FiCheck, FiArrowRight } from 'react-icons/fi';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const navigate = useNavigate();
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  // Transform scrollY into opacity and scale values for the navbar
  const navbarOpacity = useTransform(scrollY, [0, 100], [1, 0.95]);
  const navbarScale = useTransform(scrollY, [0, 100], [1, 0.98]);
  const navbarY = useTransform(scrollY, [0, 100], [0, 8]);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const unsubscribe = scrollY.onChange((y) => {
      setIsScrolled(y > 50);
    });
    return () => unsubscribe();
  }, [scrollY]);

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

  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } }
  };

  const slideUp = {
    hidden: { y: 50, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.6 } }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 font-sans">
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden opacity-20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/30 via-gray-900 to-purple-900/30 animate-pulse"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
      </div>

      {/* Floating Navbar */}
      <motion.nav 
        style={{
          opacity: navbarOpacity,
          scale: navbarScale,
          y: navbarY
        }}
        className={`fixed z-50 w-full py-4 px-6 md:px-12 flex justify-between items-center transition-all duration-300 ${
          isScrolled 
            ? 'bg-gray-900/80 backdrop-blur-md border-b border-gray-800 rounded-b-xl shadow-xl mx-4 top-2 max-w-[calc(100%-2rem)]'
            : 'bg-transparent'
        }`}
      >
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex items-center"
        >
          <FiTruck className="text-blue-400 text-2xl mr-2" />
          <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
            QTR
          </span>
        </motion.div>

        <motion.div
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex space-x-8"
        >
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#how-it-works" className="hover:text-blue-400 transition-colors">How It Works</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#testimonials" className="hover:text-blue-400 transition-colors">Testimonials</a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="flex space-x-4"
        >
          <button onClick={() => {navigate("/login")}} className="px-4 py-2 rounded-lg border border-blue-400 text-blue-400 hover:bg-blue-400/10 transition-colors">
            Login
          </button>
          <button onClick={() => {navigate("/signup")}} className="px-4 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/20">
            Sign Up
          </button>
        </motion.div>
      </motion.nav>

      {/* Hero Section */}
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={container}
        className="relative z-10 pt-32 pb-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div variants={item}>
            <motion.h1 
              variants={slideUp}
              className="text-4xl md:text-6xl font-bold leading-tight mb-6"
            >
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-500">
                Next-Gen
              </span>{" "}
              Logistics for the Modern World
            </motion.h1>
            <motion.p 
              variants={slideUp}
              className="text-lg text-gray-400 mb-8 max-w-lg"
            >
              Revolutionizing package delivery with AI-powered routing, real-time tracking, and unmatched speed. Say goodbye to outdated postal services.
            </motion.p>
            <motion.div variants={slideUp} className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <button onClick={() => {navigate("/dashboard")}} className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/20 flex items-center justify-center">
                Get Started <FiArrowRight className="ml-2" />
              </button>
              <button className="px-8 py-3 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors">
                Learn More
              </button>
            </motion.div>
          </motion.div>

          <motion.div 
            variants={fadeIn}
            className="relative"
          >
            <div className="absolute -top-10 -left-10 w-64 h-64 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
            <div className="relative rounded-2xl overflow-hidden border border-gray-800 shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1607083206968-13611e3d76db?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Delivery truck" 
                className="w-full h-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-gray-900 to-transparent p-6">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 rounded-full bg-green-400 animate-pulse"></div>
                  <span className="text-sm">Live Tracking Active</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Features Section */}
      <motion.section 
        id="features"
        ref={ref}
        initial="hidden"
        animate={controls}
        variants={container}
        className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose <span className="text-blue-400">QTR</span>?</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We're redefining logistics with cutting-edge technology and customer-first solutions.
          </p>
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
          >
            <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6">
              <FiClock className="text-blue-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Lightning Fast</h3>
            <p className="text-gray-400">
              Average delivery times 60% faster than traditional postal services with our optimized network.
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
          >
            <div className="w-14 h-14 bg-purple-500/10 rounded-lg flex items-center justify-center mb-6">
              <FiShield className="text-purple-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Military-Grade Security</h3>
            <p className="text-gray-400">
              End-to-end package protection with real-time monitoring and tamper-proof packaging.
            </p>
          </motion.div>

          <motion.div 
            variants={item}
            whileHover={{ y: -10 }}
            className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-800 hover:border-blue-400/30 transition-all"
          >
            <div className="w-14 h-14 bg-green-500/10 rounded-lg flex items-center justify-center mb-6">
              <FiDollarSign className="text-green-400 text-2xl" />
            </div>
            <h3 className="text-xl font-semibold mb-3">Cost Effective</h3>
            <p className="text-gray-400">
              Save up to 40% compared to traditional carriers with our dynamic pricing model.
            </p>
          </motion.div>
        </motion.div>
      </motion.section>

      {/* How It Works */}
      <motion.section 
        id="how-it-works"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gray-800/30 rounded-3xl my-12 backdrop-blur-sm border border-gray-800"
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">How It <span className="text-blue-400">Works</span></h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Getting your packages delivered has never been easier with our simple 3-step process.
          </p>
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              step: "1",
              title: "Schedule a Pickup",
              description: "Book a pickup through our app or website in just a few clicks.",
              icon: "📅"
            },
            {
              step: "2",
              title: "We Collect Your Package",
              description: "Our driver will pick up your package at your chosen time.",
              icon: "🚚"
            },
            {
              step: "3",
              title: "Fast Delivery",
              description: "We deliver your package in days, not weeks.",
              icon: "⚡"
            }
          ].map((feature, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ scale: 1.03 }}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
            >
              <div className="flex items-center mb-6">
                <div className="w-10 h-10 rounded-full bg-blue-500/10 flex items-center justify-center mr-4">
                  <span className="text-xl">{feature.icon}</span>
                </div>
                <div className="text-2xl font-bold text-blue-400">Step {feature.step}</div>
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Pricing */}
      <motion.section 
        id="pricing"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Simple, <span className="text-blue-400">Transparent</span> Pricing</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            No hidden fees. Choose the plan that works best for your business.
          </p>
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {[
            {
              name: "Basic",
              price: "$4.99",
              description: "Perfect for occasional senders",
              features: ["Up to 5 lbs", "3-5 business days", "Tracking included", "Email notifications"],
              featured: false
            },
            {
              name: "Standard",
              price: "$9.99",
              description: "Great for regular shipments",
              features: ["Up to 20 lbs", "2-3 business days", "Priority support", "All Basic features"],
              featured: true
            },
            {
              name: "Premium",
              price: "$19.99",
              description: "For time-sensitive deliveries",
              features: ["Up to 50 lbs", "Next business day", "Dedicated account manager", "All Standard features"],
              featured: false
            }
          ].map((plan, index) => (
            <motion.div 
              key={index}
              variants={item}
              whileHover={{ y: -10 }}
              className={`rounded-xl overflow-hidden shadow-lg ${plan.featured ? 'border-2 border-blue-400 transform md:-translate-y-4' : 'border border-gray-800'}`}
            >
              {plan.featured && (
                <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-center py-2 font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8 bg-gray-800/50">
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <div className="text-4xl font-bold mb-4">{plan.price}</div>
                <p className="text-gray-400 mb-6">{plan.description}</p>
                
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center">
                      <FiCheck className="text-green-400 mr-2" />
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <button className={`w-full py-3 rounded-lg font-medium transition-all ${
                  plan.featured 
                    ? 'bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700'
                    : 'bg-gray-700 hover:bg-gray-600'
                }`}>
                  Get Started
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* Testimonials */}
      <motion.section 
        id="testimonials"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto bg-gray-800/30 rounded-3xl my-12 backdrop-blur-sm border border-gray-800"
      >
        <motion.div variants={item} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">What Our <span className="text-blue-400">Customers</span> Say</h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our customers have to say.
          </p>
        </motion.div>

        <motion.div variants={container} className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              quote: "SwiftPost cut our delivery times in half and saved us thousands in shipping costs. Their tracking system is fantastic.",
              author: "Sarah Johnson",
              role: "E-commerce Store Owner",
              avatar: "https://randomuser.me/api/portraits/women/44.jpg"
            },
            {
              quote: "As a small business, reliable shipping is crucial. SwiftPost has been a game-changer for our operations.",
              author: "Michael Chen",
              role: "Founder, Handmade Goods",
              avatar: "https://randomuser.me/api/portraits/men/32.jpg"
            },
            {
              quote: "The customer service is outstanding. They actually care about solving problems, not just processing shipments.",
              author: "Emily Rodriguez",
              role: "Marketing Director",
              avatar: "https://randomuser.me/api/portraits/women/68.jpg"
            }
          ].map((testimonial, index) => (
            <motion.div 
              key={index}
              variants={item}
              className="bg-gray-800/50 p-8 rounded-xl border border-gray-700 hover:border-blue-400/50 transition-all"
            >
              <div className="mb-6 text-yellow-400">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
              <blockquote className="text-lg text-gray-300 mb-6">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <img 
                  src={testimonial.avatar} 
                  alt={testimonial.author} 
                  className="w-12 h-12 rounded-full mr-4"
                />
                <div>
                  <div className="font-medium">{testimonial.author}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.section>

      {/* CTA */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={container}
        className="relative z-10 py-20 px-6 md:px-12 max-w-7xl mx-auto"
      >
        <motion.div 
          variants={item}
          className="bg-gradient-to-r from-blue-900/50 to-purple-900/50 rounded-3xl p-12 text-center border border-gray-800"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Shipping?</h2>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join thousands of businesses that trust QTR for their shipping needs.
          </p>
          <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
            <button className="px-8 py-3 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 transition-all shadow-lg shadow-blue-500/20">
              Get Started for Free
            </button>
            <button className="px-8 py-3 rounded-lg border border-gray-700 hover:border-blue-400 hover:text-blue-400 transition-colors">
              Contact Sales
            </button>
          </div>
        </motion.div>
      </motion.section>

      {/* Footer */}
      <footer className="relative z-10 py-12 px-6 md:px-12 border-t border-gray-800">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center mb-4">
                <FiTruck className="text-blue-400 text-2xl mr-2" />
                <span className="text-xl font-bold">QTR</span>
              </div>
              <p className="text-gray-400">Modern logistics solutions for the digital age.</p>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Company</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">About Us</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Careers</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Blog</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Services</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Express Delivery</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Warehousing</a></li>
                <li><a href="#" className="text-gray-400 hover:text-blue-400 transition-colors">Supply Chain</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold text-lg mb-4">Contact</h4>
              <ul className="space-y-2">
                <li className="text-gray-400">hello@swiftpost.com</li>
                <li className="text-gray-400">+1 (555) 123-4567</li>
              </ul>
            </div>
          </div>
          
          <div className="border-t border-gray-800 pt-8 text-center text-gray-500">
            <p>© {new Date().getFullYear()} QTR. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;