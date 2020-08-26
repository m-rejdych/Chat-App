import React from 'react';
import { Box } from '@material-ui/core';

import ChatContainer from '../../components/ChatContainer';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';
import ActiveUsersContainer from '../../components/ActiveUsersContainer/ActiveUsersContainer';

const Chat = ({
  match: {
    params: { room },
  },
}) => (
  <Box
    width="100%"
    height="100%"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box
      position="relative"
      bottom={21.5}
      mr={2}
      display="flex"
      flexDirection="column"
      height={600}
      justifyContent="space-evenly"
    >
      <RoomsContainer collection={room} />
      <ActiveUsersContainer />
    </Box>
    <ChatContainer collection={room} />
  </Box>
);

export default Chat;
