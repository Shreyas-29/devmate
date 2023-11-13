import { Banner, Features, Footer, Header, Hero, Pricing } from '@/components';

export default function HomePage() {
    return (
        <main className="w-full">
            <Header />
            {/* <CookieToast /> */}
            <Hero />
            <Features />
            <Pricing />
            <Banner />
            <Footer />
        </main>
    )
}
