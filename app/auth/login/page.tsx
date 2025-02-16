"use client"

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";
import { useActionState } from "react";
import LoginUser from "./login";

export default function Login() {
  const [state, formAction] = useActionState(LoginUser, { error: "" })

  return (
    <Stack spacing={2} className="w-full max-w-xs">
      <TextField error={!!state.error} helperText={state.error} name="email" label="Email" variant="outlined" type="email" />
      <TextField name="password" label="Password" variant="outlined" type="password" />
      <Button type="submit" variant="contained">Login</Button>
      <Link component={NextLink} href="/auth/signup" className="self-center">
        Signup
      </Link>
    </Stack>
  );
}