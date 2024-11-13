import { createContext, useContext, useEffect, useState } from "react";

type Language = "en" | "es";

type LanguageContextType = {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
};

const translations = {
  en: {
    title: "Chromosomal Reveal",
    classification: "CLASSIFICATION: HOMO SAPIENS SAPIENS",
    specimen: "Specimen 1.0 - 2025",
    developmentProgress: "DEVELOPMENT IN PROGRESS",
    beatsPerMinute: "beats per minute",
    startGeneticAnalysis: "Start Genetic Analysis",
    hello: "Hello, I'm",
    chromosomes: "Chromosomes",
    confirmed: "Confirmed!",
    earthLife: "4,000,000,000 years of life on Earth",
    humanHistory: "7,000,000 years of human history",
    homoSapiens: "300,000 years of Homo sapiens",
    oneMoreHuman: "One more small human",
    scheduledArrival: "Scheduled Arrival:",
    weeks: "w",
    days: "d",
  },
  es: {
    title: "Mi Presentación Cromosómica",
    classification: "CLASIFICACIÓN: HOMO SAPIENS SAPIENS",
    specimen: "Espécimen 1.0 - 2025",
    developmentProgress: "DESARROLLO EN PROGRESO",
    beatsPerMinute: "latidos por minuto",
    startGeneticAnalysis: "Iniciar Análisis Genético",
    hello: "Hola, soy",
    chromosomes: "¡Cromosomas",
    confirmed: "Confirmados!",
    earthLife: "4,000,000,000 años de vida en la Tierra",
    humanHistory: "7,000,000 años de historia humana",
    homoSapiens: "300,000 años de Homo sapiens",
    oneMoreHuman: "Un pequeño humano más",
    scheduledArrival: "Llegada Programada:",
    weeks: "s",
    days: "d",
  },
};

const getDefaultLanguage = (): Language => {
  const savedLanguage = localStorage.getItem("preferredLanguage") as Language;
  if (savedLanguage && (savedLanguage === "en" || savedLanguage === "es")) {
    return savedLanguage;
  }

  const browserLanguage = navigator.language.toLowerCase();

  if (browserLanguage.startsWith("es")) {
    return "es";
  }

  return "es";
};

export const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [language, setLanguage] = useState<Language>(() =>
    getDefaultLanguage()
  );

  useEffect(() => {
    localStorage.setItem("preferredLanguage", language);
  }, [language]);

  const handleSetLanguage = (newLanguage: Language) => {
    if (newLanguage === "en" || newLanguage === "es") {
      setLanguage(newLanguage);
    } else {
      console.warn(`Unsupported language: ${newLanguage}`);
    }
  };

  const t = (key: string): string => {
    const translation =
      translations[language][key as keyof (typeof translations)["en"]];
    if (!translation) {
      console.warn(
        `Missing translation for key: ${key} in language: ${language}`
      );
      return key;
    }
    return translation;
  };

  return (
    <LanguageContext.Provider
      value={{
        language,
        setLanguage: handleSetLanguage,
        t,
      }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
};
