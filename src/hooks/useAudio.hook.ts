import { useEffect, useState } from "react";

const useAudio = (url: string) => {
  const [audio] = useState(new Audio(url));
  const [playing, setPlaying] = useState(false);

  const toggle = (playingState: boolean) => setPlaying(playingState);

  useEffect(() => {
    if (playing) {
      audio.play();
    } else {
      audio.pause();
    }
  },
    [playing, audio]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, [audio]);

  return [toggle];
};

export default useAudio;
