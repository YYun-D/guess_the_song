"use client";

import { useEffect, useRef } from 'react';
import YouTubePlayer from 'youtube-player';

export default function SongPage() {
  const playerRef = useRef(null);

  useEffect(() => {
    if (playerRef.current) {
      const player = YouTubePlayer(playerRef.current);
      player.loadVideoById('G4BuSPt9iNQ');
    }
  }, []);


  return (
    <main>
      <textarea></textarea>
    </main>
  );
}