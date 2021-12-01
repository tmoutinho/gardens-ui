import styled from "@emotion/styled";
import { textStyle, GU, RADIUS } from "@1hive/1hive-ui";

export const styles = (theme) => ({
  ErrorTitle: styled.div`
    color: ${theme.surfaceContent};
    ${textStyle("title2")};
    margin-bottom: ${1.5 * GU}px;
    text-align: center;
  `,
  ErrorParagraph: styled.p`
    margin-bottom: ${5 * GU}px;
    text-align: center;
    color: ${theme.surfaceContentSecondary};
    ${textStyle("body2")};
  `,
  DetailsTitleWrapper: styled.div`
    text-align: left;
    margin-bottom: ${5 * GU}px;
  `,
  OpenedWrapper: styled.div`
    overflow: auto;
    padding: ${2 * GU}px;
    max-height: 200px;
    border-radius: ${RADIUS}px;
    color: ${theme.text};
    white-space: pre;
    background: ${theme.surfaceUnder};
    ${textStyle("body3")};
  `,
  OpenedTitle: styled.h2`
    ${textStyle("body2")};
    margin-bottom: ${1.5 * GU}px;
  `,
  ReportWrapper: styled.div<{
    reportCallback: boolean;
  }>`
    ${({ reportCallback }) => `
      ${reportCallback &&
        `
        display: flex;
        justify-content: flex-end;
      `}
    `}
  `,
});
