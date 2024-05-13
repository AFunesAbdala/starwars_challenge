"use client"

import { useEffect, useState } from 'react';

const VideoComponent = (props) => {

    const {
        className,
        src
    } = props

    const [isPlaying, setIsPlaying] = useState(true)

    useEffect(() => {
        const stopVideo = () => {
            setIsPlaying(false)
        }

        setIsPlaying(true)

        return () => {
            stopVideo()
        };
    }, []);

    return (
        <video id="video" autoPlay={isPlaying} loop className={className}>
            <source src={src} type="video/mp4" />
        </video>
    );
};

export default VideoComponent;