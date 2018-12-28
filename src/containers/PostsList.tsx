import React, { useContext, CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import "../assets/style/postsList.css";

import { PositionContext } from "../contexts";

export default function PostsList() {
  const { getStart, setStart } = useContext(PositionContext);
  const click = e => {
    setStart("head", {
      width: e.target.offsetWidth + "px",
      height: e.target.offsetHeight + "px",
      left: e.target.offsetLeft - window.pageXOffset + "px",
      top: e.target.offsetTop - window.pageYOffset + "px"
    });
    setStart("main", {
      height: "200px"
    });
    setStart("title", {
      fontSize: "18px",
      padding: "16px"
    });
    setStart("belt", {
      height: "40px",
      fontSize: "16px",
      padding: "0 16px"
    });
  };

  return (
    <>
      <h1>List</h1>
      <ul>
        {new Array(20).fill(1).map((x, i) => (
          <Item
            key={i}
            click={click}
            headStartStyle={getStart("head")}
            titleStartStyle={getStart("title")}
            beltStartStyle={getStart("belt")}
          />
        ))}
      </ul>
    </>
  );
}

function Item({
  click,
  headStartStyle,
  titleStartStyle,
  beltStartStyle
}: {
  click(e: Event): void;
  headStartStyle: CSSProperties;
  titleStartStyle: CSSProperties;
  beltStartStyle: CSSProperties;
}) {
  return (
    <ItemWrapper
      headStartStyle={headStartStyle}
      titleStartStyle={titleStartStyle}
      beltStartStyle={beltStartStyle}
    >
      <Link to="/foo" onClick={click}>
        <div className="main">
          <h2>
            人気ゲームタイトルの
            <br />
            期間限定イベント
          </h2>
        </div>
        <div className="belt">メリークリスマス！</div>
      </Link>
    </ItemWrapper>
  );
}
const ItemWrapper = styled.li`
  width: 30%;
  margin: 0 1.5% 60px;
  ${p => animation(p.headStartStyle)};

  a {
    text-decoration: none;
  }

  .main {
    background: no-repeat center / cover
      url(${require("../assets/images/img.jpg")});
    height: 200px;
    width: 100%;

    h2 {
      padding: 16px;
      margin: 0;
      font-size: 18px;
      color: #fff;
      text-decoration: none;
      ${p => animation(p.titleStartStyle)};
    }
  }

  .belt {
    background-color: tomato;
    color: #fff;
    height: 40px;
    font-size: 16px;
    padding: 0 16px;
    ${p => animation(p.beltStartStyle)};
  }
`;

const animation = (startStyle: any) => css`
  animation: ${mykeyframe(startStyle)} 3s cubic-bezier(0.49, 1.26, 0.99, 0.99);
`;
const mykeyframe = (startStyle: any) =>
  keyframes({
    "0%": { ...startStyle }
  });
