import { useEffect, useState } from "react";
import { getGuests, getGuest } from "./components/api";
import GuestList from "./components/GuestList";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchGuests() {
      const guestsFromApi = await getGuests();
      setGuests(guestsFromApi);
    }

    fetchGuests();
  }, []);

  return (
    <main>
      <h1>Guest List</h1>

      {selectedGuest ? (
        <section>
          <h2>{selectedGuest.name}</h2>
          <p>{selectedGuest.email}</p>
          <p>{selectedGuest.phone}</p>
          <p>{selectedGuest.bio}</p>
          <p>{selectedGuest.job}</p>
          <button onClick={() => setSelectedGuestId(null)}>Back</button>
        </section>
      ) : (
        <GuestList guests={guests} onSelectGuest={setSelectedGuestId} />
      )}
    </main>
  );
}
