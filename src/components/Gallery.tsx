import CircularGallery from "./CircularGallery";
import { BlurText } from "./ui/blur-text";

const images = [
  "https://images.unsplash.com/photo-1763391275169-d686f6d46f17?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwY291cGxlJTIwcG9ydHJhaXQlMjBhcnRpc3RpY3xlbnwxfHx8fDE3NjQ5MTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1684244276932-6ae853774c4d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwaGFuZHMlMjBob2xkaW5nJTIwZmxvd2Vyc3xlbnwxfHx8fDE3NjQ5MTgzNDR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1564587081321-62723533e3c0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwZHJlc3MlMjBkZXRhaWx8ZW58MXx8fHwxNzY0ODY0OTI5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  "https://images.unsplash.com/photo-1610425303802-f09737e52e28?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWRkaW5nJTIwdmVudWUlMjB0cmFkaXRpb25hbCUyMGJhdGFrfGVufDF8fHx8MTc2NDkxODM0NHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
];

export const Gallery = () => {
  const items = images.map((image, i) => ({ image, text: `Moment ${i + 1}` }));
  return (
    <section id="gallery" className="py-24 relative z-10">
      <div className="container mx-auto px-4">
        <div className="text-center">
          <BlurText
            text="Our Moments"
            className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90"
          />
          <div className="h-px w-24 bg-yellow-600/30 mx-auto mt-6" />
        </div>

        <div style={{ height: "800px", position: "relative" }}>
          <CircularGallery
            bend={1}
            textColor="#ffffff"
            borderRadius={0.05}
            scrollEase={0.02}
          />
        </div>
      </div>
    </section>
  );
};
