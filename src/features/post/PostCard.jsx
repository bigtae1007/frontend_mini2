import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
//모듈
import { __loadPost } from "../../redux/modules/postSlice";
//css
import logo from "../../logo.svg";

const PostCard = () => {
  const dispatch = useDispatch();
  const post_list = useSelector((state) => state.post.list);
  console.log(post_list);

  React.useEffect(() => {
    dispatch(__loadPost());
  }, [dispatch]);

  return (
    <Warp>
      {post_list.map((dic, idx) => {
        // const date = dic.createdAt.slice()
        return (
          <PostBox key={dic.id}>
            <ImgBox>
              <img src={logo} alt=""></img>
            </ImgBox>
            <Link to="/post/detail/:id">
              <TextBox>
                <div>
                  <h4>{dic.title}</h4>
                </div>
                <div>
                  <Text>{dic.content}</Text>
                </div>
                <div>
                  <Nick>
                    {dic.User.nickname}ㅤ-{dic.createdAt}
                  </Nick>
                </div>
                <div>
                  <Like>like : 2 ㅤㅤFeedBack : 2</Like>
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
