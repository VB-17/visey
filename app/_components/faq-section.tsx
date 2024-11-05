import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { CaretDown } from "@phosphor-icons/react/dist/ssr";


const faqData = [
  {
    question: "Is it accessible?",
    answer: "Yes. It adheres to the WAI-ARIA design pattern.",
  },
  {
    question: "What platforms does it support?",
    answer: "It supports all modern web browsers.",
  },
  {
    question: "How do I get support?",
    answer: "You can reach out via our support email or contact form.",
  },
  {
    question: "Is there a mobile app available?",
    answer: "Yes, a mobile app is available for both iOS and Android.",
  },
];

function FaqSection() {
  return (
    <>
      <section className="bg-primary-landing">
        <section className="relative mb-10 pt-20 pb-10 text-base-white max-w-screen-xl xl:mx-auto">
          <div className="text-center">
            <p className="text-success-landing text-2xl font-semibold">FAQs</p>
            <h2 className="text-xl font-semibold mt-4">Still not Convinced?</h2>
            <p className="text-base-black mt-1">We&apos;ve got answers</p>
          </div>
          <div className="pt-9 px-4">
            <Accordion type="single" collapsible className="w-full space-y-4">
              {faqData.map((item, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="px-4 bg-secondary-landing font-semibold">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-4">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
          <Button
            size="sm"
            className="gap-x-2 bg-success-landing text-base-black  absolute -bottom-4 left-1/2 -translate-x-1/2 px-8"
          >
            <span>More</span>
            <CaretDown />
          </Button>
        </section>
      </section>
      <p className="text-sm text-center -mt-1">
        Still have more Questions? Contact our{" "}
        <span className="font-bold underline">Help Center</span>{" "}
      </p>
    </>
  );
}
export default FaqSection;
