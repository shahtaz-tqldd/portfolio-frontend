import React from "react";
import SectionHead from "../../../ui/Heading/SectionHead";
import Lordicon from "../../../utiles/Lordicon";
import SubmitButton from "../../../ui/Buttons/SubmitButton";
import { useForm } from "react-hook-form";
import { TextField } from "@mui/material";

const ContactMe = () => {
  const data = [
    {
      title: "Call me at",
      content: "+880 851 614 661",
      icon: "srsgifqc",
    },
    {
      title: "Email me at",
      content: "shahtaz67@gmail.com",
      icon: "cwscwwyw",
    },
    {
      title: "I am from",
      content: "Dhaka, Bangladesh",
      icon: "oesmqhsi",
    },
  ];
  const { register, handleSubmit } = useForm();
  const handleProductSubmit = async (data) => {
    console.log(data);
  };

  return (
    <div id="experience" className="pt-12 md:mt-20 mt-10">
      <SectionHead
        title={"Contact Me"}
        text={"Get in touch"}
        icon={"bkjyrmiv"}
      />
      <div className="grid grid-cols-3 gap-12">
        <div className="md:col-span-1 col-span-3 flex flex-col gap-10 mt-12">
          {data?.map(({ title, content, icon }, i) => (
            <section key={i} className="flex gap-4 ">
              <div className="bg-slate-700 h-10 w-10 rounded-full center">
                <Lordicon link={icon} color={"#eee"} target={"section"} />
              </div>
              <div>
                <p className="text-sm opacity-60">{title}</p>
                <h2>{content}</h2>
              </div>
            </section>
          ))}
        </div>
        <div className="md:col-span-2 col-span-3">
          <h2 className="font-ubuntu text-2xl font-bold mb-5 fl gap-2">
            <Lordicon
              link={"gwlusjdu"}
              color={"#fff"}
              size={30}
              target={"div"}
            />
            Write to me
          </h2>
          <form
            onSubmit={handleSubmit(handleProductSubmit)}
            className="flex flex-col gap-5"
          >
            <TextField
              label="Your Name"
              type="text"
              variant="standard"
              color="warning"
              {...register("name", { required: true })}
            />

            <TextField
              label="Email"
              type="email"
              variant="standard"
              color="warning"
              {...register("email", { required: false })}
            />

            <TextField
              label="Your Message"
              type="text"
              multiline
              rows={6}
              color="warning"
              variant="standard"
              sx={{ color: "white" }}
              {...register("message", { required: true })}
            />

            <div className="flex justify-end mt-10">
              <button className="py-2.5 px-6 bg-primary text-slate-900 rounded font-bold">Send Message</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
