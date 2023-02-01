"use client";

import React from 'react';
import {ChakraProvider, Box, Heading, Text} from '@chakra-ui/react';
import { Inter } from '@next/font/google';
const inter = Inter({ subsets: ['latin'],
})

export default function Header() {
  return (
    <ChakraProvider>
      <Box pb='28' as="section">
      <div className="App">
     <Box 
     className={inter.className}
     color='#F7FAFC' 
     bg='#6B46C1' 
     pt='90px' 
     pb='198px'
     px='8px'>
      <Heading 
      color='#F7FAFC'
      fontWeight='extrabold' 
      fontSize='5xl'>Simple pricing for your business </Heading>
     <Text 
     opacity='0.84' 
     fontWeight='medium' 
     fontSize='2xl' 
     pt='4px'
     >Plans that are carefully crafted to suit your business</Text>
     </Box>
     </div>
     </Box>
     </ChakraProvider>
    )
}
