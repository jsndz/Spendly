import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import {
  IconArrowRight,
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";
import React, { useState } from "react";
import { useLogin, useSignup } from "../hook";

const Authform = () => {
  const [page, setPage] = useState<"login" | "signup">("login");
  const loginMutation = useLogin();
  const signupMutation = useSignup();
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = new FormData(e.currentTarget);

    if (page === "login") {
      const payload = {
        email: form.get("email") as string,
        password: form.get("password") as string,
      };
      loginMutation.mutate(payload);
    } else {
      const payload = {
        email: form.get("email") as string,
        password: form.get("password") as string,
        name: form.get("username") as string,
      };

      signupMutation.mutate(payload);
    }
  };

  return (
    <div className="flex h-screen items-center justify-center bg-background p-10 text-foreground">
      {/* Left image */}
      <div className="relative w-1/2">
        <img
          src="auth.jpg"
          alt="Flowers"
          className="h-full w-[90%] rounded-4xl border border-border object-cover"
        />
        <p className="absolute top-8 left-1/2 -translate-x-1/2 text-2xl font-semibold text-foreground drop-shadow-lg">
          Be part of something beautiful
        </p>
      </div>

      {/* Right form */}
      <div className="flex flex-1 flex-col">
        <h2 className="text-3xl font-bold">
          {page === "login" ? "Welcome back" : "Create your account"}
        </h2>

        <p className="mt-2 max-w-sm text-sm text-muted-foreground">
          {page === "login"
            ? "Enter your credentials to access your account"
            : "Enter your credentials to create your account"}
        </p>

        {/* Toggle */}
        <div className="mb-6 mt-6 flex rounded-md bg-muted p-1">
          <ToggleButton
            active={page === "login"}
            onClick={() => setPage("login")}
          >
            Login
          </ToggleButton>
          <ToggleButton
            active={page === "signup"}
            onClick={() => setPage("signup")}
          >
            Sign up
          </ToggleButton>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {page === "signup" && (
            <LabelInputContainer>
              <Label>Username</Label>
              <Input placeholder="Drax" type="text"  name="username"/>
            </LabelInputContainer>
          )}

          <LabelInputContainer>
            <Label>Email</Label>
            <Input placeholder="demo@spend.com" type="email" name="email" />
          </LabelInputContainer>

          <LabelInputContainer>
            <Label>Password</Label>
            <Input placeholder="*********" type="password" name="password" />
          </LabelInputContainer>

          <Button className="mt-4 w-fit">
            {page === "login" ? "Login" : "Signup"}
            <IconArrowRight className="" />
          </Button>
        </form>

        <div className="my-8 h-px w-full bg-zinc-800" />

        <div className="flex  space-y-2">
          <SocialButton icon={<IconBrandGithub />} label="GitHub" />
          <SocialButton icon={<IconBrandGoogle />} label="Google" />
        </div>
      </div>
    </div>
  );
};

const SocialButton = ({
  icon,
  label,
}: {
  icon: React.ReactNode;
  label: string;
}) => (
  <button
    className="group/btn relative flex h-10 w-full items-center space-x-3 rounded-md border border-zinc-800 bg-zinc-900 px-4 text-zinc-300 transition hover:bg-zinc-800"
    type="button"
  >
    <span className="text-zinc-400">{icon}</span>
    <span className="text-sm text-zinc-300">{label}</span>
    {/* <BottomGradient /> */}
  </button>
);

const ToggleButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={cn(
        "w-full rounded-md py-2 text-sm transition-colors",
        active
          ? "bg-card text-foreground"
          : "text-muted-foreground hover:text-foreground",
      )}
    >
      {children}
    </button>
  );
};

const LabelInputContainer = ({
  children,
  classes,
}: {
  children: React.ReactNode;
  classes?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", classes)}>
      {children}
    </div>
  );
};

export default Authform;
