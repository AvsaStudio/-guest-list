import { useState } from "react";

export default function App() {
  const [guests, setGuests] = useState([]);
  const [selectedGuestId, setSelectedGuestId] = useState(null);
  const [selectedGuest, setSelectedGuest] = useState(null);
  const [loading setLoading] = useState(false);
  const [error, setError] = useState(null);

  return <></>;
}

export async function getGuests() {}
export async function getGuest(id) {}
