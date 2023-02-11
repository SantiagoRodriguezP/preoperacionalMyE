import { Stack } from "@mui/material";
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormGroup from "@mui/material/FormGroup";
import TextField from "@mui/material/TextField";
import Image from 'next/image';
import { useRouter } from "next/router";

function Login() {
  const router = useRouter();
  const login = () => {
    router.push('./home');
  }
  return (
    <Stack width="100vw" height="100vh">
      <Stack alignItems="center">
        <Image 
          src="./Login.svg" 
          alt="Logo login M&E" 
          width={430}
          height={334}
          />
      </Stack>
      <Card sx={{display:'flex', justifyContent:'center' }}>
        <CardContent sx={{position:"absolute",top:'265px',display:'flex',flexDirection:'column',justifyContent:'center', width:428, height:600, backgroundColor:"white", borderRadius:"16px 16px 0px 0px"}}>
          <Stack alignItems="center">
            <Image
              src="./logoM&E.svg"
              alt="Logo M&E"
              width={71}
              height={73}
            />
            <Typography variant="body1" mt={1}>Maquinaria y Equipos</Typography>
          </Stack>
          <Stack gap={3}  pl={7} pr={7} mt={3}>
            <TextField id="usuario" label="Usuario" variant="outlined"/>
            <TextField id="contraseña" label="Contraseña" variant="outlined"/>
            <FormGroup>
              <FormControlLabel control={<Checkbox />} label="Recuerdame" />
            </FormGroup>
            <Button variant="contained" onClick={login}>Ingresar</Button>
            <Stack flexDirection="row" justifyContent="center" alignItems="center" mt={3}>
              <Typography variant="body1" sx={{color:'#8F95B2'}} mr={2}>By</Typography>
              <Image
                src="./logo-sinco.svg"
                alt="Logo Sinco"
                width={119}
                height={24}
                />
          </Stack>
          </Stack>
        </CardContent>
      </Card>
    </Stack>
  )
}

export default Login;