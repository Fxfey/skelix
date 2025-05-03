import { SkelixLogo } from '@/components/skelix-logo';
import { type SharedData } from '@/types';
import { Head, Link, usePage } from '@inertiajs/react';

export default function Welcome() {
    const { auth } = usePage<SharedData>().props;
    if (!auth.user) {
        return (
            <>
                <Head title="Skelix"></Head>
                <div className="bg-sx-surface-0 text-sx-primary-50 flex h-screen w-full flex-col items-center justify-center p-6 transition-opacity duration-750 starting:opacity-0">
                    {/* Project Info Section */}
                    <SkelixLogo size="md" color="white" />
                    <div className="my-8 max-w-lg text-center">
                        <p className="mb-6 text-lg">
                            A lightweight, headless CMS (content management system) built for developers who value simplicity and performance.
                        </p>

                        <div className="mb-6 grid grid-cols-1 gap-5 md:grid-cols-2">
                            <div className="bg-sx-surface-10 rounded p-4">
                                <h3 className="mb-2 text-lg font-medium">Headless Architecture</h3>
                                <p className="text-sm">Content delivery via API, decoupled from presentation</p>
                            </div>
                            <div className="bg-sx-surface-10 rounded p-4">
                                <h3 className="mb-2 text-lg font-medium">API-First Design</h3>
                                <p className="text-sm">Ready-made endpoints for seamless content integration</p>
                            </div>
                            <div className="bg-sx-surface-10 rounded p-4">
                                <h3 className="mb-2 text-lg font-medium">Content Modeling</h3>
                                <p className="text-sm">Create custom blueprints tailored to your exact needs</p>
                            </div>
                            <div className="bg-sx-surface-10 rounded p-4">
                                <h3 className="mb-2 text-lg font-medium">Flexible Content</h3>
                                <p className="text-sm">Raw content delivery without styling constraints</p>
                            </div>
                        </div>
                        <p className="text-sx-tertiary text-md font-medium">
                            Personal project by Ben 'Fxfey' Live example on my portfolio
                            <a href="https://www.fxfey.dev" target="_blank" rel="noopener noreferrer" className="hover:text-sx-accent-hover">
                                {' '}
                                <span className="hover:text-sx-primary-0">Here</span>
                            </a>
                        </p>
                    </div>
                    <div className="mt-5 flex w-65 flex-wrap gap-3 overflow-hidden">
                        {/* How It Works Button */}
                        <Link
                            href={''}
                            className="bg-sx-tertiary hover:bg-sx-accent-hover flex h-12 w-full items-center justify-center rounded py-2 text-center text-2xl font-medium transition-colors duration-500"
                        >
                            How it works
                        </Link>

                        {/* GitHub Link */}
                        <a
                            href="/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-sx-tertiary hover:bg-sx-accent-hover flex h-12 w-full items-center justify-center rounded py-2 text-center text-2xl font-medium transition-colors duration-500"
                        >
                            <span>GitHub</span>
                        </a>

                        {/* Login */}
                        <Link
                            href={route('login')}
                            className="bg-sx-tertiary hover:bg-sx-accent-hover flex h-12 w-full items-center justify-center rounded py-2 text-center text-2xl font-medium transition-colors duration-500"
                        >
                            Log in
                        </Link>
                    </div>
                </div>
            </>
        );
    } else {
        // Redirect authenticated users to dashboard using Ziggy's route helper
        window.location.href = route('dashboard');
    }
}
