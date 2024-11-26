import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Video from '../Lab1/Video'

const Random_Number = () => {
    const [number1, setNumber1] = useState('')
    const [number2, setNumber2] = useState('')
    const [operation, setOperation] = useState('')
    const [result, setResult] = useState('')
    const [position, setPosition] = useState('')
    const handleRandom = () => {
        const random1 = Math.floor(Math.random() * 10) + 1
        const random2 = Math.floor(Math.random() * 10) + 1
        const randomOperation = Math.floor(Math.random() * 4) + 1
        const randomPosition = Math.floor(Math.random() * 4) + 1

        let resultNumber = 0
        let operationSymbol = ''
        switch (randomOperation) {
            case 1:
                operationSymbol = '+';
                resultNumber = random1 + random2
                break;
            case 2:
                operationSymbol = '-';
                resultNumber = random1 - random2
                break;
            case 3:
                operationSymbol = '*';
                resultNumber = random1 * random2
                break;
            case 4:
                operationSymbol = '/';
                resultNumber = random1 / random2
                break;
        }
        console.log('random1: ' + random1);
        console.log('random2: ' + random2);
        console.log('position: ' + position);
        setOperation(operationSymbol)
        setNumber1(randomPosition === 1 ? '' : random1.toString())
        setNumber2(random2.toString())
        setResult(resultNumber.toString())
        setPosition(randomPosition.toString())
    }
    return (
        <View style={{ flex: 1, marginLeft: 10 }}>
            <Text style={{ color: 'black', marginTop: 10 }}>Giải nghĩa</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <Text style={{ color: 'black' }}>
                    Phép tính:
                </Text>
                <Text>{number1}</Text>
                <Text>{operation}</Text>
                <Text>{number2}</Text>
                <Text>=</Text>
                <Text>{result}</Text>
            </View>
            <Text style={{ color: 'black' }}>Random tại vị trí thứ {position}</Text>

            {position === 1 ?
                (<View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10, marginTop: 10 }}>
                    <TextInput
                        placeholder=''
                        value={number1}
                        onChangeText={(text) => setNumber1(text)} />
                </View>
                ) : (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10, marginTop: 10 }}>
                        <TextInput
                            placeholder=''
                            value={number1}
                            editable={false} />
                    </View>
                )
            }
            {position === 2 ?
                (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10, marginTop: 10 }}>
                        <TextInput
                            placeholder=''
                            value={operation}
                            onChangeText={operation} />
                    </View>
                ) : (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10, marginTop: 10 }}>
                        <TextInput
                            placeholder=''
                            value={operation}
                            editable={false} />
                    </View>
                )
            }
            {
                position == 3 ? (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10, marginTop: 10 }}>
                        <TextInput
                            placeholder=''
                            value={number2}
                            onChangeText={(text) => setNumber2(text)} />
                    </View>
                ) : (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10, marginTop: 10 }}>
                        <TextInput
                            placeholder=''
                            value={number2}
                            editable={false} />
                    </View>
                )
            }
            <View style={{ marginLeft: 24 }}>
                <Text style={{ fontSize: 20 }}>=</Text>
            </View>
            {
                position === 4 ? (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10 }}>
                        <TextInput
                            placeholder=''
                            value={result}
                            onChangeText={(text) => setResult(text)} />
                    </View>
                ) : (
                    <View style={{ borderWidth: 1, width: 40, height: 40, marginLeft: 10 }}>
                        <TextInput
                            placeholder=''
                            value={result}
                            editable={false} />
                    </View>
                )

            }
            <View>
                <Text style={{ color: 'black', fontSize: 15, marginTop: 10 }}>
                    Người dùng cần điền đúng giá trị còn thiếu vào vị trí trống
                </Text>
            </View>
            <TouchableOpacity onPress={handleRandom}>
                <Text>Random</Text>
            </TouchableOpacity>
        </View >
    )
}

export default Random_Number

const styles = StyleSheet.create({})