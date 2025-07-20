import React, { useRef, useState } from "react";
import AudioUploader from "./components/AudioUploader";
import Visualizer from "./components/Visualizer";
import Controls from "./components/Controls";
import { setupAudioContext } from "./utils/audioProcessing";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Container, Box, Typography, Paper, Grid, CssBaseline } from '@mui/material';
import styled, { keyframes } from 'styled-components';

// Animated gradient background
const gradient = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;
const Background = styled.div`
  min-height: 100vh;
  width: 100vw;
  position: fixed;
  top: 0; left: 0;
  z-index: -1;
  background: linear-gradient(270deg, #232526, #414345, #1e3c72, #2a5298, #232526);
  background-size: 1200% 1200%;
  animation: ${gradient} 30s ease infinite;
`;

const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: { main: '#00e676' },
    background: { default: 'transparent', paper: 'rgba(30,34,45,0.95)' },
  },
  typography: {
    fontFamily: 'Montserrat, Roboto, Arial',
    h3: { fontWeight: 700 },
  },
});

function App() {
  const audioRef = useRef();
  const [audioUrl, setAudioUrl] = useState(null);
  const [analyser, setAnalyser] = useState(null);

  const handleAudioLoad = (url) => {
    setAudioUrl(url);
    setTimeout(() => {
      const { analyser } = setupAudioContext(audioRef.current);
      setAnalyser(analyser);
    }, 100);
  };

  // Example color scheme function
  const colorScheme = (i, total, height) => {
    // Rainbow gradient
    const hue = (i / total) * 360;
    return `hsl(${hue}, 100%, 50%)`;
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Background />
      <Container maxWidth="md" sx={{ py: 6 }}>
        <Paper elevation={8} sx={{ p: 4, borderRadius: 4, boxShadow: 8, backdropFilter: 'blur(6px)' }}>
          <Typography variant="h3" align="center" color="primary" gutterBottom>
            Music LED Wall Visualizer
          </Typography>
          <Grid container spacing={4}>
            <Grid item xs={12} md={4}>
              <Box sx={{ mb: 3 }}>
                <AudioUploader onAudioLoad={handleAudioLoad} />
              </Box>
              <Controls onColorChange={() => {}} onPatternChange={() => {}} />
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
                {audioUrl && (
                  <audio ref={audioRef} src={audioUrl} controls autoPlay style={{ width: "100%", marginBottom: 16, borderRadius: 8, boxShadow: '0 2px 16px #00e67655' }} />
                )}
                <Visualizer analyser={analyser} colorScheme={colorScheme} />
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </ThemeProvider>
  );
}

export default App; 