import { Audio } from "expo-av";

export default async function playSound(data:string) {
    const { sound } = await Audio.Sound.createAsync(
      require(data)
    );
    await sound.playAsync();
  }