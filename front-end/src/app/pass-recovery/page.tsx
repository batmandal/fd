"use client";
import { ForgotPass1 } from "@/components/ForgotPass1";
import { ForgotPass2 } from "@/components/ForgotPass2";
import { ForgotPass3 } from "@/components/ForgotPass3";
import { Stack } from "@mui/material";
import { useState } from "react";

// export default function PasswordRecovery() {
//   return (
//     <>
//       <ForgotPass1 style={{}} />
//       <ForgotPass2 />
//       <ForgotPass3 />
//     </>
//   );
// }
const PasswordRecovery = () => {
  const [step, setStep] = useState<number>(0);
  const [email, setEmail] = useState("");

  const action = () => {
    if (step == 0) {
      return <ForgotPass1 setStep={setStep} email={email} />;
    }
    if (step == 1) {
      return <ForgotPass2 setStep={setStep} email={email} />;
    }
    if (step == 2) {
      return <ForgotPass3 setStep={setStep} email={email} />;
    }
  };

  return (
    <Stack display="grid" sx={{ placeContent: "center" }}>
      {action()}
    </Stack>
  );
};

export default PasswordRecovery;
