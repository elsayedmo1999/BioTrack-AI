function Navbar() {
  return (
    <nav
      className="navbar navbar-dark"
      style={{
        background: "#1e293b",
        padding: "15px 30px",
      }}
    >
      <span
        className="navbar-brand mb-0 h1"
        style={{ color: "white" }}
      >
        Biomedical Engineering Department
      </span>

      <span style={{ color: "#38bdf8", fontWeight: "bold" }}>
        BioTrack AI
      </span>
    </nav>
  );
}

export default Navbar;