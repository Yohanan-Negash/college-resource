'use server';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const addToWaitlist = async ({ firstName, lastName, email }) => {
  try {
    const newEntry = await prisma.waitlist.create({
      data: {
        first_name: firstName,
        last_name: lastName,
        email: email,
      },
    });

    return { data: newEntry, error: null };
  } catch (error) {
    console.error('Error adding to waitlist:', error);

    if (error.code === 'P2002' && error.meta?.target?.includes('email')) {
      return {
        data: null,
        error: 'This email is already registered',
      };
    }

    return {
      data: null,
      error: error.message || 'Failed to add to waitlist',
    };
  }
};

// Ensure to close the Prisma client when your application shuts down
//process.on('beforeExit', async () => {
//  await prisma.$disconnect();
//});
