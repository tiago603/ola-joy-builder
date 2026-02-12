import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TableOfContents from "@/components/TableOfContents";
import Chapter01 from "@/components/Chapter01";
import Chapter02 from "@/components/Chapter02";
import Chapter03 from "@/components/Chapter03";
import Chapter04 from "@/components/Chapter04";
import Chapter05 from "@/components/Chapter05";
import Chapter06 from "@/components/Chapter06";
import Chapter07 from "@/components/Chapter07";
import Footer from "@/components/Footer";
import { SectionDivider } from "@/components/SectionDivider";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <SectionDivider />
        <TableOfContents />
        <SectionDivider />
        <Chapter01 />
        <SectionDivider />
        <Chapter02 />
        <SectionDivider />
        <Chapter03 />
        <SectionDivider />
        <Chapter04 />
        <SectionDivider />
        <Chapter05 />
        <SectionDivider />
        <Chapter06 />
        <SectionDivider />
        <Chapter07 />
        <SectionDivider />
        <Footer />
      </main>
    </div>
  );
};

export default Index;
