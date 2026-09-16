import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, type ReactNode } from "react";
import { ArrowRight, Check, LockKeyhole, ShieldCheck, Smartphone, Sparkles, Zap } from "lucide-react";

import coverImage from "@/assets/punto-ritorno-cover.jpg";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";

export const CHECKOUT_URL = "https://pay.hotmart.com/Q107623050E?checkoutMode=10";
export const PRODUCT_PRICE = "€8,90";
export const GUARANTEE_DAYS = 7;
export const LEGAL_DETAILS = { company: "[NOME AZIENDA / RAGIONE SOCIALE]", contact: "[CONTATTI]" };

const CTA_LABEL = `VOGLIO SCOPRIRE IL PUNTO DI RITORNO — ${PRODUCT_PRICE}`;

const testimonials = Array.from({ length: 5 }, (_, index) => ({ id: index + 1, text: "[INSERIRE TESTIMONIANZA REALE]" }));

const faqs = [
  ["Funziona anche se ci siamo già lasciati?", "Sì, i principi possono essere applicati anche dopo una rottura. Tuttavia ogni situazione è diversa e nessun metodo può garantire che una persona specifica torni. L’obiettivo è aiutarti ad agire con maggiore lucidità e capire se esistono condizioni reali per una riconnessione."],
  ["E se c’è un’altra donna?", "Il metodo ti aiuterà soprattutto a evitare di entrare in una competizione distruttiva e a capire come comportarti senza perdere dignità, equilibrio e valore personale."],
  ["Devo ignorarlo?", "No. Il Punto di Ritorno non insegna silenzi manipolativi o giochi psicologici. Imparerai piuttosto quando una conversazione è utile e quando continuare a insistere peggiora la situazione."],
  ["Ricevo subito il materiale?", "Sì. Dopo la conferma dell’acquisto riceverai immediatamente le istruzioni per accedere al prodotto digitale."],
  ["Posso leggerlo dal telefono?", "Sì. Il materiale è pensato soprattutto per essere consultato facilmente da smartphone."],
  ["Quanto costa?", `Il prezzo attuale è di ${PRODUCT_PRICE} con pagamento unico.`],
];

const chase = ["Controlli continuamente il telefono", "Rileggi ogni conversazione", "Cerchi segnali nascosti", "Hai paura di smettere di scrivergli", "Metti la tua vita in pausa", "Ogni suo cambiamento d’umore cambia il tuo"];
const returnState = ["Sai quando parlare e quando fermarti", "Non senti il bisogno di convincerlo", "Recuperi lucidità e sicurezza", "Capisci meglio cosa sta realmente accadendo", "Riprendi il controllo della tua quotidianità", "Decidi se quella relazione merita davvero la tua energia"];
const forYou = ["Senti che lui è diventato più freddo", "Non sai più quanto scrivergli", "Hai già insistito più di quanto avresti voluto", "Senti di aver perso te stessa nella relazione", "Vuoi capire se c’è ancora qualcosa da recuperare", "Vuoi smettere di dipendere da ogni suo messaggio"];

function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return <p className={`mb-4 text-xs font-bold uppercase tracking-[0.18em] ${light ? "text-champagne" : "text-primary"}`}>{children}</p>;
}

function PurchaseButton({ light = false, label = CTA_LABEL }: { light?: boolean; label?: string }) {
  return (
    <div className="w-full max-w-xl">
      <Button asChild variant={light ? "conversionLight" : "conversion"} size="conversion" className="w-full">
        <a href={CHECKOUT_URL}>{label}<ArrowRight aria-hidden="true" /></a>
      </Button>
      <p className={`mt-2 text-center text-xs ${light ? "text-ivory/70" : "text-muted-foreground"}`}>Accesso immediato • Pagamento sicuro</p>
    </div>
  );
}

