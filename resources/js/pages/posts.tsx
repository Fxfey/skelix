import Heading from '@/components/heading';
import { Button } from '@/components/ui/button';
import { Table, TableBody, TableCell, TableFooter, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import AppLayout from '@/layouts/app-layout';
import { type BreadcrumbItem } from '@/types';
import { Head } from '@inertiajs/react';

const breadcrumbs: BreadcrumbItem[] = [
    {
        title: 'Posts',
        href: '/posts',
    },
];

const examplePosts = [
    {
        title: 'First Post',
        blueprint: 'Blog',
    },
    {
        title: 'Showreels',
        blueprint: 'Work',
    },
    {
        title: 'Some other post',
        blueprint: 'Work',
    },
    {
        title: 'Another post',
        blueprint: 'Blog',
    },
];

export default function Dashboard() {
    return (
        <AppLayout breadcrumbs={breadcrumbs}>
            <Head title="Posts" />
            <div className="flex h-full flex-1 flex-col gap-4 rounded-xl p-4">
                <div className="border-sx-primary-0/70 relative min-h-[100vh] flex-1 overflow-hidden rounded-xl border p-5 md:min-h-min">
                    <div className="flex justify-between">
                        <Heading title="Posts" description="Where your posts live" />
                        <Button variant="default">New Post</Button>
                    </div>
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Title</TableHead>
                                <TableHead className="w-25">Blueprint</TableHead>
                                <TableHead className="w-40">Options</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {examplePosts.map((post) => (
                                <TableRow key={post.title}>
                                    <TableCell>{post.title}</TableCell>
                                    <TableCell>{post.blueprint}</TableCell>
                                    <TableCell>Edit</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        <TableFooter>
                            <TableRow>
                                <TableCell colSpan={2}>Total</TableCell>
                                <TableCell className="text-right">15 Posts</TableCell>
                            </TableRow>
                        </TableFooter>
                    </Table>
                </div>
            </div>
        </AppLayout>
    );
}
