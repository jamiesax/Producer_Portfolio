'use client';

import { createContext, useContext, useState, useRef } from 'react';

const AudioContext = createContext();

export function AudioProvider({ children }) {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Play a specific track
  const playTrack = (track) => {
    if (currentTrack?.id === track.id) {
      // Toggle play/pause if clicking the same track
      togglePlay();
    } else {
      setCurrentTrack(track);
      setIsPlaying(true);
    }
  };

  // Toggle play / pause state
  const togglePlay = () => {
    if (!currentTrack) return;
    setIsPlaying((prev) => !prev);
  };

  return (
    <AudioContext.Provider
      value={{
        currentTrack,
        isPlaying,
        playTrack,
        togglePlay,
        audioRef,
      }}
    >
      {children}
    </AudioContext.Provider>
  );
}

// Custom Hook for clean component access
export function useAudio() {
  return useContext(AudioContext);
}