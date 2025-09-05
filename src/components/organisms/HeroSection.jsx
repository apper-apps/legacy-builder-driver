import React from "react";
import { motion } from "framer-motion";
import Button from "@/components/atoms/Button";
import BookMockup from "@/components/molecules/BookMockup";
import ApperIcon from "@/components/ApperIcon";
import { toast } from "react-toastify";

const HeroSection = () => {
  const handleCTA = () => {
    // Smooth scroll to pricing section
    const pricingSection = document.getElementById("pricing");
    if (pricingSection) {
      pricingSection.scrollIntoView({ behavior: "smooth" });
    }
    
    toast.info("Scroll down to see our special offer!", {
      position: "top-right",
      autoClose: 2000,
    });
  };
  
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-navy-500 via-navy-600 to-primary-600 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-72 h-72 bg-gold-400 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-white rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary-400 rounded-full blur-3xl"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
<div className="max-w-6xl mx-auto min-h-screen flex flex-col justify-center">
          {/* 2-Column Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Column - Content */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-white space-y-8"
            >
              {/* Main Headline */}
              <div>
                <motion.h1 
                  className="text-4xl md:text-5xl lg:text-6xl font-display font-bold leading-tight mb-6"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                >
                  Unlock <span className="bg-gradient-to-r from-gold-300 to-gold-500 bg-clip-text text-transparent">Harmony</span> in Your Family Business—
                  <span className="text-gold-300">Starting Today</span>
                </motion.h1>
                
                <motion.p 
                  className="text-xl md:text-2xl text-navy-100 leading-relaxed mb-8"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.4 }}
                >
                  Practical steps every family business owner needs to reduce conflict, build alignment, and set the stage for lasting legacy.
                </motion.p>
              </div>
              
              {/* Key Benefits */}
              <motion.div 
                className="space-y-4"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                {[
                  "End family conflicts that hurt your business",
                  "Create clear roles and expectations",
                  "Build a succession plan that works",
                  "Protect your family's legacy"
                ].map((benefit, index) => (
                  <motion.div 
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
                  >
                    <div className="w-6 h-6 bg-gold-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <ApperIcon name="Check" className="w-4 h-4 text-navy-900" />
                    </div>
                    <span className="text-lg text-navy-100">{benefit}</span>
                  </motion.div>
                ))}
              </motion.div>
              
              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.0 }}
              >
                <Button
                  size="xl"
                  onClick={handleCTA}
                  className="text-xl font-bold shadow-2xl hover:shadow-3xl transform hover:scale-105 transition-all duration-300"
                >
                  <ApperIcon name="Download" className="w-6 h-6 mr-3" />
                  Get Instant Access for Just $9.97
                </Button>
                
                <p className="text-navy-200 text-sm mt-4 flex items-center justify-start">
                  <ApperIcon name="Shield" className="w-4 h-4 mr-2" />
                  7-Day Money Back Guarantee • Instant Digital Delivery
                </p>
              </motion.div>
              
              {/* Trust Indicator */}
              <motion.div 
                className="flex items-center space-x-8 pt-8 border-t border-white/20"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 1.2 }}
              >
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-300">20+</div>
                  <div className="text-sm text-navy-200">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-300">100+</div>
                  <div className="text-sm text-navy-200">Family Businesses</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-gold-300">5★</div>
                  <div className="text-sm text-navy-200">Client Rating</div>
                </div>
              </motion.div>
            </motion.div>
            
            {/* Right Column - Ebook Image */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex justify-center lg:justify-end"
            >
              <BookMockup />
            </motion.div>
            
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.4 }}
        >
          <div className="flex flex-col items-center space-y-2 text-white/70">
            <span className="text-sm">Scroll to learn more</span>
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <ApperIcon name="ChevronDown" className="w-6 h-6" />
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;