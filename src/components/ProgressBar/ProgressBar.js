/* eslint-disable no-unused-vars */
import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import VisuallyHidden from '../VisuallyHidden';

const SIZES = {
  large: {
    "--borderRadius": "8px",
    "--height": "24px",
    "--barheight": "16px",
    "--padding": "4px"
  },
  medium: {
    "--borderRadius": "4px",
    "--height": "12px",
    "--barheight": "12px",
    "--padding": "0"
  },
  small: {
    "--borderRadius": "4px",
    "--height": "8px",
    "--barheight": "8px",
    "--padding": "0"
  }
};

const ProgressBar = ({ value, size }) => {
  const styles = SIZES[size];

  return <StyledProgressBar role="progressbar" aria-valuenow={value} aria-valuemin="0" aria-valuemax="100" style={styles}>
    <BarContainer size={size}>
      <Bar value={value}>
        <VisuallyHidden>{value}%</VisuallyHidden>
      </Bar>
    </BarContainer>
  </StyledProgressBar>;
};

const StyledProgressBar = styled.div`
  position: relative;
  width: 370px;
  border-radius: var(--borderRadius);
  height: var(--height);
  padding: var(--padding);
  background: ${COLORS.transparentGray15};
  box-shadow: 0px 2px 4px 0px ${COLORS.transparentGray35} inset;
`;

const BarContainer = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: ${props => props.size === 'large' ? 'calc(var(--borderRadius) / 2)' : 'var(--borderRadius)'};
  overflow: hidden;
`;

const Bar = styled.div`
  width: ${props => props.value}%;
  height: 100%;
  background: ${COLORS.primary};
`;

export default ProgressBar;
