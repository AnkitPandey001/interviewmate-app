
export const About = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10 space-y-6">
      <h1 className="text-3xl font-bold text-center text-gray-800">About InterviewMate</h1>

      <p className="text-gray-700 text-lg leading-relaxed">
        <strong>InterviewMate</strong> is your AI-powered mock interview platform designed to help you prepare for job interviews like a pro.
        Simply join a session, speak your answers, and get instant feedback based on your response. We use your camera and voice to simulate
        real interview experiences.
      </p>

      <div className="bg-white shadow-md rounded-lg p-6 border border-gray-200 space-y-4">
        <h2 className="text-xl font-semibold text-gray-800">🔍 How it works:</h2>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>You choose or generate an interview</li>
          <li>Camera and microphone are used to capture your responses</li>
          <li>Your answers are analyzed using AI models</li>
          <li>You receive detailed feedback on each question</li>
          <li>Ratings help track your progress over time</li>
        </ul>
      </div>

      <p className="text-gray-600 text-sm italic text-center">
        We respect your privacy — video/audio data is not stored unless you choose to save your session.
      </p>
    </div>
  );
};
