
export interface Midia {
  type: 'photo' | 'video'; // Só aceita esses dois textos exatos
  url: string;
}

// 2. Define o formato completo de um Projeto do seu JSON
export interface Project {
  id?: number;
  category: 'web' | 'mob' | string; // Aceita suas categorias
  title: string;
  description: string;
  cardDescription: string;
  gitHubUrl: string;
  media: Midia[]; // Diz que "media" é uma lista contendo o formato acima
}