import React from 'react';

interface WIPSignProps {
  isVisible: boolean;
}

export default function WIPSign({ isVisible }: WIPSignProps) {
  return (
    <div className={`absolute top-8 right-8 z-40 ${isVisible ? 'wip-sign-settling' : ''}`}>
      <div className="wip-sign">
        {/* Sign Post */}
        <div className="w-2 h-32 bg-gradient-to-b from-amber-600 to-amber-800 mx-auto mb-2 rounded-full shadow-lg"></div>
        
        {/* Sign Board */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 p-4 rounded-lg shadow-2xl border-4 border-yellow-600 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          {/* Warning Icon */}
          <div className="text-center mb-2">
            <div className="text-3xl">⚠️</div>
          </div>
          
          {/* Main Text */}
          <div className="text-center font-bold text-black">
            <div className="text-lg mb-1">CAUTION</div>
            <div className="text-sm mb-2">WORK IN</div>
            <div className="text-sm mb-2">PROGRESS</div>
          </div>
          
          {/* Cute Details */}
          <div className="text-center text-xs text-gray-800 mt-2 border-t border-yellow-600 pt-2">
            <div className="mb-1">🚧 Under Construction 🚧</div>
            <div className="text-xs">More features coming soon!</div>
          </div>
          
          {/* Cute Character */}
          <div className="text-center mt-2">
            <div className="text-2xl animate-pulse">👷‍♂️</div>
          </div>
        </div>
        
        {/* Sign Shadow */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
      </div>

      <style jsx>{`
        .wip-sign {
          position: relative;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
        }

        .wip-sign:hover {
          transform: scale(1.05);
          transition: transform 0.3s ease;
        }

        /* Progressive bounce settling animation with MUCH bigger initial bounces */
        .wip-sign-settling {
          animation: bounce-settle 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes bounce-settle {
          /* MASSIVE initial bounces - much more dramatic! */
          0% { transform: translateY(0px); }
          1.5% { transform: translateY(-80px); }
          3% { transform: translateY(0px); }
          4.5% { transform: translateY(-75px); }
          6% { transform: translateY(0px); }
          7.5% { transform: translateY(-70px); }
          9% { transform: translateY(0px); }
          10.5% { transform: translateY(-65px); }
          12% { transform: translateY(0px); }
          
          /* Large bounces */
          14% { transform: translateY(-55px); }
          16% { transform: translateY(0px); }
          18% { transform: translateY(-50px); }
          20% { transform: translateY(0px); }
          22% { transform: translateY(-45px); }
          24% { transform: translateY(0px); }
          26% { transform: translateY(-40px); }
          28% { transform: translateY(0px); }
          
          /* Medium bounces */
          32% { transform: translateY(-35px); }
          36% { transform: translateY(0px); }
          40% { transform: translateY(-30px); }
          44% { transform: translateY(0px); }
          48% { transform: translateY(-25px); }
          52% { transform: translateY(0px); }
          
          /* Smaller bounces */
          56% { transform: translateY(-20px); }
          60% { transform: translateY(0px); }
          64% { transform: translateY(-15px); }
          68% { transform: translateY(0px); }
          72% { transform: translateY(-10px); }
          76% { transform: translateY(0px); }
          
          /* Tiny bounces */
          80% { transform: translateY(-6px); }
          84% { transform: translateY(0px); }
          88% { transform: translateY(-3px); }
          92% { transform: translateY(0px); }
          
          /* Final micro bounces and settle */
          95% { transform: translateY(-1px); }
          97% { transform: translateY(0px); }
          99% { transform: translateY(-0.5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>
    </div>
  );
}