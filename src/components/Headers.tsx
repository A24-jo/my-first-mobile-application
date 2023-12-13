import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

interface HeadersProps {
    setTime: (time: number) => void;
    currentTime: number;
    setCurrentTime: (currentTime: number) => void
}

export default function Header({ setTime, currentTime, setCurrentTime }: HeadersProps) {

    const options = ["Pomodoro", "Short Break", "Long Break"]
    function handlerPress(index: number) {
        const newtime = index === 0 ? 25 : index === 1 ? 5 : 15;
        setCurrentTime(index);
        setTime(newtime * 60);
    }

    return (
        <View style={{ flexDirection: "row" }}>
            {options.map((data, index) => (
                <TouchableOpacity
                    key={index}
                    style={[styles.itemstyle,currentTime
                         !== index && {borderColor:"transparent"}]}
                    onPress={()=>handlerPress(index)}
                >
                    <Text style={{fontWeight:"bold"}}> {data}</Text>
                </TouchableOpacity>
            ))}

        </View>
    )
};

const styles = StyleSheet.create({
    itemstyle: {
        width: "33%",
        alignItems: "center",
        borderWidth: 3,
        padding: 5,
        borderRadius: 10,
        borderColor:"white",
        marginVertical:20
    },
})