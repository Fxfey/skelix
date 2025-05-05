import Heading from '@/components/heading';
import HeadingSmall from '@/components/heading-small';
import { Input } from '@/components/ui/input';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Fields',
        href: '/fields',
    },
];

export default function Fields() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Fields" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sx-primary-0/70 relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-5 md:min-h-min">
                    <Heading title="Fields" description="The available fields to use in your blueprints / posts" />
                    <div className="flex flex-col gap-5">
                        <div className="flex flex-col gap-2">
                            <HeadingSmall title="Post Title" description="Always present, the main attraction point of your post" />
                            <Input placeholder="Post Title" />
                        </div>
                        <div className="flex flex-col gap-2">
                            <HeadingSmall title="Post Title" description="Always present, the main attraction point of your post" />
                            <textarea name="" id=""></textarea>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    );
}
