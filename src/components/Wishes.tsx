import { useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";

interface WishFormData {
  name: string;
  message: string;
}

interface Wish {
  id: number;
  name: string;
  message: string;
  date: string;
}

export const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([
    {
      id: 1,
      name: "Sarah & Mike",
      message: "Wishing you a lifetime of love and happiness! Can't wait to celebrate with you.",
      date: "2 hours ago"
    },
  ]);
  
  const { register, handleSubmit, reset, formState: { errors } } = useForm<WishFormData>();

  const onSubmit = (data: WishFormData) => {
    const newWish: Wish = {
      id: Date.now(),
      name: data.name,
      message: data.message,
      date: "Just now"
    };
    
    setWishes([newWish, ...wishes]);
    reset();
    toast.success("Your wish has been sent!");
  };

  return (
    <section id="wishes" className="py-24 relative z-10 bg-neutral-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-yellow-100">Leave a Wish</h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="wish-name" className="text-neutral-400 text-xs uppercase tracking-widest">Your Name</Label>
                <Input
                  id="wish-name"
                  placeholder="Enter your name"
                  {...register("name", { required: "Name is required" })}
                  className="bg-transparent border-0 border-b border-neutral-700 rounded-none px-0 py-4 focus:ring-0 focus:border-yellow-600 placeholder:text-neutral-800 text-yellow-100 transition-colors h-auto"
                />
                {errors.name && <span className="text-red-900 text-xs">{errors.name.message}</span>}
              </div>

              <div className="space-y-2">
                <Label htmlFor="wish-message" className="text-neutral-400 text-xs uppercase tracking-widest">Message</Label>
                <Textarea
                  id="wish-message"
                  placeholder="Write a message..."
                  {...register("message", { required: "Please write a message" })}
                  className="bg-transparent border-0 border-b border-neutral-700 rounded-none px-0 py-4 focus:ring-0 focus:border-yellow-600 placeholder:text-neutral-800 text-yellow-100 transition-colors min-h-[100px] resize-none"
                />
                {errors.message && <span className="text-red-900 text-xs">{errors.message.message}</span>}
              </div>

              <Button 
                type="submit" 
                className="bg-yellow-700 text-neutral-100 hover:bg-yellow-600 rounded-none px-8 py-6 text-xs uppercase tracking-widest font-semibold"
              >
                Send Message
              </Button>
            </form>
          </div>

          {/* List */}
          <div className="space-y-8 border-l border-neutral-800 pl-8 lg:pl-16">
            <h3 className="font-serif text-2xl text-neutral-500">Latest Wishes</h3>
            <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {wishes.map((wish) => (
                <div key={wish.id} className="space-y-2">
                  <p className="font-serif text-lg text-yellow-100/80 leading-relaxed">"{wish.message}"</p>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">{wish.name}</span>
                    <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span className="text-neutral-600 text-xs">{wish.date}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
