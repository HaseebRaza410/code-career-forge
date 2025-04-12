
import { RegisterForm } from "@/components/auth/RegisterForm";

const Register = () => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-muted/30 px-4 py-12">
      <div className="w-full max-w-md">
        <div className="mb-8 text-center">
          <div className="flex items-center justify-center">
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-brand-purple text-white font-bold text-xl">
              CF
            </div>
          </div>
          <h1 className="mt-3 text-3xl font-bold">CodeForge</h1>
          <p className="text-muted-foreground">Your path to becoming a full-stack developer</p>
        </div>
        
        <RegisterForm />
      </div>
    </div>
  );
};

export default Register;
