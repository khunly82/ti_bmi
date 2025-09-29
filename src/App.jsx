import { useState } from 'react';
import './App.css';
import { TextField, Button }  from '@mui/material'
import classNames from 'classnames'

function App() {

  const [result, setResult] = useState(null);
  const [form, setForm] = useState({ w: 0, h: 0 });

  function calculer() {
    setResult((form.w / (form.h ** 2)).toFixed(2))
  }

  return <>
    <div style={{ display: 'flex', gap: '1em', marginBottom: '1em' }}>
      <TextField value={form.h}
                 onChange={e => setForm({ ...form, h: e.target.value })} 
                 variant='outlined' label="Taille"></TextField>
      <TextField value={form.w} 
                 onChange={e => setForm({ ...form, w: e.target.value })} 
                 variant='outlined' label="Poids"></TextField>
    </div>
    <div style={{ marginBottom: '1em' }}>
      <Button onClick={calculer} 
              variant='contained' 
              color='secondary'>Calculer</Button>
    </div>
    { result && 
      // afficher une class en fonction d'une condition
      // nécessite classnames (npm install classnames) 
      <div className={ classNames({ 
        'red': result > 25, 
        'green': result <= 25 
      }) }>
        Votre BMI = { result }
      </div>
    }
  </>
}

export default App
