import React from 'react';
import './App.scss';

import TotalSection from './components/TotalSection/TotalSection';
import DiagarmSection from './components/DiagramSection/DiagramSection';
import ContentSection from './components/ContentSection/ContentSection';

const App = () => (
  <div className="main">
    <TotalSection />
    <DiagarmSection />
    <ContentSection />
  </div>
);

export default App;
