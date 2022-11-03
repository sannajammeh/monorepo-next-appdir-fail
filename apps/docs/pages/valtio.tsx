import { Button } from "ui";
import { proxy, useSnapshot } from "valtio";

const test = proxy({
  count: 0,
});

export default function Docs() {
  const snapshot = useSnapshot(test);

  return (
    <div>
      <h1>
        {snapshot.count} {snapshot.count === 1 ? "like" : "likes"}
      </h1>
      <Button onClick={() => test.count++} />
    </div>
  );
}