function ProductMockup({ priority = false, large = false }: { priority?: boolean; large?: boolean }) {
  return (
    <div className={`relative mx-auto ${large ? "w-[300px] sm:w-[410px]" : "w-[270px] sm:w-[380px]"}`} aria-label="Mockup della guida Il Punto di Ritorno">
      <div className="absolute -right-2 top-12 z-0 h-[78%] w-[48%] rotate-6 rounded-[1.5rem] border-[7px] border-ink-soft bg-ink-soft p-1 shadow-soft sm:-right-8">
        <img src={coverImage} alt="" width={1024} height={1536} loading={priority ? "eager" : "lazy"} className="h-full w-full rounded-[0.9rem] object-cover" />
      </div>
      <div className="relative z-10 aspect-[2/3] w-[68%] -rotate-2 overflow-hidden rounded-sm border border-champagne/60 shadow-soft">
        <img src={coverImage} alt="Copertina di Il Punto di Ritorno" width={1024} height={1536} loading={priority ? "eager" : "lazy"} className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 flex flex-col items-center justify-center px-5 text-center text-ivory">
          <span className="mb-4 text-[9px] font-semibold uppercase tracking-[0.22em] text-champagne">Metodo pratico</span>
          <strong className="font-serif text-3xl font-semibold leading-[0.9] sm:text-4xl">IL PUNTO<br />DI RITORNO</strong>
          <span className="mt-5 max-w-[12rem] text-[8px] font-medium leading-relaxed text-ivory/85 sm:text-[10px]">Il metodo per smettere di rincorrere e ricreare attrazione, rispetto e connessione.</span>
        </div>
      </div>
    </div>
  );
}

function CheckList({ items, gold = false }: { items: string[]; gold?: boolean }) {
  return <ul className="space-y-3">{items.map((item) => <li key={item} className="flex gap-3 text-sm leading-relaxed sm:text-base"><Check className={`mt-0.5 size-5 shrink-0 ${gold ? "text-champagne" : "text-primary"}`} aria-hidden="true" /><span>{item}</span></li>)}</ul>;
}

