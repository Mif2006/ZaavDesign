export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  testimonial: string;
  image: string;
  audioUrl: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Emma Chen",
    role: "Creative Director",
    company: "Artisan Studios",
    testimonial: "ZAAVG's pieces are unlike anything I've seen. They perfectly blend digital innovation with timeless elegance.",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 2,
    name: "Marcus Rivera",
    role: "Design Lead",
    company: "Future Form",
    testimonial: "The attention to detail and innovative approach to luxury jewelry has completely transformed how I think about accessories.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 3,
    name: "Sarah Johnson",
    role: "Fashion Editor",
    company: "Style Nova",
    testimonial: "ZAAVG represents the future of luxury. Their pieces are both sculptural art and wearable technology.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 4,
    name: "David Kim",
    role: "Tech Innovator",
    company: "Digital Forge",
    testimonial: "The fusion of traditional craftsmanship with cutting-edge technology creates something truly revolutionary.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 5,
    name: "Ava Patel",
    role: "Art Curator",
    company: "Modern Gallery",
    testimonial: "Each piece tells a story of innovation and artistic vision. ZAAVG is redefining luxury for the digital age.",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 6,
    name: "James Wilson",
    role: "Digital Artist",
    company: "Neo Studio",
    testimonial: "ZAAVG's approach to merging physical and digital aesthetics is groundbreaking. Their pieces are truly works of art.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  },
  {
    id: 7,
    name: "Luna Zhang",
    role: "Fashion Technologist",
    company: "Future Wear",
    testimonial: "The perfect blend of innovation and elegance. ZAAVG is pioneering a new category of luxury accessories.",
    image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&q=80&w=150",
    audioUrl: "https://assets.mixkit.co/music/preview/mixkit-tech-house-vibes-130.mp3"
  }
];