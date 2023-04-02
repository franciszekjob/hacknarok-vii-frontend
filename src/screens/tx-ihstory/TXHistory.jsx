import {
  View,
  Text,
  Image,
  Dimensions,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { IconButton, List } from "react-native-paper";
import avatar from "../../../assets/avatar.png";
import medal from "../../../assets/medal.png";
import history from "../../../assets/history.png";
import levelUp from "../../../assets/level-up.png";
import { useTheme } from "react-native-paper";
import { HEXtoRGB, capitalize } from "../../utils";
import { ProgressBar } from "react-native-paper";
import Chart from "../../components/chart/Chart";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const TXHistory = () => {
  const theme = useTheme();
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "H&M St. John avenue",
      amount: 100,
      type: "deposit",
      shopTicker: "hm",
    },
    {
      id: 1,
      date: "2021-01-01",
      time: "8:37 PM",
      location: "H&M St. John avenue",
      amount: 100,
      type: "pick-up",
      shopTicker: "hm",
    },
    // {
    //   id: 1,
    //   date: "2021-01-01",
    //   time: "8:37 PM",
    //   location: "House av. Saint Paul",
    //   amount: 300,
    //   type: "deposit",
    // },
    // {
    //   id: 1,
    //   date: "2021-01-01",
    //   time: "8:37 PM",
    //   location: "House av. Saint Paul",
    //   amount: 300,
    //   type: "deposit",
    // },
    // {
    //   id: 1,
    //   date: "2021-01-01",
    //   time: "8:37 PM",
    //   location: "House av. Saint Paul",
    //   amount: 300,
    //   type: "deposit",
    // },
    // {
    //   id: 1,
    //   date: "2021-01-01",
    //   time: "8:37 PM",
    //   location: "House av. Saint Paul",
    //   amount: 300,
    //   type: "deposit",
    // },
  ]);

  return (
    <ScrollView>
      {transactions.map((tx, index) => {
        let deposit = tx.type === "deposit";
        return (
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              //   borderRadius: 20,
              padding: 10,
              //   marginVertical: 5,
              borderBottomWidth: 1,
              borderStyle: "solid",
              borderColor: "#ddd",
              width: "95%",
              justifyContent: "space-between",
            }}
          >
            <Image
              source={{
                uri: `http://172.20.47.147:5000/static/${tx.shopTicker}.png`,
              }}
              style={{
                width: 30,
                height: 30,
                objectFit: "contain",
                marginHorizontal: 10,
                marginRight: 20,
              }}
            />
            <View>
              <Text style={{ ...theme.text.h2, marginBottom: 5 }}>
                {capitalize(tx.type).replace("-", " ")}
              </Text>
              <Text style={theme.text.h4}>Hour: {tx.time}</Text>
              <Text style={theme.text.h4}>Location: {tx.location}</Text>
            </View>
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  color: deposit ? theme.colors.primaryBlue : theme.primary,
                }}
              >
                {deposit ? "+" : "-"}
                {tx.amount}
              </Text>
              <List.Icon
                // {...props}
                icon="water"
                color={deposit ? theme.colors.primaryBlue : theme.primary}
              />
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
};

export default TXHistory;
