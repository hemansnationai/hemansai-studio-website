"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { motion } from "framer-motion"
import { postToDiscordWebhook } from "@/lib/discord"
import { toast } from "react-toastify"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    countryCode: "",
    phoneNumber: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, countryCode: value }))
  }

  const clearFormData = () => {
    setFormData({
      fullName: "",
      companyName: "",
      email: "",
      countryCode: "",
      phoneNumber: "",
      message: "",
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      await postToDiscordWebhook(
        "https://discord.com/api/webhooks/1324037343065276556/xlz9GX-Wli49iAxLt-UszAXUjh8zGMd7XHBPP9BeP35xHFxWpDcS0T_PS9k5CP4H8FtO",
        formData,
      )
      toast.success("Thank you for submitting the form, we will get back to you shortly")
      clearFormData()
      setIsSubmitted(true)
    } catch (error) {
      toast.error("Error submitting form")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section className="py-24 bg-white text-black justify-start" id="contacts">
      <div className="container mx-auto">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} className="w-fit mx-auto">
          <h2 className="text-4xl font-bold text-left mb-8">Let&apos;s Build Together</h2>
          <p className="text-left mb-12 text-xl w-3/4">Our team will reach out to you in 24 Hours.</p>

          {isSubmitted ? (
            <ThankYouMessage />
          ) : (
            <form onSubmit={handleSubmit} className="max-w-2xl space-y-6 bg-white py-8">
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
                    {/* Add more country codes as needed */}
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
              <Button variant="default" type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Submitting..." : "Request a Brainstorm"}
              </Button>
              <p className="text-sm text-gray-500 text-center">
                By clicking Request a Brainstorm, you agree to our Terms of Use and Privacy Policy. <br />
                Or you can directly reach out here: contact@hemansai.com 
              </p>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  )
}

function ThankYouMessage() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="max-w-2xl mx-auto text-center p-8 bg-white rounded-lg shadow-lg"
    >
      <h3 className="text-2xl font-bold mb-4">Thank You for Your Submission!</h3>
      <p className="text-lg mb-6">
        We appreciate your interest. Our team will review your request and get back to you within 24 hours.
      </p>
      <p className="text-md text-gray-600">
        If you have any urgent questions, please don&apos;t hesitate to contact us via <a href="mailto:connect@himanshuramchandani.co">email</a>
      </p>
    </motion.div>
  )
}
