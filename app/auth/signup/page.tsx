"use client";

import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from 'next/link'
import { useFormState } from "react-dom";
import createUser from "./create-user";

export default function Signup() {
    const [state, formAction] = useFormState(createUser, { error: "" })

    return (
        <form action={formAction}>
            <Stack spacing={2} className="w-full max-w-xs">
                <TextField label="Email" variant="outlined" type="email" />
                <TextField label="Password" variant="outlined" type="password" />
                <Button type="submit" variant="contained">Signup</Button>
                <Link component={NextLink} href="/auth/login" className="self-center">Login</Link>
            </Stack>
        </form>
    )
}