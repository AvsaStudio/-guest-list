export default function GuestList({ guests, onSelectGuest }) {
  return (
    <ul>
      {guests.map((guest) => (
        <li key={guest.id}>
          <button type="button" onClick={() => onSelectGuest(guest.id)}>
            <h2>{guest.name}</h2>
            <p>{guest.email}</p>
          </button>
        </li>
      ))}
    </ul>
  );
}
