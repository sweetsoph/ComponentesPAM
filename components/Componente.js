import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Componente(props){
    return(
        <>
            <Text style={styles.texto}>Nome: {props.nome}</Text>
            <Text style={styles.texto}>Idade: {props.idade}</Text>
        </>
    );
}

const styles = StyleSheet.create({
    texto:{
        fontSize: 30
    }
});