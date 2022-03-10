import { useState, useCallback } from "react";
import { useEventListener } from "../../hooks/useEventListener";

function EventListener() {
  // State for storing mouse coordinates
  const [coords, setCoords] = useState({ x: 0, y: 0 });
  // Event handler utilizing useCallback ...
  // ... so that reference never changes.
  const handler = useCallback(
    ({ clientX, clientY }) => {
      // Update coordinates
      setCoords({ x: clientX, y: clientY });
    },
    [setCoords]
  );
  // Add event listener using our hook
  useEventListener("mousemove", handler);
  return (
    <h1>
      The mouse position is ({coords.x}, {coords.y})
    </h1>
  );
}

export default EventListener;
