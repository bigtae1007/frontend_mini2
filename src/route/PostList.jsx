import React from "react";
import styled from "styled-components";
import logo from "../logo.svg";

const PostList = () => {
  return (
    <Warp>
      <PostBox>
        <ImgBox>
          <img src={logo} alt=""></img>
        </ImgBox>
        <TextBox>
          <div>
            <h4>
              Redux connect()와 React Router와 같은 인기 있는 API에 대해 Hook은
              무엇을 의미합니까?
            </h4>
          </div>
          <div>
            <Text>
              hello, world!!, hello, world!!, hello, world!!, hello, world!!,
              hello, world!!, hello, world!!, hello, world!!, hello, world!!
            </Text>
          </div>
          <div>
            <Nick>nickname - 2022-06-11</Nick>
          </div>
          <div>
            <Like>like : 5 ㅤㅤFeedBack : 4</Like>
          </div>
        </TextBox>
      </PostBox>
      <PostBox>
        <ImgBox>
          <img src={logo} alt=""></img>
        </ImgBox>
        <TextBox>
          <div>
            <h4>
              Redux connect()와 React Router와 같은 인기 있는 API에 대해 Hook은
              무엇을 의미합니까?
            </h4>
          </div>
          <div>
            <Text>
              hello, world!!, hello, world!!, hello, world!!, hello, world!!,
              hello, world!!, hello, world!!, hello, world!!, hello, world!!
            </Text>
          </div>
          <div>
            <Nick>nickname - 2022-06-11</Nick>
          </div>
          <div>
            <Like>like : 5 ㅤㅤFeedBack : 4</Like>
          </div>
        </TextBox>
      </PostBox>
      <PostBox>
        <ImgBox>
          <img src={logo} alt=""></img>
        </ImgBox>
        <TextBox>
          <div>
            <h4>
              Redux connect()와 React Router와 같은 인기 있는 API에 대해 Hook은
              무엇을 의미합니까?
            </h4>
          </div>
          <div>
            <Text>
              hello, world!!, hello, world!!, hello, world!!, hello, world!!,
              hello, world!!, hello, world!!, hello, world!!, hello, world!!
            </Text>
          </div>
          <div>
            <Nick>nickname - 2022-06-11</Nick>
          </div>
          <div>
            <Like>like : 5 ㅤㅤFeedBack : 4</Like>
          </div>
        </TextBox>
      </PostBox>
      <PostBox>
        <ImgBox>
          <img src={logo} alt=""></img>
        </ImgBox>
        <TextBox>
          <div>
            <h4>
              Redux connect()와 React Router와 같은 인기 있는 API에 대해 Hook은
              무엇을 의미합니까?
            </h4>
          </div>
          <div>
            <Text>
              hello, world!!, hello, world!!, hello, world!!, hello, world!!,
              hello, world!!, hello, world!!, hello, world!!, hello, world!!
            </Text>
          </div>
          <div>
            <Nick>nickname - 2022-06-11</Nick>
          </div>
          <div>
            <Like>like : 5 ㅤㅤFeedBack : 4</Like>
          </div>
        </TextBox>
      </PostBox>
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
export default PostList;
