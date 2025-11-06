import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { FeatureCard } from "@/components/FeatureCard";
import { PricingCard } from "@/components/PricingCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { UseCaseCard } from "@/components/UseCaseCard";
import { StepCard } from "@/components/StepCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Bot, 
  Workflow, 
  Link2, 
  BarChart3, 
  Users, 
  Cloud,
  Hotel,
  Heart,
  ShoppingBag,
  GraduationCap,
  Building2,
  FileText,
  Play,
  MessageCircle
} from "lucide-react";
import heroImage from "@/assets/hero-chat.png";
import aiBrainImage from "@/assets/ai-brain.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 bg-gradient-hero">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in">
              <h1 className="text-5xl md:text-6xl font-bold mb-6 text-foreground leading-tight">
                Automate your business conversations with AI on WhatsApp
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                ChatServe helps businesses connect, automate, and grow using AI-driven WhatsApp experiences.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg">
                  Get Started
                </Button>
                <Button variant="outline" size="lg">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="animate-float">
              <img 
                src={heroImage} 
                alt="WhatsApp AI Chat Interface" 
                className="w-full max-w-lg mx-auto rounded-2xl shadow-hover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-4xl font-bold mb-6 text-foreground">What is ChatServe?</h2>
          <p className="text-xl text-muted-foreground leading-relaxed">
            ChatServe is an all-in-one WhatsApp Business Solution that enables automated conversations, 
            customer support, appointment booking, and more — all powered by AI.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Key Features</h2>
            <p className="text-xl text-muted-foreground">Everything you need to automate WhatsApp conversations</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <FeatureCard
              icon={Bot}
              title="AI Chat Layer"
              description="Understands and responds naturally like a human, providing seamless customer interactions."
            />
            <FeatureCard
              icon={Workflow}
              title="Automation Workflows"
              description="Create no-code flows for booking, support, and notifications effortlessly."
            />
            <FeatureCard
              icon={Link2}
              title="Integrations"
              description="Connect to CRM, PMS, ERP, or any software via API for unified operations."
            />
            <FeatureCard
              icon={BarChart3}
              title="Smart Analytics"
              description="Track engagement, conversions, and performance with detailed insights."
            />
            <FeatureCard
              icon={Users}
              title="Multi-Agent Chat"
              description="Manage human + AI hybrid chat handling for optimal customer experience."
            />
            <FeatureCard
              icon={Cloud}
              title="Cloud Hosted & Secure"
              description="Scalable and compliant architecture ensuring data security and reliability."
            />
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">How ChatServe Works</h2>
            <p className="text-xl text-muted-foreground">Get started in four simple steps</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            <StepCard
              number="1"
              title="Connect WhatsApp"
              description="Link your WhatsApp Business Account securely"
            />
            <StepCard
              number="2"
              title="Build Workflows"
              description="Create or import your automation workflows"
            />
            <StepCard
              number="3"
              title="Add AI Detection"
              description="Enable intelligent intent detection"
            />
            <StepCard
              number="4"
              title="Go Live"
              description="Engage customers automatically 24/7"
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Built for Every Industry</h2>
            <p className="text-xl text-muted-foreground">Trusted by businesses across sectors</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <UseCaseCard
              icon={Hotel}
              industry="Hotels"
              example="Automated bookings, guest messages, and feedback collection"
            />
            <UseCaseCard
              icon={Heart}
              industry="Healthcare"
              example="Appointment reminders and 24/7 patient support"
            />
            <UseCaseCard
              icon={ShoppingBag}
              industry="Retail"
              example="Order tracking, product updates, and exclusive offers"
            />
            <UseCaseCard
              icon={GraduationCap}
              industry="Education"
              example="Enquiry automation and admission management"
            />
            <UseCaseCard
              icon={Building2}
              industry="Real Estate"
              example="Lead generation and automated follow-up"
            />
            <UseCaseCard
              icon={FileText}
              industry="ERP/PMS"
              example="System integration via WhatsApp interface"
            />
          </div>
        </div>
      </section>

      {/* Integration Section */}
      <section className="py-20 px-4 bg-background">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl font-bold mb-4 text-foreground">Connect ChatServe with Your Favorite Tools</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-3xl mx-auto">
            Seamlessly integrate ChatServe with your CRM, ERP, or custom software through APIs and webhooks.
          </p>
          <div className="flex flex-wrap justify-center gap-8 items-center">
            {["Salesforce", "HubSpot", "Zoho", "Google Calendar", "Custom API"].map((integration) => (
              <div key={integration} className="px-8 py-4 bg-card border border-border rounded-lg shadow-card hover:shadow-hover transition-all duration-300">
                <span className="text-lg font-semibold text-foreground">{integration}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Power Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-float">
              <img 
                src={aiBrainImage} 
                alt="AI-Powered Intelligence" 
                className="w-full max-w-md mx-auto"
              />
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 text-foreground">Empowered by AI</h2>
              <ul className="space-y-4 text-lg text-muted-foreground">
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Bot className="w-4 h-4 text-primary" />
                  </div>
                  <span>Intent detection and smart auto-reply for instant responses</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <Workflow className="w-4 h-4 text-primary" />
                  </div>
                  <span>Intelligent workflow triggers based on customer behavior</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                    <BarChart3 className="w-4 h-4 text-primary" />
                  </div>
                  <span>Trained on your FAQs and product data for accurate responses</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 px-4 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Simple Pricing for Every Business</h2>
            <p className="text-xl text-muted-foreground">Choose the plan that fits your needs</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <PricingCard
              title="Starter"
              price="₹999"
              features={[
                "1,000 WhatsApp messages/month",
                "Basic AI automation",
                "Email support",
                "2 workflow automations",
                "Dashboard analytics"
              ]}
            />
            <PricingCard
              title="Professional"
              price="₹4,999"
              highlighted
              features={[
                "10,000 WhatsApp messages/month",
                "Advanced AI automation",
                "Priority support",
                "Unlimited workflow automations",
                "Advanced analytics & insights",
                "CRM integrations"
              ]}
            />
            <PricingCard
              title="Enterprise"
              price="Custom"
              features={[
                "Unlimited WhatsApp messages",
                "Custom AI training",
                "Dedicated account manager",
                "Custom integrations",
                "White-label options",
                "SLA guarantees"
              ]}
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-secondary">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-foreground">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground">Trusted by businesses worldwide</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <TestimonialCard
              name="Rajesh Kumar"
              company="Grand Plaza Hotels"
              role="Operations Manager"
              quote="ChatServe transformed our guest communication. We now handle 80% of inquiries automatically, and our team can focus on providing exceptional in-person service."
            />
            <TestimonialCard
              name="Priya Sharma"
              company="HealthCare Plus"
              role="Healthcare Administrator"
              quote="The appointment reminder system has reduced no-shows by 60%. Patients love the convenience of WhatsApp interactions."
            />
            <TestimonialCard
              name="Amit Patel"
              company="RetailPro Solutions"
              role="CEO"
              quote="Integration with our ERP was seamless. ChatServe has become an essential part of our customer engagement strategy."
            />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 bg-background">
        <div className="container mx-auto max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-foreground">Let's Build Your WhatsApp AI Experience</h2>
            <p className="text-xl text-muted-foreground">Get in touch for a personalized demo</p>
          </div>
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Your Name" className="h-12" />
              <Input placeholder="Email Address" type="email" className="h-12" />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Input placeholder="Company Name" className="h-12" />
              <Input placeholder="Phone Number" type="tel" className="h-12" />
            </div>
            <Textarea placeholder="Tell us about your requirements..." className="min-h-32" />
            <Button variant="hero" size="lg" className="w-full">
              Request a Demo
            </Button>
          </form>
          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat with us on WhatsApp
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;
