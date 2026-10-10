'use client';

import { useAudio } from '@/context/AudioContext';
import styles from './TrackCard.module.css';

export default function TrackCard({ track }: { track: any }) {
  const { currentTrack, isPlaying, playTrack } = useAudio();
  const isCurrentThisTrack = currentTrack?.id === track.id;

  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={track.coverArt} alt={track.title} className={styles.coverImage} />
        <button
          onClick={() => playTrack(track)}
          className={styles.playOverlayBtn}
          aria-label={isCurrentThisTrack && isPlaying ? 'Pause' : 'Play'}
        >
          {isCurrentThisTrack && isPlaying ? '❚❚' : '▶'}
        </button>
      </div>
      <div className={styles.content}>
        <h3 className={styles.title}>{track.title}</h3>
        <p className={styles.artist}>{track.artist} • <span style={{ color: '#d97706' }}>{track.role}</span></p>
        <div className={styles.meta}>
          <span>BPM: {track.bpm}</span>
          <span>Key: {track.key}</span>
          <span>{track.genre}</span>
        </div>
      </div>
    </div>
  );
}