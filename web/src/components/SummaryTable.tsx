const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
import dayjs from 'dayjs'
import { useEffect, useState } from 'react'
import { api } from '../lib/axios'
import { generateDatesFromYearBeginning } from '../utils/generate-dates'
import { Habit } from './Habit'

const summary = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summary.length;

type Summary = {
    id: string;
    date: string;
    amount: number;
    completed: number
} []

export function Summary() {
    const [Summary, useSummary] = useState<Summary>([])

    // useEffect é chamado para previnir que
    //a  requisição seja chamadas diversas vezes.

    //ele utiliza de 2 parametros, sendo execução e
    //condição, quando a condição(2º valor), está vazia
    //ele retorna uma única vez.

    useEffect(() => {
        api.get('summary').then(response => {
            useSummary(response.data)
        });
    }, []);

    return(
        <div className="w-full flex">
            <div className="grid grid-rows-7 grid-flow-row gap-3">
                {
                    weekDays.map(((weekDay, i) => {
                        return(
                            <div key={`${weekDay}-${i}`} className="text-zinc-400 text-xl h-10 w-10 flex items-center justify-center font-bold">
                                {weekDay}
                            </div>
                        )}  
                    ))
                }
            </div>

            <div className="grid grid-rows-7 grid-flow-col gap-3">
                {summary.map(date => {
                    const dayInSummary = Summary.find(day => {
                        return dayjs(date).isSame(day.date, 'day')
                    })

                    return (
                        <Habit 
                            key={date.toString()}
                            date={date}
                            amount={dayInSummary?.amount}
                            completed={dayInSummary?.completed}
                        />
                    ) 
                })}

                {amountOfDaysToFill > 0 && Array.from({ length: amountOfDaysToFill}).map((_, i) => {
                    return(
                        <div key={i} className="bg-zinc-900 w-10 h-10 rounded-lg border-zinc-800 opacity-40 cursor-not-allowed"/>
                    );
                })}
                
            </div>
        </div>
    )
}