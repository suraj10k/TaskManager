import React,{useState,useEffect} from "react"
import {
  Heading,
  Icon,
  AspectRatio,
  Image,
  Text,
  Center,
  HStack,
  Stack,
  NativeBaseProvider,
  Divider,
  Spacer,
  Flex,
  Avatar,
} from "native-base";
import { MaterialIcons } from "@expo/vector-icons"
import { Box, FlatList} from "native-base"
import { Ionicons, FontAwesome } from '@expo/vector-icons';



export const Items = () => {
  const [data,setData] = useState([])
  const [isPending,setIsPending] = useState(false)

const getData = async () => {
  setIsPending(true);
  const response = await fetch('https://dermasync.herokuapp.com/api/tasks?completed=0');
  const json = await response.json();
  setIsPending(false);
  console.log(json.data.tasks)
  setData(json.data.tasks);
}

useEffect(()=>{
  getData();
},[])

 
  return (
    <FlatList
    data={data}
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
      )
    }
    
    export default () => {
      return (
        <NativeBaseProvider>
      <Center flex={1}>
        <Items />
      </Center>
    </NativeBaseProvider>
  )
}