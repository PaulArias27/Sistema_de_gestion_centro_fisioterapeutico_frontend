import {
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from "@mui/material";

const actividades = [
  "Nuevo paciente registrado.",
  "Se agendó una nueva cita.",
  "Pago registrado correctamente.",
  "Tratamiento actualizado.",
  "Nueva sesión completada.",
];

function RecentActivity() {
  return (
    <Card
      sx={{
        borderRadius: 4,
        height: "100%",
      }}
    >
      <CardContent>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >
          Actividad reciente
        </Typography>

        <List>

          {actividades.map((actividad, index) => (

            <ListItem key={index}>

              <ListItemText
                primary={actividad}
              />

            </ListItem>

          ))}

        </List>

      </CardContent>
    </Card>
  );
}

export default RecentActivity;