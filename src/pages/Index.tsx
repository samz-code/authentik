import { Layout } from "@/components/layout/Layout";
import { HeroSection } from "@/components/home/HeroSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { TheGapSection } from "@/components/home/TheGapSection";
import { ClientsSection } from "@/components/home/ClientsSection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesOverview />
      <TheGapSection />
      <ClientsSection />
    </Layout>
  );
};

export default Index;
