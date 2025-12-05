import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Textarea } from "./ui/textarea";
import { toast } from "sonner@2.0.3";
import { Loader2 } from "lucide-react";
import { BlurText } from "./ui/blur-text";

interface RsvpFormData {
  fullName: string;
  email: string;
  attending: "yes" | "no";
  guests: number;
  dietary: string;
}

export const Rsvp = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { register, handleSubmit, formState: { errors }, reset, setValue, watch } = useForm<RsvpFormData>({
    defaultValues: { attending: "yes", guests: 1 }
  });

  const onSubmit = async (data: RsvpFormData) => {
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    toast.success("RSVP Sent Successfully");
    reset();
  };

  return (
    <section id="rsvp" className="py-24 relative z-10 border-t border-neutral-900">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center mb-16">
          <BlurText 
             text="RSVP"
             className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-4"
           />
          <p className="text-neutral-500 uppercase tracking-widest text-xs">Kindly Respond by September 1st</p>
        </div>

        <div className="max-w-xl mx-auto">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
            <div className="space-y-6">
              <div>
                <Label className="text-neutral-500 text-xs uppercase tracking-widest mb-2 block">Full Name</Label>
                <Input
                  {...register("fullName", { required: "Required" })}
                  className="bg-neutral-900/50 border-neutral-800 focus:border-yellow-600 rounded-none h-12 text-yellow-50"
                />
              </div>

              <div>
                <Label className="text-neutral-500 text-xs uppercase tracking-widest mb-2 block">Email</Label>
                <Input
                  {...register("email", { required: "Required" })}
                  className="bg-neutral-900/50 border-neutral-800 focus:border-yellow-600 rounded-none h-12 text-yellow-50"
                />
              </div>

              <div className="pt-4">
                <Label className="text-neutral-500 text-xs uppercase tracking-widest mb-4 block">Attendance</Label>
                <RadioGroup 
                  defaultValue="yes" 
                  onValueChange={(val) => setValue("attending", val as "yes" | "no")}
                  className="flex gap-8"
                >
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="yes" id="yes" className="border-neutral-600 text-yellow-500" />
                    <Label htmlFor="yes" className="font-serif text-xl text-yellow-100 cursor-pointer font-light">Joyfully Accepts</Label>
                  </div>
                  <div className="flex items-center space-x-3">
                    <RadioGroupItem value="no" id="no" className="border-neutral-600 text-yellow-500" />
                    <Label htmlFor="no" className="font-serif text-xl text-neutral-400 cursor-pointer font-light">Regretfully Declines</Label>
                  </div>
                </RadioGroup>
              </div>
            </div>

            <Button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-yellow-700 hover:bg-yellow-600 text-white h-14 rounded-none text-xs uppercase tracking-[0.2em] font-bold mt-8"
            >
              {isSubmitting ? <Loader2 className="animate-spin" /> : "Confirm Attendance"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};
