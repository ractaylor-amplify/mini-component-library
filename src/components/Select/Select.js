import React from 'react';
import styled from 'styled-components';

import { COLORS } from '../../constants';
import Icon from '../Icon';
import { getDisplayedValue } from './Select.helpers';

const Select = ({ label, value, onChange, children }) => {
  const displayedValue = getDisplayedValue(value, children);

  return (
    <Wrapper>
      <StyledSelect value={value} onChange={onChange}>
        {children}
      </StyledSelect>
      <PresentationLabel>
        {displayedValue}
        <CustomIcon>
          <Icon id="chevron-down" size={24} strokeWidth={2}/>
        </CustomIcon>
      </PresentationLabel>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  width: max-content;
`;

const StyledSelect = styled.select`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
`;

const PresentationLabel = styled.div`
  background: ${COLORS.transparentGray15};
  border-radius: 8px;
  border: none;
  padding: 16px 52px 16px 12px;

  font-family: 'Roboto';
  font-weight: 400;
  font-size: 16px;
  line-height: 1;
  letter-spacing: 0;
  color: ${COLORS.gray700};
  pointer-events: none;

  ${StyledSelect}:focus + & {
    outline: 2px auto -webkit-focus-ring-color;
  }

  ${StyledSelect}:hover + & {
    color: ${COLORS.black};
  }
`;

const CustomIcon = styled.div`
  position: absolute;
  top: 50%;
  right: 16px;
  transform: translateY(-50%);
  pointer-events: none;
`;

export default Select;
