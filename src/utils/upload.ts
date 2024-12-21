import { supabase } from "@/supabase/client";

export type ContentType = "audio" | "video";

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

// export async function getContentItems(
//   type?: ContentType
// ): Promise<ContentItem[]> {
//   let query = supabase
//     .from("content_items")
//     .select(
//       `
//       *,
//       categories (
//         name,
//         slug
//       )
//     `
//     )
//     .order("created_at", { ascending: false });

//   if (type) {
//     query = query.eq("type", type);
//   }

//   const { data, error } = await query;

//   if (error) throw error;
//   return data;
// }

export const getMessages = async () => {
  const { data, error } = await supabase
  .from('messages')
  .select()
  console.log(data, error)
  return {data, error}

}

// Use the JS library to download a file.

export const donwloadFile = async ( file_url: string,
  type: "audio" | "video" | "thumbnail") => {
    let url = file_url
    let baseUrl = 'https://mchypagxryauuvqpjkjj.supabase.co/storage/v1/object/public/audio'
    let new_url = url.replace(baseUrl, '');
  const { data, error } = await supabase.storage
    .from(type)
    .download(new_url);

  return data
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
    .from(type)
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
    .from(type)
    .upload(filePath, file);

  if (uploadError) throw uploadError;

  const {
    data: { publicUrl },
  } = supabase.storage.from(type).getPublicUrl(filePath);

  return publicUrl;
}