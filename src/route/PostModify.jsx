import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import { useBeforeunload } from "react-beforeunload";
import styled from "styled-components";

//모듈
import { __editPost } from "../redux/modules/postSlice";

const PostModify = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [hastList, setHashList] = useState([]);

  const title_ref = React.useRef(null);
  const select_ref = React.useRef(null);
  const text_ref = React.useRef(null);
  const location = useLocation();
  // Link 로 보낸 데이터를 받을 때 useLocation 사용 필수 !
  const data = location.state.data;

  // 새로고침 방지
  useBeforeunload((event) => event.preventDefault());

  // 수정하기 dispatch
  const modifyPost = () => {
    dispatch(
      __editPost({
        id,
        title: title_ref.current.value,
        img: select_ref.current.value,
        content: text_ref.current.value,
        hash: JSON.stringify(hastList),
      })
    );
    window.alert("수정완료 되었습니다!");
    navigate(`/`);
  };

  // 해쉬 태그 작성
  const saveHash = (e) => {
    e.preventDefault();
    if (e.target[0].value !== "") {
      setHashList([...hastList, e.target[0].value]);
      e.target[0].value = "";
    }
  };
  // 해쉬 태그 삭제
  const deleteHash = (e) => {
    const newList = hastList.filter((v, l) => {
      console.log(e.target.id);
      console.log(l !== Number(e.target.id));
      return l !== Number(e.target.id);
    });
    console.log(newList);
    setHashList(newList);
  };

  useEffect(() => {
    if (data.Hashtags) {
      if (data.Hashtags[0]) setHashList(JSON.parse(data.Hashtags[0]?.hash));
    }
  }, [data.Hashtags]);
  return (
    <Wrap>
      <PostWarp>
        <div>
          <select ref={select_ref} defaultValue={data.img}>
            <option value="React">React</option>
            <option value="JavaScript">JavaScript</option>
            <option value="Java">Java</option>
            <option value="Node">Node</option> {/* 선택하려던 부분! */}
            <option value="Vue">Vue</option>
          </select>
          <button onClick={modifyPost}>수정하기</button>
        </div>
        <div></div>
        <TitleIpt>
          <textarea
            ref={title_ref}
            placeholder="제목을 입력하세요."
            defaultValue={data.title}
            // 수정시 기본값을 원래 게시글에 있는 내용을 가져옴
          />
          <WrapHash>
            <form onSubmit={saveHash}>
              <span>#</span>
              <HashInput type="text" placeholder="태그 작성" />
            </form>
            {hastList.map((v, l) => {
              return (
                <div key={l}>
                  <span>
                    # {v}{" "}
                    <span id={l} onClick={deleteHash}>
                      x
                    </span>
                  </span>
                </div>
              );
            })}
          </WrapHash>
        </TitleIpt>

        <TextIpt>
          <textarea
            ref={text_ref}
            className="textIpt"
            placeholder=""
            defaultValue={data.content}
          ></textarea>
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
    margin-bottom: 20px;
  }
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
export default PostModify;
