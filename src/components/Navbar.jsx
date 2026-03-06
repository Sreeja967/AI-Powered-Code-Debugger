import React from 'react'

const Navbar = () => {
  return (
    <div 
      className="flex items-center justify-between h-[100px] 
      bg-zinc-900/70 backdrop-blur-md border-b border-zinc-800 shadow-lg"
      style={{ padding: "0px 150px" }}
    >
      {/* LEFT SIDE */}
      <div className="flex items-center gap-[14px] group cursor-pointer transition-all duration-300">

        <img 
          src="/debugicon.png"
          alt="DebugMaster AI Logo"
          className="w-[70px] transition-all duration-300 group-hover:scale-105"
        />

        <span className="text-3xl font-bold tracking-wide
          transition-all duration-300
          group-hover:scale-105
          group-hover:drop-shadow-[0_0_15px_rgba(168,85,247,0.7)]">

          <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            DebugMaster AI
          </span>
        </span>
      </div>

      {/* RIGHT SIDE */}
      <div className="hidden md:flex flex-col items-end leading-tight
        cursor-pointer transition-all duration-300
        hover:scale-105">

        <span className="text-lg font-semibold 
          bg-gradient-to-r from-purple-400 to-pink-500 
          bg-clip-text text-transparent
          transition-all duration-300
          hover:drop-shadow-[0_0_12px_rgba(168,85,247,0.6)]">
          
          Smarter debugging. Stronger software.
        </span>

        <span className="text-sm text-zinc-400 tracking-wide mt-2
          transition-all duration-300
          hover:text-purple-300">
          
          • Solve • Learn • Improve • Repeat
        </span>

      </div>
    </div>
  )
}

export default Navbar