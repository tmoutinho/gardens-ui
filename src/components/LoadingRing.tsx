import React from 'react';
import { GU, LoadingRing as LoadingRingComponent } from '@1hive/1hive-ui';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

export default function LoadingRing() {
  return (
    <LoadingRingComponent
      mode="half-circle"
      css={css`
        width: ${4 * GU}px;
        height: ${4 * GU}px;

        & > svg {
          width: ${4 * GU}px;
          height: ${4 * GU}px;
      `}
    />
  );
}