import DashboardRoundedIcon from "@mui/icons-material/DashboardRounded";
import PeopleRoundedIcon from "@mui/icons-material/PeopleRounded";
import MedicalServicesRoundedIcon from "@mui/icons-material/MedicalServicesRounded";
import CalendarMonthRoundedIcon from "@mui/icons-material/CalendarMonthRounded";
import AssignmentRoundedIcon from "@mui/icons-material/AssignmentRounded";
import HealingRoundedIcon from "@mui/icons-material/HealingRounded";
import FitnessCenterRoundedIcon from "@mui/icons-material/FitnessCenterRounded";
import BuildRoundedIcon from "@mui/icons-material/BuildRounded";
import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";
import BusinessRoundedIcon from "@mui/icons-material/BusinessRounded";
import AssignmentTurnedInRoundedIcon from "@mui/icons-material/AssignmentTurnedInRounded";
import PointOfSaleRoundedIcon
from "@mui/icons-material/PointOfSaleRounded";

export const adminMenu = [

    {
        text: "Dashboard",
        icon: <DashboardRoundedIcon />,
        path: "/dashboard",
    },

    {
        divider: true,
    },

    {
        text: "Pacientes",
        icon: <PeopleRoundedIcon />,
        path: "/pacientes",
    },

    {
        text: "Fisioterapeutas",
        icon: <MedicalServicesRoundedIcon />,
        path: "/fisioterapeutas",
    },

    {
        divider: true,
    },

    {
        text: "Citas",
        icon: <CalendarMonthRoundedIcon />,
        path: "/citas",
    },

    {
        text: "Evaluaciones",
        icon: <AssignmentRoundedIcon />,
        path: "/evaluaciones",
    },

    {
        text: "Tratamientos",
        icon: <HealingRoundedIcon />,
        path: "/tratamientos",
    },

    {
        text: "Sesiones",
        icon: <AssignmentTurnedInRoundedIcon />,
        path: "/sesiones",
    },

    {
        divider: true,
    },

    {
        text: "Ventas",
        icon: <PointOfSaleRoundedIcon />,
        path: "/ventas",
    },

    {
        divider: true,
    },

    {
        text: "Servicios",
        icon: <BuildRoundedIcon />,
        path: "/servicios",
    },

    {
        text: "Sucursales",
        icon: <BusinessRoundedIcon />,
        path: "/sucursales",
    },

    {
        divider: true,
    },

    {
        text: "Usuarios",
        icon: <PeopleRoundedIcon />,
        path: "/usuarios",
    },

    {
        text: "Configuraciones",
        icon: <SettingsRoundedIcon />,
        path: "/configuraciones",
    },

];

export const fisioterapeutaMenu = [

    {
        text: "Dashboard",
        icon: <DashboardRoundedIcon />,
        path: "/dashboard",
    },

    {
        divider: true,
    },

    {
        text: "Pacientes",
        icon: <PeopleRoundedIcon />,
        path: "/pacientes",
    },

    {
        divider: true,
    },

    {
        text: "Citas",
        icon: <CalendarMonthRoundedIcon />,
        path: "/citas",
    },

    {
        text: "Evaluaciones",
        icon: <AssignmentRoundedIcon />,
        path: "/evaluaciones",
    },

    {
        text: "Tratamientos",
        icon: <HealingRoundedIcon />,
        path: "/tratamientos",
    },

    {
        text: "Sesiones",
        icon: <FitnessCenterRoundedIcon />,
        path: "/sesiones",
    },

];