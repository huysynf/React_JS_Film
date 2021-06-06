import React from 'react';
import styled from 'styled-components';

const MessageError = ({message,className, children}) => {
  return (
      <Message className={className}>{message}{children}</Message>
  );
};

const Message  = styled.div`
      display: flex;
      color: rgba(249,0,1,1);
`;

export default MessageError;
