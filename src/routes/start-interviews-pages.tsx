import { useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import { useEffect, useState } from "react";
import { Interviews } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { db } from "@/config/firebase.config";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Home, Lightbulb } from "lucide-react";
import { QuestionForm } from "@/components/question-form";

export const StartInterviewsPage = () => {
  const { interviewsId } = useParams<{ interviewsId: string }>();
  const [interviews, setInterviews] = useState<Interviews | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (interviewsId) {
        try {
          const interviewDoc = await getDoc(
            doc(db, "interviews", interviewsId)
          );

          if (interviewDoc.exists()) {
            setInterviews({
              ...interviewDoc.data(),
              id: interviewDoc.id,
            } as Interviews);
            setIsLoading(false);
          } else {
            console.log("Interview not found!");
            setIsLoading(false);
          }
        } catch (error) {
          console.error("Error fetching interview data:", error);
          setIsLoading(false);
        }
      }
    };

    fetchData();
  }, [interviewsId]);

  if (isLoading) {
    return <LoaderPage />;
  }

  return (
    <div className="m-8">
      <div className="gap-2 flex items-center">
        <Breadcrumb className="ml-3">
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
              <BreadcrumbPage className="text-emerald-600">
                {interviews?.position || "Interview Position"}
              </BreadcrumbPage>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="" className="text-muted-foreground">
                Start
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <Alert className="bg-sky-100 border border-sky-200 p-4 rounded-lg mt-6">
        <Lightbulb className="h-5 w-5 text-sky-600" />
        <div>
          <AlertTitle className="text-sky-800 font-semibold">
            Importance Notes
          </AlertTitle>
          <AlertDescription className="text-sm text-sky-700 mt-1">
            Press "Record Answer" to begin answering the question. Once you
            finish the interviews ,ypu&apos; ll receive feedback comparing your
            ans with response with the ideal answer
            <br />
            <br />
            <span className="font-semibold">Important:</span> If you encounter
            any issues with your webcam, you can disable it anytime during the
            interview session.
          </AlertDescription>
        </div>
      </Alert>
      {
        interviews?.questions && interviews?.questions.length > 0 && (
            <QuestionForm questions={interviews?.questions} />
        )
      }
    </div>
  );
};
