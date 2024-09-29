import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { localStorageRemoveItem, localStorageSetItem } from '../../utils/methods/localStorage';
import { UserType } from '../../utils/enums/userTypes';

interface AuthState {
  userType: UserType;
  token: string | null;
  name: string | null;
  surname: string | null;
  phone: string | null;
  email: string | null;
}

const initialState: AuthState = {
  userType: 'guest',
  token: null,
  name: '',
  surname: '',
  phone: '',
  email: '',
};

export interface setAuthFieldsPayload {
  userType: UserType;
  token: string;
  name: string;
  surname: string;
  phone: string;
  email: string;
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setAuthFields: (state, action: PayloadAction<setAuthFieldsPayload>) => {
      state.userType = action.payload.userType || 'guest';
      state.token = action.payload.token;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.phone = action.payload.phone;
      state.email = action.payload.email;
      localStorageSetItem('userFields', {
        userType: action.payload.userType || 'guest',
        token: action.payload.token,
        name: action.payload.name,
        surname: action.payload.surname,
        phone: action.payload.phone,
        email: action.payload.email,
      });
    },
    clearAuthFields: (state) => {
      state.userType = 'guest';
      state.token = null;
      state.name = null;
      state.surname = null;
      state.phone = null;
      state.email = null;

      localStorageRemoveItem('userFields');
    },
  },
});

export const { setAuthFields, clearAuthFields } = authSlice.actions;
export default authSlice.reducer;
