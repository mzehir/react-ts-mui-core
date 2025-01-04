import React from 'react';
import InputBaseComp from '../../base/inputBase/InputBase';
import IconButtonComp from '../../base/iconButton/IconButton';
import { styled, alpha } from '@mui/material/styles';
import SearchIcon from '@mui/icons-material/Search';

const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.black, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.black, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBaseComp)(({ theme }) => ({
  '& .MuiInputBase-input': {
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '60ch',
    },
  },
}));

const CustomIconButton = styled(IconButtonComp)`
  padding: 2;
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`;

const SearchbarField: React.FC = () => {
  return (
    <Search>
      <CustomIconButton>
        <SearchIcon fontSize="small" />
      </CustomIconButton>
      <StyledInputBase placeholder="component.search" inputProps={{ 'aria-label': 'search' }} />
    </Search>
  );
};

export default SearchbarField;
