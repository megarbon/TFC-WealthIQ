"use client";
import React, { useState } from "react";

const AnalizeButton = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [randomAdvice, setRandomAdvice] = useState("");

  const adviceList = [
    "Tu cartera actual está muy concentrada en acciones de tecnología, lo cual puede proporcionar altos retornos, pero también aumenta significativamente la volatilidad y el riesgo. Sería prudente diversificar tu cartera con activos menos correlacionados, como bonos del gobierno o bienes raíces, para reducir el riesgo general. Como mencionó Ray Dalio en su libro 'Principles for Navigating Big Debt Crises', la diversificación es clave para la gestión de riesgos durante períodos de volatilidad del mercado.",

    "Observo que tienes una cantidad significativa de efectivo en tu cartera, lo cual puede estar perjudicando tu capacidad para obtener retornos óptimos. Considera invertir parte de este efectivo en activos productivos, como acciones o fondos de inversión, que pueden generar rendimientos más sólidos a largo plazo. Como sugiere Benjamin Graham en 'The Intelligent Investor', la inversión en valor puede ofrecer oportunidades de compra sólidas para inversionistas pacientes y disciplinados.",

    "Tus inversiones en acciones individuales representan una parte importante de tu cartera. Si bien seleccionar acciones puede ofrecer oportunidades de crecimiento, también aumenta el riesgo de pérdidas significativas. Sería beneficioso diversificar tu cartera con fondos mutuos o ETFs que proporcionen una exposición más amplia al mercado. Como menciona John Bogle en 'The Little Book of Common Sense Investing', los fondos indexados ofrecen una forma rentable y diversificada de invertir en el mercado de valores.",

    "Las acciones de empresas de crecimiento en sectores como la salud y la tecnología han mostrado un buen desempeño en los últimos años, pero es importante no descuidar sectores más defensivos, como bienes de consumo básico o servicios públicos. Estos sectores suelen ofrecer estabilidad en tiempos de volatilidad económica. Como Warren Buffett dijo una vez: 'Nuestro enfoque es encontrar un par de oportunidades de inversión inteligentes y explotarlas al máximo'.",

    "Tus inversiones en bonos corporativos de grado de inversión son una parte esencial de tu cartera, proporcionando estabilidad y generando ingresos consistentes. Sin embargo, te sugiero revisar la calidad crediticia de tus bonos y considerar diversificar con bonos gubernamentales para reducir el riesgo de incumplimiento. Como sugiere Michael Lewis en 'The Big Short', entender el riesgo crediticio es fundamental para evitar pérdidas catastróficas en el mercado de bonos.",

    "Observo que tienes una exposición limitada a inversiones internacionales. La diversificación geográfica puede ser una estrategia efectiva para reducir el riesgo y aprovechar oportunidades de crecimiento en mercados extranjeros. Considera aumentar tu exposición a acciones internacionales o fondos globales para diversificar tu cartera. Como dice Peter Lynch en 'One Up On Wall Street', las oportunidades de inversión a menudo se pueden encontrar fuera de los Estados Unidos.",

    "Es importante monitorear de cerca el rendimiento de tus inversiones y ajustar tu cartera según sea necesario. Mantén registros detallados de tus transacciones y realiza análisis periódicos para evaluar si tus inversiones aún se alinean con tus objetivos financieros y tolerancia al riesgo. Como Warren Buffett señala, 'Nunca inviertas en un negocio que no puedas entender'.",

    "Recuerda que el mercado es impredecible y puede experimentar fluctuaciones significativas en el corto plazo. Mantén un horizonte temporal a largo plazo y evita tomar decisiones emocionales basadas en la volatilidad del mercado. La paciencia y la disciplina son clave para el éxito a largo plazo en la inversión. Como dice Charlie Munger, 'La inversión exitosa requiere tiempo, disciplina y paciencia'.",

    "No subestimes el poder de la educación financiera. Continúa aprendiendo sobre los principios fundamentales de la inversión, incluyendo análisis técnico y fundamental, gestión de riesgos y estrategias de inversión. La inversión informada te ayudará a tomar decisiones más sólidas y a alcanzar tus objetivos financieros. Como dijo Peter Lynch, 'Más de la mitad del juego de inversión consiste en no perder de vista lo que uno ya sabe'.",

    // Puedes agregar más frases según desees
  ];

  const handleClick = () => {
    setIsLoading(true);
    // Simulación de carga de datos
    setTimeout(() => {
      const randomIndex = Math.floor(Math.random() * adviceList.length);
      setRandomAdvice(adviceList[randomIndex]);
      setIsLoading(false);
    }, 2000); // Cambia este valor según lo rápido que quieras que se simule la carga
  };

  return (
    <div className="rounded-md bg-white p-6  dark:border-strokedark dark:bg-boxdark">
      <div className="max-w-full overflow-x-auto">
        <div className="flex flex-col items-center space-y-4">
          <button
            onClick={handleClick}
            disabled={isLoading}
            className={`rounded-lg px-6 py-3 shadow-md text-lg font-medium ${
              isLoading
                ? "bg-gray-500 text-gray-200 cursor-not-allowed"
                : "hover:bg-primary-dark bg-primary text-white"
            }`}
          >
            {isLoading ? "Analizando Portfolio..." : "Analizar Portfolio"}
          </button>
          {randomAdvice && (
            <p className="text-lg text-center text-black dark:text-white">{randomAdvice}</p>
          )}
        </div>
      </div>
    </div>
  );
  
};

export default AnalizeButton;
