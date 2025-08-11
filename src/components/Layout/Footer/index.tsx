'use client'
import Link from 'next/link'
import { Icon } from '@iconify/react'
import { motion } from 'framer-motion'
import { Logo } from '../Header/Logo'
import { useState } from 'react'
import toast from 'react-hot-toast'

const Footer: React.FC = () => {
  const [email, setEmail] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const headerLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '#features' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Upgrade', href: '#upgrade' },
  ];

  const footerLinks = [
    { label: 'Documentation', href: 'https://github.com/OpenVoiceX/Web-Voice-marketing-Agent/blob/main/README.md' },
    { label: 'Contributors', href: '/contributors' },
    { label: 'Contribute', href: 'https://github.com/OpenVoiceX/Web-Voice-marketing-Agent/blob/main/CONTRIBUTING.md' },
    { label: 'Issues', href: 'https://github.com/OpenVoiceX/Web-Voice-marketing-Agent/issues' },
  ];

  // Handle newsletter subscription
  const handleSubscribe = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!email.trim()) {
      toast.error('Please enter your email address');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/api/newsletter', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        toast.success(data.message || 'Successfully subscribed to our newsletter! 🎉');
        setEmail(''); // Clear the input field
        if (data.info) {
          setTimeout(() => {
            toast.success(data.info, { duration: 6000 });
          }, 1000);
        }
      } else {
        // Handle different error types
        switch (response.status) {
          case 429: {
            const retryAfter = data.retryAfter || 3600;
            const retryTime = retryAfter > 60 
              ? `${Math.ceil(retryAfter / 60)} minutes` 
              : `${retryAfter} seconds`;
            toast.error(`Too many attempts. Please try again in ${retryTime}.`);
            break;
          }
          case 409:
            toast.error(data.error || 'This email is already subscribed.');
            if (data.message) {
              setTimeout(() => {
                toast(data.message, { 
                  duration: 8000,
                  icon: 'ℹ️' 
                });
              }, 1000);
            }
            break;
          case 503:
            toast.error('Service temporarily unavailable. Please try again later.');
            break;
          default:
            toast.error(data.error || 'Failed to subscribe. Please try again.');
        }
      }
    } catch (error) {
      console.error('Newsletter subscription error:', error);
      toast.error('Failed to subscribe. Please check your connection and try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  // Animation variants for subtle fade-in effects
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
  };

  return (
    <footer className="pt-16 pb-8 bg-gradient-to-b from-dark_grey/90 to-dark_grey text-white">
      <div className="container px-4 sm:px-6 mx-auto max-w-7xl">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 sm:grid-cols-12 lg:gap-10 md:gap-8 sm:gap-6 gap-6"
        >
          {/* Logo and Social Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 md:col-span-6 col-span-12">
            <Logo />
            <p className="text-white/80 text-16 mt-4 max-w-sm">
              Build blazing-fast, open-source voice AI with Voice Marketing Agents.
            </p>
            <div className="flex gap-6 items-center mt-6">
              <Link href="https://github.com/OpenVoiceX/Web-Voice-marketing-Agent" className="group transition-transform duration-300 hover:scale-110">
                <Icon
                  icon="fa6-brands:github"
                  width="28"
                  height="28"
                  className="text-white group-hover:text-primary"
                />
              </Link>
            </div>
            <p className="text-white/60 text-14 font-medium mt-8">
              © {new Date().getFullYear()} Voice Marketing Agents. All rights reserved.
            </p>
            <Link
              href="https://github.com/OpenVoiceX/Web-Voice-marketing-Agent"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/80 text-14 font-medium mt-2 hover:text-primary transition-colors block"
            >
              View on GitHub
            </Link>
          </motion.div>

          {/* Navigation Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white text-20 font-semibold mb-4">Links</h4>
            <ul className="space-y-3">
              {headerLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href || '#'}
                    className="text-white/80 text-16 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Information Links */}
          <motion.div variants={itemVariants} className="lg:col-span-2 md:col-span-3 col-span-6">
            <h4 className="text-white text-20 font-semibold mb-4">Information</h4>
            <ul className="space-y-3">
              {footerLinks.map((item, index) => (
                <li key={index}>
                  <Link
                    href={item.href || '#'}
                    className="text-white/80 text-16 hover:text-primary transition-colors duration-200"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Subscribe Section */}
          <motion.div variants={itemVariants} className="lg:col-span-4 md:col-span-4 col-span-12">
            <h3 className="text-white text-20 font-semibold mb-4">Stay Updated</h3>
            <p className="text-white/60 text-16 mb-4">
              Subscribe for the latest updates on<br />Voice Marketing Agents
            </p>
            <form onSubmit={handleSubscribe} className="relative lg:w-4/5">
              <input
                type="email"
                name="mail"
                id="mail"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                disabled={isSubmitting}
                className="bg-dark_grey/50 border border-primary/30 py-3 px-5 text-white rounded-lg w-full focus:border-primary focus:ring-2 focus:ring-primary/20 focus:outline-none transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting}
                className="absolute right-4 bottom-3 cursor-pointer hover:scale-110 transition-transform duration-200 disabled:cursor-not-allowed disabled:opacity-50"
              >
                {isSubmitting ? (
                  <Icon
                    icon="eos-icons:loading"
                    width="24"
                    height="24"
                    className="text-primary animate-spin"
                  />
                ) : (
                  <Icon
                    icon="tabler:send"
                    width="24"
                    height="24"
                    className="text-primary"
                  />
                )}
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Bottom Border */}
        <div className="border-t border-dark_border/20 mt-8 pt-6 text-center">
          <p className="text-white/50 text-14">
            Built with ❤️ by the Voice Marketing Agents community
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer