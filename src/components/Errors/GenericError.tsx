import React, { useState, useCallback } from "react";
import {
  Button,
  ButtonBase,
  Link,
  GU,
  IconDown,
  textStyle,
  useTheme,
} from "@1hive/1hive-ui";
import { styles } from "./index.styled";

const SUPPORT_URL = "https://github.com/1hive/gardens/issues/new";

type GenericErrorProps = {
  detailsTitle: any;
  detailsContent: any;
  reportCallback?: () => void;
};

const GenericError = React.memo(function GenericError({
  detailsTitle,
  detailsContent,
  reportCallback,
}: GenericErrorProps) {
  const theme = useTheme();
  const [opened, setOpened] = useState(false);
  const toggle = useCallback(() => {
    setOpened(!opened);
  }, [opened, setOpened]);
  const {
    ErrorTitle,
    ErrorParagraph,
    DetailsTitleWrapper,
    OpenedWrapper,
    OpenedTitle,
    ReportWrapper,
  } = styles(theme);

  return (
    <React.Fragment>
      <ErrorTitle>An unexpected error has occurred</ErrorTitle>
      <ErrorParagraph>
        Something went wrong! You can restart the app, or you can{" "}
        <Link href={SUPPORT_URL}>tell us what went wrong</Link> if the problem
        persists
      </ErrorParagraph>
      {(detailsTitle || detailsContent) && (
        <DetailsTitleWrapper>
          <ButtonBase
            onClick={toggle}
            css={`
              display: flex;
              align-items: center;
              color: ${theme.surfaceContentSecondary};
              ${textStyle("label2")};
            `}
          >
            Click here to see more details
            <IconDown
              size="tiny"
              css={`
                margin-left: ${0.5 * GU}px;
                transition: transform 150ms ease-in-out;
                transform: rotate3d(0, 0, 1, ${opened ? 180 : 0}deg);
              `}
            />
          </ButtonBase>
          {opened && (
            <OpenedWrapper>
              {detailsTitle && <OpenedTitle>{detailsTitle}</OpenedTitle>}
              {detailsContent}
            </OpenedWrapper>
          )}
        </DetailsTitleWrapper>
      )}
      <ReportWrapper reportCallback={!!reportCallback}>
        {reportCallback && (
          <Button onClick={reportCallback}>Send Report</Button>
        )}
        <Button
          mode="strong"
          onClick={() => window.location.reload()}
          wide={!reportCallback}
          css={`
            margin-left: ${reportCallback ? 1.5 * GU : 0}px;
          `}
        >
          Reload
        </Button>
      </ReportWrapper>
    </React.Fragment>
  );
});

export default GenericError;
