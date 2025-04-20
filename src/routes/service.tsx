
import { Card, CardContent } from "@/components/ui/card";
import {
  Video,
  Mic,
  Brain,
  Star,
  LineChart,
} from "lucide-react";

export const Services = () => {
  const services = [
    {
      icon: <Video className="text-blue-500 w-6 h-6" />,
      title: "Video-Based Interviews",
      description:
        "Simulate real interview conditions with your webcam to improve visual communication.",
    },
    {
      icon: <Mic className="text-green-500 w-6 h-6" />,
      title: "Voice Analysis",
      description:
        "Get feedback on tone, clarity, and confidence from your voice responses.",
    },
    {
      icon: <Brain className="text-purple-500 w-6 h-6" />,
      title: "AI Feedback",
      description:
        "AI analyzes your answers and suggests improvements to enhance your responses.",
    },
    {
      icon: <Star className="text-yellow-500 w-6 h-6" />,
      title: "Performance Scoring",
      description:
        "Track and compare scores to measure how well you're progressing over time.",
    },
    {
      icon: <LineChart className="text-pink-500 w-6 h-6" />,
      title: "Progress Reports",
      description:
        "Detailed breakdowns of your sessions help you focus on weak areas.",
    },
  ];

  return (
    <section className="max-w-5xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold text-center mb-10">Our Services</h1>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service, idx) => (
          <Card
            key={idx}
            className="hover:shadow-lg transition-shadow duration-300"
          >
            <CardContent className="p-6 flex flex-col gap-3">
              {service.icon}
              <h2 className="text-lg font-semibold">{service.title}</h2>
              <p className="text-sm text-gray-500">{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};
