import React from 'react';

interface WIPSignProps {
  isVisible: boolean;
}

export default function WIPSign({ isVisible }: WIPSignProps) {
  return (
    <div className={`absolute z-40 ${isVisible ? 'wip-sign-settling' : ''} ${
      // Responsive positioning - avoid mobile navigation area
      'top-4 right-4 md:top-8 md:right-8'
    }`}>
      <div className="wip-sign">
        {/* Sign Post - smaller on mobile */}
        <div className="w-1.5 h-20 md:w-2 md:h-32 bg-gradient-to-b from-amber-600 to-amber-800 mx-auto mb-2 rounded-full shadow-lg"></div>
        
        {/* Sign Board - responsive sizing */}
        <div className="bg-gradient-to-b from-yellow-400 to-yellow-500 p-2 md:p-4 rounded-lg shadow-2xl border-2 md:border-4 border-yellow-600 transform -rotate-3 hover:rotate-0 transition-transform duration-300">
          {/* Warning Icon */}
          <div className="text-center mb-1 md:mb-2">
            <div className="text-xl md:text-3xl">⚠️</div>
          </div>
          
          {/* Main Text - responsive sizing */}
          <div className="text-center font-bold text-black">
            <div className="text-sm md:text-lg mb-1">CAUTION</div>
            <div className="text-xs md:text-sm mb-1 md:mb-2">WORK IN</div>
            <div className="text-xs md:text-sm mb-1 md:mb-2">PROGRESS</div>
          </div>
          
          {/* Cute Details - responsive */}
          <div className="text-center text-xs text-gray-800 mt-1 md:mt-2 border-t border-yellow-600 pt-1 md:pt-2">
            <div className="mb-1 text-xs">🚧 Under Construction 🚧</div>
            <div className="text-xs hidden md:block">More features coming soon!</div>
            <div className="text-xs md:hidden">More soon!</div>
          </div>
          
          {/* Cute Character */}
          <div className="text-center mt-1 md:mt-2">
            <div className="text-lg md:text-2xl animate-pulse">👷‍♂️</div>
          </div>
        </div>
        
        {/* Sign Shadow */}
        <div className="absolute top-0 left-0 w-full h-full bg-black/20 rounded-lg transform translate-x-1 translate-y-1 -z-10"></div>
      </div>

      <style jsx>{`
        .wip-sign {
          position: relative;
          filter: drop-shadow(0 10px 20px rgba(0,0,0,0.3));
          /* Scale down on mobile */
          transform: scale(0.8);
        }

        @media (min-width: 768px) {
          .wip-sign {
            transform: scale(1);
          }
        }

        .wip-sign:hover {
          transform: scale(0.85);
          transition: transform 0.3s ease;
        }

        @media (min-width: 768px) {
          .wip-sign:hover {
            transform: scale(1.05);
          }
        }

        /* Progressive bounce settling animation with MUCH bigger initial bounces */
        .wip-sign-settling {
          animation: bounce-settle 10s cubic-bezier(0.25, 0.46, 0.45, 0.94) forwards;
        }

        @keyframes bounce-settle {
          /* MASSIVE initial bounces - much more dramatic! */
          0% { transform: translateY(0px) scale(0.8); }
          1.5% { transform: translateY(-60px) scale(0.8); }
          3% { transform: translateY(0px) scale(0.8); }
          4.5% { transform: translateY(-55px) scale(0.8); }
          6% { transform: translateY(0px) scale(0.8); }
          7.5% { transform: translateY(-50px) scale(0.8); }
          9% { transform: translateY(0px) scale(0.8); }
          10.5% { transform: translateY(-45px) scale(0.8); }
          12% { transform: translateY(0px) scale(0.8); }
          
          /* Large bounces */
          14% { transform: translateY(-40px) scale(0.8); }
          16% { transform: translateY(0px) scale(0.8); }
          18% { transform: translateY(-35px) scale(0.8); }
          20% { transform: translateY(0px) scale(0.8); }
          22% { transform: translateY(-30px) scale(0.8); }
          24% { transform: translateY(0px) scale(0.8); }
          26% { transform: translateY(-25px) scale(0.8); }
          28% { transform: translateY(0px) scale(0.8); }
          
          /* Medium bounces */
          32% { transform: translateY(-20px) scale(0.8); }
          36% { transform: translateY(0px) scale(0.8); }
          40% { transform: translateY(-15px) scale(0.8); }
          44% { transform: translateY(0px) scale(0.8); }
          48% { transform: translateY(-12px) scale(0.8); }
          52% { transform: translateY(0px) scale(0.8); }
          
          /* Smaller bounces */
          56% { transform: translateY(-10px) scale(0.8); }
          60% { transform: translateY(0px) scale(0.8); }
          64% { transform: translateY(-8px) scale(0.8); }
          68% { transform: translateY(0px) scale(0.8); }
          72% { transform: translateY(-6px) scale(0.8); }
          76% { transform: translateY(0px) scale(0.8); }
          
          /* Tiny bounces */
          80% { transform: translateY(-4px) scale(0.8); }
          84% { transform: translateY(0px) scale(0.8); }
          88% { transform: translateY(-2px) scale(0.8); }
          92% { transform: translateY(0px) scale(0.8); }
          
          /* Final micro bounces and settle */
          95% { transform: translateY(-1px) scale(0.8); }
          97% { transform: translateY(0px) scale(0.8); }
          99% { transform: translateY(-0.5px) scale(0.8); }
          100% { transform: translateY(0px) scale(0.8); }
        }

        /* Desktop version of the animation */
        @media (min-width: 768px) {
          @keyframes bounce-settle {
            0% { transform: translateY(0px) scale(1); }
            1.5% { transform: translateY(-80px) scale(1); }
            3% { transform: translateY(0px) scale(1); }
            4.5% { transform: translateY(-75px) scale(1); }
            6% { transform: translateY(0px) scale(1); }
            7.5% { transform: translateY(-70px) scale(1); }
            9% { transform: translateY(0px) scale(1); }
            10.5% { transform: translateY(-65px) scale(1); }
            12% { transform: translateY(0px) scale(1); }
            
            14% { transform: translateY(-55px) scale(1); }
            16% { transform: translateY(0px) scale(1); }
            18% { transform: translateY(-50px) scale(1); }
            20% { transform: translateY(0px) scale(1); }
            22% { transform: translateY(-45px) scale(1); }
            24% { transform: translateY(0px) scale(1); }
            26% { transform: translateY(-40px) scale(1); }
            28% { transform: translateY(0px) scale(1); }
            
            32% { transform: translateY(-35px) scale(1); }
            36% { transform: translateY(0px) scale(1); }
            40% { transform: translateY(-30px) scale(1); }
            44% { transform: translateY(0px) scale(1); }
            48% { transform: translateY(-25px) scale(1); }
            52% { transform: translateY(0px) scale(1); }
            
            56% { transform: translateY(-20px) scale(1); }
            60% { transform: translateY(0px) scale(1); }
            64% { transform: translateY(-15px) scale(1); }
            68% { transform: translateY(0px) scale(1); }
            72% { transform: translateY(-10px) scale(1); }
            76% { transform: translateY(0px) scale(1); }
            
            80% { transform: translateY(-6px) scale(1); }
            84% { transform: translateY(0px) scale(1); }
            88% { transform: translateY(-3px) scale(1); }
            92% { transform: translateY(0px) scale(1); }
            
            95% { transform: translateY(-1px) scale(1); }
            97% { transform: translateY(0px) scale(1); }
            99% { transform: translateY(-0.5px) scale(1); }
            100% { transform: translateY(0px) scale(1); }
          }
        }
      `}</style>
    </div>
  );
}