import React, { useCallback } from 'react';
import { Checkbox, EthIdenticon, Field, GU, Info, isAddress, Link, RADIUS, TextInput, useTheme } from '@1hive/1hive-ui';
/** @jsx jsx */
import { css, jsx } from '@emotion/react';

function GnosisSafeField({ gnosisSafeAddress, gnosisSafeChecked, onGnosisSafeAddressChange, onGnosisSafeCheckChange }) {
  const theme = useTheme();

  const hanleGnosisSafeCheckChanged = useCallback(
    checked => {
      if (!checked) {
        onGnosisSafeAddressChange('');
      }

      onGnosisSafeCheckChange(checked);
    },
    [onGnosisSafeAddressChange, onGnosisSafeCheckChange],
  );

  const handleGnosisSafeAddressChange = useCallback(
    event => {
      onGnosisSafeAddressChange(event.target.value);
    },
    [onGnosisSafeAddressChange],
  );

  return (
    <div>
      <Field label="Common Pool">
        {({ id }) => (
          <div>
            <div
              css={css`
                display: flex;
                align-items: center;
                height: ${5 * GU}px;
              `}
            >
              <div
                css={css`
                  width: 145px;
                  display: flex;
                  align-items: center;
                `}
              >
                <Checkbox
                  checked={gnosisSafeChecked}
                  onChange={hanleGnosisSafeCheckChanged}
                  css={css`
                    border-color: ${theme.accent.toString()};
                    background: ${theme.surface.toString()};
                  `}
                />
                <div
                  css={css`
                    margin-left: ${0.5 * GU}px;
                  `}
                >
                  <span
                    css={css`
                      white-space: nowrap;
                    `}
                  >
                    Use{' '}
                    <Link
                      href="https://gnosis-safe.io/"
                      style={{
                        textDecoration: 'none',
                      }}
                    >
                      Gnosis Safe
                    </Link>{' '}
                  </span>
                </div>
              </div>

              {gnosisSafeChecked && (
                <div
                  css={css`
                    position: relative;
                    margin-left: ${1 * GU}px;
                    width: 100%;
                  `}
                >
                  <TextInput
                    id={id}
                    onChange={handleGnosisSafeAddressChange}
                    placeholder="Gnosis Safe address"
                    value={gnosisSafeAddress}
                    wide
                    css={css`
                      padding-left: ${4.5 * GU}px;
                    `}
                  />
                  <div
                    css={css`
                      position: absolute;
                      top: ${1 * GU}px;
                      left: ${1 * GU}px;
                    `}
                  >
                    {isAddress(gnosisSafeAddress) ? (
                      <EthIdenticon address={gnosisSafeAddress} radius={RADIUS} />
                    ) : (
                      <div
                        css={css`
                          width: ${3 * GU}px;
                          height: ${3 * GU}px;
                          background: ${theme.disabled.toString()};
                          border-radius: ${RADIUS}px;
                        `}
                      />
                    )}
                  </div>
                </div>
              )}
            </div>
            {gnosisSafeChecked && (
              <Info
                mode="warning"
                css={css`
                  margin-top: ${3 * GU}px;
                `}
              >
                Using a Gnosis Safe will require for you to set the FundsManager contract as a module on your Safe so
                that it allows it to transfer funds after execution of Conviction Voting proposals. You can find the
                FundsManager address in the settings page of your garden.
              </Info>
            )}
          </div>
        )}
      </Field>
    </div>
  );
}

export default GnosisSafeField;
