const LETTERS = "ABCD";

export default function Question({
  question,
  number,
  selected,
  revealed,
  onSelect,
  onReveal,
}) {
  const optionClass = (i) => {
    if (revealed) {
      if (i === question.answer) return "opt correct";
      if (i === selected) return "opt wrong";
      return "opt";
    }
    return i === selected ? "opt selected" : "opt";
  };

  return (
    <div className="card">
      <div className="meta">
        Q{number} · {question.source}
      </div>
      <p className="q">{question.question}</p>

      <div className="opts">
        {question.options.map((text, i) => (
          <button
            key={i}
            className={optionClass(i)}
            disabled={revealed}
            onClick={() => onSelect(question.id, i)}
          >
            <span className="letter">{LETTERS[i]}</span>
            <span>{text}</span>
          </button>
        ))}
      </div>

      <button
        className="show"
        disabled={revealed}
        onClick={() => onReveal(question.id)}
      >
        {revealed ? "Answer shown" : "Show answer"}
      </button>

      {revealed && <p className="expl">{question.explanation}</p>}
    </div>
  );
}
