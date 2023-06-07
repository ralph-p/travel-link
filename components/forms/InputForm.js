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
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="departAirport"
                value="Departing Airport"
              />
              <TextInput
                id="departAirport"
                placeholder="YYZ"
                required
                type="text"
                value={form?.depart}
                onChange={(event) => setForm('depart', event.target.value)}
              />
            </div>
            <div className="mb-2 block">
              <Label
                htmlFor="arriveAirport"
                value="Arriving Airport"
              />
              <TextInput
                id="arriveAirport"
                placeholder="AMS"
                required
                type="text"
                value={form?.arrive}
                onChange={(event) => setForm('arrive', event.target.value)}
              />
            </div>
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      );
    default:
      return (<Button >Please Preview before submitting</Button>)
  }

}
const PremiumEconomy = ({ setForm, form, step, nextStep }) => {
  switch (step) {
    case 1:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="departAirport"
                value="Departing Airport"
              />
              <TextInput
                id="departAirport"
                placeholder="YYZ"
                required
                type="text"
                value={form?.depart}
                onChange={(event) => setForm('depart', event.target.value)}
              />
            </div>
            <div className="mb-2 block">
              <Label
                htmlFor="arriveAirport"
                value="Arriving Airport"
              />
              <TextInput
                id="arriveAirport"
                placeholder="AMS"
                required
                type="text"
                value={form?.arrive}
                onChange={(event) => setForm('arrive', event.target.value)}
              />
            </div>
          </div>
          <Button type='submit'>Next Step</Button>
        </form>
      );
    case 2:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="firstOption"
                value="Premium - Number Checkin"
              />
            </div>
            <TextInput
              id="firstOption"
              placeholder="Enter Number of checked bags"
              required
              type="number"
              value={form?.checkedBags}
              onChange={(event) => setForm('checkedBags', event.target.value)}
            />
          </div>
          <Button type='submit'>Next Step</Button>
        </form>
      )
    default:
      return (<Button >Please Preview before submitting</Button>)
  }

}
const BusinessClass = ({ setForm, form, step, nextStep }) => {
  switch (step) {
    case 1:

      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div className="mb-2 block">
            <Label
              htmlFor="departAirport"
              value="Departing Airport"
            />
            <TextInput
              id="departAirport"
              placeholder="YYZ"
              required
              type="text"
              value={form?.depart}
              onChange={(event) => setForm('depart', event.target.value)}
            />
          </div>
          <div className="mb-2 block">
            <Label
              htmlFor="arriveAirport"
              value="Arriving Airport"
            />
            <TextInput
              id="arriveAirport"
              placeholder="AMS"
              required
              type="text"
              value={form?.arrive}
              onChange={(event) => setForm('arrive', event.target.value)}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      );
    case 2:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="firstOption"
                value="Business - Number Checkin"
              />
            </div>
            <TextInput
              id="firstOption"
              placeholder="Enter Number of checked bags"
              required
              type="number"
              value={form?.checkedBags}
              onChange={(event) => setForm('checkedBags', event.target.value)}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      )
    case 3:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="economyAdditionalOption"
                value="Business Class - Additional Info"
              />
            </div>
            <Textarea
              id="businessAdditionalOption"
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
      return (<Button >Please Preview before submitting</Button>)
  }

}
const FirstClass = ({ setForm, form, step, nextStep }) => {
  switch (step) {
    case 1:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="departAirport"
                value="Departing Airport"
              />
              <TextInput
                id="departAirport"
                placeholder="YYZ"
                required
                type="text"
                value={form?.depart}
                onChange={(event) => setForm('depart', event.target.value)}
              />
            </div>
            <div className="mb-2 block">
              <Label
                htmlFor="arriveAirport"
                value="Arriving Airport"
              />
              <TextInput
                id="arriveAirport"
                placeholder="AMS"
                required
                type="text"
                value={form?.arrive}
                onChange={(event) => setForm('arrive', event.target.value)}
              />
            </div>
            <div className="flex items-center gap-2 mt-2">
              <Checkbox id="priority" value={form?.prioritySeating} onChange={() => setForm('prioritySeating', !form?.prioritySeating)} />
              <Label htmlFor="priority">
                Priority Seating
              </Label>
            </div>
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      );
    case 2:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="firstOption"
                value="First Class - Number Checkin"
              />
            </div>
            <TextInput
              id="firstOption"
              placeholder="Enter Number of checked bags"
              required
              type="number"
              value={form?.checkedBags}
              onChange={(event) => setForm('checkedBags', event.target.value)}
            />
          </div>
          <div className="flex items-center gap-2 mt-2">
            <Checkbox id="priority" value={form?.extraBag} onChange={() => setForm('extraBag', !form?.extraBag)} />
            <Label htmlFor="priority">
              Add Extra Carry On
            </Label>
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      )
    case 3:
      return (
        <form className="flex max-w-md flex-col gap-4" onSubmit={nextStep}>
          <div>
            <div className="mb-2 block">
              <Label
                htmlFor="economyAdditionalOption"
                value="First Class - Additional Info"
              />
            </div>
            <Textarea
              id="economyAdditionalOption"
              placeholder="Enter any more info"
              required
              value={form?.additional}
              onChange={(event) => setForm('additional', event.target.value)}
              rows={10}
            />
          </div>
          <Button onClick={nextStep}>Next Step</Button>
        </form>
      )
    default:
      return (<Button >Please Preview before submitting</Button>)
  }

}

export const InputForm = ({ formClass, step, nextStep, currentForm }) => {
  const [form, setForm] = useState({ ...currentForm })
  const formNextStep = (event) => {
    event.preventDefault()
    nextStep(form)
  }
  switch (formClass) {
    case airTransportOptions[0].value:
      return (<AirEconomy setForm={(key, value) => setForm((form) => ({ ...form, [key]: value }))} form={form} step={step} nextStep={formNextStep} />)
    case airTransportOptions[1].value:
      return (<PremiumEconomy setForm={(key, value) => setForm((form) => ({ ...form, [key]: value }))} form={form} step={step} nextStep={formNextStep} />)
    case airTransportOptions[2].value:
      return (<BusinessClass setForm={(key, value) => setForm((form) => ({ ...form, [key]: value }))} form={form} step={step} nextStep={formNextStep} />)
    case airTransportOptions[3].value:
      return (<FirstClass setForm={(key, value) => setForm((form) => ({ ...form, [key]: value }))} form={form} step={step} nextStep={formNextStep} />)

    default:
      return <Button >Please Preview before submitting</Button>
  }

}
