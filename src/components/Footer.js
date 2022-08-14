
import {
    Box,
    chakra,
    Container,
    Link,
    SimpleGrid,
    Stack,
    Text,
    VisuallyHidden,
    Input,
    IconButton,
   useColorModeValue,
  } from '@chakra-ui/react';
  import { ReactNode } from 'react';
  import { FaInstagram, FaTwitter, FaYoutube } from 'react-icons/fa';
  import { BiMailSend } from 'react-icons/bi';
  import { Image } from '@chakra-ui/react';
  
  
  
  const SocialButton = ({
    children,
    label,
    href,
  }: {
    children: ReactNode;
    label: string;
    href: string;
  }) => {
    return (
      <chakra.button
        bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
        rounded={'full'}
        w={8}
        h={8}
        cursor={'pointer'}
        as={'a'}
        href={href}
        display={'inline-flex'}
        alignItems={'center'}
        justifyContent={'center'}
        transition={'background 0.3s ease'}
        _hover={{
          bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
        }}>
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  
  const ListHeader = ({ children }: { children: ReactNode }) => {
    return (
      <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
        {children}
      </Text>
    );
  };
  
  export default function LargeWithNewsletter() {
    return (
      <Box
        bg={useColorModeValue('gray.50', 'gray.900')}
        color={useColorModeValue('gray.700', 'gray.200')}>
        <Container as={Stack} maxW={'6xl'} py={10}>
          <SimpleGrid
            templateColumns={{ sm: '1fr 1fr', md: '2fr 1fr 1fr 2fr' }}
            spacing={8}>
            <Stack spacing={2}>
              <Box>
              <Image src="https://i.pinimg.com/originals/8c/64/69/8c64695ea89ddb51f9b53fa9dfe315e3.png" alt="logo" className='logo__footer' />
              </Box>
              <Text fontSize={'sm'}>
                © 2022 Book Store KODLUYORUZ project. All rights reserved
              </Text>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Kurumsal</ListHeader>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Hakkımızda</Link>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Blog</Link>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>İletişim</Link>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Fiyatlama</Link>
              
            </Stack>
            <Stack align={'flex-start'} >
              <ListHeader>Destek</ListHeader>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Yardım Merkezi</Link>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Servisler</Link>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Legal</Link>
              <Link _hover={{color: 'green.600',fontSize: 16.5,}} href={'#'}>Gizlilik Politikası</Link>
              
            </Stack>
            <Stack align={'flex-start'}>
              <ListHeader>Bültenimize Üye Olun</ListHeader>
              <Stack direction={'row'}>
                <Input
                  placeholder={'E-mail adresiniz'}
                  bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
                  border={0}
                  _focus={{
                    bg: 'whiteAlpha.300',
                  }}
                />
                <IconButton
                  bg={useColorModeValue('green.400', 'green.800')}
                  color={useColorModeValue('white', 'gray.800')}
                  _hover={{
                    bg: 'teal',
                  }}
                  aria-label="Subscribe"
                  icon={<BiMailSend />}
                />
                
              </Stack>
              <Stack direction={'row'} spacing={6} pt={8}>
                <SocialButton label={'Twitter'} href={'#'}>
                  <FaTwitter />
                </SocialButton>
                <SocialButton label={'YouTube'} href={'#'}>
                  <FaYoutube />
                </SocialButton>
                <SocialButton label={'Instagram'} href={'#'}>
                  <FaInstagram />
                </SocialButton>
              </Stack>
            </Stack>
          </SimpleGrid>
        </Container>
      </Box>
    );
  }