import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView,Button,TextInput } from 'react-native';
import {useState} from 'react'

export default function App() {

  const [pressedCount, setPressedCount] = useState(0);

  const [buttonDisabled, setButtonDisabled] = useState(false)

  const [name, setName] = useState('')

  const trackDisabled = () => {
  if(pressedCount < 5){
    setButtonDisabled(false)
  }
  else setButtonDisabled(true)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Woohoo this is Katie's first app</Text>
      <Text style={{ margin: 16 }}>
        {pressedCount > 0
          ? `The button was pressed ${pressedCount} times!`
          : 'The button isn\'t pressed yet and can only be pressed three times'
        }
      </Text>
      <Button
      title="Click here!"
      style={styles.button}
        disabled={buttonDisabled}
        onPress={() => {
          const updatedPressedCount = pressedCount + 1
          setPressedCount(updatedPressedCount)
          trackDisabled()
          }
        }
      >
      </Button>
    <Text style={{ marginVertical: 16, color: 'white' }}>{name ? `Hi ${name}!` : `What is your name?`}</Text>
    <TextInput style={{ padding: 8, backgroundColor: '#f5f5f5', width: 100 }}
        onChangeText={text => setName(text)}
        secureTextEntry={true}/>
    <ScrollView>
    <Text style={styles.text}>This is the scrollable part</Text>
      <Text style={styles.text}>Let's get a random image from the web:</Text>
      <Image 
      style={{height: 100, width: 100}}
      source={{uri: 'https://picsum.photos/100/101'}}>
    </Image>
    <View style={styles.box1}>
    </View>
    <View style={styles.box2}>
    </View>
    </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    flexDirection: 'column',
    backgroundColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    padding: '20%',
    fontSize: 16
  },
  box1 : {
    backgroundColor: 'white',
    height: 200,
    width : '100%'
  },
  box2 : {
    backgroundColor: 'blue',
    height: 200,
    width : '100%'
  },
  button : {
    color: 'white'
  }
});
