import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface CategoryButtonProps {
    text: string;
    isSelected?: boolean;
    onTap: () => void;
}

export function CategoryButton({ text, isSelected = false, onTap }: CategoryButtonProps) {
    return (
        <button 
            style={[styles.button, isSelected ? styles.selectedButton : styles.unselectedButton]}
            onTap={onTap}
        >
            <label style={[styles.text, isSelected ? styles.selectedText : styles.unselectedText]}>
                {text}
            </label>
        </button>
    );
}

const styles = StyleSheet.create({
    button: {
        minWidth: 90,
        paddingVertical: 8,
        paddingHorizontal: 24,
        marginHorizontal: 4,
        borderRadius: 20,
    },
    selectedButton: {
        backgroundColor: "rgba(0, 0, 0, 0.9)",
    },
    unselectedButton: {
        backgroundColor: "transparent",
        borderWidth: 1,
        borderColor: "rgba(0, 0, 0, 0.2)",
    },
    text: {
        fontSize: 14,
        fontWeight: "400",
    },
    selectedText: {
        color: "white",
    },
    unselectedText: {
        color: "rgba(0, 0, 0, 0.6)",
    },
});