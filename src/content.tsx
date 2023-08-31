import { Anchor, GroupBox, Monitor, ScrollView, TreeView } from "react95";
import { ProgrammingLanguages } from "./conts";

export const Content = () => {
    return (
      <ScrollView style={{ width: '100%', height: '60vh' , padding: '20px'}}>
        <div>

        <div style={{ fontSize: 20, margin: '1rem' }}>
          Welcome to
          <span style={{ fontWeight: "bold" }}>
            {"    "}
            Farisraihanhadibrata.com
          </span>
        </div>
        <div style={{ flex: 1, flexDirection: "row" }}>
          <span style={{ fontSize: 20 }}>Hello !</span>
          <div className="gridItems">
            <br />
            <p style={{ fontSize: 16, wordWrap: 'normal' }}>
              I am a full stack developer with experience in 4 years of
              experience. I have a passion for building scalable and efficient
              web applications and enjoy working with exploration and new
              things.
            </p>
            <br />
            <Monitor
              backgroundStyles={{
                backgroundImage: "url(./pic.jpg)",
                backgroundSize: "cover",
                backgroundPositionY: "50%",
              }}
            />
          </div>
          <div style={{ float: "right" }}></div>
          <GroupBox label="Programming Languages / Frameworks I used">
            <TreeView tree={ProgrammingLanguages} />
          </GroupBox>
        </div>
        <div style={{ marginTop: "5px" }}>
          Contact me : <br />
          Github :
          <Anchor href="https://github.com/Farishadibrata" target="_blank">
            https://github.com/Farishadibrata
          </Anchor>
          <br />
          Email :
          <Anchor href="mailto:example@example.com" target="_blank">
            farisraihanhadibrata@gmail.com
          </Anchor>
        </div>
        </div>

      </ScrollView>
    );
  };