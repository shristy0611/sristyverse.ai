export interface OCRSettings {
  language: string;
  accuracyThreshold: number;
  outputFormat: 'text' | 'json' | 'xml';
}

export interface SentimentSettings {
  categories: string[];
  sensitivity: number;
  threshold: number;
}

export interface ChatbotSettings {
  personality: string;
  behavior: string[];
  responseTime: number;
}

export interface RecommendationSettings {
  algorithm: 'collaborative' | 'content-based' | 'hybrid';
  filteringRules: string[];
  rankingPreference: string;
}

export type WorkspaceType = 'ocr' | 'sentiment' | 'chatbot' | 'recommendation';