// Filename: index.js
// Combined code from all files

import React from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const tales = [
    { id: '1', title: 'Tale 1', content: 'Once upon a time in a land far away...' },
    { id: '2', title: 'Tale 2', content: 'In a small village, there lived a brave little girl...' },
    { id: '3', title: 'Tale 3', content: 'Long long ago, there was a magical forest...' },
];

function HomeScreen({ navigation }) {
    return (
        <SafeAreaView style={stylesHome.container}>
            <Text style={stylesHome.header}>Kids Tales</Text>
            {tales.map(tale => (
                <TouchableOpacity 
                    key={tale.id} 
                    style={stylesHome.taleButton} 
                    onPress={() => navigation.navigate('Tale', { tale })}
                >
                    <Text style={stylesHome.taleButtonText}>{tale.title}</Text>
                </TouchableOpacity>
            ))}
        </SafeAreaView>
    );
}

const stylesHome = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#E5CABF',
        paddingTop: '20px',
    },
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    taleButton: {
        backgroundColor: '#CE8ABD', // Light purple
        padding: 15,
        borderRadius: 10,
        marginVertical: 10,
        width: '80%',
        alignItems: 'center',
    },
    taleButtonText: {
        color: '#FFFFFF',
        fontSize: 18,
    },
});

function TaleScreen({ route }) {
    const { tale } = route.params;

    return (
        <SafeAreaView style={stylesTale.container}>
            <ScrollView>
                <Text style={stylesTale.title}>{tale.title}</Text>
                <Text style={stylesTale.content}>{tale.content}</Text>
            </ScrollView>
        </SafeAreaView>
    );
}

const stylesTale = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
        paddingTop: '20px',
        paddingHorizontal: 15,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        alignSelf: 'center',
    },
    content: {
        fontSize: 18,
        lineHeight: 30,
    },
});

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Tale" component={TaleScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}