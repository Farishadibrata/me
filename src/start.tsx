import {
  AppBar,
  Button,
  Frame,
  MenuList,
  MenuListItem,
  Toolbar,
} from "react95";
import { useEffect, useRef, useState } from "react";
type StartBar = {
  showAbout: () => void;
  ShowResume: () => void;
};

const StartBar = ({ showAbout, ShowResume }: StartBar) => {
  const [open, setOpen] = useState(false);
  const MenuRef = useRef<HTMLDivElement>(null);
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const closeStartBar = (e: any) => {
    if (MenuRef.current && open && !MenuRef.current.contains(e.target)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("mousedown", closeStartBar);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const currentDate = new Date();
  const formattedTime = currentDate.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });
  return (
    <AppBar style={{ top: "94vh" }}>
      <Toolbar style={{ justifyContent: "space-between" }}>
        <div style={{ position: "relative", display: "inline-block" }}>
          <Button
            onClick={() => setOpen(!open)}
            active={open}
            style={{ fontWeight: "bold" }}
          >
            <img
              src={"start.png"}
              alt="react95 logo"
              style={{ height: "25px", marginRight: 4 }}
            />
            Start
          </Button>
          {open && (
            <div ref={MenuRef} style={{}}>
              <MenuList
                style={{
                  position: "absolute",
                  left: "-10px",
                  bottom: "5vh",
                  minWidth: "8vw",
                  zIndex: 999909,
                }}
                onClick={() => setOpen(false)}
              >
                <a href="mailto:example@example.com" target="_blank">
                  <MenuListItem>
                    <img
                      src={"email.png"}
                      alt="Mail me"
                      style={{ height: "25px", marginRight: 4 }}
                    />
                    Mail Me
                  </MenuListItem>
                </a>
                <a onClick={ShowResume}>
                  <MenuListItem>
                    <img
                      src={"resume.png"}
                      alt="Resume"
                      style={{ height: "25px", marginRight: 4 }}
                    />
                    Resume
                  </MenuListItem>
                </a>
                <a onClick={showAbout}>
                  <MenuListItem>
                    <img
                      src={"about.png"}
                      alt="About"
                      style={{ height: "25px", marginRight: 4 }}
                    />
                    About This Page
                  </MenuListItem>
                </a>
              </MenuList>
            </div>
          )}
        </div>
        <Frame variant="well" style={{ padding: "0.6rem" }}>
          {formattedTime}
        </Frame>
      </Toolbar>
    </AppBar>
  );
};
export default StartBar;
