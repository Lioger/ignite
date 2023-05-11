import { useState } from "react";

const PropsImproverHOC = (Component) => {
  const [theme, setTheme] = useState('light');
  const a = 10 +20;
  return <Component a={a} theme={theme} setTheme={setTheme} />
};

const MyComponent = ({ theme, setTheme }) => {
  console.log(theme);
  return (
    <>
      <div className={theme === 'light' ? 'light-component' : 'dark-component'}>
        CONTENT
      </div>
      <button onClick={() => setTheme('dark')}>Switch</button>
    </>
  )
};

const MyComponent1 = ({ theme }) => {
  console.log(theme);
  return (
    <span className={theme === 'light' ? 'light-component' : 'dark-component'}>
      CONTENT
    </span>
  )
};

export const App1 = () => {
  return (
    <>
      <div></div>
      <h1></h1>
      <p></p>
      {PropsImproverHOC(MyComponent)}
      {PropsImproverHOC(MyComponent1)}
    </>
  )
}