import { cn } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@radix-ui/react-tabs";
import { Volume2, VolumeX } from "lucide-react";
import { useState } from "react";
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
  } from "@/components/ui/tooltip";
  import { Button } from "@/components/ui/button";
import { RecordAnswer } from "./record-answer";

interface QuestionFormProps {
  questions: {
    question: string;
    answer: string;
  }[];
}

export const QuestionForm: React.FC<QuestionFormProps> = ({ questions }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isWebCam, setIsWebCam] = useState(false);

  const [currentSpeech, setCurrentSpeech] =
    useState<SpeechSynthesisUtterance | null>(null);

  const handlePlayQuestion = (str: string) => {
      if(isPlaying && currentSpeech){
        setIsPlaying(false)
        setCurrentSpeech(null)
      }else{
         if("speechSynthesis" in window){
            const speech =new SpeechSynthesisUtterance(str)
            window.speechSynthesis.speak(speech);
            setIsPlaying(true)
            setCurrentSpeech(speech)

            speech.onend =()=>{
                setIsPlaying(false)
                setCurrentSpeech(null)
            }
         }
      }
  };

  return (
    <div className="w-full min-h-96 border rounded-md p-4 mt-6">
      <Tabs
        defaultValue={questions[0]?.question}
        className="w-full space-y-12 cursor-pointer"
        orientation="vertical"
      >
        <TabsList className=" bg-transparent  w-full flex  flex-wrap items-center justify-start gap-4">
          {questions?.map((tab, i) => (
            <TabsTrigger
              className={cn(
                " rounded-lg data-[state=active]:bg-emerald-200 p-2 cursor-pointer data-[state=active]:shadow-md text-xs px2"
              )}
              key={tab.question}
              value={tab.question}
            >
              {`Question #${i + 1}`}
            </TabsTrigger>
          ))}
        </TabsList>

        {questions?.map((tab, index) => (
          <TabsContent key={index} value={tab.question}>
            <p className="text-base text-left tracking-wide text-neutral-500">
              {tab.question}
            </p>

            <div className="w-full flex items-center justify-end">
              <TooltipProvider>
                <Tooltip>
                  <TooltipTrigger asChild>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => handlePlayQuestion(tab.question)}
                    >
                      {isPlaying ? (
                        <VolumeX className="min-w-5 min-h-5 text-muted-foreground" />
                      ) : (
                        <Volume2 className="min-w-5 min-h-5 text-muted-foreground" />
                      )}
                    </Button>
                  </TooltipTrigger>
                  <TooltipContent side="top">
                    <p>{isPlaying ? "stop" : "start"}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            </div>

             <RecordAnswer
              question={tab}
              isWebCam={isWebCam}
              setIsWebCam={setIsWebCam}
              />

          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};
