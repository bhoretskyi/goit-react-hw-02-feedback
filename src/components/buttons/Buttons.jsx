export function Buttons({ handleFeedbackClick }) {
  return (
    <div>
      <button
        type="button"
        onClick={() => {
          handleFeedbackClick('good');
        }}
      >
        good
      </button>
      <button
        type="button"
        onClick={() => {
          handleFeedbackClick('neutral');
        }}
      >
        neutral
      </button>
      <button
        type="button"
        onClick={() => {
          handleFeedbackClick('bad');
        }}
      >
        bad
      </button>
    </div>
  );
}
