import React, { useState } from 'react';
import { Box, Button } from '@material-ui/core';
import ForumIcon from '@material-ui/icons/Forum';

import ChatContainer from '../../components/ChatContainer';
import RoomsContainer from '../../components/RoomsContainer/RoomsContainer';

const Chat = ({
  match: {
    params: { room },
  },
}) => {
  const [roomsOpen, setRoomsOpen] = useState(false);

  return (
    <Box
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <RoomsContainer
        collection={room}
        open={roomsOpen}
        onClose={() => setRoomsOpen(false)}
      />
      <Box height={600} mr={2}>
        <Button
          onClick={() => setRoomsOpen(true)}
          variant="contained"
          color="secondary"
          startIcon={<ForumIcon />}
        >
          Rooms
        </Button>
      </Box>
      <ChatContainer collection={room} />
    </Box>
  );
};

export default Chat;
