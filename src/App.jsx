import { createTheme, ThemeProvider } from '@mui/material/styles';
import { yellow, brown } from '@mui/material/colors';
import './App.css';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import { Paper } from '@mui/material';
import { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SinglePost from './components/SinglePost/SinglePost'
import AddPost from './components/AddPost/AddPost';
import UpdatePost from './components/UpdatePost/UpdatePost';

// function App() {
//   const [darkMode, setDarkMode] = useState(false)
//   const theme = createTheme({
//     palette: {
//       primary: {
//         main: yellow[800]
//       },
//       secondary: {
//         main: brown[600]
//       },
//       mode: darkMode ? "dark" : "light"
//     }
//   })
//   return (
//     <>
//       <BrowserRouter>
//         <ThemeProvider theme= {theme}>
//           <Paper sx={{p: "2rem"}}>
//             <Header checked= {darkMode} onChange= {() => setDarkMode(!darkMode)}/>
//             <Routes>
//             <Route exact path='/' element= {<Home />}/>
//             <Route exact path='/about' element={<About title="Hello About" content="What is the error" />}/>
//             <Route path='/single/:id' element={<SinglePost />}/>
//             <Route path='/add' element={<AddPost />}/>
//             <Route path='/update/:id' element={<UpdatePost />}/>
//             </Routes>
//           </Paper>
//         </ThemeProvider>
//       </BrowserRouter>
//     </>
//   );
// }
// export default App;
function App() {
  const [darkMode, setDarkMode] = useState(false);

  const theme = createTheme({
    palette: {
      primary: {
        main: yellow[800],
      },
      secondary: {
        main: brown[600],
      },
      mode: darkMode ? 'dark' : 'light',
    },
  });

  const darkModeStyles = {
    height: '100%',
    backgroundColor: theme.palette.mode === 'dark' ? '#121212' : '#ffffff',
    color: theme.palette.mode === 'dark' ? '#ffffff' : '#000000', 
  };

  return (
    <>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <div style={darkModeStyles}>
            <Paper sx={{maxWidth: "80%", mx: "auto", p: '2rem' }}>
              <Header checked={darkMode} onChange={() => setDarkMode(!darkMode)} />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/single/:id' element={<SinglePost />} />
                <Route path='/add' element={<AddPost />} />
                <Route path='/update/:id' element={<UpdatePost />} />
              </Routes>
            </Paper>
          </div>
        </ThemeProvider>
      </BrowserRouter>
    </>
  );
}

export default App;

