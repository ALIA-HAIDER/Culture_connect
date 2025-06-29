
import {
  HiOutlineAdjustmentsHorizontal,
  HiOutlineMap,
  HiOutlineUsers,
  HiOutlineCheckCircle,
} from "react-icons/hi2";
import imagetwo from "@/assets/imagetwo.jpg"; // Adjust path as needed

const steps = [
  {
    icon: HiOutlineAdjustmentsHorizontal,
    title: "Set Your Preferences",
    description:
      "Tell us your vibe — languages, lifestyle, and community values that matter to you.",
  },
  {
    icon: HiOutlineMap,
    title: "Explore Localities",
    description:
      "We match you to areas based on culture, lifestyle, and real-world data.",
  },
  {
    icon: HiOutlineUsers,
    title: "Connect With Locals",
    description:
      "See who’s living there, ask questions, or share experiences (optional).",
  },
  {
    icon: HiOutlineCheckCircle,
    title: "Compare & Decide",
    description:
      "Save favorites, compare vibes, and move confidently.",
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-deepBlack-500 text-softWhite my-20 flex flex-col md:flex-row relative overflow-hidden">
      {/* Image section */}
      <div className="w-full md:w-1/2 h-[60vh] md:h-auto">
        <img
          src={imagetwo}
          alt="How CultureConnect Works"
          className="w-full h-fit object-cover rounded-3xl border-2 border-primary-500/30"
        />
      </div>

      {/* Content section */}
      <div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
        <h2 className="text-4xl font-bold mb-6 text-softWhite">How CultureConnect Works</h2>
        <p className="text-mutedGray-300 mb-8 max-w-md">
          Finding your perfect neighborhood shouldn't feel like a gamble. Here's how we make it effortless:
        </p>

        <div className="space-y-6">
          {steps.map(({ icon: Icon, title, description }, index) => (
            <div key={index} className="flex items-start space-x-4">
              <div className="text-primary-500 mt-1">
                <Icon size={28} />
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-1 text-softWhite">{title}</h3>
                <p className="text-mutedGray-400 text-sm">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Optional vertical label */}
      <div className="hidden md:block absolute right-0 top-1/2 transform -translate-y-1/2 rotate-90 origin-right text-softWhite text-sm tracking-widest">
        HOW IT WORKS
        <div className="w-1 h-16 bg-primary-500 mt-2 mx-auto rounded shadow-lg shadow-primary-500/50"></div>
      </div>
    </section>
  );
}
