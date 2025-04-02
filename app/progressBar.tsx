import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import Animated, { useSharedValue, useAnimatedStyle, withTiming, interpolateColor } from "react-native-reanimated";

const ProgressBar = () => {
  const progress = useSharedValue(0);
  const [percent, setPercent] = useState(0);

  const nextProgress = () => {
    let newPercent = percent + 25;
    if (newPercent > 100) newPercent = 0;
    
    setPercent(newPercent);
    progress.value = withTiming(newPercent, { duration: 500 });
  };

  const animatedStyle = useAnimatedStyle(() => {
    const progressValue = progress.value;
    const color = interpolateColor(
      progressValue, 
      [25, 50, 75, 100], 
      ["#4CAF50", "#FFC107", "#FF9800", "#F44336"]
    );
    return {
      width: `${progressValue}%`,
      backgroundColor: color,
      height: "100%", 
      borderRadius: 15,
    };
  });

  return (
    <View style={{ padding: 20, alignItems: "center", width: "100%" }}>
      {/* Обгортка для прогрес бару */}
      <View style={{ width: "100%", height: 30, backgroundColor: "#ddd", borderRadius: 15 }}>
        <Animated.View style={animatedStyle} />
      </View>
      <Text style={{ marginTop: 10, fontSize: 18 }}>{percent}%</Text>
      <Pressable
        onPress={nextProgress}
        style={{
          marginTop: 20,
          backgroundColor: "#007BFF",
          padding: 10,
          borderRadius: 5,
        }}
      >
        <Text style={{ color: "white", fontSize: 16 }}>Next</Text>
      </Pressable>
    </View>
  );
};

export default ProgressBar;
