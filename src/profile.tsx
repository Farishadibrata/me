import {
    Button,
  WindowContent,
  WindowHeader,
  Window
} from "react95";
import { styled } from "styled-components";
import { Content } from "./content";

export const Profile = () => {
  const Wrapper = styled.div`
    padding: 5rem;
    background: ${({ theme }) => theme.desktopBackground};
    .window-title {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .close-icon {
      display: inline-block;
      width: 16px;
      height: 16px;
      margin-left: -1px;
      margin-top: -1px;
      transform: rotateZ(45deg);
      position: relative;
      &:before,
      &:after {
        content: "";
        position: absolute;
        background: ${({ theme }) => theme.materialText};
      }
      &:before {
        height: 100%;
        width: 3px;
        left: 50%;
        transform: translateX(-50%);
      }
      &:after {
        height: 3px;
        width: 100%;
        left: 0px;
        top: 50%;
        transform: translateY(-50%);
      }
    }
    .gridItems {
      display: flex;
      flexdirection: "column";
      display: "flex";
      gap: 5px;
      padding-bottom: 50px;
    }

    .window {
      position: absolute;
      width: 80vw;
      min-height: 60vh;
      
      top: 40%;
      left: 50%;
      -ms-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    @media only screen and (min-width: 600px) {
      .window {
        position: absolute;
        width: 80vw;
        min-height: 60vh;

        top: 50%;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .gridItems {
        flexdirection: "row";
        display: "flex";
      }
    }
    @media only screen and (min-width: 992px) {
      .window {
        position: absolute;
        width: 40vw;
        min-height: 60vh;
        top: 45vh;
        left: 50%;
        -ms-transform: translateX(-50%) translateY(-50%);
        -webkit-transform: translate(-50%, -50%);
        transform: translate(-50%, -50%);
      }
      .gridItems {
        flexdirection: "row";
        display: "flex";
      }
    }
  `;

  return (
    <Wrapper>
      <Window className="window">
        <WindowHeader active={true} className="window-title">
          <span>Welcome</span>
          <Button>
            <span className="close-icon" />
          </Button>
        </WindowHeader>
        <WindowContent>
          <Content />
        </WindowContent>
      </Window>
    </Wrapper>
  );
};
