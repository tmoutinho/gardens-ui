import React from "react";
import { useHistory } from "react-router";
import { Button, GU, useTheme } from "@1hive/1hive-ui";
import { getNetworkName } from "../../utils/web3-utils";
import { useWallet } from "@/providers/Wallet";
import { styles } from "./dao.styled";

function DAONotFoundError({ daoId }) {
  const theme = useTheme();
  const history = useHistory();
  const { chainId } = useWallet();
  const { Title, Wrapper, Span } = styles(theme);

  return (
    <React.Fragment>
      <Title>Garden not found</Title>
      <Wrapper>
        It looks like there’s no garden associated with {<Span>“{daoId}”</Span>}{" "}
        on the {getNetworkName(chainId)} network
      </Wrapper>
      <Button
        mode="strong"
        onClick={() => history.push("/home")}
        wide
        css={`
          margin-top: ${3 * GU}px;
        `}
      >
        Go back
      </Button>
    </React.Fragment>
  );
}

export default DAONotFoundError;
