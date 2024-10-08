import react from 'react';
import { StyleSheet , View , Button , TextInput, Modal , Image } from 'react-native';
import { useState } from 'react';

function GoalInput(props) { 

    const [enteredGoalText, setEnterGoalText] = useState('');
    function goalInputHandler(enteredText) {
        setEnterGoalText(enteredText);
    }
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnterGoalText('');
    }

    return (
        <Modal visible={props.visible} animationType='slide' >
            <View style={styles.inputContainer}>
                <Image
                    style={styles.image}
                    source={require('../assets/images/goal.png')}
                />
                <TextInput
                    style={styles.textinput}
                    placeholder='your course goal'
                    onChangeText={goalInputHandler}
                    value={enteredGoalText}
                />
                <View style={styles.buttoncontainer}>
                    <View style={styles.button}>
                        <Button title='Add Goal' onPress={addGoalHandler} color='#5e0acc' />
                    </View>
                    <View style={styles.button}>
                        <Button title='Cancel' onPress={props.onCancel} color='#f31282'/>
                    </View>
                </View>
            </View>
        </Modal> 
    );
}

export default GoalInput;

const styles = StyleSheet.create
({
    inputContainer: {
    flex: 1,
    padding:16,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#311b6b',
    },
    image: {
        width: 100,
        height: 100,
        margin:20,
    },
  textinput: {
        borderWidth: 1,
        borderColor: '#e4d0ff',
        backgroundColor: '#e4d0ff',
        color: '#120438',
        borderRadius:6,
        width: '100%',
        padding:16,
    },
    buttoncontainer: {
        marginTop: 16,
        flexDirection: 'row',
    },
    button: {
        width: 100,
        marginHorizontal:8,
    },
});