"use client";

import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";

// shadcn UI
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";

// Breadcrumb
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Home } from "lucide-react";
import { chatSession } from "@/script";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuth } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";
import { db } from "@/config/firebase.config";

const formSchema = z.object({
  position: z.string().min(4, "Position must be at least 4 characters"),
  desc: z.string().min(1, "Description is required"),
  expe: z.number().min(0, "Experience must be 0 or more"),
  techStack: z.string().min(1, "Tech Stack is required"),
});

type FormData = z.infer<typeof formSchema>;

export const FormMockInterviews: React.FC = () => {
  const { userId } = useAuth();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);

  const cleanAiResponse = (responseText: string) => {
    let cleanText = responseText.trim();
    cleanText = cleanText.replace(/(json|```|`)/g, "");

    const jsonArrayMatch = cleanText.match(/\[.*\]/s);
    if (jsonArrayMatch) {
      cleanText = jsonArrayMatch[0];
    } else {
      throw new Error("No JSON array found in response");
    }

    try {
      return JSON.parse(cleanText);
    } catch (error) {
      console.log(error);
    }
  };

  const generateAiResponse = async (data: FormData) => {
    setLoading(true); 

    const prompt = `
    As an experienced prompt engineer, generate a JSON array containing **5 technical interview questions** along with detailed answers based on the following job information.

    Each object in the array should have the fields "question" and "answer", formatted as follows:

    [
      { "question": "<Question text>", "answer": "<Answer text>" },
      ...
    ]

    Job Information:
    - Job Position: ${data?.position}
    - Job Description: ${data?.desc}
    - Years of Experience: ${data?.expe}
    - Tech Stack: ${data?.techStack}

    The questions should assess skills in ${data?.techStack} development, best practices, problem-solving, and experience handling complex requirements.

    **Important:**
    - Format the output strictly as a JSON array of objects.
    - Do NOT include any extra text, labels, explanations, or code blocks.
    - Return only the raw JSON array with question and answer pairs.
    `;

    try {
      const aiResult = await chatSession.sendMessage(prompt);
      const aiResultText = aiResult?.response?.text?.();
      const trimmedResponseText = aiResultText?.trim();

      const cleanedResponseText = cleanAiResponse(trimmedResponseText);
      console.log(cleanedResponseText);

      return cleanedResponseText;
    } catch (error) {
      console.error("Error generating AI response:", error);
      toast.error("Failed to generate AI response");
    } finally {
      setLoading(false);
    }
  };

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormData) => {
    const aiResult = await generateAiResponse(data);

    if (aiResult) {
      await addDoc(collection(db, "interviews"), {
        ...data,
        userId,
        questions: aiResult,
        createdAt: serverTimestamp(),
      });

      toast.success("Interview questions generated successfully!");
    }

    navigate("/generate");
  };

  return (
    <>
      <Breadcrumb className="mt-10 ml-6">
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/"
              className="flex items-center gap-1 text-emerald-600 hover:underline"
            >
              <Home className="w-4 h-4" /> Home
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink
              href="/generate"
              className="text-emerald-600 hover:underline"
            >
              Dashboard
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage className="text-muted-foreground">
              Mock Interviews
            </BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      <div className="w-full max-w-md mx-auto mt-3 px-4 py-6 bg-white rounded-2xl shadow-md space-y-6">
        <h2 className="text-xl md:text-2xl font-bold text-center text-emerald-600">
          🧠 Mock Interview Form
        </h2>

        <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
          <div>
            <Label htmlFor="position">Position</Label>
            <Input
              id="position"
              className="h-11 text-sm mt-3"
              placeholder="e.g. Full Stack Developer"
              {...register("position")}
            />
            {errors.position && (
              <p className="text-red-500 text-sm mt-1">
                {errors.position.message}
              </p>
            )}
          </div>

          <div>
            <Label htmlFor="desc">Description</Label>
            <Textarea
              id="desc"
              className="text-sm min-h-[90px] mt-3"
              placeholder="e.g. Describe your job role or position"
              {...register("desc")}
            />
            {errors.desc && (
              <p className="text-red-500 text-sm mt-1">{errors.desc.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="expe">Experience (Years)</Label>
            <Input
              id="expe"
              type="number"
              className="h-11 text-sm mt-3"
              placeholder="e.g. 3"
              {...register("expe", { valueAsNumber: true })}
            />
            {errors.expe && (
              <p className="text-red-500 text-sm mt-1">{errors.expe.message}</p>
            )}
          </div>

          <div>
            <Label htmlFor="techStack">Tech Stack</Label>
            <Input
              id="techStack"
              className="h-11 text-sm mt-3"
              placeholder="e.g. MERN, Java, Spring Boot"
              {...register("techStack")}
            />
            {errors.techStack && (
              <p className="text-red-500 text-sm mt-1">
                {errors.techStack.message}
              </p>
            )}
          </div>

          <div className="flex justify-between gap-3">
            <Button
              type="submit"
              className="cursor-pointer w-1/2 bg-emerald-600 hover:bg-emerald-700 text-white"
              disabled={loading} 
            >
              {loading ? "Submitting..." : "Submit"} 
            </Button>
            <Button
              type="button"
              variant="outline"
              className="w-1/2 cursor-pointer"
              onClick={() => reset()}
            >
              Reset
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};
