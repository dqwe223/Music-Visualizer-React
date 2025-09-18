<img width="1920" height="912" alt="Screenshot (311)" src="public/firefox_ViWd2kGvDU.gif" />
# 🎵 Music Reactive LED Wall

A stunning web application that creates a real-time reactive LED wall visualization based on music audio analysis. Watch as your music comes to life through a dynamic grid of LEDs that respond to frequency, intensity, and rhythm!

## ✨ Features

- **Real-time Audio Analysis**: Uses Web Audio API for live frequency analysis
- **Dynamic LED Grid**: 16x32 LED wall that responds to music in real-time
- **Drag & Drop Upload**: Easy music file upload with drag and drop support
- **Audio Controls**: Full playback controls with progress bar and volume slider
- **Responsive Design**: Works perfectly on desktop, tablet, and mobile devices
- **Beautiful Animations**: Smooth transitions and reactive animations using Framer Motion 
- **Modern UI**: Dark theme with gradient effects and glassmorphism design 

## 🚀 Getting Started

<img width="1920" height="912" alt="Screenshot (311)" src="public/Screenshot (311).png" />

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to your project directory:
```bash
cd music
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000`

## 🎮 How to Use

1. **Upload Music**: Drag and drop any audio file (MP3, WAV, OGG, M4A) onto the upload area, or click to browse files

2. **Play Music**: Click the play button to start the music and activate the LED wall

3. **Watch the Magic**: The LED wall will automatically start reacting to your music with:
   - Color changes based on frequency ranges
   - Intensity variations based on volume
   - Pulsing animations synchronized with the beat
   - Dynamic glow effects

4. **Control Playback**: Use the progress bar to seek through the song and adjust volume as needed

## 🛠️ Technical Details

### Audio Analysis
- **Web Audio API**: Real-time frequency analysis using AnalyserNode
- **FFT Size**: 256 for optimal performance and visual quality
- **Smoothing**: 0.8 smoothing time constant for fluid animations

### LED Wall Configuration
- **Grid Size**: 16 rows × 32 columns (512 total LEDs)
- **Responsive**: Automatically adjusts grid size on smaller screens
- **Color Algorithm**: HSL color space with dynamic hue, saturation, and lightness based on frequency data

### Performance Optimizations
- **RequestAnimationFrame**: Smooth 60fps animations
- **Efficient Rendering**: Optimized React components with proper memoization
- **Memory Management**: Proper cleanup of audio contexts and animation frames

## 📱 Responsive Design

The application automatically adapts to different screen sizes:

- **Desktop**: Full 16×32 LED grid
- **Tablet**: 8×16 LED grid
- **Mobile**: 4×8 LED grid

## 🎨 Customization

### LED Wall Size
You can modify the LED grid size by changing these constants in `src/App.js`:

```javascript
const LED_ROWS = 16;    // Number of rows
const LED_COLS = 32;    // Number of columns
```

### Color Schemes
The color algorithm can be customized in the `getLEDColor` function:

```javascript
const getLEDColor = (index) => {
  const frequencyIndex = Math.floor((index / TOTAL_LEDS) * audioData.length);
  const intensity = audioData[frequencyIndex] || 0;
  const normalizedIntensity = intensity / 255;
  
  // Customize these values for different color schemes
  const hue = (index % 360) + (normalizedIntensity * 60);
  const saturation = 80 + (normalizedIntensity * 20);
  const lightness = 30 + (normalizedIntensity * 50);
  
  return `hsl(${hue}, ${saturation}%, ${lightness}%)`;
};
```

## 🔧 Dependencies

- **React**: UI framework
- **Framer Motion**: Smooth animations and transitions
- **React Dropzone**: Drag and drop file upload
- **React Icons**: Beautiful icon library

## 🌟 Browser Support

- Chrome (recommended)
- Firefox
- Safari
- Edge

**Note**: Web Audio API support is required for audio analysis functionality.

## 🎵 Supported Audio Formats

- MP3
- WAV
- OGG
- M4A
- Any format supported by the browser's audio element




**Made with ❤️ and React**
