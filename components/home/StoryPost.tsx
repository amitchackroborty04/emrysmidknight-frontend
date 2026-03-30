// "use client";

// import { MessageCircle, Bookmark, MoreHorizontal, ThumbsUp } from "lucide-react";
// import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
// import Image from "next/image";

// interface StoryPostProps {
//   author: string;
//   handle: string;
//   avatar: string;
//   timestamp: string;
//   title: string;
//   content: string;
//   likes: number;
//   comments: number;
//   image?: string;
//   video?: string;
// }

// const MAX_CHARS = 220;

// export function StoryPost({
//   author,
//   handle,
//   avatar,
//   timestamp,
//   title,
//   content,
//   likes,
//   comments,
//   image,
//   video,
// }: StoryPostProps) {
//   const [expanded, setExpanded] = useState(false);
//   const isLong = content.length > MAX_CHARS;
//   const displayedContent =
//     expanded || !isLong ? content : content.slice(0, MAX_CHARS) + "...";

//   return (
//     <div className="w-full max-w-2xl bg-[#FFFFFF] dark:bg-[#FFFFFF0D] rounded-[8px] text-white">
//       {/* Header */}
//       <div className="flex items-center justify-between mb-4 p-3">
//         <div className="flex items-center gap-3">
//           <Avatar className="h-[44px] w-[44px]">
//             <AvatarImage src={avatar} alt={author} />
//             <AvatarFallback>{author.charAt(0)}</AvatarFallback>
//           </Avatar>
//           <div className="flex flex-col">
//             <h3 className="font-medium text-xl text-[#121212] dark:text-white leading-5">
//               {author}
//             </h3>
//             <p className="text-[#7D7D7D] dark:text-[#D7D7D7] text-sm">
//               @{handle}
//             </p>
//           </div>
//         </div>
//         <div className="flex items-center gap-4">
//           <span className="text-zinc-500 text-sm">{timestamp}</span>
//           <Button
//             variant="ghost"
//             size="icon"
//             className="h-8 w-8 text-zinc-500 hover:text-blue-400 hover:bg-blue-400/10"
//           >
//             <MoreHorizontal className="h-4 w-4" />
//           </Button>
//         </div>
//       </div>

//       {/* Title */}
//       <h2 className="text-xl font-bold mb-3 text-[#121212] dark:text-white leading-6 px-3">
//         {title}
//       </h2>

//       {/* Content */}
//       <p className="text-base text-[#121212] dark:text-[#D7D7D7] leading-6 mb-4 whitespace-pre-wrap px-3">
//         {displayedContent}
//         {isLong && (
//           <button
//             onClick={() => setExpanded(!expanded)}
//             className="ml-1 text-[#E05C2E] font-medium hover:underline text-sm"
//           >
//             {expanded ? "Show less" : "Show more"}
//           </button>
//         )}
//       </p>

//       {/* Image */}
//       {image && !video && (
//         <div className="mb-4 overflow-hidden">
//           <Image
//             width={500}
//             height={380}
//             src={image}
//             alt="Post image"
//             className="w-full object-cover max-h-[380px]"
//           />
//         </div>
//       )}

//       {/* Video */}
//       {video && (
//         <div className="mb-4 overflow-hidden">
//           <video
//             src={video}
//             controls
//             className="w-full max-h-[380px] object-cover bg-black"
//           />
//         </div>
//       )}

