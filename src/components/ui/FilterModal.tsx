import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface FilterModalProps {
    visible: boolean;
    onClose: () => void;
}

export function FilterModal({ visible, onClose }: FilterModalProps) {
    if (!visible) return null;

    return (
        <flexboxLayout style={styles.overlay}>
            <flexboxLayout style={styles.modal}>
                <label style={styles.title}>Filtres</label>
                
                <flexboxLayout style={styles.section}>
                    <label style={styles.sectionTitle}>Âge</label>
                    <flexboxLayout style={styles.ageRange}>
                        <textField style={styles.ageInput} hint="Min" keyboardType="number" />
                        <label style={styles.ageSeparator}>-</label>
                        <textField style={styles.ageInput} hint="Max" keyboardType="number" />
                    </flexboxLayout>
                </flexboxLayout>

                <flexboxLayout style={styles.section}>
                    <label style={styles.sectionTitle}>Localisation</label>
                    <textField style={styles.input} hint="Ville" />
                </flexboxLayout>

                <flexboxLayout style={styles.buttons}>
                    <button style={styles.resetButton} text="Réinitialiser" />
                    <button style={styles.applyButton} text="Appliquer" onTap={onClose} />
                </flexboxLayout>
            </flexboxLayout>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: "rgba(0,0,0,0.5)",
        justifyContent: "center",
        alignItems: "center",
    },
    modal: {
        width: "80%",
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
    },
    title: {
        fontSize: 20,
        fontWeight: "bold",
        marginBottom: 20,
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 16,
        fontWeight: "600",
        marginBottom: 8,
    },
    ageRange: {
        flexDirection: "row",
        alignItems: "center",
    },
    ageInput: {
        flex: 1,
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    ageSeparator: {
        marginHorizontal: 12,
    },
    input: {
        height: 40,
        borderWidth: 1,
        borderColor: "#ddd",
        borderRadius: 8,
        paddingHorizontal: 12,
    },
    buttons: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
    },
    resetButton: {
        flex: 1,
        marginRight: 8,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#f0f0f0",
    },
    applyButton: {
        flex: 1,
        marginLeft: 8,
        padding: 12,
        borderRadius: 8,
        backgroundColor: "#8e44ad",
        color: "white",
    },
});