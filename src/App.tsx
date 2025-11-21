import { Sparkles, Github, Cpu, Brain, Zap, Music, Palette, Dices, LayoutGrid, Disc3, Map, Piano, Library } from 'lucide-react';
import { useState } from 'react';
import { ThemeToggle } from './components/ThemeToggle';
import { SortDropdown, SortOption } from './components/SortDropdown';
import { CategorySlider } from './components/CategorySlider';

interface Prototype {
  id: number;
  title: string;
  description: string;
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  tags: string[];
  image?: string;
}

const prototypes: Prototype[] = [
  {
    id: 1,
    title: 'Metronome Game Prototype',
    description: 'Find your flow, follow the metronome, and let your garden blossom with every perfect beat.',
    category: 'Game',
    demoUrl: 'https://metronomegame-prototype.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/AI-metronome',
    tags: ['Rhythm Game', 'Music', 'Interactive'],
  },
  {
    id: 2,
    title: 'Logo Creator Prototype',
    description: 'Be inspired and craft unique, minimalist logos, then seamlessly export your artistic vision.',
    category: 'Design',
    demoUrl: 'https://logocreator-prototype.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/AI-Logo-Creator',
    tags: ['Logo Design', 'Minimalist', 'Creative'],
  },
  {
    id: 4,
    title: 'Dice Roller Prototype',
    description: 'Let your imagination wander as you craft each dice roll, letting fate decide your destiny.',
    category: 'Simulation',
    demoUrl: 'https://diceroller-prototype.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/dice-rolling-prototype.git',
    tags: ['Gaming', 'Interactive', 'Simulation'],
  },
  {
    id: 5,
    title: 'Mosaic Creator Prototype',
    description: 'Unlock your creativity and transform any idea into a vibrant pattern effortlessly.',
    category: 'Art',
    demoUrl: 'https://mosaic-postcard-crea-rsbe.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/mosaic-creator-prototype.git',
    tags: ['Mosaic', 'Creative', 'Art'],
  },
  {
    id: 8,
    title: 'Sound Canvas Prototype',
    description: 'Transform your music into dynamic patterns and evolving visuals that paint a living canvas.',
    category: 'Art',
    demoUrl: 'https://sound-to-visual-draw-901l.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/sound-canvas-prototype.git',
    tags: ['Music', 'Art', 'Interactive'],
  },
  {
    id: 6,
    title: 'Tabletop Map Builder Prototype',
    description: 'Quickly capture your adventure notes and clearly visualize the story as it unfolds.',
    category: 'Simulation',
    demoUrl: 'https://top-down-rpg-map-bui-3kbx.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/Tabletop-Map-Builder-Prototype.git',
    tags: ['Gaming', 'Interactive', 'RPG Visualization'],
  },
  {
    id: 7,
    title: 'Beat Box Visualizer Prototype',
    description: 'Lay down grooves and watch as the visualizer pulses and flows with every beat.',
    category: 'Music',
    demoUrl: 'https://beat-box-visualize-p-5swm.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/rhythm-creator-visualizer.git',
    tags: ['Rhythm', 'Music', 'Interactive'],
  },
  {
    id: 9,
    title: 'Book Catalog App Prototype',
    description: 'A book cataloging app that swiftly organizes, scans, and personalizes your growing library.',
    category: 'Organization',
    demoUrl: 'https://personal-book-catalo-0wsp.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/Book-cataloging-prototype.git',
    tags: ['Cataloging', 'Sorting', 'Tracking'],
  },
];

const categories = ['All', 'Art', 'Design', 'Game', 'Music', 'Simulation', 'Organization'];

