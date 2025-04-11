export default function Hero() {
  return (
    <div className="relative bg-gradient-to-r from-purple-800 via-purple-400 to-blue-500 py-24 md:py-32">
      <div className="absolute inset-0 overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute top-1/4 left-1/6 w-20 h-20 bg-purple-400 rounded-full opacity-20"></div>
        <div className="absolute bottom-1/3 right-1/4 w-32 h-32 bg-pink-300 rounded-full opacity-20"></div>
        <div className="absolute top-1/2 right-1/6 w-16 h-16 bg-yellow-300 rounded-full opacity-20"></div>

        {/* Sparkles */}
        <div className="absolute top-1/6 left-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-white rounded-full opacity-70"></div>
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-white rounded-full opacity-70"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">BSides SWFL 2025</h1>
          <p className="text-xl md:text-2xl text-white">November 7-8, 2025</p>
        </div>
      </div>
    </div>
  )
}