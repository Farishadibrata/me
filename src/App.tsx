import { createGlobalStyle, ThemeProvider } from "styled-components";
import { styleReset } from "react95";
import original from "react95/dist/themes/original";
import ms_sans_serif from "react95/dist/fonts/ms_sans_serif.woff2";
import ms_sans_serif_bold from "react95/dist/fonts/ms_sans_serif_bold.woff2";
import { BG_GREEN } from "./conts";
import StartBar from "./start";
import { Profile } from "./profile";
import { AboutPopUp } from "./about";
import { ResumePopup } from "./resume";

const GlobalStyles = createGlobalStyle`
  ${styleReset}
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body {
    font-family: 'ms_sans_serif';
    background: ${BG_GREEN};
  }
`;

const Desktop = () => {
  const { AboutPopupComponent, ShowAbout } = AboutPopUp();
  const { ResumePopUpComponent, ShowResume } = ResumePopup();
  return (
    <>
      <AboutPopupComponent />
      <ResumePopUpComponent />
      <StartBar showAbout={ShowAbout} ShowResume={ShowResume} />
      <Profile />
    </>
  );
};
const App = () => (
  <div>
    <GlobalStyles />
    <ThemeProvider theme={original}>
      <Desktop />
    </ThemeProvider>
  </div>
);

export default App;
