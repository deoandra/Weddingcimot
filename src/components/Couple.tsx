import { BlurText } from "./ui/blur-text";
import { ProfileCard } from "./ui/profile-card";

export const Couple = () => {
  return (
    <section id="couple" className="py-24 relative z-10 overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-20">
           <BlurText 
             text="The Happy Couple"
             className="justify-center font-serif text-4xl md:text-5xl text-yellow-100/90 mb-4"
           />
           <p className="text-neutral-500 text-sm tracking-widest uppercase mt-4">We are getting married</p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 lg:gap-24 max-w-5xl mx-auto items-start">
          {/* Groom */}
          <ProfileCard 
            name="M Dhuha Rohim, S.Kom"
            role="The Groom"
            image="https://images.unsplash.com/photo-1670291362999-00f36b631e15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxncm9vbSUyMHBvcnRyYWl0JTIwb3V0ZG9vciUyMHdlZGRpbmd8ZW58MXx8fHwxNzY0OTA4NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            align="right"
            description={
              <>
                <div className="mt-4 pt-4 border-t border-yellow-900/30">
                  <p className="text-xs uppercase tracking-widest mb-2 text-neutral-500">Only child of</p>
                  <p className="text-base text-neutral-300">Drs. Suwarno (Alm)</p>
                  <p className="text-xs text-yellow-600 my-1">&</p>
                  <p className="text-base text-neutral-300">Martiningrum, S.H</p>
                </div>
              </>
            }
          />

          {/* Bride */}
          <ProfileCard 
            name="Nisa Grestasya Tampubolon, S.M"
            role="The Bride"
            image="https://images.unsplash.com/photo-1598812300657-a24f1941c693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxicmlkZSUyMHBvcnRyYWl0JTIwb3V0ZG9vciUyMHdlZGRpbmd8ZW58MXx8fHwxNzY0OTA4NzU2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
            align="left"
            description={
              <>
                <div className="mt-4 pt-4 border-t border-yellow-900/30">
                  <p className="text-xs uppercase tracking-widest mb-2 text-neutral-500">First daughter of</p>
                  <p className="text-base text-neutral-300">Winton Jepriadi Tampubolon</p>
                  <p className="text-xs text-yellow-600 my-1">&</p>
                  <p className="text-base text-neutral-300">Ruminta Simbolon</p>
                </div>
              </>
            }
          />
        </div>
      </div>
    </section>
  );
};
