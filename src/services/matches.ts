import { supabase } from './supabase';

export async function createMatch(targetProfileId: string) {
  const { data: userProfile } = await supabase
    .from('profiles')
    .select('id')
    .single();

  if (!userProfile) throw new Error('Profile not found');

  const { data, error } = await supabase
    .from('matches')
    .insert([
      {
        user1_id: userProfile.id,
        user2_id: targetProfileId,
        status: 'pending',
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateMatchStatus(matchId: string, status: 'accepted' | 'rejected') {
  const { data, error } = await supabase
    .from('matches')
    .update({ status })
    .eq('id', matchId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getMatches() {
  const { data, error } = await supabase
    .from('matches')
    .select(`
      *,
      user1:profiles!user1_id(*),
      user2:profiles!user2_id(*)
    `)
    .order('created_at', { ascending: false });

  if (error) throw error;
  return data;
}