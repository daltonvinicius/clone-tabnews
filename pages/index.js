export default function Home() {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>💖 Oi Letícia 💖</h1>

      <p style={styles.text}>
        Eu só queria aproveitar esse momento pra te dizer que você é muito
        especial pra mim.  
        Obrigado por fazer meus dias mais leves e bonitos. ✨  
      </p>

      <p style={styles.signature}>Com carinho, do seu admirador 💌</p>
    </div>
  );
}

const styles = {
  container: {
    height: "100vh",
    background: "linear-gradient(135deg, #ff9a9e, #fad0c4)",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
    padding: "20px",
    animation: "fadeIn 2s ease",
  },
  title: {
    fontSize: "3rem",
    color: "#fff",
    textShadow: "0 3px 10px rgba(0,0,0,0.2)",
    marginBottom: "20px",
  },
  text: {
    fontSize: "1.4rem",
    maxWidth: "600px",
    color: "#fff",
    lineHeight: "1.6"
