import React, { useState, useEffect, useRef } from 'react';
import { Terminal, Zap, Cpu, HardDrive, Wifi } from 'lucide-react';

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
  const terminalRef = useRef<HTMLDivElement>(null);

  const commands = {
    help: [
      'Available commands:',
      '  help     - Show this help message',
      '  about    - About this terminal',
      '  matrix   - Enter the matrix',
      '  hack     - Initiate hacking sequence',
      '  clear    - Clear terminal',
      '  exit     - Exit terminal',
      '  scan     - Toggle scanlines'
    ],
    about: [
      'RETRO-TERMINAL v2.1.4',
      'A nostalgic journey back to the 80s',
      'Built with React and pure CSS magic',
      'Featuring authentic CRT monitor effects'
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

  return (
    <div className="min-h-screen bg-black flex items-center justify-center p-4">
      <div className="relative">
        <div className="bg-gray-800 p-8 rounded-3xl shadow-2xl border-4 border-gray-700">
          <div className="bg-gray-900 p-4 rounded-2xl">
            <div className="flex justify-between items-center mb-4">
              <div className="flex gap-2">
                <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                <div className="w-4 h-4 bg-yellow-500 rounded-full"></div>
                <div className="w-4 h-4 bg-green-500 rounded-full"></div>
              </div>
              <div className="flex gap-4 text-green-400">
                <Cpu className="w-5 h-5" />
                <HardDrive className="w-5 h-5" />
                <Wifi className="w-5 h-5" />
                <Zap className="w-5 h-5" />
              </div>
            </div>

            <div 
              className={`relative bg-black rounded-lg p-6 font-mono text-green-400 overflow-hidden ${
                scanlines ? 'crt-screen' : ''
              }`}
              style={{ 
                width: '800px', 
                height: '500px',
                boxShadow: 'inset 0 0 50px rgba(0, 255, 0, 0.1)'
              }}
            >
              {scanlines && (
                <div className="absolute inset-0 pointer-events-none scanlines"></div>
              )}

              <div 
                ref={terminalRef}
                className="h-full overflow-y-auto"
              >
                {terminalHistory.map((line, index) => (
                  <div key={index} className="mb-1">
                    {line}
                  </div>
                ))}
                
                <div className="flex items-center">
                  <span className="text-yellow-400 mr-2">$</span>
                  <input
                    type="text"
                    value={currentLine}
                    onChange={(e) => setCurrentLine(e.target.value)}
                    onKeyPress={handleKeyPress}
                    className="bg-transparent outline-none flex-1 text-green-400"
                    disabled={isTyping}
                    autoFocus
                  />
                  <span className="animate-pulse text-green-400">█</span>
                </div>
              </div>

              <div className="absolute inset-0 bg-green-400 opacity-5 pointer-events-none rounded-lg"></div>
            </div>

            <div className="text-center mt-4">
              <div className="inline-flex items-center gap-2 text-gray-400 text-sm">
                <Terminal className="w-4 h-4" />
                RETRO-MONITOR 2000
              </div>
            </div>
          </div>
        </div>
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
          background-size: 100% 4px;
        }
        
        @keyframes flicker {
          0% { opacity: 1; }
          98% { opacity: 1; }
          99% { opacity: 0.98; }
          100% { opacity: 1; }
        }
      `}</style>
    </div>
  );
}