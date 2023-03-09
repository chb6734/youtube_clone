import { useQuery } from "@tanstack/react-query";
import React from "react";
import { useParams } from "react-router-dom";
import FakeYoutube from "../api/fakeYoutube";
import Youtube, { search } from "../api/youtube";
import VideoCard from "../components/VideoCard";
import { useYoutubeApi } from "../context/YoutubeApiContext";

export default function Videos() {
  const { keyword } = useParams();
  const { youtube } = useYoutubeApi();
  const {
    isLoading,
    error,
    data: videos,
  } = useQuery(["videos", keyword], () => youtube.search(keyword));
  return (
    <>
      <div>Video {keyword ? `🔎${keyword}` : "🔥"}</div>
      {isLoading && <p> Loading...</p>}
      {error && <p>something is worrng</p>}
      {videos && (
        <ul>
          {videos.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </ul>
      )}
    </>
  );
}
