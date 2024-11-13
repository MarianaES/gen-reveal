import { useState, useEffect } from "react";
import {
  Box,
  BoxProps,
  Button,
  Card,
  CardContent,
  Container,
  Fade,
  GlobalStyles,
  Typography,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ChevronRightIcon, HeartPulse } from "lucide-react";
import EnhancedConfetti from "../components/EnhancedConfetti";
import { usePregnancyProgress } from "../hooks/usePregnancyProgress";
import LanguageSwitcher from "../components/LanguageSwitcher";
import { useLanguage } from "../context/LanguageContext";

const GenReveal = () => {
  const { t } = useLanguage();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);
  const [viewHeight, setViewHeight] = useState("100vh");
  const babyGender = "XX";
  const dueDate = "2025-05-20";
  const babyImage = "src/assets/ultrasound.png";
  const babyName = "Nora";

  const progress = usePregnancyProgress(dueDate);

  const selectedGradient = `linear-gradient(45deg, #147D73, #2EC4B6)`;

  useEffect(() => {
    const updateHeight = () => {
      const vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
      setViewHeight(`${window.innerHeight}px`);
    };

    updateHeight();
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  const handleReveal = () => {
    setRevealed(true);
    setShowConfetti(true);
    setTimeout(() => setShowConfetti(false), 3000);
  };

  const FloatingCircle = ({ sx, ...props }: BoxProps) => (
    <Box
      sx={{
        position: "absolute",
        borderRadius: "50%",
        opacity: 0.1,
        animation: "float 10s ease-in-out infinite",
        ...sx,
      }}
      {...props}
    />
  );

  const BackgroundAnimation = () => (
    <Box
      sx={{
        position: "fixed",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        zIndex: 0,
      }}
    >
      <FloatingCircle
        sx={{
          top: "-10vh",
          right: "-10vw",
          width: "40vw",
          height: "40vw",
          bgcolor: "primary.dark",
          animationDelay: "0s",
        }}
      />
      <FloatingCircle
        sx={{
          bottom: "-10vh",
          left: "-10vw",
          width: "30vw",
          height: "30vw",
          bgcolor: "secondary.dark",
          animationDelay: "2s",
        }}
      />
      <FloatingCircle
        sx={{
          top: "40vh",
          left: "10vw",
          width: "20vw",
          height: "20vw",
          bgcolor: "primary.dark",
          animationDelay: "4s",
        }}
      />
    </Box>
  );
  return (
    <Box
      sx={{
        height: viewHeight,
        overflow: "hidden",
        position: "fixed",
        width: "100%",
        top: 0,
        left: 0,
      }}
    >
      <LanguageSwitcher />
      <BackgroundAnimation />
      <Container
        maxWidth="sm"
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          py: { xs: 2, sm: 4 },
          px: { xs: 2, sm: 3 },
          overflow: "hidden",
        }}
      >
        <GlobalStyles
          styles={{
            "@keyframes float": {
              "0%, 100%": {
                transform: "translateY(0) rotate(0deg)",
              },
              "50%": {
                transform: "translateY(-20px) rotate(5deg)",
              },
            },
            "@keyframes pulse": {
              "0%, 100%": {
                transform: "scale(1)",
              },
              "50%": {
                transform: "scale(1.05)",
              },
            },
          }}
        />

        {/* Header */}
        <Fade in timeout={1000}>
          <Box
            sx={{
              textAlign: "center",
              mb: { xs: 2, sm: 4 },
              position: "relative",
              zIndex: 1,
              width: "100%",
              transform: isMobile ? "scale(0.9)" : "none",
            }}
          >
            <Typography
              variant={isMobile ? "h3" : "h1"}
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
                fontSize: { xs: "1.75rem", sm: "3rem", md: "3.75rem" },
              }}
            >
              {t("title")}
            </Typography>
          </Box>
        </Fade>

        {/* Main Card */}
        <Fade in timeout={1000}>
          <Card
            sx={{
              width: "100%",
              maxWidth: 500,
              minHeight: { xs: "auto", sm: 400 },
              display: "flex",
              flexDirection: "column",
            }}
          >
            <CardContent
              sx={{
                p: { xs: 3, sm: 4 },
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                "&.MuiCardContent-root": {
                  padding: { xs: "24px", sm: "32px" },
                  "&:last-child": {
                    paddingBottom: { xs: "24px", sm: "32px" },
                  },
                },
              }}
            >
              {!revealed ? (
                <Box
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    py: { xs: 2, sm: 3 },
                  }}
                >
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      mb: 4,
                      position: "relative",
                      fontSize: { xs: "1.5rem", sm: "2rem" },
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: { xs: 0.5, sm: 1 },
                      }}
                    >
                      <Box
                        sx={{
                          fontSize: { xs: "0.5em", sm: "0.4em" },
                          letterSpacing: { xs: "0.1em", sm: "0.2em" },
                          color: "text.secondary",
                          animation: "typeWriter 3s steps(30)",
                          overflow: "hidden",

                          whiteSpace: "nowrap",
                          "@keyframes typeWriter": {
                            from: { width: "0" },
                            to: { width: "100%" },
                          },
                          width: "100%",
                          textAlign: "center",
                          mb: { xs: 1, sm: 2 },
                        }}
                      >
                        {t("classification")}
                      </Box>

                      <Box
                        sx={{
                          fontSize: { xs: "1em", sm: "1.2em" },
                          background:
                            "linear-gradient(45deg, #FF9F1C, #FF6B6B)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          p: { xs: 1, sm: 2 },
                        }}
                      >
                        {t("specimen")}
                        <Box
                          sx={{
                            fontSize: { xs: "0.5em", sm: "0.4em" },
                            color: "primary.main",
                            letterSpacing: "0.4em",
                            p: { xs: 1, sm: 2 },
                          }}
                        >
                          ATCG • GCTA • TACG
                        </Box>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          gap: { xs: 0.5, sm: 1 },
                        }}
                      >
                        <Box
                          sx={{
                            fontSize: "0.4em",
                            fontFamily: "monospace",
                            opacity: 0.7,
                            mb: 1,
                            color: "text.secondary",
                          }}
                        >
                          {t("developmentProgress")}
                        </Box>
                        <Box
                          sx={{
                            fontSize: "0.4em",
                            fontFamily: "monospace",
                            opacity: 0.7,
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Box>
                            {progress.isOverdue
                              ? `[${progress.loadingBar}] 40${t("weeks")} + ${
                                  progress.overdueWeeks
                                }${t("weeks")}${progress.overdueDays}${t(
                                  "days"
                                )}`
                              : `[${progress.loadingBar}] ${progress.week}${t(
                                  "weeks"
                                )}${progress.days}${t("days")} / 40${t(
                                  "weeks"
                                )}`}
                          </Box>
                          <Box
                            sx={{
                              fontSize: "0.9em",
                              display: "flex",
                              alignItems: "center",
                              gap: 1,
                              "@keyframes beat": {
                                "0%, 100%": {
                                  transform: "scale(1)",
                                },
                                "50%": {
                                  transform: "scale(1.2)",
                                },
                              },
                              "& .beating-heart": {
                                animation: "beat 1s ease-in-out infinite",
                              },
                            }}
                          >
                            <HeartPulse size={18} className="beating-heart" />
                            <span>140 {t("beatsPerMinute")}</span>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Typography>

                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      position: "relative",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: 1,
                      }}
                    >
                      <Button
                        variant="contained"
                        size="large"
                        onClick={handleReveal}
                        sx={{
                          background: "rgba(46, 196, 182, 0.1)",
                          backdropFilter: "blur(10px)",
                          border: "1px solid rgba(46, 196, 182, 0.2)",
                          color: "#2EC4B6",
                          position: "relative",
                          overflow: "hidden",
                          "@keyframes borderAnimation": {
                            "0%": { transform: "rotate(0deg)" },
                            "100%": { transform: "rotate(360deg)" },
                          },
                          "&:hover": {
                            background: "rgba(46, 196, 182, 0.2)",
                          },
                        }}
                      >
                        <Box
                          sx={{ display: "flex", alignItems: "center", gap: 1 }}
                        >
                          {t("startGeneticAnalysis")}
                          <ChevronRightIcon />
                        </Box>
                      </Button>
                    </Box>
                  </Typography>
                </Box>
              ) : (
                <Box
                  sx={{
                    textAlign: "center",
                    width: "100%",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Box
                    sx={{
                      mt: 2,
                      mb: 2,
                      position: "relative",
                      padding: "0 4px",
                    }}
                  >
                    <Typography
                      variant={isMobile ? "h4" : "h3"}
                      sx={{
                        background: selectedGradient,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        fontWeight: 500,
                      }}
                    >
                      {t("hello")}{" "}
                      <Box
                        sx={{
                          position: "relative",
                          display: "inline-block",
                        }}
                      >
                        <span
                          style={{
                            fontWeight: 700,
                            background: selectedGradient,
                            backgroundClip: "text",
                            WebkitBackgroundClip: "text",
                            color: "transparent",
                          }}
                        >
                          {babyName}
                        </span>
                        <Box
                          sx={{
                            position: "absolute",
                            bottom: -6,
                            left: 0,
                            width: "100%",
                            display: "flex",
                            justifyContent: "space-evenly",
                            "& > *": {
                              animation: "twinkle 1.5s infinite ease-in-out",
                            },
                            "@keyframes twinkle": {
                              "0%, 100%": { opacity: 0.5 },
                              "50%": { opacity: 1 },
                            },
                          }}
                        >
                          {[...Array(10)].map((_, i) => (
                            <Box
                              key={i}
                              sx={{
                                width: 4,
                                height: 4,
                                borderRadius: "50%",
                                background:
                                  i % 2 === 0
                                    ? theme.palette.primary.main
                                    : theme.palette.secondary.main,
                                animationDelay: `${i * 0.2}s`,
                              }}
                            />
                          ))}
                        </Box>
                      </Box>
                      .
                    </Typography>
                  </Box>

                  <Box
                    component="img"
                    src={babyImage}
                    alt="Baby Scan"
                    sx={{
                      maxWidth: { xs: "80%", sm: "60%" },
                      height: "auto",
                      borderRadius: 2,
                      boxShadow: 3,
                      my: 2,
                      objectFit: "contain",
                      filter: "blur(0px)",
                      transition: "filter 0.3s",
                      "&.loading": {
                        filter: "blur(10px)",
                      },
                    }}
                  />
                  <Typography
                    variant="h2"
                    sx={{
                      fontWeight: 500,
                      mb: 3,
                      background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                      backgroundClip: "text",
                      WebkitBackgroundClip: "text",
                      color: "transparent",
                      animation: "reveal 1s cubic-bezier(0.4, 0, 0.2, 1)",
                      "@keyframes reveal": {
                        from: {
                          clipPath: "polygon(0 50%, 100% 50%, 100% 50%, 0 50%)",
                          transform: "scale(0.95)",
                        },
                        to: {
                          clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
                          transform: "scale(1)",
                        },
                      },
                    }}
                  >
                    {t("chromosomes")}{" "}
                    <Box
                      component="span"
                      sx={{
                        fontSize: "1.2em",
                        fontWeight: 700,
                        background: `linear-gradient(45deg, ${theme.palette.secondary.main}, ${theme.palette.primary.main})`,
                        backgroundClip: "text",
                        WebkitBackgroundClip: "text",
                        color: "transparent",
                        textShadow: `0 0 20px ${theme.palette.primary.main}40`,
                        display: "inline-block",
                        transform: "translateY(-2px)",
                        animation: "highlight 2s infinite",
                        "@keyframes highlight": {
                          "0%, 100%": {
                            transform: "scale(1)",
                            filter: "brightness(1)",
                          },
                          "50%": {
                            transform: "scale(1.05)",
                            filter: "brightness(1.2)",
                          },
                        },
                      }}
                    >
                      {babyGender.toUpperCase()}
                    </Box>{" "}
                    {t("confirmed")}
                  </Typography>
                  {showConfetti && <EnhancedConfetti />}
                </Box>
              )}
            </CardContent>
          </Card>
        </Fade>

        {/* Footer */}
        <Fade in timeout={1000}>
          <Box
            sx={{
              mt: { xs: 2, sm: 4 },
              textAlign: "center",
              position: "relative",
              zIndex: 1,
              transform: isMobile ? "scale(0.9)" : "none",
            }}
          >
            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                fontSize: { xs: "0.75rem", sm: "1rem" },
              }}
            >
              {t("earthLife")}
              <br />
              {t("humanHistory")}
              <br />
              {t("homoSapiens")}
            </Typography>
            <Box
              sx={{
                fontSize: { xs: "0.7rem", sm: "0.8rem" },
                opacity: 0.7,
                mt: "8px",
              }}
            >
              {t("oneMoreHuman")}
              <br />✨ {t("scheduledArrival")} {dueDate} ✨
            </Box>
          </Box>
        </Fade>
      </Container>
    </Box>
  );
};

export default GenReveal;
