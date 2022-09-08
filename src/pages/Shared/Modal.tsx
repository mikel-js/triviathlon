import React from 'react';
import styled from 'styled-components';

interface ParentCompProps {
  childComp?: React.ReactNode;
}

const StyledModal = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 990;
  background: rgba(0, 0, 0, 0.85);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Modal: React.FC<ParentCompProps> = (props) => {
  const { childComp } = props;
  return <StyledModal>{childComp}</StyledModal>;
};

export default Modal;
