export default function ScoreCard({ score, total, answered, onRestart }) {
  const unanswered = total - answered;

  return (
    <div className="card score">
      <div className="meta">Total score</div>
      <div className="big">
        {score} / {total}
      </div>
      <div>{Math.round((score / total) * 100)}% correct</div>

      {unanswered > 0 && (
        <p className="expl">
          {unanswered} question(s) still unanswered. Answers are locked once you
          tap Show answer.
        </p>
      )}

      <button
        className="btn ghost"
        style={{ marginTop: 12 }}
        onClick={onRestart}
      >
        Restart quiz
      </button>
    </div>
  );
}
