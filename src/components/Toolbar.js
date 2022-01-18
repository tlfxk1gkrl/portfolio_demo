import styled from "styled-components";

const Background = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  background-color: #fff;
  height: 50px;
  width: 100vw;
  min-width: 500px;
  -webkit-box-shadow: 0px 8px 11px 1px rgba(0, 0, 0, 0.46);
  box-shadow: 0px 8px 11px 1px rgba(0, 0, 0, 0.46);

  display: flex;
  align-items: center;

  color: #000;
  h2 {
    position: relative;
    margin-left: 10vw;
  }
  section {
    margin-right: 10vw;
    display: flex;
    gap: 20px;
    p {
      cursor: pointer;
    }
    ${(props) => `p:nth-child(${props.page}) {
        font-weight:bold;
      }`}
  }
  div {
    flex: 1;
  }

  z-index: 3;
`;

export default function Toolbar(props) {
  return (
    <Background page={props.selectedItem}>
      <h2>PAGE TITLE</h2>
      <div />
      <section>
        <p onClick={() => props.setSelectedItem(1)}>PROFILE</p>
        <p onClick={() => props.setSelectedItem(2)}>PROJECTS</p>
      </section>
    </Background>
  );
}
