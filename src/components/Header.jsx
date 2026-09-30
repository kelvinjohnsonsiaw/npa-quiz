export default function Header({ page, totalPages, answered, total }) {
  return (
    <header>
      <h1>NPA Ghana Petroleum Quiz</h1>
      <div className="bar">
        <i style={{ width: `${(answered / total) * 100}%` }} />
      </div>
      <div className="sub">
        <span>
          Page {page + 1} of {totalPages}
        </span>
        <span>
          Answered {answered}/{total}
        </span>
      </div>
    </header>
  );
}
