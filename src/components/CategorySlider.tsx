import { useState, useRef, useEffect } from 'react';
import { MoreHorizontal, X } from 'lucide-react';

interface CategorySliderProps {
  categories: string[];
  selected: string;
  onSelect: (category: string) => void;
}

export function CategorySlider({ categories, selected, onSelect }: CategorySliderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscape);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleEscape);
    };
  }, [isOpen]);

  const handleCategoryClick = (category: string) => {
    onSelect(category);
    setIsOpen(false);
  };

  return (
    <div ref={containerRef} className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-12 h-12 rounded-full bg-white dark:bg-slate-800 border-2 border-slate-200 dark:border-slate-700 flex items-center justify-center hover:bg-slate-50 dark:hover:bg-slate-700 transition-all duration-200 shadow-lg hover:shadow-xl"
        aria-label={isOpen ? 'Close categories' : 'Open categories'}
      >
        {isOpen ? (
          <X className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        ) : (
          <MoreHorizontal className="w-5 h-5 text-slate-700 dark:text-slate-300" />
        )}
      </button>

      <div
        className={`absolute left-16 top-0 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4 pointer-events-none'
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
