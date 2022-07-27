import Tab from '@mui/material/Tab'
import Box from '@mui/material/Box'

import React from 'react'
import TabPanel from '@mui/lab/TabPanel'
import InfoUser from '../../Student/components/InfoUser'
import Dashboard from '../components/Dashboard'
import InfoSchool from '../components/InfoSchool'
import NewStudent from '../components/NewStudent'
import { TabContext, TabList } from '@mui/lab'
import {
  FaFontAwesome,
  FaIceCream,
  FaIcons,
  FaPlusSquare,
  FaUserFriends,
  FaUserPlus,
} from 'react-icons/fa'
import ListStudent from '../components/ListStudent'

export default function SchoolProfile() {
  const [value, setValue] = React.useState('one')

  const handleChange = (event, newValue) => {
    setValue(newValue)
  }
  return (
    <div>
      <div className="row container m-3 justify-center">
        <div className="col-lg-8">
          <img
            className="h-60 w-full"
            src="https://img.freepik.com/vecteurs-libre/interieur-du-couloir-ecole-portes-casiers_107791-1269.jpg?w=2000"
            alt="head"
          />

          <Dashboard />
        </div>
        <div className="col-lg-6 mt-3">
          <div className="">
            <NewStudent />

              <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                  <TabList
                    className="bg-white"
                    onChange={handleChange}
                    aria-label="lab API tabs example"
                  >
                    <Tab
                      icon={<FaUserPlus size={30} className="mx-auto" />}
                      label="Nouveaux etudiants"
                      value="1"
                    />
                    <Tab
                      icon={<FaUserFriends size={30} className="mx-auto" />}
                      label="En attente"
                      value="2"
                    />
                    <Tab
                      icon={<FaPlusSquare size={30} className="mx-auto" />}
                      label="Creer une publication"
                      value="3"
                    />{' '}
                    <Tab
                      icon={<FaFontAwesome size={30} className="mx-auto" />}
                      label="Parametres"
                      value="4"
                    />{' '}
                  </TabList>
                </Box>
                <TabPanel value="1"><ListStudent/></TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
              </TabContext>
            <InfoUser />
            <InfoSchool />
          </div>
        </div>
      </div>
    </div>
  )
}
