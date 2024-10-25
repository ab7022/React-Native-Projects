import React from "react";

import { SafeAreaView,View,Text, Button } from "react-native";

function App() {
  return (
    <SafeAreaView>
      <View>
        <Text>Hello World</Text>
        <Button title="Click Me" onPress={() => alert("Button Clicked")}/>
      </View>
    </SafeAreaView>
  )

}

export default App;