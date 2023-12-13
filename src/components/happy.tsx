import { useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";



export default function Happy() {
    const motivationsWithEmojis: string[] = [
        "🚀 Believe in yourself and all that you are. You are capable of amazing things!",
        "💪 Success is not final, failure is not fatal: It is the courage to continue that counts.",
        "💖 The only way to do great work is to love what you do.",
        "⏰ Don't watch the clock; do what it does. Keep going!",
        "🌟 The future belongs to those who believe in the beauty of their dreams.",
        "🌈 You are never too old to set another goal or to dream a new dream.",
        "👊 It's not whether you get knocked down, it's whether you get up.",
        "❤️‍🩹 The only limit to our realization of tomorrow will be our doubts of today.",
        "⏳ Your time is limited, don't waste it living someone else's life.",
        "🌌 You have within you right now, everything you need to deal with whatever the world can throw at you.",
        "🎯 Set your goals high, and don't stop until you get there!",
        "🌞 Every morning brings new potential. Seize the day, embrace the possibilities.",
        "🌱 Your potential is endless. Go do what you were created to do!",
        "🔥 The only person you are destined to become is the person you decide to be.",
        "💡 Don't be afraid to give up the good to go for the great.",
        "🚶‍♂️ Keep moving forward. No looking back.",
        "🌺 Bloom where you are planted.",
        "🌠 Dream big, work hard, stay focused.",
        "🎉 Celebrate every small victory on the way to your big goals.",
        "🌈 Make each day your masterpiece.",
        "💪 Your attitude determines your direction.",
        "🌟 Start where you are, use what you have, do what you can.",
        "🌈 Your vibe attracts your tribe.",
        "🚀 Success is not just about making money. It's about making a difference.",
        "⚡ The best way to predict the future is to create it.",
        "🌅 Every sunrise is an invitation to brighten someone's day.",
        "👑 You are not a drop in the ocean, you are the entire ocean in a drop.",
        "💫 The secret of getting ahead is getting started.",
        "🌱 Growth is painful. Change is painful. But nothing is as painful as staying stuck where you don't belong.",
        "👏 The harder you work for something, the greater you'll feel when you achieve it.",
        "🌺 Your time as a caterpillar has expired. Your wings are ready.",
        "🌈 Believe in your infinite potential. Your only limitations are those you set upon yourself.",
        "🚀 You are never too old to set another goal or to dream a new dream.",
        "💖 The only thing standing between you and your goal is the story you keep telling yourself as to why you can't achieve it.",
        "🎯 Don't count the days, make the days count.",
        "🌠 You are the artist of your own life. Don't give the paintbrush to anyone else.",
        "⚡ Your journey is just as important as your destination.",
        "🌟 Your mind is a powerful thing. When you fill it with positive thoughts, your life will start to change.",
        "💪 Life is tough, but so are you.",
        "🌺 You have the power to create the life you want.",
        "🚀 The future depends on what you do today.",
        "🌞 Every day may not be good, but there's something good in every day.",
        "💖 Make it happen, shock everyone.",
        "🌈 Life is short. Do stuff that matters.",
    ];
    function ramdon() {
        const maatflor: number = Math.floor(Math.random() * motivationsWithEmojis.length);
        return motivationsWithEmojis[maatflor];
    }
    useEffect(() => {
        ramdon();
    }, []);
    return (
        <View style={style.view}>
            <Text style={style.text}> {ramdon()}</Text>
        </View>
    )
}

const style = StyleSheet.create({
    view: {
      flex:1,
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontSize:40,
        fontWeight:"500",
        padding:30,
    }
})