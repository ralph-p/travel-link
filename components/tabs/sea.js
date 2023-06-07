import { seaTransportOptions } from '@/constants/form'
import React from 'react'

export const Sea = () => {
  return (
    <div>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        <label for="countries" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select a Sea option</label>
        <select id="countries" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
          {
            seaTransportOptions.map(({ value, option }) => (
              <option value={value}>{option}</option>
            ))
          }
        </select>

      </p>
    </div>
  )
}
