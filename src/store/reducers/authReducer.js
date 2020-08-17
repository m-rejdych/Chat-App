import { AUTH } from '../constants';

const initialState = {
  email: '',
  userId: '',
  name: '',
  guest: '',
  loading: false,
  error: null,
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH.SIGN_UP:
      return { ...state, loading: true };
    case AUTH.SIGN_UP_SUCCESS:
      return { loading: false, guest: '', error: null, ...payload };
    case AUTH.SIGN_UP_FAIL:
      return { ...state, loading: false, error: payload };
    case AUTH.LOG_IN:
      return { ...state, loading: true };
    case AUTH.LOG_IN_SUCCESS:
      return { loading: false, guest: '', error: null, ...payload };
    case AUTH.LOG_IN_FAIL:
      return { ...state, loading: false, error: payload };
    case AUTH.GUEST_LOG_IN:
      return { ...state, email: '', userId: '', name: '', guest: payload };
    default:
      return state;
  }
};

export default authReducer;
