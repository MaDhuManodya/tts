# 📢 ElevenLabs Text-to-Speech (TTS) Script

This is a **Node.js-based** Text-to-Speech (TTS) script that converts text into speech using the **ElevenLabs API**. The generated audio files are automatically saved in the **Downloads** folder.

---

## 🚀 Features

✅ Uses **ElevenLabs API** for high-quality voice synthesis  
✅ **Automatically detects** and saves audio files to the `Downloads` folder  
✅ Supports **large text input** (splits into chunks if needed)  
✅ **Asynchronous processing** for efficient text-to-speech conversion  
✅ **User-friendly CLI interface** for easy input  

---

## 📌 Prerequisites

Make sure you have the following installed:

- **Node.js** (v16 or later) - [Download Here](https://nodejs.org/)
- **NPM** (comes with Node.js)
- **ElevenLabs API Key** (Sign up at [ElevenLabs](https://elevenlabs.io/))

---

## 🛠️ Installation

1️⃣ Clone the Repository

2️⃣ Install Dependencies

npm install

3️⃣ Set Up Environment Variables

Create a .env file in the project root and add your ElevenLabs API key:

ELEVENLABS_API_KEY=your-elevenlabs-api-key

🎙️ How to Use
Run the script:

node tts.js

Enter your text:
📥 Enter your text to generate speech: Hello, this is an example speech conversion.


