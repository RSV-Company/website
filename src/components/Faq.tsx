'use client'

import React, { useEffect, useState } from 'react'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { supabase } from '@/config/client'

const Faq = () => {
  const [faqs, setFaqs] = useState<any>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchFaqs = async () => {
      const { data, error } = await supabase
        .from('faqs')
        .select('id, question, answer')
        .eq('is_active', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching FAQs:', error)
      } else {
        setFaqs(data)
      }

      setLoading(false)
    }

    fetchFaqs()
  }, [])

  return (
    <main className="max-w-4xl min-h-[70vh] mx-auto px-4 py-16">
      <h1 className="text-3xl font-semibold mb-8 text-center">
        Frequently Asked Questions
      </h1>

      {loading ? (
        <p className="text-center">Loading...</p>
      ) : (
        <Accordion type="single" collapsible className="w-full space-y-4">
          {faqs.map((faq: any) => (
            <AccordionItem key={faq.id} value={faq.id}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      )}
    </main>
  )
}

export default Faq
