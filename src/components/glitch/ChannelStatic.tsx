import React from 'react';

interface ChannelStaticProps {
  isVisible: boolean;
}

export default function ChannelStatic({ isVisible }: ChannelStaticProps) {
  if (!isVisible) return null;

  return (
    <div className="absolute inset-0 z-40">
      <div className="w-full h-full bg-gradient-to-br from-gray-500 via-white to-gray-400 opacity-60 animate-pulse">
        <div className="absolute inset-0 bg-black opacity-50" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='1'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          animation: 'static-noise 0.1s infinite'
        }} />
      </div>
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center">
          <div className="text-6xl font-bold text-white mb-4 animate-pulse">
            📺
          </div>
          <div className="text-2xl font-mono text-white">
            NO SIGNAL
          </div>
          <div className="text-sm font-mono text-gray-300 mt-2">
            PLEASE ADJUST YOUR ANTENNA
          </div>
        </div>
      </div>
    </div>
  );
}