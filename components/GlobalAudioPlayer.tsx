'use client';

import { useEffect } from 'react';
import { useAudio } from '@/context/AudioContext';
import styles from './GlobalAudioPlayer.module.css';

export default function GlobalAudioPlayer() {
  const { currentTrack, isPlaying, togglePlay, audioRef } = useAudio();

  useEffect(() => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.play().catch(() => {});
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying, currentTrack, audioRef]);

  if (!currentTrack) return null;

  return (
    <div className={styles.playerBar}>
      <audio ref={audioRef} src={currentTrack.audioSrc} />

      <div className={styles.trackInfo}>
        <img
          src={currentTrack.coverArt}
          alt={currentTrack.title}
          className={styles.coverArt}
        />
        <div>
          <p className={styles.title}>{currentTrack.title}</p>
          <p className={styles.artist}>{currentTrack.artist || currentTrack.role}</p>
        </div>
      </div>

      <div className={styles.controls}>
        <button onClick={togglePlay} className={styles.playBtn}>
          {isPlaying ? 'Pause' : 'Play'}
        </button>
      </div>
    </div>
  );
}