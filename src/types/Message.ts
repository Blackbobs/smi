export interface Message {
  title: string;
  description: string;
  category: string;
  type: "audio" | "video" | "thumbnail";
  file_url: string;
  thumbnail_url: string;
  id: number;
  created_at: string;
}
