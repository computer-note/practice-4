function ValueItem({ value, id }) {
  return <button data-id={id}>{value}++</button>;
}

export default ValueItem;
