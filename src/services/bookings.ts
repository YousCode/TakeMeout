import { supabase } from './supabase';

export async function createBooking(matchId: string, date: Date) {
  const { data, error } = await supabase
    .from('bookings')
    .insert([
      {
        match_id: matchId,
        date,
        status: 'pending',
      },
    ])
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function updateBookingStatus(
  bookingId: string,
  status: 'confirmed' | 'cancelled'
) {
  const { data, error } = await supabase
    .from('bookings')
    .update({ status })
    .eq('id', bookingId)
    .select()
    .single();

  if (error) throw error;
  return data;
}

export async function getBookings() {
  const { data, error } = await supabase
    .from('bookings')
    .select(`
      *,
      match:matches(
        *,
        user1:profiles!user1_id(*),
        user2:profiles!user2_id(*)
      )
    `)
    .order('date', { ascending: true });

  if (error) throw error;
  return data;
}