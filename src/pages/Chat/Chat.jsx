import React from 'react';
import { Box } from '@material-ui/core';

import ChatContainer from '../../components/ChatContainer';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';

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
    <RoomsContainer collection={room} />
    <ChatContainer collection={room} />
  </Box>
);

export default Chat;
