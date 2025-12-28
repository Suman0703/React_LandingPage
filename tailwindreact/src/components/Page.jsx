import Card from "./Card";

export default function Page() {
  const posts = [
    {
      title: "Trip that you'll never ever forget",
      date: "Nov 23, 2016",
      category: "Travel",
      excerpt: "Dolor sit amet, consectetur adipiscing elit. Aliquam erat volutpat.",
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Must-have gear",
      date: "Nov 15, 2016",
      category: "Tech",
      excerpt: "Vestibulum vitae nulla sagittis, pulvinar diam consequat. Phasellus vitae.",
      image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Movielike photo shoot",
      date: "Nov 10, 2016",
      category: "Photography",
      excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Craftsmen at work",
      date: "Nov 03, 2016",
      category: "Lifestyle",
      excerpt: "Morbi a urna mollis, elementum tortor in, hendrerit libero. Maecenas feugiat rhoncus magna.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Autumn Vibes",
      date: "Oct 28, 2016",
      category: "Nature",
      excerpt: "Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem.",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Urban Exploration",
      date: "Oct 15, 2016",
      category: "City",
      excerpt: "Proin eget tortor risus. Vivamus suscipit tortor eget felis porttitor volutpat.",
      image: "https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?auto=format&fit=crop&w=800&q=80",
    },
     {
      title: "Coffee Culture",
      date: "Oct 10, 2016",
      category: "Lifestyle",
      excerpt: "Nulla quis lorem ut libero malesuada feugiat. Donec rutrum congue leo eget malesuada.",
      image: "https://images.unsplash.com/photo-1497935586351-b67a49e012bf?auto=format&fit=crop&w=800&q=80",
    }
  ];

  return (
    <section className="bg-[#f9f9f9] py-16 min-h-screen">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {posts.map((post, idx) => (
            <Card key={idx} {...post} />
          ))}
          {/* Duplicates to show the grid clearly */}
          {posts.map((post, idx) => (
            <Card key={`dup-${idx}`} {...post} />
          ))}
        </div>
      </div>
    </section>
  );
}