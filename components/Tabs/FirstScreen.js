import React from "react";
import { View,Text,HStack,VStack,Stack,Center,ScrollView} from "native-base";
import Tasks from "./tasks";



const FirstScreen = () => {
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
          
            <Tasks />
        </View>
    )
}

export default FirstScreen;