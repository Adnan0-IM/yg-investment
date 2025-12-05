import { ContactCard } from "@/components/contact-card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { MailIcon, MapPinIcon, PhoneIcon } from "lucide-react";
import { useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { viewport } from "@/lib/motion";

const APPS_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycby0OR42lp9VLkxFQXJ2vbo0fY6kKoyPb1S10HF9U0MyVqLAc4cxmj3zeWDRh5ydpn3-/exec";

export default function Contact() {
  const [submitting, setSubmitting] = useState(false);
  const [status, setStatus] = useState<null | {
    type: "success" | "error";
    message: string;
  }>(null);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget; 
    setSubmitting(true);
    setStatus(null);

    const formData = new FormData(form);
    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const res = await axios.post(
        APPS_SCRIPT_URL,
        new URLSearchParams(payload), 
        {
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
        }
      );
      if (!res) throw new Error(`Submit failed`);
      setStatus({
        type: "success",
        message: "Thanks! Your message has been sent.",
      });
      form.reset(); 
    } catch (err: unknown) {
      setStatus({
        type: "error",
        message: (err as Error).message || "Submission failed",
      });
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="relative flex min-h-screen w-full items-center justify-center p-4">
      <div className="mx-auto w-full max-w-5xl py-12">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={viewport} transition={{ duration: 0.5 }}>
          <ContactCard
            title="Get in touch"
            description="If you have any questions regarding our services or need assistance, please fill out the form. We typically respond within 1 business day."
            contactInfo={[
              {
                icon: MailIcon,
                label: "Email",
                value: (
                  <a
                    href="mailto:yusufgambohamza@gmail.com"
                    className="hover:text-primary"
                  >
                    yusufgambohamza@gmail.com
                  </a>
                ),
              },
              {
                icon: PhoneIcon,
                label: "Phone",
                value: (
                  <div className="space-y-1">
                    <a href="tel:+2347070682920" className="hover:text-primary">
                      +234 707 068 2920
                    </a>
                    <br />
                    <a href="tel:+919358910362" className="hover:text-primary">
                      +91 93589 10362
                    </a>
                  </div>
                ),
              },
              {
                icon: MapPinIcon,
                label: "Office Address",
                value:
                  "No A2-47 Unity Road, Gidan Adawiyya, opposite Rahama Hausa, Kwari Market, Kano",
                span: true,
              },
            ]}
          >
            <form className="w-full space-y-4" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <div className="flex flex-col gap-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="Your name"
                    required
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="name@example.com"
                    required
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <Label htmlFor="phone">Phone</Label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    placeholder="+234..."
                  />
                </div>
                <div className="md:col-span-2 flex flex-col gap-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Tell us how we can help..."
                    className="min-h-32"
                    required
                  />
                </div>
              </div>

              <div className="flex flex-col md:flex-row items-center gap-3">
                <Button
                  className="w-full md:w-auto"
                  type="submit"
                  disabled={submitting}
                >
                  {submitting ? "Sending..." : "Submit"}
                </Button>
                {status && (
                  <span
                    role="status"
                    className={`text-sm ${
                      status.type === "success"
                        ? "text-green-600"
                        : "text-red-600"
                    }`}
                  >
                    {status.message}
                  </span>
                )}
              </div>
            </form>
          </ContactCard>
        </motion.div>

        {/* Map embed */}
        <motion.div
          className="mt-8 overflow-hidden rounded-lg border"
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewport}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <div className="h-[350px] w-full md:h-[450px]">
            <iframe
              title="YG Global Office Location"
              aria-label="Map showing YG Global office location in Kano"
              className="h-full w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=No%20A2-47%20Unity%20Road%2C%20Gidan%20Adawiyya%2C%20opposite%20Rahama%20Hausa%2C%20Kwari%20Market%2C%20Kano&output=embed"
            />
          </div>
          <div className="bg-muted/40 p-3 text-center text-sm">
            <a
              className="hover:text-primary"
              href="https://www.google.com/maps/search/?api=1&query=No%20A2-47%20Unity%20Road%2C%20Gidan%20Adawiyya%2C%20opposite%20Rahama%20Hausa%2C%20Kwari%20Market%2C%20Kano"
              target="_blank"
              rel="noopener noreferrer"
            >
              Open in Google Maps
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
