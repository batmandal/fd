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

  console.log(email);

  return (
    <>
      <Stack justifyContent="center" alignItems="center">
        {step === 1 && (
          <ForgotPass1 setStep={setStep} email={email} setEmail={setEmail} />
        )}
        {step === 2 && <ForgotPass2 setStep={setStep} email={email} />}
        {step === 3 && <ForgotPass3 setStep={setStep} email={email} />}
      </Stack>
      <ForgotPass1 setStep={setStep} email={email} setEmail={setEmail} />
      <ForgotPass2 setStep={setStep} email={email} setEmail={setEmail} />
      <ForgotPass3 setStep={setStep} email={email} setEmail={setEmail} />
    </>
  );
};

export default PasswordRecovery;
