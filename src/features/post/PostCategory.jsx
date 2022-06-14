import React from "react";
import styled from "styled-components";
// 커스텀 훅
import useCategoryList from "../../component/categoryList";

//카테고리 선택 버튼 컴포넌트
const PostCategory = ({ postList, categoryState }) => {
  //카테고리 상태별 리스트 정렬
  const all = postList;
  const javascript = useCategoryList(postList, "JavaScript");
  const node = useCategoryList(postList, "Node");
  const react = useCategoryList(postList, "React");
  const vue = useCategoryList(postList, "Vue");
  const java = useCategoryList(postList, "Java");

  const category = (stack) => {
    switch (stack) {
      case "all":
        return all;
      case "javascript":
        return javascript;
      case "node":
        return node;
      case "java":
        return java;
      case "react":
        return react;
      case "vue":
        return vue;
      default:
        break;
    }
  };

  const changeCategory = (e) => {
    const stack = category(e.target.id);
    categoryState(stack);
  };
  return (
    <WrapSpan>
      <CategorySpan
        id="all"
        color="black"
        bgcolor="grey"
        onClick={changeCategory}
      >
        ALL
      </CategorySpan>
      <CategorySpan
        id="javascript"
        color="white"
        bgcolor="yellow"
        onClick={changeCategory}
      >
        JavaScript
      </CategorySpan>
      <CategorySpan
        id="node"
        color="white"
        bgcolor="green"
        onClick={changeCategory}
      >
        Node
      </CategorySpan>
      <CategorySpan
        id="java"
        color="black"
        bgcolor="red"
        onClick={changeCategory}
      >
        Java
      </CategorySpan>
      <CategorySpan
        id="react"
        color="black"
        bgcolor="blueL"
        onClick={changeCategory}
      >
        React
      </CategorySpan>
      <CategorySpan
        id="vue"
        color="white"
        bgcolor="blueD"
        onClick={changeCategory}
      >
        Vue
      </CategorySpan>
    </WrapSpan>
  );
};

export default PostCategory;

const WrapSpan = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 30px;
`;

const CategorySpan = styled.button`
  width: 130px;
  padding: 5px 8px;
  border-radius: 20px;
  border: none;
  color: ${({ color }) => `var(--${color})`};
  background-color: ${({ bgcolor }) => `var(--${bgcolor})`};
  border: 1px solid var(--white);
  :hover {
    border: 1px solid var(--blue);
  }
`;
