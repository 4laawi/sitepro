import type { Metadata } from 'next'
import ClientMotionWrapper from '@/components/ClientMotionWrapper'
import Typewriter from '@/components/Typewriter'
import TextTicker from '@/components/TextTicker'

export const metadata: Metadata = {
  title: 'Maintenance & Support | Sitepro.ma',
  description: 'Mises à jour, sauvegardes, surveillance et support réactif pour votre site.',
  alternates: { canonical: '/maintenance-support' },
}

export default function MaintenanceSupportPage() {
  return (
    <section className="cv-auto">
      <div className="container mx-auto px-4 py-20">
        <ClientMotionWrapper initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <h1 className="heading-1 text-gray-900">Maintenance & Support</h1>
          <p className="text-lg text-gray-800 font-semibold mt-2"><Typewriter words={["Surveillance 24/7","Sauvegardes","Mises à jour","SLA & assistance"]} /></p>
          <p className="text-gray-600 max-w-2xl mt-3">Nous veillons à la sécurité et à la disponibilité de votre site 24/7.</p>
        </ClientMotionWrapper>
        <TextTicker text="Monitoring • Backups • Mises à jour • SLA • Support" className="mt-8 border-y border-gray-100 text-sm" />
        {/* Bug fix CTA */}
        <div className="mt-12 grid lg:grid-cols-2 gap-8 items-center">
          <ClientMotionWrapper initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}}>
            <h2 className="heading-2 text-gray-900 mb-3">Site en panne, bogué ou lent ?</h2>
            <p className="text-gray-700">Nos experts remettent votre site sur pied rapidement: erreurs serveur, bugs front/back, sécurité, performances. Vous nous envoyez les fichiers du site (ou accès hébergeur/Git), et on gère le reste — diagnostic, correctifs et déploiement.</p>
            <a href={`https://wa.me/2120663711164`} className="btn-primary mt-4 inline-block">Demander une intervention</a>
          </ClientMotionWrapper>
          <ClientMotionWrapper initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4}} className="rounded-2xl bg-white border border-gray-100 shadow-lg p-6">
            <h3 className="font-semibold text-gray-900">Ce dont nous avons besoin</h3>
            <ul className="mt-2 space-y-1 text-gray-700 text-sm">
              <li>• Fichiers du site ou accès dépôt (Git)</li>
              <li>• Accès hébergement / base de données si nécessaire</li>
              <li>• Description du bug + captures d’écran</li>
            </ul>
            <p className="text-gray-600 text-sm mt-3">Nous signons un NDA si souhaité. Rapport d’intervention fourni.</p>
          </ClientMotionWrapper>
        </div>

        {/* Plans de maintenance */}
        <div className="mt-16">
          <h2 className="heading-2 text-gray-900 mb-6">Plans de maintenance & hébergement</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{n:'Essentiel',p:'390 MAD/mois',l:['Surveillance 24/7','Sauvegardes quotidiennes','Mises à jour sécurité','Support en heures ouvrées']},{n:'Pro (VPS rapide)',p:'790 MAD/mois',l:['Hébergement VPS optimisé','CDN & cache','SLA prioritaire','Monitoring & rapports']},{n:'Entreprise',p:'Sur devis',l:['SLA 24/7','Clustering/haute dispo','CI/CD & environnement de staging','Support dédié']}].map((pkg,i)=> (
              <ClientMotionWrapper key={pkg.n} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
                <h3 className="font-bold text-xl text-gray-900">{pkg.n}</h3>
                <p className="text-primary-700 font-semibold mt-1">{pkg.p}</p>
                <ul className="mt-3 space-y-1 text-gray-700 text-sm">
                  {pkg.l.map((x)=> (<li key={x}>• {x}</li>))}
                </ul>
                <a href={`https://wa.me/2120663711164`} className="btn-primary mt-4 inline-block">Souscrire</a>
              </ClientMotionWrapper>
            ))}
          </div>
        </div>

        {/* Mises à jour continues */}
        <div className="mt-16">
          <h2 className="heading-2 text-gray-900 mb-6">Mises à jour de contenu & évolutions</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[{t:'Mises à jour de contenu',d:'Ajout / modification de pages, articles, images, produits…'},{t:'Évolutions fonctionnelles',d:'Nouvelles sections, intégrations API, optimisation du parcours.'},{t:'Veille & optimisation',d:'Suivi des performances, correctifs et recommandations mensuelles.'}].map((c,i)=> (
            <ClientMotionWrapper key={c.t} initial={{opacity:0,y:12}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{duration:0.4,delay:i*0.05}} className="p-6 rounded-2xl bg-white border border-gray-100 shadow-lg">
              <h3 className="font-semibold text-gray-900">{c.t}</h3>
              <p className="text-gray-600 text-sm mt-1">{c.d}</p>
              <a href={`https://wa.me/2120663711164`} className="inline-block mt-3 text-primary-700 font-medium">Programmer une mise à jour →</a>
            </ClientMotionWrapper>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}


