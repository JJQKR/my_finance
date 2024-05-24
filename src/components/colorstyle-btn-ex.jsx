import styled from "styled-components";

function App() {
  return (
    <div>
      <h1>Button Styles</h1>
      <PrimaryButton>Primary Button</PrimaryButton>
      <SecondaryButton>Secondary Button</SecondaryButton>
    </div>
  );
}

const Button = styled.button`
  padding: 10px 20px;
  font-size: 16px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  color: white;
`;

//위 코드 아래에서 재활용

const PrimaryButton = styled(Button)`
  background-color: blue;

  &:hover {
    background-color: darkblue;
  }
`;

const SecondaryButton = styled(Button)`
  background-color: gray;

  &:hover {
    background-color: darkgray;
  }
`;

export default App;
