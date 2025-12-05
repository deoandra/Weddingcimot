import { motion } from "motion/react";
import { Check, Copy } from "lucide-react";
import { useState } from "react";
import { BlurText } from "./ui/blur-text";

export const Gift = () => {
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const bankAccounts = [
    {
      bank: "Bank Central Asia",
      number: "2480616211",
      name: "MUHAMMAD DHUHA R",
    },
    {
      bank: "Dana",
      number: "3901081279383581",
      name: "NISA GRESTASYA",
    },
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text.replace(/\s/g, ""));
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <section
      id="gift"
      className="py-24 relative z-10 border-t border-neutral-900"
    >
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-2xl mx-auto">
          <BlurText
            text="Wedding Gift"
            className="justify-center font-serif text-3xl md:text-4xl text-yellow-100/90 mb-8"
          />

          <p className="text-neutral-500 mb-12 font-light leading-relaxed">
            Your love and company on our wedding day is the only present we
            require. If you do wish to honor us with a gift, a contribution
            towards our future together would be appreciated.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            {bankAccounts.map((account, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="bg-neutral-900/50 p-8 border border-neutral-800 flex flex-col items-center gap-4 transition-colors hover:border-yellow-900/50"
              >
                <h3 className="text-neutral-400 text-sm tracking-widest uppercase">
                  {account.bank}
                </h3>
                <div className="text-xl font-mono text-yellow-100/90 tracking-wider">
                  {account.number}
                </div>
                <p className="text-xs text-neutral-600 uppercase tracking-wider mb-2">
                  {account.name}
                </p>

                <button
                  onClick={() => handleCopy(account.number, index)}
                  className="text-xs flex items-center gap-2 text-yellow-600 hover:text-yellow-500 transition-colors uppercase tracking-widest"
                >
                  {copiedIndex === index ? (
                    <>
                      <Check className="w-3 h-3" /> Copied
                    </>
                  ) : (
                    <>
                      <Copy className="w-3 h-3" /> Copy
                    </>
                  )}
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
