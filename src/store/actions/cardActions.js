import { CARDS } from '../constants';

const setUserAuth = () => ({
  type: CARDS.SET_USER_AUTH,
});

const setGuestAuth = () => ({
  type: CARDS.SET_GUEST_AUTH,
});

export { setUserAuth, setGuestAuth };
