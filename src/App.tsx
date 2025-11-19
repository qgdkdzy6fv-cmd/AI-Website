import { Sparkles, Github, ExternalLink, Cpu, Brain, Zap, Music, Palette, Dices, Code, Gamepad2, Sparkle } from 'lucide-react';
import { useState } from 'react';

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
    category: 'Music',
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
    description: 'Transform your code into beautiful visual diagrams and gain insights into your project architecture.',
    category: 'Design',
    demoUrl: 'https://mosaic-postcard-crea-rsbe.bolt.host',
    githubUrl: 'https://github.com/qgdkdzy6fv-cmd/Tabletop-Map-Builder-Prototype.git',
    tags: ['Development', 'Visualization', 'Tools'],
  },
  {
    id: 6,
    title: 'Game Engine Prototype',
    description: 'Build immersive 2D games with an intuitive interface and powerful physics engine.',
    category: 'Simulation',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['Gaming', 'Engine', 'Physics'],
  },
  {
    id: 7,
    title: 'AI Art Generator',
    description: 'Create stunning artwork with AI-powered generation tools and customize every detail.',
    category: 'Design',
    demoUrl: '#',
    githubUrl: '#',
    tags: ['AI', 'Art', 'Creative'],
  },
];

const categories = ['All', 'Design', 'Music', 'Simulation', 'Gaming'];

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const filteredPrototypes = selectedCategory === 'All'
    ? prototypes
    : prototypes.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-slate-100">
      {/* Header */}
      <header className="border-b border-slate-200 bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-3">
              <div className="p-2 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-xl">
                <Brain className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-slate-900">Alec Tello Designs</h1>
                <p className="text-sm text-slate-600">AI Prototypes & Experiments</p>
              </div>
            </div>
            <a
              href="https://github.com/qgdkdzy6fv-cmd/AI-Website"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 px-4 py-2 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 hover:scale-105"
            >
              <Github className="w-4 h-4" />
              <span className="text-sm font-medium">Website GitHub</span>
            </a>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-100 text-blue-700 rounded-full mb-6">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">Crafted with AI</span>
          </div>
          <h2 className="text-5xl font-bold text-slate-900 mb-4">
            Exploring the Future of AI
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            A collection of experimental prototypes that push the boundaries of coding and design using artificial intelligence.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-lg font-medium transition-all duration-200 ${
                selectedCategory === category
                  ? 'bg-slate-900 text-white shadow-lg scale-105'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Prototypes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrototypes.map((prototype) => (
            <div
              key={prototype.id}
              className="group bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              {/* Card Header with Icon/Preview */}
              {prototype.id === 1 ? (
                <div className="relative h-52 bg-gradient-to-br from-emerald-50 to-blue-50 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-emerald-500 to-green-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Music className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Tempo Garden</h4>
                    <p className="text-sm text-slate-600">Play in tempo to grow your plant</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 2 ? (
                <div className="relative h-52 bg-gradient-to-br from-blue-100 to-blue-200 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-slate-700 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Palette className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Logo Creator</h4>
                    <p className="text-sm text-slate-600">Design your perfect logo</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 4 ? (
                <div className="relative h-52 bg-gradient-to-br from-violet-100 to-purple-100 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg" style={{ backgroundColor: '#8b5cf6' }}>
                      <Dices className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Dice Roller</h4>
                    <p className="text-sm text-slate-600">Roll the dice to decide your fate</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 5 ? (
                <div className="relative h-52 bg-gradient-to-br from-cyan-50 to-teal-100 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-teal-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Code className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">Mosaic Postcard Creator</h4>
                    <p className="text-sm text-slate-600">Create mosaics for friends and family</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 6 ? (
                <div className="relative h-52 bg-gradient-to-br from-orange-50 to-red-100 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-red-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Gamepad2 className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">RPG Map Builder</h4>
                    <p className="text-sm text-slate-600">Build your own 2D games</p>
                  </div>
                  <div className="absolute top-4 right-4">
                    <span className="inline-block px-3 py-1 bg-slate-900/80 backdrop-blur-sm text-white text-xs font-medium rounded-full">
                      {prototype.category}
                    </span>
                  </div>
                </div>
              ) : prototype.id === 7 ? (
                <div className="relative h-52 bg-gradient-to-br from-pink-50 to-rose-100 overflow-hidden flex items-center justify-center">
                  <div className="text-center p-8">
                    <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-rose-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                      <Sparkle className="w-8 h-8 text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-slate-900 mb-2">AI Art Generator</h4>
                    <p className="text-sm text-slate-600">Create stunning AI artwork</p>
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
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                  {prototype.title}
                </h3>
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {prototype.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {prototype.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-slate-100 text-slate-700 text-xs font-medium rounded-lg"
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
                      className="flex-1 flex items-center justify-center space-x-2 px-4 py-2.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-all duration-200 hover:scale-105"
                    >
                      <Zap className={`w-4 h-4 animate-pulse-icon ${prototype.id === 1 ? 'text-green-400' : prototype.id === 2 ? 'text-blue-400' : prototype.id === 4 ? '' : prototype.id === 5 ? 'text-cyan-400' : prototype.id === 6 ? 'text-orange-400' : prototype.id === 7 ? 'text-pink-400' : ''}`} style={prototype.id === 4 ? { color: '#8b5cf6' } : undefined} />
                      <span className="text-sm font-medium">Live Demo</span>
                    </a>
                  )}
                  {prototype.githubUrl && (
                    <a
                      href={prototype.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center px-4 py-2.5 bg-slate-100 text-slate-700 rounded-lg hover:bg-slate-200 transition-all duration-200"
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
            <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Brain className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-xl font-semibold text-slate-900 mb-2">No prototypes found</h3>
            <p className="text-slate-600">Try selecting a different category</p>
          </div>
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/80 backdrop-blur-sm mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <p className="text-center text-slate-600">
            Built with curiosity and a passion for AI innovation
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
