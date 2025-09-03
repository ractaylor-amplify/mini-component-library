import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';

import Icon from '../Icon';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  small: {
    "--border-width": "1px",
    "--font-size": 14/16,
    "--padding": "4px 0 4px 24px",
  },
  large: {
    "--border-width": "2px",
    "--font-size": 18/16,
    "--padding": "8px 0 8px 36px",
  }
}

const ICON_SIZES = {
  small: {
    size: 16,
    strokeWidth: 1
  },
  large: {
    size: 24,
    strokeWidth: 2
  }
};

const IconInput = ({
  label,
  icon,
  width = 250,
  size,
  placeholder,
}) => {
  let styles = SIZES[size];

  return (
    <Wrapper>
      <VisuallyHidden>{label}</VisuallyHidden>
      <CustomInput placeholder={placeholder} width={width} style={styles} />
      <IconWrapper>
        <Icon id={icon} size={ICON_SIZES[size].size} strokeWidth={ICON_SIZES[size].strokeWidth} />
      </IconWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  height: 100%;
  width: max-content;
  top: 0;
  left: 0;
`;

const CustomInput = styled.input`
  width: ${props => props.width}px;
  border: none;
  border-bottom: var(--border-width) solid ${COLORS.black};
  font-size: calc(var(--font-size) * 1rem);
  padding: var(--padding);

  line-height: 1;
  font-family: 'Roboto', sans-serif;
  letter-spacing: 0;
  color: ${COLORS.gray700};
  font-weight: 700;

  &::placeholder {
    color: ${COLORS.gray500};
    font-weight: 400;
  }

  &:focus {
    outline-offset: 2px;
  }

  &:hover {
    color: ${COLORS.black};
  }
`;

const IconWrapper = styled.div`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  color: ${COLORS.gray700};
  pointer-events: none;

  ${CustomInput}:hover + & {
    color: ${COLORS.black};
  }
`;

export default IconInput;