const sortOptions: SortOption[] = [
  { id: 'name-asc', label: 'Name (A-Z)', value: 'name-asc' },
  { id: 'name-desc', label: 'Name (Z-A)', value: 'name-desc' },
  { id: 'date-newest', label: 'Date (Newest first)', value: 'date-newest' },
  { id: 'date-oldest', label: 'Date (Oldest first)', value: 'date-oldest' },
  { id: 'relevance', label: 'Relevance/Default', value: 'relevance' },
];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortBy, setSortBy] = useState('relevance');

  const filteredPrototypes = (selectedCategory === 'All'
    ? prototypes
    : prototypes.filter(p => p.category === selectedCategory)
  ).sort((a, b) => {
    switch (sortBy) {
      case 'name-asc':
        return a.title.localeCompare(b.title);
      case 'name-desc':
        return b.title.localeCompare(a.title);
      case 'date-newest':
        return b.id - a.id;
      case 'date-oldest':
        return a.id - b.id;
      case 'relevance':
      default:
        return a.id - b.id;
    }
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900">
      {/* Header */}
      <header className="border-b border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2 sm:space-x-3">
              <div className="p-1.5 sm:p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg sm:rounded-xl">
                <Brain className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <div>
                <h1 className="text-lg sm:text-2xl font-bold text-slate-900 dark:text-slate-100">Alec Tello Designs</h1>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 hidden xs:block">AI Prototypes & Experiments</p>
              </div>
            </div>
            <div className="flex items-center gap-2 sm:gap-4">
              <ThemeToggle />
              <a
                href="https://github.com/qgdkdzy6fv-cmd/AI-Website"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center space-x-1 sm:space-x-2 px-2 sm:px-4 py-2 bg-slate-900 dark:bg-slate-700 text-white dark:text-slate-300 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-105 min-h-[44px]"
              >
                <Github className="w-4 h-4" />
                <span className="text-xs sm:text-sm font-medium hidden sm:inline">Website GitHub</span>
                <span className="text-xs font-medium sm:hidden">GitHub</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Crafted with AI</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 dark:text-slate-100 mb-4">
            Exploring the Future of AI
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            A collection of experimental prototypes that push the boundaries of coding and design using artificial intelligence.
          </p>
        </div>

        {/* Category Filter & Sort */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-12">
          <CategorySlider
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <SortDropdown
            options={sortOptions}
            selected={sortBy}
            onSelect={setSortBy}
          />
        </div>

        {/* Prototypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrototypes.map((prototype) => (
            <div
              key={prototype.id}
              className="group bg-white dark:bg-slate-800 rounded-2xl shadow-sm border border-slate-200 dark:border-slate-700 overflow-hidden hover:shadow-xl dark:hover:shadow-slate-900/50 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header with Icon/Preview */}
              {prototype.id === 1 ? (
                <div className="relative h-52 bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900 dark:to-blue-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 dark:from-emerald-600 dark:to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Tempo Garden</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Play in tempo to grow your plant</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      Game
                    </span>
                  </div>
                </div>
              ) : prototype.id === 2 ? (
                <div className="relative h-52 bg-gradient-to-br from-blue-100 to-blue-200 dark:from-blue-900 dark:to-blue-800 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-700 dark:from-blue-600 dark:to-slate-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Logo Creator</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Design your perfect logo</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 4 ? (
                <div className="relative h-52 bg-gradient-to-br from-violet-100 to-purple-100 dark:from-violet-900 dark:to-purple-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ backgroundColor: '#8b5cf6' }}>
                      <Dices className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Dice Roller</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Roll the dice to decide your fate</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 5 ? (
                <div className="relative h-52 bg-gradient-to-br from-cyan-50 to-teal-100 dark:from-cyan-900 dark:to-teal-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 dark:from-cyan-600 dark:to-teal-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <LayoutGrid className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Mosaic Postcard Creator</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Create mosaics for friends and family</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 6 ? (
                <div className="relative h-52 bg-gradient-to-br from-orange-50 to-red-100 dark:from-orange-900 dark:to-red-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 dark:from-orange-600 dark:to-red-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Map className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">RPG Map Builder</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Visualize your RPG sessions</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 7 ? (
                <div className="relative h-52 bg-gradient-to-br from-pink-50 to-rose-100 dark:from-pink-900 dark:to-rose-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 dark:from-pink-600 dark:to-rose-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Disc3 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Rhythm Creator + Visualizer</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Drop a beat and bust a rhythm</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 8 ? (
                <div className="relative h-52 bg-gradient-to-br from-amber-50 to-yellow-100 dark:from-amber-900 dark:to-yellow-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-amber-500 to-yellow-600 dark:from-amber-600 dark:to-yellow-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Piano className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Sound Canvas</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Create art with music and sound</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 9 ? (
                <div className="relative h-52 bg-gradient-to-br from-lime-50 to-green-100 dark:from-lime-900 dark:to-green-900 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-lime-500 to-green-600 dark:from-lime-600 dark:to-green-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Library className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Book Catalog App</h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">Catalog and sort your books</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : (
                <div className="bg-gradient-to-br from-slate-900 to-slate-700 p-8 relative overflow-hidden">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-16 -mt-16" />
                  <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12" />
                  <div className="relative">
                    <div className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center mb-4">
                      <Cpu className="w-6 h-6 text-white" />
                    </div>
                    <span className="inline-block px-3 py-1 bg-white/20 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              )}

              {/* Card Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {prototype.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
                  {prototype.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {prototype.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-medium rounded-lg"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex gap-3">
                  {prototype.demoUrl && (
                    <a
                      href={prototype.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-900 dark:bg-slate-700 text-white dark:text-slate-300 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-600 transition-all duration-200 hover:scale-105"
                    >
                      <Zap className={`w-4 h-4 animate-pulse-icon ${prototype.id === 1 ? 'text-green-400' : prototype.id === 2 ? 'text-blue-400' : prototype.id === 4 ? '' : prototype.id === 5 ? 'text-cyan-400' : prototype.id === 6 ? 'text-orange-400' : prototype.id === 7 ? 'text-pink-400' : prototype.id === 8 ? 'text-amber-400' : prototype.id === 9 ? 'text-lime-400' : ''}`} style={prototype.id === 4 ? { color: '#8b5cf6' } : undefined} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {prototype.githubUrl && (
                    <a
                      href={prototype.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 bg-slate-100 dark:bg-slate-700 text-slate-700 dark:text-slate-300 rounded-lg hover:bg-slate-200 dark:hover:bg-slate-600 transition-all duration-200"
                    >
                      <Github className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Empty State */}
        {filteredPrototypes.length === 0 && (
          <div className="text-center py-16">
            <div className="w-16 h-16 bg-slate-100 dark:bg-slate-800 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-slate-400 dark:text-slate-500" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">No prototypes found</h3>
            <p className="text-slate-600 dark:text-slate-400">Try selecting a different category</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 dark:border-slate-700 bg-white/80 dark:bg-slate-900/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600 dark:text-slate-400">
            Built with curiosity and a passion for AI innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
