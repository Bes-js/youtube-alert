import { YouTube } from "youtube-alert";
const YouTubeClient = new YouTube()

// Function

YouTubeClient.setChannel("YouTube Channel ID")

// Events

YouTubeClient.on("newPost", async(data) => {
console.log(data);
})

console.log("https://www.npmjs.com/package/youtube-alert");
