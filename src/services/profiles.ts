import { supabase } from './supabase';

export async function getProfiles(category: string) {
  const { data, error } = await supabase
    .from('profiles')
    .select('*')
    .eq('category', category)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}

export async function createProfile(profile: {
  name: string;
  age: number;
  bio?: string;
  category: string;
}) {
  const { data, error } = await supabase
    .from('profiles')
    .insert([
      {
        ...profile,
        user_id: supabase.auth.getUser().then(({ data }) => data.user?.id),
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateProfile(
  profileId: string,
  updates: Partial<{
    name: string;
    age: number;
    bio: string;
    photos: string[];
    category: string;
  }>
) {
  const { data, error } = await supabase
    .from('profiles')
    .update(updates)
    .eq('id', profileId)
    .select()
    .single();

  if (error) throw error;
  return data;
}