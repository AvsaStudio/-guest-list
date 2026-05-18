export default function GuestList({ guests, onSelectGuest, selectedGuestId }) {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
          </tr>
        </thead>

        <tbody>
          {guests.map((guest) => (
            <tr
              key={guest.id}
              onClick={() => onSelectGuest(guest.id)}
              className={selectedGuestId === guest.id ? "selected" : ""}
            >
              <td>{guest.name}</td>
              <td>{guest.email}</td>
              <td>{guest.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <p>Select a guest to see more details.</p>
    </>
  );
}
