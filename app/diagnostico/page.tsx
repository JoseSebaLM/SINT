"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";

// --- Types ---
type StepType = "profile" | "email" | "diagnostic";

interface Step {
  id: string;
  type: StepType;
  label?: string;
  question: string;
  options?: { value: string; label: string }[];
  placeholder?: string;
}

interface FormData {
  email: string;
  P1: string;
  P2: string;
  P3: string;
  D1: "A" | "B" | "C";
  D2: "A" | "B" | "C";
  D3: "A" | "B" | "C";
  D4: "A" | "B" | "C";
  D5: "A" | "B" | "C";
  D6: "A" | "B" | "C";
  D7: "A" | "B" | "C";
  D8: "A" | "B" | "C";
}

// --- Steps Configuration ---
const STEPS: Step[] = [
  {
    id: "P1",
    type: "profile",
    question: "¿Cuál es tu cargo?",
    options: [
      { value: "CEO / Gerente General", label: "CEO / Gerente General" },
      { value: "COO / Gerente de Operaciones", label: "COO / Gerente de Operaciones" },
      { value: "CTO / Gerente de Tecnología", label: "CTO / Gerente de Tecnología" },
      { value: "Gerente de área", label: "Gerente de área" },
      { value: "Otro", label: "Otro" },
    ],
  },
  {
    id: "P2",
    type: "profile",
    question: "¿Cuántas personas trabajan en tu empresa?",
    options: [
      { value: "Menos de 25", label: "Menos de 25" },
      { value: "25 – 50", label: "25 – 50" },
      { value: "51 – 100", label: "51 – 100" },
      { value: "101 – 200", label: "101 – 200" },
      { value: "Más de 200", label: "Más de 200" },
    ],
  },
  {
    id: "P3",
    type: "profile",
    question: "¿En qué industria opera tu empresa?",
    options: [
      { value: "Servicios Profesionales o Consultoría", label: "Servicios Profesionales o Consultoría" },
      { value: "Manufactura, Construcción o Logística", label: "Manufactura, Construcción o Logística" },
      { value: "Finanzas o Seguros", label: "Finanzas o Seguros" },
      { value: "Salud", label: "Salud" },
      { value: "Comercio, Retail o Gastronomía", label: "Comercio, Retail o Gastronomía" },
      { value: "Tecnología", label: "Tecnología" },
      { value: "Otro", label: "Otro" },
    ],
  },
  {
    id: "email",
    type: "email",
    question: "¿A qué email enviamos tu diagnóstico?",
    placeholder: "tu@empresa.cl",
  },
  {
    id: "D1",
    type: "diagnostic",
    label: "Resiliencia de infraestructura",
    question: "Si hoy el sistema principal falla por completo, ¿qué pasa con tu operación?",
    options: [
      { value: "A", label: "Se recupera de inmediato, sin pérdida de datos." },
      { value: "B", label: "Impacto severo: días de inactividad y pérdida parcial de información." },
      { value: "C", label: "La operación se detiene: sin respaldo ni plan de recuperación activo." },
    ],
  },
  {
    id: "D2",
    type: "diagnostic",
    label: "Experiencia operativa del equipo con el sistema",
    question: "¿Cómo describes la interacción diaria de tu equipo con el software central?",
    options: [
      { value: "A", label: "Fluida: sin pasos innecesarios ni redundancias." },
      { value: "B", label: "Funcional, pero con fricciones repetitivas." },
      { value: "C", label: "Rígida: genera fatiga y errores operativos." },
    ],
  },
  {
    id: "D3",
    type: "diagnostic",
    label: "Autonomía operativa del equipo",
    question: "¿Qué nivel de autonomía tiene tu equipo frente a las tareas diarias en el sistema?",
    options: [
      { value: "A", label: "Independiente: resuelven sin asistencia." },
      { value: "B", label: "Requieren validación o ayuda ocasional." },
      { value: "C", label: "Dependen de soporte técnico o supervisión constante." },
    ],
  },
  {
    id: "D4",
    type: "diagnostic",
    label: "Gobernanza tecnológica",
    question: "¿Quién es el responsable final de aprobar un cambio crítico en las reglas de negocio del sistema?",
    options: [
      { value: "A", label: "Un rol directivo único y claramente definido." },
      { value: "B", label: "Un comité: proceso con múltiples aprobaciones." },
      { value: "C", label: "Nadie está claramente a cargo, o dependemos del proveedor." },
    ],
  },
  {
    id: "D5",
    type: "diagnostic",
    label: "Cultura de mejora continua",
    question: "Cuando ocurre un error operativo en el sistema, ¿cuál es la reacción habitual del equipo?",
    options: [
      { value: "A", label: "Se reporta y documenta de inmediato." },
      { value: "B", label: "Se resuelve en silencio, sin registro." },
      { value: "C", label: "Se oculta por miedo a represalias o burocracia." },
    ],
  },
  {
    id: "D6",
    type: "diagnostic",
    label: "Alineación sistema–proceso",
    question: "¿El software central refleja con exactitud los procesos reales de tu operación hoy?",
    options: [
      { value: "A", label: "Sí: hay sintonía total entre el sistema y el negocio." },
      { value: "B", label: "Parcialmente: hay desviaciones relevantes." },
      { value: "C", label: "No: el sistema dicta cómo trabajar y entorpece el flujo." },
    ],
  },
  {
    id: "D7",
    type: "diagnostic",
    label: "Dependencia de soluciones alternativas",
    question: "¿Con qué frecuencia tu equipo recurre a herramientas externas —Excel, WhatsApp, papel— para resolver lo que el sistema no puede?",
    options: [
      { value: "A", label: "Nunca: el sistema cubre todo." },
      { value: "B", label: "Ocasionalmente." },
      { value: "C", label: "Siempre: es parte de la rutina diaria." },
    ],
  },
  {
    id: "D8",
    type: "diagnostic",
    label: "Visibilidad operativa de la gerencia",
    question: "¿Qué visibilidad tienes sobre los tiempos de ejecución y los cuellos de botella entre departamentos?",
    options: [
      { value: "A", label: "Total y en tiempo real." },
      { value: "B", label: "Parcial: basada en reportes manuales o parciales." },
      { value: "C", label: "Nula: no tenemos visibilidad sobre lo que ocurre entre áreas." },
    ],
  },
];

