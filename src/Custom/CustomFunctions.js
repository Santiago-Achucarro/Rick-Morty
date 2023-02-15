function conditionColor(status) {
  switch (status) {
    case "Alive":
      return "success";
    case "Dead":
      return "error";
    default:
      return "secondary";
  }
}

function capitalizeWords(str) {
  return str.replace(/\b\w/g, function (l) {
    return l.toUpperCase();
  });
}

export { conditionColor, capitalizeWords };
