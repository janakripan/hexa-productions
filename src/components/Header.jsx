import React, { useEffect, useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import { Menu, X, ChevronDown, Phone, Mail, MapPin } from "lucide-react";
import { HeaderLinks } from "../constants/navLinks";

const logoUrl =
  "https://hexagroup.ae/wp-content/uploads/2024/03/cropped-cropped-HEXA-LOGO-new.pdf.png";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const currentPath = window.location.hash || "#home";
  const [activeLink, setActiveLink] = useState(currentPath);

  useEffect(() => {
     if (!window.location.hash) {
    window.location.hash = "#home"; // Sets the hash
  }
  setActiveLink(window.location.hash || "#home");
  }, []);

  const { scrollY } = useScroll();
  const headerY = useTransform(scrollY, [0, 100], [0, -5]);
  const logoScale = useTransform(scrollY, [0, 100], [1, 0.9]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 30);
      
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMenuClick = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (hash) => {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
      setActiveLink(hash);
      setIsOpen(false); // close mobile menu
    }
  };

  // Navigation variants
  const navVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0 },
  };

  const mobileMenuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      height: "auto",
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
        delayChildren: 0.1,
      },
    },
  };

  const mobileItemVariants = {
    closed: { opacity: 0, x: -20 },
    open: { opacity: 1, x: 0 },
  };

  return (
    <div  >
  

      {/* Main Header */}
      <motion.header
        style={{ y: headerY }}
        className={`fixed left-0 w-full z-40 transition-all duration-500 `}
      >
        <div
          className={`backdrop-blur-xl border-b transition-all duration-500 ${
            isScrolled
              ? "bg-white/95 text-gray-800 shadow-lg border-gray-200/50"
              : "bg-transparent text-white border-transparent"
          }`}
        >
          <div className="max-w-screen-xl mx-auto px-4">
            <div className="flex justify-between items-center h-20">
              {/* Logo */}
              <motion.div
                style={{ scale: logoScale }}
                className="logo flex items-center"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <img
                  src={logoUrl}
                  alt="Hexa Production Logo"
                  className={`transition-all duration-500 ${
                    isScrolled ? "h-12 w-auto" : "h-16 w-auto"
                  }`}
                />
              </motion.div>

              {/* Desktop Navigation */}
              <motion.nav
                variants={navVariants}
                initial="hidden"
                animate="visible"
                className="hidden lg:flex items-center"
              >
                <div className="flex items-center bg-white/5 backdrop-blur-sm rounded-full px-2 py-1 border border-white/10">
                  {HeaderLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      variants={linkVariants}
                      onClick={() => handleLinkClick(link.path)}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`relative px-6 py-3 rounded-full text-sm font-semibold uppercase tracking-wide transition-all duration-300 ${
                        activeLink === link.path
                          ? "text-white"
                          : isScrolled
                          ? "text-gray-700 hover:text-red-600"
                          : "text-white/80 hover:text-white"
                      }`}
                    >
                      {activeLink === link.path && (
                        <motion.div
                          layoutId="activeTab"
                          className="absolute inset-0 bg-gradient-to-r from-red-500 to-red-600 rounded-full shadow-lg"
                          transition={{
                            type: "spring",
                            bounce: 0.2,
                            duration: 0.6,
                          }}
                        />
                      )}
                      <span className="relative z-10">{link.name}</span>
                    </motion.button>
                  ))}
                </div>
              </motion.nav>

              {/* CTA Button (Desktop) */}
              <motion.button
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(239, 68, 68, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="hidden lg:block px-6 py-3 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-full hover:from-red-600 hover:to-red-700 transition-all duration-300 shadow-lg"
              >
                Get Quote
              </motion.button>

              {/* Mobile Menu Button */}
              <motion.button
                onClick={handleMenuClick}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`lg:hidden relative p-3 rounded-full transition-all duration-300 ${
                  isScrolled
                    ? "bg-gray-100 hover:bg-gray-200"
                    : "bg-white/10 hover:bg-white/20 backdrop-blur-sm"
                }`}
              >
                <motion.div
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {isOpen ? (
                    <X
                      className={`w-6 h-6 ${
                        isScrolled ? "text-gray-800" : "text-white"
                      }`}
                    />
                  ) : (
                    <Menu
                      className={`w-6 h-6 ${
                        isScrolled ? "text-gray-800" : "text-white"
                      }`}
                    />
                  )}
                </motion.div>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              variants={mobileMenuVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="lg:hidden bg-white/95 backdrop-blur-xl border-b border-gray-200/50 shadow-xl overflow-hidden"
            >
              <div className="max-w-screen-xl mx-auto px-4 py-6">
                <motion.nav className="flex flex-col space-y-2">
                  {HeaderLinks.map((link, index) => (
                    <motion.button
                      key={index}
                      variants={mobileItemVariants}
                      onClick={() => handleLinkClick(link.path)}
                      whileHover={{ x: 10, scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`text-left px-6 py-4 rounded-xl text-lg font-semibold uppercase tracking-wide transition-all duration-300 ${
                        activeLink === link.path
                          ? "bg-gradient-to-r from-red-500 to-red-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100 hover:text-red-600"
                      }`}
                    >
                      {link.name}
                    </motion.button>
                  ))}
                </motion.nav>

                {/* Mobile CTA Section */}
                <motion.div
                  variants={mobileItemVariants}
                  className="mt-6 pt-6 border-t border-gray-200"
                >
                  <motion.button
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full px-6 py-4 bg-gradient-to-r from-red-500 to-red-600 text-white font-semibold rounded-xl shadow-lg hover:from-red-600 hover:to-red-700 transition-all duration-300"
                  >
                    Get Your Free Quote
                  </motion.button>

                  {/* Mobile Contact Info */}
                  <div className="mt-4 grid grid-cols-1 gap-3 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Phone className="w-4 h-4 text-red-500" />
                      <span>+971 50 123 4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-red-500" />
                      <span>info@hexaproduction.ae</span>
                    </div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>

     
      
    </div>
  );
};

export default Header;
