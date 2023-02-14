import { Check } from "phosphor-react";
import { FormEvent, useState } from  'react';
import * as Checkbox from  '@radix-ui/react-checkbox';

const avaiable = [ 'Domingo', 'Segunda-feira' , 'Terça-feira' , 'Quarta-feira' , 'Quinta-feira' , 'Sexta-feira' , 'Sábado'];

export function NewHabitForm() {
    const [title, setTitle] = useState('');
    const [weekDays, setWeekDays] = useState<number[]>([]);

    function createNewHabit(event: FormEvent){
        event.preventDefault();
    }

    function handleToggleWD(weekday: number)
    {  
        if(weekDays.includes(weekday))
        {
            const weekDaysWithRemovedOne = weekDays.filter(day => day != weekday)

            setWeekDays(weekDaysWithRemovedOne);
        } else{
            const weekDaysWithAddedOne = [...weekDays, weekday]

            setWeekDays(weekDaysWithAddedOne);
        }
    }
    
    return(
        <form onSubmit={createNewHabit } className="w-full flex flex-col mt-6">
            <label htmlFor="title" className="font-semibold leading-tight">
                Qual o seu comprometimento?
            </label>
            <input 
                type="text" 
                id="title" 
                placeholder="Ex: Exercícios, Dormir 8h, etc..."
                className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-300"
                autoFocus
                onChange={event => setTitle(event.target.value)}
            />

            <label htmlFor="" className="font-semibold leading-tight mt-4">
                Qual a recorrência do seu hábito?
            </label>

            <div className="flex flex-col gap-2 mt-3">
                {
                    avaiable.map((weekDay, index) => {
                        return(
                            <Checkbox.Root 
                                key={weekDay}
                                className='flex items-center gap-3 group'
                                onCheckedChange={() => {handleToggleWD(index)}}
                            >
                                <div className='h-8 w-8 rounded-lg flex items-center justify-center bg-zinc-900 border-2 border-zinc-800 group-data-[state=checked]:bg-green-500 group-data-[state=checked]:border-green-400'>
                                    <Checkbox.Indicator>
                                        <Check size={20} className="text-white" />
                                    </Checkbox.Indicator>
                                </div>

                                <span className=' text-white leading-tight'>
                                    {weekDay}
                                </span>
                            </Checkbox.Root>
                        )
                    })
                }
                
            </div>

            <button type="submit" className="mt-6 rounded-lg p-4 gap-3 flex items-center font-semibold bg-green-600 justify-center hover:bg-green-500">
                <Check size={20} weight="bold"/>
                Confirmar
            </button>
        </form>
    );
}