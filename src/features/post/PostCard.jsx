import React, { useState } from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//모듈
import { moreList, __loadPost } from "../../redux/modules/postSlice";
//css //카테고리 로고 이미지 import
import logo from "../../logo.svg";
import ReactImg from "../../images/category_img/React.png";
import JavaImg from "../../images/category_img/Java.png";
import NodeImg from "../../images/category_img/Node.png";
import VueImg from "../../images/category_img/Vue.png";
import JsImg from "../../images/category_img/JavaScript.png";
// 컴포넌트
import MainPostDate from "../../elems/MainPostDate";
import PostCategory from "./PostCategory";

const PostCard = () => {
  const post_list = useSelector((state) => state.post.list);
  const listCount = useSelector((state) => state.post.countList);
  const dispatch = useDispatch();
  const [listState, setListState] = useState([]);
  const error = useSelector((state) => state.post.error);

  // 포스트 보이는 갯수 상태 , 마지막 포스트 확인 상태
  // const [listCount, setListCount] = useState(5);
  // >> 5 >>> 10
  const [lastPost, setLastPost] = useState(false);

  // 세션에 카테고리 있는지 확인
  const storage = sessionStorage.getItem("category");

  // const handleScroll = (aa) => {
  //   console.log(aa);
  //   const scrollHeight = document.documentElement.scrollHeight;
  //   const scrollTop = document.documentElement.scrollTop;
  //   const clientHeight = document.documentElement.clientHeight;

  //   if (scrollTop + clientHeight >= scrollHeight - 50 && !lastPost) {
  //     // changeCount();
  // >>>>> 5  >>>> 5
  //     // const newCount = listCount + 5;
  //     setListCount(newCount);
  //   }
  // };
  // const changeCount = (count) => {
  //   // setListCount(count + 5);
  // };

  const handleScroll = (e, listState, listCount, lastPost) => {
    const scrollHeight = document.documentElement.scrollHeight;
    const scrollTop = document.documentElement.scrollTop;
    const clientHeight = document.documentElement.clientHeight;
    if (
      scrollTop + clientHeight >= scrollHeight - 30 &&
      !lastPost &&
      listState.length !== 0
    ) {
      if (listCount < listState.length) {
        dispatch(moreList());
      } else {
        setLastPost(true);
      }
    }
  };

  const eventFn = (e) => {
    handleScroll(e, listState, listCount, lastPost);
  };
  React.useEffect(() => {
    dispatch(__loadPost());
  }, []);
  React.useEffect(() => {
    if (!storage) {
      setListState(post_list);
    }
  }, [post_list]);
  React.useEffect(() => {
    // scroll event listener 등록
    window.addEventListener("scroll", eventFn);
    return () => {
      // scroll event listener 해제
      window.removeEventListener("scroll", eventFn);
    };
  });
  return (
    <Warp>
      <PostCategory
        session={storage}
        postList={post_list}
        categoryState={setListState}
        lastPostState={setLastPost}
      />
      {listState.slice(0, listCount).map((dic, idx) => {
        return (
          <PostBox key={dic.id}>
            <ImgBox>
              <img
                // 연속 삼항 연산자로 조건을 줘서 이미지를 바꿈
                src={
                  dic.img === "React"
                    ? ReactImg
                    : dic.img === "Java"
                    ? JavaImg
                    : dic.img === "Node"
                    ? NodeImg
                    : dic.img === "Vue"
                    ? VueImg
                    : dic.img === "JavaScript"
                    ? JsImg
                    : logo
                }
                alt=""
              ></img>
            </ImgBox>
            {/* Link 로 props 보내기를 활용해 상세페이지에 들어갈 때 데이터를 전송 */}
            <Link to={`/post/detail/${dic.id}`} state={{ data: dic }}>
              <TextBox>
                <div>
                  <h4>{dic.title}</h4>
                </div>
                <div>
                  <Text>{dic.content}</Text>
                </div>
                <div>
                  <MainPostDate
                    nickname={dic.User.nickname}
                    date={dic.createdAt.toString()}
                  />
                </div>
                <div>
                  <Like>
                    like : {dic.Likers.length} ㅤㅤFeedBack :{" "}
                    {dic.Comments.length}
                  </Like>
                </div>
              </TextBox>
            </Link>
          </PostBox>
        );
      })}
    </Warp>
  );
};
const Warp = styled.div`
  width: 60vw;
  margin: 20px auto;
  padding: 20px;
`;

const PostBox = styled.div`
  display: flex;
  width: 55vw;
  margin: 50px auto;
  padding: 20px;
  border-bottom: solid 4px darkgrey;
`;

const ImgBox = styled.div`
  width: 150px;
  height: 150px;

  img {
    width: 150px;
    height: 150px;
    float: left;
  }
`;

const TextBox = styled.div`
  display: block;
  width: 40vw;
  margin: auto;

  div {
    margin: 20px;
  }

  h4 {
    text-align: left;
  }

  p {
    text-align: left;
  }
`;

const Text = styled.p`
  display: block;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  text-align: left;
`;

const Like = styled.p`
  float: right;
  color: gray;
`;

export default PostCard;
