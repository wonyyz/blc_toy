import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const categories = [
  {
    name: "rec",
    text: "이상형 추천",
    to: "/Rec", // 해당 카테고리와 연결될 경로 설정
  },
  {
    name: "chat",
    text: "채팅",
    to: "/Chat",
  },
  {
    name: "myPage",
    text: "마이페이지",
    to: "/MyPage",
  },
];

const CategoriesBlock = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 768px;
  }
`;

const Category = styled(Link)`
  font-size: 1rem;
  cursor: pointer;
  white-space: pre;
  text-decoration: none;
  color: inherit;
  padding-bottom: 0.25rem;
  margin-right: 4rem;

  &:hover {
    color: #6851aa;
  }

  &:last-child {
    margin-right: 0;
  }
`;

const Categories = () => {
  return (
    <CategoriesBlock>
      {categories.map((c) => (
        <Category key={c.name} to={c.to}>
          {c.text}
        </Category>
      ))}
    </CategoriesBlock>
  );
};

export default Categories;
