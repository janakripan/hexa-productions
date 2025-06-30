import React from "react";
import { footerGallery, footerLinks, socialmediaLinks } from "../constants/navLinks";
import { Link } from "react-router";
import { motion } from "framer-motion";

const logoUrl =
  "https://hexagroup.ae/wp-content/uploads/2024/03/cropped-cropped-HEXA-LOGO-new.pdf.png";

const Footer = () => {
  return (
    <motion.div 
      className="w-full h-fit flex flex-col  border-t border-gray-200 p-4 md:p-6 mt-2"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="w-full h-fit  flex flex-col xl:flex-row md:p-6 gap-5">
        {/* logo ,social media and about */}
        <motion.div 
          className=" flex flex-col md:flex-row xl:flex-col xl:w-3/8"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
        >
          {/* logo and socialmedia */}
          <div className="w-full h-fit flex md:px-40 lg:px-0 flex-col items-center">
            {/* logo */}
            <motion.div 
              className="w-full h-fit"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
            >
              <img src={logoUrl} alt="rooter logo" className="lg:w-80" />
            </motion.div>

            {/* socialmedia */}
            <div className="w-full h-fit flex flex-col items-center lg:items-start  relative">
             <div className="lg:absolute xl:relative lg:right-0 ">
                 <motion.p 
                   className="text-base font-open capitalize text-gray-500  py-3"
                   initial={{ opacity: 0, y: 20 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once: true }}
                   transition={{ duration: 0.5, delay: 0.4 }}
                 >
                follow us
              </motion.p>
              <motion.div 
                className="w-fit h-fit flex flex-row justify-between gap-5"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                {/* socialmedia buttons */}
                {socialmediaLinks.map((Item, idx) => (
                  <motion.div
                    key={idx}
                    className="h-fit w-fit rounded-full overflow-hidden relative group border-2 border-gray-500 hover:border-red-500 transition-all duration-500"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.6 + idx * 0.1, ease: "backOut" }}
                  >
                    {/* animating layre */}
                    <div className="absolute inset-0 bg-red-500 scale-0 -z-10 group-hover:scale-105 transition-all duration-500 rounded-full"></div>

                    <a
                      href={Item.link}
                      target="blank"
                      className="h-full w-full p-2 flex items-center justify-center text-gray-500 group-hover:text-white  transition-all duration-300 text-2xl"
                    >
                      <Item.icon />
                    </a>
                  </motion.div>
                ))}
              </motion.div>
             </div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.7 }}
              >
                <p className="text-base font-open  text-center lg:w-80 lg:text-left my-4 text-gray-500">
                  We are passionate about helping businesses thrive through
                  effective advertising strategies. We are committed to creating
                  compelling campaigns that drive results and increase brand
                  visibility
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* links address and gallery */}
        <motion.div 
          className="w-full h-full   flex flex-col lg:flex-row justify-around"
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
        >
          {/* quick links */}
          <motion.div 
            className="flex flex-col h-full p-5 justify-between gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <motion.h5 
              className=" text-gray-600 text-2xl font-semibold "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              Quick Links
            </motion.h5>

            <ul className="flex flex-col justify-between h-full items-start ">
              {footerLinks.map((item, index) => (
                <motion.li 
                  key={index} 
                  className="w-full h-fit group"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                >
                  <Link
                    to={item.path}
                    className="block text-gray-500 text-base hover:text-red-500 hover:text-shadow-sm transition-all duration-300 w-full h-fit py-2"
                  >
                    {item.name}
                    <div className="h-[1px] ring-offset-2 w-0 group-hover:w-full bg-red-600 transform duration-300 "></div>
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* address */}
          <motion.div 
            className="flex flex-col h-full p-5 justify-between  gap-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.h5 
              className=" text-gray-600 text-2xl font-semibold "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              Address
            </motion.h5>

            <motion.div 
              className="flex flex-col justify-between h-full items-start "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              <span className="block text-gray-500 group text-base hover:text-red-500 hover:text-shadow-sm transition-all duration-300 w-full h-fit py-2">
                DIP – 2 , Dubai, UAE
                <div className="h-[1px] ring-offset-2 w-0 group-hover:w-full bg-red-600 transform duration-300 "></div>
              </span>
              <a
                href="mailto:info@hexagroup.ae"
                className="block text-gray-500 group text-base hover:text-red-500 hover:text-shadow-sm transition-all duration-300 w-full h-fit py-2"
              >
                email : info@hexagroup.ae
                <div className="h-[1px] ring-offset-2 w-0 group-hover:w-full bg-red-600 transform duration-300 "></div>
              </a>
            </motion.div>

           
          </motion.div>
           {/* gallery */}
            <motion.div 
              className="flex flex-col h-full p-5 justify-between  gap-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
            <motion.h5 
              className=" text-gray-600 text-2xl font-semibold "
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 }}
            >
              gallery
            </motion.h5>

            <motion.div 
              className="w-full  h-full grid grid-cols-3 gap-3"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >

                {footerGallery.map((item,index)=>(
                  <motion.div 
                    key={index} 
                    className="lg:w-[75px] w-full aspect-square overflow-hidden relative group "
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.9 + index * 0.1, ease: "easeOut" }}
                  >
                    <div className=" absolute inset-0 group-hover:bg-black/30 z-20 transition-all duration-300 "></div>
                    <img src={item} alt="gallery image" className="object-cover group-hover:scale-110 transform duration-300 " />
                  </motion.div>
                ))}

            </motion.div>

            </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default Footer;