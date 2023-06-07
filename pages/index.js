
import { TABS } from '@/constants/form'
import { useState } from 'react'
import { Air, Land, Sea } from '@/components/tabs'

export default function Home() {
  const [selectedTab, setSelectedTab] = useState(TABS[0])
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
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24`}
    >
      <div className="container mx-auto">
        <div className="mb-4 border-b border-gray-200 dark:border-gray-700">
          <ul className="flex flex-wrap -mb-px text-sm font-medium text-center" id="myTab" role="tablist">
            {
              TABS.map((tab) => (
                <li key={`tab-${tab}`} className="mr-2" role="presentation">
                  <button onClick={() => setSelectedTab(tab)} className={`inline-block p-4 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300 ${tab === selectedTab && `text-blue-900 border-gray-800`}`} id={`${tab}-tab`} data-tabs-target={`#${tab}`} type="button" role="tab" aria-controls={tab} aria-selected="true">{tab}</button>
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


    </main>
  )
}
