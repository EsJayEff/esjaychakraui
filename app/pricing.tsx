"use client";

import {Stack,StackProps, Icon,HStack, Box, Flex, Button, Heading, Text,ChakraProvider} from '@chakra-ui/react';
import React from 'react';
import { Inter } from '@next/font/google';
import './globals.css'
import {CheckIcons,MoneyBack,HassleFree,NoMonthlySub,} from './icon'
const inter = Inter({ subsets: ['latin'],
})



export const ListItem = (props:StackProps)=>{
  const {children, ...rest} = props;
  return(
    <HStack as='li' spacing='20px' {...rest} >
      <Icon as={CheckIcons} w='22px' h='22px' />
     <Text className={inter.className}> {children} </Text>
     </HStack>
  )
}




export default function Pricing() {
  return (
    <ChakraProvider>
      

    <div className="App">
    <Box className={inter.className}  maxW='994px' margin="auto" mt='-256px' borderRadius='12px' overflow='hidden'
    boxShadow='2xl' >
        <Flex> 
            <Box bg='#F0EAFB' p='60px'>
                <Text  fontSize='24px' fontWeight='800'>Premium Pro</Text>
                <Heading  as='h3' fontSize='60px'>$329</Heading>
                <Text  fontSize='18px' fontWeight='500' mt='12px'>billed just once</Text>
                <Button colorScheme='purple' size='lg' w='282px' mt='24px'>Get Started</Button>
            </Box>
            <Box p='60px' fontSize='18px' bg='white'>
        <Text align="left">Access these features when you get this pricing package for your business.</Text>
       
        <Stack as='ul' spacing='20px' pt='24px'>
      <ListItem>International calling and messaging API</ListItem>
      <ListItem>Additional phone numbers</ListItem>
      <ListItem>Automated messages via Zapier</ListItem>
      <ListItem>24/7 support and consulting</ListItem>
        </Stack>
        </Box>
        </Flex>
    </Box>
    </div>
    </ChakraProvider>
  )
}
