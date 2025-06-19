import { useRef, useCallback } from 'react';

export function useAudio() {
  const audioContextRef = useRef<AudioContext | null>(null);

  const playHailToTheKing = useCallback(() => {
    // Create audio context if it doesn't exist
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const audioContext = audioContextRef.current;
    
    // Create a more complex sound using Web Audio API to simulate the voice
    const oscillator1 = audioContext.createOscillator();
    const oscillator2 = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();
    
    // Connect the audio graph
    oscillator1.connect(filterNode);
    oscillator2.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure the sound to be more voice-like
    oscillator1.type = 'sawtooth';
    oscillator2.type = 'square';
    oscillator1.frequency.setValueAtTime(150, audioContext.currentTime); // Base frequency
    oscillator2.frequency.setValueAtTime(300, audioContext.currentTime); // Harmonic
    
    // Add some filtering to make it sound more voice-like
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(800, audioContext.currentTime);
    filterNode.Q.setValueAtTime(5, audioContext.currentTime);
    
    // Create an envelope for the sound
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
    gainNode.gain.exponentialRampToValueAtTime(0.1, audioContext.currentTime + 0.8);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1.5);
    
    // Modulate the frequency to simulate speech patterns
    const now = audioContext.currentTime;
    
    // "Hail" - rising tone
    oscillator1.frequency.setValueAtTime(150, now);
    oscillator1.frequency.linearRampToValueAtTime(200, now + 0.3);
    
    // "to the" - quick dip
    oscillator1.frequency.linearRampToValueAtTime(180, now + 0.5);
    
    // "king" - emphasis
    oscillator1.frequency.linearRampToValueAtTime(220, now + 0.8);
    
    // "baby" - falling tone
    oscillator1.frequency.linearRampToValueAtTime(160, now + 1.2);
    oscillator1.frequency.linearRampToValueAtTime(140, now + 1.5);
    
    // Start the oscillators
    oscillator1.start(audioContext.currentTime);
    oscillator2.start(audioContext.currentTime);
    
    // Stop after the sound completes
    oscillator1.stop(audioContext.currentTime + 1.5);
    oscillator2.stop(audioContext.currentTime + 1.5);
    
  }, []);

  const playDoomShotgun = useCallback(() => {
    if (!audioContextRef.current) {
      audioContextRef.current = new (window.AudioContext || (window as any).webkitAudioContext)();
    }

    const audioContext = audioContextRef.current;
    
    // Create a shotgun blast sound effect
    const bufferSize = audioContext.sampleRate * 0.3; // 0.3 seconds
    const buffer = audioContext.createBuffer(1, bufferSize, audioContext.sampleRate);
    const data = buffer.getChannelData(0);
    
    // Generate noise for the blast
    for (let i = 0; i < bufferSize; i++) {
      data[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / bufferSize, 2);
    }
    
    const source = audioContext.createBufferSource();
    const gainNode = audioContext.createGain();
    const filterNode = audioContext.createBiquadFilter();
    
    source.buffer = buffer;
    source.connect(filterNode);
    filterNode.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    // Configure for shotgun sound
    filterNode.type = 'lowpass';
    filterNode.frequency.setValueAtTime(400, audioContext.currentTime);
    
    gainNode.gain.setValueAtTime(0.5, audioContext.currentTime);
    gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.3);
    
    source.start();
  }, []);

  return {
    playHailToTheKing,
    playDoomShotgun
  };
}