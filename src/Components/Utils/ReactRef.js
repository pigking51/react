import { useRef } from "react";
export function ReactRef() {
  console.log("ReactRef 랜더링");
  const inputRef = useRef(null);
  const h3Ref = useRef(null);

  return (
    <>
      <div>
        <input ref={inputRef}></input>
        <button onClick={() => inputRef.current.focus()}>
          입력창에 포커스
        </button>
        <h3 ref={h3Ref}></h3>
        <button
          onClick={() => {
            h3Ref.current.textContent = "테스트";
          }}
        >
          h3 태그에 text입력
        </button>
      </div>
    </>
  );
}
