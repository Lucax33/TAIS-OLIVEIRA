export interface Service {
  id: string;
  name: string;
  price: string;
  category: 'cilios' | 'sobrancelhas' | 'outros';
  description?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface Review {
  id: number;
  name: string;
  image: string;
  text: string;
  stars: number;
}

export interface CourseFeature {
  text: string;
}