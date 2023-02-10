import React from "react";
import styled from "styled-components";

import { Button } from "@kleros/ui-components-library";

const Content: React.FC = () => {
  return (
    <>
      <AccountDisplay>
        <Avatar />
        <div className="account-info">
          <small>0x11ac...67e2</small>
          <label>List Creator</label>
        </div>
      </AccountDisplay>
      <Button text="Remove List" variant="secondary" />
    </>
  );
};
export default Content;

const AccountDisplay = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;

  .account-info {
    display: flex;
    flex-direction: column;
    gap: 4px;
  }
`;

const Avatar = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: ${({ theme }) => theme.stroke};
`;
