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
    <ScrollView contentContainerStyle={{ flexGrow: 1}}>
      <View style={styles.container}>
        
        <View style={styles.board}>
          <TouchableOpacity style={styles.cell}>
            <Text></Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
