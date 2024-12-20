import { supabase } from "@/supabase/client";

export type ContentType = "song" | "sermon" | "video";

export interface ContentItem {
  id: string;
  title: string;
  description: string | null;
  type: ContentType;
  category_id: string;
  file_url: string;
  thumbnail_url: string | null;
  download_count: number;
  created_at: string;
  updated_at: string;
  created_by: string;
}

export interface Category {
  id: string;
  name: string;
  slug: string;
  created_at: string;
}

export async function getCategories(): Promise<Category[]> {
  const { data, error } = await supabase
    .from("categories")
    .select("*")
    .order("name");

  if (error) throw error;
  return data;
}

export async function getContentItems(
  type?: ContentType
): Promise<ContentItem[]> {
  let query = supabase
    .from("content_items")
    .select(
      `
      *,
      categories (
        name,
        slug
      )
    `
    )
    .order("created_at", { ascending: false });

  if (type) {
    query = query.eq("type", type);
  }

  const { data, error } = await query;

  if (error) throw error;
  return data;
}

// Use the JS library to download a file.

export const donwloadFile = async () => {
  const { data, error } = await supabase.storage
    .from("songs")
    .download(
      "1.0%20precious%20lord%20lead%20me%20home.mp3?t=2024-12-20T03%3A19%3A02.897Z"
    );

  console.log(data, error);
};

export async function uploadFile(
  file: File,
  type: "audio" | "video" | "thumbnail"
) {
  // Use the JS library to create a bucket.

  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${type}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("songs")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from(type).getPublicUrl(filePath);

  return publicUrl;
}

export async function uploadMessage(
  file: File,
  type: "audio" | "video" | "thumbnail"
) {
  // Use the JS library to create a bucket.

  const fileExt = file.name.split(".").pop();
  const fileName = `${Math.random()}.${fileExt}`;
  const filePath = `${type}/${fileName}`;

  const { error: uploadError } = await supabase.storage
    .from("messages")
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from(type).getPublicUrl(filePath);

  return publicUrl;
}
