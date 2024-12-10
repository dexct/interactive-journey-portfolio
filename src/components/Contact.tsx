import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Pour cette V1, on simule l'envoi
    toast({
      title: "Message envoyé !",
      description: "Je vous répondrai dans les plus brefs délais.",
    });
    
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section id="contact" className="section-padding">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="flex items-center justify-center text-2xl md:text-3xl font-bold text-lightest-slate mb-12">
          <span className="font-mono text-green text-xl mr-2">03.</span>
          Contact
        </h2>

        <p className="text-light-slate mb-12">
          Je suis actuellement à la recherche de nouvelles opportunités. Que vous
          ayez une question ou simplement envie de dire bonjour, je ferai de mon
          mieux pour vous répondre !
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          <Input
            type="text"
            placeholder="Nom"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="bg-navy-light border-navy-lighter text-light-slate"
          />
          <Input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="bg-navy-light border-navy-lighter text-light-slate"
          />
          <Textarea
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="bg-navy-light border-navy-lighter text-light-slate min-h-[200px]"
          />
          <Button
            type="submit"
            className="bg-transparent border-2 border-green text-green hover:bg-green/10 px-8 py-6 text-lg"
          >
            Envoyer
          </Button>
        </form>
      </div>
    </section>
  );
};

export default Contact;