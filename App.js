import React,{useState,useEffect,} from 'react';
import {Fab,Icon,Box,Center,NativeBaseProvider,AddIcon,Button,Modal,Stack,FormControl,Input,Pressable,Text, HStack, VStack,Avatar} from 'native-base';
import { AntDesign } from "@expo/vector-icons"
import TopBar from "./components/topBar";
import axios from 'axios';





function App() {
  
  const [showModal, setShowModal] = useState(false)
  const [title,setTitle] = useState("default value");
  const [date,setDate] = useState("default value");
  const [startTime,setStartTime] = useState("default value");
  const [endTime,setEndTime] = useState("default value");
  const [people,setPeople] = useState("default value");
  const [description,setDescription] = useState("default value");
  const [isPending,setIsPending] = useState(false)
  
  const handleSubmit = () => {
    
    const data = {title,date,startTime,endTime,people,description}

    setIsPending(true);
    
    fetch('https://dermasync.herokuapp.com/api/task' ,{
      method: 'POST',
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    }).then(() => {
      console.log('Data successfully sent')
      setIsPending(false);
    })
  }
  
  return (
    <NativeBaseProvider>
    <TopBar />
    <Fab
      position="absolute"
      size="sm"
      icon={<AddIcon size="sm" />}
      onPress={() => setShowModal(true)}
      />
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <Modal.Content maxWidth="400px">
          <Modal.CloseButton />
          <Modal.Header alignItems="center">Create a task</Modal.Header>
          <Modal.Body>
          <FormControl>
            
            <FormControl.Label _text={{color: 'muted.700', fontSize: 'md', fontWeight: 'bold'}}>
                Task Title
            </FormControl.Label>
            <Input placeholder="Title" onChangeText={(val) => setTitle(val)}/>
            
            <FormControl.Label mt={3} _text={{color: 'muted.700', fontSize: 'md', fontWeight: 'bold'}}>
                Select Date
            </FormControl.Label>
            <Input placeholder="Date" onChangeText={(val) => setDate(val)} />
          <VStack>
            <FormControl.Label mt={2} _text={{color: 'muted.700', fontSize: 'md', fontWeight: 'bold'}}>
                Start time
            </FormControl.Label>
            <Input placeholder="Example. 12:30 am" onChangeText={(val) => setStartTime(val)} />
            </VStack>
            <VStack>
            <FormControl.Label mt={2}  _text={{color: 'muted.700', fontSize: 'md', fontWeight: 'bold'}}>
                End time
            </FormControl.Label>
            <Input placeholder="Example. 1:30 am" onChangeText={(val) => setEndTime(val)}/>
            </VStack>
            <HStack>
            <VStack>
            <FormControl.Label mt={2} _text={{color: 'muted.700', fontSize: 'md', fontWeight: 'bold'}}>
                Add People
            </FormControl.Label>
            <Input placeholder="Name of people" onChangeText={(val) => setPeople(val)}/>
            </VStack>
            <Avatar.Group mt={10} size="md" max={4}>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1369921787568422915/hoyvrUpc_400x400.jpg",
                }}
                >
                SS
              </Avatar>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1309797238651060226/18cm6VhQ_400x400.jpg",
                }}
                >
                AK
              </Avatar>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
                }}
                >
                RS
              </Avatar>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                }}
                >
                MR
              </Avatar>
              <Avatar
                source={{
                  uri: "https://bit.ly/code-beast",
                }}
                >
                CB
              </Avatar>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1177303899243343872/B0sUJIH0_400x400.jpg",
                }}
                >
                GG
              </Avatar>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1352844693151731713/HKO7cnlW_400x400.jpg",
                }}
                >
                RS
              </Avatar>
              <Avatar
                source={{
                  uri: "https://pbs.twimg.com/profile_images/1320985200663293952/lE_Kg6vr_400x400.jpg",
                }}
                >
                MR
              </Avatar>
            </Avatar.Group>
            </HStack>

            <FormControl.Label mt={3} _text={{color: 'muted.700', fontSize: 'md', fontWeight: 'bold'}}>
                Add description
            </FormControl.Label>
            <Input placeholder="Description" onChangeText={(val) => setDescription(val)} />

          </FormControl>
          </Modal.Body>
          <Modal.Footer>
             { !isPending && <Button onPress={handleSubmit}>
                Submit
              </Button> }
              { isPending && <Button disabled>
                Sending
              </Button> }
          </Modal.Footer>
        </Modal.Content>
      </Modal>

    </NativeBaseProvider> 
  );
}


export default App;
