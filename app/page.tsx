'use client'

import Link from 'next/link'
import { Trophy, Users, Calendar, MapPin, Play, ArrowRight, CheckCircle } from 'lucide-react'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { motion } from 'framer-motion'
import Lenis from 'lenis'
import AnimatedCounter from '@/components/AnimatedCounter'
import ParallaxCard from '@/components/TiltCard'
import ScrollParallax from '@/components/ScrollParallax'
import Reveal from '@/components/Reveal'

gsap.registerPlugin(ScrollTrigger)

export default function Home() {
  const heroRef = useRef(null)
  const statsRef = useRef(null)
  const cardsRef = useRef(null)
  const featuresRef = useRef(null)
  const ctaRef = useRef(null)

  useEffect(() => {
    // Initialize Lenis smooth scrolling
    const lenis = new Lenis({
      duration: 2.5,
      easing: (t) => 1 - Math.pow(1 - t, 4),
      smoothWheel: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 1.5,
      infinite: false,
      normalizeWheel: true,
    })

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update)

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000)
    })

    gsap.ticker.lagSmoothing(0)

    const ctx = gsap.context(() => {
      // Hero animations
      gsap.fromTo('.hero-badge', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }
      )
      
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: 'power3.out' }
      )
      
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.4, ease: 'power3.out' }
      )
      
      gsap.fromTo('.hero-buttons', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: 'power3.out' }
      )

      // Stats animation
      gsap.fromTo('.stat-item',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: statsRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Registration cards animation
      gsap.fromTo('.reg-card',
        { opacity: 0, y: 80, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: cardsRef.current,
            start: 'top 70%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // Features animation
      gsap.fromTo('.feature-item',
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.15,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: featuresRef.current,
            start: 'top 75%',
            toggleActions: 'play none none reverse'
          }
        }
      )

      // CTA animation
      gsap.fromTo('.cta-content',
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: ctaRef.current,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        }
      )
    })

    return () => {
      ctx.revert()
      lenis.destroy()
      gsap.ticker.remove((time) => {
        lenis.raf(time * 1000)
      })
    }
  }, [])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section ref={heroRef} className="relative bg-white overflow-hidden pt-24">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-100"></div>
        
        <div className="relative container mx-auto px-4 py-24">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div 
              className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Trophy className="w-4 h-4 mr-2" />
              Uttar Pradesh's Premier Cricket Tournament
            </motion.div>
            
            <motion.h1 
              className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
            >
              <motion.span
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                Saroj Premier League
              </motion.span>
              <motion.span 
                className="block text-blue-600"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                Under-19
              </motion.span>
            </motion.h1>
            
            <motion.p 
              className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
            >
              Where young cricket talents shine and dreams become reality. Join the most prestigious tournament for Class 12 students.
            </motion.p>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
            >
              <Link href="/register" className="inline-flex items-center bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-colors shadow-lg">
                Register Now
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
              <Link href="/about" className="inline-flex items-center border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-lg text-lg font-semibold hover:border-gray-400 transition-colors">
                <Play className="w-5 h-5 mr-2" />
                Watch Highlights
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <ScrollParallax speed={0.3}>
        <section ref={statsRef} className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid md:grid-cols-4 gap-8">
              <Reveal delay={0.1}>
                <div className="stat-item text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value="11L" />
                  </div>
                  <div className="text-gray-600">Prize Money</div>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="stat-item text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value="50%" />
                  </div>
                  <div className="text-gray-600">Scholarship</div>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="stat-item text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value="30" />
                  </div>
                  <div className="text-gray-600">Days Tournament</div>
                </div>
              </Reveal>
              <Reveal delay={0.4}>
                <div className="stat-item text-center">
                  <div className="text-4xl font-bold text-blue-600 mb-2">
                    <AnimatedCounter value="1000+" />
                  </div>
                  <div className="text-gray-600">Participants</div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </ScrollParallax>

      {/* Registration Options */}
      <section ref={cardsRef} className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold text-gray-900 mb-4">Choose Your Registration</h2>
              <p className="text-xl text-gray-600">Two pathways to join the championship</p>
            </div>
          </Reveal>
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Team Registration */}
            <Reveal direction="left" delay={0.2}>
              <ParallaxCard index={0} className="reg-card bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-blue-100 p-3 rounded-lg mr-4">
                    <Users className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Team Registration</h3>
                    <p className="text-gray-600">Complete squad ready</p>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Up to 15 players</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Coach & Manager details</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Direct tournament entry</span>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Registration Fee</span>
                    <span className="text-3xl font-bold text-gray-900">₹11,000</span>
                  </div>
                  <Link href="/register?type=team" className="block w-full bg-blue-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors">
                    Register Team
                  </Link>
                </div>
              </ParallaxCard>
            </Reveal>

            {/* Individual Registration */}
            <Reveal direction="right" delay={0.4}>
              <ParallaxCard index={1} className="reg-card bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-shadow">
                <div className="flex items-center mb-6">
                  <div className="bg-green-100 p-3 rounded-lg mr-4">
                    <Trophy className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900">Individual Registration</h3>
                    <p className="text-gray-600">Join a district team</p>
                  </div>
                </div>
                <div className="space-y-3 mb-8">
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Individual player profile</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">District-wise team formation</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-5 h-5 text-green-500 mr-3" />
                    <span className="text-gray-700">Equal opportunity</span>
                  </div>
                </div>
                <div className="border-t pt-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-gray-600">Registration Fee</span>
                    <span className="text-3xl font-bold text-gray-900">₹1,000</span>
                  </div>
                  <Link href="/register?type=individual" className="block w-full bg-green-600 text-white text-center py-3 rounded-lg font-semibold hover:bg-green-700 transition-colors">
                    Register Individual
                  </Link>
                </div>
              </ParallaxCard>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Tournament Features */}
      <ScrollParallax speed={0.4}>
        <section ref={featuresRef} className="py-20 bg-gray-50">
          <div className="container mx-auto px-4">
            <Reveal>
              <div className="text-center mb-16">
                <h2 className="text-4xl font-bold text-gray-900 mb-4">Why Choose SPL?</h2>
                <p className="text-xl text-gray-600">Experience the difference</p>
              </div>
            </Reveal>
            <div className="grid md:grid-cols-3 gap-8">
              <Reveal delay={0.1}>
                <div className="feature-item text-center">
                  <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Trophy className="w-8 h-8 text-blue-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Professional Standards</h3>
                  <p className="text-gray-600">International-level tournament organization with professional umpires and facilities.</p>
                </div>
              </Reveal>
              <Reveal delay={0.2}>
                <div className="feature-item text-center">
                  <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Users className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Talent Recognition</h3>
                  <p className="text-gray-600">Scouts from major cricket academies and state teams attend to identify promising talent.</p>
                </div>
              </Reveal>
              <Reveal delay={0.3}>
                <div className="feature-item text-center">
                  <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                    <Calendar className="w-8 h-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">Educational Support</h3>
                  <p className="text-gray-600">50% scholarship for all participants to support their academic journey.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </section>
      </ScrollParallax>

      {/* CTA Section */}
      <ScrollParallax speed={0.6}>
        <section ref={ctaRef} className="py-20 bg-blue-600">
          <div className="container mx-auto px-4 text-center">
            <div className="cta-content">
              <h2 className="text-4xl font-bold text-white mb-6">Ready to Begin Your Journey?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Join hundreds of talented cricketers in Uttar Pradesh's most prestigious tournament.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/register" className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-gray-50 transition-colors">
                  Start Registration
                </Link>
                <Link href="/tournament-format" className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
                  View Tournament Details
                </Link>
              </div>
            </div>
          </div>
        </section>
      </ScrollParallax>

      {/* Key Highlights */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tournament Highlights</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="card text-center">
              <Trophy className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">₹11,00,000</h3>
              <p className="text-gray-600">Winner Prize Money</p>
            </div>
            <div className="card text-center">
              <Users className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">50% Scholarship</h3>
              <p className="text-gray-600">For All Players</p>
            </div>
            <div className="card text-center">
              <Calendar className="w-12 h-12 text-primary-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">1 Month</h3>
              <p className="text-gray-600">Tournament Duration</p>
            </div>
            <div className="card text-center">
              <MapPin className="w-12 h-12 text-gold-500 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Ekana Stadium</h3>
              <p className="text-gray-600">Final Venue</p>
            </div>
          </div>
        </div>
      </section>

      {/* Registration Types */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">How to Register</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-primary-600">Team Registration</h3>
              <p className="text-gray-600 mb-4">Already have a team? Register directly with your complete squad.</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Up to 15 players</li>
                <li>• Coach & Manager details</li>
                <li>• Registration fee: ₹11,000</li>
              </ul>
              <Link href="/register?type=team" className="btn-primary">
                Register Team
              </Link>
            </div>
            <div className="card">
              <h3 className="text-xl font-semibold mb-4 text-gold-600">Individual Registration</h3>
              <p className="text-gray-600 mb-4">Don't have a team? Register individually and we'll assign you to a district team.</p>
              <ul className="text-sm text-gray-600 mb-6 space-y-2">
                <li>• Individual player profile</li>
                <li>• District-wise team formation</li>
                <li>• Registration fee: ₹1,000</li>
              </ul>
              <Link href="/register?type=individual" className="btn-gold">
                Register Individual
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Quick Links</h2>
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link href="/tournament-format" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Tournament Format</h3>
              <p className="text-gray-600">Learn about the tournament structure and format</p>
            </Link>
            <Link href="/eligibility" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">Eligibility & Rules</h3>
              <p className="text-gray-600">Check eligibility criteria and tournament rules</p>
            </Link>
            <Link href="/schedule" className="card hover:shadow-xl transition-shadow">
              <h3 className="text-lg font-semibold mb-2">District Schedule</h3>
              <p className="text-gray-600">View district-wise match schedules</p>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}