import React from 'react'
import logo from '../../resources/images/logo_remise.png'
import { Box, Container, Link, Stack,  Typography } from '@mui/material';

const logoStyle = {
    width: '70px',
    height: 'auto',
  };


function Copyright() {
    return (
      <Typography variant="body2" color="text.secondary" mt={1}>
        {'Copyright © '}
        <Link href="/">Remise&nbsp;</Link>
        {new Date().getFullYear()}
      </Typography>
    );
  }

function FooterComponent() {
  return (
    <Container
    sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: { xs: 4, sm: 8 },
      py: { xs: 8, sm: 10 },
      textAlign: { sm: 'center', md: 'left' },
    }}
  >
    <Box
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', sm: 'row' },
        width: '100%',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 4,
          minWidth: { xs: '100%', sm: '60%' },
        }}
      >
        <Box sx={{ width: { xs: '100%', sm: '60%' }}}>
          <Box sx={{ ml: '-22px', marginLeft: '0px'}}>
            <img
              src={logo}
              style={logoStyle}
              alt="logo of sitemark"
            />
          </Box>
          <Typography variant="body2" fontWeight={600} gutterBottom>
            NHÓM 8
          </Typography>
          <Typography variant="body2" color="text.secondary" mb={2}>
            Đăng ký nhận bản tin của chúng tôi để biết thông tin cập nhật và khuyến mãi hàng tuần.
          </Typography>
        </Box>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          Product
        </Typography>
        <Link color="text.secondary" href="#">
          Features
        </Link>
        <Link color="text.secondary" href="#">
          Testimonials
        </Link>
        <Link color="text.secondary" href="#">
          Highlights
        </Link>
        <Link color="text.secondary" href="#">
          Pricing
        </Link>
        <Link color="text.secondary" href="#">
          FAQs
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          Company
        </Typography>
        <Link color="text.secondary" href="#">
          About us
        </Link>
        <Link color="text.secondary" href="#">
          Careers
        </Link>
        <Link color="text.secondary" href="#">
          Press
        </Link>
      </Box>
      <Box
        sx={{
          display: { xs: 'none', sm: 'flex' },
          flexDirection: 'column',
          gap: 1,
        }}
      >
        <Typography variant="body2" fontWeight={600}>
          Legal
        </Typography>
        <Link color="text.secondary" href="#">
          Terms
        </Link>
        <Link color="text.secondary" href="#">
          Privacy
        </Link>
        <Link color="text.secondary" href="#">
          Contact
        </Link>
      </Box>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'space-between',
        pt: { xs: 4, sm: 8 },
        width: '100%',
        borderTop: '1px solid',
        borderColor: 'divider',
      }}
    >
      <div>
        <Link color="text.secondary" href="#">
          Privacy Policy
        </Link>
        <Typography display="inline" sx={{ mx: 0.5, opacity: 0.5 }}>
          &nbsp;•&nbsp;
        </Typography>
        <Link color="text.secondary" href="#">
          Terms of Service
        </Link>
        <Copyright />
      </div>
      <Stack
        direction="row"
        justifyContent="left"
        spacing={1}
        useFlexGap
        sx={{
          color: 'text.secondary',
        }}
      >
        {/* <IconButton
          color="inherit"
          href="https://github.com/mui"
          aria-label="GitHub"
          sx={{ alignSelf: 'center' }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://twitter.com/MaterialUI"
          aria-label="X"
          sx={{ alignSelf: 'center' }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          color="inherit"
          href="https://www.linkedin.com/company/mui/"
          aria-label="LinkedIn"
          sx={{ alignSelf: 'center' }}
        >
          <LinkedInIcon />
        </IconButton> */}
      </Stack>
    </Box>
  </Container>
  )
}

export default FooterComponent