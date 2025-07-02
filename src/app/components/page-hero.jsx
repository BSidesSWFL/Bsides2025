import React from "react";

const PageHero = ({ title, subtitle }) => {
  return (
    <div className="wrapper-2 md:wrapper-6 pt-16 md:pt-32 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-orange-500/20 to-transparent"></div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h2 className="text-3xl font-semibold mb-6 text-orange-200">{title}</h2>
        <p className="text-xl text-cyan-100 max-w-3xl mx-auto leading-relaxed">
          {subtitle}
        </p>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" className="w-full h-8 fill-amber-100">
          <path d="M0,64L48,69.3C96,75,192,85,288,80C384,75,480,53,576,58.7C672,64,768,96,864,96C960,96,1056,64,1152,48C1248,32,1344,32,1392,32L1440,32L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"></path>
        </svg>
      </div>
    </div>
  );
};

export default PageHero;