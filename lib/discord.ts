import axios from "axios";

export async function postToDiscordWebhook(url: string, data: any) {
  const webhookUrl = url;
  const content = `## Contact Form Submission at ${new Date().toLocaleString()} \n
${Object.entries(data).map(([key, value]) => `${key}: **${value}** \n`).join('')}`;

  try {
    await axios.post(webhookUrl, { content });
    console.log("Posted to Discord webhook");
  } catch (error) {
    console.error("Error posting to Discord webhook:", error);
  }
}
