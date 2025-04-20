import { Interviews } from "@/types";

export const InterviewsPin: React.FC<{ data: Interviews | null; onMockPage?: boolean }> = ({
  data,
  onMockPage = false,
}) => {
  if (!data) return null;

  return (
    <div className="bg-white p-5 rounded-xl shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300 relative flex flex-col">
      <h2 className="text-lg font-semibold text-gray-800">{data.position}</h2>
      <p className="text-gray-600 text-sm mt-1">{data.desc}</p>

      <div className="flex flex-wrap gap-2 mt-3">
        {data.techStack.split(",").map((tech, index) => (
          <span
            key={index}
            className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded-full"
          >
            {tech.trim()}
          </span>
        ))}
      </div>

      {onMockPage && (
        <p className="text-xs font-medium text-purple-500 mt-3">On Mock Page</p>
      )}

      <p className="text-xs text-gray-400 mt-3">
        {new Date(data.createdAt.seconds * 1000).toLocaleString()}
      </p>
    </div>
  );
};
