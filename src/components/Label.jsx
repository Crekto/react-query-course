import { useLabelData } from "../helpers/useLabelData";

export function Label({ label }) {
  const labelsQuery = useLabelData();
  if (labelsQuery.isLoading) return null;

  const labelObject = labelsQuery.data.find(
    (queryLabel) => queryLabel.id === label
  );

  if (!labelObject) return null;

  return (
    <span key={label} className={`label ${labelObject.color}`}>
      {labelObject.name}
    </span>
  );
}
