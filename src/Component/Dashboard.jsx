import { Box, Image, Text, grid } from "@chakra-ui/react";
import React from "react";
import { Line } from "react-chartjs-2";

const data = [
  { name: "1", Earning: 300, Expense: 456 },
  { name: "2", Earning: 100, Expense: 321 },
  { name: "3", Earning: 9, Expense: 235 },
  { name: "4", Earning: 53, Expense: 267 },
  { name: "5", Earning: 43, Expense: 45 },
  { name: "6", Earning: 222, Expense: 366 },
  { name: "7", Earning: 372, Expense: 486 },
  { name: "8", Earning: 182, Expense: 512 },
  { name: "9", Earning: 164, Expense: 302 },
  { name: "10", Earning: 316, Expense: 425 },
  { name: "11", Earning: 131, Expense: 467 },
  { name: "12", Earning: 154, Expense: 33 },
  { name: "13", Earning: 205, Expense: 354 },
  { name: "14", Earning: 70, Expense: 258 },
  { name: "15", Earning: 53, Expense: 267 },
  { name: "16", Earning: 43, Expense: 45 },
  { name: "17", Earning: 222, Expense: 366 },
  { name: "18", Earning: 372, Expense: 486 },
  { name: "19", Earning: 53, Expense: 267 },
  { name: "20", Earning: 43, Expense: 45 },
];

const ChartComponent = () => {
  const chartData = {
    labels: data.map((item) => item.name),
    datasets: [
      {
        label: "Earning",
        data: data.map((item) => item.Earning),
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        borderColor: "rgba(75, 192, 192, 1)",
        borderWidth: 1,
      },
      {
        label: "Expense",
        data: data.map((item) => item.Expense),
        backgroundColor: "rgba(255, 99, 132, 0.2)",
        borderColor: "rgba(255, 99, 132, 1)",
        borderWidth: 1,
      },
    ],
  };

  const chartOptions = {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Box>
      <Line data={chartData} options={chartOptions} />
    </Box>
  );
};

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
        <Box>{/* <ChartComponent /> */}</Box>
      </Box>
    </Box>
  );
};

export default Dashboard;
