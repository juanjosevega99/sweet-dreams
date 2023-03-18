export function SleepNow({ goBack }: any) {
  const handleGoBackClick = () => {
    goBack();
  };

  return (
    <div>
      <h1>sleep now</h1>
      <input
        type="button"
        value="Go back"
        className="button-primary"
        onClick={handleGoBackClick}
      />
    </div>
  );
}
