import styled from "styled-components";

// https://medium.com/swlh/how-to-build-a-simple-and-interactive-bar-chart-with-react-js-and-css-in-js-6d48f0924d25

// const __DATA__ = [
//     { distance: 13, colors: ["#ffd847", "#e0a106"] },
//     { distance: 20, colors: ["#ff47ab", "#e0064e"] },
//     { distance: 16, colors: ["#add9c0", "#1da890"] },
//     { distance: 30, colors: ["#cbd9ad", "#7ca81d"] },
//     { distance: 22, colors: ["#d9c1ad", "#714511"] },
//   ];

interface UIBarData {
    distance: number, 
    colors: string[],
}

export const BarChart = (props:{min: UIBarData, max: UIBarData})=>{
    const {distance: distance1, colors: colors1} = props.min;
    const {distance: distance2, colors: colors2} = props.max;
    return (
        <>
        <BarChartContainer>
          <Number color={colors1[1]}>{distance1}°</Number>
          <MinBar height={distance1 * 2} colors={colors1} />
        </BarChartContainer>
        <BarChartContainer>
          <MaxBar height={distance2 * 2} colors={colors2} />
          <Number color={ colors2[1]}>{distance2}°</Number>
        </BarChartContainer>
        </>
      );
}

export default BarChart;

const BarChartContainer = styled.div`
    display: flex;
    align-items: center;
    background-color: var(--barChartbgColor);
    margin-top: 5px;
`

const Number = styled.span`
  padding: 0 5px;
  font-size: 1.5rem;
  text-align: center;
  color: ${(props) => props.color};
`;

const MinBar = styled.div<{ height: number; colors: string[] }>`
  width: ${(props) => props.height}px;
  height: 1.5rem;
  border-radius: 1rem 0 0 1rem;
  background: linear-gradient(
    to right,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;

const MaxBar = styled.div<{ height: number; colors: string[] }>`
  width: ${(props) => props.height}px;
  height: 1.5rem;
  border-radius: 0 1rem 1rem 0;
  background: linear-gradient(
    to left,
    ${(props) => props.colors[0]},
    ${(props) => props.colors[1]}
  );
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 420px) {
    width: 34px;
  }
`;
