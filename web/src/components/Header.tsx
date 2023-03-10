import logo from '../assets/logo.svg'
import * as Dialog from '@radix-ui/react-dialog';
import { Plus, X } from 'phosphor-react'
import { useState } from 'react';
import { NewHabitForm } from './NewHabitForm';

export function Header(){

    // React não monitora redeclarações de variaveis, porém as monitora utilizando States, para auxiliar isso, ocorre o retorno através de array para a desestruturação de uma variavel
    // Imperativa vs Declarativa

    // Imperativa => comumente usada do modo tradicional (HTML, CSS e JS)
    // Declarativa => Usada no React, se cria uma condição e através dela reagimos 
    return(
        <div className="w-full max-w-3xl mx-auto flex items-center justify-between">
          <img src={logo} alt="Habits" />

          <Dialog.Root>
            <Dialog.Trigger
              type='button'
              className='flex items-center gap-3 border border-violet-500 font-semibold rounded-lg px-6 py-4 hover:border-white'
              >
                <Plus size={20} className="text-violet-500" />
                Novo Hábito
            </Dialog.Trigger>

            <Dialog.Portal>
              <Dialog.Overlay className='w-screen h-screen bg-black/80 fixed inset-0'/>
              <Dialog.Content className='absolute p-10 bg-zinc-900 rounded-2xl w-full max-w-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>

                <Dialog.Close className='absolute right-6 top-6 text-zinc-400 hover:text-zinc-200'>
                  <X size={24} aria-label="Fechar"/>
                </Dialog.Close>

                <Dialog.Title className='text-3xl leading-tight font-extrabold'>
                  Criar Hábito
                </Dialog.Title>

                <NewHabitForm />
              </Dialog.Content> 
            </Dialog.Portal>
          </Dialog.Root>

          
        </div>
    )
}