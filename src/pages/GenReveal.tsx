import { useState } from "react";
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
} from "@mui/material";
import { ChevronRightIcon, HeartPulse } from "lucide-react";
import EnhancedConfetti from "../components/EnhancedConfetti";

const GenReveal = () => {
  const theme = useTheme();
  const [revealed, setRevealed] = useState(false);
  const [showConfetti, setShowConfetti] = useState(false);

  const babyGender = "XY";
  const dueDate = "Mayo 2025";

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
    <>
      <BackgroundAnimation />
      <Container
        sx={{
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          zIndex: 1,
          py: 4,
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
            sx={{ textAlign: "center", mb: 6, position: "relative", zIndex: 1 }}
          >
            <Typography
              variant="h1"
              sx={{
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                backgroundClip: "text",
                WebkitBackgroundClip: "text",
                color: "transparent",
                fontWeight: 600,
              }}
            >
              Mi Presentación Cromosómica
            </Typography>
          </Box>
        </Fade>

        {/* Main Card */}
        <Fade in timeout={1000}>
          <Card
            sx={{
              width: "100%",
              maxWidth: 500,
              height: 400,
            }}
          >
            <CardContent
              sx={{
                p: 6,
                position: "relative",
                height: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {!revealed ? (
                <Box
                  sx={{
                    textAlign: "center",
                    width: "100%",
                  }}
                >
                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      mb: 4,
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
                      <Box
                        sx={{
                          fontSize: "0.4em",
                          letterSpacing: "0.2em",
                          color: "text.secondary",
                          animation: "typeWriter 3s steps(30)",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                          "@keyframes typeWriter": {
                            from: { width: "0" },
                            to: { width: "100%" },
                          },
                        }}
                      >
                        CLASIFICACIÓN: HOMO SAPIENS SAPIENS
                      </Box>
                      {/* <Box
                        sx={{
                          fontSize: "1.2em",
                          background: `linear-gradient(45deg, #1976d2, #9c27b0)`,
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          animation: "pulseText 2s infinite ease-in-out",
                          m: 4,
                        }}
                      >
                        Proyecto ADN 2025
                        <Box
                          sx={{
                            fontSize: "0.4em",
                            color: "primary.main",
                            letterSpacing: "0.4em",
                            animation: "fadeIn 2s ease-out",
                            p: 2,
                          }}
                        >
                          ATCG • GCTA • TACG
                        </Box>
                      </Box> */}

                      <Box
                        sx={{
                          fontSize: "1.2em",
                          background:
                            "linear-gradient(45deg, #FF9F1C, #FF6B6B)",
                          backgroundClip: "text",
                          WebkitBackgroundClip: "text",
                          color: "transparent",
                          animation: "pulseText 2s infinite ease-in-out",
                          p: 2,
                        }}
                      >
                        Espécimen 1.0 - 2025
                        <Box
                          sx={{
                            fontSize: "0.4em",
                            color: "primary.main",
                            letterSpacing: "0.4em",
                            animation: "fadeIn 2s ease-out",
                            p: 2,
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
                          gap: 1,
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
                          DESARROLLO EN PROGRESO
                        </Box>
                        <Box
                          sx={{
                            fontSize: "0.4em",
                            fontFamily: "monospace",
                            opacity: 0.7,
                            // animation: "blink 1.5s infinite",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            gap: 0.5,
                          }}
                        >
                          <Box>[■■■□□□□□□□] 12/40 semanas</Box>
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
                            <span>Primer Latido Detectado</span>
                          </Box>
                        </Box>
                      </Box>
                    </Box>
                  </Typography>

                  <Typography
                    variant="h2"
                    gutterBottom
                    sx={{
                      mb: 4,
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
                          Iniciar Análisis Genético
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
                    ¡Cromosomas{" "}
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
                    Confirmados!
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
            sx={{ mt: 4, textAlign: "center", position: "relative", zIndex: 1 }}
          >
            <Typography variant="body1" sx={{ color: "text.secondary" }}>
              4,000,000,000 años de vida en la Tierra
              <br />
              7,000,000 años de historia humana
              <br />
              300,000 años de Homo sapiens
            </Typography>
            <Box
              sx={{
                fontSize: "0.8em",
                opacity: 0.7,
                mt: "12px",
              }}
            >
              Un pequeño humano más
              <br />✨ Llegada Programada: {dueDate} ✨
            </Box>
          </Box>
        </Fade>
      </Container>
    </>
  );
};

export default GenReveal;
