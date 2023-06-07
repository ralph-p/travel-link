import React from 'react'
import { Tabs } from 'flowbite-react';
const Config = () => {
  return (
    <div className="container mx-auto">
      <Tabs.Group
        aria-label="Tabs with underline"
        style="fullWidth"
      >
        <Tabs.Item title={"Vendors"} >
          <div>Vendor List</div>
        </Tabs.Item>
        <Tabs.Item title={"Dashboard"}>
          <div>Dashboard</div>

        </Tabs.Item>
        <Tabs.Item title={"Invoices"}>
          <div>List of invoices Details</div>

        </Tabs.Item>
        <Tabs.Item title={"Account"}>
          <div>Account Details</div>

        </Tabs.Item>
      </Tabs.Group>
    </div>
  )
}

export default Config