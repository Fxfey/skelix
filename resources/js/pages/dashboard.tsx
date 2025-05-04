import { PlaceholderPattern } from '@/components/ui/placeholder-pattern';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Dashboard',
        href: '/dashboard',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Dashboard" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="grid auto-rows-min gap-4 md:grid-cols-3">
                    <div className="border-sx-primary-0/70 relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="stroke-sx-primary-0/20 absolute inset-0 size-full" />
                    </div>
                    <div className="border-sx-primary-0/70 relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="stroke-sx-primary-0/20 absolute inset-0 size-full" />
                    </div>
                    <div className="border-sx-primary-0/70 relative aspect-video overflow-hidden rounded-xl border">
                        <PlaceholderPattern className="stroke-sx-primary-0/20 absolute inset-0 size-full" />
                    </div>
                </div>
                <div className="border-sx-primary-0/70 relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border md:min-h-min">
                    <PlaceholderPattern className="stroke-sx-primary-0/20 absolute inset-0 size-full" />
                </div>
            </div>
        </AppLayout>
    );
}
