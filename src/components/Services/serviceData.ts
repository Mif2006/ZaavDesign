export interface Service {
  id: number;
  title: string;
  description: string;
  icon: string;
  imageUrl: string;
}

export const services: Service[] = [
  {
    id: 1,
    title: "Digital Artistry",
    description: "Blending traditional craftsmanship with cutting-edge digital design techniques.",
    icon: "Palette",
    imageUrl: "https://images.unsplash.com/photo-1633354931133-27c285de1eef?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 2,
    title: "Custom Innovation",
    description: "Personalized luxury pieces crafted with revolutionary technology.",
    icon: "Sparkles",
    imageUrl: "https://images.unsplash.com/photo-1550438496-8c6e325ec914?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 3,
    title: "Virtual Fitting",
    description: "Advanced AR technology for perfect fit and visualization.",
    icon: "Scan",
    imageUrl: "https://images.unsplash.com/photo-1633354931134-5a8c2a5b7895?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 4,
    title: "Smart Jewelry",
    description: "Wearable technology seamlessly integrated with elegant design.",
    icon: "Cpu",
    imageUrl: "https://images.unsplash.com/photo-1617039570999-5284164ccd0d?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 5,
    title: "NFT Collections",
    description: "Digital ownership certificates for exclusive pieces.",
    icon: "Binary",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 6,
    title: "Blockchain Registry",
    description: "Transparent authenticity tracking for each creation.",
    icon: "Link",
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 7,
    title: "Bio Materials",
    description: "Sustainable and innovative materials for conscious luxury.",
    icon: "Leaf",
    imageUrl: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=300"
  },
  {
    id: 8,
    title: "3D Printing",
    description: "Advanced manufacturing for complex geometric designs.",
    icon: "Printer",
    imageUrl: "https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=300"
  }
];