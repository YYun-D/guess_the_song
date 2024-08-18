"use client";

import { useEffect, useRef, useState } from 'react';
import { useSearchParams } from "next/navigation";
import YouTubePlayer from 'youtube-player';

export default function SongPage() {
  const playerRef = useRef(null);
  const params = useSearchParams();
  const playerInstanceRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [questionCount, setQuestionCount] = useState(1);
  const [isCorrect, setISCorrect] = useState(true);
  const [textareaValue, setTextareaValue] = useState(''); 
  const [shuffleNumberArray, setShuffleNumberArray] = useState([]);

  let videoIdList : String[] = [];
  let titleList : String[] = [];
  let artistList : String[] = [];

  const list0509VideoId = [
    '2cNM4FGn9yk','G7eLG4Tnc9c','MDNzHG4DDhE','0UQt0STXrK8','VO88htcm09E',
    'G5hbOrbfSRY','jN0uXBwKn8w','YKW0KSHTF1k','jjuB0S2460Q','m-a08W_TvJw',
    'H-Ci18cc1js','YI8MN4WfJKw','D8LYDIy-Y9k','1F2ka86Ua1w','rPn4iqyqVEM',
    'lmun5PO54VE','gpF4Z6YRG9c','uNgg_uBYZkw','L1nf1kXGRLA','Wo92Ux-ODF0',
    'zadppu2Bmy0','_y6c8ATG2L8','dWsWbd7xauA','pbXuotCoLds','Qf8FnyuMQBo'
  ]

  const list0509Title = [
    '죄와벌', '겁쟁이', '사랑했나봐', '살다가', '광',
    '내 사랑', '사랑 안해', '여인의 향기', '남자를 몰라','LOVE ALL',
    '미인', '이럴거면', '유혹의 소나타', '미워요', '잔소리',
    'So Hot', '하루 하루', 'Love', 'Nobody', '서커스',
    'Gee', 'I Dont Care', 'Abracadabra', 'Heartbreaker', 'Again & Again'
  ]

  const list0509Artist = [
    'SG워너비', '버즈', '윤도현', 'SG워너비', 'SG워너비',
    'SG워너비', '백지영', '씨야', '버즈' , '가비엔제이',
    '이기찬', '아이비', '아이비', '씨야' , '더 넛츠',
    '원더걸스', 'BIGBANG' , '브라운아이드걸스', '원더걸스', 'MC몽',
    '소녀시대', '2NE1', '브라운아이드걸스', 'G-DRAGON', '2PM'
  ]

  const list1014VideoId = [
    '2cNM4FGn9yk','G7eLG4Tnc9c','MDNzHG4DDhE','0UQt0STXrK8','VO88htcm09E',
    'G5hbOrbfSRY','jN0uXBwKn8w','YKW0KSHTF1k','jjuB0S2460Q','m-a08W_TvJw',
    'H-Ci18cc1js','YI8MN4WfJKw','D8LYDIy-Y9k','1F2ka86Ua1w','rPn4iqyqVEM',
    'lmun5PO54VE','gpF4Z6YRG9c','uNgg_uBYZkw','L1nf1kXGRLA','Wo92Ux-ODF0',
    'zadppu2Bmy0','_y6c8ATG2L8','dWsWbd7xauA','pbXuotCoLds','Qf8FnyuMQBo'
  ]

  const list1014Title = [
    '죄와벌', '겁쟁이', '사랑했나봐', '살다가', '광',
    '내 사랑', '사랑 안해', '여인의 향기', '남자를 몰라','LOVE ALL',
    '미인', '이럴거면', '유혹의 소나타', '미워요', '잔소리',
    'So Hot', '하루 하루', 'Love', 'Nobody', '서커스',
    'Gee', 'I Dont Care', 'Abracadabra', 'Heartbreaker', 'Again & Again'
  ]

  const list1014Artist = [
    'SG워너비', '버즈', '윤도현', 'SG워너비', 'SG워너비',
    'SG워너비', '백지영', '씨야', '버즈' , '가비엔제이',
    '이기찬', '아이비', '아이비', '씨야' , '더 넛츠',
    '원더걸스', 'BIGBANG' , '브라운아이드걸스', '원더걸스', 'MC몽',
    '소녀시대', '2NE1', '브라운아이드걸스', 'G-DRAGON', '2PM'
  ]

  const list1519VideoId = [
    '2cNM4FGn9yk','G7eLG4Tnc9c','MDNzHG4DDhE','0UQt0STXrK8','VO88htcm09E',
    'G5hbOrbfSRY','jN0uXBwKn8w','YKW0KSHTF1k','jjuB0S2460Q','m-a08W_TvJw',
    'H-Ci18cc1js','YI8MN4WfJKw','D8LYDIy-Y9k','1F2ka86Ua1w','rPn4iqyqVEM',
    'lmun5PO54VE','gpF4Z6YRG9c','uNgg_uBYZkw','L1nf1kXGRLA','Wo92Ux-ODF0',
    'zadppu2Bmy0','_y6c8ATG2L8','dWsWbd7xauA','pbXuotCoLds','Qf8FnyuMQBo'
  ]

  const list1519Title = [
    '죄와벌', '겁쟁이', '사랑했나봐', '살다가', '광',
    '내 사랑', '사랑 안해', '여인의 향기', '남자를 몰라','LOVE ALL',
    '미인', '이럴거면', '유혹의 소나타', '미워요', '잔소리',
    'So Hot', '하루 하루', 'Love', 'Nobody', '서커스',
    'Gee', 'I Dont Care', 'Abracadabra', 'Heartbreaker', 'Again & Again'
  ]

  const list1519Artist = [
    'SG워너비', '버즈', '윤도현', 'SG워너비', 'SG워너비',
    'SG워너비', '백지영', '씨야', '버즈' , '가비엔제이',
    '이기찬', '아이비', '아이비', '씨야' , '더 넛츠',
    '원더걸스', 'BIGBANG' , '브라운아이드걸스', '원더걸스', 'MC몽',
    '소녀시대', '2NE1', '브라운아이드걸스', 'G-DRAGON', '2PM'
  ]

  const list2023VideoId = [
    '2cNM4FGn9yk','G7eLG4Tnc9c','MDNzHG4DDhE','0UQt0STXrK8','VO88htcm09E',
    'G5hbOrbfSRY','jN0uXBwKn8w','YKW0KSHTF1k','jjuB0S2460Q','m-a08W_TvJw',
    'H-Ci18cc1js','YI8MN4WfJKw','D8LYDIy-Y9k','1F2ka86Ua1w','rPn4iqyqVEM',
    'lmun5PO54VE','gpF4Z6YRG9c','uNgg_uBYZkw','L1nf1kXGRLA','Wo92Ux-ODF0',
    'zadppu2Bmy0','_y6c8ATG2L8','dWsWbd7xauA','pbXuotCoLds','Qf8FnyuMQBo'
  ]

  const list2023Title = [
    '죄와벌', '겁쟁이', '사랑했나봐', '살다가', '광',
    '내 사랑', '사랑 안해', '여인의 향기', '남자를 몰라','LOVE ALL',
    '미인', '이럴거면', '유혹의 소나타', '미워요', '잔소리',
    'So Hot', '하루 하루', 'Love', 'Nobody', '서커스',
    'Gee', 'I Dont Care', 'Abracadabra', 'Heartbreaker', 'Again & Again'
  ]

  const list2023Artist = [
    'SG워너비', '버즈', '윤도현', 'SG워너비', 'SG워너비',
    'SG워너비', '백지영', '씨야', '버즈' , '가비엔제이',
    '이기찬', '아이비', '아이비', '씨야' , '더 넛츠',
    '원더걸스', 'BIGBANG' , '브라운아이드걸스', '원더걸스', 'MC몽',
    '소녀시대', '2NE1', '브라운아이드걸스', 'G-DRAGON', '2PM'
  ]

  const listParam = params.get('list')?.split(',');

  if (listParam) {
    listParam.forEach(param => {
      switch (param) {
        case 'check0509':
          videoIdList = videoIdList.concat(list0509VideoId);
          titleList = titleList.concat(list0509Title);
          artistList = artistList.concat(list0509Artist);
          break;
        case 'check1014':
          videoIdList = videoIdList.concat(list1014VideoId);
          titleList = titleList.concat(list1014Title);
          artistList = artistList.concat(list1014Artist);
          break;
        case 'check1519':
          videoIdList = videoIdList.concat(list1519VideoId);
          titleList = titleList.concat(list1519Title);
          artistList = artistList.concat(list1519Artist);
          break;
        case 'check2023':
          videoIdList = videoIdList.concat(list2023VideoId);
          titleList = titleList.concat(list2023Title);
          artistList = artistList.concat(list2023Artist);
          break;
        default:
          break;
      }
    });
  }

  let questionTotalNumber = videoIdList.length;
  
  // 숫자를 무작위로 섞는 함수를 만들고 순서를 무작위로 지정할 배열을 생성한다
  useEffect(() => {
    const shuffledArray = Array.from({ length: questionTotalNumber }, (_, i) => i).sort(() => Math.random() - 0.5);
    setShuffleNumberArray(shuffledArray);
  }, [questionTotalNumber]);

  useEffect(() => {
      if (playerRef.current && !playerInstanceRef.current && videoIdList.length > 0) {
        const player = YouTubePlayer(playerRef.current);
        playerInstanceRef.current = player;
        player.loadVideoById(videoIdList[shuffleNumberArray[questionCount-1]]);
        player.pauseVideo();
      }
  }, [questionCount, shuffleNumberArray, videoIdList]);

  const handlePlay = () => {
    if (playerInstanceRef.current) {
      playerInstanceRef.current.getPlayerState().then((state) => {
        if (state === 1) {
          playerInstanceRef.current.pauseVideo();
          setIsPlaying(false);
        } else {
          playerInstanceRef.current.playVideo();
          setIsPlaying(true);
        }
      });
    }
  };

  const handleNext = () => {
    setQuestionCount(prevCount => prevCount + 1);
  }

  const handleSubmit = () => {
    console.log(titleList[shuffleNumberArray[questionCount - 1]])
    console.log(shuffleNumberArray);
    if (titleList[shuffleNumberArray[questionCount - 1]].replaceAll(' ', '') === textareaValue.replaceAll(' ', '')) {
      console.log(titleList[shuffleNumberArray[questionCount - 1]], textareaValue);
    }
  }

  const handleKeyDown = (event: { key: string; shiftKey: any; preventDefault: () => void; }) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      handleSubmit();
    }
  };


  return (
    <main>
      <h2>문제</h2>
      <h3 className='questionNumber'>{questionCount}/{questionTotalNumber}</h3>
      <div className='answerView'>
        <h3 className='correct'>{isCorrect ? '맞췄습니다!' : '틀렸습니다'}</h3>
        <div className='video' ref={playerRef}></div>
        <div className='artistTitle'>{`${artistList[shuffleNumberArray[questionCount - 1]]} - ${titleList[shuffleNumberArray[questionCount - 1]]}`}</div>
        <button className='next' onClick={handleNext}>다음</button>
      </div>
      <button className='playButton' onClick={handlePlay}>{isPlaying ? '❚❚' : '▶'}</button>
      <div className='answer'>
      <textarea
          value={textareaValue}
          onChange={(e) => setTextareaValue(e.target.value)}
          onKeyDown={handleKeyDown}
        ></textarea>
        <button className='submitButton' onClick={handleSubmit}>제출</button>
      </div>
    </main>
  );
}