import React, { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import type { WorkspaceType } from '../types';

interface Solution {
  icon: React.ElementType;
  title: string;
  description: string;
  type: WorkspaceType;
  details: string[];
}

interface SolutionsSliderProps {
  solutions: Solution[];
  onSelect: (type: WorkspaceType) => void;
}

export const SolutionsSlider = ({ solutions, onSelect }: SolutionsSliderProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const slideLeft = () => {
    setCurrentIndex(prev => (prev === 0 ? solutions.length - 1 : prev - 1));
  };

  const slideRight = () => {
    setCurrentIndex(prev => (prev === solutions.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="relative w-full">
      {/* Navigation Buttons - Always visible now */}
      <button
        onClick={slideLeft}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-20 bg-dark/40 hover:bg-dark/60 text-white/80 hover:text-white p-2 sm:p-4 md:p-6 rounded-r-2xl backdrop-blur-sm transition-all h-20 sm:h-32 md:h-40 group"
      >
        <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 transition-transform group-hover:scale-110" />
      </button>
      <button
        onClick={slideRight}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-20 bg-dark/40 hover:bg-dark/60 text-white/80 hover:text-white p-2 sm:p-4 md:p-6 rounded-l-2xl backdrop-blur-sm transition-all h-20 sm:h-32 md:h-40 group"
      >
        <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 transition-transform group-hover:scale-110" />
      </button>

      {/* Cards Container */}
      <div className="overflow-visible px-4 sm:px-8 md:px-12">
        <div
          ref={sliderRef}
          className="flex transition-transform duration-500 ease-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / (window.innerWidth < 640 ? 1.02 : window.innerWidth < 768 ? 1.05 : 1.1))}%)`,
          }}
        >
          {solutions.map((solution, index) => {
            const isActive = index === currentIndex;
            return (
              <div
                key={solution.title}
                className="min-w-[98%] sm:min-w-[95%] md:min-w-[90.909%] px-2 sm:px-3 md:px-4"
                style={{
                  opacity: isActive ? 1 : 0.25,
                  transform: `scale(${isActive ? 1 : 0.8})`,
                  transition: 'all 0.5s ease-out',
                }}
              >
                <div
                  className={`w-full solution-card glassmorphism rounded-2xl transition-all duration-300 text-left ${
                    isActive ? 'p-6 sm:p-10 md:p-14' : 'p-4 sm:p-6 md:p-8'
                  }`}
                  style={{
                    minHeight: isActive ? 
                      'calc(100vh - 16rem)' : 
                      'calc(100vh - 20rem)',
                    maxHeight: isActive ?
                      '800px' :
                      '650px',
                    transform: isActive ? 'translateX(5%)' : 'none'
                  }}
                >
                  <div className="flex flex-col h-full">
                    <div className="flex-grow">
                      <h3 className={`font-semibold mb-3 sm:mb-4 md:mb-6 text-primary transition-colors ${
                        isActive ? 'text-2xl sm:text-3xl md:text-4xl' : 'text-xl sm:text-xl md:text-2xl'
                      }`}>
                        {solution.title}
                      </h3>
                      <p className={`text-gray-400 mb-4 sm:mb-6 md:mb-8 ${isActive ? 'text-lg sm:text-xl md:text-2xl' : 'text-base sm:text-lg md:text-lg'}`}>
                        {solution.description}
                      </p>
                      <ul className="space-y-3 sm:space-y-4 md:space-y-5">
                        {solution.details.map((detail, i) => (
                          <li key={i} className="text-gray-400 flex items-start gap-2 sm:gap-3 md:gap-4">
                            <span className="text-primary mt-1 text-base sm:text-lg md:text-xl">•</span>
                            <span className={isActive ? 'text-base sm:text-lg md:text-xl' : 'text-sm sm:text-base md:text-base'}>
                              {detail}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="mt-8 sm:mt-10 md:mt-12">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onSelect(solution.type);
                        }}
                        className={`inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors ${
                          isActive ? 'text-lg' : 'text-base'
                        }`}
                      >
                        Try at AI Studio
                        <ArrowRight className={`${isActive ? 'w-6 h-6' : 'w-5 h-5'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2 mt-8 sm:mt-12 md:mt-16">
        {solutions.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-1.5 sm:h-2 rounded-full transition-all ${
              index === currentIndex ? 'w-6 sm:w-8 md:w-10 bg-primary' : 'w-1.5 sm:w-2 bg-gray-600'
            }`}
          />
        ))}
      </div>
    </div>
  );
}; 