import React from 'react';
import { useState } from 'react';

export default function Tabs() {
  const [selectedTab, setSelectedTab] = useState(0)

  const selectTab = (index: number) => setSelectedTab(index) 

  const tabTitles: string[] = ["Tab1", "Tab2", "Tab3"]
  const tabContents: string[] = ["Content1", "Content2", "Content3"]
  // const tabContents1 : React.ReactElement = [Registration]

  return (
    <div>

      <TabButtons tabTitles={tabTitles} selectTab={selectTab}/>

      <TabContents tabContents={tabContents} selectedTab={selectedTab}/>

    </div>
  )
}

type tabButtonsProps = {
  tabTitles: string[],
  selectTab: (index: number) => void
}

const TabButtons = (props: tabButtonsProps) => {
  return (
    <div className="tabButton" style={{display: 'flex', gap: '10px', padding: '20px'}}>
      {
        props.tabTitles.map((title, index) =>(
          <button onClick={() => props.selectTab(index)}>{title}</button>
        ))
      }
      </div>
  )
}


type TabContentsProps = {
  tabContents: string[],
  selectedTab: number,
}

const TabContents = (props: TabContentsProps) =>{

  return (
    <div style={{padding: '20px'}}>
      {props.tabContents[props.selectedTab]}
    </div>
  )
}

