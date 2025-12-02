"use client";

import { useForm } from "react-hook-form";

import { zodResolver } from "@hookform/resolvers/zod";
import { submitForm } from "../api/api";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";
import { aboutUsSchema, AboutUsSchema } from "./schema";
import Image from "next/image";

const AboutUs = () => {
  const formMutation = useMutation({
    mutationFn: (data: AboutUsSchema) => submitForm(data),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<AboutUsSchema>({
    resolver: zodResolver(aboutUsSchema),
    defaultValues: {
      name: "",
      email: "",
      description: "",
    },
  });

  const onSubmit = (data: AboutUsSchema) => {
    formMutation.mutate(data, {
      onSuccess: () => {
        toast.success("Form Submitted Succesfully!");
        reset();
      },
    });
  };

  return (
    <div className="w-full flex justify-center mt-[48px] pb-16">
      <div className="flex">
        <div className="bg-[#262626] w-full max-w-[630px] p-14">
          <h2 className="font-[latoRegular] text-[46px] text-white mb-[32px]">
            Tell us about your <span className="text-[#FFC94B]">Concerns</span>
          </h2>
          <form
            className="flex flex-col gap-8"
            onSubmit={handleSubmit(onSubmit)}
          >
            <div className="flex flex-col space-y-3 relative">
              <label htmlFor="name" className="text-white">
                Your Name
              </label>
              <input
                {...register("name")}
                type="text"
                id="name"
                placeholder="Enter Your Name here"
                className="border-[#D9D9D9] border rounded-sm px-2.5 pl-12 py-4 text-[#9D9D9D]"
              />
              {errors.name && (
                <p className="text-red-600 font-[latoBold]">
                  {errors.name.message}
                </p>
              )}
              <Image
                width={24}
                height={24}
                src="./signIn.svg"
                alt="avatar"
                className="absolute w-6 h-6 top-[54px] left-[10px] "
              />
            </div>
            <div className="flex flex-col space-y-3 relative">
              <label htmlFor="email" className="text-white">
                Email
              </label>
              <input
                {...register("email")}
                type="text"
                id="email"
                placeholder="Enter Your Email here"
                className="border-[#D9D9D9] border rounded-sm px-2.5 pl-12 py-4 text-[#9D9D9D]"
              />
              {errors.email && (
                <p className="text-red-600 font-[latoBold]">
                  {errors.email.message}
                </p>
              )}
              <img
                src="./mail.svg"
                alt="avatar"
                className="absolute w-6 h-6 top-[54px] left-[10px] "
              />
            </div>
            <div className="flex flex-col space-y-3">
              <label htmlFor="description" className="text-white">
                Description
              </label>
              <textarea
                {...register("description")}
                id="description"
                placeholder="Tell us about your concerns"
                className="resize-none border-[#D9D9D9] border rounded-sm px-2.5 py-4 text-[#9D9D9D]"
                rows={5}
              ></textarea>
              {errors.description && (
                <p className="text-red-600 font-[latoBold]">
                  {errors.description.message}
                </p>
              )}
            </div>
            <button
              className="bg-[#4172DC] rounded-sm px-8 py-4 text-white font-[latoRegular] cursor-pointer"
              type="submit"
            >
              {formMutation.isPending ? "Sending ... " : "SEND"}
            </button>
          </form>
        </div>
        <img
          src="./heroLeft.png"
          alt="shopping"
          className="w-[630px] h-full object-cover flex-1"
        />
      </div>
    </div>
  );
};

export default AboutUs;
