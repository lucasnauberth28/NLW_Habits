import { useState } from 'react';

import { ScrollView, Text, TextInput, View, TouchableOpacity } from "react-native";
import { BackButton } from "../components/backButton";
import { Checkbox } from "../components/checkbox";

import { Feather } from "@expo/vector-icons";
import colors from 'tailwindcss/colors';

const avaiableWeekDays = ['Domingo', 'Segunda-feira', 'Terça-feira','Quarta-feira','Quinta-feira', 'Sexta-feira', 'Sábado']

export function New() {
    const [weekDays, setWeekDays] = useState<number[]>([]);

    function handleToggleWeekDay(weekDayIndex: number){
        if((weekDays).includes(weekDayIndex)){
            setWeekDays(prevState => prevState.filter(weekDay => weekDay !== weekDayIndex))
        } else {
            setWeekDays(prevState => [...prevState, weekDayIndex]);
        }
    }

    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false}
                contentContainerStyle={{paddingBottom: 100}}
            >
                <BackButton />

                <Text className="mt-6 text-white font-extrabold text-3xl">
                    Criar hábito
                </Text>

                <Text className="mt-6 text-white font-semibold text-base">
                    Qual o comprometimento?
                </Text>

                <TextInput
                    className="h-12 pl-4 rounded-lg mt-3 bg-zinc-800 text-white focus:border-2 focus:border-violet-500"
                    placeholder='Ex: Exercícios, Dormir 8h, etc...'
                    placeholderTextColor={colors.zinc[400]}
                />

                <Text className="font-semibold mt-4 mb-3 text-white text-base">
                    Qual a recorrência ?
                </Text>

                {
                    avaiableWeekDays.map((weekDay, index) => (
                        <Checkbox 
                            key={weekDay}
                            title={weekDay}
                            onPress={() => handleToggleWeekDay(index)}
                            checked={weekDays.includes(index)}
                        />
                    ))
                }

                <TouchableOpacity 
                    className='w-full h-14 flex-row items-center justify-center bg-green-600 rounded-md mt-6'
                >
                    <Feather
                        name='check'
                        size={20}
                        color={colors.white}
                    />

                    <Text className='font-semibold text-base text-white ml-4'>
                        Confirmar
                    </Text>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}