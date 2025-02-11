import fs from "fs";
import path from "path";
import axios from "axios";
import dotenv from "dotenv";
import os from "os"; // To get the Downloads folder
import { v4 as uuidv4 } from "uuid";

dotenv.config();

// Load ElevenLabs API key
const API_KEY = process.env.ELEVENLABS_API_KEY;

if (!API_KEY) {
    throw new Error("❌ ELEVENLABS_API_KEY is missing! Check your .env file.");
}

// Automatically detect user's Downloads folder
const downloadsFolder = path.join(os.homedir(), "Downloads");

// Ensure Downloads folder exists
if (!fs.existsSync(downloadsFolder)) {
    fs.mkdirSync(downloadsFolder, { recursive: true });
}

console.log(`📁 Files will be saved in: ${downloadsFolder}\n`);

/**
 * Splits text into chunks of max_words.
 * @param {string} text - The input text to split.
 * @param {number} maxWords - Maximum words per chunk.
 * @returns {string[]} - Array of text chunks.
 */
const splitText = (text, maxWords = 5000) => {
    const words = text.split(" ");
    const chunks = [];

    for (let i = 0; i < words.length; i += maxWords) {
        chunks.push(words.slice(i, i + maxWords).join(" "));
    }

    return chunks;
};

/**
 * Converts text to speech and saves it as an MP3 file in the Downloads folder.
 * @param {string} text - The text to convert.
 * @param {number} index - The index of the chunk.
 */
const textToSpeechAndSave = async (text, index) => {
    try {
        console.log(`🎙️ Generating audio for part ${index + 1}...`);

        // Ensure the correct API endpoint
        const voiceId = "JBFqnCBsd6RMkjVDRZzb"; // Replace with your voice ID
        const apiUrl = `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`;

        const response = await axios.post(
            apiUrl,
            {
                text,
                model_id: "eleven_multilingual_v2",
                output_format: "mp3_44100_128",
            },
            {
                headers: {
                    "Content-Type": "application/json",
                    "xi-api-key": API_KEY,
                },
                responseType: "arraybuffer",
            }
        );

        const filename = `audio_part_${index + 1}_${uuidv4().slice(0, 8)}.mp3`;
        const outputFile = path.join(downloadsFolder, filename);

        fs.writeFileSync(outputFile, response.data);
        console.log(`✅ Saved: ${outputFile}`);
    } catch (error) {
        console.error(`❌ Error generating speech for part ${index + 1}:`, error.response ? error.response.data : error.message);
    }
};

// User Input Handling
import readline from "readline";
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

rl.question("📥 Enter your text to generate speech: ", async (inputText) => {
    if (!inputText.trim()) {
        console.log("❌ No text entered. Exiting...");
        rl.close();
        return;
    }

    console.log("\n📜 Processing text...\n");

    const textChunks = splitText(inputText, 500);

    for (let index = 0; index < textChunks.length; index++) {
        await textToSpeechAndSave(textChunks[index], index);
    }

    console.log("\n🎧 All audio files saved in your Downloads folder!");
    rl.close();
});
