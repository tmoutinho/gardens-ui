/** @jsx jsx */
import React from 'react';
import { useHistory } from 'react-router';
import { Button, GU, textStyle, useTheme } from '@1hive/1hive-ui';
import { getNetworkName } from '../../utils/web3-utils';
import { useWallet } from '@/providers/Wallet';
import { css, jsx } from '@emotion/react';

function DAONotFoundError({ daoId }) {
  const theme = useTheme();
  const history = useHistory();
  const { chainId } = useWallet();

  return (
    <React.Fragment>
      <h1
        css={css`
          color: ${theme.surfaceContent.toString()};
          ${textStyle('title2')};
          margin-bottom: ${1.5 * GU}px;
          text-align: center;
        `}
      >
        Garden not found
      </h1>
      <div
        css={css`
          margin-bottom: ${3 * GU}px;
          text-align: center;
          color: ${theme.surfaceContentSecondary.toString()};
          ${textStyle('body2')};
        `}
      >
        It looks like there’s no garden associated with{' '}
        {
          <span
            css={css`
              font-weight: bold;
            `}
          >
            “{daoId}”
          </span>
        }{' '}
        on the {getNetworkName(chainId)} network
      </div>
      <Button
        mode="strong"
        onClick={() => history.push('/home')}
        wide
        css={css`
          margin-top: ${3 * GU}px;
        `}
      >
        Go back
      </Button>
    </React.Fragment>
  );
}

export default DAONotFoundError;