// lib/supabase/waitlist.js
import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY; // Using anon key for client-side operations

if (!supabaseUrl || !supabaseKey) {
    throw new Error('Supabase URL and Key are required.');
}

export const supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
        persistSession: false // Since we're using direct PostgreSQL access
    }
});

export const addToWaitlist = async ({ firstName, lastName, email }) => {
    try {
        const { data, error } = await supabase
            .from('waitlist')
            .insert([
                {
                    first_name: firstName,
                    last_name: lastName,
                    email: email
                }
            ])
            .select(); // This will return the inserted data

        if (error) {
            // Handle specific PostgreSQL errors
            if (error.code === '23505') { // unique_violation
                throw new Error('This email is already registered');
            }
            throw error;
        }

        return { data, error: null };
    } catch (error) {
        console.error('Error adding to waitlist:', error);
        return {
            data: null,
            error: error.message || 'Failed to add to waitlist'
        };
    }
};