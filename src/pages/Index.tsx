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
  MessageCircle,
  ArrowRight,
  Zap
} from "lucide-react";
import heroImage from "@/assets/hero-chat.png";
import aiBrainImage from "@/assets/ai-brain.png";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-subtle" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="animate-fade-in space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-medium text-sm">
                <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
                WhatsApp Business Automation
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-tight bg-gradient-to-br from-foreground to-foreground/70 bg-clip-text">
                Automate your business conversations with AI on WhatsApp
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed">
                ChatServe helps businesses connect, automate, and grow using AI-driven WhatsApp experiences.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button size="lg" variant="hero" className="shadow-lg hover:shadow-glow text-lg px-8 py-6">
                  Get Started
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
                <Button size="lg" variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary/5 text-lg px-8 py-6">
                  <Play className="w-5 h-5 mr-2" />
                  Watch Demo
                </Button>
              </div>
            </div>
            <div className="animate-fade-in relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-20 blur-3xl animate-pulse" />
              <img
                src={heroImage}
                alt="WhatsApp AI Chat Interface"
                className="w-full h-auto rounded-3xl shadow-lg animate-float relative z-10"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto max-w-5xl text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
            About ChatServe
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">What is ChatServe?</h2>
          <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
            ChatServe is an all-in-one WhatsApp Business Solution that enables automated conversations, 
            customer support, appointment booking, and more — all powered by AI.
          </p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
              Features
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Key Features</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Everything you need to automate your WhatsApp Business</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* How It Works */}
      <section className="py-24 px-4 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
              How It Works
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">How ChatServe Works</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Get started in 4 simple steps</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
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
      <section className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
              Use Cases
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Built for Every Industry</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Trusted by businesses across sectors</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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

      {/* AI Power Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-background to-accent/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-transparent to-transparent" />
        <div className="container mx-auto max-w-7xl relative">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1 relative">
              <div className="absolute inset-0 bg-gradient-glow opacity-30 blur-3xl" />
              <img
                src={aiBrainImage}
                alt="AI Brain"
                className="w-full h-auto rounded-3xl shadow-lg relative z-10"
              />
            </div>
            <div className="order-1 lg:order-2 space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm">
                <Bot className="w-4 h-4" />
                AI Powered
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">Empowered by AI</h2>
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Bot className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Smart Intent Detection</h3>
                    <p className="text-muted-foreground">Automatically understand customer intent, trigger workflows, and provide instant auto-replies</p>
                  </div>
                </div>
                <div className="flex items-start gap-4 p-6 rounded-2xl bg-card border border-border/50 hover:shadow-md transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0">
                    <Zap className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">Trained on Your Data</h3>
                    <p className="text-muted-foreground">Customize AI responses by training on your FAQs, product catalogs, and business knowledge</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 px-4">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
              Pricing
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">Simple Pricing for Every Business</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Choose the plan that fits your needs</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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

      {/* Testimonials */}
      <section className="py-24 px-4 bg-gradient-to-b from-accent/20 to-background">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-20 space-y-4">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
              Testimonials
            </div>
            <h2 className="text-4xl md:text-5xl font-bold">What Our Customers Say</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">Trusted by businesses worldwide</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
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
      <section id="contact" className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-background to-primary/5" />
        <div className="container mx-auto max-w-3xl text-center relative space-y-8">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary font-semibold text-sm mb-4">
            Get Started
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">Let's Build Your WhatsApp AI Experience</h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed">
            Get in touch with our team to see how ChatServe can transform your business communications
          </p>
          <div className="flex flex-wrap gap-4 justify-center pt-4">
            <Button size="lg" variant="hero" className="shadow-lg hover:shadow-glow text-lg px-8 py-6">
              <MessageCircle className="w-5 h-5 mr-2" />
              Chat on WhatsApp
            </Button>
            <Button size="lg" variant="outline" className="border-2 border-primary/30 text-primary hover:bg-primary/5 text-lg px-8 py-6">
              Request a Demo
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;