import { useQuery } from "@tanstack/react-query";

export function useLabelData() {
  const labelData = useQuery(
    ["labels"],
    ({ signal }) => fetch(`/api/labels`, { signal }).then((res) => res.json()),
    { staleTime: 1000 * 60 * 60 }
  );

  return labelData;
}
