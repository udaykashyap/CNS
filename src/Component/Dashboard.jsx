import { Box, Image, Text, grid } from "@chakra-ui/react";
import React from "react";
import { Line } from "react-chartjs-2";
import O from "../source/overall.png";
import G from "../source/graph.jpg";
import A from "../source/activity.jpg";
import T from "../source/Timeline.jpg";
import RS from "../source/recent sale.jpg";
import TU from "../source/TotalUser.jpg";
import GW from "../source/Growth.jpg";
import PN from "../source/PaperNote.jpg";

const Dashboard = () => {
  return (
    <Box>
      {/* NavBar Start From Here */}
      <Box
        // border={"1px solid red"}
        height={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        // borderBottom={"1px solid gray"}
        boxShadow="rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;"
      >
        <Box marginLeft={"2%"}>
          <Image src="https://admin.pixelstrap.com/cuba/assets/images/logo/logo.png" />
        </Box>
        <Box
          display={"flex"}
          gap={"10px"}
          alignItems={"center"}
          marginRight={"5%"}
          fontSize={"md"}
        >
          <Box display={"flex"} alignItems={"center"} gap={1}>
            <i class="fa-solid fa-language" style={{ color: " #d11f7e" }}></i>
            EN
          </Box>
          <i class="fa-regular fa-circle"></i>
          <i class="fa-regular fa-star"></i>
          <i class="fa-solid fa-moon"></i>
          <i class="fa-solid fa-cart-shopping"></i>
          <i class="fa-regular fa-bell"></i>
          <Image
            borderRadius={"50%"}
            src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/profile.png"
          />
          <Box lineHeight={"15px"}>
            <Text fontWeight={"500"}>Uday</Text>
            <Text fontSize={"small"}>Admin</Text>
          </Box>
        </Box>
      </Box>

      {/* Default */}
      <Box
        height={"50px"}
        display={"flex"}
        alignItems={"center"}
        justifyContent={"space-between"}
        background={"#fcfbfd"}
      >
        <Text fontWeight={600} fontSize={"2xl"} marginLeft={"2%"}>
          Default
        </Text>
        <Box marginRight={"2%"}>
          <i class="fa-solid fa-house"></i>/ Dashboard /{" "}
          <span style={{ color: "blue" }}>Default</span>
        </Box>
      </Box>

      {/* Welcome Note */}
      <Box
        // border={"1px solid red"}
        height={"300px"}
        display={"flex"}
        justifyContent={"space-around"}
        alignItems={"center"}
        padding={"10px"}
        backgroundColor={"#f7f8f9"}
      >
        <Box
          height={"200px"}
          backgroundColor={"#7366ff"}
          width={"30%"}
          color={"white"}
          borderRadius={"20px"}
          display={"flex"}
          justifyContent={"space-around"}
        >
          <Box padding={"10px"}>
            <Text fontSize={"2xl"} fontWeight={600}>
              Welcome to cuba
            </Text>
            <Text>Here whats happing </Text>
            <Text>in your account today</Text>
            <Box
              border={"1px solid white"}
              borderRadius={"5px"}
              marginTop={"30%"}
            >
              What's New !
            </Box>
          </Box>
          <Image src="https://admin.pixelstrap.com/cuba/assets/images/dashboard/cartoon.svg" />
        </Box>
        <Box
          display={"grid"}
          gridTemplateColumns={"repeat(3,1fr)"}
          overflow={"hidden"}
          gap={"20px"}
          //   border={"1px solid red"}
          paddiing="10px"
          width={"60%"}
          height={"250px"}
          justifyItems={"center"}
        >
          <Box
            width={"250px"}
            height="80px"
            borderRadius="5px"
            // border="1px solid red"
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor="white"
            gap={"20px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Box>
              {" "}
              <i
                class="fa-solid fa-cart-shopping"
                style={{ color: "#e30224", fontSize: "30px" }}
              ></i>
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={600}>
                10,000
              </Text>
              <Text>Purchase</Text>
            </Box>
          </Box>
          <Box
            width={"250px"}
            height="80px"
            borderRadius="5px"
            // border="1px solid red"
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor="white"
            gap={"20px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Box>
              {" "}
              <i
                class="fa-solid fa-tags"
                style={{ color: "#f0bc00", fontSize: "30px" }}
              ></i>
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={600}>
                7,000
              </Text>
              <Text>Sales Return</Text>
            </Box>
          </Box>
          <Box
            width={"250px"}
            height="80px"
            borderRadius="5px"
            // border="1px solid red"
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor="white"
            gap={"20px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Box>
              {" "}
              <i
                class="fa-solid fa-chart-simple"
                style={{ color: "#005cfa", fontSize: "30px" }}
              ></i>
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={600}>
                180k
              </Text>
              <Text>Order</Text>
            </Box>
          </Box>
          <Box
            width={"250px"}
            height="80px"
            borderRadius="5px"
            // border="1px solid red"
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor="white"
            gap={"20px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Box>
              {" "}
              <i
                class="fa-solid fa-percent"
                style={{ color: "#fbff00", fontSize: "30px" }}
              ></i>
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={600}>
                4200
              </Text>
              <Text>Sales</Text>
            </Box>
          </Box>
          <Box
            width={"250px"}
            height="80px"
            borderRadius="5px"
            // border="1px solid red"
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor="white"
            gap={"20px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Box>
              {" "}
              <i
                class="fa-solid fa-book fa-beat"
                style={{ color: "#ff9500", fontSize: "30px" }}
              ></i>
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={600}>
                5700
              </Text>
              <Text>Purchase Rate</Text>
            </Box>
          </Box>
          <Box
            width={"250px"}
            height="80px"
            borderRadius="5px"
            // border="1px solid red"
            display={"flex"}
            alignContent={"center"}
            justifyContent={"center"}
            alignItems={"center"}
            backgroundColor="white"
            gap={"20px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Box>
              {" "}
              <i
                class="fa-solid fa-wave-square"
                style={{ color: "#00b315", fontSize: "30px" }}
              ></i>
            </Box>
            <Box>
              <Text fontSize={"2xl"} fontWeight={600}>
                690k
              </Text>
              <Text>Profit</Text>
            </Box>
          </Box>
        </Box>
      </Box>
      <Box
        // height={"150px "}
        // border={"1px solid red"}
        display={"flex"}
        justifyContent={"space-around"}
        backgroundColor={"#f7f8f9"}
      >
        <Box
          width={"50%"}
          margin={"20px"}
          // border={"1px solid red"}
          borderRadius={"15px"}
          backgroundColor={"white"}
          padding={"10px"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        >
          <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
            Overall
          </Text>
          <Image src={G} />
        </Box>
        <Box
          width={"30%"}
          margin={"20px"}
          // border={"1px solid red"}
          borderRadius={"15px"}
          backgroundColor={"white"}
          padding={"10px"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        >
          <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
            Recent Orders
          </Text>
          <Image src={O} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        backgroundColor={"#f7f8f9"}
        gap={"20px"}
        justifyContent={"space-around"}
        padding={"30px"}
      >
        <Box
          margin={"20px"}
          // border={"1px solid red"}
          borderRadius={"15px"}
          backgroundColor={"white"}
          padding={"10px"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        >
          <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
            Activity
          </Text>
          <Image width={"80%"} src={A} margin={"auto"} />
        </Box>
        <Box
          margin={"20px"}
          // border={"1px solid red"}
          borderRadius={"15px"}
          backgroundColor={"white"}
          padding={"10px"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        >
          <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
            Recent Sale
          </Text>
          <Image width={"80%"} margin={"auto"} src={RS} />
        </Box>
        <Box
          margin={"20px"}
          // border={"1px solid red"}
          borderRadius={"15px"}
          backgroundColor={"white"}
          padding={"10px"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        >
          {" "}
          <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
            Timeline
          </Text>
          <Image width={"80%"} src={T} />
        </Box>
      </Box>
      <Box
        display={"flex"}
        backgroundColor={"#f7f8f9"}
        gap={"20px"}
        justifyContent={"space-around"}
        padding={"30px"}
      >
        <Box>
          <Box
            margin={"20px"}
            // border={"1px solid red"}
            borderRadius={"15px"}
            backgroundColor={"white"}
            padding={"10px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
              Total User
            </Text>
            <Image width={"80%"} src={TU} />
          </Box>
          <Box
            margin={"20px"}
            // border={"1px solid red"}
            borderRadius={"15px"}
            backgroundColor={"white"}
            padding={"10px"}
            boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
          >
            <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
              Followers Growth
            </Text>
            <Image width={"80%"} src={GW} />
          </Box>
        </Box>
        <Box
          margin={"20px"}
          // border={"1px solid red"}
          borderRadius={"15px"}
          backgroundColor={"white"}
          padding={"10px"}
          boxShadow="rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 1px 3px 1px;"
        >
          <Text textAlign={"left"} fontSize={"2xl"} fontWeight={600}>
            Paper Notes
          </Text>
          <Image width={"80%"} src={PN} />
        </Box>
      </Box>
      <Box>
        <Text textAlign={"center"}>
          Copyright 2023 © Cuba theme by pixelstrap
        </Text>
      </Box>
    </Box>
  );
};

export default Dashboard;
