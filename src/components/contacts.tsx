'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Button } from '@/components/ui/button'
import { Linkedin, Github, Mail, Phone } from 'lucide-react'

const contactItems = [
  { name: 'LinkedIn', icon: Linkedin, href: 'https://www.linkedin.com/in/chimwemwe-sinkamba-681300261/' },
  { name: 'GitHub', icon: Github, href: 'https://github.com/Chimwemwe20' },
  { name: 'Email', icon: Mail, href: 'mailto:csinkamba15@gmail.com' },
  { name: 'WhatsApp', icon: Phone, href: 'https://wa.me/+260765811281' },
]

export function Contacts() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <section id="contact" className="py-16 bg-background dark:bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-center mb-12 text-foreground dark:text-foreground">Get in Touch</h2>
          <div className="flex flex-wrap justify-center gap-4">
            {contactItems.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant="outline"
                  size="lg"
                  asChild
                  className="flex items-center gap-2"
                >
                  <a
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={item.name}
                  >
                    <item.icon className="h-5 w-5" />
                    <span>{item.name}</span>
                  </a>
                </Button>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}

