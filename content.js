document.addEventListener('keydown', function(event) {
  // Check if the pressed key is the left arrow
  if (event.key === 'ArrowLeft' || event.code === 'ArrowLeft' || event.keyCode === 37) {
    // Get the element where the event originated
    const target = event.target;

    if (target && target.tagName) {
      const tagName = target.tagName.toLowerCase();

      // Check if the active element is an input or textarea
      const isInput = tagName === 'input' || tagName === 'textarea';

      // Check if the element is contenteditable (like YouTube comments)
      const isContentEditable = target.isContentEditable || target.getAttribute('contenteditable') === 'true';

      // If the user is not in an input field, block the left arrow
      if (!isInput && !isContentEditable) {
        event.preventDefault();
        event.stopImmediatePropagation();
      }
    } else {
      // If there's no target, block it just in case
      event.preventDefault();
      event.stopImmediatePropagation();
    }
  }
}, true); // Use capturing phase to intercept before YouTube's event listeners
