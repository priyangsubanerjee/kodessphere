export const RaiseHandRequest = async (
  pid,
  name,
  arena,
  category,
  room,
  message
) => {
  let messageString = `Team: ${pid}%0A%0AName: ${name}%0A%0AArena: ${arena}%0A%0ACategory: ${category}%0A%0ARoom: ${room}%0A%0A%0AMessage: ${message}`;
  await fetch("/api/raise-hand", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ message: messageString }),
  });
};
