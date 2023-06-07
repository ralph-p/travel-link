import React, { useState } from 'react'
import { InputForm } from '../forms/InputForm'
import useSwr from 'swr'
import { fetcher } from '@/constants/api'
import { Spinner } from 'flowbite-react';
export const Air = () => {
  const [step, setStep] = useState(0)
  const [airForm, setAirForm] = useState()
  const {data, error, isLoading}  = useSwr('/api/air-options', fetcher)
  const nextStep = (formData) => {
    setAirForm((form) => ({...form, ...formData}))
    setStep((s) => s + 1)
  }
  const RenderStep = () => {
    switch (step) {
      case 0:
        return (<>
          <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an air option</label>
          <select id="airTransportOptions" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
            {
              data?.options.map(({ value, option }) => (
                <option key={`air-${value}`} value={value} onClick={() => { setAirForm({ class: value }); setStep(1) }}>{option}</option>
              ))
            }
          </select>
        </>)

      default:
        return (<InputForm step={step} formClass={airForm?.class} nextStep={nextStep} currentForm={airForm}/>)
    }
  }
  if (isLoading) return (<div className='mx-auto'><Spinner /></div>)
  return (
    <div>
      <div className="text-sm text-gray-500 dark:text-gray-400">
        {step > 0 ? <button onClick={() => setStep((s) => s - 1)}>Back</button> : null}
        <RenderStep />
        {
          step > 0 ? (<>
            You have selected {airForm?.class}
            <br />
            {airForm?.depart && `Depart: ${airForm.depart}`}{airForm?.arrive && `, Arrive: ${airForm.arrive}`}
            <br />
            {airForm?.prioritySeating ? `Will have Priority Seating` : null}
            <br />
            {airForm?.checkedBags && `Number of checked Bags: ${airForm.checkedBags}`}
            <br />
            {airForm?.extraBag && `Will Have an extra bag`}
            <br />
            {airForm?.additional && `More information: ${airForm.additional}`}
          </>) : null
        }
      </div>
    </div>
  )
}
