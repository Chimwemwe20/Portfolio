'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'

export function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-16 bg-background dark:bg-background">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.h1
            className="text-4xl sm:text-6xl font-bold mb-6 text-foreground dark:text-foreground"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            Hi, I'm <span className="text-primary dark:text-primary">Chimwemwe Sinkamba</span>
          </motion.h1>
          <motion.p
            className="text-xl sm:text-2xl text-muted-foreground dark:text-muted-foreground mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            
I am a versatile Software Engineer with a passion for web and mobile development, blockchain, machine learning, AI, and databases. I specialize in creating scalable, user-centric applications, and have expertise across the full development lifecycle, from ideation to deployment, using modern tools and technologies to deliver impactful solutions. 
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <Button asChild size="lg">
              <a href="#services">
                View My Services
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

