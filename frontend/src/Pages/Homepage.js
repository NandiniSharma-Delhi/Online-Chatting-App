import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { useEffect } from "react";
import { useHistory } from "react-router";
import Login from "../components/Authentication/Login";
import Signup from "../components/Authentication/Signup";

function Homepage() {
  const history = useHistory();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo"));

    if (user) history.push("/chats");
  }, [history]);

  return (
    <Container maxW="xl" centerContent>
      <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="gray.100"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        borderColor = "gray.100"
      >
        <Text fontSize="4xl" fontFamily="Work sans">
          F.R.I.E.N.D.S
        </Text>
      </Box>
      <Box bg="white" w="100%" p={4} borderRadius="lg" borderWidth="2px" borderColor = "white">
        <Tabs isFitted variant="soft-rounded">
          <TabList mb="1em" fontFamily="Work sans" >
            <Tab 
               _selected={{ bg: "purple.100" }}
               _focus={{borderColor:"white"}}
            >Login</Tab>
            <Tab 
             _selected={{ bg: "purple.100" }}
             _focus={{borderColor:"white"}}
            >Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}

export default Homepage;
