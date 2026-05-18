export default function GuestDetails({ guest, onBack }) {
  return (
    <section>
      <h2>{guest.name}</h2>
      <p>{guest.email}</p>
      <p>{guest.phone}</p>
      <p>{guest.bio}</p>
      <p>{guest.job}</p>

      <button type="button" onClick={onBack}>
        Back
      </button>
    </section>
  );
}
