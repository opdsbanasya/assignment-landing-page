import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import SignUp from "./Components/SignUp";
import Account from "./Components/Account";
import SignIn from "./Components/SignIn";

function App() {
  return (
    <div className="w-screen h-screen py-2 md:bg-zinc-200">
      <div className="w-full md:w-[60%] lg:w-[50%] xl:w-[30%] h-full mx-auto rounded-lg bg-white md:shadow-lg">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/register" element={<SignUp />} />
          <Route path="/login" element={<SignIn />} />
          <Route path="/account" element={<Account />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
