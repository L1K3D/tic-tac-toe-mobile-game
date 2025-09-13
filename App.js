import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import {
  Alert,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
} from "react-native";
import styles from "./styles";

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 32, fontWeight: "bold"}}>TicTacToe Game</Text>
      <View styles={styles.board}>

      </View>
      <TouchableOpacity style={{marginTop: 20, padding: 10, backgroundColor: "#333"}}>
        <Text style={{color: "#fff"}}>Reset</Text>
      </TouchableOpacity>
      <StatusBar style="auto" />
    </View>
  );
}
