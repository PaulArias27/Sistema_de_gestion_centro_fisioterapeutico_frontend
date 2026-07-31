import {
  Card,
  CardContent,
  Typography,
  Box,
} from "@mui/material";

function StatCard({ title, value, icon, color }) {
  return (
    <Card
      elevation={2}
      sx={{
        borderRadius: 4,
        transition: "0.3s",

        "&:hover": {
          transform: "translateY(-5px)",
          boxShadow: 8,
        },
      }}
    >
      <CardContent>

        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >

          <Box>

            <Typography
              color="text.secondary"
              fontSize={15}
            >
              {title}
            </Typography>

            <Typography
              variant="h4"
              fontWeight="bold"
              mt={1}
            >
              {value}
            </Typography>

          </Box>

          <Box
            sx={{
              width: 65,
              height: 65,
              borderRadius: "50%",
              bgcolor: color,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "white",
            }}
          >
            {icon}
          </Box>

        </Box>

      </CardContent>
    </Card>
  );
}

export default StatCard;