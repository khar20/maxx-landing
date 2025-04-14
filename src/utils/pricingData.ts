import type { ColorOption } from '../components/PricingCard.astro';

export interface Plan {
  name: string;
  price: number;
  color: ColorOption;
  features: string[];
}

export const personalPlans: Plan[] = [
  {
    name: "Plan Básico",
    price: 29,
    color: "blue",
    features: [
      "5 proyectos",
      "20GB de almacenamiento",
      "Soporte por correo electrónico",
      "Actualizaciones mensuales"
    ]
  },
  {
    name: "Plan Premium",
    price: 79,
    color: "purple",
    features: [
      "15 proyectos",
      "50GB de almacenamiento",
      "Soporte prioritario",
      "Actualizaciones semanales",
      "Funciones avanzadas"
    ]
  }
];

export const empresarialPlans: Plan[] = [
  {
    name: "Plan Básico Empresarial",
    price: 99,
    color: "blue",
    features: [
      "15 proyectos",
      "50GB de almacenamiento",
      "Soporte prioritario",
      "Actualizaciones semanales",
      "Acceso para hasta 5 usuarios",
      "Panel de administración"
    ]
  },
  {
    name: "Plan Premium Empresarial",
    price: 199,
    color: "purple",
    features: [
      "Proyectos ilimitados",
      "200GB de almacenamiento",
      "Soporte 24/7",
      "Actualizaciones diarias",
      "Acceso para hasta 15 usuarios",
      "API completa",
      "Integración con sistemas empresariales",
      "Asesoría personalizada"
    ]
  }
];

export const faqs = [
  {
    question: "¿Puedo cambiar de plan en cualquier momento?",
    answer: "Sí, puedes cambiar de plan en cualquier momento. Los cambios se aplicarán al inicio del siguiente ciclo de facturación."
  },
  {
    question: "¿Qué métodos de pago aceptan?",
    answer: "Aceptamos todas las tarjetas de crédito principales, PayPal y transferencias bancarias para planes empresariales."
  },
  {
    question: "¿Ofrecen período de prueba?",
    answer: "Sí, todos nuestros planes incluyen un período de prueba gratuito de 14 días sin compromiso."
  },
  {
    question: "¿Puedo cancelar en cualquier momento?",
    answer: "Absolutamente. No hay contratos a largo plazo ni penalizaciones por cancelación. Puedes cancelar tu suscripción cuando lo necesites."
  },
  {
    question: "¿La versión empresarial incluye soporte para todos los usuarios?",
    answer: "Sí, todos los usuarios registrados en la cuenta empresarial tienen acceso al soporte técnico según el nivel contratado."
  }
];