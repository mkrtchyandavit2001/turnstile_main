"use client";

import React from "react";
import dynamic from "next/dynamic";

const ReactPlayer = dynamic(() => import("react-player"), { ssr: false });

interface VideoComponentProps {
    path: string;
    thumb?: string
}
const VideoComponent = ({ path, thumb }:VideoComponentProps) => {
  return (
    <div className="w-full h-full"> 
      <ReactPlayer
        url={path} 
        controls
        light={thumb}
        width="100%"
        height="100%"
      />
    </div>
  );
};

export default VideoComponent;
