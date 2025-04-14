import React from 'react';
import { Heart, BellRing as Ring, Stars, Flower } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rose-100 to-pink-100 flex items-center justify-center p-4 relative">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Heart className="absolute top-[20%] left-[10%] text-rose-200 fill-rose-200 opacity-30" size={48} />
        <Heart className="absolute top-[40%] right-[15%] text-rose-200 fill-rose-200 opacity-30" size={36} />
        <Heart className="absolute bottom-[25%] left-[20%] text-rose-200 fill-rose-200 opacity-30" size={42} />
        <Flower className="absolute top-[30%] left-[25%] text-rose-300 opacity-20" size={32} />
        <Flower className="absolute bottom-[35%] right-[20%] text-rose-300 opacity-20" size={38} />
        <Flower className="absolute top-[15%] right-[25%] text-rose-300 opacity-20" size={28} />
      </div>

      <div className="max-w-3xl w-full bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-xl text-center relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-4 left-4 text-rose-400">
          <Stars size={24} />
        </div>
        <div className="absolute top-4 right-4 text-rose-400">
          <Stars size={24} />
        </div>
        
        {/* Main content */}
        <div className="relative z-10 space-y-6">
          <div className="flex justify-center items-center gap-3 mb-6">
            <Ring className="text-rose-500" size={32} />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800">
              Wishing a Lifetime of Love
            </h1>
            <Ring className="text-rose-500" size={32} />
          </div>

          <h2 className="text-3xl md:text-4xl font-semibold text-rose-600 mb-4">
            Happy Ring Ceremony!
          </h2>
          
          <div className="text-2xl md:text-3xl font-serif text-gray-700 mb-6">
            Mritunjay & Charmitra 
          </div>

          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1545232979-8bf68ee9b1af?auto=format&fit=crop&w=1000&q=80"
              alt="Ring Ceremony Couple"
              className="rounded-lg shadow-lg mx-auto mb-8 max-w-full h-auto"
            />
            
            <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2">
              <Heart className="text-rose-500 fill-rose-500" size={40} />
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-700 italic mt-12 px-4">
            "May your love story continue to unfold like a beautiful dream, and may your ring ceremony mark the beginning of a lifetime filled with joy, understanding, and endless love. Wishing you both a journey ahead that's as precious as the rings you exchange today!"
          </p>

          <div className="mt-8 text-rose-500 flex justify-center items-center gap-2">
            <Heart size={20} className="fill-rose-500" />
            <span className="text-lg">Forever & Always</span>
            <Heart size={20} className="fill-rose-500" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;