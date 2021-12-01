import React from "react";
import { Card, GU, useTheme, useViewport } from "@1hive/1hive-ui";
import flowerError from "../../assets/flowerError.svg";
import { styles } from "./global.styled";

function GlobalErrorScreen({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const { ErrorWrapper, ErrorContent, ErrorImg } = styles(theme);

  return (
    <ErrorWrapper>
      <ErrorContent>
        <Container>
          <ErrorImg src={flowerError} alt="" />
          {children}
        </Container>
      </ErrorContent>
    </ErrorWrapper>
  );
}

function Container({ children }: { children: React.ReactNode }) {
  const theme = useTheme();
  const { width } = useViewport();
  const { Container, ContainerWrapper } = styles(theme);

  return width < 60 * GU ? (
    <Container>
      <ContainerWrapper>{children}</ContainerWrapper>
    </Container>
  ) : (
    <Card
      css={`
        display: block;
        padding: ${5 * GU}px ${6 * GU}px;
        width: 100%;
        max-width: ${72 * GU}px;
        height: auto;
        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
        cursor: unset;
      `}
    >
      {children}
    </Card>
  );
}

export default GlobalErrorScreen;
