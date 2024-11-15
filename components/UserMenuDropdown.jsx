'use client';
import React from 'react';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
import { Button } from '@/components/ui/button';
import { Settings, User, CreditCard, LogOut } from 'lucide-react';
import { logout } from '@/lib/actions';
import { useRouter } from 'next/navigation';

export default function UserMenuDropdown({ userEmail }) {
    const router = useRouter();

    const handleLogout = async () => {
        await logout();
        router.push('/login');
    };

    return (
        <DropdownMenu.Root>
            <DropdownMenu.Trigger asChild>
                <Button
                    variant="ghost"
                    className="relative h-8 w-8 rounded-full"
                    aria-label="User menu"
                >
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-zinc-100 hover:bg-zinc-200">
                        <User className="h-4 w-4 text-zinc-600" />
                    </div>
                </Button>
            </DropdownMenu.Trigger>

            <DropdownMenu.Portal>
                <DropdownMenu.Content align="end" className="min-w-[220px] rounded-md border bg-white p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50">
                    <div className="flex items-center justify-start gap-2 p-2">
                        <div className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100">
                            <User className="h-4 w-4 text-zinc-600" />
                        </div>
                        <div className="flex flex-col space-y-1">
                            <p className="text-sm font-medium leading-none">{userEmail}</p>
                        </div>
                    </div>

                    <DropdownMenu.Separator className="h-px bg-zinc-200 m-1" />

                    <DropdownMenu.Sub>
                        <DropdownMenu.SubTrigger className="flex w-full cursor-default select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-zinc-100 data-[state=open]:bg-zinc-100">
                            <Settings className="mr-2 h-4 w-4" />
                            <span>Settings</span>
                        </DropdownMenu.SubTrigger>
                        <DropdownMenu.Portal>
                            <DropdownMenu.SubContent className="min-w-[220px] rounded-md border bg-white p-1 shadow-md animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50">
                                <DropdownMenu.Item className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-zinc-100">
                                    <User className="mr-2 h-4 w-4" />
                                    <span>Profile</span>
                                </DropdownMenu.Item>
                                <DropdownMenu.Item className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-zinc-100">
                                    <CreditCard className="mr-2 h-4 w-4" />
                                    <span>Billing</span>
                                </DropdownMenu.Item>
                            </DropdownMenu.SubContent>
                        </DropdownMenu.Portal>
                    </DropdownMenu.Sub>

                    <DropdownMenu.Item asChild className="flex cursor-pointer select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none hover:bg-zinc-100">
                        <button className="w-full flex items-center" onClick={handleLogout}>
                            <LogOut className="mr-2 h-4 w-4" />
                            <span>Log out</span>
                        </button>
                    </DropdownMenu.Item>
                </DropdownMenu.Content>
            </DropdownMenu.Portal>
        </DropdownMenu.Root>
    );
}