
import { useRef, useState } from "react";

export default function Home() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [aberto, setAberto] = useState(false);

  const abrirPresente = () => {
    setAberto(true);
    if (audioRef.current) {
      audioRef.current.volume = 0.4;
      audioRef.current.play();
    }
  };

  return (
    <div style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      color: "#fff",
      fontFamily: "sans-serif"
    }}>
      {!aberto ? (
        <button
          onClick={abrirPresente}
          style={{
            fontSize: "26px",
            padding: "22px 44px",
            borderRadius: "12px",
            cursor: "pointer"
          }}
        >
          🎁 Abrir o presente
        </button>
      ) : (
        <h1>🎉 Feliz Aniversário! 🎂</h1>
      )}

      <audio ref={audioRef} src="/happy-birthday.mp3" />
    </div>
  );
}
