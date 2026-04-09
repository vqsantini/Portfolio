import { Contact } from "../components/Contact";
import { Footer } from "../components/Footer";

export function ContactPage() {
    return(
        <div className="bg-white dark:bg-slate-900 pt-16">
            <Contact />
            <Footer />
        </div>
    )
}