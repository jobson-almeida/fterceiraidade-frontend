import SidebarController from "../components/structural/sidebar-controller";
import TopNav from "../components/structural/top-nav";
import { AddressBar } from "../components/structural/address-bar";

export default function AdminLayout({ children }) {
    return (
        <section>
            <header>
                <TopNav />
            </header>
            <aside>
                <SidebarController />
            </aside>
            <main className="px-8 py-8 mt-16 lgg:pl-[312px]">
                <div className="mb-8">
                    <AddressBar />
                </div>
                {children}
            </main>
        </section>
    )
}
