import React from 'react';
import {
    Box, useBreakpointValue
} from '@chakra-ui/react';
import Paper from '@material-ui/core/Paper';
import {
  Scheduler,
  DayView,
  WeekView,
  Appointments,
} from '@devexpress/dx-react-scheduler-material-ui';

const schedulerData = [
  { startDate: '2021-07-21T09:45', endDate: '2021-07-21T10:45', title: 'Meeting' },
  { startDate: '2021-07-21T11:45', endDate: '2021-07-21T13:45', title: 'Go to a gym' },
];

const SchedulePage = () => {
    return (
        <Box w="80%" h="55%" display="grid" placeItems="center" >
            <Box m={{base: 0, sm: 0, md: 10}} w="80%" h="60%">
            <Paper pb={10}>
            <Scheduler data={schedulerData} height={660}>
                {useBreakpointValue({base: <DayView intervalCount={5} />, sm: <WeekView startDayHour={9} endDayHour={19} />})}
                <Appointments />
            </Scheduler>
            </Paper>
            </Box>
        </Box>
    )
}

export default SchedulePage;