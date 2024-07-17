import { NextResponse } from "next/server";
// import fetch from "node-fetch";
import { parseStringPromise } from "xml2js";

export async function GET() {
  const rssUrl =
    "https://www.youtube.com/feeds/videos.xml?channel_id=UCPn5exq63qRHlNkecMywNwQ";

  try {
    const response = await fetch(rssUrl);
    const data = await response.text();

    const result = await parseStringPromise(data);
    const items = result.feed.entry || [];
    // Fetch only two videos
    const videos = items.slice(0, 2).map((item: any) => ({
      title: item.title[0],
      published: item.published[0],
      thumbnailUrl: item["media:group"][0]["media:thumbnail"][0].$.url,
      videoId: item["yt:videoId"][0],
    }));

    return NextResponse.json(videos);
  } catch (error) {
    console.error("Error fetching data:", error);
    return NextResponse.json(
      { error: "Failed to fetch videos" },
      { status: 500 }
    );
  }
}
