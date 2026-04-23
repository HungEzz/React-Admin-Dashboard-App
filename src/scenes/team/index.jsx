import { Typography, Box, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData";
import AdminPanelSettingsOutlinedIcon from "@mui/icons-material/AdminPanelSettingsOutlined";
import LockOpenOutlinedIcon from "@mui/icons-material/LockOpenOutlined";
import SecurityOutlinedIcon from "@mui/icons-material/SecurityOutlined";
import Header from "../../components/Header";

const Team = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const columns = [
    { field: "id", headerName: "ID" },
    {
      field: "name",
      headerName: "Name",
      flex: 1,
      cellClassName: "name-column--cell",
    },
    { field: "age", headerName: "Age", flex: 1 },
    { field: "phone", headerName: "Phone Number", flex: 1 },
    { field: "email", headerName: "Email", flex: 1 },
    {
      field: "access",
      headerName: "Access Level",
      flex: 1,
      renderCell: ({ row: { access } }) => {
        return (
          <Box
            sx={{
              width: "60%",
              m: "0 auto",
              p: "5px",
              display: "flex",
              justifyContent: "center",
              backgroundColor:
                access === "admin"
                  ? colors.greenAccent[600]
                  : access === "manager"
                    ? colors.greenAccent[700]
                    : colors.greenAccent[700],
              borderRadius: "4px",
            }}
          >
            {access === "admin" && <AdminPanelSettingsOutlinedIcon />}
            {access === "manager" && <SecurityOutlinedIcon />}
            {access === "user" && <LockOpenOutlinedIcon />}
            <Typography sx={{ ml: "5px" }}>{access}</Typography>
          </Box>
        );
      },
    },
  ];
  return (
    <Box sx={{ m: "20px", height: "75vh" }}>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box
        sx={{
          m: "40px 0 0 0",
          height: "75vh",
        }}
      >
        <DataGrid
          checkboxSelection
          rows={mockDataTeam}
          columns={columns}
          sx={{
            "&, [class^=MuiDataGrid]": {
              border: "none",
            },
            "& .MuiDataGrid-columnHeader": {
              backgroundColor: colors.blueAccent[700],
              borderBottom: "none",
            },
            "& .MuiDataGrid-cell": {
              borderBottom: "none",
            },
            "& .name-column--cell": {
              color: colors.greenAccent[300],
            },
            "& .MuiDataGrid-virtualScroller": {
              backgroundColor: colors.primary[400],
            },
            "& .MuiDataGrid-footerContainer": {
              borderTop: "none",
              backgroundColor: colors.blueAccent[700],
            },
            "& .MuiCheckbox-root": {
              color: `${colors.greenAccent[200]} !important`,
            },
          }}
        />
      </Box>
    </Box>
  );
};

export default Team;
