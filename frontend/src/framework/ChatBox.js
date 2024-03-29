import React from 'react'
import { Box } from "@chakra-ui/react"
import { ChatState } from '../Context/ChatProvider'
import SingleChat from './SingleChat'
const ChatBox = ({fetchAgain,setFetchAgain}) => {
  // console.log(fetchAgain,"chatbox");
  const {selectedChat} =ChatState();
  return (

   <Box
    d={{ base: selectedChat ? "flex" : "none", md: "flex" }}
      alignItems="center"
      flexDir="column"
      p={3}
      bg="rgb(73, 64, 150)"
      z-index = "3"
      w={{ base: "100%", md: "68%" }}
      borderRadius="lg"
      borderWidth="1px"
      overflow={'hidden'}
   >
    <SingleChat fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />
   </Box>
  )
}

export default ChatBox
