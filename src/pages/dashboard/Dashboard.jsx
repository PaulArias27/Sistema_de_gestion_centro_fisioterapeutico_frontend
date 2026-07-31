import { Box, Grid } from "@mui/material";

import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import PaymentsRoundedIcon from "@mui/icons-material/PaymentsRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";

import StatCard from "./components/StatCard";
import IncomeChart from "./components/IncomeChart";
import UpcomingAppointments from "./components/UpcomingAppointments";
import RecentPatients from "./components/RecentPatients";
import RecentActivity from "./components/RecentActivity";

function Dashboard() {
  return (
    <Box>
    <Grid container spacing={3}>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard
          title="Pacientes"
          value="254"
          color="#F57C00"
          icon={<PeopleRoundedIcon fontSize="large" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard
          title="Citas Hoy"
          value="18"
          color="#1976D2"
          icon={<CalendarMonthRoundedIcon fontSize="large" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard
          title="Ventas"
          value="$2.350"
          color="#2E7D32"
          icon={<PaymentsRoundedIcon fontSize="large" />}
        />
      </Grid>

      <Grid size={{ xs: 12, md: 6, lg: 3 }}>
        <StatCard
          title="Fisioterapeutas"
          value="12"
          color="#8E24AA"
          icon={<MedicalServicesRoundedIcon fontSize="large" />}
        />
      </Grid>
      <Grid
            size={{
                xs:12,
                lg:8
            }}
        >

            <IncomeChart/>

        </Grid>

        <Grid
            size={{
                xs:12,
                lg:4
            }}
        >

            <UpcomingAppointments/>

        </Grid>
        <Grid size={{ xs: 12, lg: 6 }}>
            <RecentPatients />
                </Grid>

                <Grid size={{ xs: 12, lg: 6 }}>
            <RecentActivity />
        </Grid>

    </Grid>
    </Box>
  );
}

export default Dashboard;