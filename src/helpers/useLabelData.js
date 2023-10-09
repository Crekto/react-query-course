import { useQuery } from "@tanstack/react-query";

export function useLabelData() {
  const labelData = useQuery(["labels"], () =>
    fetch(`/api/labels`).then((res) => res.json())
  );

  return labelData;
}
