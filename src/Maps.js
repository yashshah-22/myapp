import React from 'react'
import Tracking from './Tracking'
import { ChakraProvider, theme } from '@chakra-ui/react'

const Maps=()=>{
    return(
        <>
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <Tracking />
    </ChakraProvider>
  </React.StrictMode>
  </>
    )
}
export default Maps;