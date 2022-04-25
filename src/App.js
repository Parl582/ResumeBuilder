
import './App.scss';
import { Box, Container, CssBaseline, Paper } from '@mui/material';
import Form from './Form';

function App() {
  return (
    <>
      {/* <div className="app"> */}
        {/* <Inputfield/>
    <Resume/> */}
      {/* <Routes>
        <Route path="/" element={<Inputfield/>} />
      
        <Route path="/second" element={<SeconsField/>} />
        <Route path="/home" element={<Resume/>} />
      </Routes>
    </div> */}

<CssBaseline />
      <Container component={Box} p={4}>
        <Paper component={Box} p={3}>
          <Form />
        </Paper>
      </Container>


    </>
  );
}

export default App;
