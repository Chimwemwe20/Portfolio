'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Code, Paintbrush, Database, Cpu, Smartphone, Blocks } from 'lucide-react'

const services = [
    { name: 'Web App Development', icon: Code, description: 'Building responsive and scalable web applications' },
    { name: 'UI/UX Design', icon: Paintbrush, description: 'Creating intuitive and visually appealing user interfaces' },
    { name: 'Blockchain Development', icon: Blocks, description: 'Developing decentralized applications and smart contracts' },
    { name: 'Machine Learning & AI', icon: Cpu, description: 'Implementing intelligent solutions using ML and AI' },
    { name: 'Mobile App Development', icon: Smartphone, description: 'Crafting native and cross-platform mobile applications' },
    { name: 'Database Management', icon: Database, description: 'Designing and optimizing database systems' },
  ]
  
  export function Services() {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true })
  
    return (
      <section id="services" className="py-16 bg-muted/50 dark:bg-muted/20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-center mb-12">My Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <motion.div
                  key={service.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <service.icon className="h-5 w-5 text-primary" />
                        {service.name}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>{service.description}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    )
  }