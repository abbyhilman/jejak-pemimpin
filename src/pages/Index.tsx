import { Layout } from "@/components/layout";
import {
  HeroSection,
  ValueProposition,
  FeaturedPrograms,
  TestimonialsSection,
  ArticlesSection,
  CTASection,
} from "@/components/home";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ValueProposition />
      <FeaturedPrograms />
      <TestimonialsSection />
      <ArticlesSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
