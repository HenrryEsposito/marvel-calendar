import useEvents from "./useEvents";

export default function useDraggable() {
  const { patchEventDateById } = useEvents();

  function drop(e: any, nodeId: string, date: Date) {
    e.preventDefault();

    const cardId = e.dataTransfer.getData("cardId");
    const eventId = e.dataTransfer.getData("eventid");

    const card = document.getElementById(cardId);
    const thisNode = document.getElementById(nodeId);

    if (thisNode && card) {
      thisNode.appendChild(card);
      patchEventDateById(eventId, date.getTime().toString());
    }
  }

  function dragOver(e: any) {
    e.preventDefault();
  }

  function dragStart(e: any, eventid: string) {
    e.stopPropagation();

    const target = e.target;

    e.dataTransfer.setData("cardId", target.id);
    e.dataTransfer.setData("eventid", eventid);

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
