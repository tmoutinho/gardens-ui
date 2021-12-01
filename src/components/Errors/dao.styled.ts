import styled from "@emotion/styled";
import { textStyle, GU } from "@1hive/1hive-ui";

export const styles = (theme) => ({
  Title: styled.h1`
    color: ${theme.surfaceContent};
    ${textStyle("title2")};
    margin-bottom: ${1.5 * GU}px;
    text-align: center;
  `,
  Wrapper: styled.div`
    margin-bottom: ${3 * GU}px;
    text-align: center;
    color: ${theme.surfaceContentSecondary};
    ${textStyle("body2")};
  `,
  Span: styled.span`
    font-weight: bold;
  `,
});
