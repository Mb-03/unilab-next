import Categories from "../components/Categories";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SubFooter from "../components/SubFooter";

export default function MainLayout({children}: {children: React.ReactNode}) {
    return (
        <div>
            <Header />
            <Categories />
            {children}
            <Footer />
            <SubFooter />
        </div>
    )
}