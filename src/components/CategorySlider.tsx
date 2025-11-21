import { useState, useRef, useEffect } from 'react';
import { ChevronRight, X, ChevronDown } from 'lucide-react';

interface CategorySliderProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export function CategorySlider({ categories, selected, onSelect }: CategorySliderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleCategoryClick = (category: string) => {
    onSelect(category);
    if (isMobile) {
      setIsOpen(false);
    }
  };

  if (isMobile) {
    return (
      <div ref={containerRef} className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg"
        >
          <span className="font-medium text-slate-700 dark:text-slate-300">{selected}</span>
          <ChevronDown className={`w-4 h-4 text-slate-700 dark:text-slate-300 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
        </button>

        {isOpen && (
          <div className="absolute top-full mt-2 left-0 z-50 w-48 bg-white dark:bg-slate-800 rounded-lg shadow-xl border border-slate-200 dark:border-slate-700 py-2 animate-slide-down">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryClick(category)}
                className={`w-full px-4 py-2.5 text-left font-medium transition-all duration-200 ${
                  selected === category
                    ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900'
                    : 'text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-4 py-2.5 rounded-lg bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center gap-2 hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg"
        aria-label={isOpen ? 'Close categories' : 'Open categories'}
      >
        <span className="font-medium text-slate-700 dark:text-slate-300">{selected}</span>
        {isOpen ? (
          <X className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        ) : (
          <ChevronRight className="w-4 h-4 text-slate-700 dark:text-slate-300" />
        )}
      </button>

      <div
        className={`absolute left-full ml-2 top-1/2 -translate-y-1/2 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2 pointer-events-none'
        }`}
      >
        <div className="flex gap-3 bg-white dark:bg-slate-800 rounded-2xl p-3 shadow-xl border border-slate-200 dark:border-slate-700">
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => handleCategoryClick(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 whitespace-nowrap ${
                selected === category
                  ? 'bg-slate-900 dark:bg-slate-100 text-white dark:text-slate-900 shadow-lg scale-105'
                  : 'bg-slate-50 dark:bg-slate-700 text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-600'
              }`}
              style={{
                transitionDelay: isOpen ? `${index * 30}ms` : '0ms',
              }}
            >
              {category}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
