import * as React from "react";
import { StyleSheet } from "react-nativescript";

interface FadeTransitionProps {
    children: React.ReactNode;
    duration?: number;
    delay?: number;
    style?: any;
}

export function FadeTransition({ children, duration = 300, delay = 0, style }: FadeTransitionProps) {
    const [opacity, setOpacity] = React.useState(0);

    React.useEffect(() => {
        setTimeout(() => {
            setOpacity(1);
        }, delay);
    }, []);

    return (
        <flexboxLayout 
            style={[styles.container, style, { opacity, transition: `opacity ${duration}ms ease-in-out` }]}
        >
            {children}
        </flexboxLayout>
    );
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
    },
});