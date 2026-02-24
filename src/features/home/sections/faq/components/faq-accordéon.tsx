import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/src/components/ui/accordion"

const items = [
  {
    value: "faq1",
    trigger: "Quels services de marketing digital proposez-vous ?",
    content:
      "Nous proposons une gamme complète de services : stratégie digitale, référencement SEO, campagnes publicitaires (Meta & Google Ads), gestion des réseaux sociaux, création de contenu et optimisation du tunnel de conversion. Chaque solution est adaptée aux objectifs et au budget de votre entreprise.",
  },
  {
    value: "faq2",
    trigger: "Comment mesurez-vous les performances des campagnes ?",
    content:
      "Nous suivons des indicateurs clés de performance (KPI) tels que le trafic, le taux de conversion, le coût par acquisition (CPA) et le retour sur investissement (ROI). Vous recevez des rapports détaillés avec des analyses claires et des recommandations d’optimisation continues.",
  },
  {
    value: "faq3",
    trigger: "À quels types d’entreprises s’adressent vos offres ?",
    content:
      "Nos solutions s’adressent aux startups, PME et entreprises en pleine croissance souhaitant développer leur visibilité en ligne, générer des leads qualifiés et augmenter leurs ventes grâce à une stratégie marketing performante et durable.",
  },
]

export const AccordionMultiple = () => {
  return (
    <Accordion
      type="multiple"
      className="space-y-4 "
      defaultValue={["faq1"]}
    >
      {items.map((item) => (
        <AccordionItem
          key={item.value}
          value={item.value}
          className="border border-white rounded-xl"
        >
          <AccordionTrigger className="space-y-4 border px-6 border-white bg-[#EBDCF8]">
            {item.trigger}
          </AccordionTrigger>
          <AccordionContent className="bg-white px-6 pt-6 text-gray-600 md:text-[14px] text-xs">
            {item.content}
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}