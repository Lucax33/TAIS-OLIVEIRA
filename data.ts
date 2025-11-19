import { Service, FaqItem, Review, CourseFeature } from './types';

export const PHONE_NUMBER = "5538998332557";
export const ADDRESS = "Avenida Aristótales Fernandes Valadares, 675 - Arinos/MG";
export const GOOGLE_MAPS_URL = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3856.606940096735!2d-46.106944!3d-15.906944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTXCsDU0JzI1LjAiUyA0NsKwMDYnMjUuMCJX!5e0!3m2!1spt-BR!2sbr!4v1620000000000!5m2!1spt-BR!2sbr"; // Placeholder coords based on city

export const SERVICES: Service[] = [
  // Cílios
  { id: '1', name: 'Fio a Fio', price: '150,00', category: 'cilios', description: 'Efeito natural clássico' },
  { id: '2', name: 'Volume Russo', price: '200,00', category: 'cilios', description: 'Volume e destaque marcante' },
  { id: '3', name: 'Mega Volume', price: '250,00', category: 'cilios', description: 'Máxima densidade e glamour' },
  { id: '4', name: 'Lash Pro (Fios 6 pontas)', price: '180,00', category: 'cilios', description: 'Tecnologia avançada' },
  { id: '5', name: 'Volumes Express', price: '99,99', category: 'cilios', description: 'Rapidez e beleza' },
  { id: '6', name: 'Efeito Wispy', price: '180,00', category: 'cilios', description: 'Efeito Kim Kardashian' },
  { id: '7', name: 'Volumão', price: '195,00', category: 'cilios', description: 'Para quem ama destaque' },
  { id: '8', name: 'Luxo Plus 6D', price: '210,00', category: 'cilios', description: 'Sofisticação 6D' },
  { id: '9', name: 'Efeito Fox', price: '180,00', category: 'cilios', description: 'Olhar alongado e sensual' },
  { id: '10', name: 'Volume Brasileiro', price: '140,00', category: 'cilios', description: 'O queridinho do momento' },
  { id: '11', name: 'Mega Brasileiro', price: '190,00', category: 'cilios', description: 'Versão mais cheia do Brasileiro' },
  { id: '12', name: 'Glamour', price: '150,00', category: 'cilios', description: 'Toque de brilho no olhar' },
  { id: '13', name: 'Egípcio', price: '140,00', category: 'cilios', description: 'Efeito delineado' },
  { id: '14', name: 'Luxo', price: '190,00', category: 'cilios', description: 'Acabamento premium' },
  { id: '15', name: 'Power', price: '170,00', category: 'cilios', description: 'Intensidade na medida' },
  { id: '16', name: 'Remoção Química', price: '49,90', category: 'cilios', description: 'Retirada segura dos fios' },
  
  // Sobrancelhas
  { id: '17', name: 'Design de Sobrancelhas', price: '80,00', category: 'sobrancelhas', description: 'Mapeamento personalizado' },
  { id: '18', name: 'Sobrancelha com Henna', price: '40,00', category: 'sobrancelhas', description: 'Design + coloração temporária' },
  { id: '19', name: 'Designer Simples', price: '28,00', category: 'sobrancelhas', description: 'Limpeza e alinhamento' },
  { id: '20', name: 'Micropigmentação', price: '600,00', category: 'sobrancelhas', description: 'Sobrancelhas definitivas naturais' },
];

export const FAQ_ITEMS: FaqItem[] = [
  { question: "Quanto tempo dura a extensão de cílios?", answer: "A extensão dura em média de 20 a 30 dias, dependendo dos cuidados da cliente e do ciclo natural de crescimento dos seus fios." },
  { question: "Dói fazer o procedimento?", answer: "Não! O procedimento é totalmente indolor e relaxante. Muitas clientes até dormem durante a aplicação." },
  { question: "Posso molhar os cílios?", answer: "Nas primeiras 24 horas evite molhar para cura total da cola. Após isso, higienizar diariamente com shampoo neutro é essencial para a durabilidade." },
  { question: "Qual a diferença entre Volume Russo e Brasileiro?", answer: "O Volume Russo utiliza fans artesanais de vários fios finos, criando muita densidade. O Brasileiro usa fios em formato de Y, dando um efeito preenchido, porém com aspecto mais organizado e retenção incrível." },
  { question: "O que é o curso VIP?", answer: "É um treinamento exclusivo e individual onde ensino do zero ao avançado todas as técnicas para você se tornar uma Lash Designer de sucesso." },
  { question: "Quais formas de pagamento aceita?", answer: "Aceitamos dinheiro, PIX e cartões de crédito/débito. Parcelamento disponível para cursos e procedimentos de maior valor." },
  { question: "Preciso ter experiência para fazer o curso?", answer: "Não! O curso é completo e abrange desde o nível iniciante até técnicas de aperfeiçoamento." },
  { question: "Faz manutenção de outro profissional?", answer: "Geralmente realizo uma remoção e nova aplicação para garantir a qualidade e saúde dos seus fios, pois não sei qual material foi usado anteriormente." },
  { question: "Quanto tempo demora a aplicação?", answer: "Varia de 1h30 a 2h30, dependendo da técnica escolhida e da quantidade de fios naturais que você possui." },
  { question: "Grávidas podem fazer?", answer: "Sim, desde que não tenham alergia à cola e consigam ficar deitadas de barriga para cima durante o procedimento. Recomendamos autorização médica." },
];

export const REVIEWS: Review[] = [
  { id: 1, name: "Ana Clara", image: "https://randomuser.me/api/portraits/women/44.jpg", text: "A Thaís é maravilhosa! Mãos de fada. Meus cílios duram muito e o atendimento é impecável. O studio é lindo!", stars: 5 },
  { id: 2, name: "Beatriz Souza", image: "https://randomuser.me/api/portraits/women/68.jpg", text: "Fiz o curso VIP e mudou minha vida. Hoje tenho minha independência financeira graças ao método que ela ensina. Super recomendo!", stars: 5 },
  { id: 3, name: "Fernanda Lima", image: "https://randomuser.me/api/portraits/women/12.jpg", text: "Amo o Volume Brasileiro dela. Fica super preenchido e natural ao mesmo tempo. Não vivo mais sem!", stars: 5 },
];

export const COURSE_FEATURES: CourseFeature[] = [
  { text: "Apostila completa e atualizada" },
  { text: "Certificado de Conclusão" },
  { text: "Kit de materiais profissional incluso" },
  { text: "Workshop de edição de fotos" },
  { text: "Técnicas de marketing e divulgação" },
  { text: "Suporte vitalício pós-curso" },
  { text: "Prática supervisionada em modelo" },
  { text: "Anatomia ocular e Mapeamento (Lash Mapping)" },
  { text: "Capping e Preenchimento 100%" },
  { text: "Saúde ocular: Alergia x Irritação" },
];