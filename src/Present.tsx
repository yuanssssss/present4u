import { useEffect, useRef, useState } from 'react';
import device from 'current-device';
import { words, wordsToPhone } from './data';
import './index.css';

interface PresentProps {
  videoSrc: string;
}

const Present: React.FC<PresentProps> = ({ videoSrc }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const audioRef = useRef<HTMLAudioElement>(null);
  const [hasAudio, setHasAudio] = useState<boolean>(false);
  const [audioSrc, setAudioSrc] = useState<string>('');

  function randomNum(min: number, max: number): string {
    const num = (Math.random() * (max - min + 1) + min).toFixed(2);
    return num;
  }

  const init = (wordsList: string[]): void => {
    const container = document.querySelector('.container');
    if (!container) return;
    
    const f = document.createDocumentFragment();
    wordsList.forEach(w => {
      const word_box = document.createElement('div');
      const word = document.createElement('div');
      word.innerText = w;
      word.classList.add('word');
      word.style.color = '#BAABDA';
      word.style.fontFamily = "'楷体', 'KaiTi', 'STKaiti', 'BiauKai', serif";
      word.style.fontSize = '20px';
      word_box.classList.add('word-box');
      word_box.style.setProperty("--margin-top", randomNum(-40, 20) + 'vh');
      word_box.style.setProperty("--margin-left", randomNum(6, 35) + 'vw');
      word_box.style.setProperty("--animation-duration", randomNum(8, 20) + 's');
      word_box.style.setProperty("--animation-delay", randomNum(-20, 0) + 's');

      word_box.appendChild(word);
      f.appendChild(word_box);
    });
    container.appendChild(f);
  };

  // 检测音频文件是否存在
  useEffect(() => {
    const audioPath = '/audio/audio.mp3';
    fetch(audioPath, { method: 'HEAD' })
      .then(response => {
        if (response.ok) {
          setHasAudio(true);
          setAudioSrc(audioPath);
          console.log('检测到独立音频文件，视频将静音播放');
        } else {
          setHasAudio(false);
          console.log('未检测到独立音频文件，使用视频自带音频');
        }
      })
      .catch(() => {
        setHasAudio(false);
        console.log('音频文件检测失败，使用视频自带音频');
      });
  }, []);

  useEffect(() => {
    console.log('进入了这个页面');
    let wordsArr: string[] = wordsToPhone;
    if (device.desktop()) {
      console.log('电脑');
      wordsArr = words;
    }
    init(wordsArr);

    // 先暂停，1.5秒后播放（和原项目逻辑一致）
    const video = videoRef.current;
    const audio = audioRef.current;
    
    if (video) {
      // 为移动端添加兼容属性
      video.setAttribute('webkit-playsinline', 'true');
      video.setAttribute('x5-playsinline', 'true');
      video.setAttribute('x-webkit-airplay', 'allow');
      
      video.pause();
      setTimeout(() => {
        video.play().catch(err => console.error('视频播放失败:', err));
        // 如果有独立音频，播放音频
        if (hasAudio && audio) {
          audio.play().catch(err => console.error('音频播放失败:', err));
        }
      }, 1500);
    }

    setTimeout(() => {
      const textone = document.querySelector('.textone')?.querySelector('h1');
      const text = document.querySelector('.text')?.querySelector('h1');
      if (textone) {
        textone.innerHTML = '今晚，这片星空将为你一人闪烁';
        textone.style.color = '#E8F9FD';
        textone.style.fontFamily = "'华文楷体', 'STKaiti', 'KaiTi', 'BiauKai', serif";
      }
      if (text) {
        text.innerHTML = '';
      }
    }, 10000);
  }, [hasAudio]);

  return (
    <>
      <div className="sky">
        <div className="videofilm">
          <video
            ref={videoRef}
            src={videoSrc}
            loop
            playsInline
            muted={hasAudio}
            preload="auto"
            style={{
              width: 'auto',
              height: 'auto',
            }}
          />
        </div>
        {hasAudio && audioSrc && (
          <audio
            ref={audioRef}
            src={audioSrc}
            loop
            playsInline
            preload="auto"
          />
        )}
        <div className="textone">
          <h1>look at the stars</h1>
        </div>
        <div className="text">
          <h1>look how they shine for u</h1>
        </div>

        <div className="container textContainer"></div>
      </div>
    </>
  );
};

export default Present;
