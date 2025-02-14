import { useState, useRef, useEffect } from "react";
import { MdPlayArrow, MdPause, MdVolumeUp, MdVolumeOff } from "react-icons/md";

export const VideoPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef<HTMLVideoElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().then(() => {
        setIsPlaying(true);
      }).catch(error => {
        console.log("Auto-play was prevented:", error);
        setIsPlaying(false);
      });

      videoRef.current.addEventListener('playing', () => setIsPlaying(true));
      videoRef.current.addEventListener('pause', () => setIsPlaying(false));
      videoRef.current.addEventListener('ended', () => {
        if (videoRef.current) {
          videoRef.current.currentTime = 0;
          videoRef.current.play().catch(() => setIsPlaying(false));
        }
      });
      videoRef.current.addEventListener('timeupdate', updateProgress);
    }

    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener('timeupdate', updateProgress);
      }
    };
  }, []);

  const updateProgress = () => {
    if (videoRef.current) {
      const percentage = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(percentage);
    }
  };

  const handleProgressBarClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (progressBarRef.current && videoRef.current) {
      const rect = progressBarRef.current.getBoundingClientRect();
      const position = (e.clientX - rect.left) / rect.width;
      const time = position * videoRef.current.duration;
      videoRef.current.currentTime = Math.max(0, Math.min(time, videoRef.current.duration));
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const handleVideoClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (
      e.target instanceof Element && 
      (e.target.closest('.video-controls') || 
       e.target.closest('.progress-bar'))
    ) {
      return;
    }
    togglePlay();
  };

  return (
    <div
      className="relative w-full max-w-[280px] rounded-xl overflow-hidden shadow-2xl border border-gray-200/50 bg-white group cursor-pointer h-[600px]"
      onClick={handleVideoClick}
    >
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        autoPlay={true}
        loop
        playsInline
        muted={isMuted}
        preload="auto"
        poster="/locator-first-frame.png"
        onLoadedMetadata={(e) => {
          e.currentTarget.currentTime = 0;
        }}
        onError={(e) => {
          console.error('Video loading error:', e);
          e.currentTarget.src = '/locator-producthunt.mp4';
        }}
      >
        <source src="/locator-producthunt.mov" type='video/quicktime; codecs="hvc1"' />
        <source src="/locator-producthunt.mp4" type="video/mp4" />
        <p>Your browser does not support the video tag. You can 
          <a href="/locator-producthunt.mov" className="text-blue-500 hover:underline"> download the video</a> instead.
        </p>
      </video>
      
      <div 
        ref={progressBarRef}
        onClick={(e) => {
          e.stopPropagation();
          handleProgressBarClick(e);
        }}
        className="progress-bar absolute bottom-12 left-0 right-0 h-2 bg-gray-200/30 cursor-pointer group-hover:bg-gray-200/50 transition-colors px-4"
      >
        <div className="relative h-full">
          <div 
            className="absolute left-0 top-0 h-full bg-white/70 group-hover:bg-white transition-all duration-150"
            style={{ width: `${progress}%` }}
          />
          <div 
            className="absolute top-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-white shadow-md transition-all duration-150 opacity-0 group-hover:opacity-100"
            style={{ left: `${progress}%`, transform: 'translate(-50%, -50%)' }}
          />
        </div>
      </div>

      <div className="video-controls absolute bottom-4 right-4 flex gap-2">
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleMute();
          }}
          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
        >
          {isMuted ? <MdVolumeOff size={24} /> : <MdVolumeUp size={24} />}
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            togglePlay();
          }}
          className="bg-black/50 hover:bg-black/70 text-white rounded-full p-2 transition-opacity opacity-0 group-hover:opacity-100"
        >
          {isPlaying ? <MdPause size={24} /> : <MdPlayArrow size={24} />}
        </button>
      </div>
    </div>
  );
};
