import * as React from "react";
import { StyleSheet } from "react-nativescript";
import { useNavigation } from "@react-navigation/core";

export function FloatingHomeButton() {
    const navigation = useNavigation();

    const handlePress = () => {
        navigation.navigate('BookingSearch');
    };

    return (
        <button 
            style={styles.button} 
            text="TakeMeOut" 
            onTap={handlePress}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        position: 'absolute',
        bottom: 20,
        right: 20,
        backgroundColor: '#8e44ad',
        color: 'white',
        fontSize: 14,
        fontWeight: '600',
        padding: 12,
        borderRadius: 24,
        elevation: 4,
        zIndex: 1000,
    },
});