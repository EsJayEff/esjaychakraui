"use client";
import {CheckIcons,MoneyBack,HassleFree,NoMonthlySub,} from './icon'
import React, { ElementType } from 'react';
import {ChakraProvider, Box,Icon, HStack,Text,StackProps} from '@chakra-ui/react';
import { Inter } from '@next/font/google';
//import './globals.css'
const inter = Inter({ subsets: ['latin'],
})

interface FeatureProps extends StackProps{
    icon:ElementType;
}


function Feature(props:FeatureProps) {
    const {icon, children, ...rest}=props;
    return (
      <ChakraProvider>
        <HStack {...rest} spacing='24px'>
            <Icon as={icon} boxsize ='48px' w='42px' h='42px'/>
            <Text fontSize="18px" fontWeight='700'>{children}</Text>
        </HStack>
      </ChakraProvider>
      )}

export default function FooterFeatures(){
    return(
        <ChakraProvider>
        <Box maxW='1024px' m='auto' pt='60px' pb='32px'>
        <HStack px='48px' spacing='20px'>
            <Feature icon={MoneyBack}>
            30 days money back Gaurantee
            </Feature>
            <Feature icon={HassleFree}>
            No setup fees 100% hassle-free
            </Feature>
            <Feature icon={NoMonthlySub}>
            No monthly subscription Pay once and for all
            </Feature>
        </HStack>
        </Box>
        </ChakraProvider>
    )
}