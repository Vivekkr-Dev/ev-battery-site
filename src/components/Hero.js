function Hero() {
  return (
    <div className="bg-gradient-to-r from-green-800 to-green-500 text-white py-24 px-6 text-center">
      
      <h1 className="text-4xl md:text-6xl font-bold mb-4">
        ⚡ SK Green Energy Solution
      </h1>

      <p className="text-lg md:text-xl mb-6">
        EV Battery Repair & Lithium Battery Services
      </p>

      <div className="bg-yellow-400 text-black px-6 py-2 inline-block rounded-full font-semibold mb-6">
        📞 9852752144 | 7858075494
      </div>

      <div>
        <a
          href="https://wa.me/919852752144"
          className="bg-white text-green-700 px-6 py-2 rounded-full font-semibold hover:bg-gray-200"
        >
          Contact Now
        </a>
      </div>

    </div>
  );
}

export default Hero;