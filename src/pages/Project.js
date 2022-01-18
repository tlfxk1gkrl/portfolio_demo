import React from "react";
import styled from "styled-components";

//icons
import ArrowLeftOutlinedIcon from "@mui/icons-material/ArrowLeftOutlined";
import ArrowRightOutlinedIcon from "@mui/icons-material/ArrowRightOutlined";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
//images
import GithubLogo from "../Img/github.png";
const Background = styled.div`
  background-color: #5b86f3;
  min-width: 676px;

  display: flex;
  flex-direction: column;
  gap: 10vh;
  justify-content: center;
  align-items: center;
`;

export default function Project(props) {
  return (
    <Background>
      <div className="project-box">
        <div className="title">
          <p>PROJECTS | R&D</p>
        </div>
        <hr />
        <div className="item-title">
          <div className="project-kind">android</div>
          <p>TITLE</p>
        </div>
        <div className="items">
          <button className="item">
            <ArrowLeftOutlinedIcon className="svg-icon" />
          </button>
          <div className="item"></div>
          <button className="item">
            <ArrowRightOutlinedIcon className="svg-icon" />
          </button>
        </div>
        <p className="item-explain">
          작업 소요기간, 작업 툴, 작업 내용등 작업물 설명
        </p>
      </div>
      <div className="project-list">
        <div className="item">
          <div className="top">
            <div className="project-kind">android</div>
            <div className="project-title">TITLE</div>
            <div className="project-explain">DESC----</div>
          </div>
        </div>
        <div className="item">
          <div className="top"></div>
        </div>
        <div className="item">
          <div className="top"></div>
        </div>
      </div>
      <div className="github-url-box">
        <img src={GithubLogo} alt="" />
        <div className="github-explain">
          <h3>GitHub</h3>
          <p>소스 설명</p>
          <button>
            <a href="naver.com" target="_blank">
              More→
            </a>
          </button>
        </div>
      </div>
      <button className="btn-to-top" onClick={() => props.setSelectedItem(1)}>
        <ArrowDropUpIcon className="svg-icon" />
      </button>
      <div className="bottom-copyright"></div>
    </Background>
  );
}
