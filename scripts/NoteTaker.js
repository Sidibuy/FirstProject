const noteTitleInput = document.getElementById("noteTitleInput");
const noteInput = document.getElementById("noteInput");
const form = document.getElementById("form");
const notes = document.getElementById("notes");

// Add click event listener to the form
form.addEventListener("submit", (e) => {
  e.preventDefault();

  var title = noteTitleInput.value;
  var noteContent = noteInput.value;

  // Create a new note container
  const noteContainer = document.createElement("div");
  noteContainer.classList.add(
    "text-left",
    "space-y-3",
    "p-2",
    "m-2",
    "border-2",
    "border-black",
    "rounded-md"
  );

  // Create title paragraph
  const titleParagraph = document.createElement("p");
  titleParagraph.classList.add("font-bold", "capitalize");
  titleParagraph.textContent = title;

  // Create note paragraph
  const noteParagraph = document.createElement("p");
  noteParagraph.classList.add("pl-5");
  noteParagraph.textContent = noteContent;

  // Create view detail button
  const viewDetailBtn = document.createElement("button");
  viewDetailBtn.classList.add(
    "p-2",
    "rounded-md",
    "bg-blue-600",
    "hover:bg-[#0C3EED]",
    "font-medium",
    "text-white",
    "hover:cursor-pointer"
  );
  viewDetailBtn.textContent = "View Detail";

  // Add click event listener to the view detail button
  viewDetailBtn.addEventListener("click", () => {
    // Create modal overlay
    const overlay = document.createElement("div");
    overlay.classList.add(
      "fixed",
      "top-0",
      "left-0",
      "w-full",
      "h-full",
      "bg-black",
      "bg-opacity-50",
      "flex",
      "justify-center",
      "items-center"
    );

    // Create modal content
    const modal = document.createElement("div");
    modal.classList.add(
      "bg-white",
      "p-6",
      "rounded-md",
      "shadow-lg",
      "text-center"
    );
    modal.textContent = noteContent;

    // Append modal content to overlay
    overlay.appendChild(modal);

    // Append overlay to the body
    document.body.appendChild(overlay);

    // Close the modal when clicking outside of it
    overlay.addEventListener("click", function (event) {
      if (event.target === overlay) {
        document.body.removeChild(overlay);
      }
    });
  });

  // Append title, note, and view detail button to the note container
  noteContainer.appendChild(titleParagraph);
  noteContainer.appendChild(noteParagraph);
  noteContainer.appendChild(viewDetailBtn);

  // Append the note container to the notes container
  notes.appendChild(noteContainer);

  // Clear input fields
  noteTitleInput.value = "";
  noteInput.value = "";
});
