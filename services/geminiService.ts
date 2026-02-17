
import { GoogleGenAI } from "@google/genai";
import { ChatMessage } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getCareerAdvice = async (history: ChatMessage[], userMessage: string) => {
  try {
    const model = 'gemini-3-flash-preview';
    const contents = history.map(msg => ({
      role: msg.role === 'user' ? 'user' : 'model',
      parts: [{ text: msg.content }]
    }));

    contents.push({
      role: 'user',
      parts: [{ text: userMessage }]
    });

    const response = await ai.models.generateContent({
      model,
      contents,
      config: {
        systemInstruction: `Você é o Assistente Virtual da Ellos RH. Sua missão é ajudar candidatos a encontrar emprego, dar dicas de currículo, preparação para entrevistas e informações sobre a Ellos RH. 
        A Ellos RH é uma empresa de Recrutamento e Seleção sediada em Fortaleza/CE. 
        Mantenha um tom profissional, acolhedor e motivador. Seja breve e direto nas respostas.`,
        temperature: 0.7,
      },
    });

    return response.text || "Desculpe, tive um problema ao processar sua solicitação. Como posso ajudar de outra forma?";
  } catch (error) {
    console.error("Gemini API Error:", error);
    return "No momento estou passando por uma manutenção técnica. Por favor, tente novamente em alguns instantes.";
  }
};
