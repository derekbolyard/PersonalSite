import { useState, useEffect } from 'react';

interface UseTypewriterProps {
  strings: string[];
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenStrings?: number;
}

export function useTypewriter({ 
  strings, 
  typeSpeed = 100, 
  deleteSpeed = 50, 
  delayBetweenStrings = 2000 
}: UseTypewriterProps) {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentString = strings[currentIndex];
    const speed = isDeleting ? deleteSpeed : typeSpeed;
    
    if (!isDeleting && currentText === currentString) {
      setTimeout(() => setIsDeleting(true), delayBetweenStrings);
      return;
    }
    
    if (isDeleting && currentText === '') {
      setIsDeleting(false);
      setCurrentIndex((prev) => (prev + 1) % strings.length);
      return;
    }
    
    const timeout = setTimeout(() => {
      setCurrentText(prev => 
        isDeleting 
          ? prev.slice(0, -1)
          : currentString.slice(0, prev.length + 1)
      );
    }, speed);
    
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, strings, typeSpeed, deleteSpeed, delayBetweenStrings]);

  return currentText;
}