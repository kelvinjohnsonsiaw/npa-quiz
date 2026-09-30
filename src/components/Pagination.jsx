export default function Pagination({ page, totalPages, from, to, onChange }) {
  return (
    <div className="nav">
      <button
        className="btn"
        disabled={page === 0}
        onClick={() => onChange(page - 1)}
      >
        ← Previous
      </button>
      <span className="sub">
        {from}–{to}
      </span>
      <button
        className="btn"
        disabled={page === totalPages - 1}
        onClick={() => onChange(page + 1)}
      >
        Next →
      </button>
    </div>
  );
}
