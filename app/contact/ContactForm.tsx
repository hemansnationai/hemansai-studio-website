"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { motion } from "framer-motion";
import { postToDiscordWebhook } from "@/lib/discord";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
  });
  const [file, setFile] = useState<File | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  // const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, countryCode: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const selectedFile = e.target.files[0];
      if (selectedFile.size > 2 * 1024 * 1024) {
        // toast({
        //   title: "File too large",
        //   description: "Please select a file smaller than 2MB.",
        //   variant: "destructive",
        // });
        return;
      }
      setFile(selectedFile);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await postToDiscordWebhook("https://discord.com/api/webhooks/1324037343065276556/xlz9GX-Wli49iAxLt-UszAXUjh8zGMd7XHBPP9BeP35xHFxWpDcS0T_PS9k5CP4H8FtO", formData);
      setFile(null);
    } catch (error) {
      // toast({
    //   title: "Error submitting form",
      //   description: "Please try again later.",
      //   variant: "destructive",
      // });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section className="py-24 bg-white text-black justify-start" id="contacts">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <h2 className="text-4xl font-bold text-left mb-8">Want to Connect with us</h2>
          <p className="text-left mb-12 text-xl w-3/4">Want to Connect with us</p>
          <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 bg-white p-8 rounded-lg shadow-lg">
            <Input
              name="fullName"
              placeholder="Full Name"
              required
              className="bg-gray-50"
              value={formData.fullName}
              onChange={handleInputChange}
            />
            <Input
              name="companyName"
              placeholder="Company Name"
              required
              className="bg-gray-50"
              value={formData.companyName}
              onChange={handleInputChange}
            />
            <Input
              name="email"
              type="email"
              placeholder="Business Email"
              required
              className="bg-gray-50"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="flex space-x-4">
              <Select onValueChange={handleSelectChange} value={formData.countryCode}>
                <SelectTrigger className="w-[180px] bg-gray-50">
                  <SelectValue placeholder="Country Code" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="+1">+1 (US)</SelectItem>
                  <SelectItem value="+91">+91 (IN)</SelectItem>
                  <SelectItem value="+44">+44 (UK)</SelectItem>
                  <SelectItem value="+61">+61 (AU)</SelectItem>
                  <SelectItem value="+81">+81 (JP)</SelectItem>
                  <SelectItem value="+49">+49 (DE)</SelectItem>
                  <SelectItem value="+33">+33 (FR)</SelectItem>
                  <SelectItem value="+39">+39 (IT)</SelectItem>
                  <SelectItem value="+86">+86 (CN)</SelectItem>
                  <SelectItem value="+7">+7 (RU)</SelectItem>
                  <SelectItem value="+55">+55 (BR)</SelectItem>
                  <SelectItem value="+27">+27 (ZA)</SelectItem>
                  <SelectItem value="+34">+34 (ES)</SelectItem>
                  <SelectItem value="+1-242">+1-242 (BS)</SelectItem>
                  <SelectItem value="+1-246">+1-246 (BB)</SelectItem>
                  <SelectItem value="+1-441">+1-441 (BM)</SelectItem>
                  <SelectItem value="+1-284">+1-284 (VG)</SelectItem>
                  <SelectItem value="+1-345">+1-345 (KY)</SelectItem>
                  <SelectItem value="+1-767">+1-767 (DM)</SelectItem>
                  <SelectItem value="+1-473">+1-473 (GD)</SelectItem>
                  <SelectItem value="+1-876">+1-876 (JM)</SelectItem>
                  <SelectItem value="+1-664">+1-664 (MS)</SelectItem>
                  <SelectItem value="+1-869">+1-869 (KN)</SelectItem>
                  <SelectItem value="+1-758">+1-758 (LC)</SelectItem>
                  <SelectItem value="+1-784">+1-784 (VC)</SelectItem>
                  <SelectItem value="+1-868">+1-868 (TT)</SelectItem>
                  <SelectItem value="+1-649">+1-649 (TC)</SelectItem>
                  <SelectItem value="+1-784">+1-784 (VC)</SelectItem>
                  <SelectItem value="+1-868">+1-868 (TT)</SelectItem>
                  <SelectItem value="+1-649">+1-649 (TC)</SelectItem>
                  <SelectItem value="+1-784">+1-784 (VC)</SelectItem>
                  <SelectItem value="+1-868">+1-868 (TT)</SelectItem>
                  <SelectItem value="+1-649">+1-649 (TC)</SelectItem>
                </SelectContent>
              </Select>
              <Input
                name="phoneNumber"
                type="tel"
                placeholder="Phone Number"
                required
                className="flex-1 bg-gray-50"
                value={formData.phoneNumber}
                onChange={handleInputChange}
              />
            </div>
            <Textarea
              name="message"
              placeholder="How can we help you? Describe your project or challenge."
              required
              className="bg-gray-50"
              value={formData.message}
              onChange={handleInputChange}
            />
            <p className="text-sm text-gray-500">Max file size: 2MB. Allowed file formats: doc, docx, xls, xlsx, pdf, jpg, png.</p>
            <Button
              variant="default"
              type="submit"
              className="w-full"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : "Request a Brainstorm"}
            </Button>
            <p className="text-sm text-gray-500 text-center">
              By clicking "Request a Brainstorm", you agree to our Terms of Use and Privacy Policy.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
