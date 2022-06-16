import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import styled from "styled-components";
// 커스텀 훅
import useCategoryList from "../../component/categoryList";
import { resetListCount } from "../../redux/modules/postSlice";

//카테고리 선택 버튼 컴포넌트
const PostCategory = ({
  postList,
  categoryState,
  session,
  lastPostState,
  searchSession,
}) => {
  const sessionState = useSelector((state) => state.post.session);
  const post_list = useSelector((state) => state.post.list);
  const dispatch = useDispatch();

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

  useEffect(() => {
    if (session) {
      //세션 값으로 기준 변경
      const stack = category(session);
      categoryState(stack);
    }
    // 로딩완료시 , 데이터 추가 삭제 등 변경시 리렌더링
  }, [sessionState, post_list]);

  // 카테고리 클릭시 해당 카테고리로 변경
  const changeCategory = (e) => {
    sessionStorage.setItem("category", e.target.id);
    const stack = category(e.target.id);
    categoryState(stack);
    lastPostState(false);
    dispatch(resetListCount());
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
