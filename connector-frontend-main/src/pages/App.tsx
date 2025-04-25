export default function App() {
  return (
    <main style={{
      fontFamily: 'Arial, sans-serif',
      padding: '4rem 2rem',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      textAlign: 'center',
      background: 'linear-gradient(to bottom, #f9f9f9, #ffffff)',
      minHeight: '100vh'
    }}>
      <h1 style={{ fontSize: '2.75rem', fontWeight: 700, marginBottom: '1rem' }}>
        Answer every call. Capture every order.
      </h1>
      <p style={{ fontSize: '1.25rem', maxWidth: '600px', marginBottom: '2rem', color: '#555' }}>
        AI phone ordering that syncs with your POS — so you never miss a customer again.
      </p>
      <a href="#" style={{
        padding: '0.85rem 1.75rem',
        fontSize: '1rem',
        backgroundColor: '#000',
        color: '#fff',
        borderRadius: '8px',
        textDecoration: 'none',
        boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)'
      }}>
        Try a Demo Call
      </a>
    </main>
  );
}
