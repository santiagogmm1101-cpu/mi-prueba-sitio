const App = () => {
  const styles = {
    container: {
      maxWidth: '900px',
      margin: '0 auto',
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center'
    },
    title: {
      fontSize: '3rem',
      marginBottom: '10px'
    },
    subtitle: {
      color: '#555',
      marginBottom: '20px'
    },
    card: {
      background: '#f7f7f7',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 6px 18px rgba(0,0,0,0.08)',
      marginTop: '20px',
      textAlign: 'left'
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>santiago hernandez</h1>
      <p style={styles.subtitle}>Este es un proyecto simple listo para publicar.</p>

      <div style={styles.card}>
        <h2>¿Cómo usar esto?</h2>
        <ol>
          <li>Abre <code>index.html</code> en tu navegador.</li>
          <li>Modifica los textos o agrega secciones en <code>app.jsx</code>.</li>
          <li>Sube la carpeta completa a Netlify, GitHub Pages o Vercel.</li>
        </ol>
      </div>

      <div style={styles.card}>
        <h2>Ejemplo de sección</h2>
        <p>Agrega más componentes como tarjetas, botones y menús.</p>
        <button onClick={() => alert('Bienvenido a mi sitio React!')}>Presiona aquí</button>
      </div>
    </div>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />);