import React from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import Login from './pages/Login';
import CodeEditor from './components/CodeEditor';
import AuthRoute from './components/AuthRoute';
import PlaceHolder from './components/Placeholder';
import ProblemPage from './pages/ProblemPage';

const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Navigate to='/login' />} />
      <Route path='/login' element={<Login />} />
      <Route element={<AuthRoute />}>
        <Route path='/assignment' element={<MainPage />}>
          <Route path='step-1' element={<ProblemPage />} />
          <Route path='step-2' element={<PlaceHolder elementName='Step 2' />} />
          <Route path='step-3' element={<PlaceHolder elementName='Step 3' />} />
          <Route path='step-4' element={<PlaceHolder elementName='Step 4' />} />
          <Route path='step-5' element={<CodeEditor />} />
          <Route path='step-6' element={<PlaceHolder elementName='Step 6' />} />
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);

export default App;
