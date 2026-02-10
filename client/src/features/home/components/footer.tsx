import { Button } from "@/components/ui/button";
import {
  IconArrowRight,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandTwitterFilled,
} from "@tabler/icons-react";
import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col  justify-end ">
       <div className="flex flex-col items-center justify-center text-center py-24">
        <p className="text-6xl font-semibold">We'd love to hear from you</p>
        <Button className="mt-8">
          Contact Us <IconArrowRight />
        </Button>
      </div>

      <div className="flex justify-between items-end ">
        <div className="flex  justify-between pt-4 ">
          <div className="pr-5 ">
            <p>[Home]</p>
            <p>WHAT WE DO</p>
            <p>WORK</p>
            <p>WHO ARE WE</p>
          </div>
          <div className="pl-5">
            <p>BEING HERE</p>
            <p>CAREERS</p>
            <p>CONTACT</p>
            <p>PRIVACY</p>
          </div>
        </div>
        <div className="flex ">
          <IconBrandInstagram></IconBrandInstagram>
          <IconBrandTwitterFilled></IconBrandTwitterFilled>
          <IconBrandLinkedin></IconBrandLinkedin>
        </div>
      </div>
    </div>
  );
};

export default Footer;
