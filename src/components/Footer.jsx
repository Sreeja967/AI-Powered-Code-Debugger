import React from "react";

const Footer = () => {
  return (
    <footer className="bg-zinc-900/80 backdrop-blur-md border-t border-zinc-800 mt-10">
      <div className="max-w-7xl mx-auto px-10 py-8 flex flex-col md:flex-row justify-between items-center gap-6">
        
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
            DebugMaster AI
          </h2>
          <p className="text-zinc-400 text-sm mt-2">
            Smarter debugging. Stronger software.
          </p>
        </div>

        {/* Center Section */}
        <div className="text-zinc-500 text-sm text-center">
          Solve • Learn • Improve • Repeat
        </div>

        {/* Right Section */}
        <div className="text-zinc-500 text-sm text-center md:text-right">
          © {new Date().getFullYear()} DebugMaster AI. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;