import React from "react";
import ApperIcon from "@/components/ApperIcon";
import Card from "@/components/atoms/Card";

const TestimonialCard = ({ testimonial }) => {
const { quote_c, author_c, business_c, rating_c } = testimonial;
  return (
    <Card variant="elevated" className="relative overflow-hidden">
      {/* Decorative quote mark */}
      <div className="absolute -top-2 -left-2 w-16 h-16 bg-gradient-to-br from-gold-200 to-gold-300 rounded-full flex items-center justify-center opacity-20">
        <ApperIcon name="Quote" className="w-8 h-8 text-gold-600" />
      </div>
      
      <div className="relative">
        {/* Star Rating */}
        <div className="flex items-center space-x-1 mb-4">
{[...Array(rating_c)].map((_, i) => (
            <ApperIcon 
              key={i} 
              name="Star" 
              className="w-5 h-5 text-gold-500 fill-current"
            />
          ))}
        </div>
        
        {/* Quote */}
<blockquote className="text-gray-700 leading-relaxed mb-6 italic">
          "{quote_c}"
        </blockquote>
        
        {/* Author */}
        <div className="border-t border-gray-100 pt-4">
          <div className="font-semibold text-gray-900 mb-1">
{author_c}
          </div>
          <div className="text-sm text-gold-600 font-medium">
{business_c}
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;