import { Layout } from '@/components/Layout'
import {LanguageProvider} from "@/context/LanguageContext";

export default function MainLayout({
   children,
}: {
    children: React.ReactNode
}) {
    return (
        <LanguageProvider>
            <Layout>
                {children}
            </Layout>
        </LanguageProvider>
    )
}
