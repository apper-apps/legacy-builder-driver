import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const FeatureCard = ({ feature }) => {
const { icon_c, title_c, description_c } = feature;
  return (
    <Card 
      variant="gradient" 
      className="group hover:scale-105 transform transition-all duration-300 border-l-4 border-l-gold-500"
    >
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="w-12 h-12 bg-gradient-to-br from-navy-500 to-primary-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-200 shadow-lg">
            <ApperIcon 
name={icon_c} 
              className="w-6 h-6 text-white"
            />
          </div>
        </div>
        
        <div className="flex-1 min-w-0">
          <h3 className="text-lg font-display font-semibold text-gray-900 mb-2 group-hover:text-navy-700 transition-colors">
{title_c}
          </h3>
          <p className="text-gray-600 leading-relaxed">
{description_c}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default FeatureCard;