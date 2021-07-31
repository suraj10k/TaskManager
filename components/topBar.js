import React from "react";
import { VStack, HStack ,  Button, Icon, Text, NativeBaseProvider, Center, Box, StatusBar ,IconButton,Image,Avatar,SearchIcon } from "native-base";
import TabView from "./TabView"

function TopBar(){
    return (
      <>
          <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
  
          <Box safeAreaTop backgroundColor="#6200ee" />
  
          <HStack bg='white' px={1} py={3} justifyContent='space-between' alignItems='center'>
            <HStack space={4} alignItems='center'>
              <VStack space={0}>
                <Text color="grey" fontSize={15} fontWeight='bold'>Hello Steve,</Text>
                <Text color="black" fontSize={30} fontWeight='bold'>Good Morning</Text>
              </VStack>
            </HStack>
            <HStack space={4}>
                <Box mt={4}>
               <SearchIcon size={6} color={"grey"}  />
               </Box>
               <Avatar size={"md"}
            source={{
                    uri: "https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg",
                    }}
      >
        SS
      </Avatar>
          </HStack>
          </HStack>
          <TabView />
      </>
    )
  }
  
  export default function () {
    return (
      <NativeBaseProvider>
        <TopBar/>
      </NativeBaseProvider>
    );
  }