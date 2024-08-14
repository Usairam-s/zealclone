import React from "react";

import { AboutVideoContainer } from "../../components/mui/About";

export default function AboutVideo() {
  return (
    <AboutVideoContainer>
      <video autoPlay muted loop className="video" src="/aboutVideo.mp4">
        Your browser does not support the video tag.
      </video>
    </AboutVideoContainer>
  );
}
