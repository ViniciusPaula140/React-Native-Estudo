
import React, {useState} from "react";
import { View, Text, TextInput, Button} from "react-native";
import ResultImc from "./ResultImc";

export default function Form(){
const [heigth, setHeigth] = useState(null)
const [weigth, setWeigth] = useState(null)
const [messageImc, setMessageImc] = useState("Preencha o peso e altura")
const [imc ,setImc] = useState(null)
const [TextButton,setTextButton] = useState("Calcular")

function imcCalculator(){
    return setImc((weigth/(heigth*2)).toFixed(2));
}

function validationImc(){
    if(weigth != null && heigth != null) {
        imcCalculator()
        setHeigth(null)
        setWeigth(null)
        setMessageImc("Seu imc é igual:")
        setTextButton("Calcular novamente")
        return
    }
    setImc(null)
    setTextButton("Calcular")
    setMessageImc("Preencha o peso e altura")    
}


    return(
        <View>
            <View>
                <Text>Altura</Text>
                <TextInput 
                onChangeText={setHeigth}
                value={heigth}
                placeholder="Ex: 1.75" keyboardType="numeric"/>

                <Text>Peso</Text>
                <TextInput 
                onChangeText={setWeigth}
                value={weigth}
                placeholder="Ex: 75.55" keyboardType="numeric"/>

                <Button
                onPress={() => validationImc()} 
                title={TextButton}/>
            </View>
            <ResultImc messageResultImc={messageImc} resultImc={imc}/>
        </View>
    );
}