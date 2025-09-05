import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ApperIcon from "@/components/ApperIcon";
import Button from "@/components/atoms/Button";
import Card from "@/components/atoms/Card";
import { toast } from "react-toastify";

const PricingBox = ({ className = "" }) => {
  const navigate = useNavigate();
  const handlePurchase = () => {
toast.success("Redirecting to secure checkout...", {
      position: "top-right",
      autoClose: 2000,
    });
    
    // Navigate to checkout page
    setTimeout(() => {
      navigate("/checkout");
    }, 1000);
  };
  
  const bonuses = [
    {
      icon: "Video",
      title: "Free Video: 'The #1 Mistake Family Businesses Make'",
      value: "$19 Value"
    },
    {
      icon: "Calendar",
      title: "Invitation to Next Family Business Bootcamp Webinar",
      value: "$97 Value"
    }
  ];
  
  return (
    <div className={className}>
      <Card variant="elevated" className="max-w-2xl mx-auto text-center relative overflow-hidden">
        {/* Background Decoration */}
        <div className="absolute -top-20 -right-20 w-40 h-40 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full opacity-20"></div>
        <div className="absolute -bottom-20 -left-20 w-40 h-40 bg-gradient-to-br from-navy-200 to-navy-300 rounded-full opacity-20"></div>
        
        <div className="relative z-10">
          {/* Header */}
          <div className="mb-8">
            <h2 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Start Building Family Harmony Today
            </h2>
            <p className="text-lg text-gray-600">
              For Less Than the Cost of Lunch
            </p>
          </div>
          
          {/* Pricing */}
          <div className="mb-8">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <span className="text-2xl text-gray-400 line-through font-semibold">
                $29.97
              </span>
              <motion.span 
                className="text-5xl font-bold text-navy-900"
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.3 }}
              >
                $9.97
              </motion.span>
            </div>
            <p className="text-gold-600 font-semibold">
              Today Only - Limited Time Offer
            </p>
          </div>
          
          {/* Bonuses */}
          <div className="mb-8">
            <h3 className="text-xl font-display font-semibold text-gray-900 mb-6">
              Plus These Valuable Bonuses:
            </h3>
            <div className="space-y-4">
              {bonuses.map((bonus, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                  className="flex items-center space-x-4 p-4 bg-gradient-to-r from-gold-50 to-navy-50 rounded-lg border border-gold-200"
                >
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-gradient-to-br from-gold-400 to-gold-500 rounded-lg flex items-center justify-center">
                      <ApperIcon name={bonus.icon} className="w-5 h-5 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 text-left">
                    <p className="font-semibold text-gray-900">{bonus.title}</p>
                    <p className="text-sm text-gold-600 font-medium">{bonus.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          {/* Total Value */}
          <div className="mb-8 p-4 bg-gradient-to-r from-navy-50 to-primary-50 rounded-lg border-2 border-navy-200">
            <p className="text-lg font-semibold text-gray-900 mb-2">
              Total Value: <span className="text-navy-600">$145.97</span>
            </p>
            <p className="text-2xl font-bold text-gold-600">
              Your Price Today: $9.97
            </p>
            <p className="text-sm text-gray-600 mt-1">
              You Save $136.00 (93% Off)
            </p>
          </div>
          
          {/* CTA Button */}
          <div className="mb-6">
            <Button
              size="xl"
              onClick={handlePurchase}
              className="w-full max-w-md mx-auto text-xl font-bold shadow-2xl"
            >
              <ApperIcon name="ShoppingCart" className="w-6 h-6 mr-3" />
              Get Instant Access for $9.97
            </Button>
          </div>
          
          {/* Security & Guarantee */}
          <div className="space-y-3 text-sm text-gray-500">
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="Shield" className="w-4 h-4 text-green-600" />
              <span>Secure 256-bit SSL Encryption</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="Clock" className="w-4 h-4 text-green-600" />
              <span>Instant Digital Delivery</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <ApperIcon name="RefreshCw" className="w-4 h-4 text-green-600" />
              <span>7-Day Money Back Guarantee</span>
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default PricingBox;