import { db } from "@/config/firebase.config";
import { Interviews } from "@/types";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { LoaderPage } from "./loader-page";
import Webcam from "react-webcam";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Home, Lightbulb, Sparkle, WebcamIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { InterviewsPin } from "@/components/interviews-pin";
import { Skeleton } from "@/components/ui/skeleton";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export const MockLoadPages = () => {
  const { interviewsId } = useParams<{ interviewsId: string }>();
  const [interviews, setInterviews] = useState<Interviews | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isWebCanEnabled, setIsWebCanEnabled] = useState(false);

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
    <div className="flex flex-col w-full gap-8 py-5">
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
              <BreadcrumbPage className="text-muted-foreground">
                {interviews?.position || "Interview Position"}
              </BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
        <Link to={`/generate/interviews/${interviewsId}/start`}>
          <Button className="ml-2" size={"sm"}>
            Start <Sparkle />
          </Button>
        </Link>
      </div>

      <div className="px-4 md:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {isLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-32 rounded-xl shadow-sm" />
            ))
          ) : (
            <InterviewsPin data={interviews} />
          )}
        </div>
        <Alert className="bg-yellow-100/50 border-yellow-200 p-4 rounded-lg mt-6">
          <Lightbulb className="h-5 w-5 text-yellow-600" />
          <div>
            <AlertTitle className="text-yellow-800 font-semibold">
              Enable Webcam for Interview
            </AlertTitle>
            <AlertDescription className="text-sm text-yellow-700 mt-1">
              To take part in your interview, please ensure that your webcam is
              enabled. This is required for conducting the interview and sharing
              your video.
              <br />
              <br />
              <span className="font-semibold">Important:</span> If you encounter
              any issues with your webcam, you can disable it anytime during the
              interview session.
            </AlertDescription>
          </div>
        </Alert>
      </div>
      <div className="flex items-center justify-center w-full h-full">
        <div className="w-full h-[400px] md:w-96 flex flex-col items-center justify-center border p-4 bg-gray-50 rounded-md">
          {isWebCanEnabled ? (
            <Webcam
              onUserMedia={() => setIsWebCanEnabled(true)}
              onUserMediaError={() => setIsWebCanEnabled(false)}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <WebcamIcon className="min-w-24 min-h-24 text-muted-foreground" />
          )}
        </div>
      </div>
      <div className="flex items-center justify-center">
        <Button
          className="cursor-pointer"
          onClick={() => setIsWebCanEnabled(!isWebCanEnabled)}
        >
          {isWebCanEnabled ? "Disable WebCam" : "Enable WebCam"}
        </Button>
      </div>
    </div>
  );
};
