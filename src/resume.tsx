import { Button, Window, WindowContent, WindowHeader } from "react95";
import { styled } from "styled-components";
import { useEffect, useRef, useState } from "react";
export const ResumePopup = () => {
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
    .window {
      position: absolute;
      width: 20vw;
      z-index: 1;
      min-height: 20vh;
      top: 45vh;
      left: 50%;
      -ms-transform: translateX(-50%) translateY(-50%);
      -webkit-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
    }
    .window:nth-child(2) {
      margin: 2rem;
    }
    .footer {
      display: block;
      margin: 0.25rem;
      height: 31px;
      line-height: 31px;
      padding-left: 0.25rem;
    }
  `;
  const PopUpRef = useRef<HTMLDivElement>(null);
  const [show, setShow] = useState(false);
  const ShowResume = () => {
    setShow(true);
  };
  const HideResume = () => {
    setShow(false);
  };

  const closeStartBar = (e: MouseEvent) => {
    if (e.target) {
      if (
        PopUpRef.current &&
        show &&
        !PopUpRef.current.contains(e.target as Node)
      ) {
        setShow(false);
      }
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", closeStartBar);
  }, []);

  const ResumePopUpComponent = () => {
    if (!show) return <></>;
    return (
      <div ref={PopUpRef}>
        <Wrapper>
          <Window className="window">
            <WindowHeader active={true} className="window-title">
              <span>resume.exe</span>
              <Button onClick={() => HideResume()}>
                <span className="close-icon" />
              </Button>
            </WindowHeader>
            <WindowContent>
              <div
                style={{ display: "flex", flexDirection: "row", gap: "1rem" }}
              >
                <img
                  src={"error.png"}
                  alt="react95 logo"
                  style={{ height: "50px", marginRight: "10px" }}
                />
                Nah im too lazy to make resume, just mail me! <br />
              </div>
            </WindowContent>
          </Window>
        </Wrapper>
      </div>
    );
  };
  return { ResumePopUpComponent, ShowResume, HideResume };
};
