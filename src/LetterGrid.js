import Letter from "./Letter";

export default function ({secretWord, guessedLetters}) {
  // 함수 <span> 각각의 글자</span>
  // <span>r</span><span>e</span>...
  // letters 변수명
  // react 문자 -> 배열, 대상.split('')
  // 배열의 특정조건 맞는 값만 정리해서 새로운 배열. map
  // react
  let letters = secretWord
                .split('')
                .map((letter, index) => {
                  let isShown = guessedLetters.indexOf(letter.toLowerCase()) > -1;
                  return (
                    <Letter
                    value = {letter}
                    isShown = {isShown}
                    key = {index}
                    />
                  )
                  });


  return(
    <div className="flex flex-wrap">
      {letters}
    </div>  
  );
}