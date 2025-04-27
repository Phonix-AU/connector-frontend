export default function App() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      backgroundColor: '#1A1E2E',
      color: '#ffffff',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>
        Answer every call. Capture every order.
      </h1>
      <p style={{ fontSize: '1.25rem', marginBottom: '2rem', color: '#b0b0b0' }}>
        AI phone ordering that syncs with your POS.
      </p>
      <a href="#" style={{
        backgroundColor: '#5AC8FA',
        color: '#000000',
        padding: '0.75rem 1.5rem',
        borderRadius: '8px',
        textDecoration: 'none',
        fontWeight: 'bold'
      }}>
        Try a Demo Call
      </a>
    </main>
  );
}