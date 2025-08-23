function App() {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: '#f3f4f6', padding: '20px' }}>
      <header style={{ backgroundColor: '#2563eb', color: 'white', padding: '16px', borderRadius: '8px' }}>
        <h1 style={{ fontSize: '24px', fontWeight: 'bold', margin: 0 }}>BarberQueue</h1>
        <p style={{ fontSize: '14px', margin: '4px 0 0 0' }}>Book appointments, skip the wait!</p>
      </header>
      
      <main style={{ maxWidth: '1200px', margin: '20px auto', padding: '0 16px' }}>
        <div style={{ backgroundColor: 'white', borderRadius: '8px', padding: '24px', boxShadow: '0 2px 4px rgba(0,0,0,0.1)' }}>
          <h2 style={{ fontSize: '20px', fontWeight: '600', marginBottom: '16px' }}>Welcome to BarberQueue</h2>
          <p style={{ color: '#666', marginBottom: '16px' }}>Frontend is working! Backend test:</p>
          <button 
            style={{ backgroundColor: '#2563eb', color: 'white', padding: '8px 16px', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
            onClick={testBackend}
          >
            Test Backend Connection
          </button>
        </div>
      </main>
    </div>
  );

  async function testBackend() {
    try {
      const response = await fetch('http://localhost:5000/api/test');
      const data = await response.json();
      alert(`Backend says: ${data.message}`);
    } catch (error) {
      alert('Backend connection failed: ' + error.message);
    }
  }
}

export default App;