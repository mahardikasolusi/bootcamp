import React, {useState, useEffect} from "react"

const Example = ()=>{
  // Deklarasi variabel state baru yang kita sebut "count"
  const [count, setCount] = useState(0);
  
  // Mirip dengan componentDidMount dan componentDidUpdate:
  useEffect(() => {
    // Memperbarui judul dokumen menggunakan API browser
    if (count > 5){
      document.title = `You clicked ${count} times`;
    }
  });
  
  const handleCount = () => setCount(count + 1)
  
  return (
    <div>
      <p>Anda menekan sebanyak {count} kali</p>
      <button onClick={handleCount}>
        Klik saya
      </button>
    </div>
  )
}

export default Example
