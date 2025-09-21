"use client";
import { useState } from 'react';
import { VideoContainer, Video } from './VideoBackground.styles';


export const VideoBackground = () => {
  const [videoLoaded, setVideoLoaded] = useState(false);

  return (
    <VideoContainer>
      <Video
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
        onLoadedMetadata={() => setVideoLoaded(true)}
        onCanPlay={() => setVideoLoaded(true)}
        style={{ 
          opacity: videoLoaded ? 0.8 : 0.3
        }}
      >
        <source src="/aboboda.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </Video>
    </VideoContainer>
  );
};
