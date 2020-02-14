import styled, { css, keyframes } from "styled-components"

const scaleDown = keyframes`
    from {
      transform:scale(1);
    }
    to {
      transform:scale(0.5);
    }
`

const scale = ({ time = "0.6s", type = "ease" } = {}) =>
  css`
    animation: ${time} ${scaleDown} ${type};
  `

export const List = styled.ul`
  display: flex;
  overflow: scroll;
  background: #fafafa;
  border-bottom: 1px solid #dbdbdb;
  width: 100%;
  padding-top: 14px;
  padding-bottom: 14px;
  ${(props) =>
    props.fixed &&
    css`
       {
        z-index: 999;
        background: #fff;
        border-radius: 60px;
        box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
        left: 0;
        right: 0;
        top: -20px;
        margin: 0 auto;
        padding-top: 0px;
        padding-bottom: 0px;
        max-width: 400px;
        padding: 5px;
        position: fixed;
        transform: scale(0.5);
        ${scale}
      }
    `}
`

export const Item = styled.li`
  padding: 0 8px;
`
