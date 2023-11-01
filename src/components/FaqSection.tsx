import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FaqSection = () => {
  return (
    <section className="bg-[#00103C] lg:py-40 py-20 mt-10">
      <div className="container mx-auto">
        <h1
          data-aos="fade-left"
          data-aos-duration="2000"
          className="lg:text-4xl text-2xl font-bold text-white text-center">
          Frequently asked questions
        </h1>
        <div className="lg:mt-20 mt-10 space-y-6 w-full lg:w-9/12 mx-auto">
          <Accordion
            data-aos="fade-left"
            data-aos-duration="2000"
            type="single"
            collapsible
            className="bg-white px-4 rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I use fiat plug ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur soluta quae dolore itaque ipsa doloribus ea, cumque
                totam minus rem porro fugit fugiat nihil, expedita nemo nam
                repellat, inventore at eveniet beatae iure. Cupiditate excepturi
                minima officiis eaque dolores? Magni excepturi deleniti ratione
                inventore dolores dicta impedit culpa minima blanditiis!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            data-aos="fade-left"
            data-aos-duration="2000"
            type="single"
            collapsible
            className="bg-white px-4 rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>How do I sell giftcard ?</AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur soluta quae dolore itaque ipsa doloribus ea, cumque
                totam minus rem porro fugit fugiat nihil, expedita nemo nam
                repellat, inventore at eveniet beatae iure. Cupiditate excepturi
                minima officiis eaque dolores? Magni excepturi deleniti ratione
                inventore dolores dicta impedit culpa minima blanditiis!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion
            data-aos="fade-left"
            data-aos-duration="2000"
            type="single"
            collapsible
            className="bg-white px-4 rounded-lg">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                How to buy crypto on FiatPlug ?
              </AccordionTrigger>
              <AccordionContent>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur soluta quae dolore itaque ipsa doloribus ea, cumque
                totam minus rem porro fugit fugiat nihil, expedita nemo nam
                repellat, inventore at eveniet beatae iure. Cupiditate excepturi
                minima officiis eaque dolores? Magni excepturi deleniti ratione
                inventore dolores dicta impedit culpa minima blanditiis!
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
