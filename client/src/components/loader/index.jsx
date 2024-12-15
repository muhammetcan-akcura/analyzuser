'use client'

import React from 'react'
import { Box, Typography, Paper } from '@mui/material'
import { styled } from '@mui/material/styles'

const LoaderContainer = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(6),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '800px',
    margin: 'auto',
    marginTop: theme.spacing(4),
}))

const DotsWrapper = styled(Box)(({ theme }) => ({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: theme.spacing(4),
    '& div': {
        width: 16,
        height: 16,
        margin: '0 4px',
        borderRadius: '50%',
        backgroundColor: theme.palette.primary.main,
        animation: 'bounce 1.4s infinite both',
    },
    '& div:nth-child(1)': {
        animationDelay: '-0.32s',
    },
    '& div:nth-child(2)': {
        animationDelay: '-0.16s',
    },
    '& div:nth-child(3)': {
        animationDelay: '0s',
    },
}))

// Add @keyframes for bouncing animation
const keyframesStyle = `
@keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
        transform: translateY(0);
    }
    40% {
        transform: translateY(-8px);
    }
    60% {
        transform: translateY(-4px);
    }
}
`

export default function MUILoader() {
    return (
        <LoaderContainer elevation={3}>
            <style>{keyframesStyle}</style>
            <DotsWrapper>
                <div></div>
                <div></div>
                <div></div>
            </DotsWrapper>
            <Typography variant="body2" color="text.secondary">
                Yükleniyor...
            </Typography>
        </LoaderContainer>
    )
}
