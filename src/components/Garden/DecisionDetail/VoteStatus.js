/** @jsx jsx */
import React from 'react';
import { IconCheck, IconCross, GU, textStyle, useTheme } from '@1hive/1hive-ui';

import celesteIconSvg from '@assets/celeste-icon.svg';
import challengeIconSvg from '@assets/challenge-icon.svg';
import { css, jsx } from '@emotion/react';
import styled from 'styled-components';

export const getStatusAttributes = (vote, theme) => {
  const { isAccepted, statusData } = vote;
  if (statusData.open) {
    if (isAccepted) {
      return {
        label: 'Will pass',
        Icon: IconCheck,
        color: theme.positive.toString(),
      };
    }

    return {
      label: "Won't pass",
      Icon: IconCross,
      color: theme.negative.toString(),
    };
  }
  if (statusData.cancelled) {
    return {
      label: 'Cancelled',
      Icon: IconCross,
      color: theme.negative.toString(),
      background: '#FFF8F8',
      borderColor: theme.negative.toString(),
    };
  }
  if (statusData.rejected) {
    return {
      label: 'Rejected',
      Icon: IconCross,
      color: theme.negative.toString(),
    };
  }
  if (statusData.accepted) {
    return {
      label: 'Passed',
      Icon: IconCheck,
      color: theme.positive.toString(),
    };
  }
  if (statusData.pendingExecution) {
    return {
      label: 'Passed (pending)',
      Icon: IconCheck,
      color: theme.positive.toString(),
    };
  }
  if (statusData.executed) {
    return {
      label: 'Passed (enacted)',
      Icon: IconCheck,
      color: theme.positive.toString(),
    };
  }
  if (statusData.disputed) {
    return {
      label: 'Waiting for celeste',
      iconSrc: celesteIconSvg,
      color: '#8253A8',
      background: '#FCFAFF',
      borderColor: '#8253A8',
    };
  }
  if (statusData.challenged) {
    return {
      label: 'Challenged',
      iconSrc: challengeIconSvg,
      color: '#F5A623',
      background: '#FFFDFA',
      borderColor: '#F5A623',
    };
  }
  if (statusData.settled) {
    return {
      label: 'Settled',
      Icon: IconCross,
      color: theme.contentSecondary.toString(),
      background: theme.background.toString(),
    };
  }
};

const VoteStatus = ({ vote }) => {
  const theme = useTheme();

  const { Icon, iconSrc, color, label } = getStatusAttributes(vote, theme);

  return (
    <Main
      css={css`
        ${textStyle('body2')};
        color: ${color || theme.surfaceContentSecondary.toString()};
      `}
    >
      {iconSrc ? (
        <img
          src={iconSrc}
          alt=""
          width="24"
          height="24"
          css={css`
            display: block;
            margin-right: ${0.5 * GU}px;
          `}
        />
      ) : (
        Icon && <Icon />
      )}
      <StatusLabel spaced={Boolean(Icon)}>{label}</StatusLabel>
    </Main>
  );
};

const Main = styled.span`
  display: flex;
  align-items: center;
`;

const StatusLabel = styled.span`
  margin-left: ${({ spaced }) => (spaced ? `${0.5 * GU}px` : '0')};
  text-transform: uppercase;
`;

export default VoteStatus;
