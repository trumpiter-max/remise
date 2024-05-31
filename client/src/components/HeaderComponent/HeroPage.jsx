import { Typography } from '@mui/material'
import { Box, Container, Stack } from '@mui/system'
import React from 'react'

import i18n from "i18next";
import { useTranslation } from "react-i18next";

function HeroPage() {
  const { t, i18n } = useTranslation();
  return (
    <Box
      id="hero"
      sx={(theme) => ({
        width: '100%',
        // backgroundSize: '100% 20%',
        backgroundRepeat: 'no-repeat',
        pt: { xs: 14, sm: 20 },
        pb: { xs: 8, sm: 1 },
        backgroundImage: 'linear-gradient(to bottom, rgba(52, 152, 219, 0.4), #ffffff)',

      })}
    >
      <Container
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <Stack spacing={2} useFlexGap sx={{ width: { xs: '100%', sm: '70%' } }}>
          <Typography
            variant="h1"
            sx={{
              display: 'flex',
              flexDirection: { xs: 'column', md: 'row' },
              alignSelf: 'center',
              textAlign: 'center',
              fontSize: 'clamp(3.5rem, 10vw, 4rem)',
            }}
          >
            {/* Our latest&nbsp; */}
            <Typography
              component="span"
              variant="h1"
              sx={{
                fontSize: 'clamp(3rem, 10vw, 4rem)',
                color: (theme) =>
                  theme.palette.mode === 'light' ? 'primary.main' : 'primary.light',
              }}
            >
              REMISE WEBSITE
            </Typography>
          </Typography>
          <Typography
            textAlign="center"
            color="text.secondary"
            sx={{ alignSelf: 'center', width: { sm: '100%', md: '80%' } }}
          >
            {t("title")}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}

export default HeroPage