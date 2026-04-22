import {
  tokens,
  ColorModeContext,
} from "../../theme.js";
import { useTheme } from "@mui/material";
import { useContext } from "react";
import InputBase from "@mui/material/InputBase";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import ModeNightOutlinedIcon from "@mui/icons-material/ModeNightOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonalInjuryOutlinedIcon from "@mui/icons-material/PersonalInjuryOutlined";

const TopBar = () => {
  const colorMode = useContext(ColorModeContext);
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box sx={{ display: "flex", justifyContent: "space-between", p: 2 }}>
      <Box
        sx={{
          display: "flex",
          backgroundColor: colors.primary[400],
          borderRadius: "3px",
        }}
      >
        <InputBase sx={{ ml: 2, flex: 1 }} placeholder="Search"></InputBase>
        <IconButton type="button" sx={{ p: 1 }}>
          <SearchOutlinedIcon />
        </IconButton>
      </Box>

      <Box sx={{ display: "flex" }}>
        <IconButton onClick={colorMode.toggleColorMode}>
          {theme.palette.mode === "dark" ? (
            <DarkModeOutlinedIcon />
          ) : (
            <ModeNightOutlinedIcon />
          )}
        </IconButton>

        <IconButton>
          <NotificationsNoneOutlinedIcon />
        </IconButton>

        <IconButton>
          <SettingsOutlinedIcon />
        </IconButton>

        <IconButton>
          <PersonalInjuryOutlinedIcon />
        </IconButton>
      </Box>
    </Box>
  );
};

export default TopBar;
