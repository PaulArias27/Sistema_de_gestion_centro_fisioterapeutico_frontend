import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Chip,
  Typography,
} from "@mui/material";

const pacientes = [
  {
    nombre: "María López",
    estado: "Activo",
  },
  {
    nombre: "Carlos Pérez",
    estado: "Activo",
  },
  {
    nombre: "Ana Torres",
    estado: "Nuevo",
  },
  {
    nombre: "Luis Sánchez",
    estado: "Activo",
  },
];

function RecentPatients() {
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
          Pacientes recientes
        </Typography>

        <List>

          {pacientes.map((paciente, index) => (

            <ListItem key={index}>

              <ListItemAvatar>

                <Avatar
                  sx={{
                    bgcolor: "#F57C00",
                  }}
                >
                  {paciente.nombre.charAt(0)}
                </Avatar>

              </ListItemAvatar>

              <ListItemText
                primary={paciente.nombre}
              />

              <Chip
                label={paciente.estado}
                color="success"
                size="small"
              />

            </ListItem>

          ))}

        </List>

      </CardContent>
    </Card>
  );
}

export default RecentPatients;