import { Box } from '@mui/material';

export default function AuthLayout({children}: {children: React.ReactNode}){
    return (
        <Box className="h-screen flex items-center justfy-center">
            {children}
        </Box>
    )
}