//       {/* Footer */}
//       <div className="flex items-center justify-between mt-4 pt-3 border-t border-[#5E5E5E] text-zinc-500 p-3">
//         <div className="flex items-center gap-4">
//           <div className="flex items-center gap-2">
//             <ThumbsUp  className="h-5 w-5" />
//             <span className="text-sm font-semibold dark:text-white text-black">
//               {likes.toLocaleString()}k
//             </span>
//           </div>
//           <div className="flex items-center gap-2">
//             <MessageCircle className="h-5 w-5" />
//             <span className="text-sm font-semibold dark:text-white text-black">
//               {comments}
//             </span>
//           </div>
//         </div>
//         <Button
//           variant="ghost"
//           size="icon"
//           className="h-8 w-8 text-zinc-500 hover:text-blue-400 hover:bg-blue-400/10"
//         >
//           <Bookmark className="!h-5 !w-5" />
//         </Button>
//       </div>
//     </div>
//   );
// }

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
}: StoryPostProps) {
  const [expanded, setExpanded] = useState(false);
  const [isLocked, setIsLocked] = useState(locked);

  const isLong = content.length > MAX_CHARS;
  const displayedContent =
    expanded || !isLong ? content : content.slice(0, MAX_CHARS) + "...";
  const likeDisplay = `${likes}K`;

  return (
    <div className="w-full max-w-2xl bg-[#1a1a1a] border border-[#2a2a2a] rounded-2xl text-white relative overflow-hidden shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
      {/* ── Blurred content layer ── */}
      <div>
        {/* Header */}
        <div className="flex items-center justify-between px-5 pt-5">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10 border border-white/10">
              <AvatarImage src={avatar} alt={author} />
              <AvatarFallback>{author.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <h3 className="font-semibold text-base text-white leading-5">{author}</h3>
              <p className="text-[#9a9a9a] text-xs">@{handle}</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#6f6f6f] text-xs">{timestamp}</span>
            <Button
              variant="ghost"
              size="icon"
              className="h-8 w-8 text-[#8c8c8c] hover:text-white hover:bg-white/10"
            >
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </div>
        </div>

        {/* Title */}
        <h2 className="px-5 pt-4 text-lg font-semibold text-white leading-6">
          {title}
        </h2>

        <div
          className={`transition-all duration-300 ${
            isLocked ? "blur-[2px] opacity-60 pointer-events-none select-none" : ""
          }`}
        >
          {/* Content */}
          <p className="px-5 pt-3 text-sm leading-6 text-[#c9c9c9] whitespace-pre-wrap">
            {displayedContent}
            {isLong && !isLocked && (
              <button
                onClick={() => setExpanded(!expanded)}
                className="ml-1 text-[#f26d7d] font-medium hover:underline text-sm"
              >
                {expanded ? "Show less" : "Show more"}
              </button>
            )}
          </p>

          {/* Image */}
          {image && !video && (
            <div className="mt-4 px-5">
              <div className="overflow-hidden rounded-xl border border-[#2a2a2a]">
                <Image
                  width={500}
                  height={380}
                  src={image}
                  alt="Post image"
                  className="h-[240px] w-full object-cover"
                />
              </div>
            </div>
          )}

          {/* Video */}
          {video && (
            <div className="mt-4 px-5">
              <video
                src={video}
                controls
                className="h-[240px] w-full rounded-xl object-cover bg-black border border-[#2a2a2a]"
              />
            </div>
          )}
        </div>
        {/* Footer */}
        <div className="mt-5 flex items-center justify-between border-t border-[#2a2a2a] px-5 py-4 text-[#8c8c8c]">
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2">
              <ThumbsUp className="h-4 w-4" />
              <span className="text-sm font-semibold text-white">{likeDisplay}</span>
            </div>
            <div className="flex items-center gap-2">
              <MessageCircle className="h-4 w-4" />
              <span className="text-sm font-semibold text-white">{comments}</span>
            </div>
          </div>
          <Button
            variant="ghost"
            size="icon"
            className="h-8 w-8 text-[#8c8c8c] hover:text-white hover:bg-white/10"
          >
            <Bookmark className="!h-5 !w-5" />
          </Button>
        </div>
      </div>

      {/* ── Unlock overlay (on top, not blurred) ── */}
      {isLocked && (
        <div className="absolute bottom-24 left-6 z-10">
          <button
            onClick={() => setIsLocked(false)}
            className="flex items-center gap-2 rounded-lg bg-[#f26d7d] px-5 py-2.5 text-sm font-semibold text-white shadow-xl transition-all duration-200 hover:bg-[#e85d6b] active:scale-95"
          >
            <Lock size={15} />
            Unlock
          </button>
        </div>
      )}
    </div>
  );
}