// --- Components ---

function ProgressBar({ current, total }: { current: number; total: number }) {
  const progress = ((current + 1) / total) * 100;
  
  return (
    <div className="fixed top-0 left-0 right-0 z-50">
      <div className="h-1 bg-white/10">
        <motion.div
          className="h-full bg-brand-flux-orange"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        />
      </div>
    </div>
  );
}

function Logo() {
  return (
    <div className="fixed top-6 left-6 z-40">
      <span className="font-[family-name:var(--font-jetbrains-mono)] text-text-off-white text-lg">
        sint
        <span className="text-brand-flux-orange animate-pulse">_</span>
      </span>
    </div>
  );
}

// --- Main Component ---

export default function DiagnosticoPage(): JSX.Element {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const [emailInput, setEmailInput] = useState("");
  const [emailError, setEmailError] = useState("");

  const step = STEPS[currentStep];
  const totalSteps = STEPS.length;
  const isLastStep = currentStep === totalSteps - 1;
  const isEmailStep = step.type === "email";

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleOptionSelect = (value: string) => {
    const key = step.id as keyof FormData;
    
    const newFormData = {
      ...formData,
      [key]: value,
    };
    
    setFormData(newFormData);

    if (isLastStep) {
      // Last step - submit
      handleSubmit(newFormData as FormData);
    } else {
      // Advance to next step with animation
      setTimeout(() => {
        setCurrentStep((prev) => prev + 1);
      }, 200);
    }
  };

  const handleEmailContinue = () => {
    if (!validateEmail(emailInput)) {
      setEmailError("Por favor, ingresa un email válido.");
      return;
    }
    
    setEmailError("");
    setFormData((prev) => ({ ...prev, email: emailInput }));
    setCurrentStep((prev) => prev + 1);
  };

  const handleSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate processing
    console.log("Diagnóstico payload:", data);
    
    // Small delay for UX
    await new Promise((resolve) => setTimeout(resolve, 1500));
    
    router.push("/diagnostico/resultado");
  };

  const slideVariants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 30 : -30,
      opacity: 0,
    }),
    center: {
      y: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -30 : 30,
      opacity: 0,
    }),
  };

  if (isSubmitting) {
    return (
      <main className="min-h-screen bg-deep-zinc flex items-center justify-center px-6">
        <div className="text-center">
          <motion.div
            className="w-12 h-12 border-2 border-brand-flux-orange/30 border-t-brand-flux-orange rounded-full mx-auto mb-6"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <p className="text-text-off-white text-lg">Generando tu diagnóstico…</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-deep-zinc flex flex-col">
      <ProgressBar current={currentStep} total={totalSteps} />
      <Logo />

      <div className="flex-1 flex items-center justify-center px-6 py-20">
        <div className="w-full max-w-2xl">
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={currentStep}
              custom={1}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              {/* Step Counter */}
              <div className="mb-8">
                <span className="text-text-cool-grey text-sm">
                  Paso {currentStep + 1} de {totalSteps}
                </span>
              </div>

              {/* Label (for diagnostic steps) */}
              {step.label && (
                <p className="text-text-cool-grey text-sm mb-3 uppercase tracking-wider">
                  {step.label}
                </p>
              )}

              {/* Question */}
              <h1 className="text-text-off-white text-2xl md:text-3xl font-medium mb-8 leading-relaxed">
                {step.question}
              </h1>

              {/* Email Input Step */}
              {isEmailStep ? (
                <div className="space-y-6">
                  <div>
                    <input
                      type="email"
                      value={emailInput}
                      onChange={(e) => {
                        setEmailInput(e.target.value);
                        setEmailError("");
                      }}
                      placeholder={step.placeholder}
                      className="w-full bg-white/5 border border-white/10 rounded-lg px-5 py-4 text-text-off-white placeholder:text-text-cool-grey/50 focus:outline-none focus:border-brand-flux-orange transition-colors text-lg"
                      onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          handleEmailContinue();
                        }
                      }}
                      autoFocus
                    />
                    {emailError && (
                      <p className="text-brand-flux-orange text-sm mt-2">{emailError}</p>
                    )}
                  </div>
                  
                  <button
                    onClick={handleEmailContinue}
                    className="bg-brand-flux-orange text-white px-8 py-4 rounded-lg font-medium hover:scale-105 transition-transform duration-300 flex items-center gap-2"
                  >
                    Continuar →
                  </button>

                  <p className="text-text-cool-grey text-sm pt-4">
                    Sint utiliza tus respuestas exclusivamente para generar tu diagnóstico. No compartimos tu información con terceros.
                  </p>
                </div>
              ) : (
                /* Options */
                <div className="space-y-3">
                  {step.options?.map((option, index) => (
                    <motion.button
                      key={option.value}
                      onClick={() => handleOptionSelect(option.value)}
                      className="w-full text-left p-5 rounded-lg border border-white/10 bg-white/5 hover:border-brand-flux-orange hover:bg-white/10 transition-all duration-300 group"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.08 }}
                    >
                      <span className="text-text-off-white group-hover:text-white transition-colors leading-relaxed">
                        {option.label}
                      </span>
                    </motion.button>
                  ))}
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
