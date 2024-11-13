import { Button, ButtonGroup, useMediaQuery, useTheme } from "@mui/material";
import { useLanguage } from "../../context/LanguageContext";

function LanguageSwitcher() {
  const { language, setLanguage } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const commonButtonStyles = {
    minWidth: 40,
    color: "text.secondary",
    borderColor: "rgba(255, 255, 255, 0.2)",
    "&.active": {
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      color: "primary.main",
    },
  };

  return (
    <ButtonGroup
      size="small"
      sx={{
        position: "fixed",
        ...(isMobile
          ? {
              bottom: 16,
              right: 16,
            }
          : {
              top: 16,
              right: 16,
            }),
        zIndex: 2,
        background: "rgba(255, 255, 255, 0.1)",
        backdropFilter: "blur(10px)",
        borderRadius: 1,
        "& .MuiButton-root": {
          ...commonButtonStyles,
          ...(isMobile && {
            py: 1,
            px: 2,
            fontSize: "0.875rem",
          }),
        },
      }}
    >
      <Button
        className={language === "en" ? "active" : ""}
        onClick={() => setLanguage("en")}
        s
      >
        EN
      </Button>
      <Button
        className={language === "es" ? "active" : ""}
        onClick={() => setLanguage("es")}
      >
        ES
      </Button>
    </ButtonGroup>
  );
}

export default LanguageSwitcher;
