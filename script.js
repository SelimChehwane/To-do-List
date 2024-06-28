const addNoteBtn = document.getElementById('addNote');

// Add click event listener
addNoteBtn.addEventListener('click', function() {
  // Prompt user for input
  const noteText = prompt('Enter your new note:');
  
  if (noteText) {
    
    const newNote = document.createElement('div');
    newNote.classList.add('notes');
    
    const datetimeLeft = document.createElement('div');
    datetimeLeft.classList.add('datetime', 'left');
    datetimeLeft.innerHTML = `<p>Date: ${getCurrentDate()}</p>`;
    
    const datetimeRight = document.createElement('div');
    datetimeRight.classList.add('datetime', 'right');
    datetimeRight.innerHTML = `<p>Time: ${getCurrentTime()}</p>`;
    
    const noteContent = document.createElement('p');
    noteContent.textContent = noteText;
    
    
    newNote.appendChild(datetimeLeft);
    newNote.appendChild(datetimeRight);
    newNote.appendChild(noteContent);
    
    
    const inProgressSection = document.querySelector('.inprogress');
    inProgressSection.appendChild(newNote);
  }
});


function getCurrentDate() {
  const today = new Date();
  const dd = String(today.getDate()).padStart(2, '0');
  const mm = String(today.getMonth() + 1).padStart(2, '0'); 
  const yyyy = today.getFullYear();
  return `${dd}-${mm}-${yyyy}`;
}


function getCurrentTime() {
  const now = new Date();
  const hh = String(now.getHours()).padStart(2, '0');
  const min = String(now.getMinutes()).padStart(2, '0');
  return `${hh}:${min}`;
}