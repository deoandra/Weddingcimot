import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";
import {
  Form,
  FormField,
  FormItem,
  FormLabel,
  FormControl,
  FormMessage,
} from "./ui/form";
import { supabase } from "../lib/supabase";
import { Loader2 } from "lucide-react";

interface WishFormData {
  name: string;
  message: string;
}

interface Wish {
  id: number;
  name: string;
  message: string;
  created_at: string;
}

export const Wishes = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const form = useForm<WishFormData>();

  useEffect(() => {
    const fetchWishes = async () => {
      if (!supabase) {
        setWishes([
          {
            id: 1,
            name: "Sarah & Mike",
            message:
              "Wishing you a lifetime of love and happiness! Can't wait to celebrate with you.",
            created_at: "2 hours ago",
          },
        ]);
        return;
      }
      const { data, error } = await supabase
        .from("wishes_wedding")
        .select("id,name,message,created_at")
        .order("created_at", { ascending: false });
      if (error || !data) {
        return;
      }
      setWishes(
        data.map((row) => ({
          id: row.id as number,
          name: row.name as string,
          message: row.message as string,
          created_at: new Date(String(row.created_at)).toLocaleString(),
        }))
      );
    };
    fetchWishes();
  }, []);

  const onSubmit = async (data: WishFormData) => {
    setIsSubmitting(true);
    const exec = async () => {
      if (supabase) {
        const { data: inserted, error } = await supabase
          .from("wishes_wedding")
          .insert({ name: data.name, message: data.message })
          .select("id,name,message,created_at")
          .single();
        if (error) {
          const msg = String(error.message || "");
          if (msg.toLowerCase().includes("row-level security")) {
            throw new Error(
              "Submission blocked by Supabase Row Level Security"
            );
          }
          throw new Error("Failed to send wish");
        }
        setWishes((prev) => [
          {
            id: inserted!.id as number,
            name: inserted!.name as string,
            message: inserted!.message as string,
            created_at: new Date(String(inserted!.created_at)).toLocaleString(),
          },
          ...prev,
        ]);
      } else {
        setWishes((prev) => [
          {
            id: Date.now(),
            name: data.name,
            message: data.message,
            created_at: "Just now",
          },
          ...prev,
        ]);
      }
    };
    try {
      await toast.promise(exec(), {
        loading: "Sending wish...",
        success: "Your wish has been sent!",
        error: (e) => String(e?.message || "Failed to send wish"),
      });
      form.reset();
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="wishes" className="py-24 relative z-10 bg-neutral-900/20">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Form */}
          <div className="space-y-8">
            <h2 className="font-serif text-3xl md:text-4xl text-yellow-100">
              Leave a Wish
            </h2>
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <FormField
                  name="name"
                  control={form.control}
                  rules={{ required: "Name is required" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-400 text-xs uppercase tracking-widest">
                        Your Name
                      </FormLabel>
                      <FormControl>
                        <Input
                          {...field}
                          id="wish-name"
                          placeholder="Enter your name"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  name="message"
                  control={form.control}
                  rules={{ required: "Please write a message" }}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-neutral-400 text-xs uppercase tracking-widest">
                        Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          {...field}
                          id="wish-message"
                          placeholder="Write a message..."
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-yellow-700 text-neutral-100 hover:bg-yellow-600 rounded-none px-8 py-6 text-xs uppercase tracking-widest font-semibold"
                >
                  {isSubmitting ? (
                    <Loader2 className="animate-spin" />
                  ) : (
                    "Send Message"
                  )}
                </Button>
              </form>
            </Form>
          </div>

          {/* List */}
          <div className="space-y-8 border-l border-neutral-800 pl-8 lg:pl-16">
            <h3 className="font-serif text-2xl text-neutral-500">
              Latest Wishes
            </h3>
            <div className="space-y-8 max-h-[400px] overflow-y-auto pr-4 custom-scrollbar">
              {wishes.map((wish, i) => (
                <motion.div
                  key={wish.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05, duration: 0.6 }}
                  className="space-y-2"
                >
                  <p className="font-serif text-lg text-yellow-100/80 leading-relaxed">
                    "{wish.message}"
                  </p>
                  <div className="flex items-center gap-3">
                    <span className="text-yellow-600 text-xs font-bold uppercase tracking-widest">
                      {wish.name}
                    </span>
                    <span className="w-1 h-1 bg-neutral-700 rounded-full" />
                    <span className="text-neutral-600 text-xs">
                      {wish.created_at}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
