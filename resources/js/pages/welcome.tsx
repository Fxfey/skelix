import { SkelixLogo } from '@/components/skelix-logo';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';
import { Code, Layers, Send, SquareArrowOutUpRight, StickyNote } from 'lucide-react';
import { ReactNode } from 'react';

type calloutCard = {
    icon: ReactNode;
    title: string;
    body: string;
};

const calloutCards: calloutCard[] = [
    {
        icon: <Layers />,
        title: 'Headless Architecture',
        body: 'Content delivery via API, decoupled from presentation',
    },
    {
        icon: <Send />,
        title: 'API-First Design',
        body: 'Ready-made endpoints for seamless content integration',
    },
    {
        icon: <StickyNote />,
        title: 'Content Modeling',
        body: 'Create custom blueprints tailored to your exact needs',
    },
    {
        icon: <Code />,
        title: 'Flexible Content',
        body: 'Raw content delivery without styling constraints',
    },
];

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    if (!auth.user) {
        return (
            <>
                <Head title="Skelix"></Head>
                <div className="bg-sx-surface-0 text-sx-primary-50 flex min-h-screen w-full flex-col items-center justify-center p-6 transition-opacity duration-750 starting:opacity-0">
                    {/* Project Info Section */}
                    <SkelixLogo size="md" color="white" />
                    <div className="my-8 max-w-lg text-center">
                        <p className="text-md mb-6">
                            A lightweight, headless CMS (content management system) built for developers who value simplicity and performance.
                        </p>
                        <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-2">
                            {calloutCards.map((card) => (
                                <div
                                    key={card.title}
                                    className="bg-sx-surface-10 border-sx-primary-0 flex min-h-22 flex-col rounded-sm border-1 px-5 py-2 text-left"
                                >
                                    <span className="my-2">{card.icon}</span>
                                    <h3 className="mb-1 text-lg font-medium">{card.title}</h3>
                                    <p className="mb-1 text-sm">{card.body}</p>
                                </div>
                            ))}
                        </div>
                        <div className="flex justify-center">
                            <Link href={''} className="bg-sx-surface-20 mb-6 rounded-sm px-2 py-1 text-xl font-medium">
                                How it works
                            </Link>
                        </div>

                        <p className="text-sx-surface-20 text-md font-medium">A passion project by Ben 'Fxfey'</p>
                        <a
                            href="https://www.fxfey.dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-sx-surface-20 mx-auto mt-2 flex w-fit items-center justify-center gap-2 rounded-sm px-2 py-2"
                        >
                            Live Demo <SquareArrowOutUpRight size={18} />
                        </a>
                    </div>
                </div>
            </>
        );
    } else {
        // Redirect authenticated users to dashboard using Ziggy's route helper
        window.location.href = route('dashboard');
    }
}
