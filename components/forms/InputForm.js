import { airTransportOptions } from '@/constants/form';
import React, { useState } from 'react'
import {
  Button,
  Checkbox,
  FileInput,
  Label,
  Radio,
  RangeSlider,
  Select,
  Textarea,
  TextInput,
  ToggleSwitch,
} from 'flowbite-react';
const AirEconomy = ({ setForm, form, step, nextStep }) => {
  switch (step) {
    case 1:

      return (
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="economyValue"
                value="Economy"
              />
            </div>
            <TextInput
              id="economyValue1"
              placeholder="Some value"
              required
              type="text"
              value={form?.value}
              onChange={(event) => setForm('value', event.target.value)}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      );
    default:
      return(<Button >Please Preview before submitting</Button>)
  }

}
const BusinessClass = ({ setForm, form, step, nextStep }) => {
  switch (step) {
    case 1:

      return (
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="economyValue"
                value="Economy"
              />
            </div>
            <TextInput
              id="economyValue1"
              placeholder="Some value"
              required
              type="text"
              value={form?.value}
              onChange={(event) => setForm('value', event.target.value)}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      );
    case 2:
      return (
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="economyOption"
                value="Economy Class - Option"
              />
            </div>
            <TextInput
              id="economyOption"
              placeholder="Enter option"
              required
              type="text"
              value={form?.option}
              onChange={(event) => setForm('option', event.target.value)}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      )
    case 3:
      return (
        <form className="flex max-w-md flex-col gap-4">
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="economyAdditionalOption"
                value="Economy Class - Additional Input"
              />
            </div>
            <TextInput
              id="economyAdditionalOption"
              placeholder="Enter any more info"
              required
              type="text"
              value={form?.additional}
              onChange={(event) => setForm('additional', event.target.value)}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      )
    default:
      return(<Button >Please Preview before submitting</Button>)
  }

}

export const InputForm = ({ formClass, step, nextStep, currentForm }) => {
  const [form, setForm] = useState({...currentForm})
  switch (formClass) {
    case airTransportOptions[0].value:
      return (<AirEconomy setForm={(key, value) => setForm((form) => ({ ...form, [key]: value }))} form={form} step={step} nextStep={() => nextStep(form)} />)
    case airTransportOptions[2].value:
      return (<BusinessClass setForm={(key, value) => setForm((form) => ({ ...form, [key]: value }))} form={form} step={step} nextStep={() => nextStep(form)} />)

    default:
      break;
  }
  return (
    <form>
      <div class="grid gap-6 mb-6 md:grid-cols-2">
        <div>
          <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">First name</label>
          <input type="text" id="first_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="John" required value={form?.value} onChange={(event) => setForm('value', event.target.value)} />
        </div>
        <div>
          <label for="last_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Last name</label>
          <input type="text" id="last_name" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Doe" required />
        </div>
        <div>
          <label for="company" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Company</label>
          <input type="text" id="company" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Flowbite" required />
        </div>
        <div>
          <label for="phone" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Phone number</label>
          <input type="tel" id="phone" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="123-45-678" pattern="[0-9]{3}-[0-9]{2}-[0-9]{3}" required />
        </div>
        <div>
          <label for="website" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Website URL</label>
          <input type="url" id="website" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="flowbite.com" required />
        </div>
        <div>
          <label for="visitors" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Unique visitors (per month)</label>
          <input type="number" id="visitors" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="" required />
        </div>
      </div>
      <div class="mb-6">
        <label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Email address</label>
        <input type="email" id="email" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="john.doe@company.com" required />
      </div>

    </form>
  )
}
