function CardWrapper({ title, children }) {
  return (
    <div
      className="card mb-4 border-0 shadow-lg"
      style={{
        borderRadius: "15px",
        transition: "all 0.3s ease",
      }}
    >
      <div className="card-body">
        <h4 className="fw-bold mb-3 text-dark">
          {title}
        </h4>

        <div>{children}</div>
      </div>
    </div>
  );
}

export default CardWrapper;