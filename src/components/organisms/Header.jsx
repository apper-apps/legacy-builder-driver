import React, { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import ProgressIndicator from "@/components/molecules/ProgressIndicator";
import { toast } from "react-toastify";
import { AuthContext } from "../App";
import { useSelector } from 'react-redux';
const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  const handleGetGuide = () => {
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
    
    toast.info("Scroll down to secure your copy!", {
      position: "top-right",
      autoClose: 2000,
    });
  };
  
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  
  return (
    <>
      <ProgressIndicator />
      
      <motion.header 
        className={`fixed top-1 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled 
            ? "bg-white/95 backdrop-blur-md shadow-xl border-b border-gray-200" 
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <motion.div 
              className="flex items-center space-x-3"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                isScrolled 
                  ? "bg-gradient-to-br from-navy-500 to-primary-600" 
                  : "bg-gradient-to-br from-gold-400 to-gold-500"
              }`}>
                <ApperIcon name="BookOpen" className={`w-5 h-5 ${
                  isScrolled ? "text-white" : "text-navy-900"
                }`} />
              </div>
              <div>
                <h1 className={`font-display font-bold text-lg ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}>
                  Legacy Builder
                </h1>
                <p className={`text-xs ${
                  isScrolled ? "text-gray-600" : "text-navy-200"
                }`}>
                  Family Business Harmony
                </p>
              </div>
            </motion.div>
            
            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {[
                { label: "Problem", id: "problem" },
                { label: "Solution", id: "solution" },
                { label: "Author", id: "author" },
                { label: "Testimonials", id: "testimonials" }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-colors duration-200 hover:text-gold-600 ${
                    isScrolled ? "text-gray-700" : "text-navy-200 hover:text-gold-300"
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </nav>
{/* CTA Button and User Menu */}
            <div className="flex items-center space-x-4">
              <Button
                size="md"
                onClick={handleGetGuide}
                className={`${
                  isScrolled 
                    ? "bg-gradient-to-r from-navy-500 to-primary-600 text-white hover:from-navy-600 hover:to-primary-700" 
                    : ""
                }`}
              >
                <ApperIcon name="Download" className="w-4 h-4 mr-2" />
                <span className="hidden sm:inline">Get Guide</span>
                <span className="sm:hidden">$9.97</span>
              </Button>
              <UserMenu isScrolled={isScrolled} />
            </div>
          </div>
        </div>
      </motion.header>
</>
  );
};

const UserMenu = ({ isScrolled }) => {
  const { logout } = useContext(AuthContext);
  const { user, isAuthenticated } = useSelector((state) => state.user);
  const [showDropdown, setShowDropdown] = useState(false);

  if (!isAuthenticated) {
    return null;
  }

  const handleLogout = async () => {
    try {
      await logout();
      toast.success("Logged out successfully");
    } catch (error) {
      toast.error("Logout failed");
    }
    setShowDropdown(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setShowDropdown(!showDropdown)}
        className={`w-8 h-8 rounded-full flex items-center justify-center ${
          isScrolled 
            ? "bg-gray-200 text-gray-700 hover:bg-gray-300" 
            : "bg-white/20 text-white hover:bg-white/30"
        }`}
      >
        <ApperIcon name="User" className="w-4 h-4" />
      </button>
      
      {showDropdown && (
        <div className="absolute right-0 top-10 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-50">
          <div className="px-4 py-2 border-b border-gray-200">
            <p className="text-sm font-medium text-gray-900">
              {user?.firstName} {user?.lastName}
            </p>
            <p className="text-xs text-gray-500">{user?.emailAddress}</p>
          </div>
          <button
            onClick={handleLogout}
            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-red-50 flex items-center"
          >
            <ApperIcon name="LogOut" className="w-4 h-4 mr-2" />
            Logout
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;