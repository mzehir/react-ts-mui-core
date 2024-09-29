import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../redux/store';
import { increment, decrement, incrementByAmount } from '../../../redux/slices/counterSlice';
import { styled } from '@mui/material/styles';
import ArrowCircleDownIcon from '@mui/icons-material/ArrowCircleDown';
import IconButtonComp from '../../../components/base/iconButton/IconButton';
import DividerComp from '../../../components/base/divider/Divider';
import TypographyComp from '../../../components/base/typography/Typography';
import CardComp from '../../../components/base/card/Card';
import CardContentComp from '../../../components/base/cardContent/CardContent';
import BoxComp from '../../../components/base/box/Box';
import GridComp from '../../../components/base/grid/Grid';
import ButtonComp from '../../../components/base/button/Button';

const CustomIconButton = styled(IconButtonComp)`
  cursor: default;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const ReduxStandardExamp: React.FC = () => {
  const dispatch = useDispatch();
  const count = useSelector((state: RootState) => state.counter.value);
  return (
    <>
      <DividerComp>
        <TypographyComp variant="h2" gutterBottom display="inline">
          introduction.reduxBasicUse
        </TypographyComp>
      </DividerComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.valueObserve
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <GridComp container spacing={3}>
            <GridComp item xs={12}>
              <TypographyComp variant="h1" textAlign={'center'}>
                {count}
              </TypographyComp>
            </GridComp>
          </GridComp>
        </CardContentComp>
      </CardComp>

      <br />
      <br />

      <CardComp>
        <CardContentComp>
          <TypographyComp variant="h3" gutterBottom style={{ textAlign: 'center' }}>
            introduction.updateValue
          </TypographyComp>

          <BoxComp display={'flex'} justifyContent={'center'}>
            <CustomIconButton>
              <ArrowCircleDownIcon color="warning" />
              <ArrowCircleDownIcon color="primary" />
              <ArrowCircleDownIcon color="error" />
            </CustomIconButton>
          </BoxComp>

          <br />

          <BoxComp display={'flex'} justifyContent={'center'} gap={'15px'} flexWrap={'wrap'}>
            <ButtonComp variant={'outlined'} color={'success'} onClick={() => dispatch(increment())}>
              introduction.addOne
            </ButtonComp>

            <ButtonComp variant={'outlined'} color={'primary'} onClick={() => dispatch(incrementByAmount(count))}>
              introduction.addByValue
            </ButtonComp>

            <ButtonComp variant={'outlined'} color={'error'} onClick={() => dispatch(decrement())}>
              introduction.subtractOne
            </ButtonComp>
          </BoxComp>
        </CardContentComp>
      </CardComp>
    </>
  );
};

export default ReduxStandardExamp;
