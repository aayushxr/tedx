import { useState, useEffect } from 'react';

export default function Ex() {
  const [twinklingState, setTwinklingState] = useState<Record<string, number>>({});
  
  const asciiArt = `
010101010101010101                 010101010101010101
010101010101010101                 010101010101010101
  010101010101010101             010101010101010101
  010101010101010101             010101010101010101
    010101010101010101         010101010101010101
    010101010101010101         010101010101010101
      010101010101010101     010101010101010101
      010101010101010101     010101010101010101
        010101010101010101 010101010101010101
        010101010101010101 010101010101010101
         01010101010010010101011010110101010
          101010101010010101011010101010101
          101010101010010101011010101010101
         01010101010100101010110101010101010
        010101010101010101 010101010101010101
        010101010101010101 010101010101010101
      010101010101010101     010101010101010101
      010101010101010101     010101010101010101
    010101010101010101         010101010101010101
    010101010101010101         010101010101010101
  010101010101010101             010101010101010101
  010101010101010101             010101010101010101
010101010101010101                 010101010101010101
010101010101010101                 010101010101010101
`
.trim();

useEffect(() => {
  const updateTwinkling = () => {
    const totalChars = asciiArt.split('').filter(char => char === '0' || char === '1').length;
    const numTwinkle = Math.floor(totalChars * 0.4); // Twinkle ~10% of digits
    const newTwinkling: Record<string, number> = {};
    
    for (let i = 0; i < numTwinkle; i++) {
      const position = `${Math.floor(Math.random() * totalChars)}`;
      const brightness = Math.random() * 0.7 + 0.3; // Random brightness between 0.3 and 1.0
      newTwinkling[position] = brightness;
    }
    setTwinklingState(newTwinkling);
  };

  const interval = setInterval(updateTwinkling, 2000); // Slower update interval for smoother effect
  return () => clearInterval(interval);
}, []);

let binaryIndex = -1;

return (
  <div className="min-h-[200px]  flex justify-center items-center p-4 ">
    <style>
      {`
        .twinkle-char {
          transition: all 2s ease-in-out;
        }
      `}
    </style>
    <pre className="text-red-600 text-[10px] md:text-xs font-mono whitespace-pre transition-all duration-300 ">
      {asciiArt.split('\n').map((line, index) => (
        <div key={index}>
          {line.split('').map((char, charIndex) => {
            if (char === '0' || char === '1') binaryIndex++;
            const brightness = twinklingState[binaryIndex.toString()];
            
            return (
              <span
                key={charIndex}
                className={`twinkle-char ${
                  char === '0' || char === '1'
                    ? 'text-red-600'
                    : ''
                }`}
                style={{
                  opacity: brightness ? brightness : 0.8,
                  color: brightness ? `rgb(255, ${Math.floor(brightness * 255)}, ${Math.floor(brightness * 255)})` : undefined
                }}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </pre>
  </div>
  );
}
