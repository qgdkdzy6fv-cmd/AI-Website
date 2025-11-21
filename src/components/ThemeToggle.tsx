import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative w-11 h-6 bg-slate-300 dark:bg-slate-600 rounded-full transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-slate-900"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      <span
        className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white dark:bg-slate-800 rounded-full shadow-md transform transition-transform duration-300 flex items-center justify-center ${
          theme === 'dark' ? 'translate-x-5' : 'translate-x-0'
        }`}
      >
        {theme === 'light' ? (
          <Sun className="w-3 h-3 text-amber-500" />
        ) : (
          <Moon className="w-3 h-3 text-blue-400" />
        )}
      </span>
    </button>
  );
}
