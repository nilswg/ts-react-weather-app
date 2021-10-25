import { useState } from "react";
import styled from "styled-components";

interface SwitchButtonProps {
  id: string;
  checked: boolean;
  theme: SwitchButtonThemeProps;
  onClick?: (e: { id: string; isChecked: boolean }) => void;
}

interface SwitchButtonThemeProps {
  width?:string;
  afterColor?: string;
  beforeColor?: string;
  ballColor?: string;
}

const SwitchBtn = (props: SwitchButtonProps) => {
  const { checked, id, theme } = props;
  const [isChecked, setIsChecked] = useState(checked);

  const handleClick = (e: any) => {
    setIsChecked(!isChecked);
    if (props.onClick){
      props.onClick({id, isChecked});
    }
  };

  return (
    <Container {...theme}>
      <HiddenCheckBoxInput
        type="checkbox"
        id={id || ""}
        onClick={handleClick}
      />
      <ToogleFill checked={isChecked} />
    </Container>
  );
};

export default SwitchBtn;


const Container = styled.label<SwitchButtonThemeProps>`
  --width: ${(props) => props.width || "2rem"};
  --height: calc(var(--width) / 2);
  --radius: calc(var(--height) / 2);
  --beforeColor: ${(props) => props.beforeColor || "#ddd"};
  --afterColor: ${(props) => props.afterColor || "#34deeb"};
  --ballColor: ${(props) => props.ballColor || "#fff"};
  display: inline-block;
  cursor: pointer;
`;

const HiddenCheckBoxInput = styled.input`
  display: none;
`;

const ToogleFill = styled.div<{ checked: boolean }>`
  /* 底色 */
  position: relative;
  width: var(--width);
  height: var(--height);
  border-radius: var(--radius);
  background: ${(props) =>
    props.checked ? `var(--afterColor)` : `var(--beforeColor)`};
  transition: background 0.2s;

  /* 球球與陰影效果 */
  ::after {
    /* 透過after實現了相對內部移動的效果 */
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    height: var(--height);
    width: var(--height);
    background: var(--ballColor);
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.25);
    border-radius: var(--radius);
    transform: ${(props) =>
      props.checked ? `translateX(110%)` : `translateX(0%)`};
    transition: transform 0.5s;
  }
`;
