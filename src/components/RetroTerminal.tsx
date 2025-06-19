import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Zap, Cpu, HardDrive, Wifi, Smartphone, Monitor } from 'lucide-react';

export default function RetroTerminal() {
  const [currentLine, setCurrentLine] = useState('');
  const [terminalHistory, setTerminalHistory] = useState<string[]>([
    'RETRO-OS v2.1.4 BOOTING...',
    'Loading system drivers... OK',
    'Initializing neural network... OK',
    'Connecting to mainframe... OK',
    '',
    'Welcome to RETRO-TERMINAL',
    'Type "help" for available commands',
    ''
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const [scanlines, setScanlines] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const terminalRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const commands = {
    help: [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - About this terminal',
      '  matrix   - Enter the matrix',
      '  hack     - Initiate hacking sequence',
      '  clear    - Clear terminal',
      '  exit     - Exit terminal',
      '  scan     - Toggle scanlines',
      '  mobile   - Mobile device info'
    ],
    about: [
      'RETRO-TERMINAL v2.1.4',
      'A nostalgic journey back to the 80s',
      'Built with React and pure CSS magic',
      'Featuring authentic CRT monitor effects',
      'Now optimized for mobile devices!'
    ],
    matrix: [
      'Entering the Matrix...',
      '01001000 01100101 01101100 01101100 01101111',
      'Reality is an illusion',
      'Wake up, Neo...'
    ],
    hack: [
      'Initiating hacking sequence...',
      'Scanning for vulnerabilities...',
      'Found 42 exploits',
      'Bypassing firewall... 100%',
      'Access granted. Welcome, hacker.'
    ],
    mobile: [
      `Device: ${isMobile ? 'Mobile/Tablet' : 'Desktop'}`,
      `Screen: ${window.innerWidth}x${window.innerHeight}`,
      `Touch: ${('ontouchstart' in window) ? 'Supported' : 'Not supported'}`,
      `User Agent: ${navigator.userAgent.slice(0, 50)}...`
    ],
    clear: [],
    exit: ['Goodbye, user.'],
    scan: ['Scanlines toggled']
  };

  const executeCommand = async (cmd: string) => {
    const command = cmd.toLowerCase().trim();
    
    if (command === 'clear') {
      setTerminalHistory([]);
      setCurrentLine('');
      return;
    }
    
    if (command === 'scan') {
      setScanlines(!scanlines);
    }
    
    const response = commands[command as keyof typeof commands] || [`Command not found: ${cmd}`];
    
    setTerminalHistory(prev => [...prev, `> ${cmd}`, ...response, '']);
    setCurrentLine('');
    
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !isTyping) {
      executeCommand(currentLine);
    }
  };

  // Focus input when terminal is tapped on mobile
  const handleTerminalClick = () => {
    if (isMobile && inputRef.current) {
      inputRef.current.focus();
    }
  };

  // Quick command buttons for mobile
  const quickCommands = ['help', 'about', 'matrix', 'hack', 'clear'];

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-2 sm:p-4">
      <div className="relative w-full max-w-6xl">
        {/* Mobile-friendly monitor frame */}
        <div className={`bg-gray-800 rounded-2xl sm:rounded-3xl shadow-2xl border-2 sm:border-4 border-gray-700 ${
          isMobile ? 'p-3' : 'p-8'
        }`}>
          <div className={`bg-gray-900 rounded-xl sm:rounded-2xl ${isMobile ? 'p-2' : 'p-4'}`}>
            
            {/* Monitor header - responsive */}
            <div className="flex justify-between items-center mb-2 sm:mb-4">
              <div className="flex gap-1 sm:gap-2">
                <div className="w-2 h-2 sm:w-4 sm:h-4 bg-red-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-4 sm:h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-2 h-2 sm:w-4 sm:h-4 bg-green-500 rounded-full"></div>
              </div>
              
              {/* Device indicator */}
              <div className="flex gap-2 sm:gap-4 text-green-400">
                {isMobile ? (
                  <Smartphone className="w-3 h-3 sm:w-5 sm:h-5" />
                ) : (
                  <Monitor className="w-3 h-3 sm:w-5 sm:h-5" />
                )}
                <Cpu className="w-3 h-3 sm:w-5 sm:h-5" />
                <HardDrive className="w-3 h-3 sm:w-5 sm:h-5" />
                <Wifi className="w-3 h-3 sm:w-5 sm:h-5" />
                <Zap className="w-3 h-3 sm:w-5 sm:h-5" />
              </div>
            </div>

            {/* Terminal screen - responsive sizing */}
            <div 
              className={`relative bg-black rounded-lg overflow-hidden cursor-text ${
                scanlines ? 'crt-screen' : ''
              }`}
              style={{ 
                height: isMobile ? '60vh' : '500px',
                boxShadow: 'inset 0 0 50px rgba(0, 255, 0, 0.1)'
              }}
              onClick={handleTerminalClick}
            >
              {scanlines && (
                <div className="absolute inset-0 pointer-events-none scanlines"></div>
              )}

              {/* Terminal content */}
              <div 
                ref={terminalRef}
                className={`h-full overflow-y-auto font-mono text-green-400 ${
                  isMobile ? 'p-3 text-sm' : 'p-6 text-base'
                }`}
              >
                {terminalHistory.map((line, index) => (
                  <div key={index} className="mb-1 break-words">
                    {line}
                  </div>
                ))}
                
                {/* Input line */}
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2 flex-shrink-0">$</span>
                  <input
                    ref={inputRef}
                    type="text"
                    value={currentLine}
                    onChange={(e) => setCurrentLine(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-transparent outline-none flex-1 text-green-400 min-w-0"
                    disabled={isTyping}
                    autoFocus={!isMobile}
                    placeholder={isMobile ? "Tap to type..." : ""}
                  />
                  <span className="animate-pulse text-green-400 ml-1">█</span>
                </div>
              </div>

              {/* CRT glow effect */}
              <div className="absolute inset-0 bg-green-400 opacity-5 pointer-events-none rounded-lg"></div>
            </div>

            {/* Mobile quick commands */}
            {isMobile && (
              <div className="mt-3 flex flex-wrap gap-2 justify-center">
                {quickCommands.map((cmd) => (
                  <button
                    key={cmd}
                    onClick={() => executeCommand(cmd)}
                    className="px-3 py-1 bg-green-600/20 text-green-400 text-xs rounded border border-green-600/30 hover:bg-green-600/30 transition-colors font-mono"
                  >
                    {cmd}
                  </button>
                ))}
              </div>
            )}

            {/* Monitor brand - responsive */}
            <div className="text-center mt-2 sm:mt-4">
              <div className={`inline-flex items-center gap-2 text-gray-400 ${
                isMobile ? 'text-xs' : 'text-sm'
              }`}>
                <Terminal className={`${isMobile ? 'w-3 h-3' : 'w-4 h-4'}`} />
                RETRO-MONITOR 2000
                {isMobile && <span className="text-green-400">📱</span>}
              </div>
            </div>
          </div>
        </div>

        {/* Mobile instructions */}
        {isMobile && (
          <div className="mt-4 text-center">
            <div className="inline-block bg-black/80 backdrop-blur-lg rounded-lg px-4 py-2 border border-white/20">
              <p className="text-green-400 text-xs font-mono">
                💡 Tap screen to focus • Use quick buttons • Swipe to scroll
              </p>
            </div>
          </div>
        )}
      </div>

      <style jsx>{`
        .crt-screen {
          animation: flicker 2s infinite linear alternate;
        }
        
        .scanlines {
          background: linear-gradient(
            transparent 50%,
            rgba(0, 255, 0, 0.02) 50%
          );
          background-size: 100% ${isMobile ? '2px' : '4px'};
        }
        
        @keyframes flicker {
          0% { opacity: 1; }
          98% { opacity: 1; }
          99% { opacity: 0.98; }
          100% { opacity: 1; }
        }

        /* Mobile-specific styles */
        @media (max-width: 768px) {
          .crt-screen {
            /* Reduce flicker intensity on mobile for better battery life */
            animation: flicker 4s infinite linear alternate;
          }
        }
      `}</style>
    </div>
  );
}