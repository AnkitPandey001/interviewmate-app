import { Routes, Route } from "react-router-dom";
import { PublicLayout } from "./layouts/public-layout";
import { Home } from "./routes/home";
import { AuthenticationLayout } from "./layouts/auth-layout";
import { SignIn } from "./routes/sign-in";
import { SignUp } from "./routes/signu-up";
import { ProtectedRoutes } from "./layouts/protected-routes";
import { Dashboard } from "./routes/dashboard";
import { PrivateLayout } from "./layouts/private-layout";
import { CreateEditPages } from "./routes/create-edit-page";
import { FormMockInterviews } from "./components/form-mock";
import { About } from "./routes/about";
import { Services } from "./routes/service";
import { ContactUs } from "./routes/contactus";
import { MockLoadPages } from "./routes/mock-load-pages";
import { StartInterviewsPage } from "./routes/start-interviews-pages";
import { Feedback } from "./routes/feedback";

function App() {
  return (
    <>
      <Routes>
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="/about" element={<About/>}/>
          <Route path="/services" element={<Services/>}/>
          <Route path="/contact" element={<ContactUs/>}/>
        </Route>

        <Route element={<AuthenticationLayout />}>
          <Route path="/sign-in/*" element={<SignIn />} />
          <Route path="/sign-up/*" element={<SignUp />} />
        </Route>

        <Route element={<PrivateLayout />}>
          <Route element={<ProtectedRoutes />}>
            <Route path="/generate" element={<Dashboard />} />
            <Route path=":interviewsId" element={<CreateEditPages/>}/>
            <Route path="/generate/create" element={<FormMockInterviews/>}/>
            <Route path="/generate/interviews/:interviewsId" element={<MockLoadPages/>}/>
            <Route path="/generate/interviews/:interviewsId/start" element={<StartInterviewsPage/>}/>
            <Route path="/feedback/:interviewId" element={<Feedback/>}/>
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
