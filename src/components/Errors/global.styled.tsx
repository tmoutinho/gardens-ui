import styled from "@emotion/styled";
import { GU } from "@1hive/1hive-ui";

export const styles = (theme) => ({
  ErrorWrapper: styled.div`
    height: 100vh;
    min-width: ${45 * GU}px;
    overflow: auto;
    background-repeat: repeat-x;
    background-size: cover;
    border-top-style: solid;
    border-top-width: 4px;
    border-top-color: #6050b0;
  `,
  ErrorContent: styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${8 * GU}px;
    min-height: 100%;
  `,
  ErrorImg: styled.img`
    display: block;
    margin: 0px auto 0px;
  `,
  Container: styled.div`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    min-width: ${45 * GU}px;
    overflow: auto;
    background: ${theme.surface};
    display: grid;
    align-items: center;
  `,
  ContainerWrapper: styled.div`
    padding: ${5 * GU}px ${6 * GU}px ${6 * GU}px;
  `,
});
