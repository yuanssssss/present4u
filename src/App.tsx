import { useState, useEffect, useRef } from 'react';
import Present from './Present';
import './index.css';

const videoSrc = '/video/skystar.mp4';

const App: React.FC = () => {
  const [showPresent, setShowPresent] = useState<boolean>(false);
  const myInterval = useRef<NodeJS.Timeout | null>(null);
  const [count, setCount] = useState<number>(3);
  const [showTime, setShowTime] = useState<boolean>(false);
  const [userName, setUserName] = useState<string>('');

  /**
   * 网页全屏
   */
  const handleFullscreen = (): void => {
    if (!document.fullscreenElement) {
      document.body.requestFullscreen().catch((err) => {
        console.error('全屏请求失败:', err);
      });
    }
  };

  const interval = (): void => {
    let num = count;
    myInterval.current = setInterval(() => {
      console.log(num);
      if (num <= 0) {
        console.log('小于等于0');
        clearIntervalHandler();
        setShowPresent(true);
        handleFullscreen();
      }
      setCount(--num);
    }, 1000);
  };

  const clearIntervalHandler = (): void => {
    if (myInterval.current) {
      clearInterval(myInterval.current);
      myInterval.current = null;
    }
  };

  /**
   * 获取url?后面的参数值
   * @param name 所要获取的参数名
   * 
   * eg:
   *  https://www.baidu.com?param1=111&param2=222
   *  getQueryString('param1') ---> 111
   */
  const getQueryString = (name: string): string | null => {
    const urlParams = new URLSearchParams(window.location.search);
    const value = urlParams.get(name);
    return value ? decodeURIComponent(value) : null;
  };

  useEffect(() => {
    const name = getQueryString('name');
    console.log('name', !!name);
    console.log('name', typeof name);
    setUserName(name && name !== 'null' ? name : '');
  }, []);

  useEffect(() => {
    return () => {
      clearIntervalHandler();
    };
  }, []);

  const handleButtonClick = (): void => {
    console.log('点了这个按钮');
    setShowTime(true);
    interval();
  };

  return (
    <>
      {!showPresent && (
        <div className="printer-div">
          嘿，{userName ? `${userName}，` : ''}点击这个按钮，开启你的礼物^_^
          &nbsp;
          <button onClick={handleButtonClick}>这个按钮</button>
        </div>
      )}
      {showTime && (
        <div className='time-div'>
          {!showPresent && (count >= 1 ? <h3>还有：<b>{count}s</b></h3> : <h2>开始！</h2>)}
        </div>
      )}
      {showPresent && <Present videoSrc={videoSrc} />}
    </>
  );
};

export default App;
