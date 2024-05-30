import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player';
import Hls from 'hls.js';

interface HLSPlayerProps {
  url: string;
}

const HLSPlayer: React.FC<HLSPlayerProps> = ({ url }) => {
    const playerRef = useRef<ReactPlayer | null>(null);

    useEffect(() => {
        if (Hls.isSupported()) {
        const hls = new Hls();
        hls.loadSource(url);
        hls.attachMedia(playerRef.current!.getInternalPlayer() as HTMLVideoElement);
        } else if (playerRef.current!.getInternalPlayer().canPlayType('application/vnd.apple.mpegurl')) {
        playerRef.current!.getInternalPlayer().src = url;
        }
    }, [url]);

    return (
        <ReactPlayer
        ref={playerRef}
        url={url}
        controls={true}
        width="100%"
        height="100%"
        config={{
            file: {
            forceHLS: true,
            },
        }}
        />
    );
};

export default HLSPlayer;
