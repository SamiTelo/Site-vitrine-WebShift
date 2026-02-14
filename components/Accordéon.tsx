import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const items = [
  {
    value: "faq1",
    trigger: "What Medical Services Do You Provide?",
    content:
      "Manage how you receive notifications. You can enable email alerts for updates or push notifications for mobile devices. alerts for updates or push notifications for mobile devices.alerts for updates or push notifications for mobile devices.alerts for updates or push notifications for mobile devices.",
  },
  {
    value: "faq2",
    trigger: "What is your customer geography?",
    content:
      "Control your privacy settings and security preferences. Enable two-factor authentication, manage connected devices, review active sessions, and configure data sharing preferences. You can also download your data or delete your account.",
  },
  {
    value: "faq3",
    trigger: "What are the main industries we serve?",
    content:
      "View your current plan, payment history, and upcoming invoices. Update your payment method, change your subscription tier, or cancel your subscription.",
  },
]

export function AccordionMultiple() {
  return (
    <Accordion
      type="multiple"
      className="space-y-4 "
      defaultValue={["faq1"]}
    >
      {items.map((item) => (
        <AccordionItem key={item.value} value={item.value} className="border border-white rounded-xl">
          <AccordionTrigger className="space-y-4 border px-6 border-white bg-[#EBDCF8]">{item.trigger}</AccordionTrigger>
          <AccordionContent className="bg-white px-6 pt-6 text-gray-600 md:text-[14px] text-xs">{item.content}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
