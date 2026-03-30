"use client";

import {
  MessageCircle,
  Bookmark,
  MoreHorizontal,
  ThumbsUp,
  Lock,
} from "lucide-react";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import Image from "next/image";

interface StoryPostProps {
  author: string;
  handle: string;
  avatar: string;
  timestamp: string;
  title: string;
  content: string;
  likes: number;
  comments: number;
  image?: string;
  video?: string;
  locked?: boolean;
  bookmarked?: boolean;
  bookmarkColor?: string;
}

const MAX_CHARS = 220;

export function StoryPost({
  author,
  handle,
  avatar,
  timestamp,
  title,
  content,
  likes,
  comments,
  image,
  video,
  locked = false,
  bookmarked = false,
  bookmarkColor = "#F66F7D",
}: StoryPostProps) {
  const [expanded, setExpanded] = useState(false);
  const [isLocked, setIsLocked] = useState(locked);
  const [isBookmarked, setIsBookmarked] = useState(bookmarked);

  const isLong = content.length > MAX_CHARS;
  const displayedContent =
    expanded || !isLong ? content : content.slice(0, MAX_CHARS) + "...";

  return (
    <div className="w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#FFFFFF0D] rounded-[8px] text-white relative overflow-hidden">
      {/* ── Blurred content layer ── */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between mb-4 p-3">
          <div className="flex items-center gap-3">
            <Avatar className="h-[44px] w-[44px]">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-medium text-xl text-[#121212] dark:text-white leading-5">
                {author}
              </h3>
              <p className="text-[#7D7D7D] dark:text-[#D7D7D7] text-sm">
                @{handle}
              </p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-[#D7D7D7] text-sm">{timestamp}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-zinc-500 hover:text-blue-400 hover:bg-blue-400/10"
            >
              <MoreHorizontal className="h-6 w-6 dark:text-[#D7D7D7] text-black font-bold" />
            </Button>
          </div>
        </div>

        {/* Title */}
        <h2 className="text-xl font-bold mb-3 text-[#121212] dark:text-white leading-6 px-3">
          {title}
        </h2>

        <div
          className={`transition-all duration-300 ${isLocked ? "blur-sm pointer-events-none select-none" : ""}`}
        >
          {/* Content */}
          <p className="text-base text-[#121212] dark:text-[#D7D7D7] leading-6 mb-4 whitespace-pre-wrap px-3">
            {displayedContent}
            {isLong && !isLocked && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 text-[#E05C2E] font-medium hover:underline text-sm"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </p>

          {/* Image */}
          {image && !video && (
            <div className="mb-4 overflow-hidden">
              <Image
                width={500}
                height={380}
                src={image}
                alt="Post image"
                className="w-full object-cover max-h-[380px]"
              />
            </div>
          )}

          {/* Video */}
          {video && (
            <div className="mb-4 overflow-hidden">
              <video
                src={video}
                controls
                className="w-full max-h-[380px] object-cover bg-black"
              />
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#5E5E5E] text-zinc-500 p-3">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-5 w-5" />
              <span className="text-sm font-semibold dark:text-white text-black">
                {likes.toLocaleString()}k
              </span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-5 w-5" />
              <span className="text-sm font-semibold dark:text-white text-black">
                {comments}
              </span>
            </div>
          </div>

          {/* Bookmark Button */}
          <button
            onClick={() => setIsBookmarked(!isBookmarked)}
            className="h-8 w-8 flex items-center justify-center rounded-md transition-colors hover:bg-zinc-100 dark:hover:bg-zinc-800"
          >
            <Bookmark
              className="!h-5 !w-5 transition-all duration-200"
              style={
                isBookmarked
                  ? { fill: bookmarkColor, stroke: bookmarkColor }
                  : { fill: "none", stroke: "#71717a" }
              }
            />
          </button>
        </div>
      </div>

      {/* ── Unlock overlay (on top, not blurred) ── */}
      {isLocked && (
        <div className="absolute bottom-16 left-2 z-10">
          <button
            onClick={() => setIsLocked(false)}
            className="flex items-center gap-2 bg-[#F66F7D] hover:bg-[#e85d6b] active:scale-95 text-white text-sm font-semibold px-6 py-3 rounded-[8px] shadow-xl transition-all duration-200"
          >
            <Lock size={15} />
            Unlock
          </button>
        </div>
      )}
    </div>
  );
}
