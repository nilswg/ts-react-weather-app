import styled from "styled-components";

const pieChart = (props: { value: number }) => {
  return (
    <ChartContainer>
      <Bottom value={props.value} />
      <Number>{props.value}%</Number>
    </ChartContainer>
  );
};

export default pieChart;

const ChartContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: none;
  height: 12em;
  width: 12em;
`;

const Bottom = styled.div<{ value: number }>`
  position: relative;
  width: 10em;
  height: 10em;
  border-radius: 50%;
  background: conic-gradient(
    #3f87a6 ${(prop) => prop.value}%,
    var(--pieChartbgColor) ${(prop) => 100 - prop.value}%
  );
  transition: 1s ease-in-out;

  ::before {
    content: "";
    display: block;
    position: absolute;
    top: 50%;
    left: 50%;
    width: 8em;
    height: 8em;
    border-radius: 50%;
    background-color: var(--pieChartbgColor);
    transform: translate(-50%, -50%);
    box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.6);
  }
`;

const Number = styled.h1`
  position: absolute;
  font-size: 2rem;
  background-color: none;
  color: rgb(123, 152, 178);
  text-shadow: 0.1em 0.1em 0.2em rgba(0, 0, 0, 0.3);
`;
