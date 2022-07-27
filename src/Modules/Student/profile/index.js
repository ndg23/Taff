import { TabContext, TabList, TabPanel } from '@mui/lab'
import { Box, Tab } from '@mui/material'
import React from 'react'
import {
  FaFontAwesome,
  FaPlusSquare,
  FaUserFriends,
  FaUserPlus,
} from 'react-icons/fa'
import ListStudent from '../../School/components/ListStudent'
import HeadProfile from '../components/HeadProfile'
import InfoUser from '../components/InfoUser'
import InfoScholar from '../components/Scholar'
import SchoolAccept from '../components/SchoolAccept'
import SchoolDemand from '../components/SchoolDemand'
import StudentSecurity from '../components/Security'

export default function UserProfile() {
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <div className="row  justify-center">
        <div className="col-lg-6 my-3">
          <HeadProfile />{' '}
          <div className="bg-white my-2 gap-1 justify-center  flex">
       <h3 className='font-bold py-2'>Soyez courtois comme tibault</h3>
          </div>
          <TabContext className='bg-red-400' value={value}>
              <TabList
                className="bg-white w-full"
                onChange={handleChange}
                aria-label="lab API tabs example"
              >
                <Tab
                  icon={<FaUserPlus size={30} className="mx-auto" />}
                  label="Demandes"
                  value="1"
                />
                <Tab
                  icon={<FaUserFriends size={30} className="mx-auto" />}
                  label="Acceptation"
                  value="2"
                />
                <Tab
                  icon={<FaPlusSquare size={30} className="mx-auto" />}
                  label="Profile"
                  value="3"
                />{' '}
              </TabList>
            <TabPanel value="1">
              <div className="text-3xl font-bold">
                <h3>Vous n'avez pas de demandes</h3>
              </div>{' '}
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">
              <InfoUser />
              <InfoScholar />
              <StudentSecurity />
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </div>
  )
}
