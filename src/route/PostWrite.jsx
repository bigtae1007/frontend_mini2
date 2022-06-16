import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";

import styled from "styled-components";

//모듈
import { __addPost } from "../redux/modules/postSlice";

const PostWrite = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hastList, setHashList] = useState([]);
  const title_ref = React.useRef(null);
  const select_ref = React.useRef(null);
  const text_ref = React.useRef(null);

  // 새로고침 방지
  useBeforeunload((event) => event.preventDefault());

  const addPost = () => {
    dispatch(
      __addPost({
        title: title_ref.current.value,
        img: select_ref.current.value,
        content: text_ref.current.value,
        hash: JSON.stringify(hastList),
      })
    );
    navigate("/");
  };

  // 해쉬 태그 작성
  const saveHash = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      setHashList([...hastList, e.target[0].value]);
      e.target[0].value = "";
    }
  };
  const deleteHash = (e) => {
    const newList = hastList.filter((v, l) => {
      return l !== Number(e.target.id);
    });
    setHashList(newList);
  };
  return (
    <Wrap>
      <PostWarp>
        <div>
          <select ref={select_ref}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Node">Node</option> {/* 선택하려던 부분! */}
            <option value="Vue">Vue</option>
          </select>
          <button onClick={addPost}>작성하기</button>
        </div>
        <div></div>
        <TitleIpt>
          <textarea ref={title_ref} placeholder="제목을 입력하세요." />
          <WrapHash>
            <form onSubmit={saveHash}>
              <span>#</span>
              <HashInput type="text" placeholder="태그 작성" />
            </form>
            {hastList.map((v, l) => {
              return (
                <div key={l}>
                  <span>
                    # {v} <span onClick={deleteHash}>x</span>
                  </span>
                </div>
              );
            })}
          </WrapHash>
        </TitleIpt>
        <TextIpt>
          <textarea ref={text_ref} className="textIpt" placeholder="" />
        </TextIpt>
      </PostWarp>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 60vw;
  margin: 50px auto;
`;

const PostWarp = styled.div`
  display: block;

  div {
    margin: 15px;
  }

  select {
    margin: 50px 0 30px 0;
    float: left;
  }
  button {
    margin: 50px 0 30px 0;
    float: right;
    border: none;
    background-color: transparent;
  }
  textarea {
    width: 60vw;
    border: none;
    resize: none;
  }
  textarea:focus {
    outline: none;
  }

  .textIpt {
    margin-bottom: 200px;
  }
`;

const TitleIpt = styled.div`
  textarea {
    font-size: 25px;
  }
  text-align: left;
  border-bottom: 2px solid lightgray;
`;

const TextIpt = styled.div`
  textarea {
    height: 800px;
    max-height: 100vh;
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const WrapHash = styled.div`
  margin: 0;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 5px 10px;
  min-height: 50px;
  > div {
    margin: 0;
  }
  > div > span {
    padding: 2px 5px;
    border-radius: 8px;
    color: var(--greyD);
    background-color: var(--grey);
    > span {
      color: var(--black);
      font-weight: 600;
      cursor: pointer;
    }
  }
`;

const HashInput = styled.input`
  width: 90px;
  margin-left: 10px;
  padding: 3px;
  border: none;
  border: 1px solid var(--grey);
  text-align: center;
  outline: none;
  border-radius: 7px;
  :focus {
    border: 1px solid var(--blue);
  }
`;
export default PostWrite;
