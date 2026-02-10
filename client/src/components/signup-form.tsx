"use client";
import React, { useState } from "react";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import {
  IconBrandGithub,
  IconBrandGoogle,
} from "@tabler/icons-react";

export default function AuthForm() {
  const [mode, setMode] = useState<"login" | "signup">("login");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(mode, "submitted");
  };

  return (
    <div className="mx-auto w-full max-w-md rounded-2xl border border-zinc-800 bg-zinc-950 p-8 shadow-xl shadow-black/30">
      {/* Toggle */}
      <div className="mb-6 flex rounded-md bg-zinc-900 p-1">
        <ToggleButton
          active={mode === "login"}
          onClick={() => setMode("login")}
        >
          Login
        </ToggleButton>
        <ToggleButton
          active={mode === "signup"}
          onClick={() => setMode("signup")}
        >
          Sign up
        </ToggleButton>
      </div>

      {/* Title */}
      <h2 className="text-xl font-semibold text-zinc-100">
        {mode === "login" ? "Welcome back" : "Create your account"}
      </h2>

      <p className="mt-2 max-w-sm text-sm text-zinc-400">
        {mode === "login"
          ? "Login to continue to your dashboard"
          : "Sign up to start tracking your expenses"}
      </p>

      <form className="my-8" onSubmit={handleSubmit}>
        {mode === "signup" && (
          <div className="mb-4 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
            <LabelInputContainer>
              <Label className="text-zinc-400">First name</Label>
              <DarkInput placeholder="Tyler" />
            </LabelInputContainer>

            <LabelInputContainer>
              <Label className="text-zinc-400">Last name</Label>
              <DarkInput placeholder="Durden" />
            </LabelInputContainer>
          </div>
        )}

        <LabelInputContainer className="mb-4">
          <Label className="text-zinc-400">Email</Label>
          <DarkInput placeholder="you@email.com" type="email" />
        </LabelInputContainer>

        <LabelInputContainer className="mb-8">
          <Label className="text-zinc-400">Password</Label>
          <DarkInput placeholder="••••••••" type="password" />
        </LabelInputContainer>

        <button
          className="group/btn relative h-10 w-full rounded-md bg-zinc-100 font-medium text-zinc-900 transition hover:bg-white"
          type="submit"
        >
          {mode === "login" ? "Login →" : "Sign up →"}
          <BottomGradient />
        </button>

        <div className="my-8 h-px w-full bg-zinc-800" />

        <div className="flex flex-col space-y-4">
          <SocialButton icon={<IconBrandGithub />} label="GitHub" />
          <SocialButton icon={<IconBrandGoogle />} label="Google" />
        </div>
      </form>
    </div>
  );
}

/* ---------- Small Components ---------- */

const ToggleButton = ({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) => (
  <button
    onClick={onClick}
    type="button"
    className={cn(
      "w-full rounded-md py-2 text-sm transition",
      active
        ? "bg-zinc-800 text-white"
        : "text-zinc-400 hover:text-zinc-200"
    )}
  >
    {children}
  </button>
);

const DarkInput = (props: React.ComponentProps<typeof Input>) => (
  <Input
    {...props}
    className={cn(
      "bg-zinc-900 border border-zinc-800 text-zinc-100 placeholder:text-zinc-500 focus:border-zinc-600 focus:ring-0",
      props.className
    )}
  />
);

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
    <BottomGradient />
  </button>
);

const BottomGradient = () => (
  <>
    <span className="absolute inset-x-0 -bottom-px h-px w-full bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
    <span className="absolute inset-x-10 mx-auto h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
  </>
);

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <div className={cn("flex w-full flex-col space-y-2", className)}>
    {children}
  </div>
);