import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//모듈
import { __loadPost } from "../../redux/modules/postSlice";
//css
import logo from "../../logo.svg";
import ReactImg from "../../images/category_img/React.png";
import JavaImg from "../../images/category_img/Java.png";
import NodeImg from "../../images/category_img/Node.png";
import VueImg from "../../images/category_img/Vue.png";
import JsImg from "../../images/category_img/JavaScript.png";

const PostCard = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  // console.log(post_list);

  React.useEffect(() => {
    dispatch(__loadPost());
  }, []);

  return (
    <Warp>
      {post_list.map((dic, idx) => {
        // console.log(dic.createdAt.toString());
        return (
          <PostBox key={dic.id}>
            <ImgBox>
              <img
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
  /* background-color: aquamarine; */
`;

const PostBox = styled.div`
  width: 55vw;
  display: flex;

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
