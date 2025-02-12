# Text-to-Speech with ElevenLabs API

A simple Node.js application that converts text to speech using the ElevenLabs API. The generated audio files are automatically saved to your Downloads folder.

## 🛠 Installation & Setup

1. Clone the repository:
```bash
git clone https://github.com/your-repository/tts-elevenlabs.git
cd tts-elevenlabs
```

2. Install dependencies:
```bash
npm install
```

3. Set up your API key:
   - Create a `.env` file in the root directory
   - Add your ElevenLabs API key:
```bash
ELEVENLABS_API_KEY=your-elevenlabs-api-key
```

## 🎙️ Usage

1. Run the script:
```bash
node tts.js
```

2. Enter the text you want to convert when prompted:
```
📝 Enter your text to generate speech: Hello, this is an example speech conversion.
```

3. The MP3 file will be automatically saved in your Downloads folder!

## ✨ Features

- Easy-to-use command-line interface
- Automatic file saving to Downloads folder
- Timestamped filenames for easy organization
- Error handling and validation
- Clean console output with status indicators

## 🔧 Configuration

You can customize the following settings in the code:

- `VOICE_ID`: Change the voice used for text-to-speech
- `MODEL_ID`: Select a different ElevenLabs model
- Voice settings: Adjust stability and similarity boost

## 📝 Requirements

- Node.js
- npm
- ElevenLabs API key

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.
