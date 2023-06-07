import { airTransportOptions } from '@/constants/form'
import React, { useState } from 'react'
import { InputForm } from '../forms/InputForm'

export const Air = () => {
  const [step, setStep] = useState(0)
  const [airForm, setAirForm] = useState()
  const RenderStep = () => {
    switch (step) {
      case 0:
        return (<>
          <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an air option</label>
          <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
              airTransportOptions.map(({ value, option }) => (
                <option value={value} onClick={() => { setAirForm({ ...airForm, class: option }); setStep(1) }}>{option}</option>
              ))
            }
          </select>
        </>)

      case 1:
        return (<InputForm />)
      default:
        break;
    }
  }

  return (
    <div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <RenderStep />
        {
          step > 0 ? (<>
            You have selected {airForm?.class}
          </>) : null
        }
      </p>
    </div>
  )
}
