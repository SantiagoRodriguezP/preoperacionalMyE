import React from 'react';
import { Stack } from "@mui/material";
import Image from 'next/image';

const Loader = () => {
  return (
    <Stack justifyContent="center" alignItems="center" width="100vw" height="100vh">
      <Image 
        src="./logo-sinco.svg"
        width={228}
        height={46}
        alt="Logo Sinco"
      />
    </Stack>
  )
}
export default Loader;