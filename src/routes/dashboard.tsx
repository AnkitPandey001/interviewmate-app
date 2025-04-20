import { Link, useNavigate } from "react-router-dom";
import { Heading } from "../components/heading";
import { Button } from "@/components/ui/button";
import { Plus, Sparkle, Trash2 } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useAuth } from "@clerk/clerk-react";
import { useEffect, useState } from "react";
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { db } from "@/config/firebase.config";
import { Interviews } from "@/types";
import { Skeleton } from "@/components/ui/skeleton";
import { toast } from "sonner";

export const Dashboard = () => {
  const [ClerkLoading, setLoading] = useState(false);
  const [interviews, setInterviews] = useState<Interviews[]>([]);
  const { userId } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (!userId) return;

    setLoading(true);

    const interviewsQuery = query(
      collection(db, "interviews"),
      where("userId", "==", userId)
    );

    const unsubscribe = onSnapshot(
      interviewsQuery,
      (snap) => {
        const interviewList: Interviews[] = snap.docs.map((doc) => {
          const data = doc.data() as Omit<Interviews, "id">;
          return {
            id: doc.id,
            ...data,
          };
        });
        setInterviews(interviewList);
        setLoading(false);
      },
      (error) => {
        console.error("Error fetching interviews:", error);
        setLoading(false);
      }
    );

    return () => unsubscribe();
  }, [userId]);

  const handleDelete = async (id: string) => {
    try {
      await deleteDoc(doc(db, "interviews", id));
      toast.success("Interview deleted");
    } catch (error) {
      console.error("Error deleting interview:", error);
      toast.error("Failed to delete interview");
    }
  };

  return (
    <>
      <div className="w-full px-4 md:px-8 mt-6">
        <div className="flex justify-between items-start w-full flex-wrap gap-2">
          <div className="flex flex-col">
            <Heading
              title="Mock Interviews Dashboard"
              description="Create and start your AI mock Interviews"
            />
          </div>

          <Link to={"/generate/create"}>
            <Button
              className="cursor-pointer flex items-center gap-2"
              size={"sm"}
            >
              <Plus size={16} />
              Add New
            </Button>
          </Link>
        </div>
      </div>

      <Separator className="my-8" />
      <div className="px-4 md:px-10 py-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {ClerkLoading ? (
            Array.from({ length: 6 }).map((_, index) => (
              <Skeleton key={index} className="h-32 rounded-xl shadow-sm" />
            ))
          ) : interviews.length > 0 ? (
            interviews.map((interview) => (
              <div
                key={interview.id}
                className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative flex flex-col"
              >
                <h2 className="text-lg font-semibold text-gray-800">
                  {interview.position}
                </h2>
                <p className="text-gray-600 text-sm mt-1">{interview.desc}</p>

                <div className="flex flex-wrap gap-2 mt-3">
                  {interview.techStack.split(",").map((tech, index) => (
                    <span
                      key={index}
                      className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
                    >
                      {tech.trim()}
                    </span>
                  ))}
                </div>

                <p className="text-xs text-gray-400 mt-3">
                  {interview.createdAt.toDate().toLocaleString()}
                </p>

                {/* Container for buttons */}
                <div className="mt-auto flex justify-between gap-4 pt-4">
                  <button
                    onClick={() => handleDelete(interview.id)}
                    className=" cursor-pointer text-red-500 hover:text-red-700"
                    title="Delete"
                  >
                    <Trash2 size={18} />
                  </button>

                  <button
                    onClick={() =>
                      navigate(`/generate/interviews/${interview.id}`)
                    }
                    className=" cursor-pointer inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow hover:from-purple-600 hover:to-indigo-700 transition-all duration-200"
                    title="Start Interview"
                  >
                    🎥 Start Interview
                  </button>
                  <button
                    onClick={()=>navigate(`/feedback/${interview.id}`)}
                    className=" cursor-pointer inline-block px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-purple-500 to-indigo-600 rounded-lg shadow hover:from-purple-600 hover:to-indigo-700 transition-all duration-200"
                    title="See Feedback of Interviews"
                  >
                    <Sparkle/>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 text-lg">
              No interviews found.
            </p>
          )}
        </div>
      </div>
    </>
  );
};
