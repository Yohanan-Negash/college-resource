import { redirect } from 'next/navigation';
import { createClient } from '../../lib/supabase/server';
import { logout } from '../../lib/actions';
import { Button } from '../../components/ui/button';

export default async function Page() {
  const supabase = createClient();

  const { data: userData, error: userError } = await supabase.auth.getUser();

  if (userError || !userData?.user) {
    console.error('Error getting user:', userError.message);
    redirect('/login');
  }

  //Extract the user's email & id from the userData
  const userEmail = userData.user.email;
  const userId = userData.user.id;

  return (
    <>
      <h1>
        This is a protected Dashboard Page only accessible for users who have
        successfully authetnicated or created an account.{' '}
      </h1>
      <h2 className='font-bold'>User email: {userEmail} </h2>
      <h2 className='font-bold'>User id: {userId} </h2>

      <form className='mt-5' action={logout}>
        <Button type='submit'>Logout</Button>
      </form>
    </>
  );
}
