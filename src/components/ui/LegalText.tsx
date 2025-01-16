import * as React from "react";
import { StyleSheet } from "react-nativescript";

export function LegalText() {
    return (
        <flexboxLayout style={styles.container}>
            <label style={styles.text}>
                En appuyant sur Connexion, vous acceptez nos{" "}
                <button style={styles.link}>Conditions générales</button>.{"\n"}
                Pour en savoir plus sur l'utilisation de vos données,{"\n"}
                consultez notre <button style={styles.link}>Politique de confidentialité</button>{" "}
                et notre <button style={styles.link}>Politique en matière de Cookies</button>.
            </label>
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 40,
        alignItems: "center",
    },
    text: {
        fontSize: 11,
        textAlign: "center",
        lineHeight: 16,
        color: "rgba(0, 0, 0, 0.5)",
    },
    link: {
        fontSize: 11,
        fontWeight: "600",
        color: "rgba(0, 0, 0, 0.7)",
        textDecorationLine: "none",
    },
});