import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//모듈
import { __loadPost } from "../../redux/modules/postSlice";
//css //카테고리 로고 이미지 import
import logo from "../../logo.svg";
import ReactImg from "../../images/category_img/React.png";
import JavaImg from "../../images/category_img/Java.png";
import NodeImg from "../../images/category_img/Node.png";
import VueImg from "../../images/category_img/Vue.png";
import JsImg from "../../images/category_img/JavaScript.png";

const PostCard = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);

  React.useEffect(() => {
    dispatch(__loadPost());
  }, [dispatch]);

  return (
    <Warp>
      {post_list.map((dic, idx) => {
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
                  <Nick>
                    {dic.User.nickname}ㅤ-{dic.createdAt.toString()}
                  </Nick>
                </div>
                <div>
                  <Like>like : 2 ㅤㅤFeedBack : {dic.Comments.length}</Like>
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

const Nick = styled.p`
  float: left;
`;

const Like = styled.p`
  float: right;
  color: gray;
`;

export default PostCard;
