// import React from 'react';
import styled from '@emotion/styled';
import AccordionSummaryComp from '../../../../../base/accordionSummary/AccordionSummary';
import TypographyComp from '../../../../../base/typography/Typography';
import BoxComp from '../../../../../base/box/Box';
import ButtonComp from '../../../../../base/button/Button';
import ClearIcon from '@mui/icons-material/Clear';
import ArrowForwardIosSharpIcon from '@mui/icons-material/ArrowForwardIosSharp';

const CustomAccordionSummaryComp = styled(AccordionSummaryComp)`
  background-color: ${({ theme }) =>
    theme.palette.mode === 'dark' ? 'rgba(255, 255, 255, .05)' : 'rgba(0, 0, 0, .03)'};
  flex-direction: row-reverse;

  & .MuiAccordionSummary-expandIconWrapper.Mui-expanded {
    transform: rotate(90deg);
  }

  & .MuiAccordionSummary-content {
    margin-left: ${({ theme }) => theme.spacing(2)};

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }
`;

const ButtonWrapperBox = styled(BoxComp)`
  display: flex;
  flex-direction: row;
  justify-content: end;
  flex-wrap: wrap;
  gap: 10px;
`;

const SummarySection = ({ onClear }: { onClear: () => void }) => {
  return (
    <CustomAccordionSummaryComp expandIcon={<ArrowForwardIosSharpIcon sx={{ fontSize: '0.9rem' }} />}>
      <TypographyComp variant="h5">component.readyMadeFiltersTitle</TypographyComp>

      <ButtonWrapperBox>
        <ButtonComp
          variant="contained"
          color="error"
          endIcon={<ClearIcon />}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            onClear();
          }}
        >
          component.readyMadeFiltersClearFilterButtonText
        </ButtonComp>
      </ButtonWrapperBox>
    </CustomAccordionSummaryComp>
  );
};

export default SummarySection;
