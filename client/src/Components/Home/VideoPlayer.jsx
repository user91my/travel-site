import React, { useEffect, useRef } from "react";
import "./videoplayer.css";

const importAll = (reqFunc) =>
  // Data structure for "reqFunc.keys()" :-
  //  [
  //   './vid-01.mp4',
  //   './vid-02.mp4',
  //    ...
  //  ]
  reqFunc.keys().reduce((acc, item) => {
    acc[item.replace("./", "")] = reqFunc(item);
    return acc;
  }, {});

// Data structure for "videoImportsObj" :-
//  {
//   'vid-01.mp4' : "/static/media/vid-01.40602fad45e22259a44f.mp4"
//   'vid-02.mp4' : "/static/media/vid-02.9b229edea92cc1c40ecf.mp4"
//    ...
//  }
const videoImportsObj = importAll(
  require.context("../../Assets", false, /\.(mp4)$/)
);
const videoImportsArr = Object.values(videoImportsObj);

// HTML Audio/Video DOM Reference (Methods/Properties/Events)
// https://www.w3schools.com/tags/ref_av_dom.asp
const VideoPlayer = () => {
  const videoElOne = useRef();
  const videoElTwo = useRef();
  let currentVideoIndex = 0;
  let activeVideoEl = videoElOne;
  let preloadVideoEl = videoElTwo;

  const preloadNextVideo = () => {
    // "preloadVideoIndex" is the index of the next video to be played.
    let preloadVideoIndex = (currentVideoIndex + 1) % videoImportsArr.length;
    // Preloads the video on the "src" of video element that is NOT active.
    // Once preloaded, the video automatically starts playing.
    activeVideoEl === videoElOne
      ? (videoElTwo.current.src = videoImportsArr[preloadVideoIndex])
      : (videoElOne.current.src = videoImportsArr[preloadVideoIndex]);
  };

  const currentVideoPlaying = () => {
    const duration = activeVideoEl.current.duration; // Total running time of video.
    const currentTime = activeVideoEl.current.currentTime; // Current time of video.
    const threshold = 2; // Threshold number of seconds.

    // When the remaining time of video currently played is lesser than
    // the threshold.
    if (duration - currentTime < threshold) {
      //
      // Preloads and starts playing the next video.
      preloadNextVideo();

      // Removes the "timeupdate" event from the currently active
      // video element ("activeVideoEl").
      activeVideoEl.current.removeEventListener(
        "timeupdate",
        currentVideoPlaying
      );

      // The video element with the preloaded video ("preloadVideoEl") is
      // assigned the higher z-Index and will block off the actively running video
      // ("activeVideoEl") that is about to end.
      activeVideoEl.current.style.zIndex = 1;
      preloadVideoEl.current.style.zIndex = 2;

      // Switching references; "preloadVideoEl" (which is now playing and has the
      // higher z-Index) becomes the new "activeVideoEl".
      [activeVideoEl, preloadVideoEl] = [preloadVideoEl, activeVideoEl];

      // The new "activeVideoEl" is given a new instance of a "timeupdate"
      // event listener.
      activeVideoEl.current.addEventListener("timeupdate", currentVideoPlaying);

      // Updates the currentVideoIndex by 1.
      // The modulo expression ensures that "currentVideoIndex" does not exceed
      // the maximum index value of "videoImportsArr".
      // Also, "currentVideoIndex" will subsequently revert to 0 after the maximum
      // index is reached, therefore functioning as a carousel video player.
      currentVideoIndex = (currentVideoIndex + 1) % videoImportsArr.length;
    }
  };

  // ON FIRST RENDER.
  useEffect(() => {
    // Loads and plays the first video in "videoImportsArr".
    activeVideoEl.current.src = videoImportsArr[currentVideoIndex];
    // The "timeupdate" event fires when the playing position of a video has changed.
    activeVideoEl.current.addEventListener("timeupdate", currentVideoPlaying);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  return (
    <>
      <video
        ref={videoElOne}
        className="videoElOne"
        muted
        autoPlay
        type="video/mp4"
      ></video>
      <video
        ref={videoElTwo}
        className="videoElTwo"
        muted
        autoPlay
        type="video/mp4"
      ></video>
    </>
  );
};

export default VideoPlayer;
