import React, { useContext, CSSProperties } from "react";
import styled, { css, keyframes } from "styled-components";
import { Link } from "react-router-dom";
import "../assets/style/postsList.css";

import { PositionContext } from "../contexts";

export default function PostsList() {
  const { getStart, setStart, getEnd } = useContext(PositionContext);
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
      padding: "0 16px",
      backgroundColor: "#2251d1"
    });
  };

  return (
    <div style={{ width: "80%", margin: "auto" }}>
      <h1>Item List</h1>
      <ul>
        {new Array(19).fill(1).map((x, i) => (
          <Item
            key={i}
            num={i + 1}
            click={click}
            headStartStyle={getStart("head")}
            headEndStyle={getEnd("head")}
            mainStartStyle={getStart("main")}
            titleStartStyle={getStart("title")}
            beltStartStyle={getStart("belt")}
          />
        ))}
      </ul>
    </div>
  );
}

function Item({
  num,
  click,
  headStartStyle,
  headEndStyle,
  mainStartStyle,
  titleStartStyle,
  beltStartStyle
}: {
  num: number | string;
  click(e: Event): void;
  headStartStyle?: CSSProperties;
  headEndStyle?: CSSProperties;
  mainStartStyle?: CSSProperties;
  titleStartStyle?: CSSProperties;
  beltStartStyle?: CSSProperties;
}) {
  return (
    <ItemWrapper
      headStartStyle={headStartStyle}
      headEndStyle={headEndStyle}
      mainStartStyle={mainStartStyle}
      titleStartStyle={titleStartStyle}
      beltStartStyle={beltStartStyle}
    >
      <Link to={`/${num}`} onClick={click}>
        <div className="main">
          <h2>
            人気ゲームタイトルの
            <br />
            期間限定イベント&nbsp;{num}
          </h2>
        </div>
        <div className="belt">メリークリスマス！</div>
      </Link>
    </ItemWrapper>
  );
}
const ItemWrapper = styled.li`
  background: no-repeat center / cover
    url(${require("../assets/images/img.jpg")});
  width: calc(33.33333% - 14px);
  margin: 0 7px 60px;
  ${p =>
    animation(
      p.headStartStyle ? { ...p.headStartStyle, position: "absolute" } : {},
      p.headEndStyle ? { ...p.headEndStyle, position: "absolute" } : {}
    )};

  a {
    text-decoration: none;
  }

  .main {
    height: 200px;
    width: 100%;
    ${p => animation(p.mainStartStyle)};

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
    background-color: #2251d1;
    color: #fff;
    height: 40px;
    font-size: 16px;
    padding: 0 16px;
    ${p => animation(p.beltStartStyle)};
  }
`;

const animation = (startStyle: CSSProperties, endStyle?: CSSProperties) => css`
  animation: ${mykeyframe(startStyle, endStyle)} 0.6s
    cubic-bezier(0.63, -0.35, 0.33, 1.19);
`;
const mykeyframe = (startStyle: CSSProperties, endStyle?: CSSProperties) =>
  keyframes({
    "0%": { ...startStyle },
    "100%": { ...endStyle }
  });
