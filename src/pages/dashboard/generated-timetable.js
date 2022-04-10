import { Typography } from '@mui/material'
import React from 'react'
import Timetable from '../../components/Dashboard/Timetable'
import DashboardLayout from '../../layouts/DashboardLayout'

const GeneratedTimetable = () => {
    const columns = [
        {
            field: "srNo",
            headerName: "Sr No",
            width: 100,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "subjectCode",
            headerName: "Subject Code",
            width: 120,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "subjectName",
            headerName: "Subject Name",
            minWidth: 200,
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "slotsPerWeek",
            headerName: "Slots per week",
            minWidth: 200,
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
        {
            field: "selectCourse",
            headerName: "Selected Course",
            minWidth: 200,
            flex: 1,
            align: "center",
            headerAlign: "center",
        },
    ];

    const rows = [
        {
            id: 1,
            srNo: 1,
            subjectCode: "T-001",
            subjectName: "Teacher 1",
            slotsPerWeek: "2",
            selectCourse: "IT",
        },
        {
            id: 2,
            srNo: 2,
            subjectCode: "T-002",
            subjectName: "Teacher 2",
            slotsPerWeek: "4",
            selectCourse: "COMPS",
        },
        {
            id: 3,
            srNo: 3,
            subjectCode: "T-003",
            subjectName: "Teacher 3",
            slotsPerWeek: "2",
            selectCourse: "IT",
        },
        {
            id: 4,
            srNo: 4,
            subjectCode: "T-004",
            subjectName: "Teacher 4",
            slotsPerWeek: "3",
            selectCourse: "COMPS",
        },
        {
            id: 5,
            srNo: 5,
            subjectCode: "T-005",
            subjectName: "Teacher 5",
            slotsPerWeek: "4",
            selectCourse: "IT",
        },
    ];

    return (
        <DashboardLayout title="Generated timetables">
            <Typography variant="h3" textAlign="center" flexGrow={1} mb={3}>SAKEC</Typography>
            <Timetable columns={columns} rows={rows} classroom="CR12" pageSize={5} rowsPerPageOptions={[5]} />
        </DashboardLayout>
    )
}

export default GeneratedTimetable