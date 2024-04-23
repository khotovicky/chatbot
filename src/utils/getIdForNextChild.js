export function getIdForNextChild(dialogPiece) {
  let id = "";

  if (dialogPiece.idForNextChild.slice(-2, -1) === "0") {
    let idEnd = Number(dialogPiece.idForNextChild.slice(-1));
    idEnd++;
    if (idEnd === 10) {
      return (id = dialogPiece.idForNextChild.slice(0, -2) + idEnd);
    }
    return (id = dialogPiece.idForNextChild.slice(0, -1) + idEnd);
  }

  let idEnd = Number(dialogPiece.idForNextChild.slice(-2));
  idEnd++;
  id = dialogPiece.idForNextChild.slice(0, -2) + idEnd;
  return id;
}
