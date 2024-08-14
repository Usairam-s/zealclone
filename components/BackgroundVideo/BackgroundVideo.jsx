import React from "react";
import { Box, Typography } from "@mui/material";
import styles from "./BackgroundVideo.module.css";

export default function BackgroundVideo() {
  return (
    <Box className={styles.videoContainer}>
      <video autoPlay muted loop className={styles.video} src="/video.mp4">
        Your browser does not support the video tag.
      </video>

      <Box className={styles.overlay} />
    </Box>
  );
}
