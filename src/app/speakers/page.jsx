import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

export default function SpeakersPage() {
  // Sample speakers data
  const speakers = [
    {
      name: "Alex Johnson",
      title: "Chief Security Officer, TechGuard",
      bio: "Alex has over 15 years of experience in cybersecurity and specializes in threat intelligence.",
      topic: "The Evolution of Cyber Threats in 2025",
    },
    {
      name: "Sam Rivera",
      title: "Security Researcher, DefendLabs",
      bio: "Sam is a renowned security researcher who has discovered multiple zero-day vulnerabilities.",
      topic: "Practical Approaches to Vulnerability Research",
    },
    {
      name: "Jordan Lee",
      title: "Cloud Security Architect, CloudShield",
      bio: "Jordan helps organizations secure their cloud infrastructure and implement zero-trust architectures.",
      topic: "Securing Multi-Cloud Environments",
    },
    {
      name: "Taylor Morgan",
      title: "Director of Security Engineering, SecureTech",
      bio: "Taylor leads a team of security engineers focused on building secure systems from the ground up.",
      topic: "Security by Design: Building Resilient Systems",
    },
    {
      name: "Casey Zhang",
      title: "Penetration Tester, HackSecure",
      bio: "Casey specializes in red team operations and has helped secure numerous Fortune 500 companies.",
      topic: "Advanced Penetration Testing Techniques",
    },
    {
      name: "Riley Patel",
      title: "Security Automation Expert, AutoDefend",
      bio: "Riley is passionate about using automation to scale security operations and reduce human error.",
      topic: "Automating Security: From Detection to Response",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-12">
      <h1 className="text-3xl font-bold mb-8 text-center">Conference Speakers</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {speakers.map((speaker, index) => (
          <Card key={index}>
            <CardHeader>
              <div className="w-20 h-20 bg-purple-100 rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-purple-700 font-bold text-xl">
                  {speaker.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </span>
              </div>
              <CardTitle className="text-center">{speaker.name}</CardTitle>
              <CardDescription className="text-center">{speaker.title}</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-gray-700 mb-4">{speaker.bio}</p>
              <div className="bg-purple-50 p-3 rounded-md">
                <p className="text-sm font-medium text-purple-800">Speaking on: {speaker.topic}</p>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}