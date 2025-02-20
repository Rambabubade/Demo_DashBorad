import { Box, Button, Grid, Typography, useTheme } from "@mui/material";
import { tokens } from "../../theme";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import NewReleasesIcon from "@mui/icons-material/NewReleases";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import HourglassEmptyIcon from "@mui/icons-material/HourglassEmpty";
import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import BarChart from "../../components/BarChart";
import StatBox from "../../components/StatBox";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import React from "react";
const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode); // Get theme colors

  return (
    <Box m={2}>
      {/* HEADER */}
      <Box mb={3} p={2} borderRadius={2} sx={{ bgcolor: colors.primary[400] }}>
        <Grid container justifyContent="space-between" alignItems="center">
          <Grid item xs={12} sm={6}>
            <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
          </Grid>
          <Grid item>
            <Button
              sx={{
                backgroundColor: colors.blueAccent[700],
                color: colors.grey[100],
                fontSize: { xs: "12px", sm: "14px" },
                fontWeight: "bold",
                padding: { xs: "8px 12px", sm: "10px 20px" },
              }}
            >
              <DownloadOutlinedIcon sx={{ mr: "10px" }} />
              Download Reports
            </Button>
          </Grid>
        </Grid>
      </Box>

      {/* TICKET STATISTICS (FIXED CIRCLE INSIDE BOX) */}
      <Grid container spacing={2}>
        {[
          { title: "50", subtitle: "All Tickets", progress: 0.75, icon: <ReceiptLongIcon /> },
          { title: "10", subtitle: "New Tickets", progress: 0.50, icon: <NewReleasesIcon /> },
          { title: "30", subtitle: "Resolved", progress: 0.30, icon: <CheckCircleIcon /> },
          { title: "10", subtitle: "Pending", progress: 0.80, icon: <HourglassEmptyIcon /> },
        ].map((item, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Box 
              p={2} 
              borderRadius={2} 
              sx={{ bgcolor: colors.primary[400], minHeight: "140px", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", overflow: "hidden" }}
            > 
              <StatBox
                title={item.title}
                subtitle={item.subtitle}
                progress={item.progress}
                icon={React.cloneElement(item.icon, {
                  fontSize: "large",
                  sx: { color: colors.greenAccent[600] },
                })}
              />
            </Box>
          </Grid>
        ))}
      </Grid>

      {/* REVENUE & SALES CHARTS */}
      <Grid container spacing={2} mt={3}>
        <Grid item xs={12} md={8}>
          <Box p={2} borderRadius={2} sx={{ bgcolor: colors.primary[400] }}>
            <Typography variant="h6" color={colors.grey[100]} mb={1}>
              Revenue Generated
            </Typography>
            <Typography variant="h4" fontWeight="bold" color={colors.greenAccent[500]}>
              $59,342.32
            </Typography>
            <Box height="250px">
              <LineChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>

        <Grid item xs={12} md={4}>
          <Box p={2} borderRadius={2} sx={{ bgcolor: colors.primary[400] }}>
            <Typography variant="h6" color={colors.grey[100]} mb={1}>
              Sales Quantity
            </Typography>
            <Box height="250px">
              <BarChart isDashboard={true} />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Dashboard;