function Index() {
  const [showSticky, setShowSticky] = useState(false);
  useEffect(() => {
    const onScroll = () => setShowSticky(window.scrollY > window.innerHeight * 0.75);
    onScroll(); window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <main className="overflow-hidden bg-background text-foreground">
      <header className="absolute inset-x-0 top-0 z-20 py-5">
        <div className="section-shell flex items-center justify-center"><span className="font-serif text-lg font-semibold text-ivory">IL PUNTO DI RITORNO</span></div>
      </header>

      <section className="relative bg-wine-deep pb-12 pt-24 text-ivory sm:pb-24 sm:pt-32">
        <div className="absolute inset-x-0 top-16 mx-auto h-px w-[calc(100%-2rem)] max-w-6xl bg-ivory/10" />
        <div className="section-shell grid items-center gap-9 sm:gap-14 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="relative z-10">
            <Eyebrow light>Per le donne che sentono che lui si sta allontanando</Eyebrow>
            <h1 className="max-w-3xl text-[2.15rem] font-semibold leading-[1.01] sm:text-6xl lg:text-[4.6rem]">Smetti di inseguirlo. Scopri cosa cambia quando torni a essere la donna che non ha bisogno di convincere nessuno del proprio valore.</h1>
            <p className="mt-4 max-w-2xl text-sm leading-6 text-ivory/75 sm:mt-6 sm:text-lg sm:leading-7">Un metodo pratico per interrompere il ciclo che lo allontana, recuperare il tuo equilibrio e creare le condizioni perché interesse e connessione possano riaprirsi naturalmente.</p>
            <div className="my-5 max-w-xl [&_li]:text-[13px] [&_ul]:space-y-2 sm:my-7 sm:[&_li]:text-base"><CheckList gold items={["Anche se ultimamente è freddo o distante", "Anche se hai già scritto, insistito o cercato spiegazioni", "Anche se non sai più se aspettarlo o lasciarlo andare"]} /></div>
            <PurchaseButton light />
          </div>
          <div className="mx-auto w-full max-w-xs lg:hidden"><ProductMockup priority /></div>
          <div className="hidden lg:block"><ProductMockup priority /></div>
        </div>
      </section>

      <section className="py-14 sm:py-24">
        <div className="section-shell">
          <div className="mx-auto max-w-3xl text-center reveal"><div className="editorial-rule mx-auto mb-6" /><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Cosa succede quando smetti di cercare di convincerlo</h2><p className="mt-4 text-muted-foreground">A volte il cambiamento comincia proprio quando smetti di fare sempre di più.</p></div>
          <div className="hide-scrollbar -mx-4 mt-8 flex snap-x snap-mandatory gap-3 overflow-x-auto px-4 pb-5 md:mx-0 md:mt-10 md:grid md:grid-cols-5 md:gap-4 md:overflow-visible md:px-0">
            {testimonials.map((item) => <article key={item.id} className="min-h-44 min-w-[78vw] snap-center border border-border bg-card p-5 shadow-soft md:min-h-52 md:min-w-0 md:p-6"><span className="font-serif text-4xl text-champagne">“</span><p className="mt-4 text-sm font-semibold leading-relaxed text-muted-foreground md:mt-6">{item.text}</p><div className="mt-6 h-px w-10 bg-champagne" /></article>)}
          </div>
        </div>
      </section>

      <section className="bg-secondary py-14 sm:py-24">
        <div className="section-shell grid gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
          <div className="reveal"><Eyebrow>La dinamica invisibile</Eyebrow><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Più hai paura di perderlo, più rischi di spingerlo lontano.</h2></div>
          <div className="space-y-5 text-base leading-8 text-ink-soft sm:text-lg"><p>Quando senti che un uomo si sta allontanando, la reazione più naturale è cercare di recuperare immediatamente quello che stai perdendo.</p><p>Scrivi di più. Cerchi spiegazioni. Diventi più disponibile. Analizzi ogni suo messaggio. Cerchi il momento perfetto per parlare.</p><p>E senza accorgertene, tutta la relazione inizia a girare attorno alla paura di perderlo.</p><p className="font-semibold text-foreground">Ma il problema non è che non hai fatto abbastanza.</p><p>Molto spesso hai fatto troppo, troppo presto e dalla posizione emotiva sbagliata. E più provi a forzare una risposta, più perdi proprio quella cosa che prima rendeva naturale il suo interesse: il tuo centro.</p><div className="pt-3"><PurchaseButton /></div></div>
        </div>
      </section>

      <section className="bg-wine-deep py-14 text-ivory sm:py-24">
        <div className="section-shell"><div className="mx-auto max-w-4xl text-center reveal"><Eyebrow light>Il Principio dell’Inversione</Eyebrow><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Il Punto di Ritorno comincia quando smetti di rincorrere la relazione e inverti la dinamica.</h2></div>
          <div className="mt-12 space-y-5">
            <Flow title="La rincorsa" items={["Paura di perderlo", "Più messaggi / più pressione", "Lui percepisce il cambiamento", "Aumenta la distanza", "Ancora più ansia"]} />
            <Flow title="L’inversione" positive items={["Interruzione", "Chiarezza", "Recupero del proprio centro", "Comunicazione più naturale", "Possibilità di riconnessione"]} />
          </div>
          <p className="mx-auto mt-10 max-w-3xl text-center leading-7 text-ivory/75">Il Principio dell’Inversione non significa ignorarlo, manipolarlo o giocare con le sue emozioni. Significa interrompere quei comportamenti impulsivi che nascono dalla paura e tornare a comunicare da una posizione di sicurezza, chiarezza e valore personale. È questa la base del metodo Il Punto di Ritorno.</p>
        </div>
      </section>

      <section className="py-14 sm:py-24"><div className="section-shell grid gap-4 md:grid-cols-2 md:gap-5">
        <article className="border border-border bg-card p-7 sm:p-10"><Eyebrow>Quando lo insegui</Eyebrow><CheckList items={chase} /></article>
        <article className="border border-champagne bg-wine-deep p-7 text-ivory shadow-soft sm:p-10"><Eyebrow light>Dopo il Punto di Ritorno</Eyebrow><CheckList gold items={returnState} /></article>
      </div></section>

      <section className="bg-secondary py-14 sm:py-24"><div className="section-shell"><div className="max-w-3xl reveal"><Eyebrow>Il percorso</Eyebrow><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Dentro Il Punto di Ritorno scoprirai un metodo semplice diviso in 3 fasi.</h2></div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {[["01", "Interrompere la rincorsa", "Capirai quali comportamenti aumentano involontariamente la distanza e come evitare di agire sotto l’effetto di ansia, paura e urgenza."], ["02", "Ripristinare il tuo valore", "Imparerai a recuperare il tuo centro, la tua vita e il modo in cui comunichi, senza dover fingere disinteresse o trasformarti in qualcun’altra."], ["03", "Riaprire la connessione", "Capirai quando ha senso ricontattarlo, come comunicare senza pressione e quali segnali osservare per capire se esiste ancora una reale possibilità di riconnessione."]].map(([n,t,d]) => <article key={n} className="border border-border bg-card p-7 shadow-soft"><span className="font-serif text-5xl text-champagne">{n}</span><p className="mt-6 text-xs font-bold uppercase tracking-[0.16em] text-primary">Fase {n}</p><h3 className="mt-2 text-2xl font-semibold">{t}</h3><p className="mt-4 text-sm leading-7 text-muted-foreground">{d}</p></article>)}
        </div><p className="mt-8 border-l-2 border-champagne pl-5 text-lg font-semibold">E soprattutto: imparerai anche a riconoscere quando una relazione non merita più di essere inseguita.</p>
      </div></section>

      <section className="py-14 sm:py-24"><div className="section-shell grid items-center gap-10 sm:gap-14 lg:grid-cols-2"><ProductMockup large /><div><Eyebrow>Contenuto completo</Eyebrow><h2 className="text-4xl font-semibold leading-tight sm:text-5xl">Tutto quello che ti serve per iniziare oggi.</h2><p className="mt-4 text-lg font-semibold">IL PUNTO DI RITORNO</p><p className="mb-7 mt-1 text-muted-foreground">Guida digitale pratica da consultare dal telefono.</p><CheckList items={["Metodo completo Il Punto di Ritorno", "Le 3 fasi dell’Inversione", "Errori da evitare quando lui si allontana", "Come gestire messaggi, silenzi e distanza", "Come capire se esistono ancora segnali reali di interesse", "Piano pratico per recuperare lucidità e controllo"]} /><div className="mt-8 border border-champagne bg-champagne-soft p-5"><span className="text-xs font-bold uppercase tracking-[0.16em] text-primary">Bonus incluso</span><h3 className="mt-2 text-2xl font-semibold">Protocollo 7 Giorni</h3><p className="mt-2 text-sm leading-6 text-ink-soft">Checklist pratica per sapere cosa fare nei primi 7 giorni quando senti che lui si sta allontanando.</p></div></div></div></section>

      <section id="acquista" className="scroll-mt-8 bg-wine py-16 text-ivory sm:py-24"><div className="section-shell mx-auto max-w-3xl text-center"><Eyebrow light>Accesso immediato</Eyebrow><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Inizia oggi con meno del prezzo di una cena.</h2><p className="mx-auto mt-5 max-w-2xl text-ivory/75">Non hai bisogno di un altro mese passato ad analizzare messaggi e chiederti cosa avresti dovuto fare diversamente. Puoi iniziare a cambiare la dinamica oggi.</p><p className="mt-8 font-serif text-7xl font-semibold text-champagne sm:text-8xl">{PRODUCT_PRICE}</p><p className="mb-7 mt-1 text-sm">Pagamento unico. Nessun abbonamento.</p><div className="mx-auto"><PurchaseButton light /></div><div className="mt-7 flex flex-wrap justify-center gap-x-6 gap-y-3 text-xs text-ivory/70"><span className="flex items-center gap-1"><LockKeyhole className="size-4" /> Pagamento sicuro</span><span className="flex items-center gap-1"><Zap className="size-4" /> Accesso immediato</span><span className="flex items-center gap-1"><Smartphone className="size-4" /> Smartphone, tablet e computer</span></div></div></section>

      <section className="py-16 sm:py-20"><div className="section-shell mx-auto max-w-3xl text-center"><div className="mx-auto grid size-16 place-items-center rounded-full border border-champagne bg-champagne-soft"><ShieldCheck className="size-8 text-primary" /></div><h2 className="mt-6 text-4xl font-semibold">Provalo senza complicazioni.</h2><p className="mt-4 leading-7 text-muted-foreground">Hai {GUARANTEE_DAYS} giorni per conoscere il materiale. Se ritieni che Il Punto di Ritorno non faccia per te, puoi richiedere il rimborso secondo i termini indicati al momento dell’acquisto.</p><p className="mt-5 font-serif text-2xl font-semibold">Il rischio è nostro. La decisione è tua.</p></div></section>

      <section className="bg-secondary py-16 sm:py-24"><div className="section-shell grid gap-10 lg:grid-cols-2"><div><Eyebrow>È pensato per te</Eyebrow><h2 className="mb-7 text-4xl font-semibold">Il Punto di Ritorno è per te se…</h2><CheckList items={forYou} /></div><div className="border-l-2 border-primary bg-card p-7 sm:p-10"><p className="text-xs font-bold uppercase tracking-[0.18em] text-primary">Non è per te se…</p><p className="mt-5 text-lg leading-8">Cerchi trucchi per manipolare qualcuno, controllarlo o costringerlo a tornare. Il metodo serve a recuperare chiarezza, comunicazione e attrazione naturale, non a controllare un’altra persona.</p></div></div></section>

      <section className="py-16 sm:py-24"><div className="section-shell mx-auto max-w-3xl"><div className="text-center"><Eyebrow>Domande frequenti</Eyebrow><h2 className="text-4xl font-semibold sm:text-5xl">Prima di iniziare</h2></div><Accordion type="single" collapsible className="mt-10 border-t border-border">{faqs.map(([q,a], i) => <AccordionItem key={q} value={`faq-${i}`}><AccordionTrigger className="py-6 text-base font-semibold hover:no-underline sm:text-lg">{q}</AccordionTrigger><AccordionContent className="pb-6 pr-8 text-sm leading-7 text-muted-foreground sm:text-base">{a}</AccordionContent></AccordionItem>)}</Accordion></div></section>

      <section className="bg-wine-deep py-16 text-ivory sm:py-24"><div className="section-shell grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]"><div><Sparkles className="mb-6 size-6 text-champagne" /><h2 className="text-4xl font-semibold leading-tight sm:text-6xl">Puoi continuare a chiederti perché si è allontanato. Oppure puoi finalmente capire cosa fare da qui in avanti.</h2><p className="mt-5 font-serif text-2xl text-champagne">Il tuo Punto di Ritorno può iniziare oggi.</p><p className="mt-7 font-serif text-6xl font-semibold">{PRODUCT_PRICE}</p><div className="mt-6"><PurchaseButton light label="VOGLIO INIZIARE ADESSO" /></div><p className="mt-4 text-xs text-ivory/60">Accesso immediato • Pagamento unico • Garanzia secondo i termini d’acquisto</p></div><ProductMockup /></div></section>

      <footer className="bg-foreground py-10 text-background"><div className="section-shell"><div className="flex flex-col gap-6 border-b border-background/15 pb-8 sm:flex-row sm:items-center sm:justify-between"><span className="font-serif text-xl font-semibold">IL PUNTO DI RITORNO</span><nav className="flex flex-wrap gap-x-5 gap-y-3 text-xs text-background/70"><a href="#">Termini e Condizioni</a><a href="#">Privacy Policy</a><a href="#">Cookie Policy</a><a href="#">{LEGAL_DETAILS.contact}</a></nav></div><div className="pt-6 text-xs leading-6 text-background/55"><p>{LEGAL_DETAILS.company}</p><p className="mt-2 max-w-3xl">I risultati possono variare da persona a persona. Il materiale ha finalità informative ed educative e non garantisce il ritorno o il comportamento di una persona specifica.</p></div></div></footer>

      <div data-visible={showSticky} className="fixed inset-x-0 bottom-0 z-50 translate-y-full border-t border-champagne/30 bg-wine-deep/95 px-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 data-[visible=true]:translate-y-0 md:hidden"><Button asChild variant="conversionLight" size="conversion" className="w-full min-h-12 py-3 text-[11px]"><a href={CHECKOUT_URL}>{CTA_LABEL}</a></Button></div>
    </main>
  );
}

function Flow({ title, items, positive = false }: { title: string; items: string[]; positive?: boolean }) {
  return <div className={`border p-5 ${positive ? "border-champagne bg-champagne/10" : "border-ivory/15 bg-ivory/5"}`}><p className={`mb-4 text-xs font-bold uppercase tracking-[0.16em] ${positive ? "text-champagne" : "text-ivory/60"}`}>{title}</p><div className="flex flex-col gap-2 md:flex-row md:items-stretch">{items.map((item,i) => <div key={item} className="contents"><div className="flex min-h-14 flex-1 items-center justify-center border border-ivory/15 px-3 py-3 text-center text-xs font-semibold uppercase leading-5">{item}</div>{i < items.length - 1 && <ArrowRight className="mx-auto size-4 shrink-0 rotate-90 self-center text-champagne md:rotate-0" />}</div>)}</div></div>;
}

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Il Punto di Ritorno | Ritrova il tuo centro" },
    { name: "description", content: "Il metodo pratico per smettere di rincorrere, recuperare lucidità e capire se una connessione può riaprirsi. Accesso immediato a €8,90." },
    { property: "og:title", content: "Il Punto di Ritorno" },
    { property: "og:description", content: "Smetti di rincorrere. Recupera equilibrio, chiarezza e valore personale." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ] }),
  component: Index,
});