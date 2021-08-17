function list(names) {
  if (names.map((v) => v.name).length > 1)
    return (
      names
        .map((v) => v.name)
        .slice(0, -1)
        .join(", ") +
      " & " +
      names.map((v) => v.name).slice(-1)
    );
  return names.map((v) => v.name).slice(-1) + "";
}

function list(arr) {
  let len = arr.length;
  if (len == 0) return "";
  return (
    arr
      .slice(0, len - 1)
      .map((p) => p.name)
      .join(", ") +
    (len > 1 ? " & " : "") +
    arr[len - 1].name
  );
}
