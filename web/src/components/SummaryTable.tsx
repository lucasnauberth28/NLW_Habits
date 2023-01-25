const weekDays = ['D', 'S', 'T', 'Q', 'Q', 'S', 'S']
import { generateDatesFromYearBeginning } from '../utils/generate-dates'
import { Habit } from './Habit'

const summary = generateDatesFromYearBeginning()

const minimumSummaryDatesSize = 18 * 7
const amountOfDaysToFill = minimumSummaryDatesSize - summary.length

export function Summary() {
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
                    return (
                        <Habit 
                            key={date.toString()}
                            amount={5}
                            completed={Math.round(Math.random() * 5)}
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