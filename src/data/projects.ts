export interface Project {
  id: string;
  category: string;
  title: string;
  img: string;
  description: string;
  challenges?: string;
  solution?: string;
  tools?: string[];
}

export const projects: Project[] = [
  { 
    id: 'minimalist-poster', 
    category: 'Print Design', 
    title: 'food poster', 
    img: 'https://i.ibb.co/Cp9gpvYC/food.jpg',
    description: 'A series of art posters focusing on negative space and monochromatic color schemes. Created for a local gallery exhibition.',
    challenges: 'Balancing minimal elements while ensuring the message remains clear and impactful.',
    solution: 'Used geometric abstraction and high-contrast typography to create a sense of depth.',
    tools: ['Adobe Illustrator', 'Photoshop']
  },
  { 
    id: 'viral-thumbnail', 
    category: 'Print Design', 
    title: 'spider man poster', 
    img: 'https://i.ibb.co/7tmPGnGL/spider-man.jpg',
    description: 'High-CTR thumbnail designs for major tech YouTubers, focusing on storytelling and visual hooks.',
    challenges: 'Designing for small mobile screens where readability and curiosity are the primary drivers.',
    solution: 'Implemented bold outlines, expressive facial cutouts, and readable text with high luminance contrast.',
    tools: ['Photoshop', 'Midjourney']
  },
  { 
    id: 'luxury-brand', 
    category: 'Thumbnail Design', 
    title: 'LOST MONEY', 
    img: 'https://i.ibb.co/9m7T1wxm/money-thumbil.jpg',
    description: 'Complete brand identity for "Onyx & Gold", a boutique fragrance house.',
    challenges: 'Conveying luxury and exclusivity through high-end print finishes and gold foil textures.',
    solution: 'Developed a custom serif logotype and a refined color palette of deep charcoal and metallic gold.',
    tools: ['InDesign', 'Illustrator']
  },
  { 
    id: 'ctr-optimized', 
    category: 'Thumbnail Design', 
    title: 'How to Grow on YouTube', 
    img: 'https://i.ibb.co/Mx6phzSN/youtube.jpg',
    description: 'A collection of thumbnails optimized for maximum engagement across various gaming and lifestyle niches.',
    challenges: 'Staying ahead of platform trends while maintaining the creators unique visual brand.',
    solution: 'Used heat-map analysis to place focal points in natural gaze positions.',
    tools: ['Photoshop', 'Lightroom']
  },
  { 
    id: 'thumbnail-new-1', 
    category: 'Thumbnail Design', 
    title: 'Gaming Growth Tactics', 
    img: 'https://i.ibb.co/4wv5Cxd1/thumbil-3.jpg',
    description: 'High-impact gaming thumbnail designed for maximum click-through rate.',
    tools: ['Photoshop', 'Canva']
  },
  { 
    id: 'thumbnail-new-2', 
    category: 'Thumbnail Design', 
    title: 'Vlog Storytelling', 
    img: 'https://i.ibb.co/Q7GTQJgs/thumbil-2.jpg',
    description: 'Cinematic vlog thumbnail capturing key emotional moments to drive engagement.',
    tools: ['Photoshop', 'Lightroom']
  },
  { 
    id: 'thumbnail-new-3', 
    category: 'Thumbnail Design', 
    title: 'Visual Breakdown', 
    img: 'https://i.ibb.co/pvQS4Lfb/ss.jpg',
    description: 'Technical walkthrough thumbnail highlighting process and results clearly.',
    tools: ['Photoshop', 'Illustrator']
  },
  { 
    id: 'print-new-1', 
    category: 'Print Design', 
    title: 'Modern Headphones', 
    img: 'https://i.ibb.co/b5ZHJJvj/Hedhone.jpg',
    description: 'Minimalist product poster for high-end audio equipment.',
    tools: ['Photoshop', 'Illustrator']
  },
  { 
    id: 'print-new-2', 
    category: 'Print Design', 
    title: 'Legends of Sport', 
    img: 'https://i.ibb.co/MkgXPZ4Q/messi.jpg',
    description: 'Dynamic sports illustrative poster celebrating iconic athletes.',
    tools: ['Photoshop', 'Midjourney']
  },
  { 
    id: 'print-new-3', 
    category: 'Print Design', 
    title: 'Automotive Power', 
    img: 'https://i.ibb.co/cXNPS5c5/dodge-challenger.jpg',
    description: 'High-octane automotive showcase poster with bold typography.',
    tools: ['Photoshop', 'Lightroom']
  },
  { 
    id: 'print-new-4', 
    category: 'Print Design', 
    title: 'Timeless Elegance', 
    img: 'https://i.ibb.co/S492Q3bz/luxary-watch.jpg',
    description: 'Luxury watch advertisement focusing on precision and detail.',
    tools: ['Photoshop', 'InDesign']
  },
];
