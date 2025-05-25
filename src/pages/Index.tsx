
import { ArrowRight, Mail, Linkedin, Github, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const skills = [
    "Product Strategy", "User Research", "Data Analysis", "Agile/Scrum",
    "Cross-functional Leadership", "Market Research", "Product Roadmapping",
    "Stakeholder Management", "A/B Testing", "User Experience Design"
  ];

  const achievements = [
    {
      title: "Led Product Launch",
      description: "Successfully launched a flagship product feature that increased user engagement by 40%",
      year: "2024"
    },
    {
      title: "Team Leadership",
      description: "Managed cross-functional teams of 15+ engineers, designers, and analysts",
      year: "2023"
    },
    {
      title: "Revenue Impact",
      description: "Drove product initiatives that contributed to $10M+ in annual revenue growth",
      year: "2023"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Your Name
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#about" className="text-gray-600 hover:text-blue-600 transition-colors">About</a>
              <a href="#experience" className="text-gray-600 hover:text-blue-600 transition-colors">Experience</a>
              <a href="#skills" className="text-gray-600 hover:text-blue-600 transition-colors">Skills</a>
              <a href="#contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact</a>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-20 pb-32 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="outline" className="bg-blue-100 text-blue-700 border-blue-200">
                  Product Manager at Microsoft
                </Badge>
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Building products that 
                  <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent"> transform</span> experiences
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Passionate about creating user-centered products that solve real problems. 
                  I bridge the gap between technology and human needs, turning complex challenges into elegant solutions.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button size="lg" variant="outline" className="border-gray-300 hover:bg-gray-50">
                  <Mail className="mr-2 h-4 w-4" />
                  Get in Touch
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="w-full h-96 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-2xl shadow-2xl flex items-center justify-center">
                <User className="h-32 w-32 text-white/80" />
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-yellow-400 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-2xl">👋</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <p className="text-xl text-gray-600">
              A product leader with a passion for innovation and user experience
            </p>
          </div>
          
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="text-center leading-relaxed">
              As a Product Manager at Microsoft, I specialize in transforming complex technical capabilities 
              into intuitive user experiences. With a background in both technology and business strategy, 
              I excel at identifying market opportunities and leading cross-functional teams to deliver 
              impactful products.
            </p>
            <p className="text-center leading-relaxed mt-6">
              I believe in data-driven decision making, user-centered design, and the power of collaboration 
              to create products that not only meet business objectives but genuinely improve people's lives.
            </p>
          </div>
        </div>
      </section>

      {/* Experience/Achievements Section */}
      <section id="experience" className="py-20 px-6 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Key Achievements</h2>
            <p className="text-xl text-gray-600">
              Highlights from my journey as a product leader
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow duration-300">
                <CardContent className="p-6">
                  <div className="text-sm text-blue-600 font-semibold mb-2">{achievement.year}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Skills & Expertise</h2>
            <p className="text-xl text-gray-600">
              Core competencies that drive product success
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3">
            {skills.map((skill, index) => (
              <Badge 
                key={index} 
                variant="secondary" 
                className="px-4 py-2 text-sm bg-blue-100 text-blue-800 hover:bg-blue-200 transition-colors cursor-default"
              >
                {skill}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
          <p className="text-xl text-blue-100 mb-12">
            I'm always interested in discussing product strategy, innovation, and new opportunities
          </p>
          
          <div className="flex justify-center space-x-6 mb-12">
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Mail className="mr-2 h-5 w-5" />
              Email Me
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Linkedin className="mr-2 h-5 w-5" />
              LinkedIn
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 border-white/20 text-white hover:bg-white/20">
              <Github className="mr-2 h-5 w-5" />
              GitHub
            </Button>
          </div>
          
          <p className="text-blue-200 text-sm">
            © 2024 Your Name. Product Manager at Microsoft.
          </p>
        </div>
      </section>
    </div>
  );
};

export default Index;
