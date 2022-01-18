import styled from "styled-components";

//imgs
import PersonalPhoto from "../Img/leo.jpg";

//icons
import LocalPhoneOutlinedIcon from "@mui/icons-material/LocalPhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

const Background = styled.div`
  background-color: #facf38;
  height: 100vh;
  min-height: 676px;
  min-width: 676px;

  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function Profile() {
  return (
    <Background>
      <div className="profile-box">
        <div className="title">
          <p>PROFILE</p>
        </div>
        <hr />
        <div className="detail">
          <div className="picture-name">
            <img src={PersonalPhoto} alt="" />
            <p>LEO-DICAF</p>
          </div>
          <div className="pr-space">
            <h3>
              자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개
              자기소개자기소개자기소개자기소개자기소개자기소개자기소개자기소개
            </h3>
            경력
            <ul className="mylist">
              <li>아이템 1</li>
              <li>아이템 2</li>
              <li>아이템 3</li>
            </ul>
            <div className="email-phone">
              <div className="row-item">
                <EmailOutlinedIcon />
                Email@Email.com
              </div>
              <div className="row-item">
                <LocalPhoneOutlinedIcon />
                010-1234-5678
              </div>
            </div>
          </div>
        </div>
      </div>
    </Background>
  );
}
