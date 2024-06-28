const addNoteBtn = document.getElementById("addNote");

addNoteBtn.addEventListener("click", function () {
  const noteText = prompt("Write it down or you'll forget:");

  if (noteText) {
    const newNote = document.createElement("div");
    newNote.classList.add("notes");

    const noteContent = document.createElement("p");
    noteContent.textContent = noteText;

    newNote.appendChild(noteContent);

    const inProgressSection = document.querySelector(".inprogress");
    inProgressSection.appendChild(newNote);
  }
});
