import { useEffect, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Platform, TouchableOpacity } from 'react-native';
import Header from './src/components/Headers';
import Timer from './src/components/Time';
import { Audio } from "expo-av";
import Happy from './src/components/happy';

export default function App() {

  const colors = ["#FFB6C1", "#ADD8E6", "#98FB98"];
  const [isWorking, setIsworking] = useState(false);
  const [time, setTime] = useState<number>(25 * 60);
  const [currentTime, setCurrentTime] = useState<number>(0);
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let intervalId: NodeJS.Timeout | null = null;

    if (isActive) {
      intervalId = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      if (intervalId) {
        clearInterval(intervalId);
      }
    }

    if (time === 0) {
      playSound();
      setIsActive(false);
      setIsworking(prevent => !prevent);
      setTime(isWorking ? 300 : 1500)
    }
    // Limpiar el intervalo al desmontar el componente
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, [isActive, time]);

 async  function handlerStart() {
  await  playSount();
    setIsActive(!isActive);
  }
  async function playSount() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/button-click-off-click.mp3")
    );
    await sound.playAsync();
  }
  async function playSound() {
    const { sound } = await Audio.Sound.createAsync(
      require("./assets/household016.mp3")
    );
    await sound.playAsync();
  }
  return (
    <SafeAreaView style={[styles.container, { backgroundColor: colors[currentTime] }]}>
      <View style={{
        paddingHorizontal: 15,
        paddingTop: Platform.OS === "android" ? 30 : 0,
        flex: 1,
      }}>
        <Text style={styles.text} >MY ALARM</Text>
        <Header
          setTime={setTime}
          currentTime={currentTime}
          setCurrentTime={setCurrentTime}
        />
        <Timer time={time} />
        <TouchableOpacity style={styles.button} onPress={handlerStart}>
          <Text style={{ color: "white", fontWeight: "bold" }}>
            {isActive ? "STOP" : "START"}
          </Text>
        </TouchableOpacity>
        <Happy/>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  text: {
    fontSize: 32,
    fontWeight: "bold",
  },
  button: {
    alignItems: "center",
    backgroundColor: "#333333",
    padding: 15,
    marginTop: 15,
    borderRadius: 5,
  }
});
