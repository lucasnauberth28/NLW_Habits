import { View, ScrollView, Text } from "react-native";
import { useRoute } from "@react-navigation/native";
import dayjs from "dayjs";
import { BackButton } from "../components/backButton";
import { ProgressBar } from "../components/ProgressBar";
import { Checkbox } from "../components/checkbox";
interface Params {
    date:string;


}

export function Habit() {
    const route = useRoute();
    const { date } = route.params as Params;

    const parsedDate = dayjs(date);
    const dayOfWeek = parsedDate.format('dddd');
    const dayAndMonth = parsedDate.format('DD/MM')

    return(
        <View className="flex-1 bg-background px-8 pt-16">
            <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{paddingBottom: 100}}>

                <BackButton/>

                <Text className="mt-6 text-zinc-400 font-semibold text-base lowercase">
                    {dayOfWeek}
                </Text>

                <Text className=" text-white font-semibold text-3xl">
                    {dayAndMonth}
                </Text>

                <ProgressBar progress={44}/>

                <View className="mt-6">

                    <Checkbox 
                        title="Beber 2l de àgua"
                        checked={false}
                    />

                    <Checkbox 
                        title="Caminhar"
                        checked={true}
                    />   
                </View>

            </ScrollView>
        </View>
    )
}