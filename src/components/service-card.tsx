import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

interface ServiceCardProps {
  title: string;
  image: string;
  text: string;
}

export function ServiceCard({ title, image, text }: ServiceCardProps) {
  return (
    <Card className="overflow-hidden rounded-xl">
      <img src={image} alt="" className="w-full h-40 object-cover" />

      <CardHeader>
        <CardTitle>{title}</CardTitle>
      </CardHeader>

      <CardContent>
        <p className="text-muted-foreground">{text}</p>
      </CardContent>
    </Card>
  );
}
