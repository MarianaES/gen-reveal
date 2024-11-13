import {
  Star,
  Crown,
  Heart,
  Sparkles,
  Baby,
  PartyPopper,
  Gift,
} from "lucide-react";
import CelebrationIcon from "@mui/icons-material/Celebration";
import { Box, Grow, useTheme } from "@mui/material";

function EnhancedConfetti() {
  const theme = useTheme();
  const celebrationIcons = [
    CelebrationIcon,
    Star,
    Heart,
    Sparkles,
    Baby,
    PartyPopper,
    Gift,
    Crown,
  ];

  const animations = [
    "confettiDrop",
    "confettiSpin",
    "confettiFloat",
    "confettiFade",
  ];

  return (
    <Box
      sx={{
        position: "absolute",
        inset: 0,
        overflow: "hidden",
        pointerEvents: "none",
        "@keyframes confettiDrop": {
          "0%": {
            transform: "translateY(-100%) rotate(0deg)",
            opacity: 0,
          },
          "50%": {
            opacity: 1,
          },
          "100%": {
            transform: "translateY(100vh) rotate(720deg)",
            opacity: 0,
          },
        },
        "@keyframes confettiSpin": {
          "0%": {
            transform: "rotate(0deg) scale(0)",
            opacity: 0,
          },
          "50%": {
            transform: "rotate(180deg) scale(1.5)",
            opacity: 1,
          },
          "100%": {
            transform: "rotate(360deg) scale(0)",
            opacity: 0,
          },
        },
        "@keyframes confettiFloat": {
          "0%": {
            transform: "translate(0, 0) rotate(0deg)",
            opacity: 0,
          },
          "50%": {
            transform: "translate(100px, -100px) rotate(180deg)",
            opacity: 1,
          },
          "100%": {
            transform: "translate(200px, 0) rotate(360deg)",
            opacity: 0,
          },
        },
        "@keyframes confettiFade": {
          "0%": {
            transform: "scale(0) rotate(0deg)",
            opacity: 0,
          },
          "50%": {
            transform: "scale(1.5) rotate(180deg)",
            opacity: 1,
          },
          "100%": {
            transform: "scale(0) rotate(360deg)",
            opacity: 0,
          },
        },
      }}
    >
      {[...Array(40)].map((_, i) => {
        const IconComponent = celebrationIcons[i % celebrationIcons.length];
        const animation = animations[i % animations.length];
        const delay = Math.random() * 2;
        const duration = 2 + Math.random() * 2;
        const size = 16 + Math.random() * 24;

        return (
          <Grow in key={i} timeout={1000 + Math.random() * 1000}>
            <Box
              component={IconComponent}
              sx={{
                position: "absolute",
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
                fontSize: size,
                width: size,
                height: size,
                color:
                  i % 3 === 0
                    ? theme.palette.primary.main
                    : i % 3 === 1
                    ? theme.palette.secondary.main
                    : theme.palette.primary.light,
                opacity: 0,
                animation: `${animation} ${duration}s ease-out ${delay}s infinite`,
                filter: "drop-shadow(0 0 2px rgba(255,255,255,0.5))",
              }}
            />
          </Grow>
        );
      })}

      {[...Array(20)].map((_, i) => (
        <Box
          key={`sparkle-${i}`}
          sx={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "4px",
            height: "4px",
            background: theme.palette.primary.main,
            borderRadius: "50%",
            boxShadow: `0 0 ${4 + Math.random() * 4}px ${
              theme.palette.primary.main
            }`,
            animation: `confettiSpin ${1 + Math.random() * 2}s ease-out ${
              Math.random() * 2
            }s infinite`,
          }}
        />
      ))}

      {[...Array(10)].map((_, i) => (
        <Box
          key={`orb-${i}`}
          sx={{
            position: "absolute",
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: "20px",
            height: "20px",
            background: `radial-gradient(circle, ${theme.palette.primary.light}, ${theme.palette.primary.main})`,
            borderRadius: "50%",
            opacity: 0.3,
            filter: "blur(4px)",
            animation: `confettiFloat ${3 + Math.random() * 2}s ease-in-out ${
              Math.random() * 2
            }s infinite`,
          }}
        />
      ))}
    </Box>
  );
}

export default EnhancedConfetti;
