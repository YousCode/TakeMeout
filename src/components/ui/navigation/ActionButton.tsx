import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface ActionButtonProps {
    icon: string;
    onTap: () => void;
    style?: any;
}

export function ActionButton({ icon, onTap, style }: ActionButtonProps) {
    return (
        <button 
            style={[styles.button, style]} 
            text={icon}
            onTap={onTap}
        />
    );
}

const styles = StyleSheet.create({
    button: {
        fontSize: 20,
        color: "#333",
        backgroundColor: "transparent",
        width: 40,
        height: 40,
        borderRadius: 20,
        textAlignment: "center",
    },
});