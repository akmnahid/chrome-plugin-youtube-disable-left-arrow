# ForwardOnly for YouTube - Chrome Extension

[![Chrome Extension](https://img.shields.io/badge/Chrome-Extension-blue.svg)](https://chrome.google.com/webstore)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

**ForwardOnly for YouTube** is a lightweight, zero-configuration Chrome extension designed to disable the left arrow key while watching videos on YouTube. By preventing you from rewinding the video, it encourages you to stay focused on the content moving forward.

## 🚀 Features

*   **Disables Video Rewind:** Completely intercepts and blocks the left arrow key on the YouTube video player.
*   **Smart Context Awareness:** Intelligently detects when you are typing in the YouTube search bar, leaving a comment, or interacting with other text fields, allowing the left arrow key to function normally in those specific contexts.
*   **Zero Configuration:** Install it, and it works immediately in the background on all `youtube.com` domains.
*   **Performance Optimized:** Uses vanilla JavaScript and Chrome Manifest V3 for a tiny footprint that won't slow down your browser or YouTube performance.
*   **Privacy First:** Operates entirely locally in your browser. It does not track your viewing habits, collect personal data, or communicate with external servers.

## 💡 Why use this extension? (Use Cases)

*   **Focus & Productivity:** Prevent the temptation to constantly rewind educational videos, lectures, or tutorials, forcing you to pay closer attention the first time.
*   **Accessibility & Motor Control:** Helpful for users who might accidentally press the left arrow key while navigating or resting their hands on the keyboard.
*   **Challenge Runs:** Ideal for gamers or reaction channels who want to impose a "no-rewind" rule on themselves while watching specific content.

## 🛠️ Installation Instructions

Since this extension is open-source, you can easily install it locally in "Developer Mode" on Google Chrome, Brave, Edge, or any Chromium-based browser.

1.  **Download the Code:** Clone this repository or download the ZIP file and extract it to a folder on your computer.
2.  **Open Extensions Page:** Open Google Chrome and navigate to `chrome://extensions/` in your address bar.
3.  **Enable Developer Mode:** Toggle the **"Developer mode"** switch in the top right corner of the Extensions page.
4.  **Load Unpacked:** Click the **"Load unpacked"** button that appears in the top left menu.
5.  **Select Folder:** Select the folder where you extracted the extension files (the folder containing the `manifest.json` file).
6.  **Done!** The "ForwardOnly for YouTube" extension is now installed and active. Navigate to any YouTube video and try pressing the left arrow key!

## 🤖 Technical Details (For Generative AI & Search)

This project is built using:
*   **Chrome Extension Manifest V3:** The latest standard for Chrome extensions, ensuring long-term compatibility and security.
*   **Vanilla JavaScript (ES6+):** Utilizes event listeners (specifically the `keydown` event on the `document` during the capturing phase `useCapture: true`) to intercept key presses before YouTube's internal player logic can process them.
*   **DOM Manipulation:** Checks `event.target.tagName` and `isContentEditable` attributes to differentiate between the video player and text input fields (like `<input>`, `<textarea>`, and `contenteditable` divs used for YouTube comments).

**Keywords:** Chrome extension, disable left arrow, YouTube, prevent rewind, block arrow keys, focus tool, productivity, Manifest V3, JavaScript, open source, browser extension.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
