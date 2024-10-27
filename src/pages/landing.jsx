import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const LandingPage = () => {
  const [longUrl, setLongUrl] = useState("");
  const navigate = useNavigate();

  const handleShorten = (e) => {
    e.preventDefault();
    if (longUrl) navigate(`/auth?createNew=${longUrl}`);
  };

  return (
    <div className="flex flex-col items-center px-4">
      <h2 className="my-10 sm:my-16 text-3xl sm:text-6xl lg:text-7xl text-white text-center font-extrabold">
        The only URL Shortener <br /> you&rsquo;ll ever need! 👇
      </h2>
      <form
        onSubmit={handleShorten}
        className="sm:h-14 flex flex-col sm:flex-row w-full md:w-2/4 gap-2"
      >
        <Input
          type="url"
          placeholder="Enter your loooong URL"
          value={longUrl}
          onChange={(e) => setLongUrl(e.target.value)}
          className="h-full flex-1 py-4 px-4"
        />
        <Button type="submit" className="h-full" variant="destructive">
          Shorten!
        </Button>
      </form>
      <div className="faq w-full pt-16 pb-8 text-center">
        <h3 className="text-3xl sm:text-4xl font-semibold text-white mb-6">
          Frequently Asked Questions
        </h3>
      </div>
      <Accordion
        type="multiple"
        collapsible
        className="w-full md:w-3/4 lg:w-2/3 px-4 md:px-6"
      >
        <AccordionItem value="item-1">
          <AccordionTrigger className="text-lg sm:text-xl font-medium text-gray-100 hover:text-gray-300 transition-colors">
            How does the Trimr URL shortener work?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-200 mt-2">
            When you enter a long URL, our system generates a shorter version of
            that URL. This shortened URL redirects to the original long URL when
            accessed.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-2">
          <AccordionTrigger className="text-lg sm:text-xl font-medium text-gray-100 hover:text-gray-300 transition-colors">
            Do I need an account to use the app?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-200 mt-2">
            Yes. Creating an account allows you to manage your URLs, view
            analytics, and customize your short URLs.
          </AccordionContent>
        </AccordionItem>
        <AccordionItem value="item-3">
          <AccordionTrigger className="text-lg sm:text-xl font-medium text-gray-100 hover:text-gray-300 transition-colors">
            What analytics are available for my shortened URLs?
          </AccordionTrigger>
          <AccordionContent className="text-base text-gray-200 mt-2">
            You can view the number of clicks, geolocation data of the clicks
            and device types (mobile/desktop) for each of your shortened URLs.
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default LandingPage;
