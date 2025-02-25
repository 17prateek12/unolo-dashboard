import EmployeeTable from '@/components/dashboard/OverviewComponent/EmployeeTable'
import ExpenseOverView from '@/components/dashboard/OverviewComponent/ExpenseOverView'
import FourStatus from '@/components/dashboard/OverviewComponent/FourStatus'
import OffDutyEmployee from '@/components/dashboard/OverviewComponent/OffDutyEmployee'
import StatusDashboard from '@/components/dashboard/OverviewComponent/StatusDashboard'
import TaskOverView from '@/components/dashboard/OverviewComponent/TaskOverView'
import TeamWiseAttendance from '@/components/dashboard/OverviewComponent/TeamWiseAttendance'
import WorkingHours from '@/components/dashboard/OverviewComponent/WorkingHours'
import React from 'react'

const Dashboard = () => {
    return (
        <div className="grid auto-rows-min gap-4 md:grid-cols-2">
            <div className="aspect-video rounded-xl">
                <StatusDashboard />
            </div>
            <div className="aspect-video rounded-xl">
                <TeamWiseAttendance />
            </div>
            <div className="aspect-video rounded-xl">
                <EmployeeTable />
            </div>
            <div className="aspect-video rounded-xl">
                <OffDutyEmployee />
            </div>
            <div className="md:aspect-video rounded-xl">
                <FourStatus />
            </div>
            <div className="aspect-video rounded-xl">
                <WorkingHours />
            </div>
            <div className="aspect-video rounded-xl">
                <TaskOverView />
            </div>
            <div className="aspect-video rounded-xl">
                <ExpenseOverView />
            </div>
        </div>
    )
}

export default Dashboard

