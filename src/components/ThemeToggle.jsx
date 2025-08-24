import { Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import toast from 'react-hot-toast';

const ThemeToggle = () => {
  const { isDarkMode, toggleTheme } = useTheme();

  return (
    <button 
      onClick={() => {
        toggleTheme();
        toast.success("Theme Changed", {
          position: "top-right",
        });
      }}
      className="p-2 rounded-lg border transition-all duration-300 ease-in-out
                 bg-white dark:bg-gray-800 
                 border-gray-300 dark:border-gray-600
                 text-gray-800 dark:text-gray-200
                 hover:bg-gray-100 dark:hover:bg-gray-700
                 focus:outline-none focus:ring-2 focus:ring-blue-500"
      aria-label="Toggle theme"
    >
      {isDarkMode ? (
        <Sun size={20} className="text-yellow-500" />
      ) : (
        <Moon size={20} className="text-blue-600" />
      )}
    </button>
  );
};

export default ThemeToggle;
