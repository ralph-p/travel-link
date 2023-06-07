
import { TABS } from '@/constants/form'
import { useState } from 'react'
import { Air, Land, Sea } from '@/components/tabs'
import useSwr from 'swr'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(TABS[0])
  const fetcher = (...args) => fetch(...args).then(res => res.json())
  const {data, error}  = useSwr('/api/hello', fetcher)
  const TabDisplay = () => {
    switch (selectedTab) {
      case TABS[0]:
        return <Air />
      case TABS[1]:
        return <Land />
      case TABS[2]:
        return <Sea />
      default:
        break;
    }
  }
  return (
      <div className="container mx-auto">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" role="tablist">
            {
              TABS.map((tab) => (
                <li key={`tab-${tab}`} className="mr-2" role="presentation">
                  <button onClick={() => setSelectedTab(tab)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${tab === selectedTab && `text-blue-900 border-blue-800 font-bold`}`} id={`${tab}-tab`} data-tabs-target={`#${tab}`} type="button" role="tab" aria-controls={tab} aria-selected="true">{tab}</button>
                </li>
              ))
            }
          </ul>
        </div>
        <div id="myTabContent">
          <div className="p-4 rounded-lg bg-gray-50 dark:bg-gray-800" id="profile" role="tabpanel" aria-labelledby="profile-tab">
           <TabDisplay />
          </div>
        </div>
      </div>
  )
}
