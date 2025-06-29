
import DefaultLayout from "@/layouts/default";
  // import headerHp from "@/components/HomePage/headerHp";
import HeaderHp from "@/components/HomePage/headerHp";
import HowItWorks from "@/components/HomePage/HowItWorks";
import FeaturesGrid from "@/components/HomePage/FeaturesGrid";
import TextGlow from "@/components/HomePage/TextGlow";

export default function IndexPage() {
  return (
    <DefaultLayout >
      <HeaderHp />
      <HowItWorks/>
      <FeaturesGrid/>
      <TextGlow/>
    </DefaultLayout>
  );
}
