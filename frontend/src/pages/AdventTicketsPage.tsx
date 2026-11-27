// src/pages/AdventTicketsPage.tsx
import { Link } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { Footer } from "../components/Footer";
import { AdventTicketsSheet } from "../components/AdventTicketsSheet";

export default function AdventTicketsPage() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col print:bg-white print:text-black">
      <div className="print:hidden">
        <Navbar />
      </div>

      <main className="flex-1 px-4 sm:px-6 py-8 print:p-0">
        <div className="max-w-5xl mx-auto mb-4 print:hidden flex flex-wrap items-center justify-between gap-2 text-xs text-slate-400">
          <Link to="/" className="hover:text-amber-300 transition-colors">
            &larr; Retour à l&apos;accueil
          </Link>
          <Link
            to="/blog/24-tickets-calendrier-de-lavent"
            className="hover:text-amber-300 transition-colors"
          >
            Lire l&apos;article sur le calendrier de l&apos;Avent &rarr;
          </Link>
        </div>

        <AdventTicketsSheet />
      </main>

      <div className="print:hidden">
        <Footer />
      </div>
    </div>
  );
}