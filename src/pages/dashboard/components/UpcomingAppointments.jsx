import {
  Avatar,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Typography,
} from "@mui/material";

const citas = [

  {
    paciente: "María López",
    hora: "09:00",
  },

  {
    paciente: "Carlos Pérez",
    hora: "10:30",
  },

  {
    paciente: "Ana Torres",
    hora: "12:00",
  },

  {
    paciente: "Luis Sánchez",
    hora: "15:00",
  },

];

function UpcomingAppointments() {

  return (

    <Card
      sx={{
        borderRadius:4,
        height:"100%"
      }}
    >

      <CardContent>

        <Typography
          variant="h6"
          fontWeight={700}
          mb={2}
        >

          Próximas citas

        </Typography>

        <List>

          {citas.map((cita,index)=>(

            <ListItem
              key={index}
            >

              <ListItemAvatar>

                <Avatar
                  sx={{
                    bgcolor:"#F57C00"
                  }}
                >
                  {cita.paciente.charAt(0)}
                </Avatar>

              </ListItemAvatar>

              <ListItemText

                primary={cita.paciente}

                secondary={cita.hora}

              />

            </ListItem>

          ))}

        </List>

      </CardContent>

    </Card>

  )

}

export default UpcomingAppointments;