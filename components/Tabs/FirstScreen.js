import React from "react";
import { View,Text,HStack,VStack,Stack,Center,ScrollView} from "native-base";


import {
  Heading,
  Icon,
  AspectRatio,
  Image,
  NativeBaseProvider,
  Divider,
  Spacer,
  Flex,
  Avatar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons"
import { Box, FlatList} from "native-base"
import { Ionicons, FontAwesome } from '@expo/vector-icons';


const FirstScreen = (props) => {
  console.log("hi from fristview")

  console.log(props)
return(
<View mt={3} style={{flex:1,justifyContent:"center",alignItems:"center"}}>
    <Stack space={3} alignItems="center">
      <HStack space={6}>
        <ScrollView horizontal={true}>
        <Center
          mr={3}
          bg="grey"
          size={20}
          rounded="md"
          shadow={3}
        >
        <VStack>
         <Text textAlign="center" fontSize="md">1</Text>
         <Text fontWeight="bold" fontSize="md">Friday</Text>
        </VStack>
        </Center>
        <Center
        mr={3}
          size={20}
          bg="grey"
          rounded="md"
          shadow={3}
        >
        <VStack>
         <Text textAlign="center" fontSize="md">2</Text>
         <Text fontWeight="bold" fontSize="md">Saturday</Text>
        </VStack>
        </Center>
        <Center
        mr={3}
          size={20}
          bg="grey"
          rounded="md"
          shadow={3}
        >
          <VStack>
         <Text textAlign="center" fontSize="md">3</Text>
         <Text fontWeight="bold" fontSize="md">Sunday</Text>
        </VStack>
        </Center>
        
        <Center
        mr={3}
          size={20}
          bg="lightblue"
          rounded="md"
          shadow={5}
        >
          <VStack>
         <Text textAlign="center" fontSize="md">4</Text>
         <Text fontWeight="bold" fontSize="md">Monday</Text>
        </VStack>
        </Center>
        
        <Center
        mr={3}
         size={20}
          bg="grey"
          rounded="md"
          shadow={3}
        >
          <VStack>
         <Text textAlign="center" fontSize="md">5</Text>
         <Text fontWeight="bold" fontSize="md">Tuesday</Text>
        </VStack>
        </Center>
        <Center
        mr={3}
          size={20}
          bg="grey"
          rounded="md"    
          shadow={3}
        >
          <VStack>
         <Text textAlign="center" fontSize="md">6</Text>
         <Text fontWeight="bold">Wedneday</Text>
        </VStack>
        </Center>
        <Center
        mr={3}
          size={20}
          bg="grey"
          rounded="md"
          shadow={3}
        >
          <VStack>
         <Text textAlign="center" fontSize="md">7</Text>
         <Text fontSize="md" fontWeight="bold">Thursday</Text>
        </VStack>
        </Center>
        <Center
        mr={3}
          size={20}
          bg="grey"
          rounded="md"
          _text={{
            color: "white",
          }}
          shadow={3}
        >
        <VStack>
         <Text textAlign="center" fontSize="md">8</Text>
         <Text fontWeight="bold" fontSize="md">Friday</Text>
        </VStack>
        </Center>
        </ScrollView>
      </HStack>
    </Stack>
          
    <FlatList
    data={props.taskdata}
      keyExtractor={({id},index)=>id}
      renderItem={({ item }) => (
        <Flex mt={3}> 
        <Box
      borderLeftWidth={10}
      borderLeftColor="red"  
      width={400}
      shadow={1}
      _light={{
        backgroundColor: "gray.50",
      }}
      _dark={{
        backgroundColor: "gray.700",
      }}
      rounded="xl"
    >
      <Stack p={4} space={2}>
        <Stack space={2}>
          <Heading
            size="xs"
            _light={{
              color: "red.500",
            }}
            _dark={{
              color: "red.300",
            }}
            fontWeight="bold"
            ml={-0.5}
            mt={-1}
          >
            SHAKURA
          </Heading>
        <Heading size="md" fontWeight= "bold" ml={-1}>
              {item.title}
        </Heading>
        </Stack>
        <Text lineHeight={6} fontWeight={400}>
         {item.description}
        </Text>
        <Divider my={2} />
        <HStack alignItems="center" space={4} justifyContent="space-between">
          <HStack alignItems="center">
              <Icon as={Ionicons} name="home" />
            <Text ml={1} color="gray.500" fontWeight="500">
                12:30 pm - 12:30 am
            </Text>
          </HStack>
          <HStack alignItems="center">
    <Avatar.Group size="md" max={2}>
      <Avatar
        source={{
          uri: `${item.avatars}`,
        }}
      >
        SS
      </Avatar>  
    </Avatar.Group>
          </HStack>
        </HStack>
      </Stack>
    </Box>
    <Spacer />
    </Flex>
      )}
      />
        </View>
    )
}

export default FirstScreen;