// SoundManager.js
class SoundManager {
    constructor() {
      this.sounds = {
        moveAudio: new Audio('../src/sound/QuickWoosh.mov'),
        gameAudio: new Audio('../src/sound/PianoLoops2Octave120bpm.wav'),
        gameOverAudio: new Audio('../src/sound/Loser.wav')
      };
      this.initializeSounds();
    }
  
    initializeSounds() {
      this.sounds.gameAudio.volume = 0.1;
      this.sounds.gameAudio.loop = true;
    }
  
    playSound(soundName) {
      const sound = this.sounds[soundName];
      if (sound) {
        sound.currentTime = 0;
        sound.play();
      }
    }
  
    pauseSound(soundName) {
      const sound = this.sounds[soundName];
      if (sound) {
        sound.pause();
      }
    }
  
    // Add other methods as needed...
  }
    