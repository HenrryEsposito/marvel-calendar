export default function useDraggable() {
  function drop(e: any, nodeId: string) {
    e.preventDefault();

    const cardId = e.dataTransfer.getData("cardId");
    const card = document.getElementById(cardId);
    const thisNode = document.getElementById(nodeId);

    if (thisNode && card) {
      thisNode.appendChild(card);
      card.style.display = "block";
    }
  }

  function dragOver(e: any) {
    e.preventDefault();
  }

  function dragStart(e: any) {
    e.stopPropagation();

    const target = e.target;

    e.dataTransfer.setData("cardId", target.id);

    setTimeout(() => {
      target.style.display = "none";
    }, 0);
  }

  function dragEnd(e: any) {
    e.preventDefault();
    e.target.style.display = "block";
  }

  return {
    drop,
    dragOver,
    dragStart,
    dragEnd,
  };
}
