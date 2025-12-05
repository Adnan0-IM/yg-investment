import { Button } from "@/components/ui/button";

interface HeroProps {
  title: string;
  text: string;
  image: string;
}

export default function Hero({ title, text, image }: HeroProps) {
  return (
    <section className="grid lg:grid-cols-2 gap-10 items-center py-20">
      <div>
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        <p className="text-lg text-muted-foreground mb-6">{text}</p>
        <Button size="lg">Get in Touch</Button>
      </div>

      <div className="w-full h-[350px] rounded-lg overflow-hidden">
        <img src={image} className="w-full h-full object-cover" alt="" />
      </div>
    </section>
  );
}
